import React from 'react';
import FootballTime from "../../../helpers/match_time/footballTime";
import ManagMatch from "./managMatch";
import {Link} from "react-router-dom";
import BasketballTime from "../../../helpers/match_time/basketballTime";




class AllMarketsComponent extends React.Component {

    constructor(props) {
        super(props);

        let currentMarket = "";

        if(typeof this.props.allSports == 'object' && Object.keys(this.props.allSports).length){
            Object.keys(this.props.allSports).map((ind) => {
                if(this.props.allSports[ind]['id'] == this.props.typeSport){
                    currentMarket = this.props.allSports[ind]['marketList']['overviewAll'];
                }
            })
        }

        this.state = {
            currentSport: this.props.eventsSelectedtSport,
            leagues: {},
            setIntervalCount: 0,
            serverTimestamp: this.props.serverTimestamp,
            selectedEventMarket:{},
            currentMarket: currentMarket,
            typeSport: this.props.typeSport,
            marketsTemplateName: ['TwoColumnsYesNo','TwoColumnsTeams',
                'TwoColumnsOddEven','ThreeColumnsDraw',
                'ThreeColumnsNoGoal','ThreeColumnsDouble',
                'ThreeColumnsHomeAway','ThreeColumnsDrawDouble',
            'TwoColumnsWithTitleTeams','ThreeColumnsWithTitleAndLineOverUnder','ThreeColumnsWithTitleAndLineTeams']
        }

    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    componentDidMount() {
        this.changeFormatcurrentSport(this.props.eventsSelectedtSport);
        this.interval = setInterval(() => {
            this.setState({setIntervalCount: this.state.setIntervalCount + 1})
        }, 1000);
        $('.favourite_icon').click(function () {
            var category_name = $(this).data('cat');
            var parent = $(this).parents('.play_league');

            $(this).toggleClass('starBtnOn');
            $.fn.animateAppendTo = function(sel, speed) {
                var newEle = parent.clone(true).appendTo(sel),
                    newPos = newEle.position();
                newEle.hide();
                parent.addClass('animated_move').animate(newPos, speed, function() {
                    newEle.show();
                    parent.remove();
                });
                return newEle;
            };

            if($(this).hasClass("starBtnOn") ) {
                // console.log('++');
                $(this).animateAppendTo('.favourite_container', 500);
            }
            else{
                // console.log('--');
                parent.animateAppendTo(('.play_classification_league' + category_name), 500);
            }

        })

    }
    // showGoals = memoizeOne((number, eventId) => {
    // }, (newArr, lastArr) => {
    //     if (lastArr[0] != newArr[0]) {
    //         console.log(lastArr, newArr)
    //         $('#'+ latArr[1]).show(1000, function() {
    //             setTimeout( () => {
    //                 $(this).hide()
    //             }, 2000)
    //         })
    //     }
    //
    // })

    componentWillReceiveProps(nextProps) {

        let currentMarket = "";

        if(typeof nextProps.allSports == 'object' && Object.keys(nextProps.allSports).length){
            Object.keys(nextProps.allSports).map((ind) => {
                if(nextProps.allSports[ind]['id'] == nextProps.typeSport){
                    currentMarket = nextProps.allSports[ind]['marketList']['overviewAll'];
                }
            })
        }


        this.changeFormatcurrentSport(nextProps.eventsSelectedtSport);

        this.setState({
            typeSport: nextProps.typeSport,
            currentMarket: currentMarket,
            serverTimestamp: nextProps.serverTimestamp,
            currentSport: nextProps.eventsSelectedtSport

        });


    }


    changeFormatcurrentSport = (sport) => {
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

    marketSwitchList(id){
        if ($('.marketSwitcher_list.'+ id).hasClass('show')) {
            $('.marketSwitcher_list.'+ id).removeClass('show')

        }else {
            $('.marketSwitcher_list').removeClass('show')

            $('.marketSwitcher_list.'+ id).addClass('show')
        }

    }

    selectEvent(FixtureId){
        window.localStorage.setItem("selectedEventId", FixtureId);
        //location.href = '//' + location.host + '/in-play?FixtureId=' + FixtureId;
    }

    changeMarket = (market, event) => {
        this.state.selectedEventMarket[event] = market
        this.setState({
            selectedEventMarket: this.state.selectedEventMarket
        })

        $('.marketSwitcher_list.'+ event).removeClass('.show');
        $('.market_'+ event).html(market);
    }

    addFav=(id)=>{
            var category_name = id;
            var parent = $('.play_league');

            $(".favourite_icon").addClass('starBtnOn');
            $.fn.animateAppendTo = function(sel, speed) {
                var newEle = parent.clone(true).appendTo(sel),
                    newPos = newEle.position();
                newEle.hide();
                parent.addClass('animated_move').animate(newPos, speed, function() {
                    newEle.show();
                    parent.remove();
                });
                return newEle;
            };

            if($(".favourite_icon").hasClass("starBtnOn") ) {
                // console.log('++');
                $(this).animateAppendTo('.favourite_container', 500);
            }
            else{
                // console.log('--');
                parent.animateAppendTo((category_name), 500);
            }
    }

    render() {
        return(

            Object.keys(this.state.leagues).map((league, ind) => {
                return     <div className="play_classification_league" key={`${league}-${ind}-all`} id={`${league}-league`}>
                    <div className="play_league" >
                        <div className="play_league_header">
                            <div className="competition_btn" onClick={()=>this.props.toggleLeagueMarket(league)}>
                                <div className="league_name">{this.state.leagues[league].name}</div>
                                <div className="league_header_buttons visible">
                                    <div className="event_label"></div>
                                    <div className="event_label"></div>
                                    <div className="event_label"></div>
                                </div>

                            </div>
                            {
                                this.state.leagues[league].events.map((event, i) => {
                                    let serverTimestamp = typeof this.state.serverTimestamp != 'undefined' ?
                                        this.state.serverTimestamp : typeof event.ServerTimestamp != 'undefined' ?
                                            event.ServerTimestamp : '';

                                     return   <div className={`play_league_group_wrapp opened ${league}-market`} key={`${event.FixtureId}-${i}-${league}-event-all`} >
                                         <div className="table_row">
                                             <div className="participant_group_wrapper">
                                                 <Link to={{
                                                     pathname:"/in-play/event_view",
                                                     search: 'id='+event.FixtureId,
                                                     state:"game"
                                                    }} className="participant_group" onClick={() => this.selectEvent(event.FixtureId)}>

                                                         {this.state.typeSport == 54094 || this.state.typeSport == 265917 || this.state.typeSport == 154830 ?
                                                                 <div className="player_indicator_wrapp allMarkets">
                                                                     <div className="player_indicator"></div>
                                                                     <div className="player_indicator active"></div>
                                                                 </div>

                                                                 :
                                                             <div className="timer_wrapper">
                                                             <span className="event_timer">


                                                                 {(this.state.typeSport == 6046 || this.state.typeSport == 35709) ?
                                                                     <FootballTime fromPage={`allMarkets`}
                                                                                   setIntervalCount={this.state.setIntervalCount}
                                                                                   event={event}
                                                                                   eventStartDate={event.Fixture.StartDate}
                                                                                   serverTimestamp={serverTimestamp}
                                                                     /> :
                                                                        this.state.typeSport == 48242 ?
                                                                         <BasketballTime
                                                                             setIntervalCount={this.state.setIntervalCount}
                                                                             event={event}
                                                                         />
                                                              : ''}

                                                             </span>
                                                             </div>
                                                             }

                                                         {/*<p className="extra_time">ET</p>*/}

                                                     <div className="participant_wrapper">
                                                         <div className="participant_stack">
                                                             <p className="participant_name">{ event.Fixture.Participants[0]['Name']}
                                                                 <span className="participant_goal" id={event.Fixture.Participants[0].Id}>GOAL </span>
                                                             </p>

                                                             <div className="participant_score">
                                                                 <span className="event_score yellow_text">{typeof event.Livescore != 'undefined' && event.Livescore != null && typeof event.Livescore.Scoreboard != 'undefined' ? event.Livescore.Scoreboard.Results[0].Value : "0"}</span>
                                                             </div>
                                                         </div>

                                                         <div className="participant_stack">
                                                             <p className="participant_name">{event.Fixture.Participants[1]['Name']}
                                                                 <span className="participant_goal" id={event.Fixture.Participants[1].Id}>GOAL</span>
                                                             </p>
                                                             <div className="participant_score">
                                                                 <span className="event_score yellow_text">{typeof event.Livescore != 'undefined' && event.Livescore != null && typeof event.Livescore.Scoreboard != 'undefined' ? event.Livescore.Scoreboard.Results[1].Value : "0"}</span>
                                                             </div>
                                                         </div>

                                                     </div>
                                                     <div className="play_icon_wrapper">
                                                         <div className="play_icon video"></div>
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
                                                 </Link>
                                             </div>
                                             <div className="event_odds">
                                                 <div className="column">
                                                     <div className="marketSwitcherButton" onClick={()=>this.marketSwitchList(event.FixtureId)}>
                                                         {this.state.typeSport == 54094 ?
                                                             <div className={`marketSwitcherButton_Text market_${event.FixtureId}`}>Game Winner</div>
                                                             : this.state.typeSport == 154830 ?
                                                                 <div className={`marketSwitcherButton_Text market_${event.FixtureId}`}>Match Winner</div>
                                                                 : this.state.typeSport == 35709 ?
                                                                     <div className={`marketSwitcherButton_Text market_${event.FixtureId}`}>Handicap 2-Ways</div>
                                                                     :
                                                                    <div className={`marketSwitcherButton_Text market_${event.FixtureId}`}>Full Time Result</div>
                                                         }
                                                         {/*тут не ясно где брать алиасы*/}
                                                         {/*<div className={`marketSwitcherButton_Text market_${event.FixtureId}`}>{this.state.currentMarket}</div>*/}

                                                         <div className={`marketSwitcher_list ${event.FixtureId}`} style={{zIndex: 999}}>
                                                             {
                                                                 Object.keys(event.Markets).map((market, ind) => {

                                                                     let marketName = typeof event.Markets[market].alias == 'string' && event.Markets[market].alias.length ? event.Markets[market].alias : event.Markets[market].Name;

                                                                     return typeof event.Markets[market]['template'] != 'undefined' &&
                                                                         (this.state.marketsTemplateName.indexOf(event.Markets[market]['template'].name) !== -1
                                                                             //&& (Object.keys(event.Markets[market].bets).length < 4 && Object.keys(event.Markets[market].bets).length > 0)
                                                                             || marketName == this.state.currentMarket) ?

                                                                            <div key={`${ind}-market-${event.FixtureId}`}
                                                                                 className="MarketSwitcherItem"
                                                                                 onClick={() => this.changeMarket(marketName, event.FixtureId)}>
                                                                                    {marketName}
                                                                            </div> : ''
                                                                 })
                                                             }
                                                         </div>
                                                     </div>
                                                 </div>
                                                 <ManagMatch
                                                     fromPage="all"
                                                     eventId={event.FixtureId}
                                                     typeSport={this.state.typeSport}
                                                     participants={event.Fixture.Participants}
                                                     currentMarket={typeof this.state.selectedEventMarket[event.FixtureId] != "undefined" ? this.state.selectedEventMarket[event.FixtureId] : this.state.currentMarket}
                                                     markets={event.Markets}
                                                     addToBetSlip={(info, bet, typeBet) => this.props.addToBetSlip(info, bet, typeBet)}
                                                 />

                                             </div>
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
export default AllMarketsComponent;
