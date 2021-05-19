import React from 'react';
import FootballTime from '../../helpers/match_time/footballTime';
import ManagMatch from "../../pages/in_play/partials/managMatch";
import Link from "react-router-dom/es/Link";
import BasketballTime from "../../helpers/match_time/basketballTime";



class TableGames extends React.Component {
    constructor(props) {
        super(props);

        let currentMarket = {};

        switch(this.props.typeId) {
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
        this.state = {
            sportName: this.props.type,
            sportId: this.props.typeId,
            leagues: {},
            currentMarket: currentMarket,
            setIntervalCount: 0,
            //odds: this.props.odds
        }
        this.addToBetSlip = this.addToBetSlip.bind(this);
        this.changeFormetArr = this.changeFormetArr.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        // this.setState({
        //     odds: nextProps.odds
        // });
        this.changeFormetArr(nextProps.sport)
    }

    componentDidMount() {
        this.changeFormetArr(this.props.sport)
        this.interval = setInterval(() => {
            this.setState({setIntervalCount: this.state.setIntervalCount + 1})
        }, 1000);

    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }

    changeFormetArr(sport) {
        let league = {};

        sport.forEach((event) => {
            league[event.Fixture.League.Id] = {
                name: event.Fixture.League.Name,
                events: []
            };
        })


        sport.forEach((event) => {
            let score;
            let livescoreOrigin = null;
            let partBets = {
                home: {},
                away: {},
                draw: {}
            };
            let typeMarketBet;
            let serverTimestamp;
            let sportId, marketName, marketId;
            let markets = {};
            // if (event.Fixture.Sport.Id == 6046) {

                if (event.Livescore == null) {
                    score = "0-0";
                } else {
                    livescoreOrigin = event.Livescore;
                    let {Results = []} = event.Livescore.Scoreboard
                    Results.map((val) => {
                        if (val.Position == 1) {
                            score = val.Value + "-";

                        }
                        if (val.Position == 2) {
                            score += val.Value;
                        }
                    });

                }
                serverTimestamp = event.ServerTimestamp;
                sportId = event.Fixture.Sport.Id;
                if (event.Markets != null) {
                   // markets = event.Markets
                     event.Markets.map((market) => {
                         markets[market.Id] = market
                // //         if(typeof market.template != 'undefined'){
                // //             template = market.template;
                // //         }
                //         if (market.Name == "1X2") {
                //
                //             markets.push(market);
                //
                //             market.Providers.map((provider) => {
                //                 if (provider.Id == 8) {
                //                     provider.Bets.map((bet) => {
                //                         // console.log('stavki', bet)
                //                         if (bet.Name === "1") {
                //                             partBets.home = bet;
                //                         }
                //                         if (bet.Name === "2") {
                //                             partBets.away = bet;
                //                         }
                //                         if (bet.Name == "X") {
                //                             partBets.draw = bet;
                //                         }
                //                     })
                //                 }
                //             })
                //             typeMarketBet = "Fulltime Result";
                //             serverTimestamp = event.ServerTimestamp;
                //             sportId = event.Fixture.Sport.Id;
                //             marketName = market.Name;
                //             marketId = market.Id;
                //         }
                    })
                } else {
                    partBets = {
                        home: {},
                        away: {},
                        draw: {}
                    };
                    typeMarketBet = "test";
                    serverTimestamp = null;

                }


            // } else {
            //     score == "test";
            //     partBets = {
            //         home: {},
            //         away: {},
            //         draw: {}};
            //     typeMarketBet = "test";
            //     serverTimestamp = null;
            //     sportId = event.Fixture.Sport.Id;
            //     marketName = null;
            //     marketId = null
            // }

            let game = {
                fixtureId: event.FixtureId,
                participants: event.Fixture.Participants,
                livescore: score,
                livescoreOrigin: livescoreOrigin,
                startDate: event.Fixture.StartDate,
                bets: partBets,
                typeMarketBet: typeMarketBet,
                serverTimestamp: serverTimestamp,
                sportId: sportId,
              //  marketName: marketName,
                //marketId: marketId,
                markets: markets
            };

            league[event.Fixture.League.Id].events.push(game);
        })

        this.setState({
            leagues: league
        })
    }
    componentDidUpdate() {
        if (window.localStorage.getItem("currentStake") != null || window.localStorage.getItem("currentStake") != undefined) {
            let currentStake = JSON.parse(window.localStorage.getItem("currentStake"));
            for (var i in currentStake.bets) {
                $('.'+i).addClass("selected_bet")
            }
        }
    }

    toggleGame(id) {
               if ($('#'+ id +'-in_play').hasClass("opened")) {
                   $('#'+ id +'-in_play').removeClass("opened");
                   $('#'+ id +'-down').addClass("active");
                   $('#'+ id +'-in_play').addClass("closed");
               } else {
                   $('#'+ id +'-in_play').removeClass("closed");
                   $('#'+ id +'-down').removeClass("active");
                   $('#'+ id +'-in_play').addClass("opened");
               }
    }

    toggleLeague(id) {
               if ($('#'+ id +'-in_play').hasClass("opened")) {
                   $('#'+ id +'-in_play').removeClass("opened");
                   $('#'+ id +'-in_play').addClass("closed");
               } else {
                   $('#'+ id +'-in_play').removeClass("closed");
                   $('#'+ id +'-in_play').addClass("opened");
               }
    }
    toggleSport(sport) {
        if ($('#'+sport+'-header').hasClass('active')) {
            $('#'+sport+'-header').removeClass('active');
            $('.'+sport+'-league').removeClass('invisible');
        } else {
            $('#'+sport+'-header').addClass('active');
            $('.'+sport+'-league').addClass('invisible');

        }
    }

    addToBetSlip(info, bet, typeBet) {
        if (Object.keys(bet).length) {
            let type = typeBet == 1 ? 'home' : typeBet == 2 ? 'away' : "draw";
            if ($('#'+info.id+'-in_play .'+type).hasClass('selected_bet')) {
                $('#'+info.id+'-in_play .'+type).removeClass("selected_bet");
            } else {
                $('#'+info.id+'-in_play .'+type).addClass("selected_bet");
            }

            this.props.addToBetSlip(info, bet, typeBet)
        } else {
            console.log("no bets")
        }


    }

    selectEvent(fixtureId){
        window.localStorage.setItem("selectedEventId", fixtureId);
        //location.href = '//' + location.host + '/in-play?fixtureId=' + fixtureId;
    }

    render() {
        return(
            <div className="play_classification">
                <div className={`play_classification_header ${this.props.headerColor}`} id={`${this.state.sportId}-header`} onClick={() => {this.toggleSport(this.state.sportId)}}>
                    <span>{this.state.sportName == "Football" ? "Soccer" : this.state.sportName}</span>
                    <span  style={{position: "absolute", right: "25px", opacity: ".5", fontSize: "11px"}}>Events { this.props.sport.length}</span>
                    <span className="InPlayEvent_HeaderButton "></span>
                </div>
                {  Object.keys(this.state.leagues).map((league, ind) => {
                  return  <div key={`${league}-${ind}-in_play`} className={`play_classification_league ${this.state.sportId}-league`}>
                        <div className="play_league">
                            <div className="play_league_header" onClick={() => {this.toggleLeague(league)}}>
                                <span className="InPlayLeague_Header">{this.state.leagues[league].name}</span>
                            </div>
                            <div className="play_league_group_wrapp opened" id={`${league}-in_play`}>
                                {
                                    this.state.leagues[league].events.map((event, i) => {

                                        //console.log(event)

                                        return    <div key={`${event}-${i}-${league}-event-in_play`} className="play_league_group">
                                            <span className="InPlayEvent_HeaderButton" id={`${event.fixtureId}-down`} onClick={() => {this.toggleGame(event.fixtureId)}}></span>
                                            <div className="play_event">
                                                <Link to={{
                                                    pathname:"/in-play/event_view",
                                                    search: 'id='+event.fixtureId,
                                                    state:"game"
                                                    }} className="left_content">
                                                    <div className="event_label" onClick={() => {this.selectEvent(event.fixtureId)}}>
                                                        {`${event.participants[0]['Name']} v ${event.participants[1]['Name']}`}
                                                    </div>
                                                </Link>
                                                <div className="right_content">
                                                    <span className="event_score yellow_text">{event.livescore}</span>
                                                    <span className="event_timer">

                                                        {this.state.sportId == 48242 ?
                                                            <BasketballTime setIntervalCount={this.state.setIntervalCount}
                                                                            event={event}
                                                            /> :
                                                                <FootballTime setIntervalCount={this.state.setIntervalCount}
                                                                              event={event}
                                                                              eventStartDate={event.startDate}
                                                                              serverTimestamp={event.serverTimestamp}
                                                                />
                                                        }

                                                    </span>
                                                </div>
                                            </div>

                                                <ManagMatch
                                                    currentMarket={this.state.currentMarket}
                                                    fromPage="home"
                                                    typeSport={event.sportId}
                                                    eventId={event.fixtureId}
                                                    participants={event.participants}
                                                    markets={event.markets}
                                                    addToBetSlip={(info, bet, typeBet) => this.addToBetSlip(info, bet, typeBet)}/>
                                        </div>
                                    })
                                }


                                {/*<div className="play_league_group">*/}
                                    {/*<span className="InPlayEvent_HeaderButton "></span>*/}
                                    {/*<div className="play_event">*/}
                                        {/*<div className="left_content">*/}
                                            {/*<div className="event_label">*/}
                                                {/*ES Mostaganem U21 v ASM Oran U21*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="right_content">*/}
                                            {/*<span className="event_score yellow_text">0-1</span>*/}
                                            {/*<span className="event_timer">35:27</span>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*<div className="participant_group opened">*/}
                                        {/*<div className="column">*/}
                                            {/*<span className="participant_name">FK Qarabag II</span>*/}
                                            {/*<span className="participant_odds yellow_text">+200</span>*/}
                                        {/*</div>*/}
                                        {/*<div className="column">*/}
                                            {/*<span className="participant_name">Draw</span>*/}
                                            {/*<span className="participant_odds yellow_text">+200</span>*/}
                                        {/*</div>*/}
                                        {/*<div className="column">*/}
                                            {/*<span className="participant_name">Shuvalan</span>*/}
                                            {/*<span className="participant_odds yellow_text">+100</span>*/}
                                        {/*</div>*/}

                                    {/*</div>*/}
                                {/*</div>*/}
                            </div>
                        </div>

                    </div>
                })

                }


                {/*<div className="play_classification_league">*/}
                    {/*<div className="play_league">*/}
                        {/*<div className="play_league_header">*/}
                            {/*<span className="InPlayLeague_Header">Algeria Youth League</span>*/}
                        {/*</div>*/}
                        {/*<div className="play_league_group_wrapp opened">*/}
                            {/*<div className="play_league_group">*/}
                                {/*<span className="InPlayEvent_HeaderButton "></span>*/}
                                {/*<div className="play_event">*/}
                                    {/*<div className="left_content">*/}
                                        {/*<div className="event_label">*/}
                                            {/*ES Mostaganem U21 v ASM Oran U21*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*<div className="right_content">*/}
                                        {/*<span className="event_score yellow_text">0-1</span>*/}
                                        {/*<span className="event_timer">35:27</span>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                                {/*<div className="participant_group opened">*/}
                                    {/*<div className="column">*/}
                                        {/*<span className="participant_name">FK Qarabag II</span>*/}
                                        {/*<span className="participant_odds yellow_text">+200</span>*/}
                                    {/*</div>*/}
                                    {/*<div className="column">*/}
                                        {/*<span className="participant_name">Draw</span>*/}
                                        {/*<span className="participant_odds yellow_text">+200</span>*/}
                                    {/*</div>*/}
                                    {/*<div className="column">*/}
                                        {/*<span className="participant_name">Shuvalan</span>*/}
                                        {/*<span className="participant_odds yellow_text">+100</span>*/}
                                    {/*</div>*/}

                                {/*</div>*/}
                            {/*</div>*/}
                            {/*<div className="play_league_group">*/}
                                {/*<span className="InPlayEvent_HeaderButton "></span>*/}
                                {/*<div className="play_event">*/}
                                    {/*<div className="left_content">*/}
                                        {/*<div className="event_label">*/}
                                            {/*ES Mostaganem U21 v ASM Oran U21*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*<div className="right_content">*/}
                                        {/*<span className="event_score yellow_text">0-1</span>*/}
                                        {/*<span className="event_timer">35:27</span>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                                {/*<div className="participant_group opened">*/}
                                    {/*<div className="column">*/}
                                        {/*<span className="participant_name">FK Qarabag II</span>*/}
                                        {/*<span className="participant_odds yellow_text">+200</span>*/}
                                    {/*</div>*/}
                                    {/*<div className="column">*/}
                                        {/*<span className="participant_name">Draw</span>*/}
                                        {/*<span className="participant_odds yellow_text">+200</span>*/}
                                    {/*</div>*/}
                                    {/*<div className="column">*/}
                                        {/*<span className="participant_name">Shuvalan</span>*/}
                                        {/*<span className="participant_odds yellow_text">+100</span>*/}
                                    {/*</div>*/}

                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
            </div>
        )

    }
}

export default TableGames;
