import React from 'react';
import OneGamesBets from "../../oneGameBets";
import MatchAlert from "../../../modal/match_alert";
import {getEventsGroupedByMarket, getMarkets} from "../../../../helpers/data";
import moment from "moment/moment";
import {Route} from "react-router-dom";
import Matches from "../../oneSportGamesBets/basketball/matches";
import Outrights from "../../oneSportGamesBets/basketball/outrights";
import BasketballHeader from "../../topHeader/basketballHeader";



class  OneGamesBasketball extends React.Component {


    objTabs = {
        "matches": Matches,
        "outrights": Outrights,
        //"knockout": Knockout
    }

    constructor(props) {
        super(props);
        this.state = {
            showOneGame: false,
            matchAlert: false,
            leagueName: this.props.leagueName,
            currentLeagueId: this.props.currentLeagueId,
            sportName: this.props.sportName,
            currentEvents: {},
            teams: {},
            sportId: this.props.sportId,
            currentMarketId: this.props.currentMarketId,
            allMarkets: {},
            leaguesFromLocation: this.props.leaguesFromLocation,

            currentGame: false,
            activeFilter: this.props.activeFilter,
            activeTab: "matches",
            currentmarketName: this.props.marketName,
        }

        this.showForm = this.showForm.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentWillMount() {
        this.fetchEvents();

        getMarkets({sport_ids: this.state.sportId, only_enabled: false}, (err, data) => {
            if (!err) {
                let marketname = "";

                Object.keys(data).map((id) => {
                    if (id == this.state.currentMarketId) {
                        marketname = data[id];
                    }
                })


                console.log(marketname)
                this.setState({
                    allMarkets: data,
                    currentmarketName: marketname
                })
            }
        })
    }
    componentDidMount() {
        window.onpopstate = this.onBackButtonEvent;
    }
    onBackButtonEvent = (e) => {
        e.preventDefault();
        this.props.comeBack(this.state.currentGame, this.state.activeFilter)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            //leagueName: nextProps.leagueName,
            sportName: nextProps.sportName,
            activeFilter: nextProps.activeFilter
        })
    }

    fetchEvents = (marketId, leagueId) => {
        let date_from, date_to;
        date_from =  moment.utc().format('YYYY-MM-DD HH:mm:ss');
        if (this.state.activeFilter == "24") {
             date_to = moment.utc().add(1,'days').format('YYYY-MM-DD HH:mm:ss');
        } else if (this.state.activeFilter == "all") {
            // date_from =  moment.utc().add(6,'hours').format('YYYY-MM-DD HH:mm:ss');
             date_to = moment.utc().add(1,'year').format('YYYY-MM-DD HH:mm:ss');
        }

        marketId = marketId == null ? this.state.currentMarketId : marketId;
        leagueId = leagueId == null ? this.state.currentLeagueId : leagueId;

        /** убрать only_enabled, добавлено чтоб получить все **/
        let params = {
            market_id: marketId,
            league_id: leagueId,
            only_enabled: false
        };

        getEventsGroupedByMarket(params, (err, data) => {
            if (!err) {
                // console.log('@@@@@@@@', data)
                this.setState({
                    currentEvents: data
                })
            } else {
                console.log("err getEventsGroupedbyMarket",err)
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
    changeLeague = (id, leagueName) => {
        this.setState({
            currentLeagueId: id,
            leagueName: leagueName
        })
        this.fetchEvents(null, id)
    }

    changeGame = (id) => {

        // console.log('changeGame', this.state.currentEvents, id);

        Object.keys(this.state.currentEvents).map((eventId) => {
            if (this.state.currentEvents[eventId].FixtureId == id) {

                // console.log('changeGamed', this.state.currentEvents[eventId]);

                this.setState({
                    currentGame: this.state.currentEvents[eventId]
                })
            }
        })
    }




    changeCurrentMarket = (id, marketName) => {

        this.setState({
            currentmarketName: marketName,
            currentMarketId: id
        })

        this.fetchEvents(id, null)
    }
    changeTab = (tab) => {
        this.setState({
            activeTab: tab
        })
    }

    match = () => {
       const TagName = this.objTabs[this.state.activeTab]
        return  <div id="page_leagues"  className="page">
            <BasketballHeader
                sportName={this.state.sportName}
                leagueName={this.state.leagueName}
                allLeagues={this.state.leaguesFromLocation}
                changeLeague={(id, changeLeague) => this.changeLeague(id, changeLeague)}
                activeFilter={this.state.activeFilter}
                comeBack={(event, activeFilter) => this.props.comeBack(event, activeFilter)}
                changeTab={(tab) => this.changeTab(tab)}
            />

            <div  className="content tab-content clearfix">
                {
                    <TagName
                        marketsCol={this.props.marketsCol}
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

    render() {
       console.log('OnesportGamesBets', this.state)
        return(
            <div  className="inner-wrapper">
                <Route exact path="/sports/basketball/leagues" render={() => this.match() } />

                <Route  path="/sports/basketball/leagues/game" render={() =>   <OneGamesBets activeFilter={this.state.activeFilter}
                                                                                             changeGame={(id) => this.changeGame(id)}
                                                                                             showForm={(type, kind) => this.props.showForm(type, kind)}
                                                                                             currentGame={this.state.currentGame}
                                                                                             sportName={this.state.sportName}
                                                                                             leagueName={this.state.leagueName}
                                                                                             allEventsDate={this.state.allEventsDate}
                                                                                             sportId={this.state.sportId}
                                                                                             addToBetSlip={(info, bet, typeBet) => this.props.addToBetSlip(info, bet, typeBet)}
                />} />





                {
                    this.state.matchAlert  ?
                        <div className="Modal_wrapp fixed">
                            <MatchAlert closeModal = {(type) => this.closeModal(type)}/>
                        </div>
                        : ""
                }
            </div>

        )

    }
}

export default OneGamesBasketball;
