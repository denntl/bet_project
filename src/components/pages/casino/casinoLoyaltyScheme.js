import React from 'react';



class CasinoLoyaltyScheme extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            schemeTab: "loyaltyScheme",
            currencyList: false
        }
    }
    changeLoyaltySchemeTab = (tab) => {
            this.setState({
                schemeTab:tab
            })
    }
    toggle = (type) =>{
        if(type == "currencyList"){
            this.setState({currencyList:!this.state.currencyList})
        }
    }
    render() {
        return(
            <div className="MainContainerGames Casino">
                <div className="loyaltyScheme_header">
                    <div className="loyaltyScheme_title">Loyalty Scheme</div>
                    <p className="short_text">Play regularly in the Casino and earn rewards with our special Loyalty Scheme!</p>
                    <p className="short_text">You will automatically be entered into the Loyalty Scheme as soon as you open an account. Climb the ladder as you play to earn bigger rewards.</p>
                </div>

                <div className="loyaltyScheme_tabs">
                    <nav className="loyaltyScheme_nav">
                        <ul>
                            <li className={`loyaltyScheme_link ${this.state.schemeTab == "loyaltyScheme" ? "active" :""}`} onClick={()=>this.changeLoyaltySchemeTab("loyaltyScheme")}>Loyalty Scheme</li>
                            <li className={`loyaltyScheme_link ${this.state.schemeTab == "compPoints" ? "active" :""}`} onClick={()=>this.changeLoyaltySchemeTab("compPoints")}>Comp Points</li>
                        </ul>
                    </nav>

                    <div className="tab_content">
                        {this.state.schemeTab == "loyaltyScheme"?
                            <div>
                                <p className="scheme_title">Explore The Loyalty Scheme Levels</p>
                                <div className="scheme_conversion">
                                    <img src="../img/BronzePyramid.png" className="scheme_conversion_img" alt="bronzePyramid"/>
                                    <p className="scheme_conversion_title bronze">Bronze</p>
                                    <p className="scheme_conversion_subtitle bronze">0 Points, Beginner</p>
                                    <div className="scheme_conversion_sections">
                                        <div className="scheme_section">
                                            <img src="../img/VIP_Conversion Ratio_Bronze.svg" alt="Conversion Ratio_Bronze"/>
                                            <p className="scheme_section_title">Conversion Rate</p>
                                            <p className="scheme_section_subtitle">100 points = 1 Currency Unit</p>
                                        </div>
                                        <div className="scheme_section">
                                            <img src="../img/VIP_PointsBronze.svg" alt="PointsBronze"/>
                                            <p className="scheme_section_title">at 100,000 Points</p>
                                            <p className="scheme_section_subtitle">$100 Milestone Bonus</p>
                                        </div>
                                        <div className="scheme_section">
                                            <img src="../img/VIP_Play Counts_Bronze.svg" alt="Play Counts_Bronze"/>
                                            <p className="scheme_section_title">Access</p>
                                            <p className="scheme_section_subtitle">Bonuses + Cash Prizes</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="scheme_conversion">
                                    <img src="../img/SilverPyramid.png" className="scheme_conversion_img" alt="SilverPyramid"/>
                                    <p className="scheme_conversion_title silver">Silver</p>
                                    <p className="scheme_conversion_subtitle silver">150,000 Points</p>
                                    <div className="scheme_conversion_sections">
                                        <div className="scheme_section">
                                            <img src="../img/VIP_Conversion Ratio_Silver.svg" alt="Conversion Ratio_Silver"/>
                                            <p className="scheme_section_title">Conversion Rate</p>
                                            <p className="scheme_section_subtitle">85 points = 1 Currency Unit</p>
                                        </div>
                                        <div className="scheme_section">
                                            <img src="../img/VIP-PointsSilver.svg" alt="PointsSilver"/>
                                            <p className="scheme_section_title">Reaching Silver</p>
                                            <p className="scheme_section_subtitle">$200 Milestone Bonus</p>
                                        </div>
                                        <div className="scheme_section">
                                            <img src="../img/VIP_Play Counts_Silver.svg" alt="Play Counts_Silver"/>
                                            <p className="scheme_section_title">Access</p>
                                            <p className="scheme_section_subtitle">Bonuses + Cash Prizes</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="scheme_conversion">
                                    <img src="../img/GoldPyramid.png" className="scheme_conversion_img" alt="goldPyramid"/>
                                    <p className="scheme_conversion_title gold">Gold</p>
                                    <p className="scheme_conversion_subtitle gold">1,000,000 Points</p>
                                    <p className="scheme_conversion_add_text">Maintain Gold by accruing 5,000 Points every 3 months</p>
                                    <div className="scheme_conversion_sections">
                                        <div className="scheme_section">
                                            <img src="../img/VIP_Conversion Ratio_Gold.svg" alt="Conversion Ratio_Gold"/>
                                            <p className="scheme_section_title">Conversion Rate</p>
                                            <p className="scheme_section_subtitle">75 points = 1 Currency Unit</p>
                                        </div>
                                        <div className="scheme_section">
                                            <img src="../img/VIP_PointsGold.svg" alt="PointsGold"/>
                                            <p className="scheme_section_title">Reaching Gold</p>
                                            <p className="scheme_section_subtitle">$700 Milestone Bonus</p>
                                        </div>
                                        <div className="scheme_section">
                                            <img src="../img/VIP_PointsGold.svg" alt="Play Counts_Gold"/>
                                            <p className="scheme_section_title">at 1,500,000 Points</p>
                                            <p className="scheme_section_subtitle">$2,000 Milestone Bonus</p>
                                        </div>
                                    </div>
                                </div>
                               <div className="currency_conversion">
                                   <p className="currency_conversion_header">Comp Points Currency Conversion Table</p>
                                   <div className="currency_conversion_table">
                                       <div className="currency_conversion_table_header">
                                           <div className="header_left_column"></div>
                                           <div className="header_right_column">
                                               Select Currency
                                               <span className="currency_selector" onClick={()=>this.toggle("currencyList")}>EUR</span>
                                               {this.state.currencyList ?
                                                   <div className="dropDown_currency">
                                                       <ul className="dropDown_currency_list">
                                                           <li className="dropDown_currency_item">ARS</li>
                                                           <li className="dropDown_currency_item">BGN</li>
                                                           <li className="dropDown_currency_item">CAD</li>
                                                           <li className="dropDown_currency_item">CHF</li>
                                                           <li className="dropDown_currency_item">RMB</li>
                                                           <li className="dropDown_currency_item">CZK</li>
                                                           <li className="dropDown_currency_item">DKK</li>
                                                           <li className="dropDown_currency_item selected">EUR</li>
                                                           <li className="dropDown_currency_item">GBP</li>
                                                       </ul>
                                                   </div>
                                               :""}

                                           </div>
                                       </div>

                                       <div className="currency_conversion_table_body">
                                           <div className="currency_conversion_table_row">
                                               <div className="left_content">Multiplier</div>
                                               <div className="right_content">1</div>
                                           </div>
                                           <div className="currency_conversion_table_row">
                                               <div className="left_content bronze">Bronze</div>
                                               <div className="right_content">50,000</div>
                                           </div>
                                           <div className="currency_conversion_table_row">
                                               <div className="left_content silver">Silver</div>
                                               <div className="right_content">150,000</div>
                                           </div>
                                           <div className="currency_conversion_table_row">
                                               <div className="left_content gold">Gold</div>
                                               <div className="right_content">500,000</div>
                                           </div>
                                           <div className="currency_conversion_table_row">
                                               <div className="left_content">Gold Loyalty</div>
                                               <div className="right_content">1,500,000</div>
                                           </div>
                                           <div className="currency_conversion_table_row">
                                               <div className="left_content">Maintain Status</div>
                                               <div className="right_content">2,500</div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                                <div className="terms_conditions">
                                    <div className="terms_conditions_header">Significant Terms and Conditions</div>
                                    <ul className="terms_conditions_list">
                                        <li>You will begin with Bronze status in the VIP Scheme and will be initially assessed after your first month's play in the Casino. You will achieve Silver status after reaching 300,000 Comp Points and Gold Status after reaching 1,000,000 Comp Points.</li>
                                        <li>You can receive Milestone Bonuses when you reach 100,000 Comp Points, 300,000 Comp Points, 1,000,000 Comp Points and 3,000,000 Comp Points.</li>
                                        <li>You will need to wager the value of your Milestone Bonuses 20 times on real money games within 30 days prior to making a withdrawal or transfer.</li>
                                        <li>Not all games contribute, or contribute at the same rate towards your wagering requirement: please see Full Offer Terms and Conditions below.</li>
                                    </ul>
                                </div>

                                <div className="terms_conditions">
                                    <div className="terms_conditions_header">Full Offer Terms and Conditions</div>
                                    <ul className="terms_conditions_list">
                                        <li>Membership to the Loyalty Scheme is at the sole discretion of bet365. At any time we reserve the right to either refuse or revoke your membership.</li>
                                        <li>You will begin with Bronze status in the VIP Scheme and will be initially assessed after your first month's play in the Casino. You will achieve Silver status after reaching 300,000 Comp Points and Gold Status after reaching 1,000,000 Comp Points.</li>
                                        <li>You can receive Milestone Bonuses when you reach 100,000 Comp Points, 300,000 Comp Points, 500,000 Comp Points and 3,000,000 Comp Points.</li>
                                        <li>Should you attain a Silver or Gold Level in the Loyalty Scheme and not place any bets in the Casino for at least 13 weeks, you will automatically revert back to Bronze status.</li>
                                        <li>Only the individual named in the account is eligible to receive the relevant rewards and benefits of the Loyalty Scheme. There can be no transfer of any aspect of the Loyalty Scheme between different players and accounts.</li>
                                        <li>All Comp Point totals for promotions and rewards within the Loyalty Scheme are calculated at the rate at which they are accrued using the Comp Points Conversion Table. Details of the number of Comp Points required for each currency are available in the table above.</li>
                                        <li>Any Milestone Bonuses must be wagered 20 times before they can be transferred or withdrawn from your account. Not all games contribute, or contribute at the same percentage towards your wagering requirement (please note that additional games may be added to this list when they become available on bet365). Wagers made on games contribute 100%, with the following exceptions. All games within the Games & Keno category contribute 50%. Baccarat (all variations except Baccarat Side Bets), Blackjack (all variations except Blackjack Surrender, Blackjack Switch and Lucky Blackjack), Casino Hold'em, Craps, Let Them Ride Poker, Pai Gow Poker (all variations), Pontoon, Red Dog, Roulette (all variations), Sic Bo, Stravaganza, Wild Viking and all Video Poker games contribute 25%. Live Hi-Lo, Blackjack Surrender, Blackjack Switch, Lucky Blackjack, Video Poker or Video Slots double-up games and Multi Spin Slot Games (Goblin’s Cave, Ocean Princess, Triple Profits, Tropic Reels and Ugga Bugga) do not contribute towards the wagering requirement. </li>
                                        <li>All bonuses claimed as part of this promotion are valid for a period of 30 days. Any unused or unredeemed bonuses will be removed after 30 days, along with any winnings attributable to them.</li>
                                        <li>Any prize/bonus amounts offered will be calculated using the current currency multiplier table as determined at the sole discretion of bet365.</li>
                                        <li>In an attempt to combat fraudulent activity, bet365 has introduced methods to detect and prevent abuse of this offer. bet365 may ask any customer to provide sufficient documentation and/or verification steps for it, acting reasonably, to be satisfied as to the customer's identity prior to crediting any offer, bonus funds and/or winnings to their account.</li>
                                        <li>Where any term of the offer is breached or there is evidence of a series of wagers placed by a customer or group of customers, which due to a deposit bonus, enhanced payments or any other promotional offer results in guaranteed customer profits irrespective of the outcome, whether individually or as part of a group, bet365 may reclaim the bonus or enhanced payment element of such offer, void any wager funded through the offer and/or remove any winnings from such wager. In addition, where there is evidence of such activity, bet365 may levy an administration charge on the customer up to the value of the bonus or enhanced payment towards the administrative costs incurred in identifying and taking action against that activity.</li>
                                        <li>bet365 may reclaim any bonus amount that has been awarded in error.</li>
                                        <li>All customer offers are limited to one per person. If bet365 has reasonable grounds to suspect that the bonus or offer is being claimed by or for the benefit of the same person more than once or by a group of people then it may withdraw the availability of any offer or all offers to that customer or group of customers and/or void any wager funded by the bonus and remove any winnings from such wager.</li>
                                        <li>bet365 may, at any time, make minor amendments to this promotion to correct typos or to improve on clarity or customer experience and may cancel this promotion for legal or regulatory reasons.</li>
                                        <li>Employees, officers and directors of bet365, its promotional or other agencies, licensees and licensors, service providers and any other associated or affiliated companies shall not be eligible for the promotion. The same terms shall apply to the direct families of such persons.</li>

                                    </ul>
                                </div>
                            </div>
                        :""
                        }
                        {this.state.schemeTab == "compPoints"?
                            <div>
                                <p className="scheme_title">As soon as you join the Casino and start playing any of our extensive range of games with real money you will earn 'Comp Points' for every bet you make, win or lose!</p>
                                <div className="three-step-guide">
                                    <div className="guide_step">
                                        <div className="img_container">
                                            <img src="../img/LoyaltyScheme_Play.svg" className="icon_img" alt=""/>
                                            <img src="../img/LoyaltyScheme_Arrow.svg" className="arrow_img right" alt=""/>
                                        </div>
                                        <p className="guide_step_title">Play</p>
                                        <p className="guide_step_subtitle">Play our wide selection of eligible games to earn Comp Points</p>
                                    </div>
                                    <div className="guide_step">
                                        <div className="img_container">
                                            <img src="../img/LoyaltyScheme_Line.svg"  className="arrow_img left" alt=""/>
                                            <img src="../img/LoyaltyScheme_Convert.svg" className="icon_img" alt=""/>
                                            <img src="../img/LoyaltyScheme_Arrow.svg"  className="arrow_img right" alt=""/>
                                        </div>
                                        <p className="guide_step_title">Convert</p>
                                        <p className="guide_step_subtitle">Every 100 Comp Points can be converted to 1 Currency Unit</p>
                                    </div>
                                    <div className="guide_step">
                                        <div className="img_container">
                                            <img src="../img/LoyaltyScheme_Line.svg"  className="arrow_img left" alt=""/>
                                            <img src="../img/LoyaltyScheme_Cash.svg"  className="icon_img" alt=""/>
                                        </div>
                                        <p className="guide_step_title">Cash</p>
                                        <p className="guide_step_subtitle">Convert your Comp Points into Cash!</p>
                                    </div>

                                </div>
                                <div className="currency_conversion">
                                    <p className="currency_conversion_header center">Each Game Qualifies For Different Points</p>
                                    <div className="currency_conversion_table">
                                        <div className="currency_conversion_table_header">
                                            <div className="header_left_column white">Game</div>
                                            <div className="header_right_column white">Points Earned Per 10 Units</div>
                                        </div>
                                        <div className="currency_conversion_table_body">
                                            <div className="currency_conversion_table_row">
                                                <div className="left_content">Video Slots<br/>
                                                    (all varieties excluding Multi Spin Slot Games)</div>
                                                <div className="right_content">3</div>
                                            </div>
                                            <div className="currency_conversion_table_row">
                                                <div className="left_content">Progressive Jackpots (All)</div>
                                                <div className="right_content">3</div>
                                            </div>
                                            <div className="currency_conversion_table_row">
                                                <div className="left_content">Regular Slots (All)</div>
                                                <div className="right_content">3</div>
                                            </div>
                                            <div className="currency_conversion_table_row">
                                                <div className="left_content">Caribbean Poker</div>
                                                <div className="right_content">3</div>
                                            </div>
                                            <div className="currency_conversion_table_row">
                                                <div className="left_content">Games and Keno</div>
                                                <div className="right_content">3</div>
                                            </div>
                                            <div className="currency_conversion_table_row">
                                                <div className="left_content">Red Dog</div>
                                                <div className="right_content">2</div>
                                            </div>
                                            <div className="currency_conversion_table_row">
                                                <div className="left_content">Blackjack <br/>
                                                    (all varieties excluding Blackjack Surrender MH and Blackjack Switch)</div>
                                                <div className="right_content">1</div>
                                            </div>
                                            <div className="currency_conversion_table_row">
                                                <div className="left_content">Roulette (All)</div>
                                                <div className="right_content">1</div>
                                            </div>
                                            <div className="currency_conversion_table_row">
                                                <div className="left_content">Baccarat</div>
                                                <div className="right_content">1</div>
                                            </div>
                                            <div className="currency_conversion_table_row">
                                                <div className="left_content">Video Poker (All)</div>
                                                <div className="right_content">1</div>
                                            </div>
                                            <div className="currency_conversion_table_row">
                                                <div className="left_content">Sic Bo</div>
                                                <div className="right_content">1</div>
                                            </div>
                                            <div className="currency_conversion_table_row">
                                                <div className="left_content">3 Card Brag</div>
                                                <div className="right_content">1</div>
                                            </div>
                                            <div className="currency_conversion_table_row">
                                                <div className="left_content">Casino Hold 'Em</div>
                                                <div className="right_content">1</div>
                                            </div>
                                            <div className="currency_conversion_table_row">
                                                <div className="left_content">Pai Gow Poker</div>
                                                <div className="right_content">1</div>
                                            </div>
                                            <div className="currency_conversion_table_row">
                                                <div className="left_content">Craps</div>
                                                <div className="right_content">1</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="conversion_rates_block">
                                    <p className="conversion_rates_title">Climb The Ladder</p>
                                    <p className="conversion_rates_title">Be rewarded with better conversion rates for your accumulated points</p>
                                    <div className="conversion_rates">
                                        <div className="conversion_rates_item">
                                            <div className="conversion_rates_item_title bronze">Bronze</div>
                                            <div className="conversion_rates_item_text">Conversion Ratio</div>
                                            <div className="conversion_rates_item_data">100 points = 1 Currency Unit</div>
                                        </div>
                                        <div className="conversion_rates_item">
                                            <div className="conversion_rates_item_title silver">Silver</div>
                                            <div className="conversion_rates_item_text">Conversion Ratio</div>
                                            <div className="conversion_rates_item_data">85 points = 1 Currency Unit</div>
                                        </div>
                                        <div className="conversion_rates_item">
                                            <div className="conversion_rates_item_title gold">Gold</div>
                                            <div className="conversion_rates_item_text">Conversion Ratio</div>
                                            <div className="conversion_rates_item_data">75 points = 1 Currency Unit</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="terms_conditions">
                                    <div className="terms_conditions_header">Significant Terms and Conditions</div>
                                    <ul className="terms_conditions_list">
                                        <li>For every 10 units of currency wagered you will earn Comp Points. Each game qualifies you for a varying number of points.</li>
                                        <li>Comp Points are redeemable in increments of 100 for Bronze level players, in increments of 85 for Silver level players and increments of 75 for Gold level players. Please see the <a href="#" className="terms_conditions_link">Loyalty Scheme</a> page for full details.</li>
                                        <li>Not all games contribute, or contribute at the same rate towards the accumulation of Comp Points: please see Full Offer Terms and Conditions below.</li>
                                        <li>If you don't place a bet in Casino for a period of 13 weeks, then your entire available Comp Point balance will be forfeited.</li>
                                    </ul>
                                </div>
                                <div className="terms_conditions">
                                    <div className="terms_conditions_header">Full Offer Terms and Conditions</div>
                                    <ul className="terms_conditions_list">
                                        <li>Promotion runs until 23:59 GMT on 31st March 2019.</li>
                                        <li>For every 10 units of currency wagered you will earn Comp Points. Each game qualifies you for a varying number of points.</li>
                                        <li>Comp Points are redeemable in increments of 100 for Bronze level players, in increments of 85 for Silver level players and increments of 75 for Gold level players. Please see the <a href="#" className="terms_conditions_link">Loyalty Scheme</a> page for full details.</li>
                                        <li>Wagers on the following will not earn Comp Points (please note that additional games may be added to this list when they become available on bet365): Live Hi-Lo, Blackjack Surrender MH, Blackjack Switch, Pontoon, Video Poker or Video Slots double-up games and Multi Spin Slot Games (Goblin’s Cave, Ocean Princess, Triple Profits, Tropic Reels and Ugga Bugga).</li>
                                        <li>If you don't place a bet in Casino for a period of 13 weeks, then your entire available Comp Point balance will be forfeited.</li>
                                        <li>Any prize/bonus amounts offered will be calculated using the current currency multiplier table as determined at the sole discretion of bet365.</li>
                                        <li>In an attempt to combat fraudulent activity, bet365 has introduced methods to detect and prevent abuse of this offer. bet365 may ask any customer to provide sufficient documentation and/or verification steps for it, acting reasonably, to be satisfied as to the customer's identity prior to crediting any offer, bonus funds and/or winnings to their account.</li>
                                        <li>Where any term of the offer is breached or there is evidence of a series of wagers placed by a customer or group of customers, which due to a deposit bonus, enhanced payments or any other promotional offer results in guaranteed customer profits irrespective of the outcome, whether individually or as part of a group, bet365 may reclaim the bonus or enhanced payment element of such offer, void any wager funded through the offer and/or remove any winnings from such wager. In addition, where there is evidence of such activity, bet365 may levy an administration charge on the customer up to the value of the bonus or enhanced payment towards the administrative costs incurred in identifying and taking action against that activity.</li>
                                        <li>bet365 may reclaim any bonus amount that has been awarded in error.</li>
                                        <li>All customer offers are limited to one per person. If bet365 has reasonable grounds to suspect that the bonus or offer is being claimed by or for the benefit of the same person more than once or by a group of people then it may withdraw the availability of any offer or all offers to that customer or group of customers and/or void any wager funded by the bonus and remove any winnings from such wager. </li>
                                        <li>bet365 may, at any time, make minor amendments to this promotion to correct typos or to improve on clarity or customer experience and may cancel this promotion for legal or regulatory reasons.</li>
                                        <li>Employees, officers and directors of bet365, its promotional or other agencies, licensees and licensors, service providers and any other associated or affiliated companies shall not be eligible for the promotion. The same terms shall apply to the direct families of such persons.</li>
                                    </ul>
                                </div>
                            </div>
                            :""
                        }
                    </div>


                </div>


            </div>
        )

    }
}

export default CasinoLoyaltyScheme;