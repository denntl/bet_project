import React from "react";


class VegasPromotions extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="MainContainerGames vegas_promotions">
                <div className="topPromotions">
                    <a href="#" className="PromotionProd">
                        <div className="PromotionImgWrapper">
                            <img src="/img/promotion1.jpg" alt=""/>
                        </div>
                        <div className="PromotionHeader">New Player Offer</div>
                        <div className="SubPromotionHeader">Join Vegas and enjoy up to 50 Free Spins.</div>
                        <div className="Terms-Conditions">Deposit between $20 and $100. Wager 4x on eligible games to receive 1 Free Spin per $2, up to a Max. of 50. Time limits, game restrictions and T&Cs apply.</div>
                    </a>
                    <a href="#" className="PromotionProd">
                        <div className="PromotionImgWrapper">
                            <img src="/img/promotion2.jpg" alt=""/>
                        </div>
                        <div className="PromotionHeader">Daily Cash Drop</div>
                        <div className="SubPromotionHeader">$5,000 worth of cash prizes to be won! </div>
                        <div className="Terms-Conditions">In-game opt in required. Qualifying stakes on participating games could trigger a cash prize. Prizes will be credited immediately to withdrawable cash balance. Promotion runs from 16:00 UK Time to 23:59 UK Time every Friday in October. Time limits, game restrictions and T&Cs Apply.</div>
                    </a>
                </div>
            </div>
        )
    }
}
export default VegasPromotions;