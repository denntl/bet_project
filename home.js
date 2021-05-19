import React from 'react';
import TableGames from "../../shared/tables/tableGames";



class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="home_page">
                <div className="home_page_header"></div>
                <div className="columns_container">

                    { /*------------column_one-----------*/}
                    <div className="column_one">
                        <div className="offer_banner">
                            <div className="text_block">
                                <p className="title yellow_text">New Customers</p>
                                <a href="#" className="offer_link">Up to €25 in Bet Credits</a>
                                <p className="offer_note">Returns exclude Bet Credits stake</p>
                                <p className="offer_terms">T&Cs, time limits and exclusions apply</p>
                            </div>
                            <div className="action_block">
                                <a href="#" className="join_btn yellow_text">Join Today</a>
                                <a href="#" className="read_more">More Details</a>
                            </div>
                        </div>

                        {/*-live_in_play_module*/}
                        <div className="live_in_play_module">
                            <div className="main_header">
                                <a href="#" className="main_header_title">Live <span className="yellow_text">In-Play</span></a>
                                <div className="main_header_btn">
                                    <a href="#" className="all_btn light_green_text active">All</a>
                                    <a href="#" className="top_btn light_green_text">Top</a>
                                    <a href="#" className="stream_btn light_green_text"></a>
                                </div>
                                <a href="#" className="main_header_event_count light_green_text">
                                    63 Events
                                </a>

                            </div>
                            { /*-slider-block*/}
                            <div className="owl-carousel sport_classification_slider">
                                <div className="item" data-hash="soccer">
                                    <a className="slider_content selected selected-1" data-sport="#soccer">
                                        <img src="/img/soccer.svg" className="slider_img" alt="soccer"/>
                                            <p className="title">Soccer</p>
                                    </a>
                                </div>
                                <div className="item" data-hash="tennis">
                                    <a className="slider_content selected-2" data-sport="#tennis">
                                        <img src="/img/tennis.svg" className="slider_img" alt="tennis"/>
                                            <p className="title">Tennis</p>
                                    </a>
                                </div>
                                <div className="item" data-hash="badminton">
                                    <a className="slider_content selected-3" data-sport="#badminton">
                                        <img src="/img/badminton.svg" className="slider_img" alt="tennis"/>
                                            <p className="title">Badminton</p>
                                    </a>
                                </div>
                                <div className="item">
                                    <a  className="slider_content selected-4" data-sport="#">
                                        <img src="/img/baseball.svg" className="slider_img" alt="tennis"/>
                                            <p className="title">Baseball</p>
                                    </a>
                                </div>
                                <div className="item">
                                    <a className="slider_content selected-5" data-sport="#">
                                        <img src="/img/criket.svg" className="slider_img" alt="tennis"/>
                                            <p className="title">Cricket</p>
                                    </a>
                                </div>
                                <div className="item">
                                    <a className="slider_content selected-6" data-sport="#">
                                        <img src="/img/futsal.svg" className="slider_img" alt="tennis"/>
                                            <p className="title">Futsal</p>
                                    </a>
                                </div>
                                <div className="item">
                                    <a className="slider_content selected-7" data-sport="#">
                                        <img src="/img/golf.svg" className="slider_img" alt="tennis"/>
                                            <p className="title">Golf</p>
                                    </a>
                                </div>
                                <div className="item">
                                    <a className="slider_content selected-8" data-sport="#">
                                        <img src="/img/greyhounds.svg" className="slider_img" alt="tennis"/>
                                            <p className="title">Greyhounds</p>
                                    </a>
                                </div>
                                <div className="item">
                                    <a className="slider_content selected-9" data-sport="#">
                                        <img src="/img/handball.svg" className="slider_img" alt="tennis"/>
                                            <p className="title">Handball</p>
                                    </a>
                                </div>
                                <div className="item">
                                    <a className="slider_content selected-10" data-sport="#">
                                        <img src="/img/handball.svg" className="slider_img" alt="tennis"/>
                                            <p className="title">Handball</p>
                                    </a>
                                </div>
                                <div className="item">
                                    <a className="slider_content selected-11" data-sport="#">
                                        <img src="/img/handball.svg" className="slider_img" alt="tennis"/>
                                            <p className="title">Handball</p>
                                    </a>
                                </div>
                            </div>
                            {/*-column_one all tables*/}
                            <div className="all_tables">
                                <div className="play_classification" id="soccer">
                                    <div className="play_classification_header sport_green_header">
                                        <span>Soccer</span>
                                        <span className="InPlayEvent_HeaderButton "></span>
                                    </div>
                                    <div className="play_classification_league">
                                        <div className="play_league">
                                            <div className="play_league_header">
                                                <span className="InPlayLeague_Header">Algeria Youth League TEST</span>
                                            </div>
                                            <div className="play_league_group_wrapp opened">
                                                <div className="play_league_group">
                                                    <span className="InPlayEvent_HeaderButton "></span>
                                                    <div className="play_event">

                                                        <div className="left_content">
                                                            <div className="event_label">
                                                                ES Mostaganem U21 v ASM Oran U21 TEST
                                                            </div>
                                                        </div>
                                                        <div className="right_content">
                                                            <span className="event_score yellow_text">0-1</span>
                                                            <span className="event_timer">35:27</span>
                                                        </div>
                                                    </div>
                                                    <div className="participant_group opened">
                                                        <div className="column">
                                                            <span className="participant_name">FK Qarabag II</span>
                                                            <span className="participant_odds yellow_text">+200</span>
                                                        </div>
                                                        <div className="column">
                                                            <span className="participant_name">Draw</span>
                                                            <span className="participant_odds yellow_text">+200</span>
                                                        </div>
                                                        <div className="column">
                                                            <span className="participant_name">Shuvalan</span>
                                                            <span className="participant_odds yellow_text">+100</span>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="play_league_group">
                                                    <span className="InPlayEvent_HeaderButton "></span>
                                                    <div className="play_event">
                                                        <div className="left_content">
                                                            <div className="event_label">
                                                                ES Mostaganem U21 v ASM Oran U21
                                                            </div>
                                                        </div>
                                                        <div className="right_content">
                                                            <span className="event_score yellow_text">0-1</span>
                                                            <span className="event_timer">35:27</span>
                                                        </div>
                                                    </div>
                                                    <div className="participant_group opened">
                                                        <div className="column">
                                                            <span className="participant_name">FK Qarabag II</span>
                                                            <span className="participant_odds yellow_text">+200</span>
                                                        </div>
                                                        <div className="column">
                                                            <span className="participant_name">Draw</span>
                                                            <span className="participant_odds yellow_text">+200</span>
                                                        </div>
                                                        <div className="column">
                                                            <span className="participant_name">Shuvalan</span>
                                                            <span className="participant_odds yellow_text">+100</span>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="play_classification_league">
                                        <div className="play_league">
                                            <div className="play_league_header">
                                                <span className="InPlayLeague_Header">Algeria Youth League</span>
                                            </div>
                                            <div className="play_league_group_wrapp opened">
                                                <div className="play_league_group">
                                                    <span className="InPlayEvent_HeaderButton "></span>
                                                    <div className="play_event">
                                                        <div className="left_content">
                                                            <div className="event_label">
                                                                ES Mostaganem U21 v ASM Oran U21
                                                            </div>
                                                        </div>
                                                        <div className="right_content">
                                                            <span className="event_score yellow_text">0-1</span>
                                                            <span className="event_timer">35:27</span>
                                                        </div>
                                                    </div>
                                                    <div className="participant_group opened">
                                                        <div className="column">
                                                            <span className="participant_name">FK Qarabag II</span>
                                                            <span className="participant_odds yellow_text">+200</span>
                                                        </div>
                                                        <div className="column">
                                                            <span className="participant_name">Draw</span>
                                                            <span className="participant_odds yellow_text">+200</span>
                                                        </div>
                                                        <div className="column">
                                                            <span className="participant_name">Shuvalan</span>
                                                            <span className="participant_odds yellow_text">+100</span>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="play_league_group">
                                                    <span className="InPlayEvent_HeaderButton "></span>
                                                    <div className="play_event">
                                                        <div className="left_content">
                                                            <div className="event_label">
                                                                ES Mostaganem U21 v ASM Oran U21
                                                            </div>
                                                        </div>
                                                        <div className="right_content">
                                                            <span className="event_score yellow_text">0-1</span>
                                                            <span className="event_timer">35:27</span>
                                                        </div>
                                                    </div>
                                                    <div className="participant_group opened">
                                                        <div className="column">
                                                            <span className="participant_name">FK Qarabag II</span>
                                                            <span className="participant_odds yellow_text">+200</span>
                                                        </div>
                                                        <div className="column">
                                                            <span className="participant_name">Draw</span>
                                                            <span className="participant_odds yellow_text">+200</span>
                                                        </div>
                                                        <div className="column">
                                                            <span className="participant_name">Shuvalan</span>
                                                            <span className="participant_odds yellow_text">+100</span>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="play_classification" id="tennis">
                                    <div className="play_classification_header sport_olive_header">
                                        <span>Tennis</span>
                                        <span className="InPlayEvent_HeaderButton "></span>
                                    </div>
                                    <div className="play_classification_league">
                                        <div className="play_league">
                                            <div className="play_league_header">
                                                <span className="InPlayLeague_Header">Algeria Youth League</span>
                                            </div>
                                            <div className="play_league_group_wrapp opened">
                                                <div className="play_league_group">
                                                    <span className="InPlayEvent_HeaderButton "></span>
                                                    <div className="play_event">
                                                        <div className="left_content">
                                                            <div className="event_label">
                                                                ES Mostaganem U21 v ASM Oran U21
                                                            </div>
                                                        </div>
                                                        <div className="right_content">
                                                            <span className="event_score yellow_text">0-1</span>
                                                            <span className="event_timer">35:27</span>
                                                        </div>
                                                    </div>
                                                    <div className="participant_group opened">
                                                        <div className="column">
                                                            <span className="participant_name">FK Qarabag II</span>
                                                            <span className="participant_odds yellow_text">+200</span>
                                                        </div>
                                                        <div className="column">
                                                            <span className="participant_name">Draw</span>
                                                            <span className="participant_odds yellow_text">+200</span>
                                                        </div>
                                                        <div className="column">
                                                            <span className="participant_name">Shuvalan</span>
                                                            <span className="participant_odds yellow_text">+100</span>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="play_league_group">
                                                    <span className="InPlayEvent_HeaderButton "></span>
                                                    <div className="play_event">
                                                        <div className="left_content">
                                                            <div className="event_label">
                                                                ES Mostaganem U21 v ASM Oran U21
                                                            </div>
                                                        </div>
                                                        <div className="right_content">
                                                            <span className="event_score yellow_text">0-1</span>
                                                            <span className="event_timer">35:27</span>
                                                        </div>
                                                    </div>
                                                    <div className="participant_group opened">
                                                        <div className="column">
                                                            <span className="participant_name">FK Qarabag II</span>
                                                            <span className="participant_odds yellow_text">+200</span>
                                                        </div>
                                                        <div className="column">
                                                            <span className="participant_name">Draw</span>
                                                            <span className="participant_odds yellow_text">+200</span>
                                                        </div>
                                                        <div className="column">
                                                            <span className="participant_name">Shuvalan</span>
                                                            <span className="participant_odds yellow_text">+100</span>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="play_classification_league">
                                        <div className="play_league">
                                            <div className="play_league_header">
                                                <span className="InPlayLeague_Header">Algeria Youth League</span>
                                            </div>
                                            <div className="play_league_group_wrapp opened">
                                                <div className="play_league_group">
                                                    <span className="InPlayEvent_HeaderButton "></span>
                                                    <div className="play_event">
                                                        <div className="left_content">
                                                            <div className="event_label">
                                                                ES Mostaganem U21 v ASM Oran U21
                                                            </div>
                                                        </div>
                                                        <div className="right_content">
                                                            <span className="event_score yellow_text">0-1</span>
                                                            <span className="event_timer">35:27</span>
                                                        </div>
                                                    </div>
                                                    <div className="participant_group opened">
                                                        <div className="column">
                                                            <span className="participant_name">FK Qarabag II</span>
                                                            <span className="participant_odds yellow_text">+200</span>
                                                        </div>
                                                        <div className="column">
                                                            <span className="participant_name">Draw</span>
                                                            <span className="participant_odds yellow_text">+200</span>
                                                        </div>
                                                        <div className="column">
                                                            <span className="participant_name">Shuvalan</span>
                                                            <span className="participant_odds yellow_text">+100</span>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="play_league_group">
                                                    <span className="InPlayEvent_HeaderButton "></span>
                                                    <div className="play_event">
                                                        <div className="left_content">
                                                            <div className="event_label">
                                                                ES Mostaganem U21 v ASM Oran U21
                                                            </div>
                                                        </div>
                                                        <div className="right_content">
                                                            <span className="event_score yellow_text">0-1</span>
                                                            <span className="event_timer">35:27</span>
                                                        </div>
                                                    </div>
                                                    <div className="participant_group opened">
                                                        <div className="column">
                                                            <span className="participant_name">FK Qarabag II</span>
                                                            <span className="participant_odds yellow_text">+200</span>
                                                        </div>
                                                        <div className="column">
                                                            <span className="participant_name">Draw</span>
                                                            <span className="participant_odds yellow_text">+200</span>
                                                        </div>
                                                        <div className="column">
                                                            <span className="participant_name">Shuvalan</span>
                                                            <span className="participant_odds yellow_text">+100</span>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className="play_classification" id="badminton">
                                    <div className="play_classification_header sport_orange_header">
                                        <span>Badminton</span>
                                        <span className="InPlayEvent_HeaderButton "></span>
                                    </div>
                                    <div className="play_classification_league">
                                        <div className="play_league">
                                            <div className="play_league_header">
                                                <span className="InPlayLeague_Header">Algeria Youth League</span>
                                            </div>
                                            <div className="play_league_group_wrapp opened">
                                                <div className="play_league_group">
                                                    <span className="InPlayEvent_HeaderButton "></span>
                                                    <div className="play_event">
                                                        <div className="left_content">
                                                            <div className="event_label">
                                                                ES Mostaganem U21 v ASM Oran U21
                                                            </div>
                                                        </div>
                                                        <div className="right_content">
                                                            <span className="event_score yellow_text">0-1</span>
                                                            <span className="event_timer">35:27</span>
                                                        </div>
                                                    </div>
                                                    <div className="participant_group opened">
                                                        <div className="column">
                                                            <span className="participant_name">FK Qarabag II</span>
                                                            <span className="participant_odds yellow_text">+200</span>
                                                        </div>
                                                        <div className="column">
                                                            <span className="participant_name">Draw</span>
                                                            <span className="participant_odds yellow_text">+200</span>
                                                        </div>
                                                        <div className="column">
                                                            <span className="participant_name">Shuvalan</span>
                                                            <span className="participant_odds yellow_text">+100</span>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="play_league_group">
                                                    <span className="InPlayEvent_HeaderButton "></span>
                                                    <div className="play_event">
                                                        <div className="left_content">
                                                            <div className="event_label">
                                                                ES Mostaganem U21 v ASM Oran U21
                                                            </div>
                                                        </div>
                                                        <div className="right_content">
                                                            <span className="event_score yellow_text">0-1</span>
                                                            <span className="event_timer">35:27</span>
                                                        </div>
                                                    </div>
                                                    <div className="participant_group opened">
                                                        <div className="column">
                                                            <span className="participant_name">FK Qarabag II</span>
                                                            <span className="participant_odds yellow_text">+200</span>
                                                        </div>
                                                        <div className="column">
                                                            <span className="participant_name">Draw</span>
                                                            <span className="participant_odds yellow_text">+200</span>
                                                        </div>
                                                        <div className="column">
                                                            <span className="participant_name">Shuvalan</span>
                                                            <span className="participant_odds yellow_text">+100</span>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="play_classification_league">
                                        <div className="play_league">
                                            <div className="play_league_header">
                                                <span className="InPlayLeague_Header">Algeria Youth League</span>

                                            </div>
                                            <div className="play_league_group_wrapp opened">
                                                <div className="play_league_group">
                                                    <span className="InPlayEvent_HeaderButton "></span>
                                                    <div className="play_event">
                                                        <div className="left_content">
                                                            <div className="event_label">
                                                                ES Mostaganem U21 v ASM Oran U21
                                                            </div>
                                                        </div>
                                                        <div className="right_content">
                                                            <span className="event_score yellow_text">0-1</span>
                                                            <span className="event_timer">35:27</span>
                                                        </div>
                                                    </div>
                                                    <div className="participant_group opened">
                                                        <div className="column">
                                                            <span className="participant_name">FK Qarabag II</span>
                                                            <span className="participant_odds yellow_text">+200</span>
                                                        </div>
                                                        <div className="column">
                                                            <span className="participant_name">Draw</span>
                                                            <span className="participant_odds yellow_text">+200</span>
                                                        </div>
                                                        <div className="column">
                                                            <span className="participant_name">Shuvalan</span>
                                                            <span className="participant_odds yellow_text">+100</span>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="play_league_group">
                                                    <span className="InPlayEvent_HeaderButton "></span>
                                                    <div className="play_event">
                                                        <div className="left_content">
                                                            <div className="event_label">
                                                                ES Mostaganem U21 v ASM Oran U21
                                                            </div>
                                                        </div>
                                                        <div className="right_content">
                                                            <span className="event_score yellow_text">0-1</span>
                                                            <span className="event_timer">35:27</span>
                                                        </div>
                                                    </div>
                                                    <div className="participant_group opened">
                                                        <div className="column">
                                                            <span className="participant_name">FK Qarabag II</span>
                                                            <span className="participant_odds yellow_text">+200</span>
                                                        </div>
                                                        <div className="column">
                                                            <span className="participant_name">Draw</span>
                                                            <span className="participant_odds yellow_text">+200</span>
                                                        </div>
                                                        <div className="column">
                                                            <span className="participant_name">Shuvalan</span>
                                                            <span className="participant_odds yellow_text">+100</span>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="total_table_tabs">
                            <ul className="nav nav-tabs green_header">
                                <li className="nav-item">
                                    <a className="nav-link active light_green_text" data-toggle="tab" href="#soccer_tab">Soccer</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link light_green_text" data-toggle="tab" href="#tennis_tab">Tennis</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link light_green_text" data-toggle="tab" href="#baseball_tab">Baseball</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link light_green_text" data-toggle="tab" href="#golf_tab">Golf</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link light_green_text" data-toggle="tab" href="#american_football_tab">American Football</a>
                                </li>
                            </ul>

                            { /*- Tab panes*/}
                            <div className="tab-content">
                                <div id="soccer_tab" className="tab-pane active">
                                    <div className="green_header">
                                        <span className="title">Highlights</span>
                                        <a className="go_to">Go To Coupon</a>
                                    </div>
                                    <div className="MarketGroup">
                                        <div className="MarketCouponFixtureLabel">
                                            <div className="MarketHeaderLabel data">Tue 25 Sep</div>

                                            <div className="CouponParticipant">
                                                <time>17:38</time>
                                                <div className="CouponParticipant-name">Werder Bremen v Hertha Berlin</div>
                                                <div className="CouponParticipant-icon">
                                                    <div className="icon_video"></div>
                                                    <div className="icon_status"></div>
                                                </div>
                                            </div>
                                            <div className="CouponParticipant">
                                                <time>17:38</time>
                                                <div className="CouponParticipant-name">Werder Bremen v Hertha Berlin</div>
                                                <div className="CouponParticipant-icon">
                                                    <div className="icon_video"></div>
                                                    <div className="icon_status"></div>
                                                </div>
                                            </div>
                                            <div className="value_column">
                                                <div className="MarketHeaderLabel">1</div>
                                                <div className="ParticipantOdds yellow_text">+105</div>
                                                <div className="ParticipantOdds yellow_text">+105</div>
                                            </div>

                                            <div className="value_column">
                                                <div className="MarketHeaderLabel">X</div>
                                                <div className="ParticipantOdds yellow_text">+250</div>
                                                <div className="ParticipantOdds yellow_text">+105</div>
                                            </div>
                                            <div className="value_column">
                                                <div className="MarketHeaderLabel">2</div>
                                                <div className="ParticipantOdds yellow_text">+275</div>
                                                <div className="ParticipantOdds yellow_text">+105</div>
                                            </div>
                                            <div className="value_column">
                                                <div className="MarketHeaderLabel"></div>
                                                <div className="ParticipantLink">120</div>
                                                <div className="ParticipantLink">120</div>
                                            </div>
                                        </div>

                                        <div className="MarketCouponFixtureLabel">
                                            <div className="MarketHeaderLabel data">Tue 25 Sep</div>

                                            <div className="CouponParticipant">
                                                <time>17:38</time>
                                                <div className="CouponParticipant-name">Werder Bremen v Hertha Berlin</div>
                                                <div className="CouponParticipant-icon">
                                                    <div className="icon_video"></div>
                                                    <div className="icon_status"></div>
                                                </div>
                                            </div>
                                            <div className="CouponParticipant">
                                                <time>17:38</time>
                                                <div className="CouponParticipant-name">Werder Bremen v Hertha Berlin</div>
                                                <div className="CouponParticipant-icon">
                                                    <div className="icon_video"></div>
                                                    <div className="icon_status"></div>
                                                </div>
                                            </div>
                                            <div className="CouponParticipant">
                                                <time>17:38</time>
                                                <div className="CouponParticipant-name">Werder Bremen v Hertha Berlin</div>
                                                <div className="CouponParticipant-icon">
                                                    <div className="icon_video"></div>
                                                    <div className="icon_status"></div>
                                                </div>
                                            </div>
                                            <div className="value_column">
                                                <div className="MarketHeaderLabel">1</div>
                                                <div className="ParticipantOdds yellow_text">+105</div>
                                                <div className="ParticipantOdds yellow_text">+105</div>
                                                <div className="ParticipantOdds yellow_text">+105</div>
                                            </div>

                                            <div className="value_column">
                                                <div className="MarketHeaderLabel">X</div>
                                                <div className="ParticipantOdds yellow_text">+250</div>
                                                <div className="ParticipantOdds yellow_text">+105</div>
                                                <div className="ParticipantOdds yellow_text">+105</div>
                                            </div>
                                            <div className="value_column">
                                                <div className="MarketHeaderLabel">2</div>
                                                <div className="ParticipantOdds yellow_text">+275</div>
                                                <div className="ParticipantOdds yellow_text">+105</div>
                                                <div className="ParticipantOdds yellow_text">+105</div>
                                            </div>
                                            <div className="value_column">
                                                <div className="MarketHeaderLabel"></div>
                                                <div className="ParticipantLink">120</div>
                                                <div className="ParticipantLink">120</div>
                                                <div className="ParticipantLink">120</div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div id="tennis_tab" className="tab-pane fade">
                                    <div className="green_header">
                                        <span className="title">Highlights</span>
                                        <a className="go_to">Go To Coupon</a>
                                    </div>
                                    <div className="MarketGroup">
                                        <div className="MarketCouponFixtureLabel">
                                            <div className="MarketHeaderLabel data">Tue 25 Sep</div>

                                            <div className="CouponParticipant">
                                                <time>17:38</time>
                                                <div className="CouponParticipant-name">Werder Bremen v Hertha Berlin</div>
                                                <div className="CouponParticipant-icon">
                                                    <div className="icon_video"></div>
                                                    <div className="icon_status"></div>
                                                </div>
                                            </div>
                                            <div className="CouponParticipant">
                                                <time>17:38</time>
                                                <div className="CouponParticipant-name">Werder Bremen v Hertha Berlin</div>
                                                <div className="CouponParticipant-icon">
                                                    <div className="icon_video"></div>
                                                    <div className="icon_status"></div>
                                                </div>
                                            </div>
                                            <div className="value_column">
                                                <div className="MarketHeaderLabel">1</div>
                                                <div className="ParticipantOdds yellow_text">+105</div>
                                                <div className="ParticipantOdds yellow_text">+105</div>
                                            </div>

                                            <div className="value_column">
                                                <div className="MarketHeaderLabel">X</div>
                                                <div className="ParticipantOdds yellow_text">+250</div>
                                                <div className="ParticipantOdds yellow_text">+105</div>
                                            </div>
                                            <div className="value_column">
                                                <div className="MarketHeaderLabel">2</div>
                                                <div className="ParticipantOdds yellow_text">+275</div>
                                                <div className="ParticipantOdds yellow_text">+105</div>
                                            </div>
                                            <div className="value_column">
                                                <div className="MarketHeaderLabel"></div>
                                                <div className="ParticipantLink">120</div>
                                                <div className="ParticipantLink">120</div>
                                            </div>
                                        </div>

                                        <div className="MarketCouponFixtureLabel">
                                            <div className="MarketHeaderLabel data">Tue 25 Sep</div>

                                            <div className="CouponParticipant">
                                                <time>17:38</time>
                                                <div className="CouponParticipant-name">Werder Bremen v Hertha Berlin</div>
                                                <div className="CouponParticipant-icon">
                                                    <div className="icon_video"></div>
                                                    <div className="icon_status"></div>
                                                </div>
                                            </div>
                                            <div className="CouponParticipant">
                                                <time>17:38</time>
                                                <div className="CouponParticipant-name">Werder Bremen v Hertha Berlin</div>
                                                <div className="CouponParticipant-icon">
                                                    <div className="icon_video"></div>
                                                    <div className="icon_status"></div>
                                                </div>
                                            </div>
                                            <div className="value_column">
                                                <div className="MarketHeaderLabel">1</div>
                                                <div className="ParticipantOdds yellow_text">+105</div>
                                                <div className="ParticipantOdds yellow_text">+105</div>

                                            </div>

                                            <div className="value_column">
                                                <div className="MarketHeaderLabel">X</div>
                                                <div className="ParticipantOdds yellow_text">+250</div>
                                                <div className="ParticipantOdds yellow_text">+105</div>

                                            </div>
                                            <div className="value_column">
                                                <div className="MarketHeaderLabel">2</div>
                                                <div className="ParticipantOdds yellow_text">+275</div>
                                                <div className="ParticipantOdds yellow_text">+105</div>

                                            </div>
                                            <div className="value_column">
                                                <div className="MarketHeaderLabel"></div>
                                                <div className="ParticipantLink">120</div>
                                                <div className="ParticipantLink">120</div>

                                            </div>
                                        </div>

                                    </div>


                                </div>
                                <div id="baseball_tab" className="tab-pane fade">
                                    <div className="green_header">
                                        <span className="title">Highlights</span>
                                        <a className="go_to">Go To Coupon</a>
                                    </div>
                                    <div className="MarketGroup">
                                        <div className="MarketCouponFixtureLabel">
                                            <div className="MarketHeaderLabel data">Tue 25 Sep</div>

                                            <div className="CouponParticipant">
                                                <time>17:38</time>
                                                <div className="CouponParticipant-name">Werder Bremen v Hertha Berlin</div>
                                                <div className="CouponParticipant-icon">
                                                    <div className="icon_video"></div>
                                                    <div className="icon_status"></div>
                                                </div>
                                            </div>
                                            <div className="CouponParticipant">
                                                <time>17:38</time>
                                                <div className="CouponParticipant-name">Werder Bremen v Hertha Berlin</div>
                                                <div className="CouponParticipant-icon">
                                                    <div className="icon_video"></div>
                                                    <div className="icon_status"></div>
                                                </div>
                                            </div>
                                            <div className="value_column">
                                                <div className="MarketHeaderLabel">1</div>
                                                <div className="ParticipantOdds yellow_text">+105</div>
                                                <div className="ParticipantOdds yellow_text">+105</div>
                                            </div>

                                            <div className="value_column">
                                                <div className="MarketHeaderLabel">X</div>
                                                <div className="ParticipantOdds yellow_text">+250</div>
                                                <div className="ParticipantOdds yellow_text">+105</div>
                                            </div>
                                            <div className="value_column">
                                                <div className="MarketHeaderLabel">2</div>
                                                <div className="ParticipantOdds yellow_text">+275</div>
                                                <div className="ParticipantOdds yellow_text">+105</div>
                                            </div>
                                            <div className="value_column">
                                                <div className="MarketHeaderLabel"></div>
                                                <div className="ParticipantLink">120</div>
                                                <div className="ParticipantLink">120</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="golf_tab" className="tab-pane fade">

                                </div>
                                <div id="american_football_tab" className="tab-pane fade">

                                </div>
                            </div>
                        </div>

                    </div>
                    { /*------------end column_one------------*/}


                    <div className="column_second">
                        <div className="column_second_wrapper">
                            <div className="top_coupons_block">
                                <div className="top_coupons_header green_header">Top Coupons</div>
                                <div className="top_coupons_buttons">
                                    <div className="coupon_btn">
                                        <div className="coupon_btn_icon">
                                            <img src="/img/football_icon.svg" alt="icon"/>
                                        </div>
                                        <div className="coupon_btn_text">Today’s Matches</div>
                                    </div>
                                    <div className="coupon_btn">
                                        <div className="coupon_btn_icon">
                                            <img src="/img/football_icon.svg" alt="icon"/>
                                        </div>
                                        <div className="coupon_btn_text">Today’s Matches</div>
                                    </div>
                                    <div className="coupon_btn">
                                        <div className="coupon_btn_icon">
                                            <img src="/img/baseball_icon.svg" alt="icon"/>
                                        </div>
                                        <div className="coupon_btn_text">Today’s Matches</div>
                                    </div>
                                    <div className="coupon_btn">
                                        <div className="coupon_btn_icon">
                                            <img src="/img/tennis.svg" alt="icon"/>
                                        </div>
                                        <div className="coupon_btn_text">Laver Cup</div>
                                    </div>

                                </div>

                            </div>
                            <div className="coupon_table">
                                <div className="coupon_table_header">
                                    <div className="img_container">
                                        <img src="/img/coupon_img1.jpg" alt="coupon_img"/>
                                    </div>
                                    <div className="header_container">
                                        <div className="header_competition">Tennis</div>
                                        <div className="fixture_block">
                                            <div className="fixture_label">ATP Matches</div>
                                            <div className="fixture_icon"></div>
                                        </div>
                                        <a href="#" className="header_link yellow_text">Go To Coupon</a>
                                    </div>
                                </div>
                                <div className="coupon_table_grid">
                                    <div className="coupon_table_title">
                                        <div className="coupon_table_title_text"></div>
                                        <div className="coupon_table_title_text">1</div>
                                        <div className="coupon_table_title_text">2</div>
                                    </div>
                                    <div className="coupon_table_row">
                                        <div className="coupon_table_row_container">
                                            <div className="coupon_row_name">
                                                <span className="opponent">Bradley Klahn</span>
                                                <span className="versus">vs</span>
                                                <span className="opponent">Bradley Klahn</span>
                                            </div>
                                            <div className="coupon_row_icon"></div>
                                        </div>
                                        <div className="coupon_table_row_participant">
                                            <div className="coupon_participant yellow_text">-200</div>
                                            <div className="coupon_participant yellow_text">+150</div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="coupon_table">
                                <div className="coupon_table_header">
                                    <div className="img_container">
                                        <img src="/img/coupon_img2.jpg" alt="coupon_img"/>
                                    </div>
                                    <div className="header_container">
                                        <div className="header_competition">Portugal Primeira Liga</div>
                                        <div className="fixture_block">
                                            <div className="fixture_label">Braga v Sporting</div>
                                            <div className="fixture_icon"></div>
                                        </div>
                                        <a href="#" className="header_link yellow_text">More Markets</a>
                                    </div>
                                </div>
                                <div className="match_table_grid">
                                    <div className="match_grid grid3cols">
                                        <div className="title_container">
                                            <div className="title_name">Full Time Result</div>
                                            <div className="title_icon"></div>
                                        </div>
                                        <div className="match_participant_row">
                                            <div className="match_participant">
                                                <div className="participant_name">
                                                    Braga
                                                </div>
                                                <div className="participant_odds yellow_text">
                                                    +145
                                                </div>
                                            </div>
                                            <div className="match_participant">
                                                <div className="participant_name">
                                                    Draw
                                                </div>
                                                <div className="participant_odds yellow_text">
                                                    +220
                                                </div>
                                            </div>
                                            <div className="match_participant">
                                                <div className="participant_name">
                                                    Sporting
                                                </div>
                                                <div className="participant_odds yellow_text">
                                                    +190
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="match_grid grid3cols">
                                        <div className="title_container">
                                            <div className="title_name">Correct Score</div>
                                            <div className="title_icon"></div>
                                        </div>
                                        <div className="match_participant_row">
                                            <div className="match_participant">
                                                <div className="participant_name">
                                                    Braga 1-0
                                                </div>
                                                <div className="participant_odds yellow_text">
                                                    +700
                                                </div>
                                            </div>
                                            <div className="match_participant">
                                                <div className="participant_name">
                                                    Braga 2-0
                                                </div>
                                                <div className="participant_odds yellow_text">
                                                    +1100
                                                </div>
                                            </div>
                                            <div className="match_participant">
                                                <div className="participant_name">
                                                    Braga 2-1
                                                </div>
                                                <div className="participant_odds yellow_text">
                                                    +850
                                                </div>
                                            </div>
                                        </div>
                                        <div className="match_participant_row">
                                            <div className="match_participant">
                                                <div className="participant_name">
                                                    Braga 1-0
                                                </div>
                                                <div className="participant_odds yellow_text">
                                                    +700
                                                </div>
                                            </div>
                                            <div className="match_participant">
                                                <div className="participant_name">
                                                    Braga 2-0
                                                </div>
                                                <div className="participant_odds yellow_text">
                                                    +1100
                                                </div>
                                            </div>
                                            <div className="match_participant">
                                                <div className="participant_name">
                                                    Braga 2-1
                                                </div>
                                                <div className="participant_odds yellow_text">
                                                    +850
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="match_grid grid2cols">
                                        <div className="title_container">
                                            <div className="title_name">Total Goals</div>
                                            <div className="title_icon"></div>
                                        </div>
                                        <div className="match_participant_row">
                                            <div className="match_participant">
                                                <div className="participant_name">
                                                    Under 2.5
                                                </div>
                                                <div className="participant_odds yellow_text">
                                                    +105
                                                </div>
                                            </div>
                                            <div className="match_participant">
                                                <div className="participant_name">
                                                    Over 2.5
                                                </div>
                                                <div className="participant_odds yellow_text">
                                                    -134
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="match_grid grid3cols">
                                        <div className="title_container">
                                            <div className="title_name">Full Time Result</div>
                                            <div className="title_icon"></div>
                                        </div>
                                        <div className="match_participant_row">
                                            <div className="match_participant">
                                                <div className="participant_name">
                                                    Braga
                                                </div>
                                                <div className="participant_odds yellow_text">
                                                    +145
                                                </div>
                                            </div>
                                            <div className="match_participant">
                                                <div className="participant_name">
                                                    Draw
                                                </div>
                                                <div className="participant_odds yellow_text">
                                                    +220
                                                </div>
                                            </div>
                                            <div className="match_participant">
                                                <div className="participant_name">
                                                    Sporting
                                                </div>
                                                <div className="participant_odds yellow_text">
                                                    +190
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )

    }
}

export default Home;
