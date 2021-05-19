import React from 'react';
import {Link} from "react-router-dom";



class FreeBingo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="MainContainerGames fullCommunity">
                <div className="bannerContainer">
                    <div className="bannerHeader">
                        <img src="../../img/788x112px-Free-Bingo.gif" alt="freeBingo"/>
                    </div>
                </div>
                <div className="contentContainer">
                    <div className="communityTitle">Enjoy sensational Free Bingo, every single day. We've got Superbooks and BOGOF games where you can put yourself in the running for some superb prizes.</div>
                    <Link to="/bingo/bingo_promotions/ageOfTheGods" className="bingoProd">
                        <div className="prodImg"></div>
                        <div className="prodContent">
                            <div className="prodTitle">Super Free Bingo</div>
                            <div className="prodSubTitle">Enjoy regular Superbooks games every single week as part of our amazing Super Free Bingo. Make a date with Superbooks for great value and big prizes.</div>
                            <div className="MoreInfo">More</div>
                        </div>
                    </Link>
                    <div className="termsListContainer">
                        <div className="termsListTitle">Significant Terms and Conditions</div>
                        <ol className="termsList">
                            <li>To be eligible to access the Super Star Bonanza room you must have previously funded your Bingo cash balance.</li>
                            <li>Any winnings from the Free Bingo games will be paid out as a non-withdrawable Bingo Bonus and can be spent in any Bingo rooms within the lobby. Any winnings from this bonus will be paid out as cash, no wagering requirements apply.</li>
                        </ol>
                        <div className="termsListTitle">Terms and Conditions</div>
                        <ol className="termsList">
                            <li>Superbooks games take place in the Super Star Bonanza room daily from 13:00 UK Time until 14:00 UK Time, then from 19:00 UK Time until 21:00 UK Time, and are open to all eligible players.</li>
                            <li>To be eligible to access any Free Bingo games, a player must have previously funded their Games/Bingo cash balance.</li>
                            <li>BOGOF games will be available as published in the game schedules.</li>
                            <li>Any winnings from the Free Bingo games will be paid out as a non-withdrawable Bingo Bonus and can be spent in any Bingo rooms within the lobby. Any winnings from this bonus will be paid out as cash, no wagering requirements apply.</li>
                            <li>Changes to account or website settings such as language or currency preferences after registration may affect eligibility for, or restrict access to, certain promotions or private rooms. No refund or compensation can be given to any player affected in this way.</li>
                            <li>Progressive and fixed jackpots cannot be won on Free Bingo games.</li>
                            <li>In an attempt to combat fraudulent activity, bet365 has introduced methods to detect and prevent abuse of this offer. bet365 may ask any customer to provide sufficient documentation and/or verification steps for it, acting reasonably, to be satisfied as to the customer's identity prior to crediting any offer, bonus funds and/or winnings to their account.</li>
                            <li>Where any term of the offer is breached or there is evidence of a series of wagers placed by a customer or group of customers, which due to a deposit bonus, enhanced payments or any other promotional offer results in guaranteed customer profits irrespective of the outcome, whether individually or as part of a group, bet365 may reclaim the bonus or enhanced payment element of such offer, void any wager funded through the offer and/or remove any winnings from such wager. In addition, where there is evidence of such activity, bet365 may levy an administration charge on the customer up to the value of the bonus or enhanced payment towards the administrative costs incurred in identifying and taking action against that activity.</li>
                            <li>bet365 may reclaim any bonus amount that has been awarded in error.</li>
                            <li>bet365 may, at any time, make minor amendments to this promotion to correct typos or to improve on clarity or customer experience and may cancel this promotion for legal or regulatory reasons.</li>
                            <li>All customer offers are limited to one per person. If bet365 has reasonable grounds to suspect that the bonus or offer is being claimed by or for the benefit of the same person more than once or by a group of people then it may withdraw the availability of any offer or all offers to that customer or group of customers and/or void any wager funded by the bonus and remove any winnings from such wager.</li>
                            <li>Employees, officers and directors of bet365, its promotional or other agencies, licensees and licensors, service providers and any other associated or affiliated companies shall not be eligible for the promotion. The same terms shall apply to the direct families of such persons.</li>
                        </ol>
                    </div>
                </div>

            </div>
        )

    }
}

export default FreeBingo;