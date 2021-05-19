import React from 'react';
import FootballTime from "../../../helpers/match_time/footballTime";
import ManagMatch from "./managMatch";
import {Link} from "react-router-dom";


class MainMarkets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSport: this.props.currentSport,
            leagues: {},
            setIntervalCount: 0,
            serverTimestamp: this.props.serverTimestamp,
            typeSport: this.props.typeSport
        }
        this.changeFormetArr = this.changeFormetArr.bind(this);
    }

    componentDidMount() {
        this.changeFormetArr(this.state.currentSport);
        this.interval = setInterval(() => {
            this.setState({setIntervalCount: this.state.setIntervalCount + 1})
        }, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    componentWillReceiveProps(nextProps) {

        this.setState({
            // currentSport: nextProps.currentSport,
            typeSport: nextProps.typeSport,
            serverTimestamp: nextProps.serverTimestamp

        });
        this.changeFormetArr(nextProps.currentSport);

    }

    changeFormetArr(sport) {

        let league = {};
        sport.forEach((event) => {
            if(typeof league[event.Fixture.League.Id] == 'undefined'){
                league[event.Fixture.League.Id] = {
                    name: event.Fixture.League.Name,
                    events: []
                };
            }
            league[event.Fixture.League.Id].events.push(event);
        })
        this.setState({
            leagues: league
        });
    }

    selectEvent(fixtureId){
        window.localStorage.setItem("selectedEventId", fixtureId);
        //location.href = '//' + location.host + '/in-play?fixtureId=' + fixtureId;
    }

    render() {
        {/*<TableOverviewGames />*/}
        console.log("typeSport", this.state.leagues)
        return(
            Object.keys(this.state.leagues).map((league, ind) => {
                return      <div className="play_classification_league" key={`${league}-${ind}-main`}>
                    <div className="play_league">
                        <div className="play_league_header">
                            <div className="competition_btn" onClick={()=>this.props.toggleLeagueMarket(league)}>
                                <div className="league_name">{this.state.leagues[league].name}</div>
                                {this.state.typeSport == 48242 ?
                                    <div className={`league_header_buttons visible ${league}-button`}>
                                        <div className="event_label">Spread</div>
                                        <div className="event_label">Total</div>
                                        <div className="event_label">Money Line</div>
                                    </div>
                                    :
                                    this.state.typeSport == 54094 ?
                                        <div className={`league_header_buttons visible ${league}-button`}>
                                            <div className="event_label">Winner</div>
                                            <div className="event_label">Current Set</div>
                                            <div className="event_label">Next Game</div>
                                        </div>
                                        :
                                        this.state.typeSport == 154830 ?
                                        <div className={`league_header_buttons visible ${league}-button`}>
                                            <div className="event_label">Winner</div>
                                            <div className="event_label">Current Set</div>
                                            <div className="event_label">Current Set Handicap</div>
                                        </div>
                                        :
                                        this.state.typeSport == 35709 ?
                                        <div className={`league_header_buttons visible ${league}-button`}>
                                             <div className="event_label">Handicap</div>
                                             <div className="event_label">Total</div>
                                             <div className="event_label">Result</div>
                                        </div>
                                            :
                                            <div className={`league_header_buttons visible ${league}-button`}>
                                                <div className="event_label">1X2</div>
                                                <div className="event_label">Next Goal</div>
                                                <div className="event_label">Match Goals</div>
                                            </div>
                                }
                                <div className="favourite_icon_wrapper">
                                    <div className="favourite_icon"></div>

                                </div>
                            </div>
                            {
                                this.state.leagues[league].events.map((event, i) => {
                                    //console.log("mainMarckets event.Livescore: ", event.Livescore);
                                    let serverTimestamp = typeof this.state.serverTimestamp != 'undefined' ?
                                        this.state.serverTimestamp : typeof event.ServerTimestamp != 'undefined' ?
                                            event.ServerTimestamp : '';

                                    return <div className={`play_league_group_wrapp opened ${league}-market`} key={`${event}-${i}-${league}-event-main`}>
                                        <div className="table_row">
                                            <div className="participant_group_wrapper">
                                                <div className="participant_group">
                                                    <div className="timer_wrapper">
                                                        {this.state.typeSport == 54094 || this.state.typeSport == 265917 || this.state.typeSport == 154830 ?
                                                            <div className="player_indicator_wrapp">
                                                                <div className="player_indicator"></div>
                                                                <div className="player_indicator active"></div>
                                                            </div>

                                                            :
                                                            <div className="timer_wrapper">
                                                             <span className="event_timer">
                                                                 <FootballTime fromPage={`allMarkets`} setIntervalCount={this.state.setIntervalCount} event={event} eventStartDate={event.Fixture.StartDate}
                                                                               serverTimestamp={serverTimestamp}/>
                                                             </span>
                                                            </div>
                                                        }
                                                        {/*<p className="extra_time">ET</p>*/}
                                                    </div>
                                                    <Link to={{
                                                        pathname:"/in-play/event_view",
                                                        search: 'id='+event.FixtureId,
                                                        state:"game"
                                                        }}  className="participant_wrapper">
                                                        <div className="participant_stack">
                                                            <p className="participant_name" onClick={() => this.selectEvent(event.FixtureId) }>{ event.Fixture.Participants[0]['Name']}
                                                                {/*<span className="participant_goal">GOAL</span>*/}
                                                            </p>

                                                            <div className="participant_score">
                                                                <span className="event_score yellow_text">{typeof event.Livescore != 'undefined' && event.Livescore != null && typeof event.Livescore.Scoreboard != 'undefined' ? event.Livescore.Scoreboard.Results[0].Value : "0"}</span>
                                                            </div>
                                                        </div>

                                                        <div className="participant_stack">
                                                            <p className="participant_name" onClick={() => this.selectEvent(event.FixtureId) }>{event.Fixture.Participants[1]['Name']}
                                                                {/*<span className="participant_goal">GOAL</span>*/}
                                                            </p>
                                                            <div className="participant_score">
                                                                <span className="event_score yellow_text">{typeof event.Livescore != 'undefined' && event.Livescore != null && typeof event.Livescore.Scoreboard != 'undefined' ? event.Livescore.Scoreboard.Results[1].Value : "0"}</span>
                                                            </div>
                                                        </div>
                                                        {this.state.typeSport == 6046 || this.state.typeSport == 35709 ?
                                                        <div className="participant_stack">
                                                            <p className="participant_name" onClick={() => this.selectEvent(event.FixtureId) }>Draw</p>

                                                        </div>
                                                        :""}

                                                    </Link>
                                                    <div className="play_icon_wrapper">
                                                        <div className={
                                                            this.state.typeSport == 54094 ?
                                                                "play_icon tennis_field"
                                                                :
                                                                this.state.typeSport == 48242 ?
                                                                    "play_icon basketball_field"
                                                                    :
                                                                    this.state.typeSport == 452674 ?
                                                                        "play_icon cricket_field"
                                                                        :
                                                                        this.state.typeSport == 35709 ?
                                                                            "play_icon handball_field"
                                                                            :
                                                                            this.state.typeSport == 35232 ?
                                                                                "play_icon iceHockey_field"
                                                                                :
                                                                                this.state.typeSport == 154830 ?
                                                                                    "play_icon volleyball_field"
                                                                                    :
                                                                                    this.state.typeSport == 6046 ?
                                                                                        "play_icon soccer_field"
                                                                                        :
                                                                                        ""
                                                        }>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                            <ManagMatch
                                                livescore = {event.Livescore}

                                                fromPage="main"
                                                eventId={event.FixtureId}
                                                typeSport={this.state.typeSport}
                                                participants={event.Fixture.Participants}
                                                //currentMarket={`combineMain`}
                                                markets={event.Markets}
                                                addToBetSlip={(info, bet, typeBet) => this.props.addToBetSlip(info, bet, typeBet)}/>

                                            <div className="event_count_btn">
                                                <div className="favourite_icon"></div>
                                                <Link to={{
                                                    pathname:"/in-play/event_view",
                                                    search: 'id='+event.FixtureId,
                                                    state:"game"
                                                }} className="event_count" >{Object.keys(event.Markets).length}</Link>

                                            </div>
                                        </div>

                                    </div>
                                })
                            }

                        </div>

                    </div>
                </div>
            })
        )

    }
}



export default MainMarkets;
