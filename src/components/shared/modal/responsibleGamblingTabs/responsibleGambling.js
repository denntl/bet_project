import React from 'react';



class ResponsibleGambling extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            innerNav:"overview"
        }
    }
    changeTab = (tab) => {
        this.setState({
            innerNav: tab
        })
    }
    render() {
        return(
            <div className="innerPages">
                <div className="responsible_top_banner innerResponsible">
                    {this.state.innerNav == "overview" ?
                    <div className="top_banner_slogan">

                        <div className="top_banner_slogan_text">
                            <strong>About Responsible Gambling</strong>
                        </div>
                        <div className="top_banner_slogan_text">
                            Responsible Gambling is for everyone, regardless of whether you identify yourself as having a gambling problem.
                        </div>

                    </div>
                        :""}
                    {this.state.innerNav == "problem" ?
                        <div className="top_banner_slogan">

                            <div className="top_banner_slogan_text">
                                <strong>Problem Gambling</strong>
                            </div>
                            <div className="top_banner_slogan_text">
                                The vast majority of our customers gamble responsibly, but for some gambling can have a harmful impact.
                            </div>

                        </div>
                        :""}
                    {this.state.innerNav == "gamblingWorks" ?
                        <div className="top_banner_slogan">

                            <div className="top_banner_slogan_text">
                                <strong>How Gambling Works</strong>
                            </div>
                            <div className="top_banner_slogan_text">
                                Knowing how gambling works will help you make informed decisions when you spend your money gambling.
                            </div>

                        </div>
                        :""}
                    {this.state.innerNav == "myths" ?
                        <div className="top_banner_slogan">

                            <div className="top_banner_slogan_text">
                                <strong>Myths Explained</strong>
                            </div>
                            <div className="top_banner_slogan_text">
                                People often hold beliefs about gambling that can lead to problems. Some of the more common gambling myths are listed below.
                            </div>

                        </div>
                        :""}

                    <div className="innerPageNav">
                        <ul>
                            <li className={`inner-link ${this.state.innerNav == "overview" ? 'active' : ''}`}onClick={()=>this.changeTab('overview')}>Overview</li>
                            <li className={`inner-link ${this.state.innerNav == "problem" ? 'active' : ''}`} onClick={()=>this.changeTab("problem")}>Problem Gambling</li>
                            <li className={`inner-link ${this.state.innerNav == "gamblingWorks" ? 'active' : ''}`} onClick={()=>this.changeTab("gamblingWorks")}>How Gambling Works</li>
                            <li className={`inner-link ${this.state.innerNav == "myths" ? 'active' : ''}`} onClick={()=>this.changeTab("myths")}>Myths Explained</li>
                        </ul>
                    </div>
                </div>
                <div className="r-main-section">
                    <div className="r-main-section_wrapp">
                    {this.state.innerNav == "overview" ?
                        <div>
                            <div className="r-main-section-header">How do I gamble responsibly?</div>
                            <div className="r-main-section-list">
                                <div className="overview-list-item">
                                    View gambling as a form of entertainment and not a source of income.
                                </div>
                                <div className="overview-list-item">
                                    Only gamble what you can afford to lose. You can use <a href="#" className="list-item-link">Deposit Limits</a> to help manage the amount of money you spend.
                                </div>
                                <div className="overview-list-item">
                                    Never chase your losses, as this can lead to problems.
                                </div>
                                <div className="overview-list-item">
                                    Monitor the amount of time you spend playing. You can use <a href="#" className="list-item-link">Reality Checks</a> to remind yourself how long you have been logged into your account.
                                </div>
                                <div className="overview-list-item">
                                    Balance gambling with other activities. When gambling becomes your only form of entertainment you should stop and consider whether you are still having fun.
                                </div>
                                <div className="overview-list-item">
                                    Take regular breaks from gambling. Gambling continuously can cause you to lose track of time and perspective.
                                </div>
                                <div className="overview-list-item">
                                    Do not gamble when under the influence of alcohol or when you are upset or depressed, as it can impair decision-making.
                                </div>
                                <div className="overview-list-item">
                                    Think about how much time and money you spend gambling. You can track your activity using your <a href="#" className="list-item-link">Online Account History</a>.
                                </div>
                                <div className="overview-list-item">
                                    Understand your chance of winning and <a href="#" className="list-item-link"> how the product works</a>.
                                </div>
                                <div className="overview-list-item">
                                    Know that if you ever need to talk to someone about problem gambling you can contact a problem gambling <a href="#" className="list-item-link"> support organisation</a>.
                                </div>
                            </div>
                            <div className="r-main-section-header">Are you responsible?</div>
                            <div className="list-item">We strongly believe that the only way to gamble at bet365 is responsibly. For a small number of people gambling can have a harmful impact. If you have concerns about the way you gamble, answer our short <a href="#" className="list-item-link"> Self-Assessment</a> to help recognise if you have a gambling problem.</div>
                            <div className="cta-link">Recognising a Problem</div>
                        </div>
                        :""}
                    {this.state.innerNav == "problem" ?
                        <div>
                            <div className="r-main-section-header">What is problem gambling?</div>
                            <div className="list-item">
                                Problem gambling is gambling to a degree that compromises, disrupts or damages family, personal or recreational pursuits. A problem gambler is typically described as someone who has spent more money and/or time gambling than they can afford.
                            </div>
                            <div className="r-main-section-header">Problem gambling warning signs</div>
                            <div className="r-main-section-list">
                                <div className="overview-list-item number">
                                    Spending more money and time on gambling than you can afford
                                </div>
                                <div className="overview-list-item number">
                                    Finding it hard to manage or stop your gambling
                                </div>
                                <div className="overview-list-item number">
                                    Having arguments with family or friends about money and gambling
                                </div>
                                <div className="overview-list-item number">
                                    Losing interest in your usual activities or hobbies, like going out with friends or spending time with your family
                                </div>
                                <div className="overview-list-item number">
                                    Always thinking or talking about gambling
                                </div>
                                <div className="overview-list-item number">
                                    Lying about your gambling or hiding it from other people
                                </div>
                                <div className="overview-list-item number">
                                    Chasing losses or gambling to get out of financial trouble
                                </div>
                                <div className="overview-list-item number">
                                    Gambling until all your money is gone
                                </div>
                                <div className="overview-list-item number">
                                    Borrowing money, selling possessions or not paying bills in order to fund your gambling
                                </div>
                                <div className="overview-list-item number">
                                    Needing to gamble with larger amounts of money or for a longer time to get the same feeling of excitement or buzz
                                </div>
                                <div className="overview-list-item number">
                                    Neglecting work, university, family, personal needs or household responsibilities because of gambling
                                </div>
                                <div className="overview-list-item number">
                                    Feeling anxious, worried, guilty, depressed or irritable
                                </div>
                            </div>
                            <div className="list-item">
                                If you are still unsure about the way you gamble, take our problem gambling Self-Assessment.
                            </div>
                            <div className="cta-link">Self-Assessment</div>
                        </div>
                        :""}
                    {this.state.innerNav == "gamblingWorks" ?
                        <div>
                            <div className="list-item">
                                When thinking about placing a bet, whether it is on a sporting event, a Casino game or playing Poker, it is vital that you know how the product you are playing works. If you do not, then do not place a bet.
                            </div>
                            <div className="list-item">
                                This may sound obvious but the main risk when gambling is losing money. Knowing what you are betting on means that you can make informed decisions about the money you are spending when gambling.
                            </div>

                            <div className="sportSection">
                                <div className="r-main-section-header sports">Sports</div>
                                <div className="list-item">
                                    Betting on sports involves predicting the outcome of (normally) a sporting event. This could either be the final result or any event that occurs within the game. The odds (or price) that you take are set by the company and represents their idea of an event occurring.
                                </div>
                                <div className="list-item">
                                    To win you simply have to be right, although there is no such thing as a guaranteed winner. Even when backing a big favourite, winning is never guaranteed as sports ultimately are just too unpredictable.
                                </div>
                                <div className="list-item">
                                    Unlikely outcomes are not just possible, they actually happen quite regularly.
                                </div>
                                <div className="r-main-section-header">So how do 'odds' work?</div>
                                <div className="list-item">
                                    The odds are a representation of how likely the bookmaker thinks that something will happen. The shorter the price, the more likely it is to occur and therefore the lower the winnings if you are successful.
                                </div>
                                <div className="list-item">
                                    Odds can be displayed as either decimals or fractions, both equate to the same chance of winning they are just displayed differently.
                                </div>
                                <div className="list-item">
                                    For example 3.00 and 2/1 are the same. If you placed £1 on this price and you were lucky enough to win you would get a total of £3 back, your original £1 stake and your winnings of £2.
                                </div>
                                <div className="list-item">
                                    Some more examples:
                                </div>
                                <div className="list-item list">
                                    £1 @ 2.5 (6/4) would return £2.50 in total if you won. That is your £1 stake and your winnings of £1.50.
                                </div>
                                <div className="list-item list">
                                    £1 @ 1.67 (4/6) would return £1.67 in total if you won. That is your £1 stake and your winnings of £0.67.
                                </div>
                                <div className="list-item list">
                                    £1 @ 11.00 (10/1) would return £11 in total if you won. That is your £1 stake and your winnings of £10.
                                </div>
                                <div className="list-item">
                                    But remember chance and unpredictability play a part so the outcome that people are expecting doesn't always happen, the favourite might get beat, the outsider that no one thought could win might just have its day in the sun. So never bet more than you can afford to lose, gamble responsibly and within your means.
                                </div>
                            </div>
                            <div className="sportSection">
                                <div className="r-main-section-header slots">Slots</div>
                                <div className="list-item">
                                    Slots are an online player game, similar to traditional high street fruit machines. Often based on popular movies, myths and games; slots in themselves are very easy to play, just choose your stake and press spin. Winnings are then determined by the combination of symbols that appear on the screen when the reel stops spinning.
                                </div>
                                <div className="list-item">
                                    They are designed to be fun, there is no skill involved, you cannot guess the outcome and you cannot affect the outcome. All you do is choose your stake and press spin, the rest is in the hands of chance.
                                </div>
                                <div className="list-item">
                                    The result is generated at random by a Random Number Generator, which means that no one can guess the outcome of any one spin until it happens.
                                </div>
                                <div className="list-item">
                                    There is no form to study, no trends to follow, so nothing you do will affect the outcome of a game; remember this when you place your bets and never bet more than you can afford to gamble. Always gamble responsibly and within your means.
                                </div>
                            </div>
                            <div className="sportSection">
                                <div className="r-main-section-header blackjack">Blackjack</div>
                                <div className="list-item">
                                    Blackjack is a game that whilst relatively simple on the surface, is actually strategic, requiring a good understanding of probability and the odds to play properly.
                                </div>
                                <div className="list-item">
                                    The game begins by you placing an opening bet, at this stage you are gambling on chance as you have nothing to base your opening bet on.
                                </div>
                                <div className="list-item">
                                    You are then dealt two cards (one at a time in sequence with the dealer always getting the last card to be dealt). At this stage you have an opportunity to place another bet, based on the strength of your two cards and the one card of the dealers that is always dealt face up (the other is face down). This is where the game really begins.
                                </div>
                                <div className="list-item">
                                    You have to decide whether to stick with what you have or ask for another card, with the ultimate aim being to get to as near to 21 (or ideally 21) without getting more than 21.
                                </div>
                                <div className="list-item">
                                    You can ask for as many extra cards as you want, and all you have to do is end up with a higher final score than the dealer, simple.
                                </div>
                                <div className="list-item">
                                    The key to playing blackjack is to know when to take another card, 'hit' or 'stand' with what you have got. This choice should be based on two things; firstly what is the dealer showing and secondly, if you do take another card what is the probability of it improving your chances of winning?
                                </div>
                                <div className="list-item">
                                    Of course, as with all games of chance you can only affect the outcome in the areas that you control. Whilst it is important that you understand how to play the game and when you should make certain betting decisions, you cannot predict what card you or the dealer will get, that is dependent on chance.
                                </div>
                                <div className="list-item">
                                    Remember this when you place your bets and never bet more than you can afford to gamble. Always gamble responsibly and within your means.
                                </div>
                                <div className="list-item">
                                    For more information why not use our <a href="#" className="list-item-link"> Player Guide</a>.
                                </div>
                            </div>

                        </div>
                        :""}
                    {this.state.innerNav == "myths" ?
                        <div>
                            <div className="r-main-section-header">List of common gambling myths</div>
                            <div className="myth-block">
                                <div className="myth-block-section">
                                    <div className="myth-block-icon myth">Myth</div>
                                    <div className="myth-block-text"><i>The more you gamble, the more likely it is you will win.</i></div>
                                </div>
                                <div className="myth-block-section">
                                    <div className="myth-block-icon fact">Fact</div>
                                    <div className="myth-block-text">
                                        Spending longer gambling does not have any impact on the outcome of the next event. You can increase your chances of winning in certain types of betting by understanding how the odds work and any relevant game strategies, but you cannot guarantee the outcome. Simply playing for longer will not increase the likelihood of winning.
                                    </div>
                                </div>
                            </div>
                            <div className="myth-block">
                                <div className="myth-block-section">
                                    <div className="myth-block-icon myth">Myth</div>
                                    <div className="myth-block-text"><i>If you keep playing long enough, you will eventually win all your money back.</i></div>
                                </div>
                                <div className="myth-block-section">
                                    <div className="myth-block-icon fact">Fact</div>
                                    <div className="myth-block-text">
                                        The more you gamble, the more likely it is you will lose more money. Gambling should be an enjoyable leisure experience and form part of your overall recreational expenditure.
                                    </div>
                                </div>
                            </div>


                        </div>
                        :""}
                    </div>
                    {this.state.innerNav == "myths" ?
                        <div className="r-main-section-contact-us">
                            <div className="r-main-section-contact-us-wrapp">
                                <div className="r-main-section-contact-us-title">
                                    Do you have any questions about our games?
                                </div>
                                <div className="r-main-section-contact-us-text">
                                    If so, speak to our customer service team. They are available to talk to you 24 hours a day, 7 days a week and will help to answer any questions you may have regarding the games at bet365.
                                </div>
                            </div>
                            <div className="r-main-section-contact-us-image"></div>
                        </div>
                        :""}
                </div>
            </div>

        )

    }
}

export default ResponsibleGambling;