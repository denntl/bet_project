import React from 'react';
import Footer from "../../footer";
import Slider from "../../shared/slider";
import AllMarketsComponent from "./partials/allMarkets";
import MainMarkets from "./partials/mainMarkets";
import OtherSport from "./partials/otherSport";
import ImportantNote from "./partials/importantNote";



class Overview extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            allSports: this.props.allSports,
            sports: this.props.sports,
            selIdsport: 6046,
            tabName: "Soccer",
            color: "sport_green_header",
            selectedMarkets: "all",
            selectedTypeEvents: "all",
            selectedQuickBetId: this.props.selectedQuickBetId,
        };
        this.changeMarkets = this.changeMarkets.bind(this);
        this.changeTypeEvents = this.changeTypeEvents.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            sports: nextProps.sports,
            allSports: nextProps.allSports,
            selectedQuickBetId: nextProps.selectedQuickBetId
        })
    }

    componentDidMount() {
        $('.scroll_block').mCustomScrollbar({
            axis: "y",
            theme: "minimal",
            scrollInertia: 550,
            scrollbarPosition: "inside",
            callbacks:{
                whileScrolling: function(){
                    if($(".selected_bet").length) {
                        let top, left, heightModal, modal, clickButton;
                        modal = $(".quickBetModule");
                        clickButton = $(".selected_bet");
                        top = clickButton.offset().top;
                        left = clickButton.offset().left;
                        heightModal = modal.height();
                        if (top < 330) {
                            modal.css({
                                'top': (top + 45),
                                'left': left,
                                'display': "block"
                            });
                            modal.addClass("arrowTop")
                            if (top < 103) {
                                modal.css({
                                    'display': "none",
                                });
                            }
                        } else {
                            modal.css({
                                'top': (top - heightModal),
                                'left': left,
                            });
                            modal.removeClass("arrowTop")
                        }
                    }
                }.bind(this)
            }
        });
    }

    selectedSport(id, nameSport, color) {
        let name = nameSport;
       if (id == 6046) {
           this.changeMarkets('all');
           name = "Soccer";
       } else {
           this.changeMarkets('main');
       }

        this.setState({
            selIdsport: id,
            tabName: name,
            color: color
        })
    }
    changeMarkets(type) {
        this.setState({
            selectedMarkets: type
        })
    }
    changeTypeEvents(type) {
        this.setState({
            selectedTypeEvents: type
        })
    }
    toggleLeagueMarket=(id)=>{
        if ($('.'+ id + "-market").hasClass('opened')) {
            $('.'+ id + "-market").removeClass('opened')
            $('.'+ id + "-button").removeClass('visible')
        } else {
            $('.'+ id + "-market").addClass('opened')
            $('.'+ id + "-button").addClass('visible')
        }
    }
    render() {
//console.log('789', this.state)
        return(
            <div id="overview" className="scroll_block ">
                <Slider type="overview"  selectedSport={(id, name, color) => this.selectedSport(id, name, color) }/>

                <div className="overview_tab_tables">

                    {
                        this.state.selIdsport == "favourites" ?
                            <div className="play_classification in-play" id="favourites">
                                <div className="play_classification_header sport_favourite_header">
                                    <span>{this.state.tabName}</span>
                                </div>
                                <div className="NoFavouritesMessage ">
                                    <div className="NoFavouritesMessage_Line1 ">Add your favourite events and competitions.</div>
                                    <div className="NoFavouritesMessage_Line2 ">Click on a star for the item to appear here.</div>
                                </div>
                            </div>

                            :
                            this.state.selIdsport == 687888 || this.state.selIdsport == 687893?

                                <OtherSport typeSport={this.state.selIdsport}/>
                                :

                            <div className="play_classification in-play">
                                <div className={`play_classification_header ${this.state.color}`}>
                                    <span>{this.state.tabName}</span>
                                    <div className="sport_events">
                                        <div className={`events_btn ${this.state.selectedTypeEvents == "all" ? "selected" : ""}`}
                                             onClick={() => this.changeTypeEvents('all')}>All Events
                                        </div>
                                        <div className={`events_btn ${this.state.selectedTypeEvents == "live" ? "selected" : ""}`}
                                             onClick={() => this.changeTypeEvents('live')}>Live Streaming
                                        </div>
                                    </div>
                                    <div className="markets_block">
                                        <div className={`markets_btn ${this.state.selectedMarkets == "all" ? "selected" : ""}`}
                                             onClick={() => this.changeMarkets("all")}>All Markets
                                        </div>
                                        <div
                                            className={`markets_btn main_markets ${this.state.selectedMarkets == "main" ? "selected" : ""}`}
                                            onClick={() => this.changeMarkets("main")}>Main Markets
                                        </div>
                                    </div>
                                </div>
                                <div className="favourite_container"></div>
                                {

                                   Object.keys(this.state.sports).length && this.state.selectedMarkets == "all" ?


                                        <AllMarketsComponent
                                            allSports={this.state.allSports}
                                            eventsSelectedtSport={this.state.sports[this.state.selIdsport]}
                                            serverTimestamp={this.props.serverTimestamp}
                                            typeSport={this.state.selIdsport}
                                            addToBetSlip={(info, bet, typeBet) => this.props.addToBetSlip(info, bet, typeBet)}
                                            toggleLeagueMarket={(id)=>this.toggleLeagueMarket(id)}
                                        />
                                        :
                                       ""
                                }
                                {
                                    Object.keys(this.state.sports).length && this.state.selectedMarkets == "main" ?
                                        <MainMarkets allSports={this.state.allSports}
                                                     eventsSelectedtSport={this.state.sports[this.state.selIdsport]}
                                                     currentSport={this.state.sports[this.state.selIdsport]}
                                                     serverTimestamp={this.props.serverTimestamp}
                                                     typeSport={this.state.selIdsport}
                                                     addToBetSlip={(info, bet, typeBet) => this.props.addToBetSlip(info, bet, typeBet)}
                                                     toggleLeagueMarket={(id)=>this.toggleLeagueMarket(id)}
                                        />
                                        :
                                       ""
                                }


                            </div>
                    }




                    {/*  <!---------table for tennis------->*/}
                    {/*<div className="play_classification in-play invisible" id="tennis">*/}
                        {/*<div className="play_classification_header sport_olive_header">*/}
                            {/*<span>Tennis</span>*/}
                            {/*<div className="sport_events">*/}
                                {/*<div className="events_btn selected">All Events</div>*/}
                                {/*<div className="events_btn">Top Events</div>*/}
                                {/*<div className="events_btn">Live Streaming</div>*/}
                            {/*</div>*/}
                            {/*<div className="markets_block">*/}
                                {/*<div className="markets_btn">All Markets</div>*/}
                                {/*<div className="markets_btn selected">Main Markets</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<div className="play_classification_league">*/}
                            {/*<div className="play_league">*/}
                                {/*<div className="play_league_header">*/}
                                    {/*<div className="competition_btn">*/}
                                        {/*<div className="league_name">ATP Beijing</div>*/}
                                        {/*<div className="league_header_buttons visible">*/}
                                            {/*<div className="event_label">Winner</div>*/}
                                            {/*<div className="event_label">Current Set</div>*/}
                                            {/*<div className="event_label">Next Game</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="favourite_icon_wrapper">*/}
                                            {/*<div className="favourite_icon"></div>*/}

                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*<div className="play_league_group_wrapp opened">*/}
                                        {/*<div className="participant_group_wrapper">*/}
                                            {/*<div className="participant_group">*/}
                                                {/*<div className="participant_wrapper">*/}
                                                    {/*<div className="participant_stack">*/}
                                                        {/*<p className="participant_name">*/}
                                                            {/*<span className="player_indicator"></span>*/}
                                                            {/*Andreas Seppi*/}
                                                        {/*</p>*/}

                                                        {/*<div className="participant_score">*/}
                                                            {/*<span className="event_score yellow_text">3</span>*/}
                                                            {/*<span className="event_score yellow_text">1</span>*/}
                                                            {/*<span className="event_score yellow_text">40</span>*/}
                                                        {/*</div>*/}
                                                    {/*</div>*/}

                                                    {/*<div className="participant_stack">*/}
                                                        {/*<p className="participant_name">*/}
                                                            {/*<span className="player_indicator active"></span>*/}
                                                            {/*Marton Fucsovics*/}
                                                        {/*</p>*/}
                                                        {/*<div className="participant_score">*/}
                                                            {/*<span className="event_score yellow_text">6</span>*/}
                                                            {/*<span className="event_score yellow_text">3</span>*/}
                                                            {/*<span className="event_score yellow_text">30</span>*/}
                                                        {/*</div>*/}
                                                    {/*</div>*/}
                                                    {/*<div className="participant_stack info_game">*/}
                                                        {/*<p className="participant_name">*/}
                                                            {/*Set*/}
                                                            {/*<span className="count">2</span>*/}
                                                        {/*</p>*/}
                                                        {/*<p className="participant_name">*/}
                                                            {/*Game*/}
                                                            {/*<span className="count">16</span>*/}
                                                        {/*</p>*/}

                                                    {/*</div>*/}

                                                {/*</div>*/}
                                                {/*<div className="play_icon_wrapper">*/}
                                                    {/*<div className="play_icon video"></div>*/}
                                                    {/*<div className="play_icon grass"></div>*/}

                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="event_odds">*/}
                                            {/*<div className="column">*/}
                                                {/*<div className="value_wrapp">*/}
                                                    {/*<span className="participant_odds yellow_text">+200</span>*/}
                                                {/*</div>*/}
                                                {/*<div className="value_wrapp">*/}
                                                    {/*<span className="participant_odds yellow_text">+200</span>*/}
                                                {/*</div>*/}
                                                {/*<div className="value_wrapp">*/}
                                                    {/*<span className="participant_odds yellow_text">+200</span>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="column">*/}
                                                {/*<div className="value_wrapp">*/}
                                                    {/*<span className="participant_odds yellow_text">+200</span>*/}
                                                {/*</div>*/}
                                                {/*<div className="value_wrapp">*/}
                                                    {/*<span className="participant_odds yellow_text">+200</span>*/}
                                                {/*</div>*/}
                                                {/*<div className="value_wrapp">*/}
                                                    {/*<span className="participant_odds yellow_text">+200</span>*/}
                                                {/*</div>*/}

                                            {/*</div>*/}
                                            {/*<div className="column">*/}
                                                {/*<div className="value_wrapp">*/}
                                                    {/*<span className="participant_odds yellow_text">+200</span>*/}
                                                {/*</div>*/}
                                                {/*<div className="value_wrapp">*/}
                                                    {/*<span className="participant_odds yellow_text">+200</span>*/}
                                                {/*</div>*/}
                                                {/*<div className="value_wrapp">*/}
                                                    {/*<span className="participant_odds yellow_text">+200</span>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="event_count_btn">*/}
                                            {/*<div className="favourite_icon"></div>*/}
                                            {/*<div className="event_count">41</div>*/}

                                        {/*</div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}

                            {/*</div>*/}
                        {/*</div>*/}

                    {/*</div>*/}
                    {/*  <!-- end table for table-->*/}


                    {/*<!---------table for baseball------->*/}
                    {/*<div className="play_classification in-play invisible" id="baseball">*/}
                        {/*<div className="play_classification_header sport_orange_header">*/}
                            {/*<span>Baseball</span>*/}
                            {/*<div className="sport_events">*/}
                                {/*<div className="events_btn selected"></div>*/}
                                {/*<div className="events_btn"></div>*/}
                                {/*<div className="events_btn"></div>*/}
                            {/*</div>*/}
                            {/*<div className="markets_block">*/}
                                {/*<div className="markets_btn">All Markets</div>*/}
                                {/*<div className="markets_btn selected">Main Markets</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<div className="play_classification_league">*/}
                            {/*<div className="play_league">*/}
                                {/*<div className="play_league_header">*/}
                                    {/*<div className="competition_btn">*/}
                                        {/*<div className="league_name"></div>*/}
                                        {/*<div className="league_header_buttons visible">*/}
                                            {/*<div className="event_label">Run Line</div>*/}
                                            {/*<div className="event_label">Total</div>*/}
                                            {/*<div className="event_label">Money Line</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="favourite_icon_wrapper">*/}
                                            {/*<div className="favourite_icon"></div>*/}

                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*<div className="play_league_group_wrapp opened">*/}
                                        {/*<div className="participant_group_wrapper">*/}
                                            {/*<div className="participant_group">*/}
                                                {/*<div className="participant_wrapper">*/}
                                                    {/*<div className="participant_stack">*/}
                                                        {/*<p className="participant_name">*/}
                                                            {/*Yokohama Bay Stars*/}
                                                        {/*</p>*/}

                                                        {/*<div className="participant_score">*/}
                                                            {/*<span className="event_score yellow_text">1</span>*/}
                                                        {/*</div>*/}
                                                    {/*</div>*/}

                                                    {/*<div className="participant_stack">*/}
                                                        {/*<p className="participant_name">*/}
                                                            {/*Hanshin Tigers*/}
                                                        {/*</p>*/}
                                                        {/*<div className="participant_score">*/}
                                                            {/*<span className="event_score yellow_text">0</span>*/}
                                                        {/*</div>*/}
                                                    {/*</div>*/}
                                                {/*</div>*/}
                                                {/*<div className="play_icon_wrapper">*/}
                                                    {/*<div className="play_icon baseball_icon"></div>*/}

                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="event_odds">*/}
                                            {/*<div className="column">*/}
                                                {/*<div className="value_wrapp">*/}
                                                    {/*<span className="participant_handicap">-1.5</span>*/}
                                                    {/*<span className="participant_odds yellow_text">+200</span>*/}
                                                {/*</div>*/}
                                                {/*<div className="value_wrapp">*/}
                                                    {/*<span className="participant_handicap">-1.5</span>*/}
                                                    {/*<span className="participant_odds yellow_text">+200</span>*/}
                                                {/*</div>*/}
                                                {/*<div className="value_wrapp">*/}
                                                    {/*<span className="participant_handicap"></span>*/}
                                                    {/*<span className="participant_odds yellow_text">+200</span>*/}
                                                {/*</div>*/}

                                            {/*</div>*/}
                                            {/*<div className="column">*/}
                                                {/*<div className="value_wrapp">*/}
                                                    {/*<span className="participant_odds yellow_text">+200</span>*/}
                                                {/*</div>*/}
                                                {/*<div className="value_wrapp">*/}
                                                    {/*<span className="participant_odds yellow_text">+200</span>*/}
                                                {/*</div>*/}
                                                {/*<div className="value_wrapp">*/}
                                                    {/*<span className="participant_handicap"></span>*/}
                                                    {/*<span className="participant_odds yellow_text">+200</span>*/}
                                                {/*</div>*/}

                                            {/*</div>*/}
                                            {/*<div className="column">*/}
                                                {/*<div className="value_wrapp">*/}
                                                    {/*<span className="participant_odds yellow_text">+200</span>*/}
                                                {/*</div>*/}
                                                {/*<div className="value_wrapp">*/}
                                                    {/*<span className="participant_odds yellow_text">+200</span>*/}
                                                {/*</div>*/}
                                                {/*<div className="value_wrapp">*/}
                                                    {/*<span className="participant_handicap"></span>*/}
                                                    {/*<span className="participant_odds yellow_text">+200</span>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="event_count_btn">*/}
                                            {/*<div className="favourite_icon"></div>*/}
                                            {/*<div className="event_count">41</div>*/}

                                        {/*</div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}

                            {/*</div>*/}
                        {/*</div>*/}

                    {/*</div>*/}
                    {/* <!-- end table for baseball-->*/}
                </div>
                <ImportantNote/>
                {this.props.footer}
            </div>
        )

    }
}

export default Overview;
