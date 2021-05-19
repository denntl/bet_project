import React from 'react';



class TableOverviewGames extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
          <div>
                <div className="play_classification_league">
                    <div className="play_league">
                        <div className="play_league_header">
                            <div className="competition_btn">
                                <div className="league_name">Algeria Youth League</div>
                                <div className="league_header_buttons visible">
                                    <div className="event_label">1X2</div>
                                    <div className="event_label">Next Goal</div>
                                    <div className="event_label">Match Goals</div>
                                </div>
                                <div className="favourite_icon_wrapper">
                                    <div className="favourite_icon"></div>

                                </div>
                            </div>
                            <div className="play_league_group_wrapp opened">
                                <div className="table_row">
                                    <div className="participant_group_wrapper">
                                        <div className="participant_group">
                                            <div className="timer_wrapper">
                                                <span className="event_timer">35:27</span>
                                                <p className="extra_time">ET</p>
                                            </div>
                                            <div className="participant_wrapper">
                                                <div className="participant_stack">
                                                    <p className="participant_name">FK Qarabag II
                                                        <span className="participant_goal">GOAL</span>
                                                    </p>

                                                    <div className="participant_score">
                                                        <span className="event_score yellow_text">0</span>
                                                    </div>
                                                </div>

                                                <div className="participant_stack">
                                                    <p className="participant_name">FK Qarabag II
                                                        <span className="participant_goal">GOAL</span>
                                                    </p>
                                                    <div className="participant_score">
                                                        <span className="event_score yellow_text">0</span>
                                                    </div>
                                                </div>
                                                <div className="participant_stack">
                                                    <p className="participant_name">Draw</p>

                                                </div>

                                            </div>
                                            <div className="play_icon_wrapper">
                                                <div className="play_icon"></div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="event_odds">
                                        <div className="column">
                                            <div className="value_wrapp">
                                                <span className="participant_odds yellow_text">+200</span>
                                            </div>
                                            <div className="value_wrapp">
                                                <span className="participant_odds yellow_text">+200</span>
                                            </div>
                                            <div className="value_wrapp">
                                                <span className="participant_odds yellow_text">+200</span>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="value_wrapp">
                                                <span className="participant_odds yellow_text">+200</span>
                                            </div>
                                            <div className="value_wrapp">
                                                <span className="participant_odds yellow_text">+200</span>
                                            </div>
                                            <div className="value_wrapp">
                                                <span className="participant_odds yellow_text">+200</span>
                                            </div>

                                        </div>
                                        <div className="column">
                                            <div className="value_wrapp">
                                                <span className="participant_odds yellow_text">+200</span>
                                            </div>
                                            <div className="value_wrapp">
                                                <span className="participant_odds yellow_text">+200</span>
                                            </div>
                                            <div className="value_wrapp">
                                                <span className="participant_odds yellow_text">+200</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="event_count_btn">
                                        <div className="favourite_icon"></div>
                                        <div className="event_count">41</div>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
        {/*
                <div className="play_classification_league">
                    <div className="play_league">
                        <div className="play_league_header">
                            <div className="competition_btn">
                                <div className="league_name">Italy Serie C</div>

                                <div className="favourite_icon_wrapper">
                                    <div className="favourite_icon"></div>

                                </div>
                            </div>
                            <div className="play_league_group_wrapp opened">
                                <div className="table_row">
                                    <div className="participant_group_wrapper">
                                        <div className="participant_group">
                                            <div className="timer_wrapper">
                                                <span className="event_timer">35:27</span>
                                                <p className="extra_time">ET</p>
                                            </div>
                                            <div className="participant_wrapper">
                                                <div className="participant_stack">
                                                    <p className="participant_name">FK Qarabag II
                                                        <span className="participant_goal">GOAL</span>
                                                    </p>

                                                    <div className="participant_score">
                                                        <span className="event_score yellow_text">0</span>
                                                    </div>
                                                </div>

                                                <div className="participant_stack">
                                                    <p className="participant_name">FK Qarabag II
                                                        <span className="participant_goal">GOAL</span>
                                                    </p>
                                                    <div className="participant_score">
                                                        <span className="event_score yellow_text">0</span>
                                                    </div>
                                                </div>
                                                <div className="participant_stack">
                                                    <p className="participant_name">Draw</p>

                                                </div>

                                            </div>
                                            <div className="play_icon_wrapper">
                                                <div className="play_icon"></div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="event_odds">
                                        <div className="MarketSwitcherClosableContainer">
                                            <div className="MarketSwitcherButton ">
                                                <div className="MarketSwitcherButton_Text ">Fulltime Result</div>
                                                <div className="MarketSwitcherButton_Icon"></div>
                                            </div>
                                            <div className="MarketSwitcherScroller scroll_block">
                                                <div className="MarketSwitcherScroller_ContentContainer ">
                                                    <div className="MarketSwitcherScroller_Content">
                                                        <div className="MarketSwitcherItem selected">
                                                            <div className="MarketSwitcherItem_Label ">Fulltime Result</div>
                                                        </div>
                                                        <div className="MarketSwitcherItem ">
                                                            <div className="MarketSwitcherItem_Label ">Double Chance</div>
                                                        </div>
                                                        <div className="MarketSwitcherItem ">
                                                            <div className="MarketSwitcherItem_Label ">Half Time Result</div>
                                                        </div>
                                                        <div className="MarketSwitcherItem ">
                                                            <div className="MarketSwitcherItem_Label ">1st Goal</div>
                                                        </div>
                                                        <div className="MarketSwitcherItem ">
                                                            <div className="MarketSwitcherItem_Label ">Match Goals</div>
                                                        </div>
                                                        <div className="MarketSwitcherItem ">
                                                            <div className="MarketSwitcherItem_Label ">First Half Goals</div>
                                                        </div>
                                                        <div className="MarketSwitcherItem ">
                                                            <div className="MarketSwitcherItem_Label ">Asian Handicap (0-0)</div>
                                                        </div>
                                                        <div className="MarketSwitcherItem ">
                                                            <div className="MarketSwitcherItem_Label ">Goal Line (0-0)</div>
                                                        </div>
                                                        <div className="MarketSwitcherItem ">
                                                            <div className="MarketSwitcherItem_Label ">1st Half Asian Handicap (0-0)</div>
                                                        </div>
                                                        <div className="MarketSwitcherItem ">
                                                            <div className="ipo-MarketSwitcherItem_Label ">1st Half Goal Line (0-0)</div>
                                                        </div>
                                                        <div className="MarketSwitcherItem ">
                                                            <div className="MarketSwitcherItem_Label ">3-Way Handicap</div>
                                                        </div>
                                                        <div className="MarketSwitcherItem ">
                                                            <div className="MarketSwitcherItem_Label ">Draw No Bet</div>
                                                        </div>
                                                        <div className="MarketSwitcherItem ">
                                                            <div className="MarketSwitcherItem_Label ">Last Team to Score</div>
                                                        </div>
                                                        <div className="MarketSwitcherItem ">
                                                            <div className="MarketSwitcherItem_Label ">Goals Odd/Even</div>
                                                        </div>
                                                        <div className="MarketSwitcherItem ">
                                                            <div className="MarketSwitcherItem_Label ">To Win 2nd Half</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="column">

                                            <div className="value_wrapp">
                                                <p className="participant_name">
                                                    <span className="player_indicator active"></span>
                                                    Argentino Quilmes Reserves
                                                </p>
                                                <span className="participant_odds yellow_text">+200</span>
                                            </div>
                                            <div className="value_wrapp">
                                                <span className="participant_odds yellow_text">+200</span>
                                            </div>
                                            <div className="value_wrapp">
                                                <span className="participant_odds yellow_text">+200</span>
                                            </div>

                                        </div>
                                        <div className="column">
                                            <div className="value_wrapp">
                                                <span className="participant_odds yellow_text">+200</span>
                                            </div>
                                            <div className="value_wrapp">
                                                <span className="participant_odds yellow_text">+200</span>
                                            </div>
                                            <div className="value_wrapp">
                                                <span className="participant_odds yellow_text">+200</span>
                                            </div>


                                        </div>


                                    </div>
                                    <div className="event_count_btn">
                                        <div className="favourite_icon"></div>
                                        <div className="event_count">41</div>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
*/ }
          </div>

        )

    }
}

export default TableOverviewGames;
