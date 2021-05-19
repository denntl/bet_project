import React from 'react';
import OneGamesBets from "../../oneGameBets";
import MatchAlert from "../../../modal/match_alert";
import SoccerHeader from "../../topHeader/soccerHeader";
import {getEventsGroupedByLeagueDate, getMarkets} from "../../../../helpers/data";
import moment from "moment/moment";
import {NavLink, Route} from "react-router-dom";
import ManagMatch from "../../../../pages/in_play/partials/managMatch";
import FootballTime from "../../../../helpers/match_time/footballTime";

class CurrentDayOfWeekMatches extends React.Component {

    marketsCol = {
        1: [1, "X", 2],
        7: ["1X", "X2", 12],
        2: ["Under 2.5", "Over 2.5"],
        17: ["Yes", "No"],
        5: ["Odd", "Even"],
        52: [1, 2],
        3: ["1X2", "Handicap", "Line"]

    }

    intervalFetch = null;
    interval = null;

    constructor(props) {
        super(props);
        this.state = {
            showOneGame: false,
            matchAlert: false,
            leagueName: this.props.leagueName,
            currentLeagueId: this.props.currentLeagueId,
            sportName: this.props.sportName,
            currentEvents: {},
            marketsList: {},
            teams: {},
            sportId: this.props.sportId,
            currentMarketId: 1,//this.props.currentMarketId,
            allMarkets: {},
            leaguesFromLocation: this.props.leaguesFromLocation,
            eventId: null,
            currentGameLeagueMatches: [],

            allEventsDate: [],
            odds: this.props.odds,
            currentGame: false,
            activeFilter: this.props.activeFilter,
            currentmarketName: "",
            setIntervalCount: 0,
        }

        this.showForm = this.showForm.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({setIntervalCount: this.state.setIntervalCount + 1})
        }, 1000);


        this.intervalFetch = setInterval(() => {
            this.fetchEvents();
        }, 5000);





        // function displayVals() {
        //   var singleValues = $('.MarketSliders_range-slider input').val();
        //   var maxSteps = $(this).attr('max');
        //   var colorRangeBefore = (100/maxSteps)*singleValues;
        //   $(this).css('background','linear-gradient(90deg, rgba(20,128,94,1) '+colorRangeBefore+'%, rgba(117,117,117,1) '+colorRangeBefore+'%)');
        //  $(this).parent().find('option').removeClass('active');
        //  $(this).parent().find('option').each(function() {
        //       if ($(this).val() == singleValues) {
        //           $(this).addClass('active');
        //       }
        //   });
        // }
        // $('.MarketSliders_range-slider input').change(displayVals);
        // displayVals();

        //   $('.MarketSliders_range-slider option').click(function(){
        //       $(this).parent().find('option').removeClass('active');
        //       $(this).addClass('active');
        //       var optionValues = $(this).val();
        //       var Single = $(this).parents('.MarketSliders_range-slider').find('input');
        //       Single.val(optionValues);
        //   var maxSteps = Single.attr('max');
        //   var colorRangeBefore = (100/maxSteps)*optionValues;
        //   Single.css('background','linear-gradient(90deg, rgba(20,128,94,1) '+colorRangeBefore+'%, rgba(117,117,117,1) '+colorRangeBefore+'%)');
        // });

        // $('.item.TeamNavBarButtonBase').on('click', function () {
        //     $(this).parents('.TeamNavBar_HScroll').find('.item.TeamNavBarButtonBase a').removeClass('active');
        //     $(this).addClass('active');
        //     });

        window.onpopstate = this.onBackButtonEvent;
    }

    componentWillUnmount(){
        clearInterval(this.interval);
        clearInterval(this.intervalFetch);
    }


    onBackButtonEvent = (e) => {
        e.preventDefault();
        this.props.comeBack(this.state.currentGame, this.state.activeFilter)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            leagueName: nextProps.leagueName,
            sportName: nextProps.sportName,
            activeFilter: nextProps.activeFilter,
            odds: nextProps.odds
        })

        if (nextProps.odds != this.state.odds) {
            this.fetchEvents(this.state.currentLeagueId, nextProps.odds);
        }

    }




    fetchEvents = (leagueId = this.state.currentLeagueId, type = this.state.odds) => {
        let date_from, date_to;
        date_from =  moment().utc().subtract(12, 'hours').format('YYYY-MM-DD HH:mm:ss');
        if (this.state.activeFilter == "24") {
            date_to = moment.utc().add(1, 'days').format('YYYY-MM-DD HH:mm:ss');
        } else if (this.state.activeFilter == "all") {
            // date_from =  moment.utc().add(6,'hours').format('YYYY-MM-DD HH:mm:ss');
            date_to = moment.utc().add(1, 'year').format('YYYY-MM-DD HH:mm:ss');
        }


        if (this.props.showType == 'euro-list') {
            date_from =  moment().utc().subtract(12, 'hours').format('YYYY-MM-DD HH:mm:ss');
            date_to = moment().utc().add(1, 'year').format('YYYY-MM-DD 23:59:59');
        } else {
            //date_from = moment().utc().format('YYYY-MM-DD HH:mm:ss');
            //date_from =  moment().utc().subtract(12, 'hours').format('YYYY-MM-DD HH:mm:ss');
            date_to = moment().utc().format('YYYY-MM-DD 23:59:59');
        }

        let location_ids = this.props.showType == 'euro-list' ? '243,142,215,161,147' : null;

        getEventsGroupedByLeagueDate(location_ids, date_from, date_to, this.state.sportId, this.state.currentMarketId, type, (err, data) => {
            if (!err) {
                this.setState({
                    currentEvents: data.events,
                    marketsList: data.markets,
                })
            } else {
                console.log("err getEventsGroupedbyDate", err)
            }
        })
    }
    showOneGame = (event, allEventsDate) => {
        //  console.log("selected one game")
        this.setState({
            currentGame: event,
            allEventsDate: allEventsDate
        })
    }
    showForm(type) {
        if (type == "match") {
            this.setState({
                matchAlert: true
            })
        }
    }

    closeModal(type = null) {
        if (type == null) {
            this.setState({
                show_modal: false
            })
        } else {
            if (type == "match") {
                this.setState({
                    matchAlert: false
                })
            }
        }
    }

    addToBetSlip(info, bet, typeBet) {
        if (Object.keys(bet).length) {
            if ($('.'+bet.Id+'-premath').hasClass('selected_bet')) {
                $('.'+bet.Id+'-premath').removeClass("selected_bet");
            } else {
                $('.'+bet.Id+'-premath').addClass("selected_bet");
            }

            this.props.addToBetSlip(info, bet, typeBet)
        } else {
            console.log("no bets")
        }


    }
    changeLeague = (id) => {
        this.setState({
            currentLeagueId: id
        })
        this.fetchEvents(id)
    }

    changeGame = (id) => {
        Object.keys(this.state.currentEvents).map((date) => {
            let arrayEvents = this.state.currentEvents[date];
            Object.keys(arrayEvents).map((event) => {
                if (arrayEvents[event].FixtureId == id) {

                    this.setState({
                        currentGame: arrayEvents[event]
                    })
                }
            })
        })
    }




    changeCurrentMarket = (id, marketName) => {

        this.setState({
            currentmarketName: marketName,
            currentMarketId: id
        }, () => {
            this.fetchEvents();
        })
    }
    changeTab = (tab) => {
        this.setState({
            activeTab: tab
        })
    }

    match = () => {
        return  <div id="page_leagues"  className="page">
            <SoccerHeader
                changeCurrentMarket={(id, marketName) => this.changeCurrentMarket(id, marketName)}
                marketsList={this.state.marketsList}
                marketsCol={this.marketsCol}
                currentMarketId={this.state.currentMarketId}
                sportName={this.state.sportName}
                leagueName={this.state.leagueName}
                allLeagues={this.state.leaguesFromLocation}
                changeLeague={(id) => this.changeLeague(id)}
                activeFilter={this.state.activeFilter}
                comeBack={(event, activeFilter) => this.props.comeBack(event, activeFilter)}
                changeTab={(tab) => this.changeTab(tab)}
            />

            <div  className="content tab-content clearfix">
                {
                    <TagName
                        currentmarketName={this.state.currentmarketName}
                        allMarkets={this.state.allMarkets}
                        currentEvents={this.state.currentEvents}
                        currentMarketId={this.state.currentMarketId}
                        sportId={this.state.sportId}
                        addToBetSlip={(info, bet, typeBet) => this.props.addToBetSlip(info, bet, typeBet)}
                        showOneGame={(event, allEventsDate) => this.showOneGame(event, allEventsDate)}
                        showForm={(type) => this.showForm(type)}
                        changeCurrentMarket={(id, marketName) => this.changeCurrentMarket(id, marketName)}
                        teams={this.state.teams}

                    />
                }



            </div>
        </div>
    }


    toggleEvents(id) {
        if ($('.'+id).hasClass('none')) {
            $('.'+id).removeClass('none');
        } else {
            $('.'+id).addClass('none');
        }
    }

    toggle = (type) => {
        if (type == "change_market") {
            this.setState({dropDown: !this.state.dropDown})
        }
    }

    selectEvent = (event, otherMatches) => {



        this.setState({
            eventId: event.FixtureId,
            currentGame: event,
            currentGameLeagueMatches: otherMatches
        })

    }


    getCurrentDayOfWeek() {
        let d = new Date();
        let weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        return weekday[d.getDay()];
    }

    removeEventId = () => {
        this.setState({
            eventId: null,
            currentGameLeagueMatches: []
        });
    }

    render() {
        return(

            this.state.eventId !== null ?
                <div>
                    <Route
                        path="/sports/soccer/today/game"
                        render={() =>   <OneGamesBets activeFilter={this.state.activeFilter}
                                                      changeGame={(id) => this.changeGame(id)}
                                                      showForm={(type, kind) => this.props.showForm(type, kind)}
                                                      currentGame={this.state.currentGame}
                                                      sportName={this.state.sportName}
                                                      fromPage={`today`}
                                                      removeEventId={() => {this.removeEventId()}}
                                                      getCurrentDayOfWeek={() => this.getCurrentDayOfWeek()}
                                                      leagueName={this.state.currentGame.Fixture.League.Name}
                                                      allEventsDate={this.state.currentGameLeagueMatches}
                                                      sportId={this.state.sportId}
                                                      fromTodayMatches={true}
                                                      addToBetSlip={(info, bet, typeBet) => this.props.addToBetSlip(info, bet, typeBet)}
                                                      odds={this.state.odds}
                        />}

                    />
                    <Route
                        path="/sports/soccer/euro-list/game"
                        render={() =>   <OneGamesBets activeFilter={this.state.activeFilter}
                                                      changeGame={(id) => this.changeGame(id)}
                                                      showForm={(type, kind) => this.props.showForm(type, kind)}
                                                      currentGame={this.state.currentGame}
                                                      sportName={this.state.sportName}
                                                      fromPage={`euro-list`}
                                                      removeEventId={() => {this.removeEventId()}}
                                                      leagueName={this.state.currentGame.Fixture.League.Name}
                                                      allEventsDate={this.state.currentGameLeagueMatches}
                                                      sportId={this.state.sportId}
                                                      fromTodayMatches={true}
                                                      addToBetSlip={(info, bet, typeBet) => this.props.addToBetSlip(info, bet, typeBet)}
                                                      odds={this.state.odds}
                        />}
                    />
                </div>

                :

                <div id="page_leagues"  className="page">
                    <SoccerHeader
                        marketsList={this.state.marketsList}
                        marketsCol={this.marketsCol}
                        currentMarketId={this.state.currentMarketId}
                        changeCurrentMarket={(id, marketName) => this.changeCurrentMarket(id, marketName)}
                        sportName={this.state.sportName}
                        leagueName={this.state.leagueName}
                        gameName={this.props.showType == 'euro-list' ? 'Elite Euro List' : this.getCurrentDayOfWeek() + "'s Matches"}
                        allEventsDate={this.state.allEventsDate}
                        allLeagues={{}}
                        activeFilter={this.state.activeFilter}
                        changeGame={(id) => this.changeGame(id)}
                    />
            <div  className="content tab-content clearfix">

            <section id="Matches_panel" className="tab-pane fade show active" role="tabpanel">
                <div className="CouponModule">
                    <div className="MarketGrid">
                        <div className="MarketGroup CouponMarketGroup">
                            {/*<div className="MarketGroupButton dropDown" onClick={() => this.toggleEvents("matches_events")}>*/}
                                {/*<div className="CouponMarketGroupButton_Title"><span>*/}
                                    {/*/!*{ Object.keys(this.state.allMarkets).length ? this.state.allMarkets[this.state.currentMarketId].alias != ""? this.state.allMarkets[this.state.currentMarketId].alias : this.state.allMarkets[this.state.currentMarketId].description : ""}*!/*/}
                                    {/*</span></div>*/}
                                {/*/!*<div className="dropDown_change_market" onClick={(e)=>{this.toggle('change_market'); e.stopPropagation() }}> <span className="ChangeMarket">Change Market</span></div>*!/*/}
                            {/*</div>*/}
                            {this.state.dropDown ?
                                <div className="ChangeMarket_drop_down_list">
                                    {
                                        Object.keys(this.state.allMarkets).map((market) => {
                                            return <div key={`${market}-tab`} className={`ChangeMarket_item ${this.state.currentmarketName == this.state.allMarkets[market] ? "active" : "" }`} onClick={() => {this.props.changeCurrentMarket(market, this.state.allMarkets[market].description);  this.toggle('change_market')} }>{this.state.allMarkets[market].alias != ''? this.state.allMarkets[market].alias : this.state.allMarkets[market].description}</div>
                                        })
                                    }

                                </div>
                                : ""
                            }

                            <div className="MarketGroup_Wrapper matches_events ">
                                {
                                    typeof this.state.currentEvents != "undefined" && Object.keys(this.state.currentEvents).length ?
                                        Object.keys(this.state.currentEvents).map((leagueId) => {


                                            let hasMatches = false;

                                            let matches = Object.keys(this.state.currentEvents[leagueId].events).map((date) => {
                                                // console.log('eventIndex', eventIndex)

                                                let events =   this.state.currentEvents[leagueId].events[date];



                                                let matchesOnDate = Object.keys(events).map((event) => {

                                                    return events[event].Markets.find((element, ind, arr, thisArg) => {

                                                        if (element.Id == this.state.currentMarketId) {
                                                            hasMatches = true;
                                                            return true
                                                        } else {
                                                            return false
                                                        }
                                                    }) ?
                                                        <div className="content_wrapp" key={`${events[event].FixtureId}-${date}`}>
                                                            <div
                                                                className="MarketCouponFixtureLabelBase Market_General Market_HasLabels">
                                                                <div
                                                                    className="CouponParticipantWithBookCloses CouponParticipantIPPGBase">
                                                                    <div
                                                                        className="CouponParticipantWithBookCloses_LeftSideContainer">
                                                                        {
                                                                            events[event]['Livescore'] === null ?
                                                                                <div className="CouponParticipantWithBookCloses_BookCloses" style={{backgroundColor: 'transparent', textAlign:'center'}}>
                                                                                    {moment(moment.utc(events[event].Fixture.StartDate)).local().format("HH:mm")}
                                                                                </div>
                                                                            :
                                                                                <div className="CouponParticipantWithBookCloses_BookCloses" style={{backgroundColor: '#a7a7a7', color:'#444', textAlign:'center'}}>
                                                                                    <FootballTime setIntervalCount={this.state.setIntervalCount} event={events[event]} eventStartDate={events[event].Fixture.StartDate} serverTimestamp={event.ServerTimestamp}></FootballTime>
                                                                                </div>
                                                                        }
                                                                    </div>
                                                                    <div
                                                                        className="CouponParticipantWithBookCloses_NameContainer">
                                                                        {
                                                                            (events[event]['Livescore'] === null || typeof events[event]['Livescore']['Scoreboard']['Results'] == 'undefined') ?
                                                                                <NavLink
                                                                                    to={`${this.props.showType == 'euro-list' ? '/sports/soccer/euro-list/game' : '/sports/soccer/today/game'}`}
                                                                                    className="CouponParticipantWithBookCloses_Name"
                                                                                    onClick={() => this.selectEvent(events[event], events)}>
                                                                                    {`${events[event].Fixture.Participants[0].Name} v ${events[event].Fixture.Participants[1].Name}`}
                                                                                </NavLink>
                                                                                :
                                                                                <div className="CouponParticipantWithBookCloses_Name" onClick={() => location.href = '//' + location.host + '/in-play/event_view?id='+events[event].FixtureId}>
                                                                                    {events[event].Fixture.Participants[0].Name}
                                                                                    <span style={{color: '#ffdf1b', paddingLeft: '10px'}}>{events[event]['Livescore']['Scoreboard']['Results'][0]['Value']}-</span>
                                                                                    <span style={{color: '#ffdf1b', paddingRight: '10px'}}>{events[event]['Livescore']['Scoreboard']['Results'][1]['Value']}</span>
                                                                                    {events[event].Fixture.Participants[1].Name}
                                                                                </div>
                                                                        }
                                                                    </div>


                                                                    <div
                                                                        className="CouponParticipantWithBookCloses_Icons CouponParticipantWithBookCloses_Icons-2">
                                                                        <div className="CouponParticipantWithBookCloses_IconsAudioAvailable CouponParticipantWithBookCloses_IconsGeneric"/>
                                                                        <div className="CouponParticipantWithBookCloses_IconsGeneric CouponParticipantWithBookCloses_IconsStats"/>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            {/*start*/}
                                                            <ManagMatch
                                                                fromPage="all"
                                                                eventId={events[event].FixtureId}
                                                                typeSport={this.state.sportId}
                                                                participants={events[event].Fixture.Participants}
                                                                //bets={event.bets}
                                                                currentMarket={this.state.currentmarketName}
                                                                markets={events[event].Markets}
                                                                blockNameOdd={true}
                                                                addToBetSlip={(info, bet, typeBet) => this.props.addToBetSlip(info, bet, typeBet)}
                                                            />

                                                            <div className="MarketCouponFixtureLink Market_General">
                                                                <div className="CouponFixtureLinkParticipant">
                                                                    <NavLink to={`${this.props.showType == 'euro-list' ? '/sports/soccer/euro-list/game' : '/sports/soccer/today/game'}`}
                                                                             className="CouponFixtureLinkParticipant_Name"
                                                                             onClick={() => this.selectEvent(events[event], events)}>
                                                                        {events[event].MarketsCount}
                                                                    </NavLink>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        : "";


                                                });


                                                return <div style={{width: '100%'}}>
                                                    <div className="header_wrapp">
                                                        <div className={`MarketCouponFixtureLabelBase Market_General Market_HasLabels ${this.marketsCol[this.state.currentMarketId].length === 3 ? "three_col" : ""}`}>
                                                            <div className="MarketColumnHeader MarketHeaderLabel MarketHeaderLabel_Date">
                                                                {moment(moment.utc(date)).local().format("ddd DD MMM")}
                                                            </div>
                                                        </div>
                                                        {
                                                            Object.keys(this.marketsCol).map((id) => {
                                                                if (id == this.state.currentMarketId) {
                                                                    var countCol = this.marketsCol[id].length;

                                                                    return this.marketsCol[id].map((col, index) => {

                                                                        return  <div key={`${col}-${leagueId}`} className="MarketCouponValuesExplicit33 Market_General Market_PWidth-12-3333">
                                                                            <div className="MarketColumnHeader MarketCouponValuesExplicit33_ReducedPadding">{col}</div>
                                                                        </div>
                                                                    })
                                                                }
                                                            })
                                                        }

                                                        <div className="MarketCouponFixtureLink Market_General">
                                                            <div className="MarketColumnHeader">&nbsp;</div>
                                                        </div>
                                                    </div>
                                                    {matchesOnDate}
                                                </div>

                                            });





                                            return hasMatches ?

                                                <div key={leagueId}>

                                                    <div className="MarketGroupButton dropDown" onClick={()=>this.toggleEvents(leagueId)}>
                                                        <div className="CouponMarketGroupButton_Title">
                                                            <span>{this.state.currentEvents[leagueId].name}</span>
                                                        </div>
                                                    </div>

                                                    <div key={leagueId} className={`MarketGroupContainer MarketGroupContainer_HasLabels ${leagueId}`}>

                                                        {/*<div className="header_wrapp">*/}
                                                            {/*<div className={`MarketCouponFixtureLabelBase Market_General Market_HasLabels ${this.marketsCol[this.state.currentMarketId].length === 3 ? "three_col" : ""}`}>*/}
                                                                {/*<div className="MarketColumnHeader MarketHeaderLabel MarketHeaderLabel_Date">{moment(displayDate).format("ddd DD MMM")} {displayDate}</div>*/}
                                                            {/*</div>*/}
                                                            {/*{*/}
                                                                {/*Object.keys(this.marketsCol).map((id) => {*/}
                                                                    {/*if (id == this.state.currentMarketId) {*/}
                                                                        {/*var countCol = this.marketsCol[id].length;*/}

                                                                        {/*return this.marketsCol[id].map((col, index) => {*/}

                                                                            {/*return  <div key={`${col}-${leagueId}`} className="MarketCouponValuesExplicit33 Market_General Market_PWidth-12-3333">*/}
                                                                                {/*<div className="MarketColumnHeader MarketCouponValuesExplicit33_ReducedPadding">{col}</div>*/}
                                                                            {/*</div>*/}
                                                                        {/*})*/}
                                                                    {/*}*/}
                                                                {/*})*/}
                                                            {/*}*/}

                                                            {/*<div className="MarketCouponFixtureLink Market_General">*/}
                                                                {/*<div className="MarketColumnHeader">&nbsp;</div>*/}
                                                            {/*</div>*/}
                                                        {/*</div>*/}

                                                        {matches}

                                                    </div>
                                                </div>
                                                : ""
                                        })
                                        : ""
                                }

                            </div>



                        </div>


                        <div className="LiveAlertsMarketGroupPopupLauncher_BackgroundWrapper">
                            <div className="LiveAlertsMarketGroupPopupLauncher">
                                <div className="LiveAlertsMarketGroupPopupLauncher_ContentWrapper">
                                    <div className="LiveAlertsMarketGroupPopupLauncher_HeaderLabel">Live Match Alerts</div>
                                    <div className="LiveAlertsMarketGroupPopupLauncher_DescriptionLabel">Notifications for goals, results, and more</div>
                                </div>
                                <div className="LiveAlertsMarketGroupPopupLauncher_ContentWrapper">
                                    <div className="LiveAlertsMarketGroupPopupLauncher_OpenButton" onClick={() => this.props.showForm("match")} >Open Alerts</div>
                                </div>
                            </div>
                        </div>

                        <div className="MarketGroup CouponMarketGroup">
                            <div className="MarketGroupButton CouponMarketGroupButton" data-toggle="collapse" data-target="#collapse_Soccer_Matches_Related_Markets" aria-expanded="false" aria-controls="collapse_Soccer_Matches_Related_Markets">
                                <div className="CouponMarketGroupButton_Title"><span>Related Markets</span></div>
                            </div>
                            <div className="Market-Cluster collapse show" id="collapse_Soccer_Matches_Related_Markets" aria-expanded="true">
                                <div  className="item"><label  className="Market-AllLabel"><span>To Win Outright</span></label></div>
                                <div  className="item"><label  className="Market-AllLabel"><span>Without Man City</span></label></div>
                                <div  className="item"><label  className="Market-AllLabel"><span>Top Goalscorer</span></label></div>
                                <div  className="item"><label  className="Market-AllLabel"><span>To be Relegated</span></label></div>
                                <div  className="item"><label  className="Market-AllLabel"><span>Not to be Relegated</span></label></div>
                                <div  className="item"><label  className="Market-AllLabel"><span>To Finish in Top 4</span></label></div>
                                <div  className="item"><label  className="Market-AllLabel"><span>Not to Finish in Top 4</span></label></div>
                                <div  className="item"><label  className="Market-AllLabel"><span>To Finish in Top 6</span></label></div>
                                <div  className="item"><label  className="Market-AllLabel"><span>To Finish in Top Half</span></label></div>
                                <div  className="item"><label  className="Market-AllLabel"><span>To Finish in Bottom Half</span></label></div>
                                <div  className="item"><label  className="Market-AllLabel"><span>To Finish Bottom</span></label></div>
                                <div  className="item"><label  className="Market-AllLabel"><span>Total Points against Team</span></label></div>
                                <div  className="item"><label  className="Market-AllLabel"><span>Competition Specials</span></label></div>
                                <div  className="item"><label  className="Market-AllLabel"><span>PFA Player of the Year</span></label></div>
                                <div  className="item"><label  className="Market-AllLabel"><span>Tournament Totals</span></label></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            </div>
            </div>
        )
    }
}

export default CurrentDayOfWeekMatches;
