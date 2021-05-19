import React from 'react';
import BaseClass from './base-class';
import Header from "./header";
import AllLeaguesPage from "./all-leagues-page";
import SingleLeaguePage from "./single-league-page";
import SingleGamePage from "./single-game-page";

class GroupedByLeagueMarketGroupMarket extends BaseClass {

    fetchSingleLeagueInterval = null;
    fetchLeaguesInterval = null;
    fetchFixtureDataInterval = null;

    constructor(props) {
        super(props);
        this.state = {
            /** First Renders **/
            sportId:            this.props.sportId,
            sportName:          this.props.sportName,
            oddsType:           this.props.oddsType,
            activeTab:          this.props.activeTab,
            activeSingleLeagueTab: null,
            singleLeagueTabsList: null,
            leaguesData:        null,
            activePeriodFilter: 'all',
            /** Click to market **/
            singleLeagueData:   null,
            currentLeagueName:  null,
            currentLeagueId:    null,
            currentMarketName:  null,
            currentMarketId:    null,
            currentLeagueMarkets: null,
            singleLeagueRenderType: null,
            /** Click to event **/
            currentFixtureData: null,
            currentFixtureName: null,
            currentFixtureId:   null,
        };
    }

    componentDidMount(){
        this.fetchLeaguesData();
    }

    componentWillUnmount(){
        clearInterval(this.fetchSingleLeagueInterval);
        clearInterval(this.fetchLeaguesInterval);
        clearInterval(this.fetchFixtureDataInterval);
    }

    componentWillReceiveProps(nextProps){
        let sportIdChanged = nextProps.sportId !== this.state.sportId;
        let oddsTypeChanged = nextProps.oddsType !== this.state.oddsType;

        this.setState({
            sportId: nextProps.sportId,
            sportName: nextProps.sportName,
            oddsType: nextProps.oddsType,
            activeTab: nextProps.activeTab,
        }, () => {
            if(sportIdChanged || oddsTypeChanged){
                this.fetchLeaguesData();
            }
            if(oddsTypeChanged && this.state.singleLeagueData){
                this.fetchSingleLeagueData();
                if(this.state.currentFixtureData){
                    this.fetchFixtureData(this.state.currentFixtureId);
                }
            }
        });
    }

    showSingleLeagueByMarket = (leagueName, leagueId, marketName, marketId) => {
        this.setState({
            currentLeagueName: leagueName,
            currentLeagueId: leagueId,
            currentMarketName: marketName,
            currentMarketId: marketId,
        }, () => {
            this.fetchSingleLeagueData();
        });
    }

    changeCurrentLeague = (leagueName, leagueId) => {
        console.log(leagueName, leagueId)
        this.setState({
            currentLeagueName: leagueName,
            currentLeagueId: leagueId
        }, () => {
            this.fetchSingleLeagueData();
        });
    }

    changeCurrentMarket = (marketId, marketName) => {
        this.setState({
            currentMarketId: marketId,
            currentMarketName: marketName
        }, () => {
            this.fetchSingleLeagueData();
        });
    }

    comeBackToPage = (type = 'main') => {
        if(type === 'main'){
            this.setState({
                /** Click to market **/
                singleLeagueData:   null,
                currentLeagueName:  null,
                currentLeagueId:    null,
                currentMarketName:  null,
                currentMarketId:    null,
                currentLeagueMarkets: null,
                singleLeagueRenderType: null,
                /** Click to event **/
                currentFixtureData: null,
                currentFixtureName: null,
                currentFixtureId:   null,
            });
        } else if(type === 'leagues'){
            this.setState({
                /** Click to event **/
                currentFixtureData: null,
                currentFixtureName: null,
                currentFixtureId:   null,
            });
        }
    }

    clickPeriodFilterHandler = (type) => {
        if(this.state.activePeriodFilter !== type){
            this.setState({
                activePeriodFilter: type
            }, () => {
                this.fetchLeaguesData();
            });
        }
    }

    render() {

        return <div className="inner-wrapper" style={{overflow: 'hidden'}}>
            <div id={`${this.state.singleLeagueData ? 'page_leagues' : 'page_soccer'}`} className="page">
                <Header sportName={this.state.sportName}
                        gameName={this.state.currentFixtureName}
                        leagueName={this.state.currentLeagueName}
                        currentFixtureId={this.state.currentFixtureId}
                        currentLeagueId={this.state.currentLeagueId}
                        leaguesData={this.state.leaguesData}
                        clickPeriodFilterHandler={(type) => this.clickPeriodFilterHandler(type)}
                        activePeriodFilter={this.state.activePeriodFilter}
                        singleLeagueData={this.state.singleLeagueData}
                        currentFixtureData={this.state.currentFixtureData}
                        comeBackToPage={(type) => this.comeBackToPage(type)}
                        changeCurrentLeague={(leagueName, leagueId) => this.changeCurrentLeague(leagueName, leagueId)}
                        fetchFixtureData={(fixtureId) => this.fetchFixtureData(fixtureId)}
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
                                {!this.state.singleLeagueData && !this.state.currentFixtureData ?
                                    <div className="LiveInPlayHeader">
                                        {/*<div className="LiveInPlayHeader_ButtonBar  nav nav-tabs" role="tablist">*/}
                                            {/*<a href="#Coupons-panel" className="LiveInPlayHeader_ButtonBarButton  active"*/}
                                               {/*id="Coupons-tab" data-toggle="tab" role="tab">Coupons</a>*/}
                                            {/*<a href="#Outrights-panel" className="LiveInPlayHeader_ButtonBarButton"*/}
                                               {/*id="Outrights-tab" data-toggle="tab" role="tab">Outrights</a>*/}
                                        {/*</div>*/}
                                        <div className="LiveInPlayHeader_Container">
                                            <div className="LiveInPlayHeader_wrapp">
                                                <div className="LiveInPlayHeader_LiveLabel">Live</div>
                                                <div className="LiveInPlayHeader_InPlayLabel">In-Play</div>
                                                <div className="LiveInPlayHeader_InPlayNumber">
                                                    {/*{this.state.allEvents.length}*/}
                                                </div>
                                            </div>

                                        </div>
                                    </div> : ''
                                }
                                <section id="Coupons-panel" className="ContentPlate">

                                    {this.state.currentFixtureData ?
                                        <SingleGamePage
                                            singleLeagueData={this.state.singleLeagueData}
                                            currentFixtureData={this.state.currentFixtureData}
                                            activeTab={this.state.activeTab}
                                            sportId={this.state.sportId}
                                            showForm={(type) => this.props.showForm(type)}
                                            addToBetSlip={(info, bet, typeBet) => this.props.addToBetSlip(info, bet, typeBet)}
                                        />
                                        : this.state.singleLeagueData ?
                                            <SingleLeaguePage
                                                sportId={this.state.sportId}
                                                currentLeagueId={this.state.currentLeagueId}
                                                singleLeagueData={this.state.singleLeagueData}
                                                currentMarketName={this.state.currentMarketName}
                                                currentMarketId={this.state.currentMarketId}
                                                changeCurrentMarket={(marketId, marketName) => this.changeCurrentMarket(marketId, marketName)}
                                                currentLeagueMarkets={this.state.currentLeagueMarkets}
                                                singleLeagueRenderType={this.state.singleLeagueRenderType}
                                                activeSingleLeagueTab={this.state.activeSingleLeagueTab}
                                                singleLeagueTabsList={this.state.singleLeagueTabsList}
                                                sportName={this.state.sportName}
                                                showForm={(type) => this.props.showForm(type)}
                                                fetchFixtureData={(fixtureId) => this.fetchFixtureData(fixtureId)}
                                                addToBetSlip={(info, bet, typeBet) => this.props.addToBetSlip(info, bet, typeBet)}
                                            />
                                            : this.state.leaguesData ?
                                                <AllLeaguesPage
                                                    showForm={(type) => this.props.showForm(type)}
                                                    leaguesData={this.state.leaguesData}
                                                    marketsCol={this.marketsCol}
                                                    sportName={this.state.sportName}
                                                    fetchFixtureAndSingleLeagueData={(
                                                        fixtureId, leagueName, leagueId, marketName, marketId
                                                    ) => this.fetchFixtureAndSingleLeagueData(
                                                        fixtureId, leagueName, leagueId, marketName, marketId
                                                    )}
                                                    showSingleLeagueByMarket={(
                                                         leagueName, leagueId, marketName, marketId, currentLeagueMarkets
                                                    ) => this.showSingleLeagueByMarket(
                                                         leagueName, leagueId, marketName, marketId, currentLeagueMarkets
                                                    )}
                                                /> :
                                                ''
                                    }
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default GroupedByLeagueMarketGroupMarket;
