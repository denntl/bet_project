import React from 'react';
import SoccerHeader from "./topHeader/soccerHeader";
import moment from "moment/moment";
import {getEvent} from "../../helpers/data";

import CustomTab from "../../pages/sports/partials/soccer/customTab";

class OneGamesBets extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentEvent: this.props.currentGame,
            currentEventName: this.props.currentGame.Fixture.Participants[0].Name + " v " + this.props.currentGame.Fixture.Participants[1].Name,
            allEventsDate: this.props.allEventsDate,
            activeTab: this.props.sportId == 48242 ? "main props" : "main",
            sportId: this.props.sportId,
            activeFilter: this.props.activeFilter,
            receiveEvent: false,
            odds: this.props.odds,
            activeTabBasket:"",
            dropDown:false,
            dropDownLeague:false,
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            currentEvent: typeof this.props.fromTodayMatches != 'undefined' ? this.state.currentEvent : nextProps.currentGame,
            activeFilter: nextProps.activeFilter,
            odds: nextProps.odds
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (window.localStorage.getItem("currentStake") != null || window.localStorage.getItem("currentStake") != undefined) {
            let currentStake = JSON.parse(window.localStorage.getItem("currentStake"));

            for (var i in currentStake.bets) {
                $('.Participant.grid3').removeClass("selected_bet");
                $('#'+ i +'-in_play').addClass("selected_bet");
                $('#'+ i +'-prematch').addClass("selected_bet");
            }
        }
    }

    componentDidMount() {
        function displayVals() {
           var singleValues = $('.MarketSliders_range-slider input').val();
           var maxSteps = $(this).attr('max');
           var colorRangeBefore = (100/maxSteps)*singleValues;
           $(this).css('background','linear-gradient(90deg, rgba(20,128,94,1) '+colorRangeBefore+'%, rgba(117,117,117,1) '+colorRangeBefore+'%)');
          $(this).parent().find('option').removeClass('active');
          $(this).parent().find('option').each(function() {
               if ($(this).val() == singleValues) {
                   $(this).addClass('active');
               }
           });
         }
        $('.MarketSliders_range-slider input').change(displayVals);
        displayVals();
        
          $('.MarketSliders_range-slider option').click(function(){
              $(this).parent().find('option').removeClass('active');
              $(this).addClass('active');
              var optionValues = $(this).val();
              var Single = $(this).parents('.MarketSliders_range-slider').find('input');
              Single.val(optionValues);
          var maxSteps = Single.attr('max');
          var colorRangeBefore = (100/maxSteps)*optionValues;
          Single.css('background','linear-gradient(90deg, rgba(20,128,94,1) '+colorRangeBefore+'%, rgba(117,117,117,1) '+colorRangeBefore+'%)');
        });
        $('.OthersOnRequest_Link').on('click', function () {
            $(this).parent().find('.OthersOnRequestAlert').addClass('OthersOnRequestAlert-visible');
            setTimeout(function(){
               $('.OthersOnRequestAlert.OthersOnRequestAlert-visible').removeClass('OthersOnRequestAlert-visible');
              }, 5000);
        });

        if(typeof this.props.fromTodayMatches != 'undefined') {
            /**
             * @TODO change decimal with state
             *
             */
            getEvent(this.state.odds, this.state.currentEvent.FixtureId, function (err, data) {
                if (!err) {
                    this.setState({
                        receiveEvent: true,
                        currentEvent: data
                    })
                }
            }.bind(this));
        }

    }
    toggle = (type) => {
        if (type == "change_market") {
            this.setState({dropDown: !this.state.dropDown})
        }
        if (type == "change_league") {
            this.setState({dropDownLeague: !this.state.dropDownLeague})
        }
    }
    changeTab = (tab) => {
        this.setState({
            activeTab: tab,
            activeTabBasket: tab
        })
    }

    changeGame = (id) => {
        if(this.props.fromPage == 'today' || this.props.fromPage == 'euro-list'){
            getEvent(this.state.odds, id, function (err, data) {
                if (!err) {
                    this.setState({
                        receiveEvent: true,
                        currentEvent: data
                    })
                }
            }.bind(this));
        }
        this.props.changeGame(id);
    }

    render() {

        return(
            <div id="page_soccer_Azerbaijan_v_Faroe_Islands"  className="page">

                <SoccerHeader
                    removeEventId={() => {this.props.removeEventId()}}
                    fromPage={this.props.fromPage}
                    sportName={this.props.sportName}
                    leagueName={this.props.leagueName}
                    gameName={this.state.currentEventName}
                    allEventsDate={this.state.allEventsDate}
                    allLeagues={{}}
                    getCurrentDayOfWeek={() => this.props.getCurrentDayOfWeek()}
                    activeFilter={this.state.activeFilter}
                    changeGame={(id) => this.changeGame(id)}
                />
                <div className="header">





                        <div className="ScrollableHorizontalNavBar MarketGroupHorizontalNavBar">


                            <div className="ScrollableHorizontalNavBar_ButtonContainer  nav nav-tabs"
                                 role="tablist">
                                {
                                    typeof this.state.currentEvent.Groups != 'array' &&
                                        this.state.currentEvent.Groups.length ?
                                            this.state.currentEvent.Groups.map((tab) => {
                                               return  <a href="javascript: void(0)" key={tab} className={`MarketGroupNavBarButton ${this.state.activeTab == tab.toLowerCase() ? "active" : ""}`} onClick={() => this.changeTab(tab.toLowerCase())}>{tab[0].toUpperCase() + tab.slice(1)}</a>

                                            }) : ''
                                }


                                {/*<a href="javascript: void(0)" className={`MarketGroupNavBarButton ${this.state.activeTabBasket == "lines" ? "active" : ""}`} onClick={() => this.changeTab("lines")}>Line</a>*/}
                                {/*<a href="javascript: void(0)" className={`MarketGroupNavBarButton ${this.state.activeTabBasket == "props" ? "active" : ""}`} onClick={() => this.changeTab("props")}>Props</a>*/}
                                {/*<a href="javascript: void(0)" className={`MarketGroupNavBarButton ${this.state.activeTabBasket == "future"? "active" : ""}`} onClick={() => this.changeTab("future")}>Future</a>*/}



                            </div>
                        </div>




                <div className="MarketGroupExtraData">
                    <div className="MarketGroupExtraData_LeftContainer">
                        <div className="MarketGroupExtraData_Time">
                            <div className="MarketGroupExtraData_TimeLabel">Start Time</div>
                            <div className="MarketGroupExtraData_TimeStamp">
                                {moment(moment.utc(this.state.currentEvent.Fixture.StartDate)).local().format("DD MMM HH:mm")}
                            </div>
                        </div>
                    </div>

                    <div className="MarketGroupExtraData_RightContainer">
                        <div className="MatchAlertsButton">
                            <div className="MatchAlertsButton_Icon CouponMatchAlertsButton_Icon"></div>
                            <div className="MatchAlertsButton_Label CouponMatchAlertsButton_Label">Match
                                Alerts
                            </div>
                        </div>
                        <div className="MarketGroupExtraData_Icons ">
                            <div
                                className="MarketGroupExtraData_IconsVideoAvailable MarketGroupExtraData_IconsGeneric "></div>
                        </div>
                    </div>

                </div>

                </div>

                    {
                        <div  className="content tab-content clearfix">


                            {this.state.activeTabBasket == "lines" ?
                                <div>
                                    <div className="MarketGroup">
                                        <div className="MarketGroupButton"><span className="MarketGroupButton_Text">Game Lines</span>
                                        </div>
                                        <div className="MarketsubMenu">
                                            <ul>
                                                <li>Game Lines</li>
                                                <li>1st Half</li>
                                                <li>2nd Half</li>
                                                <li>1st Quarter</li>
                                                <li>2nd Quarter</li>
                                                <li>3rd Quarter</li>
                                                <li>34th Quarter</li>
                                            </ul>
                                        </div>
                                        <div className="play_classification_league">
                                            <div className="play_league">
                                                <div className="play_league_header">
                                                    <div className="competition_btn">
                                                        <div className="league_name">Korea KBL</div>
                                                        <div className="league_header_buttons visible">
                                                            <div className="event_label">Spread</div>
                                                            <div className="event_label">Total</div>
                                                            <div className="event_label">Money Line</div>
                                                        </div>
                                                    </div>
                                                    <div className="play_league_group_wrapp opened">
                                                        <div className="table_row">
                                                            <div className="participant_group_wrapper">
                                                                <div className="participant_group">
                                                                    <div className="timer_wrapper">
                                                                        <div className="timer_wrapper">
                                                                            <span className="event_timer">02:21</span>
                                                                        </div>
                                                                        <div className="play_icon_wrapper pre-match">
                                                                            <div className="play_icon video"></div>
                                                                        </div>
                                                                    </div>
                                                                    <a className="participant_wrapper"
                                                                       href="/in-play/event_view?id=4402693">
                                                                        <div className="participant_stack"><p
                                                                            className="participant_name">Busan KT
                                                                            Sonicboom</p>

                                                                        </div>
                                                                        <div className="participant_stack"><p
                                                                            className="participant_name">Jeonju KCC
                                                                            Egis</p>

                                                                        </div>
                                                                    </a>
                                                                    <div className="play_icon_wrapper">
                                                                        <div className="icon_block icon_status"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="marker_row_wrapp_wrapp mainMarketColumns">
                                                                <div className="Market_table сolumnW33">
                                                                    <div id="12269486384402693-in_play"
                                                                         className="Participant grid2"><span
                                                                        className="participant_name"> +4.5 </span><span
                                                                        className="participant_odds yellow_text">1.83</span>
                                                                    </div>
                                                                    <div id="9476560584402693-in_play"
                                                                         className="Participant grid2"><span
                                                                        className="participant_name"> -4.5 </span><span
                                                                        className="participant_odds yellow_text">1.83</span>
                                                                    </div>
                                                                </div>
                                                                <div className="Market_table сolumnW33">
                                                                    <div id="18292834784402693-in_play"
                                                                         className="Participant grid3"><span
                                                                        className="participant_name">O 222.5 </span><span
                                                                        className="participant_odds yellow_text">1.83</span>
                                                                    </div>
                                                                    <div id="10246492344402693-in_play"
                                                                         className="Participant grid3"><span
                                                                        className="participant_name">U 222.5 </span><span
                                                                        className="participant_odds yellow_text">1.83</span>
                                                                    </div>
                                                                </div>
                                                                <div className="Market_table сolumnW33">
                                                                    <div className="Participant grid2"
                                                                         id="3977182864402693-in_play"><span
                                                                        className="participant_name "></span><span
                                                                        className="participant_odds yellow_text">3.25</span>
                                                                    </div>
                                                                    <div className="Participant grid2"
                                                                         id="3977182894402693-in_play"><span
                                                                        className="participant_name "></span><span
                                                                        className="participant_odds yellow_text">1.33</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="event_count_btn">
                                                                <div className="event_count">15</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>




                                : this.state.activeTabBasket == "props" ?
                                    <div>
                                        <div className="MarketGroup">
                                            <div className="MarketGroupButton dropDown prematch">
                                                <div className="leftContent">
                                                    <div className="CouponMarketGroupButton_Title">
                                                        <span>Full Time Result</span>
                                                    </div>
                                                    <div className="dropDown_change_market" onClick={(e)=>{this.toggle('change_market'); e.stopPropagation() }}>
                                                        <span className="ChangeMarket">Change Market</span>
                                                    </div>
                                                </div>
                                                <div className="rightContent">
                                                    <div className="dropDown_LeagueFixture" onClick={(e)=>{this.toggle('change_league'); e.stopPropagation() }}>DET Pistons @ CLE Cavaliers</div>
                                                </div>
                                            </div>
                                            {this.state.dropDown ?
                                            <div className="ChangeMarket_drop_down_list">
                                                <div className="ChangeMarket_item">dddd</div>
                                            </div>
                                             :""}
                                            {this.state.dropDownLeague ?
                                                <div className="ChangeLeague_drop_down_list">
                                                    <div className="ChangeMarket_item">dddd</div>
                                                </div>
                                                :""}
                                            <div className="MarketGroup pre-match">
                                                <div className="MarketGroupButton">
                                                    <span className="MarketGroupButton_Text pre-match">Alternative Goals Over/Under</span>
                                                    <span className="cm-MarketSubGroup_BookCloses">Start Time  16 Mar 22:35</span>
                                                </div>
                                                <div className="MarketGroup_Wrapper pre-match">
                                                    <div>
                                                        <div className="MarketLabel width_25 mobile_hide">
                                                            <div className="MarketColumnHeader ">&nbsp;</div>
                                                            <div className="ParticipantRowValue"><span
                                                                className="ParticipantRowValue_Name">4.5</span></div>
                                                        </div>
                                                        <div className="MarketValues width_37_5 mobileWidth50">
                                                            <div className="MarketColumnHeader mobile_hide"><span
                                                                className="mobile_hide">Over</span></div>
                                                            <div className="ParticipantOddsOnly"
                                                                 id="449964973945910-in_play"><span
                                                                className="ParticipantOddsOnly_Odds yellow_text">7.50</span>
                                                            </div>
                                                        </div>
                                                        <div className="MarketValues width_37_5 mobileWidth50">
                                                            <div className="MarketColumnHeader mobile_hide"><span
                                                                className="mobile_hide">Under</span></div>
                                                            <div className="ParticipantOddsOnly"
                                                                 id="11666307533945910-in_play"><span
                                                                className="ParticipantOddsOnly_Odds yellow_text">1.071</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="MarketGroup_Wrapper pre-match">
                                                    <div>
                                                        <div className="MarketLabel width_25 mobile_hide">
                                                            <div className="MarketColumnHeader ">&nbsp;</div>
                                                            <div className="ParticipantRowValue"><span
                                                                className="ParticipantRowValue_Name">4.5</span></div>
                                                        </div>
                                                        <div className="MarketValues width_37_5 mobileWidth50">
                                                            <div className="MarketColumnHeader mobile_hide"><span
                                                                className="mobile_hide">Over</span></div>
                                                            <div className="ParticipantOddsOnly"
                                                                 id="449964973945910-in_play"><span
                                                                className="ParticipantOddsOnly_Odds yellow_text">7.50</span>
                                                            </div>
                                                        </div>
                                                        <div className="MarketValues width_37_5 mobileWidth50">
                                                            <div className="MarketColumnHeader mobile_hide"><span
                                                                className="mobile_hide">Under</span></div>
                                                            <div className="ParticipantOddsOnly"
                                                                 id="11666307533945910-in_play"><span
                                                                className="ParticipantOddsOnly_Odds yellow_text">1.071</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                :this.state.activeTabBasket == "future" ?
                                        <div>
                                            <div className="MarketGroup">
                                                <div className="MarketGroupButton dropDown">
                                                    <div className="CouponMarketGroupButton_Title">
                                                        <span>Full Time Result</span>
                                                    </div>
                                                    <div className="dropDown_change_market" onClick={(e)=>{this.toggle('change_market'); e.stopPropagation() }}>
                                                        <span className="ChangeMarket">Change Market</span>
                                                    </div>
                                                </div>
                                                {this.state.dropDown ?
                                                    <div className="ChangeMarket_drop_down_list">
                                                        <div className="ChangeMarket_item">dddd</div>
                                                    </div>
                                                    :""}
                                                <div className="MarketGroup pre-match">
                                                    <div className="MarketGroupButton">
                                                        <span className="MarketGroupButton_Text pre-match">NBA Championship (including play-offs)</span>
                                                        <span className="cm-MarketSubGroup_BookCloses">Start Time  16 Mar 22:35</span>


                                                    </div>
                                                    <div className="MarketGroup_Wrapper">
                                                        <div>
                                                            <div className="MarketValues width_33_5 mobileWidth50">
                                                                <div className="MarketColumnHeader mobile_hide"><span
                                                                    className="mobile_hide"></span></div>
                                                                <div className="ParticipantOddsOnly">
                                                                    <span className="participant_name">No Goal</span>
                                                                    <span className="ParticipantOddsOnly_Odds yellow_text">1.071</span>
                                                                </div>
                                                            </div>
                                                            <div className="MarketValues width_33_5 mobileWidth50">
                                                                <div className="MarketColumnHeader mobile_hide"><span
                                                                    className="mobile_hide"></span></div>
                                                                <div className="ParticipantOddsOnly">
                                                                    <span className="participant_name">No Goal</span>
                                                                    <span className="ParticipantOddsOnly_Odds yellow_text">1.071</span>
                                                                </div>
                                                            </div>
                                                            <div className="MarketValues width_33_5 mobileWidth50">
                                                                <div className="MarketColumnHeader mobile_hide">
                                                                    <span className="mobile_hide"></span>
                                                                </div>
                                                                <div className="ParticipantOddsOnly">
                                                                    <span className="participant_name">No Goal</span>
                                                                    <span className="ParticipantOddsOnly_Odds yellow_text">1.071</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    :typeof this.props.fromTodayMatches == 'undefined' ?
                                <CustomTab
                                    typeSport={this.state.sportId}
                                    currentEvent={this.state.currentEvent}
                                    showForm={(type, kind) => this.props.showForm(type, kind)}
                                    addToBetSlip={(info, bet, typeBet) => this.props.addToBetSlip(info, bet, typeBet)}
                                    activeTab={this.state.activeTab}
                                />
                                :  this.state.receiveEvent == true ?
                                    <CustomTab
                                        typeSport={this.state.sportId}
                                        currentEvent={this.state.currentEvent}
                                        showForm={(type, kind) => this.props.showForm(type, kind)}
                                        addToBetSlip={(info, bet, typeBet) => this.props.addToBetSlip(info, bet, typeBet)}
                                        activeTab={this.state.activeTab}
                                    />
                                    : ''
                            }


                        </div>
                    }


            </div>
        )

    }
}

export default OneGamesBets;
