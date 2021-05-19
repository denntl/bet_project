import React from 'react';
import TableGames from "../../shared/tables/tableGames";
import Slider from "../../shared/slider";
import TableHighlights from "../../shared/tables/tableHighlights";
import TopCouponTable from "../../shared/tables/topCouponTable";
import moment from "moment/moment";
import {getEventsGroupedByColumn, getFutureEventsHighlights} from "../../helpers/data";
import {Link, NavLink} from "react-router-dom";



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            typeLiveInPlay: "all",
            allSports: this.props.allSports,
            sports: this.props.sports,
            selectedSport: false,
            selectedSportId: false,
            highlights: {},
            odds: this.props.odds,
            loginToken: this.props.loginToken,
            topCouponData: [],
        }
        this.changeInplay = this.changeInplay.bind(this);
        this.selectedSport = this.selectedSport.bind(this);

    }
    componentDidMount() {
       // console.log("KKKKKKKKKKKKKKK", nextProps.sports[6046])

        // let tempArr = this.state.sports;
        // setInterval(() => {
        //     tempArr[6046].map((event) => {
        //         console.log("test", event)
        //         if (event.FixtureId == 4263049) {
        //             event.Livescore.Scoreboard.Results[0].Value = ++idx
        //         }
        //         this.setState({
        //             sports: tempArr
        //         })
        //
        //     })
        // }, 10000);

        let date_form =  moment.utc().add(1,'days').format('YYYY-MM-DD HH:mm:ss');
        let date_to = moment.utc().add(4,'days').format('YYYY-MM-DD HH:mm:ss');
        let sports = "6046";
        // let sports = "6046,48242,35232,35709,154830";
        let limit = 20;
        let markets = true;
        let only_home_market = true;
        let status = 1;
        let show_in_highlights = true;
        getFutureEventsHighlights(this.state.odds, status, show_in_highlights, only_home_market, limit, function(err, data) {
           // console.log('highlights', data)
            if (!err) {
                this.setState({
                    highlights: data
                })
            } else {
                console.log('err future events', err)
            }
        }.bind(this))


        let column = "top_coupons";
        getEventsGroupedByColumn(this.state.odds, markets, column, function(err, data) {
            if (!err) {
                this.setState({
                    topCouponData: data
                })
            } else {
                console.log('err future events', err)
            }
        }.bind(this))

        $('.IconContainerV6').owlCarousel({
            items:1,
            margin: 0,
            autoWidth:true,
            nav: false
        });
        $('.EuroleagueScroller').owlCarousel({
            items:1,
            margin: 0,
            autoWidth:true,
            nav: false
        });
        $('.InternationalSoccerScroller').owlCarousel({
            items:1,
            margin: 0,
            autoWidth:true,
            nav: false
        });
        $('.InstantGamesScroller').owlCarousel({
            items:1,
            margin: 0,
            autoWidth:true,
            nav: false
        });

    }
    componentWillReceiveProps(nextProps) {

        this.setState({
            sports: nextProps.sports,
            allSports: nextProps.allSports,
            odds: nextProps.odds,
            loginToken: nextProps.loginToken
        })
        if (nextProps.odds != this.state.odds) {
            let date_form =  moment.utc().add(1,'days').format('YYYY-MM-DD HH:mm:ss' );
            let date_to = moment.utc().add(4,'days').format('YYYY-MM-DD HH:mm:ss');
            let sports = "6046";
            //let sports = "6046,48242,35232,35709,154830";
            let limit = 20;
            let markets = true;
            let only_home_market = true;
            let show_in_highlights = true;

            getFutureEventsHighlights(nextProps.odds, status, show_in_highlights, only_home_market, limit, function(err, data) {
                // console.log('highlights', data)
                if (!err) {
                    this.setState({
                        highlights: data
                    })
                } else {
                    console.log('err future events', err)
                }
            }.bind(this));

            let column = "top_coupons";
            getEventsGroupedByColumn(nextProps.odds, markets, column, function(err, data) {
                if (!err) {
                    this.setState({
                        topCouponData: data
                    })
                } else {
                    console.log('err future events', err)
                }
            }.bind(this))

        }

    }
    changeInplay(tab) {

        this.setState({
            typeLiveInPlay: tab,
            selectedSport: false
        })
    }
    selectedSport(id) {
        this.setState({
            selectedSport: true,
            selectedSportId: id
        })
    }



    render() {
       // console.log('home', this.state)
        return(
            <div className="page home_page">
                <div className="home_page_header"></div>
                <div className="columns_container">

                    { /*------------column_one-----------*/}
                    <div className="column_one">
                        {/*<div className="offer_banner">*/}
                            {/*<div className="text_block">*/}
                                {/*<p className="title yellow_text">New Customers</p>*/}
                                {/*<a href="#" className="offer_link">Up to €25 in Bet Credits</a>*/}
                                {/*<p className="offer_note">Returns exclude Bet Credits stake</p>*/}
                                {/*<p className="offer_terms">T&Cs, time limits and exclusions apply</p>*/}
                            {/*</div>*/}
                            {/*<div className="action_block">*/}
                                {/*<a href="#" className="join_btn yellow_text">Join Today</a>*/}
                                {/*<a href="#" className="read_more">More Details</a>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {
                            this.state.loginToken ?
                                <div className="live_banner">
                                    <div className="img_block">
                                        <img src="../img/pbb_Cricket_MelbourneRenegades_Bat_Generic_1217_v7.jpg" alt="banner_image"/>
                                        <div className="img_text">Log in to watch</div>
                                    </div>
                                    <div className="banner_details">
                                        <div className="banner_details_header">
                                            <div className="title_row">
                                                <div className="banner_details_header_title">Big Bash</div>
                                                <div className="banner_details_header_status">LIVE</div>
                                            </div>
                                            <div className="match_row">
                                                <div className="match_players_container">
                                                    <div className="indicator_player one active"/>
                                                    <div className="match_players">Thunder vs Renegades</div>
                                                    <div className="indicator_player two"/>
                                                </div>
                                                <div className="banner_audio_icon"/>
                                                <div className="match_score">0-0</div>
                                            </div>
                                        </div>
                                        <div className="banner_participant">{/*no_active*/}
                                            <span className="banner_participant_name">Sydney Thunder</span>
                                            <span className="banner_participant_odds">19.00</span>
                                        </div>
                                        <div className="banner_participant">
                                            <span className="banner_participant_name">Sydney Thunder</span>
                                            <span className="banner_participant_odds">19.00</span>
                                        </div>
                                    </div>
                                </div>

                                :
                                <div className="banner_before_login">
                                    <div className="offer_banner before_login">
                                        <div className="text_block">
                                            <p className="title yellow_text">New Customers</p>
                                            <p className="banner_title">Open Account Offer</p>
                                            <p className="banner_sub_title">Up to €25 in Bet Creditse</p>
                                            <a href="javascript:void(0)" className="join_btn yellow_text" onClick={() => this.props.showForm("join")}>Join Now</a>
                                        </div>
                                    </div>
                                    <div className="banner_notes_wrapp">
                                        <div className="banner_notes">Returns exclude Bet Credits stake. T&Cs, time limits and exclusions apply</div>
                                        <div className="banner_terms"></div>
                                    </div>
                                </div>
                        }
                        {/*-live_in_play_module*/}

                                <div className="live_in_play_module">
                                    <div className="main_header">
                                        <a href="#" className="main_header_title">Live <span className="yellow_text">In-Play</span></a>
                                        <div className="main_header_btn">
                                            <a href="#" className={`all_btn light_green_text ${this.state.typeLiveInPlay == "all" ? "active": ""}`} onClick={(e) => {e.preventDefault(); this.changeInplay("all")}}>All</a>
                                            <a href="#" className={`top_btn light_green_text ${this.state.typeLiveInPlay == "top" ? "active": ""}`} onClick={(e) => {e.preventDefault(); this.changeInplay('top')}}>Top</a>
                                            <a href="#" className={`stream_btn light_green_text ${this.state.typeLiveInPlay == "streem" ? "active": ""}`} onClick={(e) => {e.preventDefault(); this.changeInplay('streem')}}></a>
                                        </div>
                                        <a href="#" className="main_header_event_count light_green_text">
                                            {this.props.eventCount} Events
                                        </a>

                                    </div>
                                    { /*-slider-block*/}
                                    <Slider type={this.state.typeLiveInPlay} selectedSport={(id) => this.selectedSport(id) } />
                                    {/*-column_one all tables*/}
                                    <div className="all_tables">
                                        {this.state.typeLiveInPlay == "all" && this.state.selectedSport === false ?

                                            Object.keys(this.state.sports).map(sport => {
                                                var  titleSport, headerColor;
                                                this.state.allSports.forEach((val) => {

                                                    if (val.id == sport) {
                                                        titleSport = val.name;
                                                        headerColor = val.color;
                                                    }
                                                })
                                                if (this.state.sports[sport].length) {
                                                    return <div key={`${sport}-all`} className="card-panel">
                                                        <TableGames
                                                            headerColor={headerColor}
                                                            sport={this.state.sports[sport]}
                                                            type={titleSport} typeId={sport}
                                                            addToBetSlip={(info, bet, typeBet) => this.props.addToBetSlip(info, bet, typeBet)}/>
                                                    </div>
                                                }

                                            })

                                            :
                                            Object.keys(this.state.sports).filter((key) => key == this.state.selectedSportId).map(sport => {
                                                var  titleSport, headerColor;
                                                this.state.allSports.forEach((val) => {
                                                    if (val.id == sport) {
                                                        titleSport = val.name;
                                                        headerColor = val.color;
                                                    }
                                                })
                                                if (this.state.sports[sport].length) {
                                                    return <div key={`${sport}-one`} className="card-panel">
                                                        <TableGames
                                                            headerColor={headerColor}
                                                            sport={this.state.sports[sport]}
                                                            type={titleSport}
                                                            typeId={sport}
                                                            addToBetSlip={(info, bet, typeBet) => this.props.addToBetSlip(info, bet, typeBet)}/>
                                                    </div>
                                                }

                                            })
                                        }

                                        {this.state.typeLiveInPlay == "top" ?
                                            <div></div>
                                            : ""
                                        }

                                        {this.state.typeLiveInPlay == "streem" ?
                                            <div></div>
                                            : ""
                                        }

                                        {/*<div className="play_classification" id="soccer">*/}
                                        {/*<div className="play_classification_header sport_green_header">*/}
                                        {/*<span>Soccer</span>*/}
                                        {/*<span className="InPlayEvent_HeaderButton "></span>*/}
                                        {/*</div>*/}
                                        {/*<div className="play_classification_league">*/}
                                        {/*<div className="play_league">*/}
                                        {/*<div className="play_league_header">*/}
                                        {/*<span className="InPlayLeague_Header">Algeria Youth League TEST</span>*/}
                                        {/*</div>*/}
                                        {/*<div className="play_league_group_wrapp opened">*/}
                                        {/*<div className="play_league_group">*/}
                                        {/*<span className="InPlayEvent_HeaderButton "></span>*/}
                                        {/*<div className="play_event">*/}

                                        {/*<div className="left_content">*/}
                                        {/*<div className="event_label">*/}
                                        {/*ES Mostaganem U21 v ASM Oran U21 TEST*/}
                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="right_content">*/}
                                        {/*<span className="event_score yellow_text">0-1</span>*/}
                                        {/*<span className="event_timer">35:27</span>*/}
                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="participant_group opened">*/}
                                        {/*<div className="column">*/}
                                        {/*<span className="participant_name">FK Qarabag II</span>*/}
                                        {/*<span className="participant_odds yellow_text">200</span>*/}
                                        {/*</div>*/}
                                        {/*<div className="column">*/}
                                        {/*<span className="participant_name">Draw</span>*/}
                                        {/*<span className="participant_odds yellow_text">+200</span>*/}
                                        {/*</div>*/}
                                        {/*<div className="column">*/}
                                        {/*<span className="participant_name">Shuvalan</span>*/}
                                        {/*<span className="participant_odds yellow_text">+100</span>*/}
                                        {/*</div>*/}

                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="play_league_group">*/}
                                        {/*<span className="InPlayEvent_HeaderButton "></span>*/}
                                        {/*<div className="play_event">*/}
                                        {/*<div className="left_content">*/}
                                        {/*<div className="event_label">*/}
                                        {/*ES Mostaganem U21 v ASM Oran U21*/}
                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="right_content">*/}
                                        {/*<span className="event_score yellow_text">0-1</span>*/}
                                        {/*<span className="event_timer">35:27</span>*/}
                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="participant_group opened">*/}
                                        {/*<div className="column">*/}
                                        {/*<span className="participant_name">FK Qarabag II</span>*/}
                                        {/*<span className="participant_odds yellow_text">+200</span>*/}
                                        {/*</div>*/}
                                        {/*<div className="column">*/}
                                        {/*<span className="participant_name">Draw</span>*/}
                                        {/*<span className="participant_odds yellow_text">+200</span>*/}
                                        {/*</div>*/}
                                        {/*<div className="column">*/}
                                        {/*<span className="participant_name">Shuvalan</span>*/}
                                        {/*<span className="participant_odds yellow_text">+100</span>*/}
                                        {/*</div>*/}

                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*</div>*/}

                                        {/*</div>*/}

                                        {/*<div className="play_classification_league">*/}
                                        {/*<div className="play_league">*/}
                                        {/*<div className="play_league_header">*/}
                                        {/*<span className="InPlayLeague_Header">Algeria Youth League</span>*/}
                                        {/*</div>*/}
                                        {/*<div className="play_league_group_wrapp opened">*/}
                                        {/*<div className="play_league_group">*/}
                                        {/*<span className="InPlayEvent_HeaderButton "></span>*/}
                                        {/*<div className="play_event">*/}
                                        {/*<div className="left_content">*/}
                                        {/*<div className="event_label">*/}
                                        {/*ES Mostaganem U21 v ASM Oran U21*/}
                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="right_content">*/}
                                        {/*<span className="event_score yellow_text">0-1</span>*/}
                                        {/*<span className="event_timer">35:27</span>*/}
                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="participant_group opened">*/}
                                        {/*<div className="column">*/}
                                        {/*<span className="participant_name">FK Qarabag II</span>*/}
                                        {/*<span className="participant_odds yellow_text">+200</span>*/}
                                        {/*</div>*/}
                                        {/*<div className="column">*/}
                                        {/*<span className="participant_name">Draw</span>*/}
                                        {/*<span className="participant_odds yellow_text">+200</span>*/}
                                        {/*</div>*/}
                                        {/*<div className="column">*/}
                                        {/*<span className="participant_name">Shuvalan</span>*/}
                                        {/*<span className="participant_odds yellow_text">+100</span>*/}
                                        {/*</div>*/}

                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="play_league_group">*/}
                                        {/*<span className="InPlayEvent_HeaderButton "></span>*/}
                                        {/*<div className="play_event">*/}
                                        {/*<div className="left_content">*/}
                                        {/*<div className="event_label">*/}
                                        {/*ES Mostaganem U21 v ASM Oran U21*/}
                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="right_content">*/}
                                        {/*<span className="event_score yellow_text">0-1</span>*/}
                                        {/*<span className="event_timer">35:27</span>*/}
                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="participant_group opened">*/}
                                        {/*<div className="column">*/}
                                        {/*<span className="participant_name">FK Qarabag II</span>*/}
                                        {/*<span className="participant_odds yellow_text">+200</span>*/}
                                        {/*</div>*/}
                                        {/*<div className="column">*/}
                                        {/*<span className="participant_name">Draw</span>*/}
                                        {/*<span className="participant_odds yellow_text">+200</span>*/}
                                        {/*</div>*/}
                                        {/*<div className="column">*/}
                                        {/*<span className="participant_name">Shuvalan</span>*/}
                                        {/*<span className="participant_odds yellow_text">+100</span>*/}
                                        {/*</div>*/}

                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*</div>*/}

                                        {/*<div className="play_classification" id="tennis">*/}
                                        {/*<div className="play_classification_header sport_olive_header">*/}
                                        {/*<span>Tennis</span>*/}
                                        {/*<span className="InPlayEvent_HeaderButton "></span>*/}
                                        {/*</div>*/}
                                        {/*<div className="play_classification_league">*/}
                                        {/*<div className="play_league">*/}
                                        {/*<div className="play_league_header">*/}
                                        {/*<span className="InPlayLeague_Header">Algeria Youth League</span>*/}
                                        {/*</div>*/}
                                        {/*<div className="play_league_group_wrapp opened">*/}
                                        {/*<div className="play_league_group">*/}
                                        {/*<span className="InPlayEvent_HeaderButton "></span>*/}
                                        {/*<div className="play_event">*/}
                                        {/*<div className="left_content">*/}
                                        {/*<div className="event_label">*/}
                                        {/*ES Mostaganem U21 v ASM Oran U21*/}
                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="right_content">*/}
                                        {/*<span className="event_score yellow_text">0-1</span>*/}
                                        {/*<span className="event_timer">35:27</span>*/}
                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="participant_group opened">*/}
                                        {/*<div className="column">*/}
                                        {/*<span className="participant_name">FK Qarabag II</span>*/}
                                        {/*<span className="participant_odds yellow_text">+200</span>*/}
                                        {/*</div>*/}
                                        {/*<div className="column">*/}
                                        {/*<span className="participant_name">Draw</span>*/}
                                        {/*<span className="participant_odds yellow_text">+200</span>*/}
                                        {/*</div>*/}
                                        {/*<div className="column">*/}
                                        {/*<span className="participant_name">Shuvalan</span>*/}
                                        {/*<span className="participant_odds yellow_text">+100</span>*/}
                                        {/*</div>*/}

                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="play_league_group">*/}
                                        {/*<span className="InPlayEvent_HeaderButton "></span>*/}
                                        {/*<div className="play_event">*/}
                                        {/*<div className="left_content">*/}
                                        {/*<div className="event_label">*/}
                                        {/*ES Mostaganem U21 v ASM Oran U21*/}
                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="right_content">*/}
                                        {/*<span className="event_score yellow_text">0-1</span>*/}
                                        {/*<span className="event_timer">35:27</span>*/}
                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="participant_group opened">*/}
                                        {/*<div className="column">*/}
                                        {/*<span className="participant_name">FK Qarabag II</span>*/}
                                        {/*<span className="participant_odds yellow_text">+200</span>*/}
                                        {/*</div>*/}
                                        {/*<div className="column">*/}
                                        {/*<span className="participant_name">Draw</span>*/}
                                        {/*<span className="participant_odds yellow_text">+200</span>*/}
                                        {/*</div>*/}
                                        {/*<div className="column">*/}
                                        {/*<span className="participant_name">Shuvalan</span>*/}
                                        {/*<span className="participant_odds yellow_text">+100</span>*/}
                                        {/*</div>*/}

                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*</div>*/}

                                        {/*</div>*/}

                                        {/*</div>*/}

                                        {/*<div className="play_classification_league">*/}
                                        {/*<div className="play_league">*/}
                                        {/*<div className="play_league_header">*/}
                                        {/*<span className="InPlayLeague_Header">Algeria Youth League</span>*/}
                                        {/*</div>*/}
                                        {/*<div className="play_league_group_wrapp opened">*/}
                                        {/*<div className="play_league_group">*/}
                                        {/*<span className="InPlayEvent_HeaderButton "></span>*/}
                                        {/*<div className="play_event">*/}
                                        {/*<div className="left_content">*/}
                                        {/*<div className="event_label">*/}
                                        {/*ES Mostaganem U21 v ASM Oran U21*/}
                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="right_content">*/}
                                        {/*<span className="event_score yellow_text">0-1</span>*/}
                                        {/*<span className="event_timer">35:27</span>*/}
                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="participant_group opened">*/}
                                        {/*<div className="column">*/}
                                        {/*<span className="participant_name">FK Qarabag II</span>*/}
                                        {/*<span className="participant_odds yellow_text">+200</span>*/}
                                        {/*</div>*/}
                                        {/*<div className="column">*/}
                                        {/*<span className="participant_name">Draw</span>*/}
                                        {/*<span className="participant_odds yellow_text">+200</span>*/}
                                        {/*</div>*/}
                                        {/*<div className="column">*/}
                                        {/*<span className="participant_name">Shuvalan</span>*/}
                                        {/*<span className="participant_odds yellow_text">+100</span>*/}
                                        {/*</div>*/}

                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="play_league_group">*/}
                                        {/*<span className="InPlayEvent_HeaderButton "></span>*/}
                                        {/*<div className="play_event">*/}
                                        {/*<div className="left_content">*/}
                                        {/*<div className="event_label">*/}
                                        {/*ES Mostaganem U21 v ASM Oran U21*/}
                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="right_content">*/}
                                        {/*<span className="event_score yellow_text">0-1</span>*/}
                                        {/*<span className="event_timer">35:27</span>*/}
                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="participant_group opened">*/}
                                        {/*<div className="column">*/}
                                        {/*<span className="participant_name">FK Qarabag II</span>*/}
                                        {/*<span className="participant_odds yellow_text">+200</span>*/}
                                        {/*</div>*/}
                                        {/*<div className="column">*/}
                                        {/*<span className="participant_name">Draw</span>*/}
                                        {/*<span className="participant_odds yellow_text">+200</span>*/}
                                        {/*</div>*/}
                                        {/*<div className="column">*/}
                                        {/*<span className="participant_name">Shuvalan</span>*/}
                                        {/*<span className="participant_odds yellow_text">+100</span>*/}
                                        {/*</div>*/}

                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*</div>*/}



                                        {/*<div className="play_classification" id="badminton">*/}
                                        {/*<div className="play_classification_header sport_orange_header">*/}
                                        {/*<span>Badminton</span>*/}
                                        {/*<span className="InPlayEvent_HeaderButton "></span>*/}
                                        {/*</div>*/}
                                        {/*<div className="play_classification_league">*/}
                                        {/*<div className="play_league">*/}
                                        {/*<div className="play_league_header">*/}
                                        {/*<span className="InPlayLeague_Header">Algeria Youth League</span>*/}
                                        {/*</div>*/}
                                        {/*<div className="play_league_group_wrapp opened">*/}
                                        {/*<div className="play_league_group">*/}
                                        {/*<span className="InPlayEvent_HeaderButton "></span>*/}
                                        {/*<div className="play_event">*/}
                                        {/*<div className="left_content">*/}
                                        {/*<div className="event_label">*/}
                                        {/*ES Mostaganem U21 v ASM Oran U21*/}
                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="right_content">*/}
                                        {/*<span className="event_score yellow_text">0-1</span>*/}
                                        {/*<span className="event_timer">35:27</span>*/}
                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="participant_group opened">*/}
                                        {/*<div className="column">*/}
                                        {/*<span className="participant_name">FK Qarabag II</span>*/}
                                        {/*<span className="participant_odds yellow_text">+200</span>*/}
                                        {/*</div>*/}
                                        {/*<div className="column">*/}
                                        {/*<span className="participant_name">Draw</span>*/}
                                        {/*<span className="participant_odds yellow_text">+200</span>*/}
                                        {/*</div>*/}
                                        {/*<div className="column">*/}
                                        {/*<span className="participant_name">Shuvalan</span>*/}
                                        {/*<span className="participant_odds yellow_text">+100</span>*/}
                                        {/*</div>*/}

                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="play_league_group">*/}
                                        {/*<span className="InPlayEvent_HeaderButton "></span>*/}
                                        {/*<div className="play_event">*/}
                                        {/*<div className="left_content">*/}
                                        {/*<div className="event_label">*/}
                                        {/*ES Mostaganem U21 v ASM Oran U21*/}
                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="right_content">*/}
                                        {/*<span className="event_score yellow_text">0-1</span>*/}
                                        {/*<span className="event_timer">35:27</span>*/}
                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="participant_group opened">*/}
                                        {/*<div className="column">*/}
                                        {/*<span className="participant_name">FK Qarabag II</span>*/}
                                        {/*<span className="participant_odds yellow_text">+200</span>*/}
                                        {/*</div>*/}
                                        {/*<div className="column">*/}
                                        {/*<span className="participant_name">Draw</span>*/}
                                        {/*<span className="participant_odds yellow_text">+200</span>*/}
                                        {/*</div>*/}
                                        {/*<div className="column">*/}
                                        {/*<span className="participant_name">Shuvalan</span>*/}
                                        {/*<span className="participant_odds yellow_text">+100</span>*/}
                                        {/*</div>*/}

                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="play_classification_league">*/}
                                        {/*<div className="play_league">*/}
                                        {/*<div className="play_league_header">*/}
                                        {/*<span className="InPlayLeague_Header">Algeria Youth League</span>*/}

                                        {/*</div>*/}
                                        {/*<div className="play_league_group_wrapp opened">*/}
                                        {/*<div className="play_league_group">*/}
                                        {/*<span className="InPlayEvent_HeaderButton "></span>*/}
                                        {/*<div className="play_event">*/}
                                        {/*<div className="left_content">*/}
                                        {/*<div className="event_label">*/}
                                        {/*ES Mostaganem U21 v ASM Oran U21*/}
                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="right_content">*/}
                                        {/*<span className="event_score yellow_text">0-1</span>*/}
                                        {/*<span className="event_timer">35:27</span>*/}
                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="participant_group opened">*/}
                                        {/*<div className="column">*/}
                                        {/*<span className="participant_name">FK Qarabag II</span>*/}
                                        {/*<span className="participant_odds yellow_text">+200</span>*/}
                                        {/*</div>*/}
                                        {/*<div className="column">*/}
                                        {/*<span className="participant_name">Draw</span>*/}
                                        {/*<span className="participant_odds yellow_text">+200</span>*/}
                                        {/*</div>*/}
                                        {/*<div className="column">*/}
                                        {/*<span className="participant_name">Shuvalan</span>*/}
                                        {/*<span className="participant_odds yellow_text">+100</span>*/}
                                        {/*</div>*/}

                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="play_league_group">*/}
                                        {/*<span className="InPlayEvent_HeaderButton "></span>*/}
                                        {/*<div className="play_event">*/}
                                        {/*<div className="left_content">*/}
                                        {/*<div className="event_label">*/}
                                        {/*ES Mostaganem U21 v ASM Oran U21*/}
                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="right_content">*/}
                                        {/*<span className="event_score yellow_text">0-1</span>*/}
                                        {/*<span className="event_timer">35:27</span>*/}
                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="participant_group opened">*/}
                                        {/*<div className="column">*/}
                                        {/*<span className="participant_name">FK Qarabag II</span>*/}
                                        {/*<span className="participant_odds yellow_text">+200</span>*/}
                                        {/*</div>*/}
                                        {/*<div className="column">*/}
                                        {/*<span className="participant_name">Draw</span>*/}
                                        {/*<span className="participant_odds yellow_text">+200</span>*/}
                                        {/*</div>*/}
                                        {/*<div className="column">*/}
                                        {/*<span className="participant_name">Shuvalan</span>*/}
                                        {/*<span className="participant_odds yellow_text">+100</span>*/}
                                        {/*</div>*/}

                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*</div>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>

                        {
                            typeof this.state.highlights != "undefined" ?
                                <TableHighlights addToBetSlip={(info, bet, typeBet) => this.props.addToBetSlip(info, bet, typeBet)}
                                                 highlights={this.state.highlights}
                                                 allSports={this.state.allSports}
                                                 setSelectedEventFromOtherPage={(event) => this.props.setSelectedEventFromOtherPage(event)}
                                />

                                : ""
                        }


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
                                        <NavLink className="coupon_btn_text" to="/sports/soccer/today" style={{color: '#ddd'}}>
                                            Today’s Matches
                                        </NavLink>
                                    </div>
                                    <div className="coupon_btn">
                                        <div className="coupon_btn_icon">
                                            <img src="/img/football_icon.svg" alt="icon"/>
                                        </div>
                                        <NavLink className="coupon_btn_text" to="/sports/soccer/euro-list" style={{color: '#ddd'}}>
                                            Elite Euro List
                                        </NavLink>
                                    </div>
                                    {/*<div className="coupon_btn">*/}
                                        {/*<div className="coupon_btn_icon">*/}
                                            {/*<img src="/img/baseball_icon.svg" alt="icon"/>*/}
                                        {/*</div>*/}
                                        {/*<div className="coupon_btn_text">Today’s Matches</div>*/}
                                    {/*</div>*/}
                                    {/*<div className="coupon_btn">*/}
                                        {/*<div className="coupon_btn_icon">*/}
                                            {/*<img src="/img/tennis.svg" alt="icon"/>*/}
                                        {/*</div>*/}
                                        {/*<div className="coupon_btn_text">Laver Cup</div>*/}
                                    {/*</div>*/}

                                </div>

                            </div>
                            {
                                typeof this.state.topCouponData != "undefined"?
                                    <TopCouponTable setSelectedEventFromOtherPage={(eventObj) => this.props.setSelectedEventFromOtherPage(eventObj)}
                                                    topCouponData = {this.state.topCouponData}
                                                    odds = {this.state.odds}
                                                    addToBetSlip={(info, bet, typeBet) => this.props.addToBetSlip(info, bet, typeBet)}
                                    />
                                : ""
                            }
                            {/*<div className="coupon_table">*/}
                                {/*<div className="coupon_table_header">*/}
                                    {/*<div className="img_container">*/}
                                        {/*<img src="/img/coupon_img1.jpg" alt="coupon_img"/>*/}
                                    {/*</div>*/}
                                    {/*<div className="header_container">*/}
                                        {/*<div className="header_competition">Tennis</div>*/}
                                        {/*<div className="fixture_block">*/}
                                            {/*<div className="fixture_label">ATP Matches</div>*/}
                                            {/*<div className="fixture_icon"></div>*/}
                                        {/*</div>*/}
                                        {/*<a href="#" className="header_link yellow_text">Go To Coupon</a>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                                {/*<div className="coupon_table_grid">*/}
                                    {/*<div className="coupon_table_title">*/}
                                        {/*<div className="coupon_table_title_text"></div>*/}
                                        {/*<div className="coupon_table_title_text">1</div>*/}
                                        {/*<div className="coupon_table_title_text">2</div>*/}
                                    {/*</div>*/}
                                    {/*<div className="coupon_table_row">*/}
                                        {/*<div className="coupon_table_row_container">*/}
                                            {/*<div className="coupon_row_name">*/}
                                                {/*<span className="opponent">Bradley Klahn</span>*/}
                                                {/*<span className="versus">vs</span>*/}
                                                {/*<span className="opponent">Bradley Klahn</span>*/}
                                            {/*</div>*/}
                                            {/*<div className="coupon_row_icon"></div>*/}
                                        {/*</div>*/}
                                        {/*<div className="coupon_table_row_participant">*/}
                                            {/*<div className="coupon_participant yellow_text">2.2</div>*/}
                                            {/*<div className="coupon_participant yellow_text">1.23</div>*/}
                                        {/*</div>*/}

                                    {/*</div>*/}

                                {/*</div>*/}
                            {/*</div>*/}
                            {/*<div className="coupon_table">*/}
                                {/*<div className="coupon_table_header">*/}
                                    {/*<div className="img_container">*/}
                                        {/*<img src="/img/coupon_img2.jpg" alt="coupon_img"/>*/}
                                    {/*</div>*/}
                                    {/*<div className="header_container">*/}
                                        {/*<div className="header_competition">Portugal Primeira Liga</div>*/}
                                        {/*<div className="fixture_block">*/}
                                            {/*<div className="fixture_label">Braga v Sporting</div>*/}
                                            {/*<div className="fixture_icon"></div>*/}
                                        {/*</div>*/}
                                        {/*<a href="#" className="header_link yellow_text">More Markets</a>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                                {/*<div className="match_table_grid">*/}
                                    {/*<div className="match_grid grid3cols">*/}
                                        {/*<div className="title_container">*/}
                                            {/*<div className="title_name">Full Time Result</div>*/}
                                            {/*<div className="title_icon"></div>*/}
                                        {/*</div>*/}
                                        {/*<div className="match_participant_row">*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Braga*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*1.25*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Draw*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*2.02*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Sporting*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*1.06*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*<div className="match_grid grid3cols">*/}
                                        {/*<div className="title_container">*/}
                                            {/*<div className="title_name">Correct Score</div>*/}
                                            {/*<div className="title_icon"></div>*/}
                                        {/*</div>*/}
                                        {/*<div className="match_participant_row">*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Braga 1-0*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*1.052*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Braga 2-0*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*5.3*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Braga 2-1*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*2.3*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="match_participant_row">*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Braga 1-0*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*1.03*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Braga 2-0*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*2.3*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Braga 2-1*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*1.3*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*<div className="match_grid grid2cols">*/}
                                        {/*<div className="title_container">*/}
                                            {/*<div className="title_name">Total Goals</div>*/}
                                            {/*<div className="title_icon"></div>*/}
                                        {/*</div>*/}
                                        {/*<div className="match_participant_row">*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Under 2.5*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*1.03*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Over 2.5*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*-134*/}
                                                {/*</div>*/}
                                            {/*</div>*/}

                                        {/*</div>*/}
                                    {/*</div>*/}

                                    {/*<div className="match_grid grid3cols">*/}
                                        {/*<div className="title_container">*/}
                                            {/*<div className="title_name">Full Time Result</div>*/}
                                            {/*<div className="title_icon"></div>*/}
                                        {/*</div>*/}
                                        {/*<div className="match_participant_row">*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Braga*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*3.25*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Draw*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*1.05*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Sporting*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*2.02*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}

                                {/*</div>*/}
                            {/*</div>*/}

                            {/*<div className="coupon_table">*/}
                                {/*<div className="coupon_table_header">*/}
                                    {/*<div className="img_container">*/}
                                        {/*<img src="/img/hl_Cricket_India_ODI_MSDhoni_Bat_1018.jpg" alt="coupon_img"/>*/}
                                    {/*</div>*/}
                                    {/*<div className="header_container">*/}
                                        {/*<div className="header_competition">1st ODI</div>*/}
                                        {/*<div className="fixture_block">*/}
                                            {/*<div className="fixture_label">New Zealand vs India</div>*/}
                                            {/*<div className="fixture_icon in_play_icon"></div>*/}
                                        {/*</div>*/}
                                        {/*<a href="#" className="header_link yellow_text">More Markets</a>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                                {/*<div className="match_table_grid">*/}
                                    {/*<div className="match_grid grid2cols">*/}
                                        {/*<div className="title_container">*/}
                                            {/*<div className="title_name">To Win the Match</div>*/}
                                            {/*/!*<div className="title_icon"></div>*!/*/}
                                        {/*</div>*/}
                                        {/*<div className="match_participant_row">*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*New Zealand*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*2.30*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*India*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*1.61*/}
                                                {/*</div>*/}
                                            {/*</div>*/}

                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*<div className="match_grid grid3cols">*/}
                                        {/*<div className="title_container">*/}
                                            {/*<div className="title_name">Highest Opening Partnership</div>*/}
                                            {/*/!*<div className="title_icon"></div>*!/*/}
                                        {/*</div>*/}
                                        {/*<div className="match_participant_row">*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*New Zealand*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*2.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Tie*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*26.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*India*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*1.61*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*<div className="match_grid grid3cols">*/}
                                        {/*<div className="title_container">*/}
                                            {/*<div className="title_name">Top Team Batsman</div>*/}
                                            {/*/!*<div className="title_icon"></div>*!/*/}
                                        {/*</div>*/}
                                        {/*<div className="match_participant_row">*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*KS Williamson (New Zealand)*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*3.75*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*MJ Guptill (New Zealand)*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*4.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*C Munro (New Zealand)*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*4.33*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="match_participant_row">*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*LRPL Taylor (New Zealand)*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*5.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*TWM Latham (New Zealand)*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*6.50*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*HM Nicholls (New Zealand)*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*9.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="match_participant_row">*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*JDS Neesham (New Zealand)*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*11.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*TL Seifert (New Zealand)*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*15.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*MJ Santner (New Zealand)*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*17.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="match_participant_row">*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*C de Grandhomme (New Zealand)*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*17.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*DAJ Bracewell (New Zealand)*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*17.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*MJ Henry (New Zealand)*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*51.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}

                                    {/*<div className="match_grid grid3cols">*/}
                                        {/*<div className="title_container">*/}
                                            {/*<div className="title_name">Top Team Batsman</div>*/}
                                            {/*/!*<div className="title_icon"></div>*!/*/}
                                        {/*</div>*/}
                                        {/*<div className="match_participant_row">*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*V Kohli (India)*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*3.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*RG Sharma (India)*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*4.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*S Dhawan (India)*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*4.50*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="match_participant_row">*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*S Gill (India)*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*5.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*MS Dhoni (India)*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*7.50*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*KD Karthik (India)*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*9.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="match_participant_row">*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*KM Jadhav (India)*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*9.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*V Shankar (India)*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*13.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*RA Jadeja (India)*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*21.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="match_participant_row">*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*B Kumar (India)*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*67.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*K Yadav (India)*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*101.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*M Shami (India)*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*151.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}

                                {/*</div>*/}
                            {/*</div>*/}

                            {/*<div className="coupon_table">*/}
                                {/*<div className="coupon_table_header">*/}
                                    {/*<div className="img_container">*/}
                                        {/*<img src="/img/hl_Cricket_MelbourneStars_Generic_1217.jpg" alt="coupon_img"/>*/}
                                    {/*</div>*/}
                                    {/*<div className="header_container">*/}
                                        {/*<div className="header_competition">Big Bash</div>*/}
                                        {/*<div className="fixture_block">*/}
                                            {/*<div className="fixture_label">Melbourne Stars vs Adelaide Strikers</div>*/}
                                            {/*<div className="fixture_icon in_play_icon"></div>*/}
                                        {/*</div>*/}
                                        {/*<a href="#" className="header_link yellow_text">More Markets</a>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                                {/*<div className="match_table_grid">*/}
                                    {/*<div className="match_grid grid2cols">*/}
                                        {/*<div className="title_container">*/}
                                            {/*<div className="title_name">To Win the Match</div>*/}
                                            {/*/!*<div className="title_icon"></div>*!/*/}
                                        {/*</div>*/}
                                        {/*<div className="match_participant_row">*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Melbourne Stars*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*1.80*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Adelaide Strikers*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*2.10*/}
                                                {/*</div>*/}
                                            {/*</div>*/}

                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*<div className="match_grid grid3cols">*/}
                                        {/*<div className="title_container">*/}
                                            {/*<div className="title_name">Highest Opening Partnership</div>*/}
                                            {/*/!*<div className="title_icon"></div>*!/*/}
                                        {/*</div>*/}
                                        {/*<div className="match_participant_row">*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Melbourne Stars*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*1.80*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Tie*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*21.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Adelaide Strikers*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*1.90*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*<div className="match_grid grid3cols">*/}
                                        {/*<div className="title_container">*/}
                                            {/*<div className="title_name">Top Team Batsman</div>*/}
                                            {/*/!*<div className="title_icon"></div>*!/*/}
                                        {/*</div>*/}
                                        {/*<div className="match_participant_row">*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*BR Dunk (Melbourne Stars)*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*4.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*PSP Handscomb (Melbourne Stars)*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*4.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*EP Gulbis (Melbourne Stars)*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*4.50*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="match_participant_row">*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*NJ Maddinson (Melbourne Stars)*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*4.50*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*GJ Maxwell (Melbourne Stars)*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*4.50*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*MP Stoinis (Melbourne Stars)*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*5.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="match_participant_row">*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*SE Gotch (Melbourne Stars)*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*7.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Dwayne Bravo (Melbourne Stars)*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*9.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*MJ Santner (New Zealand)*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*17.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="match_participant_row">*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*C de Grandhomme (New Zealand)*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*17.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*DAJ Bracewell (New Zealand)*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*17.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*MJ Henry (New Zealand)*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*51.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}

                                    {/*<div className="match_grid grid3cols">*/}
                                        {/*<div className="title_container">*/}
                                            {/*<div className="title_name">Top Team Batsman</div>*/}
                                            {/*/!*<div className="title_icon"></div>*!/*/}
                                        {/*</div>*/}
                                        {/*<div className="match_participant_row">*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*V Kohli (India)*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*3.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*RG Sharma (India)*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*4.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*S Dhawan (India)*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*4.50*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="match_participant_row">*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*S Gill (India)*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*5.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*MS Dhoni (India)*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*7.50*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*KD Karthik (India)*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*9.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="match_participant_row">*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*KM Jadhav (India)*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*9.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*V Shankar (India)*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*13.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*RA Jadeja (India)*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*21.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="match_participant_row">*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*B Kumar (India)*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*67.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*K Yadav (India)*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*101.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*M Shami (India)*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*151.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}

                                {/*</div>*/}
                            {/*</div>*/}

                            {/*<div className="coupon_table">*/}
                                {/*<div className="coupon_table_header">*/}
                                    {/*<div className="img_container">*/}
                                        {/*<img src="/img/hl_Football_Valencia_Rodrigo_0818.jpg" alt="coupon_img"/>*/}
                                    {/*</div>*/}
                                    {/*<div className="header_container">*/}
                                        {/*<div className="header_competition">Copa del Rey</div>*/}
                                        {/*<div className="fixture_block">*/}
                                            {/*<div className="fixture_label">Getafe v Valencia</div>*/}
                                            {/*<div className="fixture_icon in_play_icon"></div>*/}
                                        {/*</div>*/}
                                        {/*<a href="#" className="header_link yellow_text">More Markets</a>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                                {/*<div className="match_table_grid">*/}
                                    {/*<div className="match_grid grid2cols">*/}
                                        {/*<div className="title_container">*/}
                                            {/*<div className="title_name">To Qualify</div>*/}
                                            {/*/!*<div className="title_icon"></div>*!/*/}
                                        {/*</div>*/}
                                        {/*<div className="match_participant_row">*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Getafe*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*2.50*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Valencia*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*1.50*/}
                                                {/*</div>*/}
                                            {/*</div>*/}

                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*<div className="match_grid grid3cols">*/}
                                        {/*<div className="title_container">*/}
                                            {/*<div className="title_name">Full Time Result</div>*/}
                                            {/*/!*<div className="title_icon"></div>*!/*/}
                                        {/*</div>*/}
                                        {/*<div className="match_participant_row">*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Getafe*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*2.45*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Draw*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*3.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Valencia*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*3.20*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*<div className="match_grid grid3cols">*/}
                                        {/*<div className="title_container">*/}
                                            {/*<div className="title_name">Correct Score</div>*/}
                                            {/*/!*<div className="title_icon"></div>*!/*/}
                                        {/*</div>*/}
                                        {/*<div className="match_participant_row">*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Getafe 1-0*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*2.45*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Getafe 2-0*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*10.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Getafe 2-1*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*10.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="match_participant_row">*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Valencia 1-0*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*7.50*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Valencia 2-0*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*13.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Valencia 2-1*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*12.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}

                                    {/*<div className="match_grid grid3cols">*/}
                                        {/*<div className="title_container">*/}
                                            {/*<div className="title_name">Result/Both Teams to Score</div>*/}
                                            {/*/!*<div className="title_icon"></div>*!/*/}
                                        {/*</div>*/}
                                        {/*<div className="match_participant_row">*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Getafe & Yes*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*6.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Getafe & No*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*3.60*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Getafe 2-1*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*10.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="match_participant_row">*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Valencia & No*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*4.75*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Draw & Yes*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*4.50*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Draw & No*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*6.50*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}

                                    {/*<div className="match_grid grid3cols">*/}
                                        {/*<div className="title_container">*/}
                                            {/*<div className="title_name">Half-Time</div>*/}
                                            {/*/!*<div className="title_icon"></div>*!/*/}
                                        {/*</div>*/}
                                        {/*<div className="match_participant_row">*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Getafe*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*3.40*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Draw*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*1.90*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Valencia*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*4.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}

                                    {/*</div>*/}

                                    {/*<div className="match_grid grid2cols">*/}
                                        {/*<div className="title_container">*/}
                                            {/*<div className="title_name">Total Goals</div>*/}
                                            {/*/!*<div className="title_icon"></div>*!/*/}
                                        {/*</div>*/}
                                        {/*<div className="match_participant_row">*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Under*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_handicap">*/}
                                                    {/*2.5*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*1.50*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                   {/*Over*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_handicap">*/}
                                                    {/*2.5*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*2.50*/}
                                                {/*</div>*/}
                                            {/*</div>*/}

                                        {/*</div>*/}
                                    {/*</div>*/}

                                    {/*<div className="match_grid grid2cols">*/}
                                        {/*<div className="title_container">*/}
                                            {/*<div className="title_name">Both Teams to Score</div>*/}
                                            {/*/!*<div className="title_icon"></div>*!/*/}
                                        {/*</div>*/}
                                        {/*<div className="match_participant_row">*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                   {/*Yes*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*2.05*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*No*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*1.70*/}
                                                {/*</div>*/}
                                            {/*</div>*/}

                                        {/*</div>*/}
                                    {/*</div>*/}

                                    {/*<div className="match_grid grid3cols">*/}
                                        {/*<div className="title_container">*/}
                                            {/*<div className="title_name">Corners</div>*/}
                                            {/*/!*<div className="title_icon"></div>*!/*/}
                                        {/*</div>*/}
                                        {/*<div className="match_participant_row">*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Over*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_handicap">*/}
                                                    {/*10*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*2.37*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Exactly*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_handicap">*/}
                                                    {/*10*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*7.50*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Under*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_handicap">*/}
                                                    {/*10*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*1.83*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}

                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}

                            {/*<div className="coupon_table">*/}
                                {/*<div className="coupon_table_header">*/}
                                    {/*<div className="img_container">*/}
                                        {/*<img src="/img/hl_Football_Benfica_JardelVieira_0119.jpg" alt="coupon_img"/>*/}
                                    {/*</div>*/}
                                    {/*<div className="header_container">*/}
                                        {/*<div className="header_competition">Portugal League Cup</div>*/}
                                        {/*<div className="fixture_block">*/}
                                            {/*<div className="fixture_label">Benfica v FC Porto</div>*/}
                                            {/*<div className="fixture_icon"></div>*/}
                                        {/*</div>*/}
                                        {/*<a href="#" className="header_link yellow_text">More Markets</a>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                                {/*<div className="match_table_grid">*/}
                                    {/*<div className="match_grid grid3cols">*/}
                                        {/*<div className="title_container">*/}
                                            {/*<div className="title_name">Full Time Result</div>*/}
                                            {/*/!*<div className="title_icon"></div>*!/*/}
                                        {/*</div>*/}
                                        {/*<div className="match_participant_row">*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Benfica*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*3.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Draw*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*3.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*FC Porto*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*2.50*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*<div className="match_grid grid2cols">*/}
                                        {/*<div className="title_container">*/}
                                            {/*<div className="title_name">To Qualify</div>*/}
                                            {/*/!*<div className="title_icon"></div>*!/*/}
                                        {/*</div>*/}
                                        {/*<div className="match_participant_row">*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Benfica*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*1.95*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*FC Porto*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*2.50*/}
                                                {/*</div>*/}
                                            {/*</div>*/}

                                        {/*</div>*/}
                                    {/*</div>*/}

                                    {/*<div className="match_grid grid3cols">*/}
                                        {/*<div className="title_container">*/}
                                            {/*<div className="title_name">Correct Score</div>*/}
                                            {/*/!*<div className="title_icon"></div>*!/*/}
                                        {/*</div>*/}
                                        {/*<div className="match_participant_row">*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Benfica 1-0*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*8.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Benfica 2-0*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*13.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Benfica 2-1*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*12.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="match_participant_row">*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*FC Porto 1-0*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*7.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*FC Porto 2-0*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*11.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*FC Porto 2-1*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*10.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}

                                    {/*<div className="match_grid grid3cols">*/}
                                        {/*<div className="title_container">*/}
                                            {/*<div className="title_name">Result/Both Teams to Score</div>*/}
                                            {/*/!*<div className="title_icon"></div>*!/*/}
                                        {/*</div>*/}
                                        {/*<div className="match_participant_row">*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Benfica & Yes*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*6.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Benfica & No*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*3.60*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*FC Porto & Yes*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*10.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="match_participant_row">*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*FC Porto & No*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*4.75*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Draw & Yes*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*4.50*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Draw & No*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*7.50*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}

                                    {/*<div className="match_grid grid3cols">*/}
                                        {/*<div className="title_container">*/}
                                            {/*<div className="title_name">Half-Time</div>*/}
                                            {/*/!*<div className="title_icon"></div>*!/*/}
                                        {/*</div>*/}
                                        {/*<div className="match_participant_row">*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Getafe*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*3.40*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Draw*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*1.90*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Valencia*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*4.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}

                                    {/*</div>*/}

                                    {/*<div className="match_grid grid2cols">*/}
                                        {/*<div className="title_container">*/}
                                            {/*<div className="title_name">Total Goals</div>*/}
                                            {/*/!*<div className="title_icon"></div>*!/*/}
                                        {/*</div>*/}
                                        {/*<div className="match_participant_row">*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Under*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_handicap">*/}
                                                    {/*2.5*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*1.50*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Over*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_handicap">*/}
                                                    {/*2.5*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*2.50*/}
                                                {/*</div>*/}
                                            {/*</div>*/}

                                        {/*</div>*/}
                                    {/*</div>*/}

                                    {/*<div className="match_grid grid2cols">*/}
                                        {/*<div className="title_container">*/}
                                            {/*<div className="title_name">Both Teams to Score</div>*/}
                                            {/*/!*<div className="title_icon"></div>*!/*/}
                                        {/*</div>*/}
                                        {/*<div className="match_participant_row">*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Yes*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*2.05*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*No*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*1.70*/}
                                                {/*</div>*/}
                                            {/*</div>*/}

                                        {/*</div>*/}
                                    {/*</div>*/}

                                    {/*<div className="match_grid grid3cols">*/}
                                        {/*<div className="title_container">*/}
                                            {/*<div className="title_name">Corners</div>*/}
                                            {/*/!*<div className="title_icon"></div>*!/*/}
                                        {/*</div>*/}
                                        {/*<div className="match_participant_row">*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Over*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_handicap">*/}
                                                    {/*9*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                   {/*1.83*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Exactly*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_handicap">*/}
                                                    {/*9*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*7.00*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="match_participant">*/}
                                                {/*<div className="participant_name">*/}
                                                    {/*Under*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_handicap">*/}
                                                   {/*9*/}
                                                {/*</div>*/}
                                                {/*<div className="participant_odds yellow_text">*/}
                                                    {/*2.37*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}

                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        </div>

                        {/* Gaming Module - in Mobile View */} 
                        <div id="" className="GamingLinksContainer homePagePod">
                                <div className="GamingLinksModule">
                                    <h1 className="GamingLinksModule_Title">Gaming</h1>
                                    <div className="HorizontalScroller">
                                            <div className="GamingLinksModule_GamesContainer HorizontalScroller_ScrollContent">
                                                <a href="#" className="GameLink GameLink_Casino">Casino</a>
                                                <a href="#" className="GameLink GameLink_Gaming">Games</a>
                                                <a href="#" className="GameLink GameLink_Vegas">Vegas</a>
                                            </div>
                                    </div>
                                </div>
                        </div>
                        {/* END Gaming Module - in Mobile View */}

                        {/* Instant Games Module - in Mobile View */} 
                        <div className="InstantGamesContainer homePagePod">
                            <div className="InstantGamesModule">
                                <h1 className="InstantGamesModule_Title">Instant Games</h1>
                                <div className="HorizontalScroller InstantGamesScroller owl-carousel owl-theme">
                                            <div className="GameItem">
                                                <img alt="Live Roulette" src="/img/MobilePremiumGrfx/mob_live-roulette-ft_V2.jpg" className="GameItem_Image" />
                                                <div className="GameItem_ImageName">Live Roulette</div>
                                            </div>
                                            <div className="GameItem">
                                                <img alt="Blackjack" src="/img/MobilePremiumGrfx/mob_Blackjack-ft_0618.jpg" className="GameItem_Image" />
                                                <div className="GameItem_ImageName">Blackjack</div>
                                            </div>
                                            <div className="GameItem">
                                                <img alt="8 Immortals" src="/img/MobilePremiumGrfx/mob_8Immortals-ft.jpg" className="GameItem_Image" />
                                                <div className="GameItem_ImageName">8 Immortals</div>
                                            </div>
                                            <div className="GameItem">
                                                <img alt="Solar Flash" src="/img/MobilePremiumGrfx/mob_Solar-Flash-ft.jpg" className="GameItem_Image" />
                                                <div className="GameItem_ImageName">Solar Flash</div>
                                            </div>
                                            <div className="GameItem">
                                                <img alt="Age of the Gods" src="/img/MobilePremiumGrfx/mob_age-of-the-gods-ft.jpg" className="GameItem_Image" />
                                                <div className="GameItem_ImageName">Age of the Gods</div>
                                            </div>
                                            <div className="GameItem">
                                                <img alt="God of Storms" src="/img/MobilePremiumGrfx/mob_God-Of-Storms_ft.jpg" className="GameItem_Image" />
                                                <div className="GameItem_ImageName">God of Storms</div>
                                            </div>
                                </div>
                            </div>
                        </div>
                        <div id="" className="Container enhancedPod moreAppsPod">
                            <div className="podSplashRow"><span>View all bet365 apps</span></div>
                        </div>
                        {/* END Instant Games Module - in Mobile View */}
                        
                    </div>
                </div>
            </div>
        )

    }
}

export default Home;
