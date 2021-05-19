import React from 'react';
import ManagMatch from "../../../in_play/partials/managMatch";
import DefaultGroup from "./defaultGroup";

// const marketsSpecial = {
//     85: "To Win From Behind",
//     86: "To Win To Nil",
//     171: "To Win Either Half",
//     84: "To Win Both Halves",
//     169: "To Score In Both Halves"
// }
//
// const marketsScoreInHalf = {
//      218: "Home Team to Score 1st Half",
//      215: "Away Team to Score 1st Half",
//     219: "Home Team to Score 2nd Half",
//     216: "Away Team to Score 2nd Half"
// }


class Specials extends DefaultGroup {
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
            <section id="Specials-panel" className="" role="tabpanel">
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

                {/*

                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_To_Score_in_Half" aria-expanded="false" aria-controls="collapse_Soccer_International_To_Score_in_Half">
                            <div className="CouponMarketGroupButton_Title"><span>To Score in Half</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse show" id="collapse_Soccer_International_To_Score_in_Half" aria-expanded="true">
                        <div className="MarketGroupContainer MarketGroupContainer_HasLabels">
                            <div className="MarketCouponValuesExplicit28 Market_General Market_HasLabels Market_PWidth-62-5">
                                <div className="MarketColumnHeader MarketColumnHeaderLeftAlign">
                                    Brighton
                                </div>

                                <div className="CouponParticipantWithoutBookCloses">
                                    <span className="CouponParticipantWithoutBookCloses_Name">1st Half</span>
                                </div>

                                <div className="CouponParticipantWithoutBookCloses">
                                    <span className="CouponParticipantWithoutBookCloses_Name">2nd Half</span>
                                </div>
                            </div>

                            <div className="MarketCouponValuesExplicit29 Market_General Market_PWidth-18-75">
                                <div className="MarketColumnHeader">
                                    Yes
                                </div>

                                <div className="CouponParticipantOddsOnlyAdditionalRowHeight ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">2.37</span>
                                </div>

                                <div className="CouponParticipantOddsOnlyAdditionalRowHeight ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">1.90</span>
                                </div>
                            </div>

                            <div className="MarketCouponValuesExplicit29 Market_General Market_PWidth-18-75 Market_LastInRow">
                                <div className="MarketColumnHeader">
                                    No
                                </div>

                                <div className="CouponParticipantOddsOnlyAdditionalRowHeight ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">1.53</span>
                                </div>

                                <div className="CouponParticipantOddsOnlyAdditionalRowHeight ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">1.80</span>
                                </div>
                            </div>

                            <div className="MarketCouponValuesExplicit30 Market_General Market_HasLabels Market_PWidth-62-5">
                                <div className="MarketColumnHeader MarketColumnHeaderLeftAlign">
                                    Leicester
                                </div>

                                <div className="CouponParticipantWithoutBookCloses">
                                    <span className="CouponParticipantWithoutBookCloses_Name">1st Half</span>
                                </div>

                                <div className="CouponParticipantWithoutBookCloses">
                                    <span className="CouponParticipantWithoutBookCloses_Name">2nd Half</span>
                                </div>
                            </div>

                            <div className="MarketCouponValuesExplicit31 Market_General Market_PWidth-18-75">
                                <div className="MarketColumnHeader">
                                    Yes
                                </div>

                                <div className="CouponParticipantOddsOnlyAdditionalRowHeight ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">2.20</span>
                                </div>

                                <div className="CouponParticipantOddsOnlyAdditionalRowHeight ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">1.83</span>
                                </div>
                            </div>

                            <div className="MarketCouponValuesExplicit31 Market_General Market_PWidth-18-75 Market_LastInRow">
                                <div className="MarketColumnHeader">
                                    No
                                </div>

                                <div className="CouponParticipantOddsOnlyAdditionalRowHeight ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">1.61</span>
                                </div>

                                <div className="CouponParticipantOddsOnlyAdditionalRowHeight ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">1.83</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup MarketGrid_PairL">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_To_Penalty" aria-expanded="false" aria-controls="collapse_Soccer_International_To_Penalty">
                            <div className="CouponMarketGroupButton_Title"><span>To Score a Penalty</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse show" id="collapse_Soccer_International_To_Penalty" aria-expanded="true">
                        <div className="MarketGroupContainer">
                            <div className="Market Market_General Market_PWidth-100">
                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Brighton to score a penalty</span><span className="Participant_Odds">9.00</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Leicester to score a penalty</span><span className="Participant_Odds">8.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="MarketGroup CouponMarketGroup MarketGrid_PairR">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_To_Penalty" aria-expanded="false" aria-controls="collapse_Soccer_International_To_Penalty">
                            <div className="CouponMarketGroupButton_Title"><span>To Miss A Penalty</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse show" id="collapse_Soccer_International_To_Penalty" aria-expanded="true">
                        <div className="MarketGroupContainer">
                            <div className="Market Market_General Market_PWidth-100">
                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Brighton to miss a penalty</span><span className="Participant_Odds">26.00</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Leicester to miss a penalty</span><span className="Participant_Odds">23.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Own_Goal" aria-expanded="false" aria-controls="collapse_Soccer_International_Own_Goal">
                            <div className="CouponMarketGroupButton_Title"><span>Own Goal</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse show" id="collapse_Soccer_International_Own_Goal" aria-expanded="true">
                        <div className="MarketGroupContainer">
                            <div className="Market Market_General Market_PWidth-100">
                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Yes</span><span className="Participant_Odds">9.00</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">No</span><span className="Participant_Odds">1.071</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
*/}
            </section>
        )

    }
}

export default Specials;
