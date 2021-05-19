import React from 'react';
import {Route} from 'react-router-dom';
import OneGamesBasketball from "../../shared/tables/prematchTemplates/oneSportGamesBets/oneGamesBasketball";
import BasketballHeader from "../../shared/tables/topHeader/basketballHeader";
import BasketballTemplate from "../../shared/tables/prematchTemplates/sportsMarketTemplate/basketballTemplate";
import {getEventsGroupedByLeagueMarketGroupMarket, getEventsGroupedbyDate, getLeagues, getMarkets} from "../../helpers/data";
import moment from "moment/moment";




class Basketball extends React.Component {

    /** Надо избавится, заменить обычными реальными маркетами с сервера **/
    marketsCol = {
        // 1: [1, "X", 2],
        // 7: ["1X", "X2", 12],
        // 2: ["Under 2.5", "Over 2.5"],
        // 17: ["Yes", "No"],
        // 5: ["Odd", "Even"],
        // 3: ["1X2", "Handicap", "Line"],

        198: ["Odd", "Even"],
        51: ["Odd", "Even"],
        62: ["Odd", "Even"],
        63: [1,2],
        72: ["Odd", "Even"],




        52: [1, 2],
        202: ["Home", "Away"],
        166: ["Under", "Over"]
    }

    constructor(props) {
        super(props);
        this.state = {
            showGamesBets: false,
            allEvents: {},
            allLeagues: {},
            leagueName: "",
            sportName: "Basketball",
            sportId: 48242,
            odds: this.props.odds,
            currentMarketId: false,
            currentMarketName: '',
            currentLeagueId: false,
            activeFilter: "all"
        };
        this.showGamesBets = this.showGamesBets.bind(this);
    }


    componentWillReceiveProps(nextProps){

        this.setState({
            odds: nextProps.odds
        })
    }



    componentDidMount() {
        let date_from =  moment.utc().format('YYYY-MM-DD HH:mm:ss');
        let date_to = moment.utc().add(1,'year').format('YYYY-MM-DD HH:mm:ss');
        this.fetchEventsGrouped(date_from, date_to)

    }

    fetchEventsGrouped = (date_from, date_to, time = null) => {
        if (time != null ) {
            this.setState({
                activeFilter: time
            })
        }
        getEventsGroupedByLeagueMarketGroupMarket(this.state.odds,date_from, date_to, this.state.sportId, false, (err, data) => {
            if (!err) {
                let allLeagues = {};
                Object.keys(data).map((leagueId) => {
                    allLeagues[leagueId] = {
                        identity: data[leagueId].identity,
                        name: data[leagueId].name
                    };
                });
                this.setState({
                    allEvents: data,
                    allLeagues: allLeagues
                })
            } else {
                console.log('error', err)
            }
        })
    }

    showGamesBets(leagueName, leagueId, marketName, marketId, leaguesFromLocation) {
        console.log('showGamesBets', leaguesFromLocation)
        this.setState({
            showGamesBets: true,
            leagueName: leagueName,
            currentLeagueId: leagueId,
            currentMarketId: marketId,
            currentMarketName: marketName,
            leaguesFromLocation: this.state.allLeagues //leaguesFromLocation
        })
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
            <BasketballHeader
                sportName={this.state.sportName}
                leagueName={this.state.leagueName}
                allLeagues={{}}
                activeFilter={this.state.activeFilter}
                fetchEventsGrouped={(date_from, date_to, time) => this.fetchEventsGrouped(date_from, date_to, time)}
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
                                    <a href="#Outrights-panel" className="LiveInPlayHeader_ButtonBarButton"
                                       id="Outrights-tab" data-toggle="tab" role="tab">Outrights</a>
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
                                <BasketballTemplate allEvents={this.state.allEvents}
                                                marketsCol={this.marketsCol}
                                                sportId={this.state.sportId}
                                                showGamesBets={(leagueName, marketName, leagueId, id, arr) => this.showGamesBets(leagueName, marketName, leagueId, id, arr)}/>
                            </section>
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }

    render() {
        console.log("tennis!!!!!!!!!!!!!!!!!!!!!!!!!!!!", this.state)
        return(
            <div className="inner-wrapper">

                {
                    this.state.currentLeagueId === false ?
                        <Route  path="/sports/basketball/" render={() => this.mainSoccer() } />

                        //<Route   path="/sports/soccer/" render={() => this.mainSoccer() } />
                        :
                        <Route  path="/sports/basketball/leagues" render={() =>  <OneGamesBasketball
                            marketsCol={this.marketsCol}
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
                            marketName={this.state.currentMarketName}
                        /> } />
                }


            </div>
        )

    }
}

export default Basketball;
