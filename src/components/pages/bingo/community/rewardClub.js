import React from 'react';
import {Link} from "react-router-dom";



class RewardClub extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="MainContainerGames fullCommunity">
                <div className="bannerContainer">
                    <div className="bannerHeader">
                        <img src="../../img/788x112px_RewardClub_engV2.png" alt="reward Club"/>
                    </div>
                </div>
                <div className="contentContainer">
                    <div className="communityTitle">We're rolling out the red carpet for our players with our amazing Bingo Reward Club. Membership has a number of benefits, including special promotions so make sure you check your web messages on a regular basis to find out when they’ll take place.</div>
                    <div className="infoTextContainer"><p>We will award players with a Bingo Reward Club Level based on the Loyalty Points (LPs) they earn. As soon as a player reaches the required number of LPs within a calendar month for a new Bingo Reward Club Level, they will be upgraded. Upgrades can happen multiple times within a month.</p></div>
                    <div className="infoTextContainer"><p>You can earn LPs through our <Link to="/bingo/bingo_community/loyalty-scheme"> Loyalty Scheme</Link> by playing Bingo.</p></div>
                    <div className="infoTextContainer"><p>As you move up the levels you can enjoy a whole range of benefits, like bonuses and promotions. The pinnacle of the club is the Platinum level, where your account will be personally looked after by the Specialised Bingo Team.</p></div>
                    <div className="infoTextContainer"><p>Upon your first deposit/transfer you will instantly become a Bronze level member of our Bingo Reward Club and start to make the most of your Bingo play. So get ready to start climbing our ladder and earning the rewards you deserve!</p></div>
                    <div className="TableContainer">
                        <table className="ContentTable">
                            <tbody>
                            <tr className="HeaderRow">
                                <th></th>
                                <th>Bronze</th>
                                <th>Silver</th>
                                <th>Gold</th>
                                <th>Platinum</th>
                            </tr>
                            <tr className="AlternateItemRow ">
                                <td>LPs required to attain level</td>
                                <td>1</td>
                                <td>60</td>
                                <td>600</td>
                                <td>6,000</td>
                            </tr>
                            <tr className="ItemRow">
                                <td>LPs required to maintain level</td>
                                <td>0</td>
                                <td>60</td>
                                <td>500</td>
                                <td>5,000</td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                    <div className="infoTextContainer"><p>On the first day of each month, if you have not earned the required number of points in the previous calendar month to maintain your Bronze, Silver, Gold or Platinum Level, your level will drop to the next level down.</p></div>
                    <div className="termsListContainer">
                        <div className="termsListTitle">Terms and Conditions</div>
                        <ol className="termsList">
                            <li>Membership to the bet365 Bingo Reward Club is at the sole discretion of bet365. At any time bet365 reserves the right to either refuse or revoke the membership of any player.</li>
                            <li>Promotion within the Bingo Reward Club, regardless of Loyalty Points or bingo activity, remains at the discretion of bet365 and may be denied or withheld without appeal or review.</li>
                            <li>All Loyalty Point totals for promotions and rewards within the Bingo Reward Club will be accrued as per the bet365 Bingo <Link to="/bingo/bingo_community/loyalty-scheme">Loyalty Scheme.</Link></li>
                            <li>bet365 reserves the right to suspend or discontinue the Bingo Reward Club at any time and without prior notice. bet365 also reserves the right to modify the terms and benefits of the scheme and to either add or withdraw any terms and conditions.</li>

                            <li>Players should refer to the Bingo Reward Club page within the Bingo Software for full information on their current Bingo Reward Club Level and the number of points required to upgrade.</li>
                            <li>A player will be upgraded to a higher Bingo Reward Club Level as soon as the required number of Loyalty Points have been earned within the current calendar month.</li>

                            <li>A player’s Bingo Reward Club Level can be upgraded multiple times within a calendar month.</li>
                            <li>On the first day of each calendar month, should a player not have met the required number of points in the previous calendar month to maintain their current level, their Bingo Reward Club Level will drop to the next level down.</li>
                            <li>A player’s Bingo Reward Club Level can only drop by one level per calendar month.</li>
                            <li>Players will be notified of an upgrade to their Bingo Reward Club Level via a pop-up in the Bingo Software.</li>
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

export default RewardClub;
