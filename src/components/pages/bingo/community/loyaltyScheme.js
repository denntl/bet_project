import React from 'react';
import {Link} from "react-router-dom";



class LoyaltyScheme extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="MainContainerGames fullCommunity">
                <div className="bannerContainer">
                    <div className="bannerHeader">
                        <img src="../../img/788x112px-Loyalty-Scheme.gif" alt="Loyalty Scheme"/>
                    </div>
                </div>
                <div className="contentContainer">
                    <div className="communityTitle">Get a little something back for playing with us...</div>
                    <div className="infoTextContainer"><p>Earn <b>Loyalty Points</b> by playing your favourite Bingo games and then exchange them for a Bingo Bonus.</p></div>
                    <div className="AdvancedList">
                        <div className="infoTextContainer">
                            <p>How to take part:</p>
                        </div>
                        <ul>
                            <li><span className="blue_text">Earn <b>six points</b> for every £10 staked on Bingo Tickets.</span></li>
                            <li><span className="blue_text">Keep track of your Loyalty Point balance in the Bingo Lobby.</span></li>
                            <li><span className="blue_text">To exchange your points, click on the <b>Loyalty Club tab</b> in the Bingo Lobby main menu.</span></li>
                            <li><span className="blue_text">Enter the number of Loyalty Points you’d like to exchange from your available balance. For every 100 points exchanged, you will get a <b>£1 Bonus</b>!</span></li>
                        </ul>
                    </div>
                    <div className="infoTextContainer"><p>Enjoy playing Bingo with us and don't forget to check your Loyalty Point balance to see what you have earned!</p></div>
                    <div className="termsListContainer">
                        <div className="termsListTitle">Significant Offer Terms and Conditions</div>
                        <ol className="termsList">
                            <li>You will earn six Loyalty Points for every £10 staked on Bingo Tickets. Loyalty Points will not be awarded for stakes made with bonus funds.</li>
                            <li>Loyalty Points can be exchanged for a Bingo Bonus.</li>
                            <li>Loyalty Points can be redeemed once a minimum of 100 points are available for redemption. 100 points can be exchanged for a £1 Bonus.</li>
                            <li>Bonuses must be wagered once before becoming with drawable.</li>
                            <li>Should you not make a transfer to Bingo, Games or Vegas for 90 days, your entire Loyalty Point balance will be forfeited.</li>
                        </ol>
                        <div className="termsListTitle">Terms and Conditions</div>
                        <ol className="termsList">
                            <li>The Loyalty Scheme is available to all bet365 Bingo players.</li>
                            <li>You will earn six Loyalty Points for every £10 staked on Bingo Tickets. Loyalty Points will not be awarded for stakes made with bonus funds.</li>
                            <li>Loyalty Points can be exchanged for a Bingo Bonus.</li>
                            <li>Additional Loyalty Points may be accrued by participating in promotional events as advertised on site or our Social Media pages.</li>
                            <li>To exchange Loyalty Points, use the Loyalty Club tab in the Bingo Lobby main menu.</li>
                            <li>Loyalty Points can be redeemed once a minimum of 100 points are available for redemption. 100 points can be exchanged for a £1 Bonus.</li>
                            <li>Should you not make a transfer to Bingo, Games or Vegas for 90 days, your entire Loyalty Point balance will be forfeited.</li>
                            <li>Any bonus awarded in exchange for Loyalty Points must be staked at least once prior to any withdrawal being processed.</li>
                            <li>Stakes made on both the website and Mobile Bingo App will qualify for this promotion.</li>
                            <li>All customer offers are limited to one per person. If bet365 has reasonable grounds to suspect that the bonus or offer is being claimed by or for the benefit of the same person more than once or by a group of people then it may withdraw the availability of any offer or all offers to that customer or group of customers and/or void any wager funded by the bonus and remove any winnings from such wager.</li>
                            <li>Where any term of the offer is breached or there is evidence of a series of wagers placed by a customer or group of customers, which due to a deposit bonus, enhanced payments or any other promotional offer results in guaranteed customer profits irrespective of the outcome, whether individually or as part of a group, bet365 may reclaim the bonus or enhanced payment element of such offer, void any wager funded through the offer and/or remove any winnings from such wager. In addition, where there is evidence of such activity, bet365 may levy an administration charge on the customer up to the value of the bonus or enhanced payment towards the administrative costs incurred in identifying and taking action against that activity.</li>
                            <li>bet365 may reclaim any bonus amount that has been awarded in error.</li>
                            <li>In an attempt to combat fraudulent activity, bet365 has introduced methods to detect and prevent abuse of this offer. bet365 may ask any customer to provide sufficient documentation and/or verification steps for it, acting reasonably, to be satisfied as to the customer's identity prior to crediting any offer, bonus funds and/or winnings to their account.</li>
                            <li>bet365 may, at any time, make minor amendments to this promotion to correct typos or to improve on clarity or customer experience and may cancel this promotion for legal or regulatory reasons.</li>
                        </ol>
                    </div>
                </div>

            </div>
        )

    }
}

export default LoyaltyScheme;
