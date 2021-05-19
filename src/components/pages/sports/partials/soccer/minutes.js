import React from 'react';
import ManagMatch from "../../../in_play/partials/managMatch";
import DefaultGroup from "./defaultGroup";

// const minutsMarkets = {
//     161: "10 Minute Result"
//
// }

class Minutes extends DefaultGroup {
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
            <section id="Minutes-panel" className="" role="tabpanel">
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
                {/* <div className="MarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_10_Minute_Result" aria-expanded="false" aria-controls="collapse_Soccer_International_10_Minute_Result"><span>10 Minute Result</span></div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse show" id="collapse_Soccer_International_10_Minute_Result" aria-expanded="true">
                        <div className="MarketGroupContainer">
                            <div className="Market Market_General Market_PWidth-100">
                                <div className="Participant Participant_General Market_CN-3">
                                    <span className="Participant_Name">Azerbaijan</span><span className="Participant_Odds">1.57</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-3">
                                    <span className="Participant_Name">Draw</span><span className="Participant_Odds">3.75</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-3">
                                    <span className="Participant_Name">Faroe Islands</span><span className="Participant_Odds">6.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="MarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_First_10_Minutes" aria-expanded="false" aria-controls="collapse_Soccer_International_First_10_Minutes"><span>First 10 Minutes (00:00 - 09:59)</span></div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse show" id="collapse_Soccer_International_First_10_Minutes" aria-expanded="true">
                        <div className="MarketGroupContainer MarketGroupContainer_HasLabels">
                            <div className="MarketCouponValuesExplicit36 Market_General Market_HasLabels Market_PWidth-62-5">
                                <div className="MarketColumnHeader">&nbsp;</div>

                                <div className="CouponParticipantPlayerTeam Participant_General">
                                    <span className="CouponParticipantPlayerTeam_Name">Goals</span>
                                </div>
                            </div>

                            <div className="MarketCouponValuesExplicit37 Market_General Market_PWidth-18-75">
                                <div className="MarketColumnHeader">Over</div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalRowHeight">
                                    <span className="ParticipantCentered_Name">0.5</span><span className="ParticipantCentered_Odds">5.00</span>
                                </div>
                            </div>

                            <div className="MarketCouponValuesExplicit37 Market_General Market_PWidth-18-75 Market_LastInRow">
                                <div className="MarketColumnHeader">Under</div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalRowHeight">
                                    <span className="ParticipantCentered_Name">0.5</span><span className="ParticipantCentered_Odds">1.16</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </section>
        )

    }
}

export default Minutes;
