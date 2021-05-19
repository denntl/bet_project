import React from 'react';
import moment from "moment/moment";
import FootballTime from '../../../../helpers/match_time/footballTime';
import ManagMatch from "../../../../pages/in_play/partials/managMatch";
import {NavLink} from "react-router-dom";

class Matches extends React.Component {
    marketsCol = {
        1: [1, "X", 2],
        7: ["1X", "X2", 12],
        2: ["Under 2.5", "Over 2.5"],
        17: ["Yes", "No"],
        5: ["Odd", "Even"],
        52: [1, 2],
        3: ["1", "2"]

    }

    constructor(props) {
        super(props);
        this.state = {
            currentmarketName: this.props.currentmarketName,
            dropDown:false,
            allMarkets: this.props.allMarkets,
            currentEvents: this.props.currentEvents,
            currentMarketId: this.props.currentMarketId,
            sportId: this.props.sportId,
            setIntervalCount: 0,
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({setIntervalCount: this.state.setIntervalCount + 1})
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    componentWillReceiveProps(nextProps) {
        // console.log("111111111",this.state)
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
        return(
            <section id="Matches_panel" className="tab-pane fade show active" role="tabpanel">
                <div className="CouponModule">
                    <div className="MarketGrid">
                        <div className="MarketGroup CouponMarketGroup">
                            <div className="MarketGroupButton dropDown" onClick={() => this.toggleEvents("matches_events")}>
                                <div className="CouponMarketGroupButton_Title"><span>{ Object.keys(this.state.allMarkets).length ? this.state.allMarkets[this.state.currentMarketId].alias != ""? this.state.allMarkets[this.state.currentMarketId].alias : this.state.allMarkets[this.state.currentMarketId].description : ""}</span></div>
                                <div className="dropDown_change_market" onClick={(e)=>{this.toggle('change_market'); e.stopPropagation() }}> <span className="ChangeMarket">Change Market</span></div>
                            </div>
                            {this.state.dropDown ?
                                <div className="ChangeMarket_drop_down_list">
                                    {
                                        Object.keys(this.state.allMarkets).map((market) => {
                                            return <div key={`${market}-tab`} className={`ChangeMarket_item ${this.state.currentMarketId == market ? "active" : "" }`} onClick={() => {this.props.changeCurrentMarket(market, this.state.allMarkets[market].description);  this.toggle('change_market')} }>{this.state.allMarkets[market].alias != ''? this.state.allMarkets[market].alias : this.state.allMarkets[market].description}</div>
                                        })
                                    }

                                </div>
                                : ""
                            }

                            <div className="MarketGroup_Wrapper matches_events ">
                                {
                                    typeof this.state.currentEvents != "undefined" && Object.keys(this.state.currentEvents) != null ?
                                        Object.keys(this.state.currentEvents).map((date) => {

                                            let hasMatches = false;
                                            let matches = Object.keys(this.state.currentEvents[date]).map((eventIndex) => {
                                                    let event =   this.state.currentEvents[date][eventIndex]
                                                    return   event.Markets.find((element, ind, arr, thisArg) => {

                                                        if (element.Id == this.state.currentMarketId) {
                                                            hasMatches= true;
                                                            return true
                                                        } else {
                                                            return false
                                                        }
                                                    }) ?
                                                        <div className="content_wrapp" key={`${event.FixtureId}-${date}`}>
                                                            <div
                                                                className="MarketCouponFixtureLabelBase Market_General Market_HasLabels">
                                                                <div
                                                                    className="CouponParticipantWithBookCloses CouponParticipantIPPGBase">
                                                                    <div className="CouponParticipantWithBookCloses_LeftSideContainer">
                                                                        {
                                                                            event['Fixture'].Status != 2 ?
                                                                                <div className="CouponParticipantWithBookCloses_BookCloses" style={{backgroundColor: 'transparent', textAlign:'center'}}> {moment(moment.utc(event.Fixture.StartDate)).local().format("HH:mm")}</div>
                                                                                :
                                                                                <div className="CouponParticipantWithBookCloses_BookCloses" style={{backgroundColor: '#a7a7a7', color:'#444', textAlign:'center'}}>
                                                                                    <FootballTime setIntervalCount={this.state.setIntervalCount} event={event} eventStartDate={event['Fixture']['StartDate']} serverTimestamp={event.ServerTimestamp}>
                                                                                    </FootballTime>
                                                                                </div>

                                                                        }
                                                                    </div>
                                                                    <div className="CouponParticipantWithBookCloses_NameContainer">
                                                                        {
                                                                            (event['Livescore'] === null || typeof event['Livescore']['Scoreboard']['Results'] == 'undefined') ?
                                                                                <NavLink to="/sports/soccer/leagues/game" className="CouponParticipantWithBookCloses_Name" onClick={() => this.props.showOneGame(event, this.state.currentEvents[date])}>
                                                                                    {`${event.Fixture.Participants[0].Name} v ${event.Fixture.Participants[1].Name}`}
                                                                                </NavLink>
                                                                                :
                                                                                <div className="CouponParticipantWithBookCloses_Name" onClick={() => location.href = '//' + location.host + '/in-play/event_view?id='+event.FixtureId}>
                                                                                   {event.Fixture.Participants[0].Name}
                                                                                  <span style={{color: '#ffdf1b', paddingLeft: '10px'}}>{ event['Livescore']['Scoreboard']['Results'][0]['Value']}-</span>
                                                                                   <span style={{color: '#ffdf1b', paddingRight: '10px'}}>{ event['Livescore']['Scoreboard']['Results'][1]['Value']}</span>
                                                                                   {event.Fixture.Participants[1].Name}
                                                                                </div>
                                                                        }
                                                                    </div>
                                                                    <div className="CouponParticipantWithBookCloses_Icons CouponParticipantWithBookCloses_Icons-2">
                                                                        <div className="CouponParticipantWithBookCloses_IconsAudioAvailable CouponParticipantWithBookCloses_IconsGeneric"></div>
                                                                        <div className="CouponParticipantWithBookCloses_IconsGeneric CouponParticipantWithBookCloses_IconsStats"></div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            {/*start*/}
                                                            <ManagMatch
                                                                fromPage="prematch"
                                                                eventId={event.FixtureId}
                                                                typeSport={this.state.sportId}
                                                                participants={event.Fixture.Participants}
                                                                //bets={event.bets}
                                                                currentMarket={this.state.currentmarketName}
                                                                markets={event.Markets}
                                                                blockNameOdd={true}
                                                                addToBetSlip={(info, bet, typeBet) => this.props.addToBetSlip(info, bet, typeBet)}
                                                            />

                                                            <div
                                                                className="MarketCouponFixtureLink Market_General">
                                                                <div
                                                                    className="CouponFixtureLinkParticipant">
                                                                    <NavLink to="/sports/soccer/leagues/game"
                                                                             className="CouponFixtureLinkParticipant_Name" onClick={() => this.props.showOneGame(event, this.state.currentEvents[date])}>{event.Markets.length}
                                                                    </NavLink>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        : ""

                                                });

                                            return hasMatches ?
                                                <div  key={date} className="MarketGroupContainer MarketGroupContainer_HasLabels">

                                                    <div className="header_wrapp">
                                                        <div className={`MarketCouponFixtureLabelBase Market_General Market_HasLabels ${this.marketsCol[this.state.currentMarketId].length === 3 ? "three_col" : ""}`}>
                                                            <div className="MarketColumnHeader MarketHeaderLabel MarketHeaderLabel_Date">
                                                                {moment(moment.utc(date)).local().format("ddd DD MMM")}
                                                            </div>
                                                        </div>
                                                        {
                                                            Object.keys(this.marketsCol).map((id) => {
                                                                if (id == this.state.currentMarketId) {
                                                                    var countCol = this.marketsCol[id].length;

                                                                    return this.marketsCol[id].map((col, index) => {

                                                                        return  <div key={`${col}-${date}`} className={`MarketCouponValuesExplicit22 Market_General ${countCol == 3? "Market_PWidth-12-3333" : "Market_PWidth2"}`}>
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

                                                    {matches}

                                                </div>
                                            : ""
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

                        {/*<div className="MarketGroup CouponMarketGroup">*/}
                            {/*<div className="MarketGroupButton CouponMarketGroupButton" data-toggle="collapse" data-target="#collapse_Soccer_Matches_Related_Markets" aria-expanded="false" aria-controls="collapse_Soccer_Matches_Related_Markets">*/}
                                {/*<div className="CouponMarketGroupButton_Title"><span>Related Markets</span></div>*/}
                            {/*</div>*/}
                            {/*<div className="Market-Cluster collapse show" id="collapse_Soccer_Matches_Related_Markets" aria-expanded="true">*/}
                                {/*<div  className="item"><label  className="Market-AllLabel"><span>To Win Outright</span></label></div>*/}
                                {/*<div  className="item"><label  className="Market-AllLabel"><span>Without Man City</span></label></div>*/}
                                {/*<div  className="item"><label  className="Market-AllLabel"><span>Top Goalscorer</span></label></div>*/}
                                {/*<div  className="item"><label  className="Market-AllLabel"><span>To be Relegated</span></label></div>*/}
                                {/*<div  className="item"><label  className="Market-AllLabel"><span>Not to be Relegated</span></label></div>*/}
                                {/*<div  className="item"><label  className="Market-AllLabel"><span>To Finish in Top 4</span></label></div>*/}
                                {/*<div  className="item"><label  className="Market-AllLabel"><span>Not to Finish in Top 4</span></label></div>*/}
                                {/*<div  className="item"><label  className="Market-AllLabel"><span>To Finish in Top 6</span></label></div>*/}
                                {/*<div  className="item"><label  className="Market-AllLabel"><span>To Finish in Top Half</span></label></div>*/}
                                {/*<div  className="item"><label  className="Market-AllLabel"><span>To Finish in Bottom Half</span></label></div>*/}
                                {/*<div  className="item"><label  className="Market-AllLabel"><span>To Finish Bottom</span></label></div>*/}
                                {/*<div  className="item"><label  className="Market-AllLabel"><span>Total Points against Team</span></label></div>*/}
                                {/*<div  className="item"><label  className="Market-AllLabel"><span>Competition Specials</span></label></div>*/}
                                {/*<div  className="item"><label  className="Market-AllLabel"><span>PFA Player of the Year</span></label></div>*/}
                                {/*<div  className="item"><label  className="Market-AllLabel"><span>Tournament Totals</span></label></div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </section>
        )

    }
}

export default Matches;
