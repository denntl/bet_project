import React from 'react';
import Footer from "../../footer";
import SideBarGames from "./partials/sideBarGames";
import FootballTime from "../../helpers/match_time/footballTime";
import ManagMatch from "./partials/managMatch";
import ImportantNote from "./partials/importantNote";
import SportsInfoSideBar from "./partials/pop_up/sportsInfoSideBar";
import ChooseMarket from "../../shared/modal/choose_market";
import BetBuilder from "../sports/partials/soccer/betBuilder";
import AlertsEventViews from "./alerts_event_view";
import qs from "query-string";
import BasketballTime from "../../helpers/match_time/basketballTime";

class EventViews extends React.Component {

    constructor(props) {
        super(props);
        let livescore = this.props.event['Livescore'] != null &&
        typeof this.props.event['Livescore'] != 'undefined' &&
        typeof this.props.event['Livescore'] != 'undefined' ?
            this.props.event['Livescore']: null;
        this.state = {
            event: this.props.event,
            allSports:this.props.allSports,
            sports:this.props.sports,
            allEvents: {},
            selectShotLeftBarId: "",
            setIntervalCount: 0,
            leftSideBar:true,
            navMarket:"markets",
            builder_work: false,
            chooseMarket:false,
            liveMatchSubMenu: false,
            league_table:false,
            quickBetEnabled:this.props.quickBetEnabled,
            summaryListGame:false,
            eventIcon:"",
            localAlerts:this.props.localAlerts,
            eventIconImg:"",
            selectedQuickBetId:this.props.selectedQuickBetId,
            defaultEvent:this.props.defaultEavent,
            stretch:this.props.stretch
        };

        this.state.eventStatistic = livescore === null ?
            typeof this.props.event.Fixture  != "undefined" && typeof this.props.event.Fixture.Sport.Id != "undefined" ?
                this.getEventStatistic(this.props.event.Fixture.Sport.Id, livescore) :
                this.getSoccerEventStatistic(null) :
            this.getEventStatistic(this.props.event.Fixture.Sport.Id, livescore);

        this.handleOutsideClick = this.handleOutsideClick.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.props.changeContent("event_view");
    }
    getEventStatistic = (sportId, livescore, FixtureId) => {
        if(sportId == 54094){
            return this.getTennisEventStatistic(livescore, FixtureId);
        } else if(sportId == 48242){
            return this.getBasketballEventStatistic(livescore, FixtureId);
        } else if(sportId == 154830){
            return this.getVolleyballEventStatistic(livescore, FixtureId);
        }else if(sportId == 35709){
            return this.getHandBallEventStatistic(livescore, FixtureId);
        } else{
            return this.getSoccerEventStatistic(livescore, FixtureId);
        }
    }

    getTennisEventStatistic = (livescore) => {
        let eventStatistic = {
            firstSet: [{Value:""}, {Value:""}],
            secondSet: [{Value:""}, {Value:""}],
            thirdSet: [{Value:""}, {Value:""}],
            fourthSet: [{Value:""}, {Value:""}],
            fifthSet: [{Value:""}, {Value:""}],
            sets: [{Value:0}, {Value:0}],
            points: [{Value:0}, {Value:0}],
            turn: 1
        };

        // if(typeof livescore== 'array' && livescore.length) {
        if(livescore != null && typeof livescore.Periods != 'undefined' ) {
            //console.log("QQQQQQQQQ livescore.Periods:", livescore.Periods);
            livescore.Periods.map((statObjKey) => {
                let statType = '';
                switch (statObjKey.Type) {
                    case 1:
                        statType = 'firstSet';
                        break;
                    case 2:
                        statType = 'secondSet';
                        break;
                    case 3:
                        statType = 'thirdSet';
                        break;
                    case 4:
                        statType = 'fourthSet';
                        break;
                    case 5:
                        statType = 'fifthSet';
                        break;
                    case 60:
                        statType = 'points';
                        break;
                    case 100:
                        statType = 'sets';
                        break;
                }
                if (statType.length != 0) {
                    eventStatistic[statType] = statObjKey.Results;
                }
            });
            if(livescore.LivescoreExtraData != null && typeof livescore.LivescoreExtraData != 'undefined' ) {
                livescore.LivescoreExtraData.map((ind) => {
                    if (ind['Name'] == "Turn") {
                        eventStatistic['turn'] = ind['Value'];
                    }
                });
            }
        }

        return eventStatistic;
    }
    getHandBallEventStatistic = (livescore) => {
        let eventStatistic = {
            firstHalf: [{Value:""}, {Value:""}],
            secondHalf: [{Value:""}, {Value:""}],
            fullTime: [{Value:""}, {Value:""}]
        };

        // if(typeof livescore== 'array' && livescore.length) {
        if(livescore != null && typeof livescore.Periods != 'undefined' ) {
            //console.log("QQQQQQQQQ livescore.Periods:", livescore.Periods);
            livescore.Periods.map((statObjKey) => {
                let statType = '';
                switch (statObjKey.Type) {
                    case 10:
                        statType = 'firstHalf';
                        break;
                    case 20:
                        statType = 'secondHalf';
                        break;
                    case 100:
                        statType = 'fullTime';
                        break;
                }
                if (statType.length != 0) {
                    eventStatistic[statType] = statObjKey.Results;
                }
            });

        }

        return eventStatistic;
    }
    getVolleyballEventStatistic = (livescore) => {
        let eventStatistic = {
            firstSet: [{Value:""}, {Value:""}],
            secondSet: [{Value:""}, {Value:""}],
            thirdSet: [{Value:""}, {Value:""}],
            fourthSet: [{Value:""}, {Value:""}],
            fifthSet: [{Value:""}, {Value:""}],
            sets: [{Value:0}, {Value:0}],
            points: [{Value:0}, {Value:0}],
            turn: 1
        };

        // if(typeof livescore== 'array' && livescore.length) {
        if(livescore != null && typeof livescore.Periods != 'undefined' ) {
            //console.log("QQQQQQQQQ livescore.Periods:", livescore.Periods);
            livescore.Periods.map((statObjKey) => {
                let statType = '';
                switch (statObjKey.Type) {
                    case 1:
                        statType = 'firstSet';
                        break;
                    case 2:
                        statType = 'secondSet';
                        break;
                    case 3:
                        statType = 'thirdSet';
                        break;
                    case 4:
                        statType = 'fourthSet';
                        break;
                    case 5:
                        statType = 'fifthSet';
                        break;
                    case 50:
                        statType = 'goldenSet';
                        break;
                    case 100:
                        statType = 'fullTime';
                        break;
                }
                if (statType.length != 0) {
                    eventStatistic[statType] = statObjKey.Results;
                }
            });
            if(livescore.LivescoreExtraData != null && typeof livescore.LivescoreExtraData != 'undefined' ) {
                livescore.LivescoreExtraData.map((ind) => {
                    if (ind['Name'] == "Turn") {
                        eventStatistic['turn'] = ind['Value'];
                    }
                });
            }
        }

        return eventStatistic;
    }
    getBasketballEventStatistic = (livescore, nextFixtureId) => {
        let eventStatistic = {
            firstQuarter: [{Value:""}, {Value:""}],
            secondQuarter: [{Value:""}, {Value:""}],
            thirdQuarter: [{Value:""}, {Value:""}],
            fourthQuarter: [{Value:""}, {Value:""}],
            overtime: [{Value:""}, {Value:""}],
            fullTime: [{Value:""}, {Value:""}],
            fullTimeAfterOvertime: [{Value:""}, {Value:""}]
        };

        // if(typeof livescore== 'array' && livescore.length) {
        if(livescore != null && typeof livescore.Periods != 'undefined' ) {
            livescore.Periods.map((statObjKey) => {
                let statType = '';
                switch (statObjKey.Type) {
                    case 1:
                        statType = 'firstQuarter';
                        break;
                    case 2:
                        statType = 'secondQuarter';
                        break;
                    case 3:
                        statType = 'thirdQuarter';
                        break;
                    case 4:
                        statType = 'fourthQuarter';
                        break;
                    case 40:
                        statType = 'overtime';
                        break;
                    case 100:
                        statType = 'fullTime';
                        break;
                    case 101:
                        statType = ' fullTimeAfterOvertime';
                        break;
                }
                if (statType.length != 0) {
                    eventStatistic[statType] = statObjKey.Results;
                    eventStatistic[statType].Type = statObjKey.Type;
                    // if(this.state.event && !this.state.eventStatistic[statType].Type){
                    //     console.log(this.state.eventStatistic)
                    //     this.catchChanges(eventStatistic[statType].Type, eventStatistic[statType] )
                    // }
                }

            });

        }

        return eventStatistic;
    }

    getSoccerEventStatistic = (livescore, nextFixtureId) => {
        let eventStatistic = {
            corner: [{Value:false}, {Value:false}],
            yellow_card: [{Value:false}, {Value:false}],
            red_card: [{Value:false}, {Value:false}],
            penalty: [{Value:false}, {Value:false}],
        };
        if(livescore != null && typeof livescore.Statistics != 'undefined'){
            livescore.Statistics.map((statObjKey) => {
                let statType = '';
                switch (statObjKey.Type) {
                    case 1:
                        statType = 'corner';
                        break;
                    case 6:
                        statType = 'yellow_card';
                        break;
                    case 7:
                        statType = 'red_card';
                        break;
                    case 8:
                        statType = 'penalty';
                        break;
                }
                if (statType.length != 0) {
                    eventStatistic[statType] = statObjKey.Results;
                    if(eventStatistic.corner[0].Value && this.state.event.FixtureId == nextFixtureId){
                        if( (this.state.eventStatistic[statType][0].Value != eventStatistic[statType][0].Value) ||
                            (this.state.eventStatistic[statType][1].Value != eventStatistic[statType][1].Value)){
                            this.showEventIcon(statType)
                        }
                    } else if(this.state.event.FixtureId != nextFixtureId){
                        this.hideEventIcon()
                    }
                }
            });
        }






        // console.log("QQQQQQQQQ eventStatistic:", eventStatistic);
        return eventStatistic;
    }

/*    getSoccerEventStatistic=(livescore)=>{
        console.log("QQQQQQQQQ", this.props.event.Livescore)
        let eventStatistic = {
            corners: [{Value:0}, {Value:0}],
            yellow_card: [{Value:0}, {Value:0}],
            redCards: [{Value:0}, {Value:0}],
            penalties: [{Value:0}, {Value:0}],
        };
        // if(typeof livescore == 'array' && livescore.length) {
        if(livescore != null && livescore.length &&
        typeof this.props.event['Livescore']['Statistics']!= 'undefined' ?
        this.props.event['Livescore']['Statistics'] : null) {
            Object.keys(livescore['Statistics']).map((statObjKey) => {

                let statType = '';
                switch (livescore['Statistics'] [statObjKey]['Type']) {
                    case 1:
                        statType = 'corners';
                        break;
                    case 6:
                        statType = 'yellow_card';
                        break;
                    case 7:
                        statType = 'redCards';
                        break;
                    case 8:
                        statType = 'penalties';
                        break;
                }
                if (statType) {
                    eventStatistic[statType] = livescore[statObjKey]['Results'];
                }
            });
        }

        return eventStatistic;
    }*/

    showForm(type) {
        if (type == "chooseMarket"){
            this.setState({
                chooseMarket:true
            })
        }
    }

    closeModal(type) {
        if(type == "chooseMarket"){
            this.setState({
                chooseMarket:false
            })
        }
    }

    changeMarketTab = (tab) => {
        this.setState({
            navMarket:tab
        })
    }

    toggle = (type) =>{
        if (type == "builder_work") {
            this.setState({builder_work: !this.state.builder_work})
        }
        if (type == "liveMatch_list") {
            this.setState({liveMatchAlert: !this.state.liveMatchAlert})
        }
        if (type == "league_table"){
            this.setState({league_table: !this.state.league_table})
        }
        if (type == "summaryListGame"){
            this.handleClick()
            // this.setState({summaryListGame: true})
        }
    }

    range(val) {
        console.log('test', val);
    }
    componentWillMount() {
        this.changeFormetArr(this.state.sports);
    }

    componentDidMount() {
        let clear = setInterval(()=>{
            if ( $('.scroll_block').length) {
                clearInterval(clear);
                $('.scroll_block').mCustomScrollbar({
                    axis: "y",
                    theme: "minimal",
                    scrollInertia: 550,
                    scrollbarPosition: "inside",
                    callbacks:{
                        whileScrolling: function(){
                            if($(".selected_bet").length) {
                                let top, left, heightModal, modal, clickButton;
                                modal = $(".quickBetModule");
                                clickButton = $(".selected_bet");
                                top = clickButton.offset().top;
                                left = clickButton.offset().left;
                                heightModal = modal.height();
                                if (top < 330) {
                                    modal.css({
                                        'top': (top + 45),
                                        'left': left,
                                        'display': "block"
                                    });
                                    modal.addClass("arrowTop")
                                    if (top < 103) {
                                        modal.css({
                                            'display': "none",
                                        });
                                    }
                                } else {
                                    modal.css({
                                        'top': (top - heightModal),
                                        'left': left,
                                    });
                                    modal.removeClass("arrowTop")
                                }
                            }
                        }.bind(this)
                    }
                });
                document.addEventListener('mousedown', this.handleClickOutside);
            }
        }, 100);
        this.interval = setInterval(() => {
            this.setState({setIntervalCount: this.state.setIntervalCount + 1})
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    componentWillReceiveProps(nextProps) {
        if(this.state.event && this.state.event.FixtureId == nextProps.event.FixtureId
            && this.state.event.Livescore != null &&
            this.props.event.Fixture.Sport.Id == 6046){
                if( this.state.event.Livescore.Scoreboard.Results[0].Value != nextProps.event.Livescore.Scoreboard.Results[0].Value ||
                    this.state.event.Livescore.Scoreboard.Results[1].Value != nextProps.event.Livescore.Scoreboard.Results[1].Value){
                        this.showEventIcon("goal")
                }
        } else if (this.state.event.FixtureId != nextProps.event.FixtureId){
            this.hideEventIcon()
            this.setState({
                liveMatchAlert: false
            })
        }
        this.changeFormetArr(nextProps.sports);
        let livescore = nextProps.event['Livescore'] != null &&
            typeof nextProps.event['Livescore'] != 'undefined' &&
            typeof nextProps.event['Livescore'] != 'undefined' ?
            nextProps.event['Livescore']: null;

        this.setState({
            event: nextProps.event,
            eventStatistic: livescore === null ?
                typeof nextProps.event.Fixture  != "undefined" && typeof nextProps.event.Fixture.Sport.Id != "undefined" ?
                    this.getEventStatistic(nextProps.event.Fixture.Sport.Id, livescore) :
                    this.getSoccerEventStatistic(null) :
                this.getEventStatistic(nextProps.event.Fixture.Sport.Id, livescore, nextProps.event.FixtureId),
            allSports:nextProps.allSports,
            sports:nextProps.sports,
            selectedQuickBetId:nextProps.selectedQuickBetId,
            quickBetEnabled:nextProps.quickBetEnabled,
            defaultEvent:nextProps.defaultEvent,
            stretch: nextProps.stretch,
            localAlerts: nextProps.localAlerts,
        });
    }

    showEventIcon = (name) => {
        if(this.props.event.Fixture.Sport.Id == 6046){
            let nameForIcon = name.charAt(0).toUpperCase() + name.substr(1);
            nameForIcon = nameForIcon.replace("_"," ");
            let imgForIcon = `/img/event-icon/${name}.svg`;
            this.setState({
                eventIcon: nameForIcon,
                eventIconImg: imgForIcon
            })
            $(".event-icon").addClass("show")
            setTimeout(function() {
                $(".event-icon").removeClass("show")
            }, 5000);
        }
    }

    hideEventIcon = () => {
        $(".event-icon").removeClass("show")
    }

    changeFormetArr = (sport) => {
        let allSports = {};
        let league = {};

        Object.keys(sport).forEach((id) => {
            allSports[id] = {
                league: {},
                name: ""
            }

            sport[id].map((event) => {
                allSports[id].league[event.Fixture.League.Id] = {
                    name: event.Fixture.League.Name,
                    events: []
                };
            })
        })

        Object.keys(sport).forEach((id) => {

            if (sport[id].length > 0) {
                sport[id].map((event) => {
                    let score;
                    let markets = [];
                    let serverTimestamp;
                    if (event.Livescore == null) {
                        score = "0-0";
                    } else {
                        score = event.Livescore;
                    }
                    serverTimestamp = event.ServerTimestamp;
                    if (event.Markets != null) {
                        let currentMarket;
                        switch(id) {
                            case "6046":
                            case "35232":
                                currentMarket = "1X2"
                                break;
                            case "154830":
                            case "54094":
                                currentMarket = "12"
                                break;
                            case "48242":
                                currentMarket = "Asian Handicap Including Overtime"
                                break;
                        }

                        event.Markets.map((market) => {
                            //markets[market.Id] = market
                            // if (id == 6046) {
                            if (market.Name == currentMarket) {
                                // console.log('test', market)
                                markets.push(market);
                            }
                            // } else {
                            //     markets = []
                            // }
                        })



                    } else {
                        markets = []
                    }
                    let game = {
                        fixtureId: event.FixtureId,
                        participants: event.Fixture.Participants,
                        livescore: score,
                        startDate: event.Fixture.StartDate,
                        markets: markets,
                        serverTimestamp: serverTimestamp
                    };

                    allSports[id].league[event.Fixture.League.Id].events.push(game);
                })
            }


        });

        this.setState({
            allEvents: allSports
        });

    }

    selectShotLeftBar = (sportId) => {

        if (this.state.leftSideBar === false) {
            this.setState({
                selectShotLeftBarId: sportId
            })
            if ($('.pop_up_sport').hasClass("appear") ) {
                $('.pop_up_sport').removeClass('appear');
                if (this.state.selectShotLeftBarId == sportId ){
                }
                else{
                    $('.pop_up_sport').addClass('appear');
                }
            }
            else{
                $('.pop_up_sport').addClass('appear')

            }
        }
    }
    changeLeftSideBar =(type) =>{
        this.setState({
            leftSideBar:type
        })
    }

    secondsToMatchTime(duration, hourAsMinute) {
        let seconds = parseInt(duration%60)
            , minutes = parseInt((duration/(60))%60)
            , hours = parseInt((duration/(60*60))%24);
        if(hourAsMinute){
            minutes += hours * 60;
            minutes = (minutes < 10) ? minutes : minutes;// "0" +
            seconds = (seconds < 10) ? "0" + seconds : seconds;

            return minutes + 1;// + ":" + seconds;
        }
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return hours + ":" + minutes + ":" + seconds;
    }

    getLastIncident( obj) {
        if(this.state.event.Fixture.Sport.Id == 54094){
            return this.getTennisLastIncident(obj);
        } else if (this.state.event.Fixture.Sport.Id == 48242){
            return this.getBasketballLastIncident(obj);
        } else {
            return this.getSoccerLastIncident(obj);
        }
    }

    getBasketballLastIncident = (obj) =>{
        let lastIncident = {};
        Object.keys(obj).map((ind) => {
            let hasValidType = false;
            switch (obj[ind]['type']) {
                case 12:
                case 28:
                case 30:
                case 31:
                case 32:
                    hasValidType = true;
                    break;
            }

            if(hasValidType){
                lastIncident = obj[ind];
            }
        });
        return lastIncident;
    }
    getSoccerLastIncident = (obj) =>{
        let lastIncident = {};
        Object.keys(obj).map((ind) => {
            let hasValidType = false;
            switch (obj[ind]['type']) {
                case 1:
                case 6:
                case 7:
                case 8:
                case 9:
                    hasValidType = true;
                    break;
            }

            if(hasValidType){
                lastIncident = obj[ind];
            }
        });

        return lastIncident;
    }

    getTennisLastIncident = (obj) =>{

        let lastIncident = {};
        Object.keys(obj).map((ind) => {
            let hasValidType = false;
            switch (obj[ind]['type']) {
                case 20:
                case 21:
                case 34:
                    hasValidType = true;
                    break;
            }

            if(hasValidType){
                lastIncident = obj[ind];
            }
        });

        return lastIncident;
    }

    getIncidentData = (obj) => {

        if(this.state.event.Fixture.Sport.Id == 54094){
            return this.getTennisIncidentData(obj);
        } else if (this.state.event.Fixture.Sport.Id == 48242){
            return this.getBasketballIncidentData(obj);
        } else if (this.state.event.Fixture.Sport.Id == 154830){
            return this.getVolleyballIncidentData(obj);
        }else {
            return this.getSoccerIncidentData(obj);
        }
    }
    getBasketballIncidentData = (obj) => {
        let teamName = obj.position == 1 ?
            this.state.event['Fixture']['Participants'][0]['Name'] : this.state.event['Fixture']['Participants'][1]['Name'];
        let scoreCount = typeof obj['score'] !== 'undefined' ? obj['score'] : typeof obj['value'] !== 'undefined' ? obj['value'] : null;
        // let timeDiff = 0;
        // let time = '';
        // let serverTimestamp = this.state.event['ServerTimestamp'];
        // let livescoreTimestamp = this.state.event['Livescore']['timestamp'];
        // let scoreboardTime = parseInt(this.state.event['Livescore']['Scoreboard']['Time']);
        // let incidentsTimestamp = obj.timestamp;
        // let startMatchTime = (serverTimestamp - scoreboardTime) - (serverTimestamp - livescoreTimestamp)
        // timeDiff = incidentsTimestamp - startMatchTime
        // // console.log("timetimetimetime", startMatchTime)
        // //        timeDiff = incidentsTimestamp - ((serverTimestamp - scoreboardTime) - (serverTimestamp - livescoreTimestamp))
        // time = this.secondsToMatchTime(timeDiff, true);

        let typeDesc = '';
        let className = '';

        switch (obj['type']) {
            case 12:
                typeDesc = 'Fouls';
                className = 'fouls-icon';
                break;
            case 28:
                typeDesc = 'Two points';
                className = 'two_points_icon';
                break;
            case 30:
                typeDesc = 'Three points';
                className = 'three_points_icon';
                break;
            case 31:
                typeDesc = 'Time outs';
                className = 'time_outs';
                break;
            case 32:
                typeDesc = 'Free throws';
                className = 'free_throws';
                break;
        }

        let valueStr = '';
        let quarterCount = typeof obj['period'] !== 'undefined' ? obj['period'] : typeof obj['value'] !== 'undefined' ? obj['value'] : null;
        if(quarterCount !== null){
            switch (true) {
                case quarterCount == 1:
                    valueStr = '1st ';
                    break;
                case quarterCount == 2:
                    valueStr = '2nd ';
                    break;
                case quarterCount == 3:
                    valueStr = '3rd ';
                    break;
                default:
                    valueStr = quarterCount + 'th ';
                    break;
            }
        }

        return {class: className, value: typeDesc + ' of ' + (valueStr == '40th ' ? 'Overtime ' : valueStr + ' Quarter ') + scoreCount};
    }

    getSoccerIncidentData = (obj) => {
        let teamName = obj.position == 1 ?
            this.state.event['Fixture']['Participants'][0]['Name'] : this.state.event['Fixture']['Participants'][1]['Name'];
        // let timeDiff = 0;
        // let time = '';
        // let serverTimestamp = this.state.event['ServerTimestamp'];
        // let livescoreTimestamp = this.state.event['Livescore']['timestamp'];
        // let scoreboardTime = parseInt(this.state.event['Livescore']['Scoreboard']['Time']);
        // let incidentsTimestamp = obj.timestamp;
        // let startMatchTime = (serverTimestamp - scoreboardTime) - (serverTimestamp - livescoreTimestamp)
        // timeDiff = incidentsTimestamp - startMatchTime
        // // console.log("timetimetimetime", startMatchTime)
        // //        timeDiff = incidentsTimestamp - ((serverTimestamp - scoreboardTime) - (serverTimestamp - livescoreTimestamp))
        // time = this.secondsToMatchTime(timeDiff, true);

        let time = this.secondsToMatchTime(parseInt(obj.timestamp), true);

        let typeDesc = '';
        let className = '';

        switch (obj['type']) {
            case 1:
                typeDesc = 'Corner';
                className = 'SummaryItem_Icon-7';
                break;
            case 6:
                typeDesc = 'Yellow card';
                className = 'SummaryItem_Icon-4';
                break;
            case 7:
                typeDesc = 'Red card';
                className = 'SummaryItem_Icon-redCard';
                break;
            case 8:
                typeDesc = 'Penalty';
                className = 'SummaryItem_Icon-penalty';
                break;
            case 9:
                typeDesc = 'Goal';
                className = 'SummaryItem_Icon-2';
                break;
        }

        let valueStr = '';
        let summCount = typeof obj['summ'] !== 'undefined' ? obj['summ'] : typeof obj['value'] !== 'undefined' ? obj['value'] : null;
        if(summCount !== null){
            switch (true) {
                case summCount == 1:
                    valueStr = '1st ';
                    break;
                case summCount == 2:
                    valueStr = '2nd ';
                    break;
                case summCount == 3:
                    valueStr = '3rd ';
                    break;
                default:
                    valueStr = summCount + 'th ';
                    break;
            }
        }

        return {class: className, value: time + '\' - '+ valueStr + typeDesc +' - ' + teamName};
    }

    getTennisIncidentData = (obj) => {

        let teamName = obj['position'] == 1 ?
            this.state.event['Fixture']['Participants'][0]['Name'] : this.state.event['Fixture']['Participants'][1]['Name'];


        let valueGame = '';
        let gameCount = typeof obj['game'] !== 'undefined' ? obj['game'] : typeof obj['game'] !== 'undefined' ? obj['game'] : null;
        if(gameCount !== null){
            switch (true) {
                case gameCount == 1:
                    valueGame = '1';
                    break;
                case gameCount == 2:
                    valueGame = '2';
                    break;
                case gameCount == 3:
                    valueGame = '3';
                    break;
                default:
                    valueGame = gameCount;
                    break;
            }
        }
        let valueAction = '';
        let playerAction = typeof obj['type'] !== 'undefined' ? obj['type'] : null ;

        if(playerAction !== null ) {
                switch (true) {
                    case playerAction == 20:
                        valueAction = 'Aces';
                        break;
                    case playerAction == 21:
                        valueAction = 'Double faults';
                        break;
                    case playerAction == 34:
                        valueAction = 'First serve wins';
                        break;
                    default:
                        valueAction = playerAction;
                        break;
                }
        }




        return {value: 'Game ' + valueGame +' - ' + teamName + ' - ' + valueAction};
    }

    getVolleyballIncidentData = (obj) => {

        let teamName = obj['position'] == 1 ?
            this.state.event['Fixture']['Participants'][0]['Name'] : this.state.event['Fixture']['Participants'][1]['Name'];


        let valueGame = '';
        let gameCount = typeof obj['game'] !== 'undefined' ? obj['game'] : typeof obj['game'] !== 'undefined' ? obj['game'] : null;
        if(gameCount !== null){
            switch (true) {
                case gameCount == 1:
                    valueGame = '1';
                    break;
                case gameCount == 2:
                    valueGame = '2';
                    break;
                case gameCount == 3:
                    valueGame = '3';
                    break;
                default:
                    valueGame = gameCount;
                    break;
            }
        }
        let valueAction = '';
        let playerAction = typeof obj['type'] !== 'undefined' ? obj['type'] : null ;

        if(playerAction !== null ) {
            switch (true) {
                case playerAction == 20:
                    valueAction = 'Aces';
                    break;
                case playerAction == 21:
                    valueAction = 'Double faults';
                    break;
                case playerAction == 34:
                    valueAction = 'First serve wins';
                    break;
                default:
                    valueAction = playerAction;
                    break;
            }
        }




        return {value: 'Game ' + valueGame +' - ' + teamName + ' - ' + valueAction};
    }

    handleClick() {
        if (!this.state.summaryListGame) {
            document.addEventListener('click', this.handleOutsideClick, false);
        } else {
            document.removeEventListener('click', this.handleOutsideClick, false);
        }

        this.setState(prevState => ({
            summaryListGame: !prevState.summaryListGame,
        }));
    }

    handleOutsideClick(e) {
        if (this.node !== null && this.node.contains(e.target)) {
            return;
        }
        this.handleClick();
    }

    render() {
        let serverTimestamp = typeof this.props.serverTimestamp != 'undefined' ?
            this.props.serverTimestamp : typeof this.state.event.ServerTimestamp != 'undefined' ?
                this.state.event.ServerTimestamp : '';

        return(
            <div>
            {this.state.event === false
                ?
                ''
                :
                <div id="event_view" className="tab-pane fade show active">
                    <SideBarGames addToBetSlip={(info, bet, typeBet) => this.props.addToBetSlip(info, bet, typeBet)} changeLeftSideBar={(type)=>this.changeLeftSideBar(type)} allSports={this.state.allSports} sports={this.state.allEvents} sportsOriginal={this.state.sports} selectShotLeftBar={(sportId) => this.selectShotLeftBar(sportId)} event={this.state.event}/>
                    {/*  <!-------------------end event_sidebar-------------------->*/}
                    {/*  <!-------------------pop_up in SideBar-------------------->*/}
                    <SportsInfoSideBar sportId={this.state.selectShotLeftBarId} />
                    {/*  <!-------------------end pop_up in SideBar-------------------->*/}
                    <div className="event_view_detail scroll_block">
                        <div id="soccer_table_details" className="event_view_detail_sport event_view_detail_soccer">
                            {this.state.event['Fixture']['Sport']['Id'] == 54094 ?
                                <div className={`score_board_container tennis  ${this.props.showScoreboard ? "show" : ""}`} >
                                    <div className="score_board_hide_bth" onClick={()=>this.props.showScoreboardFunc()}>Hide</div>
                                    <div className="soccer_header_layout tennis">
                                        <div className="event-icon">
                                            <img className="event-icon-img"></img>
                                            <div className="event-icon-title"></div>
                                        </div>
                                        <div className="table_top_header">
                                            <div className="header_layout_title">ATP Montpellier</div>
                                            <div className="header_layout_additional_data">
                                                <div className="headerCell">Match Tie Break</div>
                                                <div className="headerCell">No Adv</div>
                                            </div>
                                        </div>

                                        <div className="score_grid_container soccer">
                                            <div className="team_kit_column">
                                                <div className="team_kit_cell">

                                                </div>
                                                <div className={`team_kit_cell full ${this.state.eventStatistic.turn == 2 ? "serviceOff" : "serviceOn"}`}>

                                                </div>
                                                <div className={`team_kit_cell full ${this.state.eventStatistic.turn == 1 ? "serviceOff" : "serviceOn"}`}>

                                                </div>
                                            </div>
                                            <div className="grid_column soccer">
                                                <div className="grid_column_header"></div>
                                                <div className="grid_column_team_name">
                                                    <div className="grid_cell">
                                                        {this.state.event.Fixture.Participants[0].Name}
                                                    </div>
                                                </div>
                                                <div className="grid_column_team_name">
                                                    <div className="grid_cell">
                                                        {this.state.event.Fixture.Participants[1].Name}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="grid_column tennis with_icon">
                                                <div className="grid_column_header" title={`1`}>1</div>
                                                <div className="grid_cell">{this.state.eventStatistic['firstSet'][0]['Value']}</div>
                                                <div className="grid_cell">{this.state.eventStatistic['firstSet'][1]['Value']}</div>
                                            </div>
                                            <div className="grid_column tennis with_icon ">
                                                <div className="grid_column_header" title={`2`}>2</div>
                                                <div className="grid_cell">{this.state.eventStatistic['secondSet'][0]['Value']}</div>
                                                <div className="grid_cell">{this.state.eventStatistic['secondSet'][1]['Value']}</div>
                                            </div>
                                            <div className="grid_column tennis with_icon ">
                                                <div className="grid_column_header" title={`3`}>3</div>
                                                <div className="grid_cell">{this.state.event.Livescore != null && this.state.event.Livescore.Periods != null ? this.state.eventStatistic['thirdSet'][0]['Value'] : ""}</div>
                                                <div className="grid_cell">{this.state.event.Livescore != null && this.state.event.Livescore.Periods != null ? this.state.eventStatistic['thirdSet'][1]['Value'] : ""}</div>

                                            </div>

                                            <div className="grid_column tennis with_icon width_50">
                                                <div className="grid_column_header" title={`Sets`}>Sets</div>
                                                <div className="grid_cell" style={{color: '#ffdf1b'}}>{this.state.event['Livescore'] != null && this.state.event['Livescore']['Scoreboard'] != null && this.state.event['Livescore']['Scoreboard']['Results'] != null ? this.state.event['Livescore']['Scoreboard']['Results'][0]['Value'] : 0}</div>
                                                <div className="grid_cell" style={{color: '#ffdf1b'}}>{this.state.event['Livescore'] != null && this.state.event['Livescore']['Scoreboard'] != null && this.state.event['Livescore']['Scoreboard']['Results'] != null ? this.state.event['Livescore']['Scoreboard']['Results'][1]['Value'] : 0}</div>
                                            </div>

                                            <div className="grid_column tennis with_icon width_55">
                                                <div className="grid_column_header" title={`Points`}>Points</div>
                                                <div className="grid_cell" >{this.state.eventStatistic['points'][0]['Value']}</div>
                                                <div className="grid_cell" >{this.state.eventStatistic['points'][1]['Value']}</div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            :
                                this.state.event['Fixture']['Sport']['Id'] == 35232 ?
                                    <div className={`score_board_container iceHockey  ${this.props.showScoreboard ? "show" : ""}`} >
                                            <div className="score_board_hide_bth" onClick={()=>this.props.showScoreboardFunc()}>Hide</div>
                                            <div className="soccer_header_layout">
                                                <div className="event-icon">
                                                    <img className="event-icon-img"></img>
                                                    <div className="event-icon-title"></div>
                                                </div>
                                                <div className="soccer_header_layout_data">

                                                    <FootballTime fromPage={`event_view`}
                                                                  setIntervalCount={this.state.setIntervalCount}
                                                                  event={this.state.event}
                                                                  eventStartDate={this.state.event.Fixture.StartDate}
                                                                  serverTimestamp={serverTimestamp}/>
                                                </div>
                                                <div className="score_grid_container soccer">
                                                    <div className="team_kit_column">
                                                        <div className="team_kit_cell">

                                                        </div>
                                                        <div className="team_kit_cell full">
                                                            <div className="team_kit_cell_element">
                                                                <img src="/img/soccer_white_form.svg"/>
                                                            </div>
                                                        </div>
                                                        <div className="team_kit_cell full">
                                                            <div className="team_kit_cell_element">
                                                                <img src="/img/soccer_red_form.svg"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="grid_column soccer">
                                                        <div className="grid_column_header"></div>
                                                        <div className="grid_column_team_name">
                                                            <div className="grid_cell">
                                                                {this.state.event.Fixture.Participants[0].Name}
                                                            </div>
                                                        </div>
                                                        <div className="grid_column_team_name">
                                                            <div className="grid_cell">
                                                                {this.state.event.Fixture.Participants[1].Name}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="grid_column with_icon whiteText">
                                                        <div className="grid_column_header" title={`1`}>1</div>
                                                        <div className="grid_cell">{this.state.eventStatistic['corner'][0]['Value']}</div>
                                                        <div className="grid_cell">{this.state.eventStatistic['corner'][1]['Value']}</div>
                                                    </div>
                                                    <div className="grid_column with_icon  whiteText">
                                                        <div className="grid_column_header" title={`2`}>2</div>
                                                        <div className="grid_cell">{this.state.eventStatistic['yellow_card'][0]['Value']}</div>
                                                        <div className="grid_cell">{this.state.eventStatistic['yellow_card'][1]['Value']}</div>
                                                    </div>
                                                    <div className="grid_column with_icon  whiteText">
                                                        <div className="grid_column_header" title={`3`}>3</div>
                                                        <div className="grid_cell">{this.state.eventStatistic['red_card'][0]['Value']}</div>
                                                        <div className="grid_cell">{this.state.eventStatistic['red_card'][1]['Value']}</div>
                                                    </div>
                                                    <div className="grid_column with_icon  whiteText">
                                                        <div className="grid_column_header" title={`OT`}>OT</div>
                                                        <div className="grid_cell" >{this.state.eventStatistic['penalty'][0]['Value']}</div>
                                                        <div className="grid_cell" >{this.state.eventStatistic['penalty'][1]['Value']}</div>
                                                    </div>
                                                    <div className="grid_column with_icon width_40">
                                                        <div className="grid_column_header" title={`T`}>T</div>
                                                        <div className="grid_cell" style={{color: '#ffdf1b'}}>{this.state.event['Livescore'] != null && this.state.event['Livescore']['Scoreboard'] != null && this.state.event['Livescore']['Scoreboard']['Results'] != null ? this.state.event['Livescore']['Scoreboard']['Results'][0]['Value'] : 0}</div>
                                                        <div className="grid_cell" style={{color: '#ffdf1b'}}>{this.state.event['Livescore'] != null && this.state.event['Livescore']['Scoreboard'] != null && this.state.event['Livescore']['Scoreboard']['Results'] != null ? this.state.event['Livescore']['Scoreboard']['Results'][1]['Value'] : 0}</div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                :
                                this.state.event['Fixture']['Sport']['Id'] == 48242 ?
                                    <div className={`score_board_container basketball  ${this.props.showScoreboard ? "show" : ""}`} >
                                        <div className="score_board_hide_bth" onClick={()=>this.props.showScoreboardFunc()}>Hide</div>
                                        <div className="soccer_header_layout">
                                            <div className="event-icon">
                                                <img className="event-icon-img"></img>
                                                <div className="event-icon-title"></div>
                                            </div>
                                            <div className="soccer_header_layout_data">
                                                <BasketballTime
                                                    setIntervalCount={this.state.setIntervalCount}
                                                    event={this.state.event}
                                                    fromPage={'event_view'}
                                                />
                                            </div>
                                            <div className="score_grid_container soccer">
                                                <div className="team_kit_column">
                                                    <div className="team_kit_cell">

                                                    </div>
                                                    <div className="team_kit_cell full">
                                                        <div className="team_kit_cell_element">
                                                            <img src="/img/soccer_white_form.svg"/>
                                                        </div>
                                                    </div>
                                                    <div className="team_kit_cell full">
                                                        <div className="team_kit_cell_element">
                                                            <img src="/img/soccer_red_form.svg"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="grid_column soccer">
                                                    <div className="grid_column_header"></div>
                                                    <div className="grid_column_team_name">
                                                        <div className="grid_cell">
                                                            {this.state.event.Fixture.Participants[0].Name}
                                                        </div>
                                                    </div>
                                                    <div className="grid_column_team_name">
                                                        <div className="grid_cell">
                                                            {this.state.event.Fixture.Participants[1].Name}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="grid_column with_icon">
                                                    <div className="grid_column_header" title={`1`}>1</div>
                                                    <div className="grid_cell">{this.state.eventStatistic['firstQuarter'][0]['Value']}</div>
                                                    <div className="grid_cell">{this.state.eventStatistic['firstQuarter'][1]['Value']}</div>
                                                </div>
                                                <div className="grid_column with_icon ">
                                                    <div className="grid_column_header" title={`2`}>2</div>
                                                    <div className="grid_cell">{this.state.eventStatistic['secondQuarter'][0]['Value']}</div>
                                                    <div className="grid_cell">{this.state.eventStatistic['secondQuarter'][1]['Value']}</div>
                                                </div>
                                                <div className="grid_column with_icon whiteText width_40">
                                                    <div className="grid_column_header" title={`Half`}>Half</div>
                                                    <div className="grid_cell">{(+this.state.eventStatistic['firstQuarter'][0]['Value'])+(+this.state.eventStatistic['secondQuarter'][0]['Value'])}</div>
                                                    <div className="grid_cell">{(+this.state.eventStatistic['firstQuarter'][1]['Value'])+(+this.state.eventStatistic['secondQuarter'][1]['Value'])}</div>
                                                </div>
                                                <div className="grid_column with_icon ">
                                                    <div className="grid_column_header" title={`3`}>3</div>
                                                    <div className="grid_cell">{this.state.eventStatistic['thirdQuarter'][0]['Value']}</div>
                                                    <div className="grid_cell">{this.state.eventStatistic['thirdQuarter'][1]['Value']}</div>
                                                </div>
                                                <div className="grid_column with_icon ">
                                                    <div className="grid_column_header" title={`4`}>4</div>
                                                    <div className="grid_cell">{this.state.eventStatistic['fourthQuarter'][0]['Value']}</div>
                                                    <div className="grid_cell">{this.state.eventStatistic['fourthQuarter'][1]['Value']}</div>
                                                </div>
                                                {/*<div className="grid_column with_icon width_45">*/}
                                                {/*<div className="grid_column_header" title={`OT`}>OT</div>*/}
                                                {/*<div className="grid_cell" >{this.state.eventStatistic['penalty'][0]['Value']}</div>*/}
                                                {/*<div className="grid_cell" >{this.state.eventStatistic['penalty'][1]['Value']}</div>*/}
                                                {/*</div>*/}
                                                <div className="grid_column with_icon width_40">
                                                    <div className="grid_column_header" title={`T`}>T</div>
                                                    <div className="grid_cell" style={{color: '#ffdf1b'}}>{this.state.event['Livescore'] != null && this.state.event['Livescore']['Scoreboard'] != null && this.state.event['Livescore']['Scoreboard']['Results'] != null ? this.state.event['Livescore']['Scoreboard']['Results'][0]['Value'] : 0}</div>
                                                    <div className="grid_cell" style={{color: '#ffdf1b'}}>{this.state.event['Livescore'] != null && this.state.event['Livescore']['Scoreboard'] != null && this.state.event['Livescore']['Scoreboard']['Results'] != null ? this.state.event['Livescore']['Scoreboard']['Results'][1]['Value'] : 0}</div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                :
                                this.state.event['Fixture']['Sport']['Id'] == 154830 ?
                                    <div className={`score_board_container volleyball  ${this.props.showScoreboard ? "show" : ""}`} >
                                            <div className="score_board_hide_bth" onClick={()=>this.props.showScoreboardFunc()}>Hide</div>
                                            <div className="soccer_header_layout">
                                                <div className="event-icon">
                                                    <img className="event-icon-img"></img>
                                                    <div className="event-icon-title"></div>
                                                </div>
                                                <div className="soccer_header_layout_data">

                                                    {/*<FootballTime fromPage={`event_view`} setIntervalCount={this.state.setIntervalCount} event={this.state.event} eventStartDate={this.state.event.Fixture.StartDate} serverTimestamp={serverTimestamp}/>*/}


                                                </div>
                                                <div className="score_grid_container soccer">
                                                    <div className="team_kit_column_wrapp">
                                                    <div className="team_kit_column">
                                                        <div className="team_kit_cell">

                                                        </div>
                                                        <div className={`team_kit_cell full ${this.state.eventStatistic.turn == 2 ? "serviceOff" : "serviceOn"}`}>

                                                        </div>
                                                        <div className={`team_kit_cell full ${this.state.eventStatistic.turn == 1 ? "serviceOff" : "serviceOn"}`}>

                                                        </div>
                                                    </div>
                                                    <div className="team_kit_column">
                                                        <div className="team_kit_cell">

                                                        </div>
                                                        <div className="team_kit_cell full">
                                                            <div className="team_kit_cell_element">
                                                                <img src="/img/soccer_white_form.svg"/>
                                                            </div>
                                                        </div>
                                                        <div className="team_kit_cell full">
                                                            <div className="team_kit_cell_element">
                                                                <img src="/img/soccer_red_form.svg"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div className="grid_column soccer">
                                                        <div className="grid_column_header"></div>
                                                        <div className="grid_column_team_name">
                                                            <div className="grid_cell">
                                                                {this.state.event.Fixture.Participants[0].Name}
                                                            </div>
                                                        </div>
                                                        <div className="grid_column_team_name">
                                                            <div className="grid_cell">
                                                                {this.state.event.Fixture.Participants[1].Name}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="grid_column with_icon whiteText width_35">
                                                        <div className="grid_column_header" title={`1st`}>1st</div>
                                                        <div className="grid_cell">{this.state.eventStatistic['firstSet'][0]['Value']}</div>
                                                        <div className="grid_cell">{this.state.eventStatistic['firstSet'][1]['Value']}</div>
                                                    </div>
                                                    <div className="grid_column with_icon whiteText width_35 ">
                                                        <div className="grid_column_header" title={`2nd`}>2nd</div>
                                                        <div className="grid_cell">{this.state.eventStatistic['secondSet'][0]['Value']}</div>
                                                        <div className="grid_cell">{this.state.eventStatistic['secondSet'][1]['Value']}</div>
                                                    </div>
                                                    <div className="grid_column with_icon whiteText width_35 ">
                                                        <div className="grid_column_header" title={`3rd`}>3rd</div>
                                                        <div className="grid_cell">{this.state.eventStatistic['thirdSet'][0]['Value']}</div>
                                                        <div className="grid_cell">{this.state.eventStatistic['thirdSet'][1]['Value']}</div>
                                                    </div>
                                                    <div className="grid_column with_icon whiteText width_35 ">
                                                        <div className="grid_column_header" title={`4th`}>4th</div>
                                                        <div className="grid_cell">{this.state.eventStatistic['fourthSet'][0]['Value']}</div>
                                                        <div className="grid_cell">{this.state.eventStatistic['fourthSet'][1]['Value']}</div>
                                                    </div>
                                                    <div className="grid_column with_icon whiteText width_35 ">
                                                        <div className="grid_column_header" title={`5th`}>5th</div>
                                                        <div className="grid_cell">{this.state.eventStatistic['fifthSet'][0]['Value']}</div>
                                                        <div className="grid_cell">{this.state.eventStatistic['fifthSet'][1]['Value']}</div>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                :
                                this.state.event['Fixture']['Sport']['Id'] == 35709 ?
                                    <div className={`score_board_container handball  ${this.props.showScoreboard ? "show" : ""}`} >

                                             <div className="score_board_hide_bth" onClick={()=>this.props.showScoreboardFunc()}>Hide</div>
                                             <div className="soccer_header_layout">
                                                 <div className="event-icon">
                                                     <img className="event-icon-img"></img>
                                                     <div className="event-icon-title"></div>
                                                 </div>
                                                 <div className="soccer_header_layout_data">

                                                     <FootballTime fromPage={`event_view`} setIntervalCount={this.state.setIntervalCount} event={this.state.event} eventStartDate={this.state.event.Fixture.StartDate} serverTimestamp={serverTimestamp}/>


                                                 </div>
                                                 <div className="score_grid_container">
                                                         <div className="team_kit_column">
                                                             <div className="team_kit_cell">

                                                             </div>
                                                             <div className="team_kit_cell full">
                                                                 <div className="team_kit_cell_element">
                                                                     <img src="/img/soccer_white_form.svg"/>
                                                                 </div>
                                                             </div>
                                                             <div className="team_kit_cell full">
                                                                 <div className="team_kit_cell_element">
                                                                     <img src="/img/soccer_red_form.svg"/>
                                                                 </div>
                                                             </div>
                                                         </div>

                                                     <div className="grid_column soccer">
                                                         <div className="grid_column_header"></div>
                                                         <div className="grid_column_team_name">
                                                             <div className="grid_cell">
                                                                 {this.state.event.Fixture.Participants[0].Name}
                                                             </div>
                                                         </div>
                                                         <div className="grid_column_team_name">
                                                             <div className="grid_cell">
                                                                 {this.state.event.Fixture.Participants[1].Name}
                                                             </div>
                                                         </div>
                                                     </div>

                                                     <div className="grid_column with_icon whiteText width_35">
                                                         <div className="grid_column_header" title={`1st`}>1st</div>
                                                         <div className="grid_cell">{this.state.eventStatistic['firstHalf'][0]['Value']}</div>
                                                         <div className="grid_cell">{this.state.eventStatistic['firstHalf'][1]['Value']}</div>
                                                     </div>
                                                     <div className="grid_column with_icon whiteText width_35 ">
                                                         <div className="grid_column_header" title={`2nd`}>2nd</div>
                                                         <div className="grid_cell">{this.state.eventStatistic['secondHalf'][0]['Value']}</div>
                                                         <div className="grid_cell">{this.state.eventStatistic['secondHalf'][1]['Value']}</div>
                                                     </div>

                                                     {/*<div className="grid_column with_icon whiteText width_35 ">*/}
                                                         {/*<div className="grid_column_header" title={`ET`}>ET</div>*/}
                                                         {/*<div className="grid_cell">{this.state.eventStatistic['redCards'][0]['Value']}</div>*/}
                                                         {/*<div className="grid_cell">{this.state.eventStatistic['redCards'][1]['Value']}</div>*/}
                                                     {/*</div>*/}
                                                     <div className="grid_column with_icon whiteText width_40 ">
                                                         <div className="grid_column_header" title={`Total`}>Total</div>
                                                         <div className="grid_cell" style={{color: '#ffdf1b'}}>  {this.state.event['Livescore'] != null && this.state.event['Livescore']['Scoreboard'] != null && this.state.event['Livescore']['Scoreboard']['Results'] != null ? this.state.event['Livescore']['Scoreboard']['Results'][0]['Value'] : 0}</div>
                                                         <div className="grid_cell" style={{color: '#ffdf1b'}}>  {this.state.event['Livescore'] != null && this.state.event['Livescore']['Scoreboard'] != null && this.state.event['Livescore']['Scoreboard']['Results'] != null ? this.state.event['Livescore']['Scoreboard']['Results'][1]['Value'] : 0}</div>
                                                     </div>


                                                 </div>
                                             </div>
                                         </div>
                                :
                                this.state.event['Fixture']['Sport']['Id'] == 265917 ?
                                    <div className={`score_board_container tableTennis  ${this.props.showScoreboard ? "show" : ""}`} >
                                            <div className="score_board_hide_bth" onClick={()=>this.props.showScoreboardFunc()}>Hide</div>
                                            <div className="soccer_header_layout">
                                                <div className="event-icon">
                                                    <img className="event-icon-img"></img>
                                                    <div className="event-icon-title"></div>
                                                </div>
                                                <div className="soccer_header_layout_data">

                                                    {/*<FootballTime fromPage={`event_view`} setIntervalCount={this.state.setIntervalCount} event={this.state.event} eventStartDate={this.state.event.Fixture.StartDate} serverTimestamp={serverTimestamp}/>*/}


                                                </div>
                                                <div className="score_grid_container">
                                                    <div className="team_kit_column_wrapp">
                                                        <div className="team_kit_column">
                                                            <div className="team_kit_cell">

                                                            </div>
                                                            <div className="team_kit_cell full serviceOff">

                                                            </div>
                                                            <div className="team_kit_cell full serviceOn">

                                                            </div>
                                                        </div>
                                                        <div className="team_kit_column">
                                                            <div className="team_kit_cell">

                                                            </div>
                                                            <div className="team_kit_cell full">
                                                                <div className="team_kit_cell_element">
                                                                    <img src="/img/soccer_white_form.svg"/>
                                                                </div>
                                                            </div>
                                                            <div className="team_kit_cell full">
                                                                <div className="team_kit_cell_element">
                                                                    <img src="/img/soccer_red_form.svg"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="grid_column soccer">
                                                        <div className="grid_column_header"></div>
                                                        <div className="grid_column_team_name">
                                                            <div className="grid_cell">
                                                                {this.state.event.Fixture.Participants[0].Name}
                                                            </div>
                                                        </div>
                                                        <div className="grid_column_team_name">
                                                            <div className="grid_cell">
                                                                {this.state.event.Fixture.Participants[1].Name}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="grid_column with_icon whiteText width_35">
                                                        <div className="grid_column_header" title={`1`}>1</div>
                                                        <div className="grid_cell">{this.state.eventStatistic['corner'][0]['Value']}</div>
                                                        <div className="grid_cell">{this.state.eventStatistic['corner'][1]['Value']}</div>
                                                    </div>
                                                    <div className="grid_column with_icon whiteText width_35 ">
                                                        <div className="grid_column_header" title={`2`}>2</div>
                                                        <div className="grid_cell">{this.state.eventStatistic['yellow_card'][0]['Value']}</div>
                                                        <div className="grid_cell">{this.state.eventStatistic['yellow_card'][1]['Value']}</div>
                                                    </div>
                                                    <div className="grid_column with_icon whiteText width_35 ">
                                                        <div className="grid_column_header" title={`3`}>3</div>
                                                        <div className="grid_cell">{this.state.eventStatistic['yellow_card'][0]['Value']}</div>
                                                        <div className="grid_cell">{this.state.eventStatistic['yellow_card'][1]['Value']}</div>
                                                    </div>
                                                    <div className="grid_column with_icon whiteText width_35 ">
                                                        <div className="grid_column_header" title={`4`}>4</div>
                                                        <div className="grid_cell">{this.state.eventStatistic['yellow_card'][0]['Value']}</div>
                                                        <div className="grid_cell">{this.state.eventStatistic['yellow_card'][1]['Value']}</div>
                                                    </div>
                                                    <div className="grid_column with_icon whiteText width_35 ">
                                                        <div className="grid_column_header" title={`5`}>5</div>
                                                        <div className="grid_cell">{this.state.eventStatistic['yellow_card'][0]['Value']}</div>
                                                        <div className="grid_cell">{this.state.eventStatistic['yellow_card'][1]['Value']}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                :
                                    <div className={`score_board_container  ${this.props.showScoreboard ? "show" : ""}`} >
                                    <div className="score_board_hide_bth" onClick={()=>this.props.showScoreboardFunc()}>Hide</div>
                                    <div className="soccer_header_layout">
                                        <div className="event-icon">
                                            <img className="event-icon-img" src = {this.state.eventIconImg}></img>
                                            <div className="event-icon-title">{this.state.eventIcon}</div>
                                        </div>
                                        <div className="soccer_header_layout_data">

                                            <FootballTime fromPage={`event_view`} setIntervalCount={this.state.setIntervalCount} event={this.state.event} eventStartDate={this.state.event.Fixture.StartDate} serverTimestamp={serverTimestamp}/>


                                        </div>
                                        <div className="score_grid_container soccer">
                                            <div className="team_kit_column">
                                                <div className="team_kit_cell">

                                                </div>
                                                <div className="team_kit_cell full">
                                                    <div className="team_kit_cell_element">
                                                        <img src="/img/soccer_white_form.svg"/>
                                                    </div>
                                                </div>
                                                <div className="team_kit_cell full">
                                                    <div className="team_kit_cell_element">
                                                        <img src="/img/soccer_red_form.svg"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grid_column soccer">
                                                <div className="grid_column_header"></div>
                                                <div className="grid_column_team_name">
                                                    <div className="grid_cell">
                                                        {this.state.event.Fixture.Participants[0].Name}
                                                    </div>
                                                </div>
                                                <div className="grid_column_team_name">
                                                    <div className="grid_cell">
                                                        {this.state.event.Fixture.Participants[1].Name}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="grid_column soccer with_icon column_corner">
                                                <div className="grid_column_header soccer" title={`Corner`}><span className="tooltip corner">Corner</span></div>
                                                <div className="grid_cell">{Number(this.state.eventStatistic['corner'][0]['Value'])}</div>
                                                <div className="grid_cell">{Number(this.state.eventStatistic['corner'][1]['Value'])}</div>
                                            </div>
                                            <div className="grid_column soccer with_icon column_yellow_card">
                                                <div className="grid_column_header soccer" title={`Yellow Card`} onClick={() => this.notifyMe("corner")}><span className="tooltip yellow_card">Yellow Card</span></div>
                                                <div className="grid_cell">{Number(this.state.eventStatistic['yellow_card'][0]['Value'])}</div>
                                                <div className="grid_cell">{Number(this.state.eventStatistic['yellow_card'][1]['Value'])}</div>
                                            </div>
                                            <div className="grid_column soccer with_icon column_red_card">
                                                <div className="grid_column_header soccer" title={`Red Card`} onClick={() => this.showEventIcon("goal")}><span className="tooltip red_card">Red Card</span></div>
                                                <div className="grid_cell">{Number(this.state.eventStatistic['red_card'][0]['Value'])}</div>
                                                <div className="grid_cell">{Number(this.state.eventStatistic['red_card'][1]['Value'])}</div>

                                            </div>
                                            <div className="grid_column soccer with_icon column_penalty">
                                                <div className="grid_column_header soccer" title={`Penalty`}><span className="tooltip penalty">Penalty</span></div>
                                                <div className="grid_cell">{Number(this.state.eventStatistic['penalty'][0]['Value'])}</div>
                                                <div className="grid_cell">{Number(this.state.eventStatistic['penalty'][1]['Value'])}</div>
                                            </div>
                                            <div className="grid_column soccer with_icon column_goal">
                                                <div className="grid_column_header soccer" title={`Goal`}><span className="tooltip goal">Goal</span></div>
                                                <div className="grid_cell" style={{color: '#ffdf1b'}}>{this.state.event['Livescore'] != null && this.state.event['Livescore']['Scoreboard'] != null && this.state.event['Livescore']['Scoreboard']['Results'] != null ? this.state.event['Livescore']['Scoreboard']['Results'][0]['Value'] : 0}</div>
                                                <div className="grid_cell" style={{color: '#ffdf1b'}}>{this.state.event['Livescore'] != null && this.state.event['Livescore']['Scoreboard'] != null && this.state.event['Livescore']['Scoreboard']['Results'] != null ? this.state.event['Livescore']['Scoreboard']['Results'][1]['Value'] : 0}</div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            }

                            <div className="grid_header">
                                <div className="grid_header_rowOne">
                                    <div className="grid_header_fixtureTable">
                                        {this.state.stretch ?
                                        ""
                                        :
                                            <div className="grid_header_league">{this.state.event.Fixture.League.Name}</div>
                                        }
                                        <div className="grid_header_fixture_cell">
                                            {this.state.event.Fixture.Participants[0].Name} vs {this.state.event.Fixture.Participants[1].Name}
                                        </div>
                                    </div>

                                    {
                                        typeof this.state.event.Livescore == 'object' && this.state.event.Livescore != null &&
                                        typeof this.state.event.Livescore.incidents == 'object' && Object.keys(this.state.event.Livescore.incidents).length ?

                                                <div className="summary_btn" onClick={(e)=>{e.stopPropagation(); e.nativeEvent.stopImmediatePropagation(); this.toggle('summaryListGame'); }}>
                                                    <div className={`summary_btn_wrapper ${this.getIncidentData(this.getLastIncident(this.state.event.Livescore.incidents))['class']}`}>
                                                        <div className="summary_label">
                                                            {/*<span className="score">1-3</span>*/}
                                                            {this.getIncidentData(this.getLastIncident(this.state.event.Livescore.incidents))['value']}
                                                        </div>
                                                        <div className="summary_icon"></div>
                                                    </div>
                                                </div> : ''}

                                    {
                                        typeof this.state.event.Livescore == 'object' && this.state.event.Livescore != null &&
                                        typeof this.state.event.Livescore.incidents == 'object' && Object.keys(this.state.event.Livescore.incidents).length &&
                                        this.state.summaryListGame ?
                                                    <div className="SummaryContainer_wrapper" ref={node => { this.node = node; }}>
                                                        <div className="SummaryContainer scroll_block" >
                                                            <div className="ipe-SummaryNativeScroller_ContentContainer ">
                                                                <div className="SummaryNativeScroller_Content SummaryItemRenderer ">
                                                                        <div className="SummaryContainerAll" ref={node => { this.node = node; }}>
                                                                            {this.state.event.Fixture.Sport.Id == 54094 ?
                                                                                Object.keys(Object.assign([], this.state.event.Livescore.incidents)).reverse().map((ind) => {
                                                                                    let incidentData = this.getIncidentData(this.state.event.Livescore.incidents[ind]);
                                                                                    return <div key={`${ind}`} className="SummaryItem SummaryItem_Neutral ">
                                                                                            {incidentData['value']}
                                                                                        </div>
                                                                                })
                                                                                :
                                                                                Object.keys(Object.assign([], this.state.event.Livescore.incidents)).reverse().map((ind) => {
                                                                                    let incidentData = this.getIncidentData(this.state.event.Livescore.incidents[ind]);
                                                                                    return incidentData['class'].length ? <div key={`${ind}`} className="SummaryItem SummaryItem_Neutral ">
                                                                                        <span className={`SummaryItem_Icon ${incidentData['class']} `}></span>{incidentData['value']}
                                                                                    </div> : '';
                                                                                })
                                                                            }
                                                                        </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    :""
                                    }

                                </div>
                                <div className="grid_header_rowTwo">
                                    <div className="grid_header_rowTwo_left">
                                        <ul className="nav market_select">
                                            <li className="nav-item">
                                                <a href="#" className={`market_select_btn ${this.state.navMarket == "markets" ? "active" :""}`} onClick={(e)=>{e.preventDefault(); this.changeMarketTab('markets')}}>Markets</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className={`market_select_btn bet_builder  ${this.state.navMarket == "bet_builder" ? "active" :""}`} onClick={(e)=>{e.preventDefault(); this.changeMarketTab('bet_builder')}}>Bet Builder <span>new</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="grid_header_rowTwo_right">
                                        <div className="event_view event_view_match_alert">
                                            <div className="match_alert_btn" onClick={()=>this.toggle('liveMatch_list')}> {/*class selected*/}
                                                <div className="match_alert_btn_icon"/>
                                                <div className="match_alert_btn_label">
                                                    Match Alerts
                                                </div>
                                            </div>

                                        </div>
                                        <div className="event_view event_view_legue_table">
                                            <div className="league_table_btn" onClick={()=>this.toggle('league_table')}>
                                                <div className="league_table_btn_icon"></div>
                                                <div className="league_table_btn_label">
                                                    League Table
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        this.state.liveMatchAlert?
                                            <div className={`match_alert_menu_list show`}>
                                                <AlertsEventViews
                                                    sportId = {this.state.event.Fixture.Sport.Id}
                                                    fixtureId={this.state.event.FixtureId}
                                                    participants={this.state.event.Fixture.Participants}
                                                    saveAlertsToLocalStorage={(alerts) => this.props.saveAlertsToLocalStorage(alerts)}
                                                    localAlerts={this.state.localAlerts}/>
                                            </div> : ""
                                    }

                                    {this.state.league_table ?
                                        <div className="league_table_list">
                                            <div className="league_table_header">
                                                <div className="league_table_name">
                                                    Holland Reserve League
                                                </div>
                                                <div className="league_table_lastUpdate">
                                                    Updated 17:51 GMT+6
                                                </div>
                                            </div>
                                            <table className="total_league_table" style={{width:"100%"}}>
                                                <thead>
                                                <th></th>
                                                <th>Group B</th>
                                                <th>P</th>
                                                <th>W</th>
                                                <th>D</th>
                                                <th>L</th>
                                                <th>+/-</th>
                                                <th>Pts</th>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td className="leaguePosition">1</td>
                                                    <td>Melbourne Victory Women</td>
                                                    <td>5</td>
                                                    <td>4</td>
                                                    <td>1</td>
                                                    <td>0</td>
                                                    <td>5</td>
                                                    <td>13</td>
                                                </tr>
                                                </tbody>
                                            </table>

                                        </div>
                                        : ""
                                    }

                                </div>
                                <div className="tab-content">
                                    {this.state.navMarket == "markets" ?
                                        <div id="markets">
                                            <div className="FavouriteContainerTable"></div>
                                            {
                                                typeof this.state.event.Markets != 'undefined' && this.state.event.Markets != null ?
                                                    <ManagMatch
                                                        fromPage="eventView"
                                                        fromEventView={true}
                                                        typeSport={this.state.event.Fixture.Sport.Id}
                                                        eventId={this.state.event.FixtureId}
                                                        participants={this.state.event.Fixture.Participants}
                                                        markets={this.state.event.Markets}
                                                        addToBetSlip={(info, bet, typeBet) => this.props.addToBetSlip(info, bet, typeBet)}
                                                        quickBetEnabled={this.state.quickBetEnabled}
                                                    />
                                                    : ""
                                            }
                                        </div>
                                        :""
                                    }

                                    {this.state.navMarket == "bet_builder" ?
                                        <BetBuilder/>
                                        :""
                                    }
                                </div>
                            </div>
                        </div>
                        <ImportantNote/>
                        {this.props.footer}
                    </div>



                    {
                        this.state.chooseMarket ?
                            <div className="Modal_wrapp">
                                <ChooseMarket closeModal = {(type) => this.closeModal(type)}/>
                            </div>
                            :""
                    }


                </div>
    }
            </div>
        )

    }
}

export default EventViews;
