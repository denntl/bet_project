import React from 'react';
import ManagMatch from "../../../in_play/partials/managMatch";
import DefaultGroup from "./defaultGroup";



class Goals extends DefaultGroup {
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
            <section id="Goals-panel" className="" role="tabpanel">

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
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Goals_Goals_Over_Under" aria-expanded="false" aria-controls="collapse_Soccer_International_Goals_Goals_Over_Under">
                            <div className="CouponMarketGroupButton_Title"><span>Goals Over/Under</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse show" id="collapse_Soccer_International_Goals_Goals_Over_Under" aria-expanded="true">
                        <div className="MarketGroupContainer MarketGroupContainer_HasLabels">
                            <div className="MarketLabel Market_General Market_HasLabels Market_PWidth-25">
                                <div className="MarketColumnHeader">&nbsp;</div>

                                <div className="ParticipantRowValue CouponParticipantRowValueReduceRowHeight">
                                    <span className="ParticipantRowValue_Name">2.5</span>
                                </div>
                            </div>

                            <div className="MarketValuesExplicit2 Market_General Market_PWidth-37-5">
                                <div className="MarketColumnHeader">Over</div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">2.30</span>
                                </div>
                            </div>

                            <div className="MarketValuesExplicit2 Market_General Market_PWidth-37-5 Market_LastInRow">
                                <div className="MarketColumnHeader">Under</div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">1.61</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Goals_Alternative_Total_Goals" aria-expanded="false" aria-controls="collapse_Soccer_International_Goals_Alternative_Total_Goals">
                            <div className="CouponMarketGroupButton_Title"><span>Alternative Total Goals</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse show" id="collapse_Soccer_International_Goals_Alternative_Total_Goals" aria-expanded="true">
                        <div className="MarketGroupContainer MarketGroupContainer_HasLabels">
                            <div className="MarketLabel Market_General Market_HasLabels Market_PWidth-25">
                                <div className="MarketColumnHeader">&nbsp;</div>

                                <div className="ParticipantRowValue CouponParticipantRowValueReduceRowHeight">
                                    <span className="ParticipantRowValue_Name">0.5</span>
                                </div>

                                <div className="ParticipantRowValue CouponParticipantRowValueReduceRowHeight">
                                    <span className="ParticipantRowValue_Name">1.5</span>
                                </div>

                                <div className="ParticipantRowValue CouponParticipantRowValueReduceRowHeight">
                                    <span className="ParticipantRowValue_Name">2.5</span>
                                </div>

                                <div className="ParticipantRowValue CouponParticipantRowValueReduceRowHeight">
                                    <span className="ParticipantRowValue_Name">3.5</span>
                                </div>

                                <div className="ParticipantRowValue CouponParticipantRowValueReduceRowHeight">
                                    <span className="ParticipantRowValue_Name">4.5</span>
                                </div>

                                <div className="ParticipantRowValue CouponParticipantRowValueReduceRowHeight">
                                    <span className="ParticipantRowValue_Name">5.5</span>
                                </div>
                            </div>

                            <div className="MarketValuesExplicit2 Market_General Market_PWidth-37-5">
                                <div className="MarketColumnHeader">Over</div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">2.30</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">2.30</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">2.30</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">2.30</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">2.30</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">2.30</span>
                                </div>
                            </div>

                            <div className="MarketValuesExplicit2 Market_General Market_PWidth-37-5 Market_LastInRow">
                                <div className="MarketColumnHeader">Under</div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">1.61</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">1.61</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">1.61</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">1.61</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">1.61</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">1.61</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Goals_Result_Total_Goals" aria-expanded="false" aria-controls="collapse_Soccer_International_Goals_Result_Total_Goals">
                            <div className="CouponMarketGroupButton_Title"><span>Result / Total Goals</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse show" id="collapse_Soccer_International_Goals_Result_Total_Goals" aria-expanded="true">
                        <div className="MarketGroupContainer">
                            <div className="Market Market_General Market_PWidth-100">
                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Fleetwood Town & Over</span><span className="Participant_Odds">2.20</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Fleetwood Town & Under</span><span className="Participant_Odds">1.61</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Walsall & Over</span><span className="Participant_Odds">2.20</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Fleetwood Town & Under</span><span className="Participant_Odds">1.61</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Fleetwood Town & Under</span><span className="Participant_Odds">1.61</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Walsall & Over</span><span className="Participant_Odds">2.20</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Goals_Total_Goals_Both_Teams_to_Score" aria-expanded="false" aria-controls="collapse_Soccer_International_Goals_Total_Goals_Both_Teams_to_Score">
                            <div className="CouponMarketGroupButton_Title"><span>Total Goals/Both Teams to Score</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse show" id="collapse_Soccer_International_Goals_Total_Goals_Both_Teams_to_Score" aria-expanded="true">
                        <div className="MarketGroupContainer">
                            <div className="Market Market_General Market_PWidth-100">
                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Over 2.5 & Yes</span><span className="Participant_Odds">2.20</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Over 2.5 & Yes</span><span className="Participant_Odds">1.61</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Under 2.5 & No</span><span className="Participant_Odds">2.20</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Under 2.5 & No</span><span className="Participant_Odds">1.61</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Goals_Exact_Total_Goals" aria-expanded="false" aria-controls="collapse_Soccer_International_Goals_Exact_Total_Goals">
                            <div className="CouponMarketGroupButton_Title"><span>Exact Total Goals</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse" id="collapse_Soccer_International_Goals_Exact_Total_Goals" aria-expanded="false">
                        <div className="MarketGroupContainer">
                            <div className="Market Market_General Market_PWidth-100">
                                <div className="Participant Participant_General Market_CN-4">
                                    <span className="Participant_Name">0 Goals</span><span className="Participant_Odds">2.20</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-4">
                                    <span className="Participant_Name">1 Goals</span><span className="Participant_Odds">1.61</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-4">
                                    <span className="Participant_Name">2 Goals</span><span className="Participant_Odds">2.20</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-4">
                                    <span className="Participant_Name">3 Goals</span><span className="Participant_Odds">1.61</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-4">
                                    <span className="Participant_Name">4 Goals</span><span className="Participant_Odds">1.61</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-4">
                                    <span className="Participant_Name">5 Goals</span><span className="Participant_Odds">1.61</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-4">
                                    <span className="Participant_Name">6 Goals</span><span className="Participant_Odds">1.61</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-4">
                                    <span className="Participant_Name">7 Goals</span><span className="Participant_Odds">2.20</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Goals_Number_of_Goals_in_Match" aria-expanded="false" aria-controls="collapse_Soccer_International_Goals_Number_of_Goals_in_Match">
                            <span>Number of Goals in Match</span>
                        </div>
                    </div>

                    <div className="MarketGroup_Wrapper collapse show" id="collapse_Soccer_International_Goals_Number_of_Goals_in_Match" aria-expanded="true">
                        <div className="MarketGroupContainer">
                            <div className="Market Market_General Market_PWidth-100">
                                <div className="Participant Participant_General Market_CN-3">
                                    <span className="Participant_Name">Under 2 goals</span><span className="Participant_Odds">1.57</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-3">
                                    <span className="Participant_Name">Draw</span><span className="Participant_Odds">3.75</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-3">
                                    <span className="Participant_Name">Over 2 goals</span><span className="Participant_Odds">6.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Goals_Both_Teams_to_Score" aria-expanded="false" aria-controls="collapse_Soccer_International_Goals_Both_Teams_to_Score">
                            <div className="CouponMarketGroupButton_Title"><span>Both Teams to Score</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse show" id="collapse_Soccer_International_Goals_Both_Teams_to_Score" aria-expanded="true">
                        <div className="MarketGroupContainer">
                            <div className="Market Market_General Market_PWidth-100">
                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Yes</span><span className="Participant_Odds">2.20</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">No</span><span className="Participant_Odds">1.61</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Goals_Teams_to_Score" aria-expanded="false" aria-controls="collapse_Soccer_International_Goals_Teams_to_Score">
                            <div className="CouponMarketGroupButton_Title"><span>Teams to Score</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse" id="collapse_Soccer_International_Goals_Teams_to_Score" aria-expanded="false">
                        <div className="MarketGroupContainer">
                            <div className="Market Market_General Market_PWidth-100">
                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Both Teams</span><span className="Participant_Odds">2.20</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Fleetwood Town Onlys</span><span className="Participant_Odds">1.61</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Under 2.5 & No</span><span className="Participant_Odds">2.20</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">No Goal</span><span className="Participant_Odds">1.61</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Goals_Both_Teams_to_Score_in_1st_Half" aria-expanded="false" aria-controls="collapse_Soccer_International_Goals_Both_Teams_to_Score_in_1st_Half">
                            <div className="CouponMarketGroupButton_Title"><span>Both Teams to Score in 1st Half</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse show" id="collapse_Soccer_International_Goals_Both_Teams_to_Score_in_1st_Half" aria-expanded="true">
                        <div className="MarketGroupContainer">
                            <div className="Market Market_General Market_PWidth-100">
                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Yes</span><span className="Participant_Odds">2.20</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">No</span><span className="Participant_Odds">1.61</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Goals_Both_Teams_to_Score_in_2st_Half" aria-expanded="false" aria-controls="collapse_Soccer_International_Goals_Both_Teams_to_Score_in_2st_Half">
                            <div className="CouponMarketGroupButton_Title"><span>Both Teams to Score in 2st Half</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse show" id="collapse_Soccer_International_Goals_Both_Teams_to_Score_in_2st_Half" aria-expanded="true">
                        <div className="MarketGroupContainer">
                            <div className="Market Market_General Market_PWidth-100">
                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Yes</span><span className="Participant_Odds">2.20</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">No</span><span className="Participant_Odds">1.61</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Goals_Both_Teams_to_Score_1st_Half_2nd_Half" aria-expanded="false" aria-controls="collapse_Soccer_International_Goals_Both_Teams_to_Score_1st_Half_2nd_Half">
                            <div className="CouponMarketGroupButton_Title"><span>Both Teams to Score 1st Half - 2nd Half </span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse" id="collapse_Soccer_International_Goals_Both_Teams_to_Score_1st_Half_2nd_Half" aria-expanded="false">
                        <div className="MarketGroupContainer">
                            <div className="Market Market_General Market_PWidth-100">
                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Yes / Yes</span><span className="Participant_Odds">2.20</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">No / Yes</span><span className="Participant_Odds">2.20</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Yes / No</span><span className="Participant_Odds">2.20</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">No / No</span><span className="Participant_Odds">2.20</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Goals_First_Half_Goals" aria-expanded="false" aria-controls="collapse_Soccer_International_Goals_First_Half_Goals">
                            <div className="CouponMarketGroupButton_Title"><span>First Half Goals</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse show" id="collapse_Soccer_International_Goals_First_Half_Goals" aria-expanded="true">
                        <div className="MarketGroupContainer MarketGroupContainer_HasLabels">
                            <div className="MarketLabel Market_General Market_HasLabels Market_PWidth-25">
                                <div className="MarketColumnHeader">&nbsp;</div>

                                <div className="ParticipantRowValue CouponParticipantRowValueReduceRowHeight">
                                    <span className="ParticipantRowValue_Name">0.5</span>
                                </div>

                                <div className="ParticipantRowValue CouponParticipantRowValueReduceRowHeight">
                                    <span className="ParticipantRowValue_Name">1.5</span>
                                </div>

                                <div className="ParticipantRowValue CouponParticipantRowValueReduceRowHeight">
                                    <span className="ParticipantRowValue_Name">2.5</span>
                                </div>

                                <div className="ParticipantRowValue CouponParticipantRowValueReduceRowHeight">
                                    <span className="ParticipantRowValue_Name">3.5</span>
                                </div>

                                <div className="ParticipantRowValue CouponParticipantRowValueReduceRowHeight">
                                    <span className="ParticipantRowValue_Name">4.5</span>
                                </div>

                                <div className="ParticipantRowValue CouponParticipantRowValueReduceRowHeight">
                                    <span className="ParticipantRowValue_Name">5.5</span>
                                </div>
                            </div>

                            <div className="MarketValuesExplicit2 Market_General Market_PWidth-37-5">
                                <div className="MarketColumnHeader">Over</div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">2.30</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">2.30</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">2.30</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">2.30</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">2.30</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">2.30</span>
                                </div>
                            </div>

                            <div className="MarketValuesExplicit2 Market_General Market_PWidth-37-5 Market_LastInRow">
                                <div className="MarketColumnHeader">Under</div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">1.61</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">1.61</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">1.61</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">1.61</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">1.61</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">1.61</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Goals_Exact_1st_Half_Goals" aria-expanded="false" aria-controls="collapse_Soccer_International_Goals_Exact_1st_Half_Goals">
                            <div className="CouponMarketGroupButton_Title"><span>Exact 1st Half Goals</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse" id="collapse_Soccer_International_Goals_Exact_1st_Half_Goals" aria-expanded="false">
                        <div className="MarketGroupContainer">
                            <div className="Market Market_General Market_PWidth-100">
                                <div className="Participant Participant_General Market_CN-4">
                                    <span className="Participant_Name">0 Goals</span><span className="Participant_Odds">2.20</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-4">
                                    <span className="Participant_Name">1 Goals</span><span className="Participant_Odds">1.61</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-4">
                                    <span className="Participant_Name">2 Goals</span><span className="Participant_Odds">2.20</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-4">
                                    <span className="Participant_Name">3 Goals</span><span className="Participant_Odds">1.61</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-4">
                                    <span className="Participant_Name">4 Goals</span><span className="Participant_Odds">1.61</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-4">
                                    <span className="Participant_Name">5 Goals</span><span className="Participant_Odds">1.61</span>
                                </div>

                                <div className="ParticipantDummy Participant_General Market_CN-4 "></div>

                                <div className="ParticipantDummy Participant_General Market_CN-4 "></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Goals_Total_Goal_Minutes" aria-expanded="false" aria-controls="collapse_Soccer_International_Goals_Total_Goal_Minutes">
                            <span>Total Goal Minutes</span>
                        </div>
                    </div>

                    <div className="MarketGroup_Wrapper collapse" id="collapse_Soccer_International_Goals_Total_Goal_Minutes" aria-expanded="true">
                        <div className="MarketGroupContainer">
                            <div className="Market Market_General Market_PWidth-100">
                                <div className="Participant Participant_General Market_CN-3">
                                    <span className="Participant_Name">Over 130 minutes</span><span className="Participant_Odds">1.57</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-3">
                                    <span className="Participant_Name">110 To 130 minutes inc.</span><span className="Participant_Odds">3.75</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-3">
                                    <span className="Participant_Name">Under 110 minutes</span><span className="Participant_Odds">6.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Goals_First_Team_to_Score" aria-expanded="false" aria-controls="collapse_Soccer_International_Goals_First_Team_to_Score">
                            <span>First Team to Score</span>
                        </div>
                    </div>

                    <div className="MarketGroup_Wrapper collapse" id="collapse_Soccer_International_Goals_First_Team_to_Score" aria-expanded="true">
                        <div className="MarketGroupContainer">
                            <div className="Market Market_General Market_PWidth-100">
                                <div className="Participant Participant_General Market_CN-3">
                                    <span className="Participant_Name">Fleetwood Town</span><span className="Participant_Odds">1.57</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-3">
                                    <span className="Participant_Name">No Goals</span><span className="Participant_Odds">3.75</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-3">
                                    <span className="Participant_Name">Walsall</span><span className="Participant_Odds">6.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Goals_Early_Goal" aria-expanded="false" aria-controls="collapse_Soccer_International_Goals_Early_Goal">
                            <div className="CouponMarketGroupButton_Title"><span>Early Goal</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse show" id="collapse_Soccer_International_Goals_Early_Goal" aria-expanded="true">
                        <div className="MarketGroupContainer">
                            <div className="Market Market_General Market_PWidth-100">
                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Goal before 31:00</span><span className="Participant_Odds">2.20</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">No Goal before 31:00</span><span className="Participant_Odds">1.61</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Goals_Early_Goal" aria-expanded="false" aria-controls="collapse_Soccer_International_Goals_Early_Goal">
                            <div className="CouponMarketGroupButton_Title"><span>Late Goal</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse show" id="collapse_Soccer_International_Goals_Early_Goal" aria-expanded="true">
                        <div className="MarketGroupContainer">
                            <div className="Market Market_General Market_PWidth-100">
                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Goal after 71:59</span><span className="Participant_Odds">2.20</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">No Goal after 71:59</span><span className="Participant_Odds">1.61</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Goals_Time_of_First_Goal_Brackets" aria-expanded="false" aria-controls="collapse_Soccer_International_Goals_Time_of_First_Goal_Brackets">
                            <div className="CouponMarketGroupButton_Title"><span>Time of First Goal Brackets</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse" id="collapse_Soccer_International_Goals_Time_of_First_Goal_Brackets" aria-expanded="true">
                        <div className="MarketGroupContainer">
                            <div className="Market Market_General Market_PWidth-100">
                                <div className="Participant Participant_General Market_CN-4">
                                    <span className="Participant_Name">1-10</span><span className="Participant_Odds">4.75</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-4">
                                    <span className="Participant_Name">11-20</span><span className="Participant_Odds">5.50</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-4">
                                    <span className="Participant_Name">21-30</span><span className="Participant_Odds">6.50</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-4">
                                    <span className="Participant_Name">31-40</span><span className="Participant_Odds">7.00</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-4">
                                    <span className="Participant_Name">41-50</span><span className="Participant_Odds">8.00</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-4">
                                    <span className="Participant_Name">51-60</span><span className="Participant_Odds">12.00</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-4">
                                    <span className="Participant_Name">61-70</span><span className="Participant_Odds">15.00</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-4">
                                    <span className="Participant_Name">71-80</span><span className="Participant_Odds">19.00</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-4">
                                    <span className="Participant_Name">81 - Full Time</span><span className="Participant_Odds">17.00</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-4">
                                    <span className="Participant_Name">No Goal</span><span className="Participant_Odds">9.00</span>
                                </div>

                                <div className="ParticipantDummy Participant_General Market_CN-4"></div>

                                <div className="ParticipantDummy Participant_General Market_CN-4"></div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Goals_2nd_Half_Goals" aria-expanded="false" aria-controls="collapse_Soccer_International_Goals_2nd_Half_Goals">
                            <div className="CouponMarketGroupButton_Title"><span>2nd Half Goals</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse show" id="collapse_Soccer_International_Goals_2nd_Half_Goals" aria-expanded="true">
                        <div className="MarketGroupContainer MarketGroupContainer_HasLabels">
                            <div className="MarketLabel Market_General Market_HasLabels Market_PWidth-25">
                                <div className="MarketColumnHeader">
                                    &nbsp;
                                </div>

                                <div className="ParticipantRowValue CouponParticipantRowValueReduceRowHeight">
                                    <span className="ParticipantRowValue_Name">0.5</span>
                                </div>

                                <div className="ParticipantRowValue CouponParticipantRowValueReduceRowHeight">
                                    <span className="ParticipantRowValue_Name">1.5</span>
                                </div>

                                <div className="ParticipantRowValue CouponParticipantRowValueReduceRowHeight">
                                    <span className="ParticipantRowValue_Name">2.5</span>
                                </div>

                                <div className="ParticipantRowValue CouponParticipantRowValueReduceRowHeight">
                                    <span className="ParticipantRowValue_Name">3.5</span>
                                </div>
                            </div>

                            <div className="MarketValuesExplicit2 Market_General Market_PWidth-37-5">
                                <div className="MarketColumnHeader">
                                    Over
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">1.25</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">2.20</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">5.00</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">15.00</span>
                                </div>
                            </div>

                            <div className="MarketValuesExplicit2 Market_General Market_PWidth-37-5 Market_LastInRow">
                                <div className="MarketColumnHeader">
                                    Under
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">3.75</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">1.61</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">1.16</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">1.030</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Goals_Exact_2nd_Half_Goals" aria-expanded="false" aria-controls="collapse_Soccer_International_Goals_Exact_2nd_Half_Goals">
                            <div className="CouponMarketGroupButton_Title"><span>Exact 2nd Half Goals</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse" id="collapse_Soccer_International_Goals_Exact_2nd_Half_Goals" aria-expanded="true">
                        <div className="MarketGroupContainer">
                            <div className="MarketFullWidth Market_General Market_PWidth-100">
                                <div className="Participant Participant_General Market_CN-4">
                                    <span className="Participant_Name">0 Goals</span><span className="Participant_Odds">3.75</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-4">
                                    <span className="Participant_Name">1 Goal</span><span className="Participant_Odds">2.62</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-4">
                                    <span className="Participant_Name">2 Goals</span><span className="Participant_Odds">3.60</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-4">
                                    <span className="Participant_Name">3 Goals</span><span className="Participant_Odds">7.50</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-4">
                                    <span className="Participant_Name">4 Goals</span><span className="Participant_Odds">21.00</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-4">
                                    <span className="Participant_Name">5+ Goals</span><span className="Participant_Odds">34.00</span>
                                </div>

                                <div className="ParticipantDummy Participant_General Market_CN-4"></div>

                                <div className="ParticipantDummy Participant_General Market_CN-4"></div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Goals_Half_With_Most_Goals" aria-expanded="false" aria-controls="collapse_Soccer_International_Goals_Half_With_Most_Goals">
                            <div className="CouponMarketGroupButton_Title"><span>Half With Most Goals</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse" id="collapse_Soccer_International_Goals_Half_With_Most_Goals" aria-expanded="true">
                        <div className="MarketGroupContainer">
                            <div className="Market Market_General Market_PWidth-100">
                                <div className="Participant Participant_General Market_CN-3">
                                    <span className="Participant_Name">1st Half</span><span className="Participant_Odds">3.20</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-3">
                                    <span className="Participant_Name">2nd Half</span><span className="Participant_Odds">2.05</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-3">
                                    <span className="Participant_Name">Tie</span><span className="Participant_Odds">3.40</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Goals_Home_Team_Highest_Scoring_Half" aria-expanded="false" aria-controls="collapse_Soccer_International_Goals_Home_Team_Highest_Scoring_Half">
                            <div className="CouponMarketGroupButton_Title"><span>Home Team Highest Scoring Half</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse" id="collapse_Soccer_International_Goals_Home_Team_Highest_Scoring_Half" aria-expanded="true">
                        <div className="MarketGroupContainer">
                            <div className="Market Market_General Market_PWidth-100">
                                <div className="Participant Participant_General Market_CN-3">
                                    <span className="Participant_Name">Fleetwood Town - 1st Half</span><span className="Participant_Odds">3.50</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-3">
                                    <span className="Participant_Name">Fleetwood Town - 2nd Half</span><span className="Participant_Odds">2.40</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-3">
                                    <span className="Participant_Name">Fleetwood Town - Tie</span><span className="Participant_Odds">2.37</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Goals_Away_Team_Highest_Scoring_Half" aria-expanded="false" aria-controls="collapse_Soccer_International_Goals_Away_Team_Highest_Scoring_Half">
                            <div className="CouponMarketGroupButton_Title"><span>Away Team Highest Scoring Half</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse" id="collapse_Soccer_International_Goals_Away_Team_Highest_Scoring_Half" aria-expanded="true">
                        <div className="MarketGroupContainer">
                            <div className="Market Market_General Market_PWidth-100">
                                <div className="Participant Participant_General Market_CN-3">
                                    <span className="Participant_Name">Walsall - 1st Half</span><span className="Participant_Odds">3.75</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-3">
                                    <span className="Participant_Name">Walsall - 2nd Half</span><span className="Participant_Odds">2.75</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-3">
                                    <span className="Participant_Name">Walsall - Tie</span><span className="Participant_Odds">2.05</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Goals_Clean_Sheet" aria-expanded="false" aria-controls="collapse_Soccer_International_Goals_Clean_Sheet">
                            <div className="CouponMarketGroupButton_Title"><span>Clean Sheet</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse show" id="collapse_Soccer_International_Goals_Clean_Sheet" aria-expanded="true">
                        <div className="MarketGroupContainer">
                            <div className="Market Market_General Market_PWidth-50">
                                <div className="MarketColumnHeader">
                                    Fleetwood Town
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap Market_CN-2">
                                    <span className="ParticipantCentered_Name">Yes</span><span className="ParticipantCentered_Odds">2.62</span>
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap Market_CN-2">
                                    <span className="ParticipantCentered_Name">No</span><span className="ParticipantCentered_Odds">1.44</span>
                                </div>
                            </div>

                            <div className="Market Market_General Market_PWidth-50 Market_LastInRow">
                                <div className="MarketColumnHeader">
                                    Walsall
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap Market_CN-2">
                                    <span className="ParticipantCentered_Name">Yes</span><span className="ParticipantCentered_Odds">3.75</span>
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap Market_CN-2">
                                    <span className="ParticipantCentered_Name">No</span><span className="ParticipantCentered_Odds">1.25</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Goals_Team_Total_Goals" aria-expanded="false" aria-controls="collapse_Soccer_International_Goals_Team_Total_Goals">
                            <div className="CouponMarketGroupButton_Title"><span>Team Total Goals</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse show" id="collapse_Soccer_International_Goals_Team_Total_Goals" aria-expanded="true">
                        <div className="MarketGroupContainer">
                            <div className="Market Market_General Market_PWidth-50">
                                <div className="MarketColumnHeader">
                                    Fleetwood Town
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalBorder Market_CN-2">
                                    <span className="ParticipantCentered_Name">Over 1.5</span><span className="ParticipantCentered_Odds">2.20</span>
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalBorder Market_CN-2">
                                    <span className="ParticipantCentered_Name">Under 1.5</span><span className="ParticipantCentered_Odds">1.61</span>
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalBorder Market_CN-2">
                                    <span className="ParticipantCentered_Name">Over 2.5</span><span className="ParticipantCentered_Odds">5.50</span>
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalBorder Market_CN-2">
                                    <span className="ParticipantCentered_Name">Under 2.5</span><span className="ParticipantCentered_Odds">1.14</span>
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalBorder Market_CN-2">
                                    <span className="ParticipantCentered_Name">Over 3.5</span><span className="ParticipantCentered_Odds">15.00</span>
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalBorder Market_CN-2">
                                    <span className="ParticipantCentered_Name">Under 3.5</span><span className="ParticipantCentered_Odds">1.030</span>
                                </div>
                            </div>

                            <div className="Market Market_General Market_PWidth-50 Market_LastInRow">
                                <div className="MarketColumnHeader">
                                    Walsall
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalBorder Market_CN-2">
                                    <span className="ParticipantCentered_Name">Over 1.5</span><span className="ParticipantCentered_Odds">3.25</span>
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalBorder Market_CN-2">
                                    <span className="ParticipantCentered_Name">Under 1.5</span><span className="ParticipantCentered_Odds">1.33</span>
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalBorder Market_CN-2">
                                    <span className="ParticipantCentered_Name">Over 2.5</span><span className="ParticipantCentered_Odds">9.00</span>
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalBorder Market_CN-2">
                                    <span className="ParticipantCentered_Name">Under 2.5</span><span className="ParticipantCentered_Odds">1.071</span>
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalBorder Market_CN-2">
                                    <span className="ParticipantCentered_Name">Over 3.5</span><span className="ParticipantCentered_Odds">26.00</span>
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalBorder Market_CN-2">
                                    <span className="ParticipantCentered_Name">Under 3.5</span><span className="ParticipantCentered_Odds">1.010</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Goals_Home_Team_Exact_Goals" aria-expanded="false" aria-controls="collapse_Soccer_International_Goals_Home_Team_Exact_Goals">
                            <div className="CouponMarketGroupButton_Title"><span>Home Team Exact Goals</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse" id="collapse_Soccer_International_Goals_Home_Team_Exact_Goals" aria-expanded="true">
                        <div className="MarketGroupContainer">
                            <div className="Market Market_General Market_PWidth-100">
                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Fleetwood Town - 0 Goals</span><span className="Participant_Odds">3.75</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Fleetwood Town - 1 Goal</span><span className="Participant_Odds">2.62</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Fleetwood Town - 2 Goals</span><span className="Participant_Odds">3.60</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Fleetwood Town - 3+ Goals</span><span className="Participant_Odds">5.50</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Goals_Away_Team_Exact_Goals" aria-expanded="false" aria-controls="collapse_Soccer_International_Goals_Away_Team_Exact_Goals">
                            <div className="CouponMarketGroupButton_Title"><span>Away Team Exact Goals</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse" id="collapse_Soccer_International_Goals_Away_Team_Exact_Goals" aria-expanded="true">
                        <div className="MarketGroupContainer">
                            <div className="Market Market_General Market_PWidth-100">
                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Walsall - 0 Goals</span><span className="Participant_Odds">2.62</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Walsall - 1 Goal</span><span className="Participant_Odds">2.50</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Walsall - 2 Goals</span><span className="Participant_Odds">4.50</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Walsall - 3+ Goals</span><span className="Participant_Odds">9.00</span>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Goals_Time_of_1st_Team_Goal" aria-expanded="false" aria-controls="collapse_Soccer_International_Goals_Time_of_1st_Team_Goal">
                            <div className="CouponMarketGroupButton_Title"><span>Time of 1st Team Goal</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse" id="collapse_Soccer_International_Goals_Time_of_1st_Team_Goal" aria-expanded="true">
                        <div className="MarketGroupContainer">
                            <div className="Market Market_General Market_PWidth-50">
                                <div className="MarketColumnHeader">
                                    Fleetwood Town
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap">
                                    <span className="ParticipantCentered_Name">Goal Before 51:00</span><span className="ParticipantCentered_Odds">1.83</span>
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap">
                                    <span className="ParticipantCentered_Name">No Goal Before 51:00</span><span className="ParticipantCentered_Odds">1.83</span>
                                </div>
                            </div>

                            <div className="Market Market_General Market_PWidth-50 Market_LastInRow">
                                <div className="MarketColumnHeader">
                                    Walsall
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap">
                                    <span className="ParticipantCentered_Name">Goal Before 67:00</span><span className="ParticipantCentered_Odds">1.83</span>
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap">
                                    <span className="ParticipantCentered_Name">No Goal Before 67:00</span><span className="ParticipantCentered_Odds">1.83</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Goals_Goals_Odd_Even" aria-expanded="false" aria-controls="collapse_Soccer_International_Goals_Goals_Odd_Even">
                            <div className="CouponMarketGroupButton_Title"><span>Goals Odd/Even</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse show" id="collapse_Soccer_International_Goals_Goals_Odd_Even" aria-expanded="true">
                        <div className="MarketGroupContainer">
                            <div className="Market Market_General Market_PWidth-100">
                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Odd</span><span className="Participant_Odds">1.95</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Even</span><span className="Participant_Odds">1.90</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Goals_Home_Team_Odd_Even_Goals" aria-expanded="false" aria-controls="collapse_Soccer_International_Goals_Home_Team_Odd_Even_Goals">
                            <div className="CouponMarketGroupButton_Title"><span>Home Team Odd/Even Goals</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse " id="collapse_Soccer_International_Goals_Home_Team_Odd_Even_Goals" aria-expanded="true">
                        <div className="MarketGroupContainer">
                            <div className="Market Market_General Market_PWidth-100">
                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Fleetwood Town - Even</span><span className="Participant_Odds">1.80</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Fleetwood Town - Odd</span><span className="Participant_Odds">1.90</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Goals_Away_Team_Odd_Even_Goals" aria-expanded="false" aria-controls="collapse_Soccer_International_Goals_Away_Team_Odd_Even_Goals">
                            <div className="CouponMarketGroupButton_Title"><span>Away Team Odd/Even Goals</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse " id="collapse_Soccer_International_Goals_Away_Team_Odd_Even_Goals" aria-expanded="true">
                        <div className="MarketGroupContainer">
                            <div className="Market Market_General Market_PWidth-100">
                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Walsall - Even</span><span className="Participant_Odds">1.66</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Walsall - Odd</span><span className="Participant_Odds">2.10</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Goals_1st_Half_Goals_Odd_Even" aria-expanded="false" aria-controls="collapse_Soccer_International_Goals_1st_Half_Goals_Odd_Even">
                            <div className="CouponMarketGroupButton_Title"><span>1st Half Goals Odd/Even</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse " id="collapse_Soccer_International_Goals_1st_Half_Goals_Odd_Even" aria-expanded="true">
                        <div className="MarketGroupContainer">
                            <div className="Market Market_General Market_PWidth-100">
                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Even</span><span className="Participant_Odds">1.66</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Odd</span><span className="Participant_Odds">2.10</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Goals_Last_Team_to_Score" aria-expanded="false" aria-controls="collapse_Soccer_International_Goals_Last_Team_to_Score">
                            <div className="CouponMarketGroupButton_Title"><span>Last Team to Score</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse " id="collapse_Soccer_International_Goals_Last_Team_to_Score" aria-expanded="true">
                        <div className="MarketGroupContainer">
                            <div className="Market Market_General Market_PWidth-100">
                                <div className="Participant Participant_General Market_CN-3">
                                    <span className="Participant_Name">Fleetwood Town</span><span className="Participant_Odds">1.66</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-3">
                                    <span className="Participant_Name">No Goal</span><span className="Participant_Odds">9.00</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-3">
                                    <span className="Participant_Name">Walsall</span><span className="Participant_Odds">2.40</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Goals_First_10_Minutes" aria-expanded="false" aria-controls="collapse_Soccer_International_Goals_First_10_Minutes">
                            <div className="CouponMarketGroupButton_Title"><span>First 10 Minutes (00:00 - 09:59)</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse show" id="collapse_Soccer_International_Goals_First_10_Minutes" aria-expanded="true">
                        <div className="MarketGroupContainer MarketGroupContainer_HasLabels">
                            <div className="MarketCouponValuesExplicit36 Market_General Market_HasLabels Market_PWidth-62-5">
                                <div className="MarketColumnHeader">
                                    &nbsp;
                                </div>

                                <div className="CouponParticipantPlayerTeam Participant_General">
                                    <span className="CouponParticipantPlayerTeam_Name">Goals</span>
                                </div>
                            </div>

                            <div className="MarketCouponValuesExplicit37 Market_General Market_PWidth-18-75">
                                <div className="MarketColumnHeader">
                                    Over
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalRowHeight">
                                    <span className="ParticipantCentered_Name">0.5</span><span className="ParticipantCentered_Odds">5.00</span>
                                </div>
                            </div>

                            <div className="MarketCouponValuesExplicit37 Market_General Market_PWidth-18-75 Market_LastInRow">
                                <div className="MarketColumnHeader">
                                    Under
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalRowHeight">
                                    <span className="ParticipantCentered_Name">0.5</span><span className="ParticipantCentered_Odds">1.16</span>
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

export default Goals;
