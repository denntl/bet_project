import React from 'react';
import SingleFixtureRenderComponent from "./props-tab-render-components/single-fixture-render-component";
import AllFixturesByTableRenderComponent from "./props-tab-render-components/all-fixtures-by-table-render-component";
import AllFixturesByBlockRenderComponent from "./props-tab-render-components/all-fixtures-by-block-render-component";

class Props extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentMarketName: this.props.currentMarketName,
            dropDown: false,
            currentLeagueMarkets: this.props.currentLeagueMarkets,
            singleLeagueData: this.props.singleLeagueData,
            currentMarketId: this.props.currentMarketId,
            sportId: this.props.sportId,
            setIntervalCount: this.props.setIntervalCount,
            sportName: this.props.sportName,
            currentLeagueId: this.props.currentLeagueId,
            singleLeagueRenderType: this.props.singleLeagueRenderType
        };
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            currentMarketName: nextProps.currentMarketName,
            currentLeagueMarkets: nextProps.currentLeagueMarkets,
            singleLeagueData: nextProps.singleLeagueData,
            currentMarketId: nextProps.currentMarketId,
            sportId: nextProps.sportId,
            setIntervalCount: nextProps.setIntervalCount,
            sportName: nextProps.sportName,
            currentLeagueId: nextProps.currentLeagueId,
            singleLeagueRenderType: nextProps.singleLeagueRenderType
        });
    }

    toggle = (type) => {
        if (type == "change_market") {
            this.setState({dropDown: !this.state.dropDown})
        }
    }

    render() {

        return this.state.singleLeagueRenderType === 'all-fixtures-by-block' ?
                <AllFixturesByBlockRenderComponent
                    addToBetSlip={(info, bet, typeBet) => this.props.addToBetSlip(info, bet, typeBet)}
                    currentLeagueId={this.state.currentLeagueId}
                    currentMarketName={this.state.currentMarketName}
                    currentLeagueMarkets={this.state.currentLeagueMarkets}
                    singleLeagueData={this.state.singleLeagueData}
                    currentMarketId={this.state.currentMarketId}
                    sportId={this.state.sportId}
                    setIntervalCount={this.state.setIntervalCount}
                    sportName={this.state.sportName}
                    showForm={(type) => this.props.showForm(type)}
                    changeCurrentMarket={(marketId, marketName) => this.props.changeCurrentMarket(marketId, marketName)}
                /> :
                    this.state.singleLeagueRenderType === 'single-fixture' ?
                        <SingleFixtureRenderComponent
                            addToBetSlip={(info, bet, typeBet) => this.props.addToBetSlip(info, bet, typeBet)}
                            currentLeagueId={this.state.currentLeagueId}
                            currentMarketName={this.state.currentMarketName}
                            currentLeagueMarkets={this.state.currentLeagueMarkets}
                            singleLeagueData={this.state.singleLeagueData}
                            currentMarketId={this.state.currentMarketId}
                            sportId={this.state.sportId}
                            setIntervalCount={this.state.setIntervalCount}
                            sportName={this.state.sportName}
                            showForm={(type) => this.props.showForm(type)}
                            changeCurrentMarket={(marketId, marketName) => this.props.changeCurrentMarket(marketId, marketName)}
                        /> :
                            <AllFixturesByTableRenderComponent
                                addToBetSlip={(info, bet, typeBet) => this.props.addToBetSlip(info, bet, typeBet)}
                                currentMarketName={this.state.currentMarketName}
                                currentLeagueMarkets={this.state.currentLeagueMarkets}
                                currentLeagueId={this.state.currentLeagueId}
                                singleLeagueData={this.state.singleLeagueData}
                                currentMarketId={this.state.currentMarketId}
                                sportId={this.state.sportId}
                                currentLeagueId={this.state.currentLeagueId}
                                setIntervalCount={this.state.setIntervalCount}
                                sportName={this.state.sportName}
                                showForm={(type) => this.props.showForm(type)}
                                changeCurrentMarket={(marketId, marketName) => this.props.changeCurrentMarket(marketId, marketName)}
                                fetchFixtureData={(fixtureId) => this.props.fetchFixtureData(fixtureId)}
                            />;
    }
}

export default Props;