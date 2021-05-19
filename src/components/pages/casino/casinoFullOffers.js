import React from 'react';
import {Link, NavLink, Route} from "react-router-dom";
import LuckyMonday from "./CasinoFullOffersList/luckyMonday";
import NewPlayer from "./CasinoFullOffersList/newPlayer";
import LiveBlackjack from "./CasinoFullOffersList/liveBlackjack";
import SlotsClub from "./CasinoFullOffersList/slotsClub";
import qs from "query-string";
import LuckyMondayTerms from "./CasinoFullOffersList/luckyMondayTerms";
import NewPlayerTerms from "./CasinoFullOffersList/newPlayerTerms";
import LiveBlackjackTerms from "./CasinoFullOffersList/liveBlackjackTerms";



class CasinoFullOffers extends React.Component {
    constructor(props) {

        super(props);
        console.log("FFFFFFFFFFFFFFFFFF", this.props)
        let fullOffer ;

        if (typeof this.props.location != "undefined") {
            fullOffer = this.props.location.state;
        }

        this.state={
            offer_full_name: fullOffer,
        }
    }
    render() {
        console.log("FullOffer:offer_full_name", this.state.offer_full_name)
        return(
            <div className="full_offer_container">

                <div className="casino_offer_img">
                    <Route path="/casino/casino_offers/luckyMonday" render={() => <img src="../../img/LuckyMondayWinter_2360x660.jpg" alt="offer_img"/> } />
                    <Route path="/casino/casino_offers/newPlayer" render={() => <img src="../../img/NewPlayerBonus_V2_1200x300.jpg" alt="offer_img"/> } />
                    <Route path="/casino/casino_offers/liveBlackjack" render={() => <img src="../../img/LiveBlackjackCashback_1200x300.jpg" alt="offer_img"/> } />
                    <Route path="/casino/casino_offers/slotsClub" render={() => <img src="../../img/SlotsClubMonthly_V2_1200x300.jpg" alt="offer_img"/> } />

                </div>
                <div className="full_offer_content">
                    <div className="full_offer_nav_wrapp">
                        <div className="full_offer_nav">
                            <NavLink to="/casino/casino_offers/luckyMonday" className="nav_link" activeClassName="active">Lucky Monday</NavLink>
                            <NavLink to="/casino/casino_offers/newPlayer" className="nav_link" activeClassName="active">New Player Bonus</NavLink>
                            <NavLink to="/casino/casino_offers/liveBlackjack" className="nav_link" activeClassName="active">Live Blackjack Cashback</NavLink>
                            <NavLink to="/casino/casino_offers/slotsClub" className="nav_link" activeClassName="active">Slots Club</NavLink>
                        </div>
                    </div>

                    <div className="tab_content">
                        <Route path="/casino/casino_offers/luckyMonday" render={() => <LuckyMonday/> } />
                        <Route path="/casino/casino_offers/newPlayer" render={() => <NewPlayer/> } />
                        <Route path="/casino/casino_offers/liveBlackjack" render={() => <LiveBlackjack/> } />
                        <Route path="/casino/casino_offers/slotsClub" render={() => <SlotsClub/> } />

                    </div>
                </div>
                <Route path="/casino/casino_offers/luckyMonday" render={() => <LuckyMondayTerms/> } />
                <Route path="/casino/casino_offers/newPlayer" render={() => <NewPlayerTerms/> } />
                <Route path="/casino/casino_offers/liveBlackjack" render={() => <LiveBlackjackTerms/> } />


            </div>
        )

    }
}

export default CasinoFullOffers;