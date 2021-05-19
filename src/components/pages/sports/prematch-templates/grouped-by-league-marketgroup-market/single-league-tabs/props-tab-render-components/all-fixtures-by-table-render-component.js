import React from 'react';
import moment from "moment";
import {NavLink} from "react-router-dom";
import ManagMatch from "../../../../../in_play/partials/managMatch";
import FootballTime from "../../../../../../helpers/match_time/footballTime";
import BasketballTime from "../../../../../../helpers/match_time/basketballTime";
import MatchAlert from "../../../../../../shared/modal/match_alert";

class AllFixturesByTableRenderComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentMarketName: this.props.currentMarketName,
            dropDown: false,
            currentLeagueMarkets: this.props.currentLeagueMarkets,
            singleLeagueData: this.props.singleLeagueData,
            currentMarketId: this.props.currentMarketId,
            sportId: this.props.sportId,
            setIntervalCount: this.props.setIntervalCount,
            sportName: this.props.sportName,
            currentLeagueId:this.props.currentLeagueId,
            matchAlert: false
        };
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            currentMarketName: nextProps.currentMarketName,
            currentLeagueMarkets: nextProps.currentLeagueMarkets,
            singleLeagueData: nextProps.singleLeagueData,
            currentMarketId: nextProps.currentMarketId,
            sportId: nextProps.sportId,
            setIntervalCount: nextProps.setIntervalCount,
            sportName: nextProps.sportName,
            currentLeagueId:nextProps.currentLeagueId
        });
    }
    showForm(type) {
        if (type == "match") {
            this.setState({
                matchAlert: true
            })
        }
    }

    closeModal(type = null) {
        if (type == null) {
            this.setState({
                show_modal: false
            })
        } else {
            if (type == "match") {
                this.setState({
                    matchAlert: false
                })
            }
        }
    }

    getMarketTitles(bets){
        let titles = [];
        for(let key in bets){
            titles.push(bets[key]['oldName']);
        }

        return titles;
    }

    toggle = (type) => {
        if (type == "change_market") {
            this.setState({dropDown: !this.state.dropDown})
        }
    }

    toggleEvents(id) {
        if ($('.'+id).hasClass('none')) {
            $('.'+id).removeClass('none');
        } else {
            $('.'+id).addClass('none');
        }
    }

    renderSportTimer = (event) => {
        let render = <div className="pi-CouponParticipantClockInPlay_Extra">Live</div>;
        switch (this.state.sportId) {
            case 6046:
                render = <FootballTime setIntervalCount={this.state.setIntervalCount}
                                       event={event}
                                       eventStartDate={event['Fixture']['StartDate']}
                                       serverTimestamp={event.ServerTimestamp}>
                </FootballTime>;
                break;
            case 48242:
                render = <BasketballTime
                    setIntervalCount={this.state.setIntervalCount}
                    event={event}
                ></BasketballTime>;
                break;
        }

        return render;
    }


    render() {

        return <section id="Matches_panel" className="tab-pane fade show active" role="tabpanel">
            <div className="CouponModule">
                <div className="MarketGrid">
                    <div className="MarketGroup CouponMarketGroup">
                        <div className="MarketGroupButton dropDown" onClick={() => this.toggleEvents("matches_events")}>
                            <div className="CouponMarketGroupButton_Title">
                                <span>{this.state.currentMarketName}</span>
                            </div>
                            <div className="dropDown_change_market" onClick={(e)=>{this.toggle('change_market'); e.stopPropagation() }}>
                                <span className="ChangeMarket">Change Market</span>
                            </div>
                        </div>
                        {this.state.dropDown ?
                            <div className="ChangeMarket_drop_down_list">
                                {
                                    Object.keys(this.state.currentLeagueMarkets).map((market) => {

                                        let marketName = this.state.currentLeagueMarkets[market].alias != '' ?
                                            this.state.currentLeagueMarkets[market].alias :
                                            this.state.currentLeagueMarkets[market].name;

                                        return <div key={`${market}-tab`}
                                                    className={`ChangeMarket_item ${this.state.currentMarketName == marketName ? "active" : "" }`}
                                                    onClick={() => {
                                                        this.props.changeCurrentMarket(
                                                            this.state.currentLeagueMarkets[market].id,
                                                            marketName
                                                        );
                                                        this.toggle('change_market');
                                                    }}>
                                            {marketName}
                                        </div>
                                    })
                                }

                            </div>
                            : ""
                        }

                        <div className="MarketGroup_Wrapper matches_events ">
                            {
                                this.state.singleLeagueData != null ?
                                    Object.keys(this.state.singleLeagueData).map((date) => {

                                        let hasMatches = false;
                                        let currentMarketLength = null;
                                        let betTitles = [];

                                        let matches = Object.keys(this.state.singleLeagueData[date]).map((eventIndex) => {

                                            let event = this.state.singleLeagueData[date][eventIndex];

                                            return event.Markets.find((element, ind, arr, thisArg) => {

                                                if (element.Id == this.state.currentMarketId) {

                                                    if(currentMarketLength == null){
                                                        currentMarketLength = Object.keys(element.template.bets).length;
                                                        betTitles = this.getMarketTitles(element.template.bets);
                                                        if(currentMarketLength == 1){
                                                            let line = Object.keys(element.template.bets)[0];
                                                            currentMarketLength = Object.keys(
                                                                element.template.bets[line]
                                                            ).length;
                                                            betTitles = this.getMarketTitles(element.template.bets[line]);
                                                        }
                                                    }

                                                    hasMatches= true;
                                                    return true
                                                } else {
                                                    return false
                                                }
                                            }) ?
                                                <div className="content_wrapp" key={`fixture-${event.FixtureId}-${date}`}>
                                                    <div
                                                        className="MarketCouponFixtureLabelBase Market_General Market_HasLabels">
                                                        <div
                                                            className="CouponParticipantWithBookCloses CouponParticipantIPPGBase">
                                                            <div className="CouponParticipantWithBookCloses_LeftSideContainer">
                                                                {
                                                                    event['Livescore'] === null ?
                                                                        <div className="CouponParticipantWithBookCloses_BookCloses"
                                                                             style={{backgroundColor: 'transparent', textAlign:'center'}}>
                                                                            {moment(moment.utc(event.Fixture.StartDate)).local().format("HH:mm")}
                                                                        </div>
                                                                        :
                                                                        <div className="CouponParticipantWithBookCloses_BookCloses"
                                                                             style={{backgroundColor: '#a7a7a7', color:'#444', textAlign:'center'}}>
                                                                            {this.renderSportTimer(event)}
                                                                        </div>
                                                                }
                                                            </div>
                                                            <div className="CouponParticipantWithBookCloses_NameContainer">
                                                                {
                                                                    (event['Livescore'] === null || typeof event['Livescore']['Scoreboard']['Results'] == 'undefined') ?
                                                                        <NavLink to={`/sports/${this.state.sportName.toLowerCase()}/leagues/game`}
                                                                                 className="CouponParticipantWithBookCloses_Name"
                                                                                 onClick={() => this.props.fetchFixtureData(event.FixtureId)}>
                                                                            {`${event.Fixture.Participants[0].Name}
                                                                            ${this.state.currentLeagueId == 64 ? ' @ ' : ' VS '}
                                                                            ${event.Fixture.Participants[1].Name}`}
                                                                        </NavLink>
                                                                        :
                                                                        <div className="CouponParticipantWithBookCloses_Name"
                                                                             onClick={() => location.href = '//' + location.host + '/in-play/event_view?id='+event.FixtureId}>
                                                                            {event.Fixture.Participants[0].Name}
                                                                            <span style={{color: '#ffdf1b', paddingLeft: '10px'}}>
                                                                                {event['Livescore']['Scoreboard']['Results'][0]['Value']}-
                                                                            </span>
                                                                            <span style={{color: '#ffdf1b', paddingRight: '10px'}}>
                                                                                {event['Livescore']['Scoreboard']['Results'][1]['Value']}
                                                                            </span>
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
                                                        blockNameOdd={true}
                                                        fromPage="prematch"
                                                        eventId={event.FixtureId}
                                                        typeSport={this.state.sportId}
                                                        participants={event.Fixture.Participants}
                                                        //bets={event.bets}
                                                        currentMarket={this.state.currentMarketName}
                                                        markets={event.Markets}
                                                        addToBetSlip={(info, bet, typeBet) => this.props.addToBetSlip(info, bet, typeBet)}
                                                    />

                                                    <div className="MarketCouponFixtureLink Market_General">
                                                        <div className="CouponFixtureLinkParticipant">
                                                            <NavLink to={`/sports/${this.state.sportName.toLowerCase()}/leagues/game`}
                                                                     className="CouponFixtureLinkParticipant_Name"
                                                                     onClick={() => this.props.fetchFixtureData(event.FixtureId)}>{event.MarketsCount}
                                                            </NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                                : ""
                                        });

                                        return hasMatches ?
                                            <div  key={date} className="MarketGroupContainer MarketGroupContainer_HasLabels">
                                                <div className="header_wrapp">
                                                    <div className={`MarketCouponFixtureLabelBase Market_General Market_HasLabels W65 ${currentMarketLength === 3 ? "three_col" : ""}`}>
                                                        <div className="MarketColumnHeader MarketHeaderLabel MarketHeaderLabel_Date">
                                                            {moment(moment.utc(date)).local().format("ddd DD MMM")}
                                                        </div>
                                                    </div>

                                                    <div className="MarketCouponValuesWrapp">
                                                        {
                                                            (currentMarketLength  == 2 || currentMarketLength  == 3) ?
                                                                <div key={`titles-${betTitles[0] ? betTitles[0] : 1}-${date}`}
                                                                     className=" Market_General">
                                                                    <div className="MarketColumnHeader MarketCouponValuesExplicit33_ReducedPadding">{betTitles[0]}</div>
                                                                </div> : ''
                                                        }
                                                        {
                                                            (currentMarketLength  == 2 || currentMarketLength  == 3) ?
                                                                <div key={`titles-${betTitles[1] ? betTitles[1] : 2}-${date}`}
                                                                     className="Market_General ">
                                                                    <div className="MarketColumnHeader MarketCouponValuesExplicit33_ReducedPadding">{betTitles[1]}</div>
                                                                </div> : ''
                                                        }
                                                        {
                                                            (currentMarketLength  == 3) ?
                                                                <div key={`titles-${betTitles[2] ? betTitles[2] : 3}-${date}`}
                                                                     className="Market_General">
                                                                    <div className="MarketColumnHeader MarketCouponValuesExplicit33_ReducedPadding">{betTitles[2]}</div>
                                                                </div> : ''
                                                        }
                                                    </div>
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
                                <div className="LiveAlertsMarketGroupPopupLauncher_OpenButton" onClick={() => this.showForm("match")} >Open Alerts</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                this.state.matchAlert  ?
                    <div className="Modal_wrapp fixed">
                        <MatchAlert closeModal = {(type) => this.closeModal(type)}/>
                    </div>
                    : ""
            }
        </section>
    }
}

export default AllFixturesByTableRenderComponent;