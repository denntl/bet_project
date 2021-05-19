import React from 'react';
import moment from "moment/moment";
import ManagMatch from "../../../../pages/in_play/partials/managMatch";
import {NavLink} from "react-router-dom";



class Matches extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentmarketName: this.props.currentmarketName,
            dropDown:false,
            allMarkets: this.props.allMarkets,
            currentEvents: this.props.currentEvents,
            currentMarketId: this.props.currentMarketId,
            sportId: this.props.sportId
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            currentmarketName: nextProps.currentmarketName,
            allMarkets: nextProps.allMarkets,
            currentEvents: nextProps.currentEvents,
            currentMarketId: nextProps.currentMarketId
        })
    }

    toggleEvents(id) {
        if ($('.'+id).hasClass('none')) {
            $('.'+id).removeClass('none');
        } else {
            $('.'+id).addClass('none');
        }
    }

    toggle = (type) => {
        if (type == "change_market") {
            this.setState({dropDown: !this.state.dropDown})
        }
    }

    render() {

        console.log('matches ', this.state);

        return(
            <section id="Matches_panel" className="tab-pane fade show active" role="tabpanel">
                <div className="CouponModule">
                    <div className="MarketGrid">
                        <div className="MarketGroup CouponMarketGroup">
                            <div className="MarketGroupButton dropDown" onClick={() => this.toggleEvents("matches_events")}>
                                <div className="CouponMarketGroupButton_Title"><span>{typeof this.state.currentmarketName.alias == 'string' && this.state.currentmarketName.alias.length ? this.state.currentmarketName.alias : this.state.currentmarketName.description}</span></div>
                                {/*<div className="dropDown_change_market" onClick={(e)=>{this.toggle('change_market'); e.stopPropagation() }}> <span className="ChangeMarket">Change Market</span></div>*/}
                            </div>
                            {this.state.dropDown ?
                                <div className="ChangeMarket_drop_down_list">
                                    {
                                        Object.keys(this.state.allMarkets).map((market) => {
                                            return <div key={`${market}-tab`} className={`ChangeMarket_item ${this.state.currentmarketName == this.state.allMarkets[market] ? "active" : "" }`} onClick={() => {this.props.changeCurrentMarket(market, this.state.allMarkets[market]);  this.toggle('change_market')} }>{this.state.allMarkets[market]}</div>
                                        })
                                    }

                                </div>
                                : ""
                            }

                            <div className="MarketGroup_Wrapper matches_events ">
                                {
                                    typeof this.state.currentEvents != "undefined" && Object.keys(this.state.currentEvents) != null ?
                                        Object.keys(this.state.currentEvents).map((eventId) => {

                                                // console.log(666, this.props.marketsCol, this.state.currentMarketId);

                                            return  <div  key={eventId} className="MarketGroupContainer MarketGroupContainer_HasLabels">
                                                <div className="header_wrapp">
                                                    <div className={`MarketCouponFixtureLabelBase Market_General Market_HasLabels ${this.props.marketsCol[this.state.currentMarketId].length === 3 ? "three_col" : ""}`}>
                                                        <div className="MarketColumnHeader MarketHeaderLabel MarketHeaderLabel_Date">
                                                            {moment(moment.utc(this.state.currentEvents[eventId]['Fixture']['StartDate'])).local().format("ddd DD MMM")}
                                                        </div>
                                                    </div>
                                                    {
                                                        Object.keys(this.props.marketsCol).map((id) => {
                                                            if (id == this.state.currentMarketId) {
                                                                var countCol = this.props.marketsCol[id].length;

                                                                return this.props.marketsCol[id].map((col, index) => {

                                                                    return  <div key={`${col}-${eventId}`} className="MarketCouponValuesExplicit33 Market_General Market_PWidth-12-3333">
                                                                        <div className="MarketColumnHeader MarketCouponValuesExplicit33_ReducedPadding">{col}</div>
                                                                    </div>
                                                                })

                                                            }
                                                        })
                                                    }

                                                    <div className="MarketCouponFixtureLink Market_General">
                                                        <div className="MarketColumnHeader">&nbsp;</div>
                                                    </div>
                                                </div>
                                                {
                                                    //Object.keys(this.state.currentEvents[eventId]).map((eventIndex) => {


                                                        this.state.currentEvents[eventId].Markets.find((element, ind, arr, thisArg) => {

                                                            if (element.Id == this.state.currentMarketId) {
                                                                return true
                                                            } else {
                                                                return false
                                                            }
                                                        }) ?
                                                            <div className="content_wrapp" key={`${eventId}`}>
                                                                <div
                                                                    className="MarketCouponFixtureLabelBase Market_General Market_HasLabels">
                                                                    <div
                                                                        className="CouponParticipantWithBookCloses CouponParticipantIPPGBase">
                                                                        <div
                                                                            className="CouponParticipantWithBookCloses_LeftSideContainer">
                                                                            <div className="CouponParticipantWithBookCloses_BookCloses">
                                                                                {moment(moment.utc(this.state.currentEvents[eventId].Fixture.StartDate)).local().format("HH:mm")}
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="CouponParticipantWithBookCloses_NameContainer">
                                                                            <NavLink to="/sports/basketball/leagues/game" className="CouponParticipantWithBookCloses_Name" onClick={() => this.props.showOneGame(this.state.currentEvents[eventId], this.state.currentEvents)}>
                                                                                {`${this.state.currentEvents[eventId].Fixture.Participants[0].Name} v ${this.state.currentEvents[eventId].Fixture.Participants[1].Name}`}
                                                                            </NavLink>
                                                                        </div>
                                                                        <div
                                                                            className="CouponParticipantWithBookCloses_Icons CouponParticipantWithBookCloses_Icons-2">
                                                                            <div
                                                                                className="CouponParticipantWithBookCloses_IconsAudioAvailable CouponParticipantWithBookCloses_IconsGeneric"></div>
                                                                            <div
                                                                                className="CouponParticipantWithBookCloses_IconsGeneric CouponParticipantWithBookCloses_IconsStats"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                {/*start*/}
                                                                <ManagMatch
                                                                    fromPage="all"
                                                                    eventId={this.state.currentEvents[eventId].FixtureId}
                                                                    typeSport={this.state.sportId}
                                                                    participants={this.state.currentEvents[eventId].Fixture.Participants}
                                                                    //bets={event.bets}
                                                                    currentMarket={this.state.currentmarketName}
                                                                    markets={this.state.currentEvents[eventId].Markets}
                                                                    addToBetSlip={(info, bet, typeBet) => this.props.addToBetSlip(info, bet, typeBet)}
                                                                />

                                                                <div
                                                                    className="MarketCouponFixtureLink Market_General">
                                                                    <div
                                                                        className="CouponFixtureLinkParticipant">
                                                                        <NavLink to="/sports/basketball/leagues/game"
                                                                                 className="CouponFixtureLinkParticipant_Name" onClick={() => this.props.showOneGame(this.state.currentEvents[eventId], this.state.currentEvents)}>{this.state.currentEvents[eventId].Markets.length}
                                                                        </NavLink>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            : ""

                                                    //})
                                                }

                                            </div>
                                        })
                                        : ""
                                }

                            </div>



                        </div>


                        <div className="LiveAlertsMarketGroupPopupLauncher_BackgroundWrapper">
                            <div className="LiveAlertsMarketGroupPopupLauncher">
                                <div className="LiveAlertsMarketGroupPopupLauncher_ContentWrapper">
                                    <div className="LiveAlertsMarketGroupPopupLauncher_HeaderLabel">Live Match Alerts</div>
                                    <div className="LiveAlertsMarketGroupPopupLauncher_DescriptionLabel">Notifications for goals, results, and more</div>
                                </div>
                                <div className="LiveAlertsMarketGroupPopupLauncher_ContentWrapper">
                                    <div className="LiveAlertsMarketGroupPopupLauncher_OpenButton" onClick={() => this.props.showForm("match")} >Open Alerts</div>
                                </div>
                            </div>
                        </div>

                        <div className="MarketGroup CouponMarketGroup">
                            <div className="MarketGroupButton CouponMarketGroupButton" data-toggle="collapse" data-target="#collapse_Soccer_Matches_Related_Markets" aria-expanded="false" aria-controls="collapse_Soccer_Matches_Related_Markets">
                                <div className="CouponMarketGroupButton_Title"><span>Related Markets</span></div>
                            </div>
                            <div className="Market-Cluster collapse show" id="collapse_Soccer_Matches_Related_Markets" aria-expanded="true">
                                <div  className="item"><label  className="Market-AllLabel"><span>To Win Outright</span></label></div>
                                <div  className="item"><label  className="Market-AllLabel"><span>Without Man City</span></label></div>
                                <div  className="item"><label  className="Market-AllLabel"><span>Top Goalscorer</span></label></div>
                                <div  className="item"><label  className="Market-AllLabel"><span>To be Relegated</span></label></div>
                                <div  className="item"><label  className="Market-AllLabel"><span>Not to be Relegated</span></label></div>
                                <div  className="item"><label  className="Market-AllLabel"><span>To Finish in Top 4</span></label></div>
                                <div  className="item"><label  className="Market-AllLabel"><span>Not to Finish in Top 4</span></label></div>
                                <div  className="item"><label  className="Market-AllLabel"><span>To Finish in Top 6</span></label></div>
                                <div  className="item"><label  className="Market-AllLabel"><span>To Finish in Top Half</span></label></div>
                                <div  className="item"><label  className="Market-AllLabel"><span>To Finish in Bottom Half</span></label></div>
                                <div  className="item"><label  className="Market-AllLabel"><span>To Finish Bottom</span></label></div>
                                <div  className="item"><label  className="Market-AllLabel"><span>Total Points against Team</span></label></div>
                                <div  className="item"><label  className="Market-AllLabel"><span>Competition Specials</span></label></div>
                                <div  className="item"><label  className="Market-AllLabel"><span>PFA Player of the Year</span></label></div>
                                <div  className="item"><label  className="Market-AllLabel"><span>Tournament Totals</span></label></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )

    }
}

export default Matches;
