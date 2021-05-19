import React from 'react';
import OneGamesBets from "../../oneGameBets";
import MatchAlert from "../../../modal/match_alert";
import SoccerHeader from "../../topHeader/soccerHeader";
import {getEventsGroupedbyDate, getLeagueTableData, getMarkets} from "../../../../helpers/data";
import moment from "moment/moment";
import {Route} from "react-router-dom";
import Matches from "../../oneSportGamesBets/soccer/matches";
import Teams from "../../oneSportGamesBets/soccer/teams";
import Outrights from "../../oneSportGamesBets/soccer/outrights";
import Table from "../../oneSportGamesBets/soccer/table";

class  OneGamesSoccer extends React.Component {

    objTabs = {
        "matches": Matches,
        "teams": Teams,
        //"outrights": Outrights,
        "table": Table
    }

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
            teams: {},
            sportId: this.props.sportId,
            currentMarketId: this.props.currentMarketId,
            allMarkets: {},
            leaguesFromLocation: this.props.leaguesFromLocation,
            odds: this.props.odds,
            currentGame: false,
            activeFilter: this.props.activeFilter,
            activeTab: "matches",
            currentmarketName: "",
            selectedEventFromOtherPage: this.props.selectedEventFromOtherPage,
            currentLeagueTableData:this.props.currentLeagueTableData
        }

        this.showForm = this.showForm.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    componentWillMount() {
        getMarkets({sport_ids: this.state.sportId}, (err, data) => {
            if (!err) {
                let marketname = "";
                Object.keys(data).map((id) => {
                    if (id == this.state.currentMarketId) {
                        marketname = data[id].description;
                    }
                });
                this.setState({
                    allMarkets: data,
                    currentmarketName: marketname
                })
            }
        })
    }

    componentDidMount() {
        this.fetchEvents();
        this.props.fetchLeagueTableData(this.state.currentLeagueId);
        this.interval = setInterval(() => {
            this.fetchEvents();
            this.props.fetchLeagueTableData(this.state.currentLeagueId);
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

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onBackButtonEvent = (e) => {
        e.preventDefault();
        this.props.comeBack(this.state.currentGame, this.state.activeFilter)
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.currentMarketId != this.state.currentMarketId){
            getMarkets({sport_ids: this.state.sportId}, (err, data) => {
                if (!err) {
                    let marketname = "";
                    Object.keys(data).map((id) => {
                        if (id == this.state.currentMarketId) {
                            marketname = data[id].description;
                        }
                    })
                    //console.log('GGGGGGGGG', this.state.currentMarketId);
                    //console.log('GGGGGGGGG', data);
                    this.setState({
                        allMarkets: data,
                        currentmarketName: marketname
                    })
                }
            })
        }

        if(
            this.state.activeTab == "table" &&
            nextProps.currentLeagueTableData instanceof Array &&
            nextProps.currentLeagueTableData.length == 0
        ){
            this.setState({
                activeTab: "matches"
            })
        }

        this.setState({
            leagueName: nextProps.leagueName,
            sportName: nextProps.sportName,
            activeFilter: nextProps.activeFilter,
            currentMarketId: nextProps.currentMarketId,
            odds: nextProps.odds,
            leaguesFromLocation: nextProps.leaguesFromLocation,
            selectedEventFromOtherPage: nextProps.selectedEventFromOtherPage,
            currentLeagueTableData:nextProps.currentLeagueTableData
        })
    }

    fetchEvents = (leagueId = this.state.currentLeagueId) => {
        let date_from, date_to;
        date_from =  moment().utc().subtract(12, 'hours').format('YYYY-MM-DD HH:mm:ss');
        
        if (this.state.activeFilter == "24") {
            date_to = moment.utc().add(1,'days').format('YYYY-MM-DD HH:mm:ss');
        } else if (this.state.activeFilter == "all") {
            date_to = moment.utc().add(1,'year').format('YYYY-MM-DD HH:mm:ss');
        }
        let params = {
            date_from: date_from,
            date_to: date_to,
            sport_ids: this.state.sportId,
            league_ids: leagueId,
            bet_price_type: this.state.odds
        };

        console.log('УШЕЛ ЗАПРОС', params);

        getEventsGroupedbyDate(params, (err, data) => {
            if (!err) {

                let hasSelectedEventFromOtherPage = typeof this.state.selectedEventFromOtherPage != 'undefined' &&
                    this.state.selectedEventFromOtherPage != null &&
                    typeof this.state.selectedEventFromOtherPage.FixtureId != 'undefined';

                /** Костыль который предотвращает смену матча, но не обволяет коэфициенты **/
                if(hasSelectedEventFromOtherPage && this.state.currentGame == false){
                    this.changeGame(this.state.selectedEventFromOtherPage.FixtureId, true);
                }

                this.setState({
                    currentEvents: data.events,
                    teams: data.teams
                })
                console.log("Date",this.state.teams)
            } else {
                console.log("err getEventsGroupedbyDate",err)
            }
        })

    }
    showOneGame = (event, allEventsDate) => {

        console.log(event, allEventsDate);

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
        this.fetchEvents(id);
        this.props.fetchLeagueTableData(id);

    }

    changeGame = (id, allEventsDate = false) => {
        Object.keys(this.state.currentEvents).map((date) => {
            let arrayEvents = this.state.currentEvents[date];
            Object.keys(arrayEvents).map((event) => {
                if (arrayEvents[event].FixtureId == id) {
                    let obj = {currentGame: arrayEvents[event]};
                    if(allEventsDate){

                        console.log("!!!!", this.state.currentEvents)

                        obj['allEventsDate'] = arrayEvents;
                    }
                    this.setState(obj);
                }
            })
        })
    }

    changeCurrentMarket = (id, marketName) => {
        this.props.changeCurrentMarket(id, marketName)
        this.setState({
            currentmarketName: marketName,
            currentMarketId: id
        })
    }

    changeTab = (tab) => {
        this.setState({
            activeTab: tab
        })
    }

    match = () => {
        const TagName = this.objTabs[this.state.activeTab]
        return  <div id="page_leagues"  className="page">
            <SoccerHeader
                sportName={this.state.sportName}
                leagueName={this.state.leagueName}
                allLeagues={this.state.leaguesFromLocation}
                changeLeague={(id) => this.changeLeague(id)}
                activeFilter={this.state.activeFilter}
                comeBack={(event, activeFilter) => this.props.comeBack(event, activeFilter)}
                changeTab={(tab) => this.changeTab(tab)}
                currentLeagueTableData = {this.state.currentLeagueTableData}
                activeTab={this.state.activeTab}
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
                        currentLeagueTableData = {this.state.currentLeagueTableData}
                    />
                }



            </div>
        </div>
    }

    render() {
        return(
            <div  className="inner-wrapper">
                <Route exact path="/sports/soccer/leagues" render={() => this.match() } />

                <Route  path="/sports/soccer/leagues/game" render={() =>   this.state.currentGame ? <OneGamesBets
                    odds = {this.state.odds}
                    activeFilter={this.state.activeFilter}
                    changeGame={(id) => this.changeGame(id)}
                    showForm={(type, kind) => this.props.showForm(type, kind)}
                    currentGame={this.state.currentGame}
                    sportName={this.state.sportName}
                    leagueName={this.state.leagueName}
                    allEventsDate={this.state.allEventsDate}
                    sportId={this.state.sportId}
                    addToBetSlip={(info, bet, typeBet) => this.props.addToBetSlip(info, bet, typeBet)}
                /> : ''} />





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

export default OneGamesSoccer;
