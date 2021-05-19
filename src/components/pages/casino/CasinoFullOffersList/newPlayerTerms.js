import React from 'react';



class NewPlayerTerms extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="terms_conditions_wrapp">

                <div className="terms_conditions">
                    <div className="terms_conditions_header">Significant Offer Terms and Conditions</div>
                    <ul className="terms_conditions_list circle full_offer">
                        <li>This offer is only available to new Casino customers. </li>
                        <li>Your first deposit/transfer (minimum $20) to Casino will qualify for a 100% matched bonus, up to a maximum of $200. This is your 'qualifying deposit/transfer'. Select the Offer Code BONUS100 when making your qualifying deposit/transfer. </li>
                        <li>You will need to wager the amount of your qualifying deposit/transfer (capped at $200) plus bonus 15 times on eligible games before you can withdraw your bonus funds and any winnings from them. Not all games contribute, or contribute at the same rate towards the wagering requirement. Please see Full Term 6.</li>
                        <li>Any funds that you deposit/transfer above your qualifying deposit/transfer (capped at $200) can be withdrawn at your discretion without any impact on this offer. These funds will be held in and can be withdrawn from your 'Withdrawable balance'.</li>
                        <li>When this bonus is active, winnings from your deposits/transfers will be paid into your 'My Funds' balance. You can withdraw from your My Funds balance at any point. You will, however, forfeit the bonus and all funds held in your Bonus Funds balance if you withdraw from your My Funds balance prior to completing the wagering requirement.</li>
                        <li>If the wagering requirement has not been met within 30 days of your qualifying deposit/transfer, any funds held in the Bonus Funds balance will be removed.</li>
                    </ul>
                </div>

                <div className="terms_conditions">
                    <div className="terms_conditions_header">Full Offer Terms and Conditions</div>
                    <ul className="terms_conditions_list full_offer">
                        <li>This offer is only available to new Casino customers. </li>
                        <li>This New Player Bonus cannot be claimed after 10:59 GMT on 15th January 2019. </li>
                        <li>Your first deposit/transfer (minimum $20) to Casino will qualify for a 100% matched bonus, up to a maximum of $200. This is your 'qualifying deposit/transfer'.</li>
                        <li>You must select the Offer Code BONUS100 when making your qualifying deposit/transfer. If you do not wish to receive the New Player Bonus, you must select No Bonus from the Offer Code menu.</li>
                        <li>You will need to wager the amount of your qualifying deposit/transfer (capped at $200) plus bonus 15 times on eligible games before you can withdraw your bonus funds and any winnings from them. Customers from the following countries are excluded from this promotion: Kazakhstan, Russia and South Korea.</li>
                        <li>Not all games contribute, or contribute the same percentage to your wagering requirement as stated in the below table (please note that additional games may be added to this list when they become available on bet365):
                            <div className="currency_conversion_table">
                                <div className="currency_conversion_table_header">
                                    <div className="header_left_column white"/>
                                    <div className="header_right_column white"/>
                                </div>
                                <div className="currency_conversion_table_body">
                                    <div className="currency_conversion_table_row three_content">
                                        <div className="left_content">Games</div>
                                        <div className="center_content">Stake Contribution</div>
                                        <div className="right_content">	Wagering required to release bonus funds</div>
                                    </div>
                                    <div className="currency_conversion_table_row three_content">
                                        <div className="left_content">All games (excluding below)</div>
                                        <div className="center_content">100%</div>
                                        <div className="right_content">($20 deposit + $20 Bonus) x 15 = $600</div>
                                    </div>
                                    <div className="currency_conversion_table_row three_content">
                                        <div className="left_content">All games within the Games & Keno category (except Keno)</div>
                                        <div className="center_content">50%</div>
                                        <div className="right_content">	($20 deposit + $20 Bonus) x 15 = $1,200</div>
                                    </div>
                                    <div className="currency_conversion_table_row three_content">
                                        <div className="left_content">Baccarat and 3 Card Brag</div>
                                        <div className="center_content">25%</div>
                                        <div className="right_content">	($20 deposit + $20 Bonus) x 15 = $2,400</div>
                                    </div>
                                    <div className="currency_conversion_table_row three_content">
                                        <div className="left_content">Craps, Pai Gow Poker, Red Dog, Roulette, Sic Bo and Stravaganza</div>
                                        <div className="center_content">20%</div>
                                        <div className="right_content">($20 deposit + $20 Bonus) x 15 = $3,000</div>
                                    </div>
                                    <div className="currency_conversion_table_row three_content">
                                        <div className="left_content">Blackjack (all variations except Blackjack Surrender and Blackjack Switch) and Casino Hold'Em</div>
                                        <div className="center_content">10%</div>
                                        <div className="right_content">	($20 deposit + $20 Bonus) x 15 = $6,000</div>
                                    </div>
                                    <div className="currency_conversion_table_row three_content">
                                        <div className="left_content">All Video Poker games</div>
                                        <div className="center_content">5%</div>
                                        <div className="right_content">	($20 deposit + $20 Bonus) x 15 = $12,000</div>
                                    </div>
                                    <div className="currency_conversion_table_row three_content">
                                        <div className="left_content">Live Hi-Lo, Blackjack Surrender, Blackjack Switch, Pontoon, Video Poker or Video Slots double-up games</div>
                                        <div className="center_content">0%</div>
                                        <div className="right_content">	N/A</div>
                                    </div>
                                </div>
                            </div>

                        </li>
                        <li>Any funds that you deposit/transfer above your qualifying deposit/transfer (capped at $200) can be withdrawn at your discretion without any impact on this offer. These funds will be held in and can be withdrawn from your 'Withdrawable balance'.</li>
                        <li>When this bonus is active, winnings from your deposits/transfers will be paid into your 'My Funds' balance. You can withdraw from your My Funds balance at any point. You will, however, forfeit the bonus and all funds held in your Bonus Funds balance if you withdraw from your My Funds balance prior to completing the wagering requirement.</li>
                        <li>If the wagering requirement has not been met within 30 days of your qualifying deposit/transfer, any funds held in the Bonus Funds balance will be removed.</li>
                        <li>Any prize/bonus amounts offered will be calculated using bet365’s currency multiplier table applicable at that time. You can view bet365’s currency multiplier here.</li>
                        <li>In an attempt to combat fraudulent activity, bet365 has introduced methods to detect and prevent abuse of this offer. bet365 may ask any customer to provide sufficient documentation and/or verification steps for it, acting reasonably, to be satisfied as to the customer's identity prior to crediting any offer, bonus funds and/or winnings to their account.</li>
                        <li>All customer offers are limited to one per person. If bet365 has reasonable grounds to suspect that the bonus or offer is being claimed by or for the benefit of the same person more than once or by a group of people then it may withdraw the availability of any offer or all offers to that customer or group of customers and/or void any wager funded by the bonus and remove any winnings from such wager.</li>
                        <li>Where any term of the offer is breached or there is evidence of a series of wagers placed by a customer or group of customers, which due to a deposit bonus, enhanced payments or any other promotional offer results in guaranteed customer profits irrespective of the outcome, whether individually or as part of a group, bet365 may reclaim the bonus or enhanced payment element of such offer, void any wager funded through the offer and/or remove any winnings from such wager. In addition, where there is evidence of such activity, bet365 may levy an administration charge on the customer up to the value of the bonus or enhanced payment towards the administrative costs incurred in identifying and taking action against that activity.</li>
                        <li>bet365 may reclaim any bonus amount that has been awarded in error.</li>
                        <li>bet365 may, at any time, make minor amendments to this promotion to correct typos or to improve on clarity or customer experience and may cancel this promotion for legal or regulatory reasons.</li>
                        <li>Employees, officers and directors of bet365, its promotional or other agencies, licensees and licensors, service providers and any other associated or affiliated companies shall not be eligible for the promotion. The same terms shall apply to the direct families of such persons.</li>
                    </ul>
                </div>
            </div>
        )

    }
}

export default NewPlayerTerms;