import React from 'react';
import ActionPanel from "../actionPanel";
import "../../../assets/style/style_in-play.css"
import "../../../assets/style/jquery.mCustomScrollbar.min.css"
import Overview from "./in_play/overview";
import EventViews from "./in_play/event_view";
import Schedule from "./in_play/schedule";
import QuickBet from "../shared/modal/quick_bet";
import DefaultPage from "../shared/defaultPage";
import NavLink from "react-router-dom/es/NavLink";
import {Route, Switch} from "react-router-dom";
import qs from "query-string";
import QuickBetDialog from "../shared/modal/quickBetDialog";



class Inplay extends DefaultPage {
    constructor(props) {
        super(props);
        this.state = {
            allSports: this.props.allSports,
            allEvents: [],
            currentEvent: {},
            defaultEvent: {},
            isOverview:true,
            isEventView:false,
            isSchedule:false,
            localAlerts:this.props.localAlerts,
            sports: this.props.sports,
            bets: this.props.bets,
            currentTotalStake: this.props.currentTotalStake,
            multiCombine: this.props.multiCombine,
            quickBet: this.props.quickBet,
            odds: this.props.odds,
            currentFixtureId: this.getCurrentFixtureId(),
            quickBetEnabled: this.props.quickBetEnabled,
            unsettled_bets: this.props.unsettled_bets,
            /** Только при заданном id выводится попап **/
            selectedQuickBetId: false,
            showScoreboard: true,
            quickBetDialog: false,
            maxSelections: this.props.maxSelections,
            stretch: false,
        };
    }
    resizeBlock =()=> {
        if (this.state.stretch) {
            this.setState({
                stretch: false
            });
        } else {
            this.setState({
                stretch: true
            });
        }
    }
    getCurrentFixtureId=()=>{
        if(typeof window.localStorage.getItem("selectedEventId") != 'undefined'){
            return window.localStorage.getItem("selectedEventId");
        } else {
            let getParams = this.parseGetParams();
            if(typeof getParams['fixtureId'] != 'undefined'){
                return getParams['fixtureId'];
            } else {
                return null;
            }
        }
    }

    parseGetParams() {
        var $_GET = {};
        var __GET = window.location.search.substring(1).split("&");
        for(var i=0; i<__GET.length; i++) {
            var getVar = __GET[i].split("=");
            $_GET[getVar[0]] = typeof(getVar[1]) == "undefined" ? "" : getVar[1];
        }

        return $_GET;
    }

    componentWillReceiveProps(nextProps){

        if(typeof nextProps.allEvents != 'undefined' && Object.keys(nextProps.allEvents).length){
            // let firstLoad = false;
            // if(Object.keys(this.state.defaultEvent).length == 0){
            //     firstLoad = true;
            //     this.setDefaultEvent(nextProps.allEvents);
            // }
            // if(this.state.currentFixtureId != null){
            //     if(this.setCurrentEvent(nextProps.allEvents, this.state.currentFixtureId)){
            //         if(firstLoad){
            //             this.changeContent("event_view");
            //         }
            //     }
            // }
            this.setState({
                allEvents: nextProps.allEvents,
                unsettled_bets: nextProps.unsettled_bets
            });
        }

        this.setState({
            allSports: nextProps.allSports,
            odds: nextProps.odds,
            sports: nextProps.sports,
            bets: nextProps.bets,
            localAlerts: nextProps.localAlerts,
            currentTotalStake: nextProps.currentTotalStake,
            multiCombine: nextProps.multiCombine,
            quickBet: nextProps.quickBet,
            maxSelections: nextProps.maxSelections
        });
    }

    setCurrentEvent=(allEvents, currentFixtureId)=>{
    //console.log("allEvents",allEvents);
    //console.log("currentFixtureId", currentFixtureId)
        let currentidGame =  qs.parse(currentFixtureId, { ignoreQueryPrefix: true }).id;
        if( typeof currentidGame == "undefined" ){
            currentidGame = this.state.currentFixtureId
        }
      //console.log("currentidGame", currentidGame)
        for (let sportKey in allEvents) {
            for (let eventKey in allEvents[sportKey]) {
                if (
                    typeof allEvents[sportKey][eventKey]['FixtureId'] != 'undefined' &&
                    allEvents[sportKey][eventKey]['FixtureId'] == currentidGame
                ){
                 //this.setState({currentEvent: allEvents[sportKey][eventKey]});
                  //  console.log('FIND EVENT', allEvents[sportKey][eventKey]);

                    return allEvents[sportKey][eventKey];
                }
            }
        }
       return this.setDefaultEvent(allEvents)
        //return false;
    }

    setDefaultEvent=(allEvents)=>{
        for (let sportKey in allEvents) {
            for (let eventKey in allEvents[sportKey]) {
                if(sportKey == 6046 ){
                    //this.setState({defaultEvent: allEvents[sportKey][eventKey]});
                    // console.log("RESULR", allEvents[sportKey][eventKey])
                    return  allEvents[sportKey][eventKey];
                }
            }
        }

        return false;
    }

    componentDidMount() {
       // var idx = 0;
      //  let tempArr = this.state.sports;
        // setInterval(() => {
        //     tempArr[6046].map((event) => {
        //       //  console.log("test", event)
        //         if (event.FixtureId == 4263049) {
        //             event.Livescore.Scoreboard.Results[0].Value = ++idx
        //         }
        //         this.setState({
        //             sports: tempArr
        //         })
        //
        //     })
        // }, 10000);

        if(
            typeof this.props.allEvents != 'undefined'
        ){
            let test = this.setDefaultEvent(this.props.allEvents);

           // console.log('задаю дефолт ивент из componentDidMount', test);

            // if(typeof this.state.currentFixtureId != 'undefined'){
            //     this.setCurrentEvent(this.props.allEvents, this.state.currentFixtureId);
            // }
            this.setState({
                allEvents: this.props.allEvents
            });
        }

        // let currentStake = this.props.getCurrentStake();
        // if (currentStake) {
        //     this.setState({
        //         bets: currentStake.bets,
        //         currentTotalStake: currentStake.currentTotalStake,
        //         multiCombine: currentStake.multiCombine
        //     })
        // }

    }

    componentDidUpdate() {
        if (window.localStorage.getItem("currentStake") != null || window.localStorage.getItem("currentStake") != undefined) {
            let currentStake = JSON.parse(window.localStorage.getItem("currentStake"));
            // $('.selected_bet').removeClass("selected_bet");
            for (var i in currentStake.bets) {
                $('#'+ i +'-in_play, .'+ i +'-in_play').addClass("selected_bet")
            }
        }
    }

    changeContent=(tab)=> {
        if(tab == "overview"){
            this.setState({
                isOverview:true,
                isEventView:false,
                isSchedule:false,
            })
        }
        if(tab == "event_view"){
            this.setState({
                isOverview:false,
                isEventView:true,
                isSchedule:false,
            })
        }
        if(tab == "schedule"){
            this.setState({
                isOverview:false,
                isEventView:false,
                isSchedule:true,
            })
        }
        if ($('.nav-link.top').hasClass('active'))
            $('.nav-link.top').removeClass('active')
        else(
            $('.nav-link.top').addClass('active')
        )
        if(!this.state.showScoreboard && tab != "event_view"){
            $(".scoreboard_btn").hide()
        }
        if(!this.state.showScoreboard && tab == "event_view"){
            $(".scoreboard_btn").show()
        }
    }


    showScoreboard = () => {
        if($('.score_board_container').hasClass("show") ) {
            $('.score_board_container').removeClass("show");
            $('.scoreboard_btn').addClass("appear");
            this.setState({
                showScoreboard: false
            })

        } else{
            $('.score_board_container').addClass("show");
            $('.scoreboard_btn').removeClass("appear");
            this.setState({
                showScoreboard: true
            })

        }
    }

    setQuickBetId=(idBet)=>{
        /** Удаление по крестику (закрытие попапа) **/
        if(this.state.selectedQuickBetId !== false && idBet === false){
            this.removeBet(this.state.selectedQuickBetId);
            $("#" + this.state.selectedQuickBetId+'-in_play').removeClass("selected_bet");
            this.props.changeStateQuickBet({})
        }
        this.setState({
            selectedQuickBetId: idBet
        })
        this.props.saveBetToLocalStorage(this.state.bets, this.state.currentTotalStake, this.state.multiCombine)
    }
    enableQuickBet = () => {
        window.localStorage.setItem("quickBet", 'enable');
        this.setState({
            quickBetEnabled: true
        })
    }
    disableQuickBet = () => {
        window.localStorage.setItem("quickBet", 'disable');
        if(this.state.selectedQuickBetId){
            this.removeBet(this.state.selectedQuickBetId);
        }
        this.setState({
            selectedQuickBetId: false,
            quickBetEnabled: false,
        })
    }

    closeModal = (type) => {
        this.setState({
            [type]: !this.state[type]
        })
    }

    changeProps = (props, ...other) => {
        let {[props]:oldProps} = this.state
        this.setState({
            [props]: !oldProps
        })
    }

    render() {

        return(
            <div className="main_content in-play">
                <div className="main_content_wrapper">
                    <div className="home_page">

                        <div className="columns_container">
                            <div className="column_one">
                                <div className="home_page_header in-play">

                                    <ul className="nav nav-tabs">

                                        <li className="nav-item">
                                            <NavLink to="/in-play/overview" className={`nav-link ${this.state.isOverview  ? 'active' : ''}`}  title="overview" onClick={() =>{ this.disableQuickBet(); this.changeContent("overview")}}>Overview</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/in-play/event_view" className={`nav-link ${this.state.isEventView ? 'active' : ''}`}   title="event_view" onClick={() =>{ this.disableQuickBet(); this.changeContent("event_view")} }>Event View</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/in-play/schedule" className={`nav-link ${this.state.isSchedule  ? 'active' : ''}`}   title="schedule" onClick={() =>{this.disableQuickBet(); this.changeContent("schedule")}}>Schedule</NavLink>
                                        </li>
                                    </ul>
                                    <span className={`scoreboard_btn ${this.state.showScoreboard? "" : "appear"}`} onClick = {() => this.showScoreboard(true)}>Show Scoreboard</span>


                                </div>
                                <div className="tab-content tables">
                                    <Switch>

                                        <Route  exact path="/in-play" render={() => <Overview
                                                                                                allSports={this.state.allSports}
                                                                                                sports={this.state.sports}
                                                                                                serverTimestamp={this.props.serverTimestamp}
                                                                                                addToBetSlip={(info, bet, typeBet) => this.addToBetSlip(info, bet, typeBet)}
                                                                                                selectedQuickBetId ={this.state.selectedQuickBetId}
                                                                                                footer={this.props.footer}
                                                                                            /> }/>
                                        <Route  path="/in-play/overview" render={() => <Overview
                                                                                                allSports={this.state.allSports}
                                                                                                sports={this.state.sports}
                                                                                                serverTimestamp={this.props.serverTimestamp}
                                                                                                addToBetSlip={(info, bet, typeBet) => this.addToBetSlip(info, bet, typeBet)}
                                                                                                selectedQuickBetId ={this.state.selectedQuickBetId}
                                                                                                footer={this.props.footer}
                                                                                        /> }/>
                                        <Route  path="/in-play/event_view" render={(props) => <EventViews
                                                                                                {...props}
                                                                                                localAlerts={this.state.localAlerts}
                                                                                                allSports={this.state.allSports}
                                                                                                test={props.location.search}
                                                                                                sports={this.state.sports}
                                                                                                //event={typeof this.state.currentEvent['FixtureId'] != 'undefined' ? this.state.currentEvent : this.state.defaultEvent}
                                                                                                event={ this.setCurrentEvent(this.state.allEvents, props.location.search)}
                                                                                                //defaultEvent={this.state.defaultEvent}
                                                                                                serverTimestamp={this.props.serverTimestamp}
                                                                                                addToBetSlip={(info, bet, typeBet) => this.addToBetSlip(info, bet, typeBet)}
                                                                                                quickBetEnabled={this.state.quickBetEnabled}
                                                                                                selectedQuickBetId ={this.state.selectedQuickBetId}
                                                                                                showScoreboard = {this.state.showScoreboard}
                                                                                                showScoreboardFunc={() => this.showScoreboard()}
                                                                                                changeContent = {(tab)=>this.changeContent(tab)}
                                                                                                footer={this.props.footer}
                                                                                                stretch={this.state.stretch}
                                                                                                saveAlertsToLocalStorage={(alerts) =>this.props.saveAlertsToLocalStorage(alerts)}
                                                                                            />}/>
                                        <Route  path="/in-play/schedule" render={() => <Schedule
                                                setSelectedEventFromOtherPage={(eventObj) => this.props.setSelectedEventFromOtherPage(eventObj)}
                                                odds={this.state.odds}
                                                allSports={this.state.allSports}
                                                sports={this.state.sports}
                                                footer={this.props.footer}
                                            /> }
                                        />

                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <ActionPanel
                    addToBetSlip={(info, bet, typeBet) => this.addToBetSlip(info, bet, typeBet)}
                    allEvents={this.state.allEvents}
                    setBalance={() => this.props.setBalance()}
                    showTreblesModal={(obj) => this.props.showTreblesModal(obj)}
                    bets={this.state.bets}
                    currentTotalStake={this.state.currentTotalStake}
                    multiCombine={this.state.multiCombine}
                    page={`in-play`}
                    removeBet={(id) => this.removeBet(id)}
                    calculationBet={(countBets, selectedBet) => this.calculationBet(countBets, selectedBet)}
                    setToken={(token) => this.props.setToken(token)}
                    loginToken={this.props.loginToken}
                    acceptChanged={() => this.acceptChanged()}
                    fetchBetHistory={(count) => this.props.fetchBetHistory(count)}
                    unsettled_bets={this.state.unsettled_bets}
                    setUnsettledBets={(count) => this.props.setUnsettledBets(count)}
                    showForm={(type, kind) => this.props.showForm(type, kind)}
                    updateProfile={(obj) => this.props.updateProfile(obj)}
                    saveBetToLocalStorage={(bets, total, combine) => this.props.saveBetToLocalStorage(bets, total, combine)}
                    quickBetEnabled={this.state.quickBetEnabled}
                    enableQuickBet={() => {this.enableQuickBet()}}
                    disableQuickBet={() => {this.disableQuickBet()}}
                    quickBet={this.state.quickBet}
                    maxSelections={this.state.maxSelections}
                    changeProps={(props) => this.changeProps(props)}
                    resizeBlock = {()=>this.resizeBlock()}
                    stretch = {this.state.stretch}
                />
                {
                    this.state.selectedQuickBetId && Object.keys(this.state.quickBet).length?
                        <QuickBet quickBet={this.state.quickBet}
                                  loginToken={this.props.loginToken}
                                  disableQuickBet={() => this.disableQuickBet()}
                                  setBalance={() => this.props.setBalance()}
                                  removeBet={(id) => this.removeBet(id)}
                                  changeStateQuickBet={(quickBetArr) => this.props.changeStateQuickBet(quickBetArr)}
                                  selectedQuickBetId={this.state.selectedQuickBetId}
                                  currentTotalStake={this.state.currentTotalStake}
                                  saveBetToLocalStorage={(bets ,total) => this.props.saveBetToLocalStorage(bets, total, {})}
                                  setQuickBetId={(id) => this.setQuickBetId(id)}/>
                        : ""
                }
                {
                    this.state.quickBetDialog?
                        <div className="Modal_wrapp">
                            <QuickBetDialog closeModal={(type) => this.closeModal(type)}
                                            removeBet={(id) => this.removeBet(id)}
                                            enableQuickBet={() => this.enableQuickBet()}
                            />
                        </div>
                        :""
                }
            </div>
        )

    }
}

export default Inplay;
