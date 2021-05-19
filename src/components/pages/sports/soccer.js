import React from 'react';
import {Route} from 'react-router-dom';
import SoccerHeader from "../../shared/tables/topHeader/soccerHeader";
import SoccerTemplate from "../../shared/tables/prematchTemplates/sportsMarketTemplate/soccerTemplate";
import OneGamesSoccer from "../../shared/tables/prematchTemplates/oneSportGamesBets/oneGamesSoccer";
import CurrentDayOfWeekMatches from "../../shared/tables/prematchTemplates/mainList/currentDayOfWeekMatches";
import {
    getEventsGrouped,
    getLeagueTableData,
    getEventsGroupedbyDate,
    getLeagues,
    getMarkets,
    getEventsGroupedByLeagueMarketGroupMarket
} from "../../helpers/data";
import moment from "moment/moment";
import OneGamesBets from "../../shared/tables/oneGameBets";




class Soccer extends React.Component {
    constructor(props) {
        super(props);

        let hasSelectedEventFromOtherPage = typeof this.props.selectedEventFromOtherPage != 'undefined' &&
            this.props.selectedEventFromOtherPage != null &&
            typeof this.props.selectedEventFromOtherPage.FixtureId != 'undefined';

        this.state = {
            showGamesBets: false,
            showCurrentDayOfWeekMatches: false,
            showEliteEuroListMatches: false,
            allEvents: {},
            currentLeagueTableData: [],
            leagueName: hasSelectedEventFromOtherPage ? this.props.selectedEventFromOtherPage.Fixture.League.Name : "",
            sportName: "Soccer",
            sportId: 6046,
            odds: this.props.odds,
            currentMarketId: false,
            currentLeagueId: hasSelectedEventFromOtherPage ? this.props.selectedEventFromOtherPage.Fixture.League.Id : this.props.currentLeagueId,
            activeFilter: "all",
            selectedEventFromOtherPage: this.props.selectedEventFromOtherPage
        };
        this.showGamesBets = this.showGamesBets.bind(this);
    }


    componentWillReceiveProps(nextProps){

        let hasSelectedEventFromOtherPage = typeof nextProps.selectedEventFromOtherPage != 'undefined' &&
            nextProps.selectedEventFromOtherPage != null &&
            typeof nextProps.selectedEventFromOtherPage.FixtureId != 'undefined';
        
        this.setState({
            odds: nextProps.odds,
            currentLeagueId: hasSelectedEventFromOtherPage ? nextProps.selectedEventFromOtherPage.Fixture.League.Id : nextProps.currentLeagueId,
            selectedEventFromOtherPage: nextProps.selectedEventFromOtherPage
        })
    }
    // componentDidUpdate(prevProps, prevState){
    //     if(this.state.currentLeagueId != false && this.state.currentLeagueId == prevState.currentLeagueId){
    //         this.setState({
    //             currentLeagueId: false
    //         })
    //     }
    // }


    componentDidMount() {
        let date_from =  moment.utc().format('YYYY-MM-DD HH:mm:ss');
        let date_to = moment.utc().add(1,'year').format('YYYY-MM-DD HH:mm:ss');
        this.fetchEventsGrouped(date_from, date_to);
    }

    fetchEventsGrouped = (date_from, date_to, time = null) => {
        if (time != null ) {
            this.setState({
                activeFilter: time
            })
        }
        getEventsGrouped(this.state.odds,date_from, date_to, this.state.sportId, false, (err, data) => {
            if (!err) {

                let hasSelectedEventFromOtherPage = typeof this.state.selectedEventFromOtherPage != 'undefined' &&
                    this.state.selectedEventFromOtherPage != null &&
                    typeof this.state.selectedEventFromOtherPage.FixtureId != 'undefined';

                if(hasSelectedEventFromOtherPage){
                    for(let key in data['1'].locations){
                        if(data['1'].locations[key]['id'] == this.state.selectedEventFromOtherPage['Fixture']['Location'].Id){
                            this.setState({
                                leaguesFromLocation: data['1'].locations[key].leagues,
                                currentMarketId: 1
                            })
                        }
                    }
                }

                this.setState({
                    allEvents: data
                })
            } else {
                console.log('error', err)
            }
        })
    }



    fetchLeagueTableData = (leagueId = this.state.currentLeagueId) => {
         getLeagueTableData(leagueId, (err, data) => {
            if (!err) {
                console.log("!!!!!", data);
                this.setState({
                    currentLeagueTableData: data,
                })
            } else {
                console.log('error', err)
            }
        });
    }

    showGamesBets = (leagueName, leagueId, marketId, leaguesFromLocation) => {
        if(leagueId) {
            this.fetchLeagueTableData(leagueId);
        }
        this.setState({
            showGamesBets: true,
            leagueName: leagueName,
            currentLeagueId: leagueId,
            currentMarketId: marketId,
            leaguesFromLocation: leaguesFromLocation
        });

        this.props.changeCurrentLeagueId(leagueId);
    }

    showEliteEuroListMatches = () => {
        this.props.changeCurrentLeagueId(false);
        this.setState({
            showGamesBets: false,
            showEliteEuroListMatches: true,
            currentLeagueId: false
        });
    }

    showCurrentDayOfWeekMatches = () => {
        this.props.changeCurrentLeagueId(false);
        this.setState({
            showGamesBets: false,
            showCurrentDayOfWeekMatches: true,
            currentLeagueId: false
        });
    }

    comeBack = (event = null, activeFilter = "all") => {
        console.log("comeBack", event, activeFilter)
        if (event === null || event === false) {
            this.setState({
                showGamesBets: false,
               // leagueName: "",
                currentLeagueId: false,
                currentEvents: [],
                currentMarketId: false,
                activeFilter: activeFilter
            })
        } else {
            this.setState({
                showGamesBets: false,
               // leagueName: "",
                //currentLeagueId: false,
                currentEvents: [],
                currentMarketId: false,
                activeFilter: activeFilter
            })
        }

    }

    goToInPlay(){
        location.href = '//' + location.host + '/in-play';
    }

    mainSoccer = () => {
        return <div id="page_soccer" className="page">
            <SoccerHeader
                sportName={this.state.sportName}
                leagueName={this.state.leagueName}
                allLeagues={{}}
                activeFilter={this.state.activeFilter}
                fetchEventsGrouped={(date_from, date_to, time) => this.fetchEventsGrouped(date_from, date_to, time)}
                currentLeagueTableData = {this.state.currentLeagueTableData}
            />
            <div className="content">
                <div className="SplashContainer">
                    <div className="tab-content">
                        <div className="tab-pane" id="next-24-hrs">
                            <div className="NoAvailableMarkets ">
                                <div className="desc">Sorry, there are no markets currently available in this
                                    category.
                                </div>
                                <div className="info">At bet365 we aim to offer the most comprehensive betting service
                                    across all international sports. If you feel we are not covering an event or market
                                    that we should please contact us.
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane active" id="all">
                            <div className="LiveInPlayHeader">
                                <div className="LiveInPlayHeader_ButtonBar  nav nav-tabs" role="tablist">
                                    <a href="#Coupons-panel" className="LiveInPlayHeader_ButtonBarButton  active"
                                       id="Coupons-tab" data-toggle="tab" role="tab">Coupons</a>
                                    {/*<a href="#Outrights-panel" className="LiveInPlayHeader_ButtonBarButton"*/}
                                       {/*id="Outrights-tab" data-toggle="tab" role="tab">Outrights</a>*/}
                                </div>
                                <div className="LiveInPlayHeader_Container">
                                    <div className="LiveInPlayHeader_wrapp">
                                        <div className="LiveInPlayHeader_LiveLabel">Live</div>
                                        <div className="LiveInPlayHeader_InPlayLabel">In-Play</div>
                                        <div className="LiveInPlayHeader_InPlayNumber"
                                             onClick={() => this.goToInPlay()}>{this.state.allEvents.length}</div>
                                    </div>

                                </div>
                            </div>
                            {/*<div className="tab-content clearfix">*/}
                            <section id="Coupons-panel" className="ContentPlate">
                                <SoccerTemplate allEvents={this.state.allEvents}
                                        sportId={this.state.sportId}
                                        showGamesBets={(leagueName, leagueId, id, arr) => this.showGamesBets(leagueName, leagueId, id, arr)}
                                        showCurrentDayOfWeekMatches={() => this.showCurrentDayOfWeekMatches()}
                                        showEliteEuroListMatches={() => this.showEliteEuroListMatches()}
                                />
                            </section>
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }

    changeCurrentMarket = (marketId, marketName) => {
        this.setState({
            currentMarketId: marketId,
            currentMarketName: marketName
        })
    }

    render() {
        return(
        <div className="inner-wrapper" style={{overflow: "hidden"}}>


            {
                this.state.currentLeagueId === false ?

                        this.state.showCurrentDayOfWeekMatches ?
                            <div>
                                <Route  path="/sports/soccer/today" render={() =>  <CurrentDayOfWeekMatches
                                    // leagueName={this.state.leagueName}
                                    // currentLeagueId={this.state.currentLeagueId}
                                    sportName={this.state.sportName}
                                    sportId={this.state.sportId}
                                    comeBack={(event, activeFilter) => this.comeBack(event, activeFilter)}
                                    // currentMarketId={this.state.currentMarketId}
                                    // leaguesFromLocation={this.state.leaguesFromLocation}
                                    addToBetSlip={(info, bet, typeBet) => this.props.addToBetSlip(info, bet, typeBet)}
                                    showForm={(type, kind) => this.props.showForm(type, kind)}
                                    activeFilter={this.state.activeFilter}
                                    odds={this.state.odds}
                                /> } />
                                <Route exact path="/sports/soccer" render={() => this.mainSoccer() } />
                            </div>
                        :

                            this.state.showEliteEuroListMatches ?

                                <div>
                                    <Route  path="/sports/soccer/euro-list" render={() =>  <CurrentDayOfWeekMatches
                                        // leagueName={this.state.leagueName}
                                        // currentLeagueId={this.state.currentLeagueId}
                                        sportName={this.state.sportName}
                                        sportId={this.state.sportId}
                                        showType={`euro-list`}
                                        comeBack={(event, activeFilter) => this.comeBack(event, activeFilter)}
                                        // currentMarketId={this.state.currentMarketId}
                                        // leaguesFromLocation={this.state.leaguesFromLocation}
                                        addToBetSlip={(info, bet, typeBet) => this.props.addToBetSlip(info, bet, typeBet)}
                                        showForm={(type, kind) => this.props.showForm(type, kind)}
                                        activeFilter={this.state.activeFilter}
                                        odds={this.state.odds}
                                    /> } />
                                    <Route exact path="/sports/soccer" render={() => this.mainSoccer() } />
                                </div>

                                : <div>
                                    <Route path="/sports/soccer/today" render={() =>  <CurrentDayOfWeekMatches
                                        // leagueName={this.state.leagueName}
                                        // currentLeagueId={this.state.currentLeagueId}
                                        sportName={this.state.sportName}
                                        sportId={this.state.sportId}
                                        comeBack={(event, activeFilter) => this.comeBack(event, activeFilter)}
                                        // currentMarketId={this.state.currentMarketId}
                                        // leaguesFromLocation={this.state.leaguesFromLocation}
                                        addToBetSlip={(info, bet, typeBet) => this.props.addToBetSlip(info, bet, typeBet)}
                                        showForm={(type, kind) => this.props.showForm(type, kind)}
                                        activeFilter={this.state.activeFilter}
                                        odds={this.state.odds}
                                    /> } />
                                    <Route path="/sports/soccer/euro-list" render={() =>  <CurrentDayOfWeekMatches
                                        // leagueName={this.state.leagueName}
                                        // currentLeagueId={this.state.currentLeagueId}
                                        sportName={this.state.sportName}
                                        sportId={this.state.sportId}
                                        showType={`euro-list`}
                                        comeBack={(event, activeFilter) => this.comeBack(event, activeFilter)}
                                        // currentMarketId={this.state.currentMarketId}
                                        // leaguesFromLocation={this.state.leaguesFromLocation}
                                        addToBetSlip={(info, bet, typeBet) => this.props.addToBetSlip(info, bet, typeBet)}
                                        showForm={(type, kind) => this.props.showForm(type, kind)}
                                        activeFilter={this.state.activeFilter}
                                        odds={this.state.odds}
                                    /> } />
                                    <Route exact path="/sports/soccer/" render={() => this.mainSoccer() } />
                                    <Route exact path="/sports/soccer/leagues" render={() => this.mainSoccer() } />
                                    <Route exact path="/sports/soccer/leagues/game" render={() => this.mainSoccer() } />
                                </div>
                        //<Route   path="/sports/soccer/" render={() => this.mainSoccer() } />
                        :
                        <Route  path="/sports/soccer/leagues" render={() =>  <OneGamesSoccer
                            fetchLeagueTableData = {(leagueId)=>this.fetchLeagueTableData(leagueId)}
                            setSelectedEventFromOtherPage={(event) => this.props.setSelectedEventFromOtherPage(event)}
                            selectedEventFromOtherPage={this.state.selectedEventFromOtherPage}
                            leagueName={this.state.leagueName}
                            currentLeagueId={this.state.currentLeagueId}
                            sportName={this.state.sportName}
                            sportId={this.state.sportId}
                            comeBack={(event, activeFilter) => this.comeBack(event, activeFilter)}
                            currentMarketId={this.state.currentMarketId}
                            leaguesFromLocation={this.state.leaguesFromLocation}
                            addToBetSlip={(info, bet, typeBet) => this.props.addToBetSlip(info, bet, typeBet)}
                            showForm={(type, kind) => this.props.showForm(type, kind)}
                            activeFilter={this.state.activeFilter}
                            odds={this.state.odds}
                            changeCurrentMarket={(id, marketName) => this.changeCurrentMarket(id, marketName)}
                            changeCurrentLeagueId={(leagueId) => this.props.changeCurrentLeagueId(leagueId)}
                            currentLeagueTableData = {this.state.currentLeagueTableData}
                        /> } />
            }


        </div>
        )

    }
}

export default Soccer;
