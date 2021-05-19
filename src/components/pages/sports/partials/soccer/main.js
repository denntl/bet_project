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

class Main extends DefaultGroup {
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
            <section id="Main-panel" className="" role="tabpanel">
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
                <div className="MarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Full_Time_Result" aria-expanded="false" aria-controls="collapse_Full_Time_Result">
                            <span>Full Time Result</span>
                        </div>
                    </div>

                    <div className="MarketGroup_Wrapper collapse show" id="collapse_Full_Time_Result" aria-expanded="true">
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
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Double_Chance" aria-expanded="false" aria-controls="collapse_Double_Chance">
                            <span>Double Chance</span>
                        </div>
                    </div>

                    <div className="MarketGroup_Wrapper collapse show" id="collapse_Double_Chance" aria-expanded="true">
                        <div className="MarketGroupContainer">
                            <div className="Market Market_General Market_PWidth-100">
                                <div className="Participant Participant_General Market_CN-3">
                                    <span className="Participant_Name">Azerbaijan or Draw</span><span className="Participant_Odds">1.14</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-3">
                                    <span className="Participant_Name">Draw or Faroe Islands</span><span className="Participant_Odds">2.40</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-3">
                                    <span className="Participant_Name">Azerbaijan or Faroe Islands</span><span className="Participant_Odds">1.28</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="MarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButtonWrapper">
                            <div className="MarketGroupButton  MarketGroup_HasButtonBar" data-toggle="collapse" data-target="#collapse_Soccer_International_Correct_Score" aria-expanded="false" aria-controls="collapse_Soccer_International_Correct_Score">
                                <span>Correct Score</span>
                            </div>
                            <span className="MarketGroup_ButtonBar  nav nav-tabs no-collapsable" role="tablist">
                                        <a href="#Soccer_International_Correct_Score_panel_Slider"  className="MarketGroup_BBarItem active " id="" data-toggle="tab" role="tab">Slider</a>
                                        <a href="#Soccer_International_Correct_Score_panel_All" className="MarketGroup_BBarItem" id="" data-toggle="tab" role="tab">All</a>
                                    </span>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse show" id="collapse_Soccer_International_Correct_Score" aria-expanded="true">
                        <div  className="content tab-content clearfix">
                            <section id="Soccer_International_Correct_Score_panel_Slider" className="tab-pane fade show active" role="tabpanel">
                                <div className="MarketGroupContainer">
                                    <div className="MarketSliders Market_PWidth-100">
                                        <div className="MarketSliders_SliderOneContainer">
                                            <div className="MarketSliders_SliderTitleContOne">
                                                <span className="MarketSliders_SliderTitle">Monaco</span>
                                                <div className="MarketSliders_range-slider">
                                                    <input id="MarketSliders_range_Monaco" className="MarketSliders_range-slider__range" type="range" defaultValue={250} min={0} max={6} step={1} />
                                                    <datalist>
                                                        <option value="0">0</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                    </datalist>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="MarketSliders_Gap "></div>
                                        <div className="MarketSliders_SliderTwoContainer">
                                            <div className="MarketSliders_SliderTitleContTwo">
                                                <span className="MarketSliders_SliderTitle">Borussia Dortmund</span>
                                                <div className="MarketSliders_range-slider">
                                                    <input id="MarketSliders_range_Borussia_Dortmund" className="MarketSliders_range-slider__range" type="range" defaultValue={250} min={0} max={5} step={1} />
                                                    <datalist>
                                                        <option value="0">0</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                    </datalist>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="MarketSliders_OddsContainer">
                                            <div className="ParticipantSliderResultField Participant_General">
                                                <output id="" for="MarketSliders_range_Monaco" className="ParticipantSliderResultField_Name">0-0</output>
                                                <output id="" for="MarketSliders_range_Borussia_Dortmund" className="ParticipantSliderResultField_Odds">0.0</output>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section id="Soccer_International_Correct_Score_panel_All" className="tab-pane fade" role="tabpanel">
                                <div className="MarketGroupContainer">
                                    <div className="Market3 Market_General Market_PWidth-33-3333">
                                        <div className="MarketColumnHeader">Kazakhstan</div>

                                        <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalRowHeight">
                                            <span className="ParticipantCentered_Name">1-0</span><span className="ParticipantCentered_Odds">5.50</span>
                                        </div>

                                        <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalRowHeight">
                                            <span className="ParticipantCentered_Name">2-0</span><span className="ParticipantCentered_Odds">6.50</span>
                                        </div>

                                        <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalRowHeight">
                                            <span className="ParticipantCentered_Name">2-1</span><span className="ParticipantCentered_Odds">8.50</span>
                                        </div>

                                        <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalRowHeight">
                                            <span className="ParticipantCentered_Name">3-0</span><span className="ParticipantCentered_Odds">11.00</span>
                                        </div>

                                        <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalRowHeight">
                                            <span className="ParticipantCentered_Name">3-1</span><span className="ParticipantCentered_Odds">15.00</span>
                                        </div>

                                        <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalRowHeight">
                                            <span className="ParticipantCentered_Name">3-2</span><span className="ParticipantCentered_Odds">34.00</span>
                                        </div>

                                        <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalRowHeight">
                                            <span className="ParticipantCentered_Name">4-0</span><span className="ParticipantCentered_Odds">23.00</span>
                                        </div>

                                        <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalRowHeight">
                                            <span className="ParticipantCentered_Name">4-1</span><span className="ParticipantCentered_Odds">34.00</span>
                                        </div>

                                        <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalRowHeight">
                                            <span className="ParticipantCentered_Name">4-2</span><span className="ParticipantCentered_Odds">51.00</span>
                                        </div>

                                        <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalRowHeight">
                                            <span className="ParticipantCentered_Name">4-3</span><span className="ParticipantCentered_Odds">151.00</span>
                                        </div>

                                        <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalRowHeight">
                                            <span className="ParticipantCentered_Name">5-0</span><span className="ParticipantCentered_Odds">51.00</span>
                                        </div>

                                        <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalRowHeight">
                                            <span className="ParticipantCentered_Name">5-1</span><span className="ParticipantCentered_Odds">67.00</span>
                                        </div>

                                        <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalRowHeight">
                                            <span className="ParticipantCentered_Name">5-2</span><span className="ParticipantCentered_Odds">126.00</span>
                                        </div>

                                        <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalRowHeight">
                                            <span className="ParticipantCentered_Name">5-3</span><span className="ParticipantCentered_Odds">501.00</span>
                                        </div>

                                        <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalRowHeight">
                                            <span className="ParticipantCentered_Name">6-1</span><span className="ParticipantCentered_Odds">151.00</span>
                                        </div>

                                        <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalRowHeight">
                                            <span className="ParticipantCentered_Name">6-0</span><span className="ParticipantCentered_Odds">126.00</span>
                                        </div>

                                        <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalRowHeight">
                                            <span className="ParticipantCentered_Name">6-2</span><span className="ParticipantCentered_Odds">451.00</span>
                                        </div>

                                        <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalRowHeight">
                                            <span className="ParticipantCentered_Name">7-0</span><span className="ParticipantCentered_Odds">451.00</span>
                                        </div>
                                    </div>

                                    <div className="Market3 Market_General Market_PWidth-33-3333">
                                        <div className="MarketColumnHeader">Draw</div>

                                        <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalRowHeight">
                                            <span className="ParticipantCentered_Name">0-0</span><span className="ParticipantCentered_Odds">7.50</span>
                                        </div>

                                        <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalRowHeight">
                                            <span className="ParticipantCentered_Name">1-1</span><span className="ParticipantCentered_Odds">7.00</span>
                                        </div>

                                        <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalRowHeight">
                                            <span className="ParticipantCentered_Name">2-2</span><span className="ParticipantCentered_Odds">21.00</span>
                                        </div>

                                        <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalRowHeight">
                                            <span className="ParticipantCentered_Name">3-3</span><span className="ParticipantCentered_Odds">81.00</span>
                                        </div>

                                        <div className="ParticipantDummy Participant_General"></div>

                                        <div className="ParticipantDummy Participant_General"></div>

                                        <div className="ParticipantDummy Participant_General"></div>

                                        <div className="ParticipantDummy Participant_General"></div>

                                        <div className="ParticipantDummy Participant_General"></div>

                                        <div className="ParticipantDummy Participant_General"></div>

                                        <div className="ParticipantDummy Participant_General"></div>

                                        <div className="ParticipantDummy Participant_General"></div>

                                        <div className="ParticipantDummy Participant_General"></div>

                                        <div className="ParticipantDummy Participant_General"></div>

                                        <div className="ParticipantDummy Participant_General"></div>

                                        <div className="ParticipantDummy Participant_General"></div>

                                        <div className="ParticipantDummy Participant_General"></div>

                                        <div className="ParticipantDummy Participant_General"></div>
                                    </div>

                                    <div className="Market3 Market_General Market_PWidth-33-3333 Market_LastInRow">
                                        <div className="MarketColumnHeader">Latvia</div>

                                        <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalRowHeight">
                                            <span className="ParticipantCentered_Name">1-0</span><span className="ParticipantCentered_Odds">13.00</span>
                                        </div>

                                        <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalRowHeight">
                                            <span className="ParticipantCentered_Name">2-0</span><span className="ParticipantCentered_Odds">34.00</span>
                                        </div>

                                        <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalRowHeight">
                                            <span className="ParticipantCentered_Name">2-1</span><span className="ParticipantCentered_Odds">21.00</span>
                                        </div>

                                        <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalRowHeight">
                                            <span className="ParticipantCentered_Name">3-0</span><span className="ParticipantCentered_Odds">81.00</span>
                                        </div>

                                        <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalRowHeight">
                                            <span className="ParticipantCentered_Name">3-1</span><span className="ParticipantCentered_Odds">51.00</span>
                                        </div>

                                        <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalRowHeight">
                                            <span className="ParticipantCentered_Name">3-2</span><span className="ParticipantCentered_Odds">67.00</span>
                                        </div>

                                        <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalRowHeight">
                                            <span className="ParticipantCentered_Name">4-0</span><span className="ParticipantCentered_Odds">351.00</span>
                                        </div>

                                        <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalRowHeight">
                                            <span className="ParticipantCentered_Name">4-1</span><span className="ParticipantCentered_Odds">201.00</span>
                                        </div>

                                        <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalRowHeight">
                                            <span className="ParticipantCentered_Name">4-2</span><span className="ParticipantCentered_Odds">251.00</span>
                                        </div>

                                        <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalRowHeight">
                                            <span className="ParticipantCentered_Name">4-3</span><span className="ParticipantCentered_Odds">451.00</span>
                                        </div>

                                        <div className="ParticipantDummy Participant_General"></div>

                                        <div className="ParticipantDummy Participant_General"></div>

                                        <div className="ParticipantDummy Participant_General"></div>

                                        <div className="ParticipantDummy Participant_General"></div>

                                        <div className="ParticipantDummy Participant_General"></div>

                                        <div className="ParticipantDummy Participant_General"></div>

                                        <div className="ParticipantDummy Participant_General"></div>

                                        <div className="ParticipantDummy Participant_General"></div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="MarketGroupContainer">
                            <div className="OthersOnRequest">
                                <div className="OthersOnRequest_Link">Others on Request</div>
                                <div className="OthersOnRequestAlert OthersOnRequestAlert-above ">To make a request <div className="OthersOnRequestAlert_Nib"></div><span className="OthersOnRequestAlert_LoginLink">Log In</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="MarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Half_Time_Full_Time" aria-expanded="false" aria-controls="collapse_Half_Time_Full_Time">
                            <span>Half Time/Full Time</span>
                        </div>
                    </div>

                    <div className="MarketGroup_Wrapper collapse show" id="collapse_Half_Time_Full_Time" aria-expanded="true">
                        <div className="MarketGroupContainer">
                            <div className="Market Market_General Market_PWidth-100">
                                <div className="Participant Participant_General Market_CN-3">
                                    <span className="Participant_Name">Azerbaijan - Azerbaijan</span><span className="Participant_Odds">2.50</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-3">
                                    <span className="Participant_Name">Azerbaijan - Draw</span><span className="Participant_Odds">17.00</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-3">
                                    <span className="Participant_Name">Azerbaijan - Faroe Islands</span><span className="Participant_Odds">51.00</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-3">
                                    <span className="Participant_Name">Draw - Azerbaijan</span><span className="Participant_Odds">4.00</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-3">
                                    <span className="Participant_Name">Draw - Draw</span><span className="Participant_Odds">5.00</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-3">
                                    <span className="Participant_Name">Draw - Faroe Islands</span><span className="Participant_Odds">12.00</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-3">
                                    <span className="Participant_Name">Faroe Islands - Azerbaijan</span><span className="Participant_Odds">23.00</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-3">
                                    <span className="Participant_Name">Faroe Islands - Draw</span><span className="Participant_Odds">17.00</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-3">
                                    <span className="Participant_Name">Faroe Islands - Faroe Islands</span><span className="Participant_Odds">10.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Half_Time_Full_Time_Correct_Score" aria-expanded="false" aria-controls="collapse_Soccer_International_Half_Time_Full_Time_Correct_Score">
                            <div className="CouponMarketGroupButton_Title"><span>Half Time / Full Time Correct Score</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper" id="collapse_Soccer_International_Half_Time_Full_Time_Correct_Score" aria-expanded="true">
                        <div className="MarketGroupContainer">
                            <div className="MarketCastsBase Market Market_General Market_PWidth-100 Market_LastInRow">
                                <div className="CastsDropDown  dropdown">
                                    <div className="CastsDropDownButton"  data-toggle="dropdown" >
                                        <div className="CastsDropDownButton_Participant CastsDropDownButton_ParticipantTruncate">Kazakhstan 1-0</div>
                                        <div className="CastsDropDownButton_Market">Half Time</div>
                                    </div>
                                    <div className="DropDownContainer dropdown-menu">
                                        <div className="DropDownItem selected">Kazakhstan 1-0</div>
                                        <div className="DropDownItem">Kazakhstan 2-0</div>
                                        <div className="DropDownItem">Kazakhstan 2-1</div>
                                        <div className="DropDownItem">Kazakhstan 3-0</div>
                                        <div className="DropDownItem">Kazakhstan 3-1</div>
                                        <div className="DropDownItem">Kazakhstan 3-2</div>
                                        <div className="DropDownItem">Kazakhstan 4-0</div>
                                        <div className="DropDownItem">Kazakhstan 4-1</div>
                                        <div className="DropDownItem">Latvia 1-0</div>
                                        <div className="DropDownItem">Latvia 2-0</div>
                                        <div className="DropDownItem">Latvia 2-1</div>
                                        <div className="DropDownItem">Latvia 3-0</div>
                                        <div className="DropDownItem">Latvia 3-1</div>
                                        <div className="DropDownItem">Kazakhstan 5-0</div>
                                        <div className="DropDownItem">Draw 0-0</div>
                                        <div className="DropDownItem">Draw 1-1</div>
                                        <div className="DropDownItem">Draw 2-2</div>
                                    </div>
                                </div>
                                <div className="CastsDropDown  dropdown">
                                    <div className="CastsDropDownButton"  data-toggle="dropdown" >
                                        <div className="CastsDropDownButton_Participant CastsDropDownButton_ParticipantTruncate">Fleetwood Town 1-0</div>
                                        <div className="CastsDropDownButton_Market">Correct Score</div>
                                    </div>
                                    <div className="DropDownContainer dropdown-menu">
                                        <div className="DropDownItem selected">Kazakhstan 1-0</div>
                                        <div className="DropDownItem">Kazakhstan 2-0</div>
                                        <div className="DropDownItem">Kazakhstan 2-1</div>
                                        <div className="DropDownItem">Kazakhstan 3-0</div>
                                        <div className="DropDownItem">Kazakhstan 3-1</div>
                                        <div className="DropDownItem">Kazakhstan 3-2</div>
                                        <div className="DropDownItem">Kazakhstan 4-0</div>
                                        <div className="DropDownItem">Kazakhstan 4-1</div>
                                        <div className="DropDownItem">Latvia 1-0</div>
                                        <div className="DropDownItem">Latvia 2-0</div>
                                        <div className="DropDownItem">Latvia 2-1</div>
                                        <div className="DropDownItem">Latvia 3-0</div>
                                        <div className="DropDownItem">Latvia 3-1</div>
                                        <div className="DropDownItem">Kazakhstan 5-0</div>
                                        <div className="DropDownItem">Draw 0-0</div>
                                        <div className="DropDownItem">Draw 1-1</div>
                                        <div className="DropDownItem">Draw 2-2</div>
                                    </div>
                                </div>
                                <div className="CastsParticipant Participant_General">
                                    <span className="CastsParticipant_Name">10.00</span>
                                </div>
                            </div>
                            <div className="OthersOnRequest">
                                <div className="OthersOnRequest_Link">Others on Request</div>
                                <div className="OthersOnRequestAlert OthersOnRequestAlert-above ">To make a request <div className="OthersOnRequestAlert_Nib"></div><span className="OthersOnRequestAlert_LoginLink">Log In</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Goals_Over_Under" aria-expanded="false" aria-controls="collapse_Soccer_International_Goals_Over_Under">
                            <div className="CouponMarketGroupButton_Title"><span>Goals Over/Under</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse show" id="collapse_Soccer_International_Goals_Over_Under" aria-expanded="true">
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
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Both_Teams_to_Score" aria-expanded="false" aria-controls="collapse_Soccer_International_Both_Teams_to_Score">
                            <div className="CouponMarketGroupButton_Title"><span>Both Teams to Score</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse show" id="collapse_Soccer_International_Both_Teams_to_Score" aria-expanded="true">
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
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Draw_No_Bet" aria-expanded="false" aria-controls="collapse_Soccer_International_Draw_No_Bet">
                            <div className="CouponMarketGroupButton_Title"><span>Draw No Bet</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse show" id="collapse_Soccer_International_Draw_No_Bet" aria-expanded="true">
                        <div className="MarketGroupContainer">
                            <div className="Market Market_General Market_PWidth-100">
                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Kazakhstan</span><span className="Participant_Odds">1.20</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Latvia</span><span className="Participant_Odds">4.33</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Result_Both_Teams_to_Score" aria-expanded="false" aria-controls="collapse_Soccer_International_Result_Both_Teams_to_Score">
                            <div className="CouponMarketGroupButton_Title"><span>Result/Both Teams to Score</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse show" id="collapse_Soccer_International_Result_Both_Teams_to_Score" aria-expanded="true">
                        <div className="MarketGroupContainer MarketGroupContainer_HasLabels">
                            <div className="MarketLabel Market_General Market_HasLabels Market_PWidth-25">
                                <div className="MarketColumnHeader">&nbsp;</div>

                                <div className="CouponParticipantLabel">
                                    <span className="CouponParticipantLabel_Name">Kazakhstan</span>
                                </div>

                                <div className="CouponParticipantLabel">
                                    <span className="CouponParticipantLabel_Name">Latvia</span>
                                </div>

                                <div className="CouponParticipantLabel">
                                    <span className="CouponParticipantLabel_Name">Draw</span>
                                </div>
                            </div>

                            <div className="MarketValues Market_General Market_PWidth-37-5">
                                <div className="MarketColumnHeader">Yes</div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredNotUniqueAdditionalRowHeight ParticipantCentered_BlankName">
                                    <span className="ParticipantCentered_Name"></span>
                                    <span className="ParticipantCentered_Odds">4.50</span>
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredNotUniqueAdditionalRowHeight ParticipantCentered_BlankName">
                                    <span className="ParticipantCentered_Name"></span>
                                    <span className="ParticipantCentered_Odds">15.00</span>
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredNotUniqueAdditionalRowHeight ParticipantCentered_BlankName">
                                    <span className="ParticipantCentered_Name"></span>
                                    <span className="ParticipantCentered_Odds">5.50</span>
                                </div>
                            </div>

                            <div className="MarketValues Market_General Market_PWidth-37-5 Market_LastInRow">
                                <div className="MarketColumnHeader">No</div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredNotUniqueAdditionalRowHeight ParticipantCentered_BlankName">
                                    <span className="ParticipantCentered_Name"></span>
                                    <span className="ParticipantCentered_Odds">2.37</span>
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredNotUniqueAdditionalRowHeight ParticipantCentered_BlankName">
                                    <span className="ParticipantCentered_Name"></span>
                                    <span className="ParticipantCentered_Odds">8.50</span>
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredNotUniqueAdditionalRowHeight ParticipantCentered_BlankName">
                                    <span className="ParticipantCentered_Name"></span>
                                    <span className="ParticipantCentered_Odds">7.50</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Handicap_Result" aria-expanded="false" aria-controls="collapse_Soccer_International_Handicap_Result">
                            <div className="CouponMarketGroupButton_Title"><span>Handicap Result</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse" id="collapse_Soccer_International_Handicap_Result" aria-expanded="true">
                        <div className="MarketGroupContainer">
                            <div className="Market Market_General Market_PWidth-100">
                                <div className="Participant Participant_General Market_CN-3">
                                    <span className="Participant_Name">Kazakhstan (-1)</span><span className="Participant_Odds">2.62</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-3">
                                    <span className="Participant_Name">Tie - (Latvia +1)</span><span className="Participant_Odds">3.40</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-3">
                                    <span className="Participant_Name">Latvia (+1)</span><span className="Participant_Odds">2.25</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Alternative_Handicap_Result" aria-expanded="false" aria-controls="collapse_Soccer_International_Alternative_Handicap_Result">
                            <div className="CouponMarketGroupButton_Title"><span>Alternative Handicap Result</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse" id="collapse_Soccer_International_Alternative_Handicap_Result" aria-expanded="true">
                        <div className="MarketGroupContainer">
                            <div className="Market3 Market_General Market_PWidth-33-3333">
                                <div className="MarketColumnHeader">Kazakhstan</div>

                                <div className="ParticipantCentered Participant_General CouponParticipantCenteredAdditionalRowHeight">
                                    <span className="ParticipantCentered_Handicap">-3</span><span className="ParticipantCentered_Odds">12.00</span>
                                </div>

                                <div className="ParticipantCentered Participant_General CouponParticipantCenteredAdditionalRowHeight">
                                    <span className="ParticipantCentered_Handicap">-2</span><span className="ParticipantCentered_Odds">5.50</span>
                                </div>

                                <div className="ParticipantCentered Participant_General CouponParticipantCenteredAdditionalRowHeight">
                                    <span className="ParticipantCentered_Handicap">1</span><span className="ParticipantCentered_Odds">1.12</span>
                                </div>

                                <div className="ParticipantCentered Participant_General CouponParticipantCenteredAdditionalRowHeight">
                                    <span className="ParticipantCentered_Handicap">2</span><span className="ParticipantCentered_Odds">1.025</span>
                                </div>
                            </div>

                            <div className="Market3 Market_General Market_PWidth-33-3333">
                                <div className="MarketColumnHeader">Tie</div>

                                <div className="ParticipantCentered Participant_General CouponParticipantCenteredAdditionalRowHeight">
                                    <span className="ParticipantCentered_Handicap">3</span><span className="ParticipantCentered_Odds">8.00</span>
                                </div>

                                <div className="ParticipantCentered Participant_General CouponParticipantCenteredAdditionalRowHeight">
                                    <span className="ParticipantCentered_Handicap">2</span><span className="ParticipantCentered_Odds">4.50</span>
                                </div>

                                <div className="ParticipantCentered Participant_General CouponParticipantCenteredAdditionalRowHeight">
                                    <span className="ParticipantCentered_Handicap">-1</span><span className="ParticipantCentered_Odds">7.50</span>
                                </div>

                                <div className="ParticipantCentered Participant_General CouponParticipantCenteredAdditionalRowHeight">
                                    <span className="ParticipantCentered_Handicap">-2</span><span className="ParticipantCentered_Odds">17.00</span>
                                </div>
                            </div>

                            <div className="Market3 Market_General Market_PWidth-33-3333 Market_LastInRow">
                                <div className="MarketColumnHeader">Latvia</div>

                                <div className="ParticipantCentered Participant_General CouponParticipantCenteredAdditionalRowHeight">
                                    <span className="ParticipantCentered_Handicap">3</span><span className="ParticipantCentered_Odds">1.10</span>
                                </div>

                                <div className="ParticipantCentered Participant_General CouponParticipantCenteredAdditionalRowHeight">
                                    <span className="ParticipantCentered_Handicap">2</span><span className="ParticipantCentered_Odds">1.40</span>
                                </div>

                                <div className="ParticipantCentered Participant_General CouponParticipantCenteredAdditionalRowHeight">
                                    <span className="ParticipantCentered_Handicap">-1</span><span className="ParticipantCentered_Odds">15.00</span>
                                </div>

                                <div className="ParticipantCentered Participant_General CouponParticipantCenteredAdditionalRowHeight">
                                    <span className="ParticipantCentered_Handicap">-2</span><span className="ParticipantCentered_Odds">23.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Alternative_Winning_Margin" aria-expanded="false" aria-controls="collapse_Soccer_International_Alternative_Winning_Margin">
                            <div className="CouponMarketGroupButton_Title"><span>Winning Margin</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse" id="collapse_Soccer_International_Alternative_Winning_Margin" aria-expanded="true">
                        <div className="MarketGroupContainer MarketGroupContainer_HasLabels">
                            <div className="MarketLabel Market_General Market_HasLabels Market_PWidth-25">
                                <div className="MarketColumnHeader">&nbsp;</div>

                                <div className="ParticipantRowValue CouponParticipantRowValueReduceRowHeight">
                                    <span className="ParticipantRowValue_Name">1</span>
                                </div>

                                <div className="ParticipantRowValue CouponParticipantRowValueReduceRowHeight">
                                    <span className="ParticipantRowValue_Name">2</span>
                                </div>

                                <div className="ParticipantRowValue CouponParticipantRowValueReduceRowHeight">
                                    <span className="ParticipantRowValue_Name">3</span>
                                </div>

                                <div className="ParticipantRowValue CouponParticipantRowValueReduceRowHeight">
                                    <span className="ParticipantRowValue_Name">4+</span>
                                </div>
                            </div>

                            <div className="MarketValuesExplicit2 Market_General Market_PWidth-37-5">
                                <div className="MarketColumnHeader">Kazakhstan</div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">3.40</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">4.50</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">8.00</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">12.00</span>
                                </div>
                            </div>

                            <div className="MarketValuesExplicit2 Market_General Market_PWidth-37-5 Market_LastInRow">
                                <div className="MarketColumnHeader">Latvia</div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">7.50</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">17.00</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">67.00</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">126.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="MarketGroupContainer MarketGroupContainer_HasLabels">
                            <div className="MarketCouponValuesExplicit26 Market_General Market_HasLabels Market_PWidth-25">
                                <div className="ParticipantRowValue CouponParticipantRowValueReduceRowHeight">
                                    <span className="ParticipantRowValue_Name">Score Draw</span>
                                </div>

                                <div className="ParticipantRowValue CouponParticipantRowValueReduceRowHeight">
                                    <span className="ParticipantRowValue_Name">No Goal</span>
                                </div>
                            </div>

                            <div className="MarketCouponValuesExplicit27 Market_General Market_PWidth-75 Market_LastInRow">
                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">5.50</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">7.50</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Main_Scorecast" aria-expanded="false" aria-controls="collapse_Soccer_International_Main_Scorecast">
                            <div className="CouponMarketGroupButton_Title"><span>Scorecast</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse show" id="collapse_Soccer_International_Main_Scorecast" aria-expanded="true">
                        <div className="MarketGroupContainer">
                            <div className="MarketCastsBase Market Market_General Market_PWidth-100 Market_LastInRow">
                                <div className="CastsDropDown  dropdown">
                                    <div className="CastsDropDownButton"  data-toggle="dropdown" >
                                        <div className="CastsDropDownButton_Participant CastsDropDownButton_ParticipantTruncate">Ched Evans</div>
                                        <div className="CastsDropDownButton_Market">to Score 1st</div>
                                    </div>
                                    <div className="DropDownContainer dropdown-menu">
                                        <div className="DropDownItem selected">Ched Evans</div>
                                        <div className="DropDownItem">Chris Long</div>
                                        <div className="DropDownItem">Conor McAleny</div>
                                        <div className="DropDownItem">Paddy Madden</div>
                                        <div className="DropDownItem">Ashley Hunter</div>
                                        <div className="DropDownItem">Wes Burns</div>
                                        <div className="DropDownItem">Harrison Biggins</div>
                                        <div className="DropDownItem">Ross Wallace</div>
                                        <div className="DropDownItem">Dean Marney</div>
                                        <div className="DropDownItem">James Wallace</div>
                                        <div className="DropDownItem">Jason Holt</div>
                                        <div className="DropDownItem">Kyle Dempsey</div>
                                        <div className="DropDownItem">Ryan Taylor</div>
                                        <div className="DropDownItem">Cian Bolger</div>
                                        <div className="DropDownItem">Ryan Rydel</div>
                                        <div className="DropDownItem">Ashley Eastham</div>
                                        <div className="DropDownItem">Eddie Clarke</div>
                                        <div className="DropDownItem">Gethin Jones</div>
                                        <div className="DropDownItem">James Husband</div>
                                        <div className="DropDownItem">Nathan Sheron</div>
                                        <div className="DropDownItem">Craig Morgan</div>
                                        <div className="DropDownItem">Lewie Coyle</div>
                                        <div className="DropDownItem">Andy Cook</div>
                                        <div className="DropDownItem">Morgan Ferrier</div>
                                        <div className="DropDownItem">Josh Gordon</div>
                                        <div className="DropDownItem">Zeli Ismail</div>
                                        <div className="DropDownItem">Josh Ginnelly</div>
                                        <div className="DropDownItem">Connor Ronan</div>
                                        <div className="DropDownItem">Kieron Morris</div>
                                        <div className="DropDownItem">Luke Leahy</div>
                                        <div className="DropDownItem">Maziar Kouhyar</div>
                                        <div className="DropDownItem">George Dobson</div>
                                        <div className="DropDownItem">Isaiah Osbourne</div>
                                        <div className="DropDownItem">Liam Kinsella</div>
                                        <div className="DropDownItem">Connor Johnson</div>
                                        <div className="DropDownItem">Jack Fitzwater</div>
                                        <div className="DropDownItem">Kane Wilson</div>
                                        <div className="DropDownItem">Nicky Devlin</div>
                                        <div className="DropDownItem">Russell Martin</div>
                                        <div className="DropDownItem">Jon Guthrie</div>
                                    </div>
                                </div>
                                <div className="CastsDropDown  dropdown">
                                    <div className="CastsDropDownButton"  data-toggle="dropdown" >
                                        <div className="CastsDropDownButton_Participant CastsDropDownButton_ParticipantTruncate">Fleetwood Town 1-0</div>
                                        <div className="CastsDropDownButton_Market">Correct Score</div>
                                    </div>
                                    <div className="DropDownContainer dropdown-menu">
                                        <div className="DropDownItem selected">Fleetwood Town 1-0</div>
                                        <div className="DropDownItem">Fleetwood Town 2-0</div>
                                        <div className="DropDownItem">Fleetwood Town 2-1</div>
                                        <div className="DropDownItem">Fleetwood Town 3-0</div>
                                        <div className="DropDownItem">Fleetwood Town 3-1</div>
                                        <div className="DropDownItem">Fleetwood Town 3-2</div>
                                        <div className="DropDownItem">Fleetwood Town 4-0</div>
                                        <div className="DropDownItem">Fleetwood Town 4-1</div>
                                        <div className="DropDownItem">Fleetwood Town 4-2</div>
                                        <div className="DropDownItem">Fleetwood Town 4-3</div>
                                        <div className="DropDownItem">Fleetwood Town 5-0</div>
                                        <div className="DropDownItem">Fleetwood Town 5-1</div>
                                        <div className="DropDownItem">Fleetwood Town 5-2</div>
                                        <div className="DropDownItem">Fleetwood Town 5-3</div>
                                        <div className="DropDownItem">Fleetwood Town 6-1</div>
                                        <div className="DropDownItem">Fleetwood Town 6-0</div>
                                        <div className="DropDownItem">Walsall 2-1</div>
                                        <div className="DropDownItem">Walsall 3-1</div>
                                        <div className="DropDownItem">Walsall 3-2</div>
                                        <div className="DropDownItem">Walsall 4-1</div>
                                        <div className="DropDownItem">Walsall 4-2</div>
                                        <div className="DropDownItem">Walsall 4-3</div>
                                        <div className="DropDownItem">Walsall 5-1</div>
                                        <div className="DropDownItem">Walsall 5-2</div>
                                        <div className="DropDownItem">Draw 1-1</div>
                                        <div className="DropDownItem">Draw 2-2</div>
                                        <div className="DropDownItem">Draw 3-3</div>
                                        <div className="DropDownItem">Draw 4-4</div>
                                    </div>
                                </div>
                                <div className="CastsParticipant Participant_General "><span class="CastsParticipant_Name">19.00</span></div>
                            </div>
                            <div className="OthersOnRequest">
                                <div className="OthersOnRequest_Link">Others on Request</div>
                                <div className="OthersOnRequestAlert OthersOnRequestAlert-above ">To make a request <div className="OthersOnRequestAlert_Nib"></div><span className="OthersOnRequestAlert_LoginLink">Log In</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Main_Anytime_Scorecast" aria-expanded="false" aria-controls="collapse_Soccer_International_Main_Anytime_Scorecast">
                            <div className="CouponMarketGroupButton_Title"><span>Anytime Scorecast</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse show" id="collapse_Soccer_International_Main_Anytime_Scorecast" aria-expanded="true">
                        <div className="MarketGroupContainer">
                            <div className="MarketCastsBase Market Market_General Market_PWidth-100 Market_LastInRow">
                                <div className="CastsDropDown  dropdown">
                                    <div className="CastsDropDownButton"  data-toggle="dropdown" >
                                        <div className="CastsDropDownButton_Participant CastsDropDownButton_ParticipantTruncate">Ched Evans</div>
                                        <div className="CastsDropDownButton_Market">to Score 1st</div>
                                    </div>
                                    <div className="DropDownContainer dropdown-menu">
                                        <div className="DropDownItem selected">Ched Evans</div>
                                        <div className="DropDownItem">Chris Long</div>
                                        <div className="DropDownItem">Conor McAleny</div>
                                        <div className="DropDownItem">Paddy Madden</div>
                                        <div className="DropDownItem">Ashley Hunter</div>
                                        <div className="DropDownItem">Wes Burns</div>
                                        <div className="DropDownItem">Harrison Biggins</div>
                                        <div className="DropDownItem">Ross Wallace</div>
                                        <div className="DropDownItem">Dean Marney</div>
                                        <div className="DropDownItem">James Wallace</div>
                                        <div className="DropDownItem">Jason Holt</div>
                                        <div className="DropDownItem">Kyle Dempsey</div>
                                        <div className="DropDownItem">Ryan Taylor</div>
                                        <div className="DropDownItem">Cian Bolger</div>
                                        <div className="DropDownItem">Ryan Rydel</div>
                                        <div className="DropDownItem">Ashley Eastham</div>
                                        <div className="DropDownItem">Eddie Clarke</div>
                                        <div className="DropDownItem">Gethin Jones</div>
                                        <div className="DropDownItem">James Husband</div>
                                        <div className="DropDownItem">Nathan Sheron</div>
                                        <div className="DropDownItem">Craig Morgan</div>
                                        <div className="DropDownItem">Lewie Coyle</div>
                                        <div className="DropDownItem">Andy Cook</div>
                                        <div className="DropDownItem">Morgan Ferrier</div>
                                        <div className="DropDownItem">Josh Gordon</div>
                                        <div className="DropDownItem">Zeli Ismail</div>
                                        <div className="DropDownItem">Josh Ginnelly</div>
                                        <div className="DropDownItem">Connor Ronan</div>
                                        <div className="DropDownItem">Kieron Morris</div>
                                        <div className="DropDownItem">Luke Leahy</div>
                                        <div className="DropDownItem">Maziar Kouhyar</div>
                                        <div className="DropDownItem">George Dobson</div>
                                        <div className="DropDownItem">Isaiah Osbourne</div>
                                        <div className="DropDownItem">Liam Kinsella</div>
                                        <div className="DropDownItem">Connor Johnson</div>
                                        <div className="DropDownItem">Jack Fitzwater</div>
                                        <div className="DropDownItem">Kane Wilson</div>
                                        <div className="DropDownItem">Nicky Devlin</div>
                                        <div className="DropDownItem">Russell Martin</div>
                                        <div className="DropDownItem">Jon Guthrie</div>
                                    </div>
                                </div>
                                <div className="CastsDropDown  dropdown">
                                    <div className="CastsDropDownButton"  data-toggle="dropdown" >
                                        <div className="CastsDropDownButton_Participant CastsDropDownButton_ParticipantTruncate">Fleetwood Town 1-0</div>
                                        <div className="CastsDropDownButton_Market">Full Time Correct Score</div>
                                    </div>
                                    <div className="DropDownContainer dropdown-menu">
                                        <div className="DropDownItem selected">Fleetwood Town 1-0</div>
                                        <div className="DropDownItem">Fleetwood Town 2-0</div>
                                        <div className="DropDownItem">Fleetwood Town 2-1</div>
                                        <div className="DropDownItem">Fleetwood Town 3-0</div>
                                        <div className="DropDownItem">Fleetwood Town 3-1</div>
                                        <div className="DropDownItem">Fleetwood Town 3-2</div>
                                        <div className="DropDownItem">Fleetwood Town 4-0</div>
                                        <div className="DropDownItem">Fleetwood Town 4-1</div>
                                        <div className="DropDownItem">Fleetwood Town 4-2</div>
                                        <div className="DropDownItem">Fleetwood Town 4-3</div>
                                        <div className="DropDownItem">Fleetwood Town 5-0</div>
                                        <div className="DropDownItem">Fleetwood Town 5-1</div>
                                        <div className="DropDownItem">Fleetwood Town 5-2</div>
                                        <div className="DropDownItem">Fleetwood Town 5-3</div>
                                        <div className="DropDownItem">Fleetwood Town 6-1</div>
                                        <div className="DropDownItem">Fleetwood Town 6-0</div>
                                        <div className="DropDownItem">Walsall 2-1</div>
                                        <div className="DropDownItem">Walsall 3-1</div>
                                        <div className="DropDownItem">Walsall 3-2</div>
                                        <div className="DropDownItem">Walsall 4-1</div>
                                        <div className="DropDownItem">Walsall 4-2</div>
                                        <div className="DropDownItem">Walsall 4-3</div>
                                        <div className="DropDownItem">Walsall 5-1</div>
                                        <div className="DropDownItem">Walsall 5-2</div>
                                        <div className="DropDownItem">Draw 1-1</div>
                                        <div className="DropDownItem">Draw 2-2</div>
                                        <div className="DropDownItem">Draw 3-3</div>
                                        <div className="DropDownItem">Draw 4-4</div>
                                    </div>
                                </div>
                                <div className="CastsParticipant Participant_General "><span class="CastsParticipant_Name">19.00</span></div>
                            </div>
                            <div className="OthersOnRequest">
                                <div className="OthersOnRequest_Link">Others on Request</div>
                                <div className="OthersOnRequestAlert OthersOnRequestAlert-above ">To make a request <div className="OthersOnRequestAlert_Nib"></div><span className="OthersOnRequestAlert_LoginLink">Log In</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Main_Wincast" aria-expanded="false" aria-controls="collapse_Soccer_International_Main_Wincast">
                            <div className="CouponMarketGroupButton_Title"><span>Wincast</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse show" id="collapse_Soccer_International_Main_Wincast" aria-expanded="true">
                        <div className="MarketGroupContainer">
                            <div className="MarketCastsBase Market Market_General Market_PWidth-100 Market_LastInRow">
                                <div className="CastsDropDown  dropdown">
                                    <div className="CastsDropDownButton"  data-toggle="dropdown" >
                                        <div className="CastsDropDownButton_Participant CastsDropDownButton_ParticipantTruncate">Ched Evans</div>
                                        <div className="CastsDropDownButton_Market">to Score 1st</div>
                                    </div>
                                    <div className="DropDownContainer dropdown-menu">
                                        <div className="DropDownItem selected">Ched Evans</div>
                                        <div className="DropDownItem">Chris Long</div>
                                        <div className="DropDownItem">Conor McAleny</div>
                                        <div className="DropDownItem">Paddy Madden</div>
                                        <div className="DropDownItem">Ashley Hunter</div>
                                        <div className="DropDownItem">Wes Burns</div>
                                        <div className="DropDownItem">Harrison Biggins</div>
                                        <div className="DropDownItem">Ross Wallace</div>
                                        <div className="DropDownItem">Dean Marney</div>
                                        <div className="DropDownItem">James Wallace</div>
                                        <div className="DropDownItem">Jason Holt</div>
                                        <div className="DropDownItem">Kyle Dempsey</div>
                                        <div className="DropDownItem">Ryan Taylor</div>
                                        <div className="DropDownItem">Cian Bolger</div>
                                        <div className="DropDownItem">Ryan Rydel</div>
                                        <div className="DropDownItem">Ashley Eastham</div>
                                        <div className="DropDownItem">Eddie Clarke</div>
                                        <div className="DropDownItem">Gethin Jones</div>
                                        <div className="DropDownItem">James Husband</div>
                                        <div className="DropDownItem">Nathan Sheron</div>
                                        <div className="DropDownItem">Craig Morgan</div>
                                        <div className="DropDownItem">Lewie Coyle</div>
                                        <div className="DropDownItem">Andy Cook</div>
                                        <div className="DropDownItem">Morgan Ferrier</div>
                                        <div className="DropDownItem">Josh Gordon</div>
                                        <div className="DropDownItem">Zeli Ismail</div>
                                        <div className="DropDownItem">Josh Ginnelly</div>
                                        <div className="DropDownItem">Connor Ronan</div>
                                        <div className="DropDownItem">Kieron Morris</div>
                                        <div className="DropDownItem">Luke Leahy</div>
                                        <div className="DropDownItem">Maziar Kouhyar</div>
                                        <div className="DropDownItem">George Dobson</div>
                                        <div className="DropDownItem">Isaiah Osbourne</div>
                                        <div className="DropDownItem">Liam Kinsella</div>
                                        <div className="DropDownItem">Connor Johnson</div>
                                        <div className="DropDownItem">Jack Fitzwater</div>
                                        <div className="DropDownItem">Kane Wilson</div>
                                        <div className="DropDownItem">Nicky Devlin</div>
                                        <div className="DropDownItem">Russell Martin</div>
                                        <div className="DropDownItem">Jon Guthrie</div>
                                    </div>
                                </div>
                                <div className="CastsDropDown  dropdown">
                                    <div className="CastsDropDownButton"  data-toggle="dropdown" >
                                        <div className="CastsDropDownButton_Participant CastsDropDownButton_ParticipantTruncate">Fleetwood Town 1-0</div>
                                        <div className="CastsDropDownButton_Market">Full Time Result</div>
                                    </div>
                                    <div className="DropDownContainer dropdown-menu">
                                        <div className="DropDownItem selected">Fleetwood Town 1-0</div>
                                        <div className="DropDownItem">Fleetwood Town 2-0</div>
                                        <div className="DropDownItem">Fleetwood Town 2-1</div>
                                        <div className="DropDownItem">Fleetwood Town 3-0</div>
                                        <div className="DropDownItem">Fleetwood Town 3-1</div>
                                        <div className="DropDownItem">Fleetwood Town 3-2</div>
                                        <div className="DropDownItem">Fleetwood Town 4-0</div>
                                        <div className="DropDownItem">Fleetwood Town 4-1</div>
                                        <div className="DropDownItem">Fleetwood Town 4-2</div>
                                        <div className="DropDownItem">Fleetwood Town 4-3</div>
                                        <div className="DropDownItem">Fleetwood Town 5-0</div>
                                        <div className="DropDownItem">Fleetwood Town 5-1</div>
                                        <div className="DropDownItem">Fleetwood Town 5-2</div>
                                        <div className="DropDownItem">Fleetwood Town 5-3</div>
                                        <div className="DropDownItem">Fleetwood Town 6-1</div>
                                        <div className="DropDownItem">Fleetwood Town 6-0</div>
                                        <div className="DropDownItem">Walsall 2-1</div>
                                        <div className="DropDownItem">Walsall 3-1</div>
                                        <div className="DropDownItem">Walsall 3-2</div>
                                        <div className="DropDownItem">Walsall 4-1</div>
                                        <div className="DropDownItem">Walsall 4-2</div>
                                        <div className="DropDownItem">Walsall 4-3</div>
                                        <div className="DropDownItem">Walsall 5-1</div>
                                        <div className="DropDownItem">Walsall 5-2</div>
                                        <div className="DropDownItem">Draw 1-1</div>
                                        <div className="DropDownItem">Draw 2-2</div>
                                        <div className="DropDownItem">Draw 3-3</div>
                                        <div className="DropDownItem">Draw 4-4</div>
                                    </div>
                                </div>
                                <div className="CastsParticipant Participant_General "><span class="CastsParticipant_Name">19.00</span></div>
                            </div>
                            <div className="OthersOnRequest">
                                <div className="OthersOnRequest_Link">Others on Request</div>
                                <div className="OthersOnRequestAlert OthersOnRequestAlert-above ">To make a request <div className="OthersOnRequestAlert_Nib"></div><span className="OthersOnRequestAlert_LoginLink">Log In</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Main_Timecast" aria-expanded="false" aria-controls="collapse_Soccer_International_Main_Timecast">
                            <div className="CouponMarketGroupButton_Title"><span>Timecast</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse show" id="collapse_Soccer_International_Main_Timecast" aria-expanded="true">
                        <div className="MarketGroupContainer">
                            <div className="MarketCastsBase Market Market_General Market_PWidth-100 Market_LastInRow">
                                <div className="CastsDropDown  dropdown">
                                    <div className="CastsDropDownButton"  data-toggle="dropdown" >
                                        <div className="CastsDropDownButton_Participant CastsDropDownButton_ParticipantTruncate">Ched Evans</div>
                                        <div className="CastsDropDownButton_Market">to Score 1st</div>
                                    </div>
                                    <div className="DropDownContainer dropdown-menu">
                                        <div className="DropDownItem selected">Ched Evans</div>
                                        <div className="DropDownItem">Chris Long</div>
                                        <div className="DropDownItem">Conor McAleny</div>
                                        <div className="DropDownItem">Paddy Madden</div>
                                        <div className="DropDownItem">Ashley Hunter</div>
                                        <div className="DropDownItem">Wes Burns</div>
                                        <div className="DropDownItem">Harrison Biggins</div>
                                        <div className="DropDownItem">Ross Wallace</div>
                                        <div className="DropDownItem">Dean Marney</div>
                                        <div className="DropDownItem">James Wallace</div>
                                        <div className="DropDownItem">Jason Holt</div>
                                        <div className="DropDownItem">Kyle Dempsey</div>
                                        <div className="DropDownItem">Ryan Taylor</div>
                                        <div className="DropDownItem">Cian Bolger</div>
                                        <div className="DropDownItem">Ryan Rydel</div>
                                        <div className="DropDownItem">Ashley Eastham</div>
                                        <div className="DropDownItem">Eddie Clarke</div>
                                        <div className="DropDownItem">Gethin Jones</div>
                                        <div className="DropDownItem">James Husband</div>
                                        <div className="DropDownItem">Nathan Sheron</div>
                                        <div className="DropDownItem">Craig Morgan</div>
                                        <div className="DropDownItem">Lewie Coyle</div>
                                        <div className="DropDownItem">Andy Cook</div>
                                        <div className="DropDownItem">Morgan Ferrier</div>
                                        <div className="DropDownItem">Josh Gordon</div>
                                        <div className="DropDownItem">Zeli Ismail</div>
                                        <div className="DropDownItem">Josh Ginnelly</div>
                                        <div className="DropDownItem">Connor Ronan</div>
                                        <div className="DropDownItem">Kieron Morris</div>
                                        <div className="DropDownItem">Luke Leahy</div>
                                        <div className="DropDownItem">Maziar Kouhyar</div>
                                        <div className="DropDownItem">George Dobson</div>
                                        <div className="DropDownItem">Isaiah Osbourne</div>
                                        <div className="DropDownItem">Liam Kinsella</div>
                                        <div className="DropDownItem">Connor Johnson</div>
                                        <div className="DropDownItem">Jack Fitzwater</div>
                                        <div className="DropDownItem">Kane Wilson</div>
                                        <div className="DropDownItem">Nicky Devlin</div>
                                        <div className="DropDownItem">Russell Martin</div>
                                        <div className="DropDownItem">Jon Guthrie</div>
                                    </div>
                                </div>
                                <div className="CastsDropDown  dropdown">
                                    <div className="CastsDropDownButton"  data-toggle="dropdown" >
                                        <div className="CastsDropDownButton_Participant CastsDropDownButton_ParticipantTruncate">1-20</div>
                                        <div className="CastsDropDownButton_Market">Time of 1st Goal</div>
                                    </div>
                                    <div className="DropDownContainer dropdown-menu">
                                        <div className="DropDownItem selected">Fleetwood Town 1-0</div>
                                        <div className="DropDownItem">Fleetwood Town 2-0</div>
                                        <div className="DropDownItem">Fleetwood Town 2-1</div>
                                        <div className="DropDownItem">Fleetwood Town 3-0</div>
                                        <div className="DropDownItem">Fleetwood Town 3-1</div>
                                        <div className="DropDownItem">Fleetwood Town 3-2</div>
                                        <div className="DropDownItem">Fleetwood Town 4-0</div>
                                        <div className="DropDownItem">Fleetwood Town 4-1</div>
                                        <div className="DropDownItem">Fleetwood Town 4-2</div>
                                        <div className="DropDownItem">Fleetwood Town 4-3</div>
                                        <div className="DropDownItem">Fleetwood Town 5-0</div>
                                        <div className="DropDownItem">Fleetwood Town 5-1</div>
                                        <div className="DropDownItem">Fleetwood Town 5-2</div>
                                        <div className="DropDownItem">Fleetwood Town 5-3</div>
                                        <div className="DropDownItem">Fleetwood Town 6-1</div>
                                        <div className="DropDownItem">Fleetwood Town 6-0</div>
                                        <div className="DropDownItem">Walsall 2-1</div>
                                        <div className="DropDownItem">Walsall 3-1</div>
                                        <div className="DropDownItem">Walsall 3-2</div>
                                        <div className="DropDownItem">Walsall 4-1</div>
                                        <div className="DropDownItem">Walsall 4-2</div>
                                        <div className="DropDownItem">Walsall 4-3</div>
                                        <div className="DropDownItem">Walsall 5-1</div>
                                        <div className="DropDownItem">Walsall 5-2</div>
                                        <div className="DropDownItem">Draw 1-1</div>
                                        <div className="DropDownItem">Draw 2-2</div>
                                        <div className="DropDownItem">Draw 3-3</div>
                                        <div className="DropDownItem">Draw 4-4</div>
                                    </div>
                                </div>
                                <div className="CastsParticipant Participant_General "><span class="CastsParticipant_Name">19.00</span></div>
                            </div>
                            <div className="OthersOnRequest">
                                <div className="OthersOnRequest_Link">Others on Request</div>
                                <div className="OthersOnRequestAlert OthersOnRequestAlert-above ">To make a request <div className="OthersOnRequestAlert_Nib"></div><span className="OthersOnRequestAlert_LoginLink">Log In</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Main_1st_Half_Scorecast" aria-expanded="false" aria-controls="collapse_Soccer_International_Main_1st_Half_Scorecast">
                            <div className="CouponMarketGroupButton_Title"><span>1st Half Scorecast</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse  show" id="collapse_Soccer_International_Main_1st_Half_Scorecast" aria-expanded="true">
                        <div className="MarketGroupContainer">
                            <div className="MarketCastsBase Market Market_General Market_PWidth-100 Market_LastInRow">
                                <div className="CastsDropDown  dropdown">
                                    <div className="CastsDropDownButton"  data-toggle="dropdown" >
                                        <div className="CastsDropDownButton_Participant CastsDropDownButton_ParticipantTruncate">Ched Evans</div>
                                        <div className="CastsDropDownButton_Market">to Score 1st</div>
                                    </div>
                                    <div className="DropDownContainer dropdown-menu">
                                        <div className="DropDownItem selected">Ched Evans</div>
                                        <div className="DropDownItem">Chris Long</div>
                                        <div className="DropDownItem">Conor McAleny</div>
                                        <div className="DropDownItem">Paddy Madden</div>
                                        <div className="DropDownItem">Ashley Hunter</div>
                                        <div className="DropDownItem">Wes Burns</div>
                                        <div className="DropDownItem">Harrison Biggins</div>
                                        <div className="DropDownItem">Ross Wallace</div>
                                        <div className="DropDownItem">Dean Marney</div>
                                        <div className="DropDownItem">James Wallace</div>
                                        <div className="DropDownItem">Jason Holt</div>
                                        <div className="DropDownItem">Kyle Dempsey</div>
                                        <div className="DropDownItem">Ryan Taylor</div>
                                        <div className="DropDownItem">Cian Bolger</div>
                                        <div className="DropDownItem">Ryan Rydel</div>
                                        <div className="DropDownItem">Ashley Eastham</div>
                                        <div className="DropDownItem">Eddie Clarke</div>
                                        <div className="DropDownItem">Gethin Jones</div>
                                        <div className="DropDownItem">James Husband</div>
                                        <div className="DropDownItem">Nathan Sheron</div>
                                        <div className="DropDownItem">Craig Morgan</div>
                                        <div className="DropDownItem">Lewie Coyle</div>
                                        <div className="DropDownItem">Andy Cook</div>
                                        <div className="DropDownItem">Morgan Ferrier</div>
                                        <div className="DropDownItem">Josh Gordon</div>
                                        <div className="DropDownItem">Zeli Ismail</div>
                                        <div className="DropDownItem">Josh Ginnelly</div>
                                        <div className="DropDownItem">Connor Ronan</div>
                                        <div className="DropDownItem">Kieron Morris</div>
                                        <div className="DropDownItem">Luke Leahy</div>
                                        <div className="DropDownItem">Maziar Kouhyar</div>
                                        <div className="DropDownItem">George Dobson</div>
                                        <div className="DropDownItem">Isaiah Osbourne</div>
                                        <div className="DropDownItem">Liam Kinsella</div>
                                        <div className="DropDownItem">Connor Johnson</div>
                                        <div className="DropDownItem">Jack Fitzwater</div>
                                        <div className="DropDownItem">Kane Wilson</div>
                                        <div className="DropDownItem">Nicky Devlin</div>
                                        <div className="DropDownItem">Russell Martin</div>
                                        <div className="DropDownItem">Jon Guthrie</div>
                                    </div>
                                </div>
                                <div className="CastsDropDown  dropdown">
                                    <div className="CastsDropDownButton"  data-toggle="dropdown" >
                                        <div className="CastsDropDownButton_Participant CastsDropDownButton_ParticipantTruncate">Fleetwood Town 1-0</div>
                                        <div className="CastsDropDownButton_Market">Correct Score</div>
                                    </div>
                                    <div className="DropDownContainer dropdown-menu">
                                        <div className="DropDownItem selected">Fleetwood Town 1-0</div>
                                        <div className="DropDownItem">Fleetwood Town 2-0</div>
                                        <div className="DropDownItem">Fleetwood Town 2-1</div>
                                        <div className="DropDownItem">Fleetwood Town 3-0</div>
                                        <div className="DropDownItem">Fleetwood Town 3-1</div>
                                        <div className="DropDownItem">Fleetwood Town 3-2</div>
                                        <div className="DropDownItem">Fleetwood Town 4-0</div>
                                        <div className="DropDownItem">Fleetwood Town 4-1</div>
                                        <div className="DropDownItem">Fleetwood Town 4-2</div>
                                        <div className="DropDownItem">Fleetwood Town 4-3</div>
                                        <div className="DropDownItem">Fleetwood Town 5-0</div>
                                        <div className="DropDownItem">Fleetwood Town 5-1</div>
                                        <div className="DropDownItem">Fleetwood Town 5-2</div>
                                        <div className="DropDownItem">Fleetwood Town 5-3</div>
                                        <div className="DropDownItem">Fleetwood Town 6-1</div>
                                        <div className="DropDownItem">Fleetwood Town 6-0</div>
                                        <div className="DropDownItem">Walsall 2-1</div>
                                        <div className="DropDownItem">Walsall 3-1</div>
                                        <div className="DropDownItem">Walsall 3-2</div>
                                        <div className="DropDownItem">Walsall 4-1</div>
                                        <div className="DropDownItem">Walsall 4-2</div>
                                        <div className="DropDownItem">Walsall 4-3</div>
                                        <div className="DropDownItem">Walsall 5-1</div>
                                        <div className="DropDownItem">Walsall 5-2</div>
                                        <div className="DropDownItem">Draw 1-1</div>
                                        <div className="DropDownItem">Draw 2-2</div>
                                        <div className="DropDownItem">Draw 3-3</div>
                                        <div className="DropDownItem">Draw 4-4</div>
                                    </div>
                                </div>
                                <div className="CastsParticipant Participant_General "><span class="CastsParticipant_Name">19.00</span></div>
                            </div>
                            <div className="OthersOnRequest">
                                <div className="OthersOnRequest_Link">Others on Request</div>
                                <div className="OthersOnRequestAlert OthersOnRequestAlert-above ">To make a request <div className="OthersOnRequestAlert_Nib"></div><span className="OthersOnRequestAlert_LoginLink">Log In</span></div>
                            </div>
                        </div>
                    </div>
                </div>
*/}

            </section>
        )

    }
}

export default Main;
