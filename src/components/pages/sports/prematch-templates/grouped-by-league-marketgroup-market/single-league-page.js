import React from 'react';
import Matches from "./single-league-tabs/matches";
import Props from "./single-league-tabs/props";
import Lines from "./single-league-tabs/lines";

class SingleLeaguePage extends React.Component {

    interval = null;

    constructor(props) {
        super(props);
        this.state = {
            singleLeagueData: this.props.singleLeagueData,
            currentMarketId: this.props.currentMarketId,
            currentMarketName: this.props.currentMarketName,
            currentLeagueMarkets: this.props.currentLeagueMarkets,
            sportName: this.props.sportName,
            singleLeagueRenderType: this.props.singleLeagueRenderType,
            setIntervalCount: 0,
            sportId: this.props.sportId,
            activeSingleLeagueTab: this.props.activeSingleLeagueTab,
            singleLeagueTabsList: this.props.singleLeagueTabsList,
            currentLeagueId: this.props.currentLeagueId
        };
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            singleLeagueData: nextProps.singleLeagueData,
            currentMarketId: nextProps.currentMarketId,
            currentMarketName: nextProps.currentMarketName,
            currentLeagueMarkets: nextProps.currentLeagueMarkets,
            singleLeagueRenderType: nextProps.singleLeagueRenderType,
            sportName: nextProps.sportName,
            sportId: nextProps.sportId,
            activeSingleLeagueTab: nextProps.activeSingleLeagueTab,
            singleLeagueTabsList: nextProps.singleLeagueTabsList,
            currentLeagueId: nextProps.currentLeagueId
        });
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({setIntervalCount: this.state.setIntervalCount + 1})
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    changeActiveSingleLeagueTab(tab){
        if(this.state.activeSingleLeagueTab.toLowerCase() !== tab.toLowerCase()){
            let market = typeof this.state.currentLeagueMarkets[tab] !== 'undefined' ?
                this.state.currentLeagueMarkets[tab][0] : null;

            if(market){
                let marketName = typeof market.alias == 'string' &&  market.alias.length ? market.alias : market.name;
                this.props.changeCurrentMarket(market.id, marketName);
            }
        }
    }

    render() {

        //console.log(this.state);

        return <div>
            <div className="header">
                <div className="ScrollableHorizontalNavBar MarketGroupHorizontalNavBar">
                    <div className="ScrollableHorizontalNavBar_ButtonContainer  nav nav-tabs" role="tablist">
                        {
                            this.state.singleLeagueTabsList instanceof Array &&
                            this.state.singleLeagueTabsList.length ?
                                this.state.singleLeagueTabsList.map((tab) => {
                                    return  <a href="javascript: void(0)"
                                               key={tab}
                                               className={`MarketGroupNavBarButton ${this.state.activeSingleLeagueTab.toLowerCase() == tab.toLowerCase() ? "active" : ""}`}
                                               onClick={() => this.changeActiveSingleLeagueTab(tab)}>
                                        {tab[0].toUpperCase() + tab.slice(1)}
                                    </a>
                                }) : ''
                        }
                    </div>
                </div>
            </div>
            {
                this.state.activeSingleLeagueTab == 'Props' ?
                    <Props
                        addToBetSlip={(info, bet, typeBet) => this.props.addToBetSlip(info, bet, typeBet)}
                        currentMarketName={this.state.currentMarketName}
                        currentLeagueMarkets={this.state.currentLeagueMarkets[this.state.activeSingleLeagueTab]}
                        singleLeagueData={this.state.singleLeagueData}
                        currentMarketId={this.state.currentMarketId}
                        sportId={this.state.sportId}
                        showForm={(type) => this.props.showForm(type)}
                        setIntervalCount={this.state.setIntervalCount}
                        sportName={this.state.sportName}
                        fetchFixtureData={(fixtureId) => this.props.fetchFixtureData(fixtureId)}
                        changeCurrentMarket={(marketId, marketName) => this.props.changeCurrentMarket(marketId, marketName)}
                        currentLeagueId={this.state.currentLeagueId}
                        singleLeagueRenderType={this.state.singleLeagueRenderType}
                    /> :
                        this.state.activeSingleLeagueTab == 'Lines' ?
                            <Lines
                                addToBetSlip={(info, bet, typeBet) => this.props.addToBetSlip(info, bet, typeBet)}
                                currentMarketName={this.state.currentMarketName}
                                currentLeagueMarkets={this.state.currentLeagueMarkets[this.state.activeSingleLeagueTab]}
                                singleLeagueData={this.state.singleLeagueData}
                                currentMarketId={this.state.currentMarketId}
                                sportId={this.state.sportId}
                                showForm={(type) => this.props.showForm(type)}
                                setIntervalCount={this.state.setIntervalCount}
                                sportName={this.state.sportName}
                                fetchFixtureData={(fixtureId) => this.props.fetchFixtureData(fixtureId)}
                                changeCurrentMarket={(marketId, marketName) => this.props.changeCurrentMarket(marketId, marketName)}
                            /> :
                                <Matches
                                    addToBetSlip={(info, bet, typeBet) => this.props.addToBetSlip(info, bet, typeBet)}
                                    currentMarketName={this.state.currentMarketName}
                                    currentLeagueMarkets={this.state.currentLeagueMarkets[this.state.activeSingleLeagueTab]}
                                    singleLeagueData={this.state.singleLeagueData}
                                    currentMarketId={this.state.currentMarketId}
                                    sportId={this.state.sportId}
                                    showForm={(type) => this.props.showForm(type)}
                                    setIntervalCount={this.state.setIntervalCount}
                                    sportName={this.state.sportName}
                                    fetchFixtureData={(fixtureId) => this.props.fetchFixtureData(fixtureId)}
                                    changeCurrentMarket={(marketId, marketName) => this.props.changeCurrentMarket(marketId, marketName)}
                                />
            }
        </div>
    }
}

export default SingleLeaguePage;