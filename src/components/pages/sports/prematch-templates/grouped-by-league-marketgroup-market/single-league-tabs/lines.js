import React from 'react';
import moment from "moment";
import {NavLink} from "react-router-dom";
import ManagMatch from "../../../../in_play/partials/managMatch";
import FootballTime from "../../../../../helpers/match_time/footballTime";
import BasketballTime from "../../../../../helpers/match_time/basketballTime";

class Lines extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentMarketName: this.props.currentMarketName,
            currentLeagueMarkets: this.props.currentLeagueMarkets,
            singleLeagueData: this.props.singleLeagueData,
            currentMarketId: this.props.currentMarketId,
            sportId: this.props.sportId,
            setIntervalCount: this.props.setIntervalCount,
            sportName: this.props.sportName,
            firstMarketTitles: this.getFirstMarketTitles(this.props.singleLeagueData)
        };
    }

    componentWillReceiveProps(nextProps){
        // console.log("000000", this.state)
        this.setState({
            currentMarketName: nextProps.currentMarketName,
            currentLeagueMarkets: nextProps.currentLeagueMarkets,
            singleLeagueData: nextProps.singleLeagueData,
            currentMarketId: nextProps.currentMarketId,
            sportId: nextProps.sportId,
            setIntervalCount: nextProps.setIntervalCount,
            sportName: nextProps.sportName,
            firstMarketTitles: this.getFirstMarketTitles(nextProps.singleLeagueData)
        });
    }

    getFirstMarketTitles(singleLeagueData){
        if(singleLeagueData !== null && typeof singleLeagueData === 'object'){
            let date = Object.keys(singleLeagueData)[0];
            if(
                singleLeagueData[date] instanceof Array &&
                singleLeagueData[date][0].Markets instanceof Array &&
                singleLeagueData[date][0].Markets[0].template !== null &&
                typeof singleLeagueData[date][0].Markets[0].template === 'object'
            ){
                return singleLeagueData[date][0].Markets[0].template.titles;
            }
        }

        return [];
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
    toggleEvents(id) {
        if ($('.'+id).hasClass('none')) {
            $('.'+id).removeClass('none').show(200);
        } else {
            $('.'+id).addClass('none').hide(200);
        }
    }

    render() {

        return <div className="MarketGroup">
                <div className="MarketGroupButton" onClick={()=>this.toggleEvents('matches_events')}><span className="MarketGroupButton_Text">{this.state.currentMarketName}</span>
                </div>
                <div className="MarketGroupWrapp matches_events">
                    <div className="MarketsubMenu">
                        <ul>

                            {
                                Object.keys(this.state.currentLeagueMarkets).map((market) => {

                                    let marketName = this.state.currentLeagueMarkets[market].alias != '' ?
                                        this.state.currentLeagueMarkets[market].alias :
                                        this.state.currentLeagueMarkets[market].name;

                                    return <li key={`${market}-tab`}
                                                onClick={() => {
                                                    this.props.changeCurrentMarket(
                                                        this.state.currentLeagueMarkets[market].id,
                                                        marketName
                                                    );
                                                }}>{marketName}</li>
                                })
                            }
                        </ul>
                    </div>

                    <div className="play_classification_league">
                        {
                            this.state.singleLeagueData != null ?
                                Object.keys(this.state.singleLeagueData).map((date) => {

                                    return <div className="play_league" key={date}>
                                        <div className="play_league_header">
                                            <div className="competition_btn">
                                                <div className="league_name">
                                                    {moment(moment.utc(date)).local().format("ddd DD MMM")}
                                                </div>
                                                <div className="league_header_buttons visible">
                                                    {this.state.firstMarketTitles.map((title) => {
                                                        return <div className="event_label" key={title}>{title}</div>
                                                    })}
                                                </div>
                                            </div>
                                            {this.state.singleLeagueData[date].map((event, eventIndex) => {
                                                return  (
                                                    <div className="play_league_group_wrapp opened" key={eventIndex}>
                                                        <div className="table_row">
                                                            <div className="participant_group_wrapper">
                                                                <div className="participant_group">
                                                                    <div className="timer_wrapper">

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

                                                                        <div className="play_icon_wrapper pre-match">
                                                                            <div className="play_icon video"></div>
                                                                        </div>
                                                                    </div>
                                                                    {
                                                                        (event['Livescore'] === null || typeof event['Livescore']['Scoreboard']['Results'] == 'undefined') ?
                                                                            <NavLink to={`/sports/${this.state.sportName.toLowerCase()}/leagues/game`}
                                                                                     className="participant_wrapper"
                                                                                     onClick={() => this.props.fetchFixtureData(event.FixtureId)}>
                                                                                <div className="participant_stack"><p
                                                                                    className="participant_name">
                                                                                    {event.Fixture.Participants[0].Name}</p>
                                                                                </div>
                                                                                <div className="participant_stack"><p
                                                                                    className="participant_name">
                                                                                    {event.Fixture.Participants[1].Name}</p>
                                                                                </div>
                                                                            </NavLink>
                                                                            :
                                                                            <a className="participant_wrapper"
                                                                               onClick={() => location.href = '//' + location.host + '/in-play/event_view?id='+event.FixtureId}>
                                                                                <div className="participant_stack"><p
                                                                                    className="participant_name">
                                                                                    {event.Fixture.Participants[0].Name}
                                                                                    <span style={{color: "rgb(255, 223, 27)", paddingLeft: "10px"}}>
                                                                                        {event['Livescore']['Scoreboard']['Results'][0]['Value']}
                                                                                    </span>
                                                                                    </p>
                                                                                </div>
                                                                                <div className="participant_stack"><p
                                                                                    className="participant_name">
                                                                                    {event.Fixture.Participants[1].Name}
                                                                                    <span style={{color: "rgb(255, 223, 27)", paddingLeft: "10px"}}>
                                                                                        {event['Livescore']['Scoreboard']['Results'][1]['Value']}
                                                                                    </span></p>
                                                                                </div>
                                                                            </a>
                                                                    }
                                                                    <div className="play_icon_wrapper">
                                                                        <div className="icon_block icon_status"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <ManagMatch
                                                                blockNameOdd={true}
                                                                markets={event.Markets}
                                                                fromPage="prematch"
                                                                typeSport={this.state.sportId}
                                                                participants={event.Fixture.Participants}
                                                                eventId={event.FixtureId}
                                                                currentMarket={this.state.currentMarketName}
                                                                addToBetSlip={(info, bet, typeBet) => this.props.addToBetSlip(info, bet, typeBet)}
                                                            />
                                                            <div className="event_count_btn">
                                                                <div className="event_count" onClick={() => this.props.fetchFixtureData(event.FixtureId)}>{event.MarketsCount}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                            }) : ''
                        }
                    </div>
                </div>
         </div>
    }
}

export default Lines;