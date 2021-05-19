import React from 'react';
import CasinoFullOffers from "./casinoFullOffers";
import {Link, Route} from "react-router-dom";
import CasinoPageGame from "./casinoPageGame";
import qs from "query-string";



class CasinoOffers extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            offer_full_name:this.props.offer_full_name,

        }

    }
    componentWillReceiveProps(nextProps){
        this.setState({
            offer_full_name:nextProps.offer_full_name
        })
    }
    casinoOffers=()=>{
            return <div className="casino_short_offers">

                <Link to={{
                    pathname:"/casino/casino_offers/newPlayer",
                    state:"newPlayer"
                }}  className="casino_offers" >

                    <div className="casino_offer_img">
                        <img src="../img/NewPlayerBonus_V2_1200x300.jpg" alt="offer_img"/>
                    </div>
                    <div className="casino_offer_details">
                        <div className="offer_details_header">New Player Bonus</div>
                        <div className="casino_btn casino_offer">Join Now
                        </div>
                        <div className="offer_details_conditions">
                            <span className="offer_details_conditions_text">Deposit min. £10. Applies to first deposit to Casino only. Max. bonus £100. 15x wagering (game weighting applies) on deposit and bonus to make the bonus balance withdrawable.</span>
                            <a className="offer_details_conditions_link" href="#">Time limits and T&Cs
                                apply.</a>
                        </div>
                    </div>
                </Link>
                <Link to={{
                    pathname:"/casino/casino_offers/liveBlackjack",
                    state:"liveBlackjack"
                }} className="casino_offers">

                    <div className="casino_offer_img">
                        <img src="../img/LiveBlackjackCashback_1200x300.jpg" alt="offer_img"/>
                    </div>
                    <div className="casino_offer_details">
                        <div className="offer_details_header">Live Blackjack Cashback</div>
                        <div className="casino_btn casino_offer bordered">More Details</div>
                        <div className="offer_details_conditions">
                            <span className="offer_details_conditions_text">Opt in. Play 10 game rounds or more on Live Blackjack. Get 25% cashback from $10 up to $50 on losses. Promo runs 00:00 GMT until 23:59 GMT every Tuesday in January, February and March 2019. Game restrictions apply. </span>
                            <a className="offer_details_conditions_link" href="#">T&Cs apply.</a>
                        </div>
                    </div>
                </Link>
                <Link to={{
                    pathname:"/casino/casino_offers/slotsClub",
                    state:"slotsClub"
                }}  className="casino_offers">
                    <div className="casino_offer_img">
                        <img src="../img/SlotsClubMonthly_V2_1200x300.jpg" alt="offer_img"/>
                    </div>
                    <div className="casino_offer_details">
                        <div className="offer_details_header">Slots Club</div>
                        <div className="casino_btn casino_offer bordered">More Details</div>
                        <div className="offer_details_conditions">
                            <span className="offer_details_conditions_text">Opt in required. Monthly qualifying periods from 1st January to 31st March 2019. Earn 100+ Comp Points on 10 individual days during a qualifying period to qualify. 8x wagering to make the bonus balance withdrawable.</span>
                            <a className="offer_details_conditions_link" href="#">Time limits and T&Cs
                                apply.</a>
                        </div>
                    </div>
                </Link>
                <Link to={{
                    pathname:"/casino/casino_offers/luckyMonday",
                    state:"luckyMonday"
                }} className="casino_offers">
                    <div className="casino_offer_img">
                        <img src="../img/LuckyMondayWinter_2360x660.jpg" alt="offer_img"/>
                    </div>
                    <div className="casino_offer_details">
                        <div className="offer_details_header">Lucky Monday</div>
                        <div className="casino_btn casino_offer bordered">More Details</div>
                        <div className="offer_details_conditions">
                            <span className="offer_details_conditions_text">Opt in required. Wager min. $40 on slot games to get a draw ticket. Draw takes place within 48 hours of each period. Free Spins must be accepted. Promo runs from 00:00 GMT until 23:59 GMT every Monday during the month. Time limits and T&Cs apply.</span>
                            <a className="offer_details_conditions_link" href="#">T&Cs apply.</a>
                        </div>
                    </div>
                </Link>
            </div>
    }
    render() {
        console.log("casinoOffers:offer_full_name", this.state.offer_full_name)
        return(
                <div className="MainContainerGames Casino">
                    <Route exact path="/casino/casino_offers" render={() => this.casinoOffers() } />
                    <Route  path="/casino/casino_offers/newPlayer" render={() => <CasinoFullOffers />} />
                    <Route  path="/casino/casino_offers/luckyMonday" render={() => <CasinoFullOffers />} />
                    <Route  path="/casino/casino_offers/liveBlackjack" render={() => <CasinoFullOffers />} />
                    <Route  path="/casino/casino_offers/slotsClub" render={() => <CasinoFullOffers />} />
                </div>



        )

    }
}

export default CasinoOffers;
