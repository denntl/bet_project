import React from 'react';
import ManagMatch from "../../../in_play/partials/managMatch";
import DefaultGroup from "./defaultGroup";

// const asianMarkets = {
//     //2: "Under/Over",
//     3: "Asian Handicap",
//     64: "Asian Handicap 1st Period"
// }

class AsianLines extends DefaultGroup {
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
            <section id="Asian-Lines-panel" className="" role="tabpanel">
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
                {/* <div className="MarketGroup CouponMarketGroup MarketGrid_PairL">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton show" data-toggle="collapse" data-target="#collapse_Soccer_International_Asian_Lines_Asian_Handicap_Goal_Line" aria-expanded="false" aria-controls="collapse_Soccer_International_Asian_Lines_Asian_Handicap_Goal_Line">
                            <div className="CouponMarketGroupButton_Title"><span>Asian Handicap</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse show" id="collapse_Soccer_International_Asian_Lines_Asian_Handicap_Goal_Line" aria-expanded="true">
                        <div className="MarketGroupContainer">
                            <div className="Market Market_General Market_PWidth-50">
                                <div className="MarketColumnHeader">
                                    Fleetwood Town
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_BlankName">
                                    <span className="ParticipantCentered_Handicap">0.0, -0.5</span><span className="ParticipantCentered_Odds">1.800</span>
                                </div>
                            </div>

                            <div className="Market Market_General Market_PWidth-50 Market_LastInRow">
                                <div className="MarketColumnHeader">
                                    Walsall
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_BlankName">
                                    <span className="ParticipantCentered_Handicap">0.0, +0.5</span><span className="ParticipantCentered_Odds">2.050</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup MarketGrid_PairR">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Asian_Lines_Asian_Handicap_Goal_Line" aria-expanded="false" aria-controls="collapse_Soccer_International_Asian_Lines_Asian_Handicap_Goal_Line">
                            <div className="CouponMarketGroupButton_Title"><span>Goal Line</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse show" id="collapse_Soccer_International_Asian_Lines_Asian_Handicap_Goal_Line" aria-expanded="true">
                        <div className="MarketGroupContainer MarketGroupContainer_HasLabels">
                            <div className="MarketLabel Market_General Market_HasLabels Market_PWidth-25">
                                <div className="MarketColumnHeader">
                                    &nbsp;
                                </div>

                                <div className="ParticipantRowValue CouponParticipantRowValueReduceRowHeight">
                                    <span className="ParticipantRowValue_Name">2.5</span>
                                </div>
                            </div>

                            <div className="MarketValuesExplicit2 Market_General Market_PWidth-37-5">
                                <div className="MarketColumnHeader">
                                    Over
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">2.150</span>
                                </div>
                            </div>

                            <div className="MarketValuesExplicit2 Market_General Market_PWidth-37-5 Market_LastInRow">
                                <div className="MarketColumnHeader">
                                    Under
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">1.725</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup MarketGrid_PairL">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Asian_Lines_Asian_Alternative_Asian_Handicap_Alternative_Goal_Line" aria-expanded="false" aria-controls="collapse_Soccer_International_Asian_Lines_Asian_Alternative_Asian_Handicap_Alternative_Goal_Line">
                            <div className="CouponMarketGroupButton_Title"><span>Alternative Asian Handicap</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse" id="collapse_Soccer_International_Asian_Lines_Asian_Alternative_Asian_Handicap_Alternative_Goal_Line" aria-expanded="true">
                        <div className="MarketGroupContainer">
                            <div className="Market2 Market_General Market_PWidth-50">
                                <div className="MarketColumnHeader">
                                    Fleetwood Town
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_BlankName">
                                    <span className="ParticipantCentered_Handicap">-1.5, -2.0</span><span className="ParticipantCentered_Odds">5.250</span>
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_BlankName">
                                    <span className="ParticipantCentered_Handicap">-1.5</span><span className="ParticipantCentered_Odds">3.900</span>
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_BlankName">
                                    <span className="ParticipantCentered_Handicap">-1.0, -1.5</span><span className="ParticipantCentered_Odds">3.550</span>
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_BlankName">
                                    <span className="ParticipantCentered_Handicap">-1.0</span><span className="ParticipantCentered_Odds">3.100</span>
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_BlankName">
                                    <span className="ParticipantCentered_Handicap">-0.5, -1.0</span><span className="ParticipantCentered_Odds">2.375</span>
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_BlankName">
                                    <span className="ParticipantCentered_Handicap">-0.5</span><span className="ParticipantCentered_Odds">2.050</span>
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_BlankName">
                                    <span className="ParticipantCentered_Handicap">0.0</span><span className="ParticipantCentered_Odds">1.500</span>
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_BlankName">
                                    <span className="ParticipantCentered_Handicap">0.0, +0.5</span><span className="ParticipantCentered_Odds">1.375</span>
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_BlankName">
                                    <span className="ParticipantCentered_Handicap">+0.5</span><span className="ParticipantCentered_Odds">1.300</span>
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_BlankName">
                                    <span className="ParticipantCentered_Handicap">+0.5, +1.0</span><span className="ParticipantCentered_Odds">1.200</span>
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_BlankName">
                                    <span className="ParticipantCentered_Handicap">+1.0</span><span className="ParticipantCentered_Odds">1.100</span>
                                </div>
                            </div>

                            <div className="Market2 Market_General Market_PWidth-50 Market_LastInRow">
                                <div className="MarketColumnHeader">
                                    Walsall
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_BlankName">
                                    <span className="ParticipantCentered_Handicap">+1.5, +2.0</span><span className="ParticipantCentered_Odds">1.160</span>
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_BlankName">
                                    <span className="ParticipantCentered_Handicap">+1.5</span><span className="ParticipantCentered_Odds">1.240</span>
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_BlankName">
                                    <span className="ParticipantCentered_Handicap">+1.0, +1.5</span><span className="ParticipantCentered_Odds">1.275</span>
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_BlankName">
                                    <span className="ParticipantCentered_Handicap">+1.0</span><span className="ParticipantCentered_Odds">1.350</span>
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_BlankName">
                                    <span className="ParticipantCentered_Handicap">+0.5, +1.0</span><span className="ParticipantCentered_Odds">1.550</span>
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_BlankName">
                                    <span className="ParticipantCentered_Handicap">+0.5</span><span className="ParticipantCentered_Odds">1.750</span>
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_BlankName">
                                    <span className="ParticipantCentered_Handicap">0.0</span><span className="ParticipantCentered_Odds">2.500</span>
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_BlankName">
                                    <span className="ParticipantCentered_Handicap">0.0, -0.5</span><span className="ParticipantCentered_Odds">3.000</span>
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_BlankName">
                                    <span className="ParticipantCentered_Handicap">-0.5</span><span className="ParticipantCentered_Odds">3.450</span>
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_BlankName">
                                    <span className="ParticipantCentered_Handicap">-0.5, -1.0</span><span className="ParticipantCentered_Odds">4.400</span>
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_BlankName">
                                    <span className="ParticipantCentered_Handicap">-1.0</span><span className="ParticipantCentered_Odds">7.000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup MarketGrid_PairR">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Asian_Lines_Asian_Alternative_Asian_Handicap_Alternative_Goal_Line" aria-expanded="false" aria-controls="collapse_Soccer_International_Asian_Lines_Asian_Alternative_Asian_Handicap_Alternative_Goal_Line">
                            <div className="CouponMarketGroupButton_Title"><span>Alternative Goal Line</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse " id="collapse_Soccer_International_Asian_Lines_Asian_Alternative_Asian_Handicap_Alternative_Goal_Line" aria-expanded="true">
                        <div className="MarketGroupContainer MarketGroupContainer_HasLabels">
                            <div className="MarketLabel Market_General Market_HasLabels Market_PWidth-25">
                                <div className="MarketColumnHeader">
                                    &nbsp;
                                </div>

                                <div className="ParticipantRowValue CouponParticipantRowValueReduceRowHeight">
                                    <span className="ParticipantRowValue_Name">1.0</span>
                                </div>

                                <div className="ParticipantRowValue CouponParticipantRowValueReduceRowHeight">
                                    <span className="ParticipantRowValue_Name">1.0, 1.5</span>
                                </div>

                                <div className="ParticipantRowValue CouponParticipantRowValueReduceRowHeight">
                                    <span className="ParticipantRowValue_Name">1.5</span>
                                </div>

                                <div className="ParticipantRowValue CouponParticipantRowValueReduceRowHeight">
                                    <span className="ParticipantRowValue_Name">1.5, 2.0</span>
                                </div>

                                <div className="ParticipantRowValue CouponParticipantRowValueReduceRowHeight">
                                    <span className="ParticipantRowValue_Name">2.0</span>
                                </div>

                                <div className="ParticipantRowValue CouponParticipantRowValueReduceRowHeight">
                                    <span className="ParticipantRowValue_Name">2.0, 2.5</span>
                                </div>

                                <div className="ParticipantRowValue CouponParticipantRowValueReduceRowHeight">
                                    <span className="ParticipantRowValue_Name">2.5, 3.0</span>
                                </div>

                                <div className="ParticipantRowValue CouponParticipantRowValueReduceRowHeight">
                                    <span className="ParticipantRowValue_Name">3.0</span>
                                </div>

                                <div className="ParticipantRowValue CouponParticipantRowValueReduceRowHeight">
                                    <span className="ParticipantRowValue_Name">3.0, 3.5</span>
                                </div>

                                <div className="ParticipantRowValue CouponParticipantRowValueReduceRowHeight">
                                    <span className="ParticipantRowValue_Name">3.5</span>
                                </div>

                                <div className="ParticipantRowValue CouponParticipantRowValueReduceRowHeight">
                                    <span className="ParticipantRowValue_Name">3.5, 4.0</span>
                                </div>

                                <div className="ParticipantRowValue CouponParticipantRowValueReduceRowHeight">
                                    <span className="ParticipantRowValue_Name">4.0</span>
                                </div>
                            </div>

                            <div className="MarketValuesExplicit2 Market_General Market_PWidth-37-5">
                                <div className="MarketColumnHeader">
                                    Over
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">1.100</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">1.230</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">1.350</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">1.450</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">1.575</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">1.850</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">2.425</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">3.100</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">3.450</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">3.700</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">4.650</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">7.000</span>
                                </div>
                            </div>

                            <div className="MarketValuesExplicit2 Market_General Market_PWidth-37-5 Market_LastInRow">
                                <div className="MarketColumnHeader">
                                    Under
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">7.000</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">4.000</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">3.100</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">2.675</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">2.350</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">1.950</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">1.525</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">1.350</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">1.300</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">1.260</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">1.180</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">1.100</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
*/}
                {/*<div className="MarketGroup CouponMarketGroup MarketGrid_PairL">*/}
                    {/*<div className="MarketGroupButtonWrapper">*/}
                        {/*<div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Asian_Lines_1st_Half_Asian_Handicap_Goal_Line" aria-expanded="false" aria-controls="collapse_Soccer_International_Asian_Lines_1st_Half_Asian_Handicap_Goal_Line">*/}
                            {/*<div className="CouponMarketGroupButton_Title"><span>1st Half Asian Handicap</span></div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className="MarketGroup_Wrapper collapse show" id="collapse_Soccer_International_Asian_Lines_1st_Half_Asian_Handicap_Goal_Line" aria-expanded="true">*/}
                        {/*<div className="MarketGroupContainer">*/}
                            {/*<div className="Market Market_General Market_PWidth-50">*/}
                                {/*<div className="MarketColumnHeader">*/}
                                    {/*Fleetwood Town*/}
                                {/*</div>*/}

                                {/*<div className="ParticipantCentered Participant_General ParticipantCentered_BlankName">*/}
                                    {/*<span className="ParticipantCentered_Handicap">0.0, -0.5</span><span className="ParticipantCentered_Odds">2.200</span>*/}
                                {/*</div>*/}
                            {/*</div>*/}

                            {/*<div className="Market Market_General Market_PWidth-50 Market_LastInRow">*/}
                                {/*<div className="MarketColumnHeader">*/}
                                    {/*Walsall*/}
                                {/*</div>*/}

                                {/*<div className="ParticipantCentered Participant_General ParticipantCentered_BlankName">*/}
                                    {/*<span className="ParticipantCentered_Handicap">0.0, +0.5</span><span className="ParticipantCentered_Odds">1.650</span>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}

                    {/*</div>*/}
                {/*</div>*/}
                {/*
                <div className="MarketGroup CouponMarketGroup MarketGrid_PairR">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Asian_Lines_1st_Half_Asian_Handicap_Goal_Line" aria-expanded="false" aria-controls="collapse_Soccer_International_Asian_Lines_1st_Half_Asian_Handicap_Goal_Line">
                            <div className="CouponMarketGroupButton_Title"><span>1st Half Goal Line</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse show" id="collapse_Soccer_International_Asian_Lines_1st_Half_Asian_Handicap_Goal_Line" aria-expanded="true">
                        <div className="MarketGroupContainer MarketGroupContainer_HasLabels">
                            <div className="MarketLabel Market_General Market_HasLabels Market_PWidth-25">
                                <div className="MarketColumnHeader">
                                    &nbsp;
                                </div>

                                <div className="ParticipantRowValue CouponParticipantRowValueReduceRowHeight">
                                    <span className="ParticipantRowValue_Name">1.0</span>
                                </div>
                            </div>

                            <div className="MarketValuesExplicit2 Market_General Market_PWidth-37-5">
                                <div className="MarketColumnHeader">
                                    Over
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">2.075</span>
                                </div>
                            </div>

                            <div className="MarketValuesExplicit2 Market_General Market_PWidth-37-5 Market_LastInRow">
                                <div className="MarketColumnHeader">
                                    Under
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">1.725</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup MarketGrid_PairL">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Asian_Lines_Alternative_1st_Half_Asian_Handicap_Goal_Line" aria-expanded="false" aria-controls="collapse_Soccer_International_Asian_Lines_Alternative_1st_Half_Asian_Handicap_Goal_Line">
                            <div className="CouponMarketGroupButton_Title"><span>Alternative 1st Half Asian Handicap</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse" id="collapse_Soccer_International_Asian_Lines_Alternative_1st_Half_Asian_Handicap_Goal_Line" aria-expanded="true">
                        <div className="MarketGroupContainer">
                            <div className="Market2 Market_General Market_PWidth-50">
                                <div className="MarketColumnHeader">
                                    Fleetwood Town
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_BlankName">
                                    <span className="ParticipantCentered_Handicap">-0.5, -1.0</span><span className="ParticipantCentered_Odds">3.700</span>
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_BlankName">
                                    <span className="ParticipantCentered_Handicap">-0.5</span><span className="ParticipantCentered_Odds">2.750</span>
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_BlankName">
                                    <span className="ParticipantCentered_Handicap">0.0</span><span className="ParticipantCentered_Odds">1.600</span>
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_BlankName">
                                    <span className="ParticipantCentered_Handicap">0.0, +0.5</span><span className="ParticipantCentered_Odds">1.350</span>
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_BlankName">
                                    <span className="ParticipantCentered_Handicap">+0.5</span><span className="ParticipantCentered_Odds">1.230</span>
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_BlankName">
                                    <span className="ParticipantCentered_Handicap">+0.5, +1.0</span><span className="ParticipantCentered_Odds">1.130</span>
                                </div>
                            </div>

                            <div className="Market2 Market_General Market_PWidth-50 Market_LastInRow">
                                <div className="MarketColumnHeader">
                                    Walsall
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_BlankName">
                                    <span className="ParticipantCentered_Handicap">+0.5, +1.0</span><span className="ParticipantCentered_Odds">1.260</span>
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_BlankName">
                                    <span className="ParticipantCentered_Handicap">+0.5</span><span className="ParticipantCentered_Odds">1.425</span>
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_BlankName">
                                    <span className="ParticipantCentered_Handicap">0.0</span><span className="ParticipantCentered_Odds">2.300</span>
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_BlankName">
                                    <span className="ParticipantCentered_Handicap">0.0, -0.5</span><span className="ParticipantCentered_Odds">3.100</span>
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_BlankName">
                                    <span className="ParticipantCentered_Handicap">-0.5</span><span className="ParticipantCentered_Odds">4.000</span>
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_BlankName">
                                    <span className="ParticipantCentered_Handicap">-0.5, -1.0</span><span className="ParticipantCentered_Odds">5.900</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup MarketGrid_PairR">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Asian_Lines_Alternative_1st_Half_Asian_Handicap_Goal_Line" aria-expanded="false" aria-controls="collapse_Soccer_International_Asian_Lines_Alternative_1st_Half_Asian_Handicap_Goal_Line">
                            <div className="CouponMarketGroupButton_Title"><span>Alternative 1st Half Goal Line</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse" id="collapse_Soccer_International_Asian_Lines_Alternative_1st_Half_Asian_Handicap_Goal_Line" aria-expanded="true">
                        <div className="MarketGroupContainer MarketGroupContainer_HasLabels">
                            <div className="MarketLabel Market_General Market_HasLabels Market_PWidth-25">
                                <div className="MarketColumnHeader">
                                    &nbsp;
                                </div>

                                <div className="ParticipantRowValue CouponParticipantRowValueReduceRowHeight">
                                    <span className="ParticipantRowValue_Name">0.5, 1.0</span>
                                </div>

                                <div className="ParticipantRowValue CouponParticipantRowValueReduceRowHeight">
                                    <span className="ParticipantRowValue_Name">1.0, 1.5</span>
                                </div>

                                <div className="ParticipantRowValue CouponParticipantRowValueReduceRowHeight">
                                    <span className="ParticipantRowValue_Name">1.5</span>
                                </div>

                                <div className="ParticipantRowValue CouponParticipantRowValueReduceRowHeight">
                                    <span className="ParticipantRowValue_Name">1.5, 2.0</span>
                                </div>
                            </div>

                            <div className="MarketValuesExplicit2 Market_General Market_PWidth-37-5">
                                <div className="MarketColumnHeader">
                                    Over
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">1.650</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">2.600</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">3.100</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">4.150</span>
                                </div>
                            </div>

                            <div className="MarketValuesExplicit2 Market_General Market_PWidth-37-5 Market_LastInRow">
                                <div className="MarketColumnHeader">
                                    Under
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">2.200</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">1.475</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">1.350</span>
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">1.220</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup MarketGrid_PairL">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Asian_Lines_Asian_Total_Handicap_Corners" aria-expanded="false" aria-controls="collapse_Soccer_International_Asian_Lines_Asian_Total_Handicap_Corners">
                            <div className="CouponMarketGroupButton_Title"><span>Asian Total Corners</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse show" id="collapse_Soccer_International_Asian_Lines_Asian_Total_Handicap_Corners" aria-expanded="true">
                        <div className="MarketGroupContainer MarketGroupContainer_HasLabels">
                            <div className="MarketLabel Market_General Market_HasLabels Market_PWidth-25">
                                <div className="MarketColumnHeader">
                                    &nbsp;
                                </div>

                                <div className="ParticipantRowValue CouponParticipantRowValueReduceRowHeight">
                                    <span className="ParticipantRowValue_Name">10.5</span>
                                </div>
                            </div>

                            <div className="MarketValuesExplicit2 Market_General Market_PWidth-37-5">
                                <div className="MarketColumnHeader">
                                    Over
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">2.025</span>
                                </div>
                            </div>

                            <div className="MarketValuesExplicit2 Market_General Market_PWidth-37-5 Market_LastInRow">
                                <div className="MarketColumnHeader">
                                    Under
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">1.775</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup MarketGrid_PairR">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Asian_Lines_Asian_Total_Handicap_Corners" aria-expanded="false" aria-controls="collapse_Soccer_International_Asian_Lines_Asian_Total_Handicap_Corners">
                            <div className="CouponMarketGroupButton_Title"><span>Asian Handicap Corners</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse show" id="collapse_Soccer_International_Asian_Lines_Asian_Total_Handicap_Corners" aria-expanded="true">
                        <div className="MarketGroupContainer">
                            <div className="Market Market_General Market_PWidth-50">
                                <div className="MarketColumnHeader">
                                    Fleetwood Town
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_BlankName">
                                    <span className="ParticipantCentered_Handicap">-1.5</span><span className="ParticipantCentered_Odds">2.000</span>
                                </div>
                            </div>

                            <div className="Market Market_General Market_PWidth-50 Market_LastInRow">
                                <div className="MarketColumnHeader">
                                    Walsall
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_BlankName">
                                    <span className="ParticipantCentered_Handicap">+1.5</span><span className="ParticipantCentered_Odds">1.800</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Asian_Lines_1st_Half_Asian_Corners" aria-expanded="false" aria-controls="collapse_Soccer_International_Asian_Lines_1st_Half_Asian_Corners">
                            <div className="CouponMarketGroupButton_Title"><span>1st Half Asian Corners</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse show" id="collapse_Soccer_International_Asian_Lines_1st_Half_Asian_Corners" aria-expanded="true">
                        <div className="MarketGroupContainer MarketGroupContainer_HasLabels">
                            <div className="MarketLabel Market_General Market_HasLabels Market_PWidth-25">
                                <div className="MarketColumnHeader">
                                    &nbsp;
                                </div>

                                <div className="ParticipantRowValue CouponParticipantRowValueReduceRowHeight">
                                    <span className="ParticipantRowValue_Name">5</span>
                                </div>
                            </div>

                            <div className="MarketValuesExplicit2 Market_General Market_PWidth-37-5">
                                <div className="MarketColumnHeader">
                                    Over
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">2.050</span>
                                </div>
                            </div>

                            <div className="MarketValuesExplicit2 Market_General Market_PWidth-37-5 Market_LastInRow">
                                <div className="MarketColumnHeader">
                                    Under
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">1.750</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup MarketGrid_PairL">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Asian_Lines_Asian_Total_Handicap_Cards" aria-expanded="false" aria-controls="collapse_Soccer_International_Asian_Lines_Asian_Total_Handicap_Cards">
                            <div className="CouponMarketGroupButton_Title"><span>Asian Total Cards</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse show" id="collapse_Soccer_International_Asian_Lines_Asian_Total_Handicap_Cards" aria-expanded="true">
                        <div className="MarketGroupContainer MarketGroupContainer_HasLabels">
                            <div className="MarketLabel Market_General Market_HasLabels Market_PWidth-25">
                                <div className="MarketColumnHeader">
                                    &nbsp;
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
                                    <span className="ParticipantOddsOnly_Odds">1.850</span>
                                </div>
                            </div>

                            <div className="MarketValuesExplicit2 Market_General Market_PWidth-37-5 Market_LastInRow">
                                <div className="MarketColumnHeader">
                                    Under
                                </div>

                                <div className="ParticipantOddsOnly Participant_General">
                                    <span className="ParticipantOddsOnly_Odds">1.950</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup MarketGrid_PairR">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Asian_Lines_Asian_Total_Handicap_Cards" aria-expanded="false" aria-controls="collapse_Soccer_International_Asian_Lines_Asian_Total_Handicap_Cards">
                            <div className="CouponMarketGroupButton_Title"><span>Asian Handicap Cards</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse show" id="collapse_Soccer_International_Asian_Lines_Asian_Total_Handicap_Cards" aria-expanded="true">
                        <div className="MarketGroupContainer">
                            <div className="Market Market_General Market_PWidth-50">
                                <div className="MarketColumnHeader">
                                    Fleetwood Town
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_BlankName">
                                    <span className="ParticipantCentered_Handicap">+0.5</span><span className="ParticipantCentered_Odds">1.850</span>
                                </div>
                            </div>

                            <div className="Market Market_General Market_PWidth-50 Market_LastInRow">
                                <div className="MarketColumnHeader">
                                    Walsall
                                </div>

                                <div className="ParticipantCentered Participant_General ParticipantCentered_BlankName">
                                    <span className="ParticipantCentered_Handicap">-0.5</span><span className="ParticipantCentered_Odds">1.950</span>
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

export default AsianLines;
