import React from 'react';
import ManagMatch from "../../../in_play/partials/managMatch";
import DefaultGroup from "./defaultGroup";

// const halfMarkets = {
//     4: "Half Time/Full Time",
//     64: "Asian Handicap 1st Period",
//     113: "Both Teams To Score 1st Half",
//     211: "Both Teams To Score 2nd Half",
//     25: "Double Chance Halftime",
//     //129: "Under/Over Corners - 1st Half",
//     //71: "Highest Scoring Half",
//     9: "Correct Score 1st Period",
//     41: "1st Period Winner", // 1st Half Result
//     42: "2nd Period Winner",
//     134: "Number of Goals 1st Half",
//     163: "Number of Goals 2nd Half", //Exact 2ns Half Goals,
//     129: "Under/Over Corners - 1st Half",
//     143: "In Which Half Home Team Will Score More Goals?",
//     144: "In Which Half Away Team Will Score More Goals?",
//     218: "Home Team to Score 1st Half", //combine 1
//     215: "Away Team to Score 1st Half", //combine 1
//     219: "Home Team to Score 2nd Half", //combine 1
//     216: "Away Team to Score 2nd Half", //combine 1
// }

class Half extends DefaultGroup {
    constructor(props) {
        super(props);

        let newMarkets = this.changeMarkets(this.props.currentEvent, this.props.activeTab)

        this.state = {
            typeSport: this.props.typeSport,
            currentEvent: this.props.currentEvent,
            markets: newMarkets,
            activeTab: this.props.activeTab
        }
    }
    componentWillReceiveProps(nextProps) {
        let newMarkets = this.changeMarkets(nextProps.currentEvent, this.props.activeTab);

        this.setState({
            currentEvent: nextProps.currentEvent,
            markets: newMarkets,
            activeTab: nextProps.activeTab
        })
    }


    render() {
        return(
            <section id="Half-panel" className="" role="tabpanel">
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

export default Half;
