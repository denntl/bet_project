import React from 'react';
import FootballTime from "../../../../helpers/match_time/footballTime";
import {getSports} from "../../../../helpers/data";
import ManagMatch from "../managMatch";
import Link from "react-router-dom/es/Link";
import BasketballTime from "../../../../helpers/match_time/basketballTime";



class TabAll extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            sports: this.props.sports,
            sportsOriginal: this.props.sportsOriginal,
            sportArr: this.props.sportArr,
            event:this.props.event,
            setIntervalCount: 0,
        }
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({setIntervalCount: this.state.setIntervalCount + 1})
        }, 1000);
        this.setState({
            sports: this.props.sports
        })
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            sports: nextProps.sports,
            sportArr: nextProps.sportArr,
            event: nextProps.event,
            sportsOriginal: nextProps.sportsOriginal,
        })
    }
    toggleLeague=(id)=>{

        if ($('.'+ id + "-sport").hasClass('hidden')) {
            $('.'+ id + "-sport").removeClass('hidden').show(200)
        } else {
            $('.'+ id + "-sport").addClass('hidden').hide(200)
        }

    }


    toggleGame=(id)=>{

        if ($('.'+ id + "-league").hasClass('hidden')) {
            $('.'+ id + "-league").removeClass('hidden').show(200)
        } else {
            $('.'+ id + "-league").addClass('hidden').hide(200)
        }
    };

    toggleFixture=(id)=>{

        if ($('.'+ id + "-game").hasClass('hidden')) {
            $('.'+ id + "-game").removeClass('hidden').show(200);
            $('.'+ id + "-arrow").removeClass('down');
        } else {
            $('.'+ id + "-game").addClass('hidden').hide(200);
            $('.'+ id + "-arrow").addClass('down');
        }
    }

    showInfo=(id)=>{
        this.props.selectShotLeftBar(id);
    }

    selectEvent(fixtureId){
        $(".selected_bet").removeClass("selected_bet")
        window.localStorage.setItem("selectedEventId", fixtureId);
        //location.href = '//' + location.host + '/in-play?fixtureId=' + fixtureId;
    }

    getSportMarket(eventMarkets, sportId){
        let currentMarket;
        let findedMarket = {};
        switch(sportId) {
            case "6046":
            case "35232":
            case 6046:
            case 35232:
                currentMarket = "1X2"
                break;
            case "154830":
            case "54094":
            case 154830:
            case 54094:
                currentMarket = "12"
                break;
            case "48242":
            case 48242:
                currentMarket = "Asian Handicap Including Overtime"
                break;
        }
        eventMarkets.map((market) => {
            if (market.Name == currentMarket || market.alias == currentMarket) {
                findedMarket = market;
            }
        })

        return findedMarket;
    }

    render() {
        let renderLeagueId = null;

        return(
            <div className="tab-block active" id="all">
                {
                    this.state.sportArr.map((sport) => {
                        if (sport.status == true ) {
                            return <div className={`classification_block ${sport.color}`} key={`${sport.id}-left-All`} id={`${sport.id}-sidebar`}>

                                <div className="classification_header" onClick={()=>this.toggleLeague(sport.id)}>
                                    <span className="classification_header_icon" onClick={()=>this.showInfo(sport.id)}/>
                                    <span className="classification_header_label">{sport.id == 6046 ? "Soccer" : sport.name}</span>
                                </div>

                                <div className={`ClassificationContainer ${sport.id}-sport`}>
                                    <div className="GameGroup">
                                        {
                                            Object.keys(this.state.sportsOriginal).length  && typeof this.state.sportsOriginal[sport.id] != "undefined"?
                                                Object.keys(this.state.sportsOriginal[sport.id]).map((eventIndex) => {

                                                    let event = this.state.sportsOriginal[sport.id][eventIndex];
                                                    let leagueChanged = renderLeagueId != event.Fixture.League.Id;
                                                    renderLeagueId = event.Fixture.League.Id;

                                                    return <div key={`${eventIndex}-game-group`}>

                                                        {leagueChanged ?
                                                            <div className="Market">
                                                                <div className="Market-Header" onClick={() => this.toggleGame(eventIndex)}>
                                                                    {event.Fixture.League.Name}
                                                                </div>
                                                            </div> : ''}
                                                        <span className="competition_icon_favourite"/>
                                                                 <div  key={`${eventIndex}-game-group-render`} className={`OneGameContainer ${eventIndex}-league`}>
                                                                    <div className="oneGame">
                                                                        <div className="Market-Cluster">
                                                                            <Link to={{
                                                                                pathname:"/in-play/event_view",
                                                                                search: 'id='+event.FixtureId,
                                                                                state:"game"
                                                                            }} className={`fixture ${event.FixtureId == this.state.event.FixtureId ? "currentGame" :""}`} onClick={() => this.selectEvent(event.fixtureId)}>
                                                                                <div className="team_stack">
                                                                                    <div className="team_stack_team">
                                                                                        {event.Fixture.Participants[0].Name}
                                                                                    </div>
                                                                                    <div className="team_stack_team">
                                                                                        {event.Fixture.Participants[1].Name}
                                                                                    </div>
                                                                                </div>
                                                                                <div className="score_display_standart">
                                                                                    <div className="video_icon"/>
                                                                                    <div className="team_score">
                                                                                        <span className="score">
                                                                                            {event.Livescore && event.Livescore.Scoreboard && event.Livescore.Scoreboard.Results ?
                                                                                                event.Livescore.Scoreboard.Results[0].Value : ""}
                                                                                        </span>-
                                                                                        <span className="score">
                                                                                            {event.Livescore && event.Livescore.Scoreboard && event.Livescore.Scoreboard.Results ?
                                                                                                event.Livescore.Scoreboard.Results[1].Value : ""}
                                                                                        </span>
                                                                                    </div>
                                                                                    <div className="game_timer">
                                                                                        {sport.id == 48242 ?
                                                                                            <BasketballTime
                                                                                                setIntervalCount={this.state.setIntervalCount}
                                                                                                event={event}
                                                                                            /> :
                                                                                                <FootballTime setIntervalCount={this.state.setIntervalCount}
                                                                                                              event={event}
                                                                                                              eventStartDate={event.startDate}
                                                                                                              serverTimestamp={event.serverTimestamp}
                                                                                                />
                                                                                        }
                                                                                    </div>
                                                                                </div>
                                                                            </Link>

                                                                            <div className={`open_icon down ${event.FixtureId}-arrow`} onClick={() => this.toggleFixture(event.FixtureId)}/>

                                                                            <div className={`Market-Cluster hidden ${event.FixtureId}-game`}>
                                                                                <ManagMatch
                                                                                    currentMarket={event.Markets.length ? this.getSportMarket(event.Markets, sport.id) : {}}
                                                                                    fromPage="leftSidebar"
                                                                                    typeSport={sport.id}
                                                                                    eventId={event.FixtureId}
                                                                                    participants={event.Fixture.Participants}
                                                                                    markets={event.Markets}
                                                                                    addToBetSlip={(info, bet, typeBet) => this.props.addToBetSlip(info, bet, typeBet)}/>
                                                                            </div>

                                                                        </div>
                                                                        <span className="game_icon_favourite"/>
                                                                    </div>
                                                                </div>
                                                    </div>

                                                })
                                                : ""

                                        }




                                    </div>
                                    <div className="classification_noGames">
                                        All events have been moved to favourites
                                    </div>

                                </div>


                            </div>
                        }



                    })
                }



            </div>
        )

    }
}

export default TabAll;