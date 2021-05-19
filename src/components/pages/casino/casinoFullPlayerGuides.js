import React from 'react';



class CasinoFullPlayerGuides extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            fullPlayerGuides:this.props.fullPlayerGuides
        }
    }
    changeFullOfferTab(tab) {
        this.setState({
            fullPlayerGuides:tab
        })
    }
    render() {
        return(
            <div className="full_offer_container">

                <div className="casino_offer_img">
                    {this.state.fullPlayerGuides == "playBaccarat"?
                        <img src="../img/Casino_PlayerGuides_Baccarat_1200x300.jpg" alt="offer_img"/>
                        :""}
                    {this.state.fullPlayerGuides == "playBlackjack" ?
                        <img src="../img/Casino_PlayerGuides_Blackjack_1200x300_V2.jpg" alt="offer_img"/>
                        :""}
                    {this.state.fullPlayerGuides == "playRoulette"?
                        <img src="../img/Casino_PlayerGuidesRoulette_1200x300.jpg" alt="offer_img"/>
                        :""}
                </div>
                <div className="full_offer_content">
                    <div className="full_offer_nav_wrapp">
                        <div className="full_offer_nav">
                            <div className={`nav_link ${this.state.fullPlayerGuides == "playBaccarat" ? "active":""}`} onClick={()=>this.changeFullOfferTab("playBaccarat")}>Baccarat</div>
                            <div className={`nav_link ${this.state.fullPlayerGuides == "playBlackjack" ? "active":""}`} onClick={()=>this.changeFullOfferTab("playBlackjack")}>Blackjack</div>
                            <div className={`nav_link ${this.state.fullPlayerGuides == "playRoulette" ? "active":""}`} onClick={()=>this.changeFullOfferTab("playRoulette")}>Roulette</div>
                        </div>
                    </div>
                    <div className="tab_content">
                        {this.state.fullPlayerGuides == "playBaccarat"?
                            <div className="full_offer_tab">
                                <div className="full_offer_title">Baccarat Player Guide</div>
                                <div className="full_offer_sub_title">There are 10 possible hand scores in Baccarat, ranging from zero up to 9. The idea is to get as close as possible to 9. The worst hand possible is zero. A player's score will always range between zero and 9 as it is impossible to go 'bust'.</div>
                                <div className="full_offer_sub_title2">The Basics</div>
                                <div className="full_offer_sub_title3">Scoring</div>
                                <div className="full_offer_short_text">The scoring runs as follows: The cards 2 through to 9 are worth their face value in points. Aces are worth one point, and 10s and picture cards are worth zero. When scores are calculated only the number in the right hand column is counted. For example, if you are given a 5 and an 8 then these would obviously add up to 13. However, the 10 is removed and the total of the hand is therefore 3.</div>

                                <div className="full_offer_sub_title3">Bets</div>
                                <div className="full_offer_short_text">The three options available to you are to bet on the 'Banker', the 'Player' or the 'tie'. Player and Banker bets are paid at even money, though successful bets on the Banker are subject to a 5% commission. The odds offered for a bet on the tie are 8/1.</div>

                                <div className="full_offer_sub_title2">How The Cards Are Dealt</div>
                                <div className="full_offer_short_text">Regardless of how many players are playing at the table only two hands are dealt: the Player's hand and the Banker's hand. Once the bets have been placed the cards are dealt – one to the Player, one to the Banker, a second to the Player and a second to the Banker. Depending on the score of the two hands, further cards may need to be drawn.</div>
                                <div className="full_offer_short_text">If either the Player or the Banker has a two-card score of 8 or 9 then they have a 'natural hand' and no further cards are drawn for either hand. The outcome is decided there and then.</div>
                                <div className="full_offer_short_text">If the Player's hand is between zero and 5 then they will ALWAYS be dealt another card. If their hand is 6 or 7 then they will ALWAYS stand.</div>
                                <div className="full_offer_short_text">It is then the turn of the Banker's hand to react. If the Banker's hand is zero, 1 or 2 then they will ALWAYS be dealt a third card. If the Banker's hand is a 7 then they will ALWAYS stand, regardless of any hand the Player may have, or whether the Player took a third card. If the Player has stood on 6 or 7 then the Banker will always take a card if their score is between zero and 5. If the Banker's hand is 3, 4, 5 or 6 then whether or not they will be dealt a third card is determined by the third card drawn by the Player. This is illustrated in the following tables:</div>
                                <div className="full_offer_sub_title2">Player</div>
                                <div className="currency_conversion_table">
                                    <div className="currency_conversion_table_header">
                                        <div className="header_left_column white">Point Value of First Two Cards</div>
                                        <div className="header_right_column white">	Action</div>
                                    </div>
                                    <div className="currency_conversion_table_body">
                                        <div className="currency_conversion_table_row">
                                            <div className="left_content">0, 1, 2, 3, 4 or 5</div>
                                            <div className="right_content">	Draws a card</div>
                                        </div>
                                        <div className="currency_conversion_table_row">
                                            <div className="left_content">6 or 7</div>
                                            <div className="right_content">Stands</div>
                                        </div>
                                        <div className="currency_conversion_table_row">
                                            <div className="left_content">8 or 9</div>
                                            <div className="right_content">Natural hand, no further cards drawn</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="full_offer_sub_title2">Banker</div>
                                <div className="currency_conversion_table">
                                    <div className="currency_conversion_table_header">
                                        <div className="header_left_column white">Point Value of First Two Cards</div>
                                        <div className="header_center_column white">Draws When The Player's Third Card Is:</div>
                                        <div className="header_right_column white">Does Not Draw When The Player's Third Card Is:</div>
                                    </div>
                                    <div className="currency_conversion_table_body">
                                        <div className="currency_conversion_table_row three_content">
                                            <div className="left_content w32">0, 1 or 2</div>
                                            <div className="center_content">Always draws a card</div>
                                            <div className="right_content"></div>
                                        </div>
                                        <div className="currency_conversion_table_row three_content">
                                            <div className="left_content w32">3</div>
                                            <div className="center_content">0, 1, 2, 3, 4, 5, 6, 7 or 9</div>
                                            <div className="right_content">8</div>
                                        </div>
                                        <div className="currency_conversion_table_row three_content">
                                            <div className="left_content w32">4</div>
                                            <div className="center_content">2, 3, 4, 5, 6 or 7</div>
                                            <div className="right_content">	0, 1, 8 or 9 </div>
                                        </div>
                                        <div className="currency_conversion_table_row three_content">
                                            <div className="left_content w32">5</div>
                                            <div className="center_content">4, 5, 6 or 7</div>
                                            <div className="right_content">0, 1, 2, 3, 8 or 9</div>
                                        </div>
                                        <div className="currency_conversion_table_row three_content">
                                            <div className="left_content w32">6</div>
                                            <div className="center_content">6 or 7</div>
                                            <div className="right_content">0, 1, 2, 3, 4, 5, 8 or 9</div>
                                        </div>
                                        <div className="currency_conversion_table_row three_content">
                                            <div className="left_content w32">7</div>
                                            <div className="center_content">Always Stands</div>
                                            <div className="right_content"></div>
                                        </div>
                                        <div className="currency_conversion_table_row three_content">
                                            <div className="left_content w32">8 or 9</div>
                                            <div className="center_content">Player cannot draw</div>
                                            <div className="right_content">Player cannot draw</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="full_offer_short_text">An example: If the Banker's two-card score is 4 and the Player draws a third card with a value of 6 then the Banker will draw a third card. If the Banker's two-card score is 5 and the Player draws a third card with a value of 2 then the Banker is compelled to stand without taking a third card.</div>
                                <div className="full_offer_sub_title2">Strategy</div>
                                <div className="full_offer_short_text">In reality, there isn't much scope for strategy as such in Baccarat, because the player is not able to influence the order of the cards, or whether either hand stands or takes another card.</div>
                                <div className="full_offer_short_text">However, the subtlety comes from making the right bets at the right time. Many players like to keep records of the sequences of hand results and make their bets based on what they believe will be the outcome of the next hand. Intuition is everything.</div>
                            </div>
                            :""}
                        {this.state.fullPlayerGuides == "playBlackjack" ?
                            <div className="full_offer_tab">
                                <div className="full_offer_title">Blackjack Player Guide</div>
                                <div className="full_offer_sub_title">Blackjack is one of the most popular casino games of all and is played by millions of players the world over. See how you can improve your Blackjack play with bet365.</div>
                                <div className="full_offer_sub_title2">The Basics</div>
                                <div className="full_offer_sub_title3">Scoring</div>
                                <div className="full_offer_short_text">The random nature in which cards are dealt in Blackjack means that there can never be a system that guarantees a successful outcome of any hand for a player. However, there are ways in which you can maximise your chances of taking advantage of the best odds available to the player in any given situation.</div>
                                <div className="full_offer_short_text">Depending upon which cards you hold and the value of the dealer's face-up card there are courses of action you can take which are considered to be statistically the most advantageous way to play.</div>
                                <div className="full_offer_short_text">A "hard number" is one which is made up of two cards not containing an Ace. A "soft number" is one which contains an Ace and has two potential values. For example, if you have A-5 then you have either 6 or 16, giving you more options than if you have 10-6 to make 16</div>
                                <div className="full_offer_short_text">This strategy recommends that you should not split 10s, that you should look to double down when you have eleven, against anything other than a dealer's Ace, and that you stand with 12 against a dealer's 6.</div>
                                <div className="full_offer_short_text">This may not be the way that you usually play but it has been mathematically determined to be the best way of increasing the odds in your favour.</div>
                                <ul className="blackjack-key_list">
                                    <li className="blackjack-key_item">
                                        <div className="blackjack-key_item_key">H</div>
                                        <div className="blackjack-key_item_description">Hit</div>
                                    </li>
                                    <li className="blackjack-key_item">
                                        <div className="blackjack-key_item_key">H</div>
                                        <div className="blackjack-key_item_description">Hit with 2 card stand with 3 or more</div>
                                    </li>
                                    <li className="blackjack-key_item">
                                        <div className="blackjack-key_item_key">H</div>
                                        <div className="blackjack-key_item_description">Split</div>
                                    </li>
                                    <li className="blackjack-key_item">
                                        <div className="blackjack-key_item_key">H</div>
                                        <div className="blackjack-key_item_description">Double Down if possible, otherwise Stand</div>
                                    </li>
                                    <li className="blackjack-key_item">
                                        <div className="blackjack-key_item_key">H</div>
                                        <div className="blackjack-key_item_description">Double Down if possible, otherwise Hit </div>
                                    </li>
                                    <li className="blackjack-key_item">
                                        <div className="blackjack-key_item_key">H</div>
                                        <div className="blackjack-key_item_description">Stand</div>
                                    </li>
                                </ul>
                                <div className="full_offer_sub_title2">Hard Numbers</div>
                                <div className="full_offer_sub_title3">Dealer's Face Up Card</div>
                                <div className="blackjack-table">
                                    <div className="blackjack-table-left-column">
                                        <img src="../img/PlayerGuides_Hard LHS Column.svg" alt="blackjack-table"/>
                                    </div>
                                    <div className="blackjack-table-right-column">
                                        <img src="../img/PlayerGuideBlackjackTable_Hard.svg" alt="blackjack-table"/>
                                    </div>
                                </div>

                                <div className="full_offer_sub_title2">Soft Numbers</div>
                                <div className="full_offer_sub_title3">Dealer's Face Up Card</div>
                                <div className="blackjack-table">
                                    <div className="blackjack-table-left-column">
                                        <img src="../img/Soft LHS Column.svg" alt="blackjack-table"/>
                                    </div>
                                    <div className="blackjack-table-right-column">
                                        <img src="../img/PlayerGuideBlackjackTable_Soft.svg" alt="blackjack-table"/>
                                    </div>
                                </div>


                                <div className="full_offer_sub_title2">Pairs</div>
                                <div className="full_offer_sub_title3">Dealer's Face Up Card</div>
                                <div className="blackjack-table">
                                    <div className="blackjack-table-left-column">
                                        <img src="../img/Pairs LHS Column.svg" alt="blackjack-table"/>
                                    </div>
                                    <div className="blackjack-table-right-column">
                                        <img src="../img/PlayerGuideBlackjackTable_Pairs.svg" alt="blackjack-table"/>
                                    </div>
                                </div>


                                <div className="full_offer_sub_title3">Key Points</div>
                                <div className="full_offer_short_text">Feel free to use our special strategy guide to see how the experts think you should play the game and see how it fits in with your own tactics and approach. Remember though that no strategy guide can account for betting patterns and size of bets, so it's up to the player to determine those for themselves. Even then though there are some basics which you should always look to adhere to:</div>
                                <div className="full_offer_short_text">Always split Aces, except when the dealer is showing an Ace</div>
                                <div className="full_offer_short_text">Do not split a pair of 5s</div>
                                <div className="full_offer_short_text">Stand on a hard 13 through to 16 if the dealer is showing a 6 or lower</div>
                                <div className="full_offer_short_text">If the dealer is showing a 4, 5 or 6 you should stick on 12</div>
                                <div className="full_offer_short_text">You should always continue to hit until you have 17 or better if the dealer is showing a ten</div>
                                <div className="full_offer_short_text">Always stand once you have a hard 17 or higher. The odds of you not busting are far too low for it to be worth the risk</div>
                                <div className="full_offer_short_text">Always stand when you have A-8 or A-9</div>

                                <div className="full_offer_sub_title2">HINTS AND TIPS</div>
                                <div className="full_offer_sub_title3">Hard and Soft - Tricky Seventeen</div>
                                <div className="full_offer_short_text">A lot of players find 17 a difficult number in Blackjack. It is always sensible to stand on a hard 17, but here we demonstrate the same is not the case with a soft 17 (an ace and a six). Though 17 is a good hand, you have the chance to improve your holding without the fear of busting.</div>
                                <div className="full_offer_short_text">Drawing any card with a 10 value will mean you still have 17, while an Ace, 2, 3 or 4 will improve it. That leaves only a 5, 6, 7, 8 or 9 to weaken your hand. As you can see, eight cards either improve or maintain the strength of your hand and only five weaken it. This means that soft 17 is sometimes a good time to Double Down.</div>

                                <div className="full_offer_sub_title3">Play your hand, not your stake</div>
                                <div className="full_offer_short_text">Whether you are following optimal strategy or your own system, most players agree that it’s important to make decisions based on your cards and not the value of your stake. For example, if you've been dealt 14 and the dealer is showing a 10 then the optimal strategy is to hit and take another card.</div>

                                <div className="full_offer_sub_title3">Doubling Down</div>
                                <div className="full_offer_short_text">Doubling Down enables the player to gain full value when they have a good situation. If a player is discouraged from making the Double Down, they are unable to gain that value.</div>

                                <div className="full_offer_sub_title3">Splitting Pairs</div>
                                <div className="full_offer_short_text">In contrast to the reluctance players sometimes feel to Double Down, they are often too keen to split pairs of 10 value cards. If the dealer is showing a 5 or a 6, the player tends to think they have an easy chance to win two hands.</div>
                                <div className="full_offer_short_text">However, why would you want to break up one of the best Blackjack hands you can be dealt, and risk making two worse hands? There are many times when you should split your paired cards but when you are dealt 20 it is a good idea to stand every time.</div>

                                <div className="full_offer_sub_title3">Final thoughts</div>
                                <div className="full_offer_short_text">As we have already seen, players often change their game based on factors beyond the cards, and this rarely improves their results. Another example of this occurs when players stand on a low hand and hope that the dealer busts. Such over-cautiousness is often another indication that the player cares more about the stake than they do about playing their cards.</div>
                                <div className="full_offer_short_text">It is vital that you concentrate on your own game, whatever strategy you are using, rather than allowing yourself to be distracted. Successful Blackjack players are always aware of the issues discussed in this article, and combine this with their knowledge of optimal strategy.</div>
                                <div className="full_offer_short_text">Please note:</div>
                                <div className="full_offer_short_text">This strategy guide is provided for information only and is intended to be used with bet365's standard single player, 3-player and 5-player Blackjack games.</div>
                                <div className="full_offer_short_text">Because of the random way in which cards are dealt in Blackjack, sustained winning and losing streaks are possible and using this strategy is no guarantee of any specific outcome.</div>
                                <div className="full_offer_short_text">Playing Optimal Strategy Blackjack is no guarantee of success but does offer the best odds over a sustained period of time.</div>


                            </div>
                            :""}
                        {this.state.fullPlayerGuides == "playRoulette"?
                            <div className="full_offer_tab">
                                <div className="full_offer_title">Roulette Player Guide</div>
                                <div className="full_offer_sub_title">bet365 provides three different Roulette games for its players. These are European Roulette, American Roulette and Roulette Pro. Here we explain the bets available on these games, look at some of the betting systems which exist and discover your best way of enjoying one of the most popular of all Casino games.</div>
                                <div className="full_offer_sub_title2">European Roulette</div>
                                <div className="full_offer_short_text">This is a standard European Roulette wheel and one which is found in casinos all over the world. The numbers are ordered clockwise round the wheel as follows:</div>
                                <div className="full_offer_short_text">0-32-15-19-4-21-2-25-17-34-6-27-13-36-11-30-8-23-10-5-24-16-33-1-20-14-31-9-22-18-29-7-28-12-35-3-26</div>
                                <div className="full_offer_short_text">This will be the wheel most instantly recognisable to most players outside of North America. This wheel has 36 numbers and a single zero.</div>
                                <div className="full_offer_sub_title2">American Roulette</div>
                                <div className="full_offer_short_text">The American Roulette wheel uses 36 numbers, the same as its European cousin, but adds an extra option with a 'double zero'. The clockwise sequence of numbers changes to:</div>
                                <div className="full_offer_short_text">0-28-9-26-30-11-7-20-32-17-5-22-34-15-3-24-36-13-1-00-27-10-25-29-12-8-19-31-18-6-21-33-16-4-23-35-14-2</div>
                                <div className="full_offer_short_text">The extra 'double zero' option and the different sequence of numbers open up whole new bets for the player to make.</div>
                                <div className="full_offer_sub_title2">Roulette Pro</div>
                                <div className="full_offer_short_text">The layout of the Roulette Pro wheel is identical to the European one; the only difference when you decide to play on Roulette Pro is that a selection of convenient 'French bets' become available to you.</div>
                                <div className="full_offer_short_text">These special bets include 'Voisins du Zero' (Neighbours of Zero), 'Tier' (Third) and 'Orphelins' (Orphans).</div>
                                <div className="full_offer_short_text">These bets are very popular with many players who like to play sections of the European wheel, and are explained in more detail later on in this guide.</div>
                                <div className="full_offer_sub_title2">Types of Roulette Bets</div>
                                <div className="full_offer_short_text">There are many kinds of standard bets you can place in Roulette, and it is best if you familiarise yourself quickly with these and the odds that are available for each of them.</div>
                                <div className="full_offer_short_text">The diagram below illustrates where your chips are placed for each of the types of bet you can make when playing Roulette. The table explains what these bets are called, their odds and which numbers are covered by them.</div>
                                <div className="roulette-image">
                                    <img src="../img/PlayerGuides_Roulette2.svg" alt="roulette-image"/>
                                </div>
                                <ul className="roulette-key_list">
                                    <li className="roulette-key_item">
                                        <div className="roulette-key_item_key">1</div>
                                        <div className="roulette-key_item_description">
                                        <div className="roulette-key_item_title">Dozen</div>
                                            <span className="roulette-key_item_odd">2:1</span>
                                            1 to 12, 13, to 24 or 25 to 36
                                        </div>
                                    </li>
                                    <li className="roulette-key_item">
                                        <div className="roulette-key_item_key">2</div>
                                        <div className="roulette-key_item_description">
                                            <div className="roulette-key_item_title">Corner</div>
                                            <span className="roulette-key_item_odd">8:1</span>
                                            Bet on four numbers with this bet
                                        </div>
                                    </li>
                                    <li className="roulette-key_item">
                                        <div className="roulette-key_item_key">3</div>
                                        <div className="roulette-key_item_description">
                                            <div className="roulette-key_item_title">Straight Up</div>
                                            <span className="roulette-key_item_odd">35:1</span>
                                            The biggest payout of them all. The straight up win!
                                        </div>
                                    </li>
                                    <li className="roulette-key_item">
                                        <div className="roulette-key_item_key">4</div>
                                        <div className="roulette-key_item_description">
                                            <div className="roulette-key_item_title">Street</div>
                                            <span className="roulette-key_item_odd">11:1</span>
                                            Choose your favourite street for a big payout
                                        </div>
                                    </li>
                                    <li className="roulette-key_item">
                                        <div className="roulette-key_item_key">5</div>
                                        <div className="roulette-key_item_description">
                                            <div className="roulette-key_item_title">Line</div>
                                            <span className="roulette-key_item_odd">5:1</span>
                                            Cover six numbers with one chip
                                        </div>
                                    </li>
                                    <li className="roulette-key_item">
                                        <div className="roulette-key_item_key">6</div>
                                        <div className="roulette-key_item_description">
                                            <div className="roulette-key_item_title">High/Low</div>
                                            <span className="roulette-key_item_odd">1:1</span>
                                            1 to 18 or 19 to 36? Another even money chance
                                        </div>
                                    </li>
                                    <li className="roulette-key_item">
                                        <div className="roulette-key_item_key">7</div>
                                        <div className="roulette-key_item_description">
                                            <div className="roulette-key_item_title">Odd/Even</div>
                                            <span className="roulette-key_item_odd">1:1</span>
                                            An odd or even number? It's an even money bet
                                        </div>
                                    </li>
                                    <li className="roulette-key_item">
                                        <div className="roulette-key_item_key">8</div>
                                        <div className="roulette-key_item_description">
                                            <div className="roulette-key_item_title">Red/Black</div>
                                            <span className="roulette-key_item_odd">1:1</span>
                                            Choose red or black for an even money bet
                                        </div>
                                    </li>
                                    <li className="roulette-key_item">
                                        <div className="roulette-key_item_key">9</div>
                                        <div className="roulette-key_item_description">
                                            <div className="roulette-key_item_title">Split</div>
                                            <span className="roulette-key_item_odd">17:1</span>
                                            Either one of two numbers will see you win
                                        </div>
                                    </li>
                                    <li className="roulette-key_item">
                                        <div className="roulette-key_item_key">10</div>
                                        <div className="roulette-key_item_description">
                                            <div className="roulette-key_item_title">Column</div>
                                            <span className="roulette-key_item_odd">2:1</span>
                                            Choose one of the three columns
                                        </div>
                                    </li>
                                </ul>
                                <div className="full_offer_sub_title2">Roulette Pro</div>
                                <div className="full_offer_short_text">Roulette is one of the most popular casino games, and it's not difficult to see why. It is easy to play and offers enough betting options to suit the tastes of both the serious player and those looking for the enjoyable thrill of a quick bet.</div>
                                <div className="full_offer_short_text">If you're new to the game then the best thing to do is keep it simple. There are many straightforward bets available that allow you to enjoy the Roulette experience while you become more confident in your play. Try sticking to straight up numbers or placing even money bets such as red/black and odd/even.</div>
                                <div className="full_offer_short_text">Over time, players may develop their own system of betting based on a strategic plan. However, each new spin of the wheel produces a random result, and no system is absolutely guaranteed to make a profit over a period of time. Using favourite/significant numbers is as good a strategy as any other if you want to enjoy playing Roulette.</div>
                                <div className="full_offer_sub_title2">French Bets</div>
                                <div className="full_offer_short_text">Voisins du Zero - This bet, meaning 'neighbours of zero', covers a total of 17 numbers with nine units of currency. Players placing this bet are hoping that the ball lands in the section of the wheel surrounding the zero. Any winning bet will see a return of at least twice the original stake.</div>
                                <div className="full_offer_short_text">Tier - Also known as 'Tiers du Cylindre', this bet covers the third of the wheel roughly opposite the zero. 12 numbers are covered, with just six unit stakes. Any winning bet will pay the player three times their initial stake.</div>
                                <div className="full_offer_short_text">Orphelins - The 'Orphans' bet covers the two sections of the wheel not included in either the 'Voisins du Zero' or 'Tier' bets, and consists of eight numbers played with five unit stakes. Any win on 'Orphelins' is guaranteed to pay out at least double the original wager.</div>
                                <div className="full_offer_sub_title2">Betting Systems</div>
                                <div className="full_offer_short_text">Many players like to employ betting patterns that steadily increase the size of their bets until a winning spin comes along. The most well-known example is the 'Martingale System', in which you double your bet every time you don't win. Many players believe this to be a sure-fire winning system, but the risk of the Martingale System is that a player invariably starts to bet ever increasing amounts of money to do little more than break even. Even when starting with a stake of one unit of currency, a losing run of seven straight spins using the Martingale System will mean that the eighth bet needs to be 128 units to return a profit of just one unit.</div>
                                <div className="full_offer_short_text">To discourage this betting pattern most casinos set table limits – as does bet365. Long sequences of numbers and colours can and do occur at the Roulette wheel, and it is not extraordinary to see a sequence of, for example, many reds. You should enjoy sustained winning streaks when they happen, but be wary of wagering ever greater numbers of chips when the spins are going against you!</div>
                            </div>
                            :""}
                    </div>
                </div>

            </div>
        )

    }
}

export default CasinoFullPlayerGuides;