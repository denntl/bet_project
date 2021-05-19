import React from 'react';
import CasinoGames from "./casinoGames";
import {Link, Route} from "react-router-dom";
import CasinoPageGame from "./casinoPageGame";





class CasinoHome extends React.Component {
    constructor(props) {
        super(props);
        let game = {};
        if(JSON.parse(window.localStorage.getItem("selectedCasinoGame"))) {
            //console.log("JSON: ",JSON.parse(window.localStorage.getItem("selectedCasinoGame")));
            game = JSON.parse(window.localStorage.getItem("selectedCasinoGame"));
        }

        this.state={
            innerTab:'slot_games',
            offer_full_name: this.props.offer_full_name,
            casinoGames:this.props.casinoGames,
            loginToken: this.props.loginToken,
            selectedGame: game || {}
        }
    }

    changeInnerTab(tab) {
        let type;
        switch(tab) {
            // case "featured":
            //     type = ""
            //     break;
            case "slot_games":
                type = "Slot, 5-Reel Slot, 3-Reel Slot, 9-Reel Slot, 7-Reel Slot"
                break;
            case "card_games":
                type = ""
                break;
            case "table_games":
                type = "Table Game,table"
                break;
            case "video_poker":
                type = "video poker";
                break;
            // case "jackpots":
            //     type = ""
            //     break;
        }
        this.props.fetchCasinoList(this.state.loginToken, type)
        this.setState({
            innerTab:tab
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (location.pathname == "/casino/casino_home"|| location.pathname == "/casino") {
            $('.casino-banner-slider').owlCarousel({
                items: 3,
                loop: true,
                autoWidth:true,
                margin: 0,
                nav: true
            });
        }
    }
    componentDidMount() {
        var clear = setInterval(function() {
            if ( $('.casino-banner-slider').length) {
                clearInterval(clear);
                $('.casino-banner-slider').owlCarousel({
                    center: true,
                    items: 3,
                    loop: true,
                    autoWidth:true,
                    margin: 0,
                    nav: true
                });
            }
        }, 300);
        $(window).scroll(function(){
            if ($(window).scrollTop() >= 630) {
                $('.home_inner_navigation').addClass('sticky-header');
            }
            else {
                $('.home_inner_navigation').removeClass('sticky-header');
            }
        });
    let type = null;
        switch(this.state.innerTab) {
            // case "featured":
            //     type = ""
            //     break;
            case "slot_games":
                type = "Slot, 5-Reel Slot, 3-Reel Slot, 9-Reel Slot, 7-Reel Slot"
                break;
            case "card_games":
                type = ""
                break;
            case "table_games":
                type = "Table Game,table"
                break;
            case "video_poker":
                type = "video poker";
                break;
            // case "jackpots":
            //     type = ""
            //     break;
        }
        this.props.fetchCasinoList(this.state.loginToken, type)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            casinoGames: nextProps.casinoGames,
            loginToken: nextProps.loginToken,
            offer_full_name: nextProps.offer_full_name,
        });
    }
    getDataSelectedGame=(game)=>{
        this.setState({selectedGame:game});
        window.localStorage.setItem("selectedCasinoGame", JSON.stringify(game));
    };


    casinoHome=()=>{
        return <div className="casino_home">
            <div className="casino-banner-slider owl-carousel">
                <div className="item">
                    <Link to={{
                    pathname:"/casino/casino_offers/newPlayer",
                    state:"newPlayer"
                    }} className="casino_offers casino_slider"  onClick={() => this.props.changeOfferState('newPlayer')}>

                        <div className="casino_offer_img">
                            <img src="../img/NewPlayerBonus_V2_1200x300.jpg" alt="offer_img"/>
                        </div>
                        <div className="casino_offer_details">
                            <div className="slider_offer_details_header">
                                <div className="offer_details_header">Get off to a flying start with a New Player Bonus of up to $200</div>
                                <div className="casino_btn casino_offer casino_slider_btn">Join Now</div>
                            </div>

                            <div className="offer_details_conditions slider_conditions">
                                <span className="offer_details_conditions_text">Deposit min. £10. Applies to first deposit to Casino only. Max. bonus £100. 15x wagering (game weighting applies) on deposit and bonus to make the bonus balance withdrawable.</span>
                                <span className="offer_details_conditions_link">Time limits and T&Cs apply.</span>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="item">
                    <Link to={{
                        pathname:"/casino/casino_offers/liveBlackjack",
                        state:"liveBlackjack"
                    }}  className="casino_offers casino_slider" >
                        <div className="casino_offer_img">
                            <img src="../img/LiveBlackjackCashback_1200x300.jpg" alt="offer_img"/>
                        </div>
                        <div className="casino_offer_details">
                            <div className="slider_offer_details_header">
                                <div className="offer_details_header">Live Blackjack Cashback</div>
                                <div className="casino_btn casino_offer casino_slider_btn">More Details</div>
                            </div>
                            <div className="offer_details_conditions slider_conditions">
                                <span className="offer_details_conditions_text">Opt in. Play 10 game rounds or more on Live Blackjack. Get 25% cashback from $10 up to $50 on losses. Promo runs 00:00 GMT until 23:59 GMT every Tuesday in January, February and March 2019. Game restrictions apply. </span>
                                <span className="offer_details_conditions_link">T&Cs apply.</span>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="item">
                    <Link to={{
                        pathname:"/casino/casino_offers/slotsClub",
                        state:"slotsClub"
                        }} className="casino_offers casino_slider">
                        <div className="casino_offer_img">
                            <img src="../img/SlotsClubMonthly_V2_1200x300.jpg" alt="offer_img"/>
                        </div>
                        <div className="casino_offer_details">
                            <div className="slider_offer_details_header">
                                <div className="offer_details_header">Make the most of your monthly play with Slots Club</div>
                                <div className="casino_btn casino_offer casino_slider_btn">More Details</div>
                            </div>
                            <div className="offer_details_conditions slider_conditions">
                                <span className="offer_details_conditions_text">Opt in required. Monthly qualifying periods from 1st January to 31st March 2019. Earn 100+ Comp Points on 10 individual days during a qualifying period to qualify. 8x wagering to make the bonus balance withdrawable.</span>
                                <span className="offer_details_conditions_link">Time limits and T&Cs apply.</span>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="item">
                    <Link to={{
                        pathname:"/casino/casino_offers/luckyMonday",
                        state:"luckyMonday"
                        }} className="casino_offers casino_slider">
                        <div className="casino_offer_img">
                            <img src="../img/LuckyMondayWinter_2360x660.jpg" alt="offer_img"/>
                        </div>
                        <div className="casino_offer_details">
                            <div className="slider_offer_details_header">
                                <div className="offer_details_header">Start the week with Lucky Monday</div>
                                <div className="casino_btn casino_offer casino_slider_btn">More Details</div>
                            </div>
                            <div className="offer_details_conditions slider_conditions">
                                <span className="offer_details_conditions_text">Opt in required. Wager min. $40 on slot games to get a draw ticket. Draw takes place within 48 hours of each period. Free Spins must be accepted. Promo runs from 00:00 GMT until 23:59 GMT every Monday during the month. Time limits and T&Cs apply.</span>
                                <span className="offer_details_conditions_link" >T&Cs apply.</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="casinoSecondContainer">
                <Link to="/live_casino" className="link_live_casino_wrapp">
                    <div className="link_live_casino">
                        <img src="../img/Live_426x120.jpg" alt="live casino"/>
                        <div className="overlayContainer"></div>
                        <div className="link_live_casino_content">
                            <div className="link_live_casino_title">Live Casino</div>
                            <div className="overlay_text">Play Now</div>
                        </div>
                        <svg className="link_live_casino_filter">
                            <filter id="duotone-filter">
                                <feColorMatrix type="saturate" values="0.10"></feColorMatrix>
                                <feComponentTransfer colorInterpolationFilters="sRGB" result="duotone">
                                    <feFuncR type="table" tableValues="0.01568627451 0.1294117647"></feFuncR>
                                    <feFuncG type="table" tableValues="0.1019607843 0.8"></feFuncG>
                                    <feFuncB type="table" tableValues="0.09411764706 0.7450980392"></feFuncB>
                                    <feFuncA type="table" tableValues="0 1"></feFuncA>
                                </feComponentTransfer>
                            </filter>
                        </svg>
                    </div>
                </Link>

                <ul className="home_inner_navigation">
                    {/*<li className={`top-navigation_item ${this.state.innerTab == "featured" ? "active":""}`}    onClick={()=>this.changeInnerTab("featured")} >Featured</li>*/}
                    <li className={`top-navigation_item ${this.state.innerTab == "slot_games" ? "active":""}`}  onClick={()=>this.changeInnerTab("slot_games")}>SlotGames</li>
                    <li className={`top-navigation_item ${this.state.innerTab == "card_games" ? "active":""}`}  onClick={()=>this.changeInnerTab("card_games")}>Card Games</li>
                    <li className={`top-navigation_item ${this.state.innerTab == "table_games" ? "active":""}`} onClick={()=>this.changeInnerTab("table_games")}>Table Games</li>
                    <li className={`top-navigation_item ${this.state.innerTab == "video_poker" ? "active":""}`} onClick={()=>this.changeInnerTab("video_poker")}>Video Poker</li>
                    {/*<li className={`top-navigation_item $You might also like{this.state.innerTab == "jackpots" ? "active":""}`}    onClick={()=>this.changeInnerTab("jackpots")}>Jackpots</li>*/}
                </ul>

                {this.state.casinoGames.length ?
                    <CasinoGames casinoGames={this.state.casinoGames} typeBlock="main" getDataSelectedGame={this.getDataSelectedGame}/>
                    :""
                }

            </div>
        </div>
    }
    render() {
        //console.log("selectedGame:" , this.state.selectedGame);
        //console.log("casinoGames:" , this.state.casinoGames);
        return(
            <div>
                <Route exact path="/casino" render={() => this.casinoHome() } />
                <Route exact path="/casino/casino_home" render={() => this.casinoHome() } />
                <Route  path="/casino/casino_home/game" render={(props) => <CasinoPageGame {...props} selectedGame={this.state.selectedGame} casinoGames={this.state.casinoGames} getDataSelectedGame={this.getDataSelectedGame}/>} />
            </div>
        )

    }
}

export default CasinoHome;