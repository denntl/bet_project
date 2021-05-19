import React from 'react';
import ManagMatch from "../../../in_play/partials/managMatch";
import DefaultGroup from "./defaultGroup";


// const mainMarkets = {
//     1:"Full Time Result",
//     7: "Double Chance",
//     6: "Correct Score",
//     4: "Half Time/Full Time",
//     //"": "Half Time / Full Time Correct Score",
//     2: "Goals Over/Under",
//     17: "Both Teams to Score",
//     3: "Asian Handicap",
//     52: "Draw No Bet",
//     429: "Result/Both Teams to Score",
//     // "": "Handicap Result",
//     // "": "Alternative Handicap Result",
//     461: "Winning Margin"
// }

class CustomTab extends DefaultGroup {
    constructor(props) {
        super(props);

        let newMarkets = this.changeMarkets(this.props.currentEvent, this.props.activeTab);

        this.state = {
            typeSport: this.props.typeSport,
            currentEvent: this.props.currentEvent,
            markets: newMarkets,
            activeTab: this.props.activeTab
        }
    }
    componentWillReceiveProps(nextProps) {
        let newMarkets = this.changeMarkets(nextProps.currentEvent, nextProps.activeTab);
        this.setState({
            currentEvent: nextProps.currentEvent,
            markets: newMarkets,
            activeTab: nextProps.activeTab
        })
    }

    render() {
        return(
            <section className="" role="tabpanel">
                <ManagMatch
                    typeSport={this.state.typeSport}
                    participants={this.state.currentEvent.Fixture.Participants}
                    markets={this.state.markets}
                    eventId={this.state.currentEvent.FixtureId}
                    fromPage="eventView"
                    currentMarket={false}
                    fromEventView={true}
                    addToBetSlip={(info, bet, typeBet) => this.props.addToBetSlip(info, bet, typeBet)}
                />

            </section>
        )

    }
}

export default CustomTab;
