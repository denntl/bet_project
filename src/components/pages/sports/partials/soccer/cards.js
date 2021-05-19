import React from 'react';
import ManagMatch from "../../../in_play/partials/managMatch";
import DefaultGroup from "./defaultGroup";



class Cards extends DefaultGroup {
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
            <section id="Cards-panel" className="" role="tabpanel">
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
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Cards_Player_to_be_booked" aria-expanded="false" aria-controls="collapse_Soccer_International_Cards_Player_to_be_booked">
                            <span>Player to be booked</span>
                        </div>
                    </div>

                    <div className="MarketGroup_Wrapper collapse" id="collapse_Soccer_International_Cards_Player_to_be_booked" aria-expanded="true">
                        <div className="MarketGroupContainer">
                            <div className="Market Market_General Market_PWidth-100">
                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">James Wallace</span><span className="Participant_Odds">2.50</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Dean Marney</span><span className="Participant_Odds">3.00</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Ryan Taylor</span><span className="Participant_Odds">3.00</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Cian Bolger</span><span className="Participant_Odds">3.00</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">George Dobson</span><span className="Participant_Odds">3.00</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Kane Wilson</span><span className="Participant_Odds">3.25</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Ashley Hunter</span><span className="Participant_Odds">3.25</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">James Husband</span><span className="Participant_Odds">3.75</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Ross Wallace</span><span className="Participant_Odds">3.75</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Connor Johnson</span><span className="Participant_Odds">4.00</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Josh Gordon</span><span className="Participant_Odds">4.00</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Nathan Sheron</span><span className="Participant_Odds">4.33</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Isaiah Osbourne</span><span className="Participant_Odds">4.50</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Ched Evans</span><span className="Participant_Odds">4.50</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Craig Morgan</span><span className="Participant_Odds">4.50</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Luke Leahy</span><span className="Participant_Odds">4.50</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Paddy Madden</span><span className="Participant_Odds">4.50</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Chris Long</span><span className="Participant_Odds">4.50</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Lewie Coyle</span><span className="Participant_Odds">4.50</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Jack Fitzwater</span><span className="Participant_Odds">5.00</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Ashley Eastham</span><span className="Participant_Odds">5.00</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Josh Ginnelly</span><span className="Participant_Odds">5.00</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Nicky Devlin</span><span className="Participant_Odds">5.00</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Kyle Dempsey</span><span className="Participant_Odds">5.00</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Zeli Ismail</span><span className="Participant_Odds">5.00</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Andy Cook</span><span className="Participant_Odds">5.50</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Harrison Biggins</span><span className="Participant_Odds">5.50</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Jason Holt</span><span className="Participant_Odds">5.50</span>
                                </div>

                                <div className="ParticipantDummy Participant_General Market_CN-2"></div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="MarketGroup MarketGrid_PairL">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Cards_Asian_Cards" aria-expanded="false" aria-controls="collapse_Soccer_International_Cards_Asian_Cards">
                            <span>Asian Total Cards</span>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse show" id="collapse_Soccer_International_Cards_Asian_Cards" aria-expanded="true">
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

                <div className="MarketGroup MarketGrid_PairR">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Cards_Asian_Cards" aria-expanded="false" aria-controls="collapse_Soccer_International_Cards_Asian_Cards">
                            <span>Asian Handicap Cards</span>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse show" id="collapse_Soccer_International_Cards_Asian_Cards" aria-expanded="true">
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

                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Cards_A_Red_Card_in_the_Match" aria-expanded="false" aria-controls="collapse_Soccer_International_Cards_A_Red_Card_in_the_Match">
                            <div className="CouponMarketGroupButton_Title"><span>A Red Card in the Match</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse " id="collapse_Soccer_International_Cards_A_Red_Card_in_the_Match" aria-expanded="false">
                        <div className="Market Market_General Market_PWidth-100">
                            <div className="Participant Participant_General Market_CN-2">
                                <span className="Participant_Name">Yes</span><span className="Participant_Odds">4.50</span>
                            </div>

                            <div className="Participant Participant_General Market_CN-2">
                                <span className="Participant_Name">No</span><span className="Participant_Odds">1.18</span>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Cards_1st_Player_Booked" aria-expanded="false" aria-controls="collapse_Soccer_International_Cards_1st_Player_Booked">
                            <div className="CouponMarketGroupButton_Title"><span>1st Player Booked</span></div>
                        </div>
                    </div>
                    <div className="MarketGroup_Wrapper collapse " id="collapse_Soccer_International_Cards_1st_Player_Booked" aria-expanded="false">
                        <div className="Market Market_General Market_PWidth-100">
                            <div className="Participant Participant_General Market_CN-4">
                                <span className="Participant_Name">James Wallace</span><span className="Participant_Odds">8.00</span>
                            </div>

                            <div className="Participant Participant_General Market_CN-4">
                                <span className="Participant_Name">George Dobson</span><span className="Participant_Odds">9.00</span>
                            </div>

                            <div className="Participant Participant_General Market_CN-4">
                                <span className="Participant_Name">Dean Marney</span><span className="Participant_Odds">10.00</span>
                            </div>

                            <div className="Participant Participant_General Market_CN-4">
                                <span className="Participant_Name">Ryan Taylor</span><span className="Participant_Odds">10.00</span>
                            </div>

                            <div className="Participant Participant_General Market_CN-4">
                                <span className="Participant_Name">Cian Bolger</span><span className="Participant_Odds">10.00</span>
                            </div>

                            <div className="Participant Participant_General Market_CN-4">
                                <span className="Participant_Name">Kane Wilson</span><span className="Participant_Odds">10.00</span>
                            </div>

                            <div className="Participant Participant_General Market_CN-4">
                                <span className="Participant_Name">Ashley Hunter</span><span className="Participant_Odds">11.00</span>
                            </div>

                            <div className="Participant Participant_General Market_CN-4">
                                <span className="Participant_Name">Connor Johnson</span><span className="Participant_Odds">13.00</span>
                            </div>

                            <div className="Participant Participant_General Market_CN-4">
                                <span className="Participant_Name">Ross Wallace</span><span className="Participant_Odds">13.00</span>
                            </div>

                            <div className="Participant Participant_General Market_CN-4">
                                <span className="Participant_Name">George Dobson</span><span className="Participant_Odds">9.00</span>
                            </div>

                            <div className="Participant Participant_General Market_CN-4">
                                <span className="Participant_Name">Dean Marney</span><span className="Participant_Odds">10.00</span>
                            </div>

                            <div className="Participant Participant_General Market_CN-4">
                                <span className="Participant_Name">Josh Gordon</span><span className="Participant_Odds">13.00</span>
                            </div>

                            <div className="Participant Participant_General Market_CN-4">
                                <span className="Participant_Name">James Husband</span><span className="Participant_Odds">13.00</span>
                            </div>

                            <div className="Participant Participant_General Market_CN-4">
                                <span className="Participant_Name">Nathan Sheron</span><span className="Participant_Odds">15.00</span>
                            </div>

                            <div className="Participant Participant_General Market_CN-4">
                                <span className="Participant_Name">Luke Leahy</span><span className="Participant_Odds">15.00</span>
                            </div>

                            <div className="Participant Participant_General Market_CN-4">
                                <span className="Participant_Name">Isaiah Osbourne</span><span className="Participant_Odds">15.00</span>
                            </div>

                            <div className="Participant Participant_General Market_CN-4">
                                <span className="Participant_Name">Lewie Coyle</span><span className="Participant_Odds">17.00</span>
                            </div>

                            <div className="Participant Participant_General Market_CN-4">
                                <span className="Participant_Name">Craig Morgan</span><span className="Participant_Odds">17.00</span>
                            </div>

                            <div className="Participant Participant_General Market_CN-4">
                                <span className="Participant_Name">Liam Roberts</span><span className="Participant_Odds">67.00</span>
                            </div>

                            <div className="Participant Participant_General Market_CN-4">
                                <span className="Participant_Name">No Bookings</span><span className="Participant_Odds">13.00</span>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="MarketGroup CouponMarketGroup">
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Soccer_International_Cards_Player_to_be_Sent_Off" aria-expanded="false" aria-controls="collapse_Soccer_International_Cards_Player_to_be_Sent_Off">
                            <span>Player to be Sent Off</span>
                        </div>
                    </div>

                    <div className="MarketGroup_Wrapper collapse" id="collapse_Soccer_International_Cards_Player_to_be_Sent_Off" aria-expanded="false">
                        <div className="MarketGroupContainer">
                            <div className="Market Market_General Market_PWidth-100">
                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">James Wallace</span><span className="Participant_Odds">2.50</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Dean Marney</span><span className="Participant_Odds">3.00</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Ryan Taylor</span><span className="Participant_Odds">3.00</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Cian Bolger</span><span className="Participant_Odds">3.00</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">George Dobson</span><span className="Participant_Odds">3.00</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Kane Wilson</span><span className="Participant_Odds">3.25</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Ashley Hunter</span><span className="Participant_Odds">3.25</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">James Husband</span><span className="Participant_Odds">3.75</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Ross Wallace</span><span className="Participant_Odds">3.75</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Josh Gordon</span><span className="Participant_Odds">4.00</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Nathan Sheron</span><span className="Participant_Odds">4.33</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Isaiah Osbourne</span><span className="Participant_Odds">4.50</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Ched Evans</span><span className="Participant_Odds">4.50</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Craig Morgan</span><span className="Participant_Odds">4.50</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Luke Leahy</span><span className="Participant_Odds">4.50</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Paddy Madden</span><span className="Participant_Odds">4.50</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Chris Long</span><span className="Participant_Odds">4.50</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Lewie Coyle</span><span className="Participant_Odds">4.50</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Jack Fitzwater</span><span className="Participant_Odds">5.00</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Ashley Eastham</span><span className="Participant_Odds">5.00</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Josh Ginnelly</span><span className="Participant_Odds">5.00</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Nicky Devlin</span><span className="Participant_Odds">5.00</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Kyle Dempsey</span><span className="Participant_Odds">5.00</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Zeli Ismail</span><span className="Participant_Odds">5.00</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Andy Cook</span><span className="Participant_Odds">5.50</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Harrison Biggins</span><span className="Participant_Odds">5.50</span>
                                </div>

                                <div className="Participant Participant_General Market_CN-2">
                                    <span className="Participant_Name">Jason Holt</span><span className="Participant_Odds">5.50</span>
                                </div>

                                <div className="ParticipantDummy Participant_General Market_CN-2"></div>
                            </div>

                        </div>
                    </div>
                </div>
*/}
            </section>
        )

    }
}

export default Cards;
