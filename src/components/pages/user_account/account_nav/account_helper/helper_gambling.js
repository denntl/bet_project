import React from 'react';
import HelperContactBtn from "./helper_contact_btn";
import HelperContacts from "./helper_contacts";




class HelperGambling extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            fullRule:false,
            fullRuleCommits:false,
            fullRuleIn_control:false,
            fullRuleLimit:false,
            fullRuleRecognize:false,
            fullRuleBreak:false,
            fullRuleSupport:false,
            fullRuleFriends:false,
            fullRuleProtecting:false

        }
    }
    toggle = (type) =>{
        this.setState({fullRule: !this.state.fullRule})
        if (type == "commitment"){
            this.setState({fullRuleCommits: !this.state.fullRuleCommits})
        }
        if (type == "in_control"){
            this.setState({fullRuleIn_control: !this.state. fullRuleIn_control})
        }
        if (type == "limit_account"){
            this.setState({fullRuleLimit: !this.state. fullRuleLimit})
        }
        if (type == "recognize"){
            this.setState({fullRuleRecognize: !this.state. fullRuleRecognize})
        }
        if (type == "break"){
            this.setState({fullRuleBreak: !this.state. fullRuleBreak})
        }
        if (type == "support"){
            this.setState({fullRuleSupport: !this.state. fullRuleSupport})
        }
        if (type == "friends"){
            this.setState({fullRuleFriends: !this.state. fullRuleFriends})
        }
        if (type == "protecting"){
            this.setState({fullRuleProtecting: !this.state. fullRuleProtecting})
        }
    }

    render() {
        return(
            <div className="helper_content">

                <div className={`rulesList ${this.state.fullRule == false ? "show" :""}`}>
                    <div className="pageHeading">Responsible Gambling</div>
                    <div className="rules_wrap padLR">
                        <div className="rulesItem" onClick={()=>this.toggle("commitment")}>Our Commitment</div>
                        <div className="rulesItem" onClick={()=>this.toggle("in_control")}>Stay In Control</div>
                        <div className="rulesItem" onClick={()=>this.toggle("limit_account")}>Limit Your Account</div>
                        <div className="rulesItem" onClick={()=>this.toggle("recognize")}>Recognise a Problem</div>
                        <div className="rulesItem" onClick={()=>this.toggle("break")}>Take a Break</div>
                        <div className="rulesItem" onClick={()=>this.toggle("support")}>Support and Advice</div>
                        <div className="rulesItem" onClick={()=>this.toggle("friends")}>Friends and Family</div>
                        <div className="rulesItem" onClick={()=>this.toggle("protecting")}>Protecting Minors</div>
                    </div>

                </div>
                <div className={`full_rule ${this.state.fullRuleCommits == false ? "" :"show"}`}>
                    <div className="pageHeading">Our Commitment</div>

                    <div className="full_text padLR">
                        <div className="back_btn" onClick={()=>this.toggle("commitment")}>Responsible Gambling</div>
                        <p>bet365 is committed to Responsible Gambling. We promote gambling as an enjoyable leisure activity and we believe that gambling can only remain this way if you stay in control and gamble responsibly. However, we know that for some people gambling can stop being a harmless leisure activity and become a problem.</p>

                        <p>To assist you we offer a range of advice and account options to help you manage your gambling. These give you control of both the time and money you spend gambling.</p>
                        <p className="with_link">- <a href="#">Advice on Staying in Control</a></p>
                        <p className="with_link">- <a href="#">Deposit Limits</a></p>
                        <p className="with_link">- <a href="#">Reality Checks</a></p>
                        <p className="with_link">- <a href="#">Time-Out</a></p>
                        <p className="with_link">- <a href="#">Self-Exclusion</a></p>

                        <p>Our customer service staff receive dedicated training on dealing with problem gambling issues and are available to listen and to support you in keeping control. If you would like to talk to someone here about problem gambling please Contact Us.</p>

                        <p>There are also a number of independent problem gambling support services who offer a range of contact methods together with free and confidential advice.</p>

                        <p>If you are concerned about your gambling you can click here to complete our problem gambling self-assessment, this will help you consider whether you may have a problem.</p>

                        <p>If you are concerned about the gambling behaviour of a friend or family member, you can find more information
                        <a href="javascript:void(0)" onClick={()=>this.setState({fullRuleFriends:true, fullRuleCommits: false})}> here</a>.</p>
                    </div>
                </div>
                <div className={`full_rule ${this.state. fullRuleIn_control == false ? "" :"show"}`}>
                    <div className="pageHeading">Stay In Control</div>

                    <div className="full_text padLR">
                        <div className="back_btn" onClick={()=>this.toggle("in_control")}>Responsible Gambling</div>
                        <p>We believe that gambling should always be an enjoyable leisure activity. Remembering these simple tips can help make sure your gambling doesn’t become a problem.</p>

                        <p>1. Gambling should be entertaining and not seen as a way of making money.</p>

                        <p>2. Bet sensibly and never chase your losses.</p>

                        <p>3. Only gamble what you can afford to lose. Use Deposit Limits to manage the amount of money you spend.</p>

                        <p>4. Monitor the amount of time you spend playing. Set up Reality Checks to remind you how long you have been logged into your account.</p>

                        <p>5. Balance gambling with other activities. If gambling is your only form of entertainment think about whether you are still having fun.</p>

                        <p>6. Take regular breaks from gambling. Gambling continuously can cause you to lose track of time and perspective.</p>

                        <p>7. Don’t gamble when under the influence of alcohol or when you’re upset or depressed.</p>

                        <p>8. Think about how much money you spend gambling. You can track your activity in your <a href="#"> Account History</a>.</p>

                        <p>9. If you need to talk to someone about problem gambling then Contact our customer service team or a problem gambling <a href="#"> support services</a>.</p>
                    </div>
                </div>
                <div className={`full_rule ${this.state. fullRuleLimit == false ? "" :"show"}`}>
                    <div className="pageHeading">Limit Your Account</div>

                    <div className="full_text padLR">
                        <div className="back_btn" onClick={()=>this.toggle("limit_account")}>Responsible Gambling</div>
                        <p><b>Deposit Limits</b></p>

                        <p>We encourage you to set a deposit limit to manage the amount of money that you can deposit into your account. Limits can be set for a 24 hour, 7 day or 30 day period and cannot be overridden.</p>
                        <p>You can decrease your deposit limits at any time and this will be applied immediately.</p>

                         <p>Before increasing your deposit limits carefully consider if you can afford to do so. Never decide to increase your limit because you have lost money and think that you will win it back by gambling more. If you wish to increase a limit you will need to wait 24 hours before we action your request and then return to our site to confirm that you still want to increase it.</p>

                         <p>You can set, amend and confirm your deposit limits in the Responsible Gambling Controls section of Members by choosing <a href="#"> Deposit Limits</a> .</p>

                        <p><b>Reality Checks</b></p>

                         <p>To help you manage the amount of time you spend playing at bet365, you can set up a Reality Check alert on your account. Once set, a pop-up alert will be displayed as a reminder that you have been logged into your account for the specified period of time (excludes Poker game play).</p>

                        <p>If you wish to receive the alerts more often any changes will be applied straight away, but if you wish to receive the alerts less often you will need to wait 24 hours before this is applied.</p>

                        <p>You can set or amend your Reality Check in the Responsible Gambling Controls section of Members by choosing Reality Checks.</p>

                        <p><b>Online Account History</b></p>

                        <p>To enable you to keep track of your activity, you can access a history of your transactions, deposits and withdrawals in our Members area and your balance is always visible in the top right corner of the page when logged in to bet365.</p>

                        <p>You can access your online account history by going to Services then selecting History when logged into your account.</p>
                    </div>
                </div>
                <div className={`full_rule ${this.state. fullRuleRecognize == false ? "" :"show"}`}>
                    <div className="pageHeading">Recognise a Problem</div>

                    <div className="full_text padLR">
                        <div className="back_btn" onClick={()=>this.toggle("recognize")}>Responsible Gambling</div>
                        <p>Whilst the vast majority of our customers enjoy gambling in a safe and responsible manner, for a small number of people gambling can have a harmful impact.</p>

                        <p>Answering the self-assessment below will help you consider whether you have a problem:</p>

                        <p>1. Do you gamble to escape from a boring or unhappy life?</p>

                            <p>2. When gambling and you run out of money, do you feel lost and in despair and need to gamble again as soon as possible?</p>

                            <p>3. Do you gamble until your last penny is gone, even the fare home or the cost of a cup of tea?</p>

                            <p>4. Have you ever lied to cover up the amount of money or time you have spent gambling?</p>

                            <p>5. Have you lost interest in your family, friends or hobbies because of your gambling?</p>

                            <p>6. After losing, do you feel you must try and win back your losses as soon as possible?</p>

                            <p>7. Do arguments, frustrations or disappointments make you want to gamble?</p>

                            <p>8. Do you feel depressed or even suicidal because of your gambling?</p>

                            <p>The more you answer ‘yes’ to these questions, the more likely you are to have a gambling problem. If you have answered ‘yes’ we recommend that you speak to someone about your answers, <a href="#">Contact</a> our customer service team or a problem gambling <a href="#">support service</a>.</p>

                            <p>We also recommend that you consider <a href="#"> Self-Exclusion</a>.</p>
                    </div>
                </div>
                <div className={`full_rule ${this.state.fullRuleBreak == false ? "" :"show"}`}>
                    <div className="pageHeading">Take a Break</div>

                    <div className="full_text padLR">
                        <div className="back_btn" onClick={()=>this.toggle("break")}>Responsible Gambling</div>
                            <p><b>Time-Out</b></p>

                        <p>If you want to take a short break from betting and gaming with us, you can do so by taking a Time-Out for a period of 24 hours, 48 hours, 7 days or 30 days.</p>

                        <p>Once you begin your Time-Out, you will not be able to use your account for betting and gaming, although you will still be able to login to withdraw any remaining balance. It will not be possible to reactivate your account until your chosen period has ended.</p>

                        <p>If you feel you are at risk of developing a gambling problem or believe you currently have a gambling problem, you should use Self-Exclusion.</p>

                        <p>To take a Time-Out please visit the Responsible Gambling Controls section of Members by choosing Time-Out.</p>

                            <p><b>Self-Exclusion</b></p>

                        <p>If you feel you are at risk of developing a gambling problem or believe you currently have a gambling problem, please consider Self-Exclusion.</p>

                        <p>If you want to stop playing for any other reason, please consider taking a Time-Out or using Account Closure.</p>

                        <p>Self-Exclusion allows you to close your account for a specified period of 6 months, 1 year, 2 years or 5 years. This prevents you gambling with bet365 for your selected period of time.</p>

                        <p>During a period of self-exclusion you will not be able to use your account for betting and gaming, although you will still be able to login to withdraw any remaining balance. It will not be possible to re-open your account for any reason, and bet365 will do all it can to detect and close any new accounts you may open.</p>

                        <p>You also have the option of selecting which areas of the site you would like to limit your access to. For example you could limit your access to our Sports product.</p>

                        <p>Should you opt to self-exclude from bet365, we strongly recommend that you seek exclusion from all other gambling operators you have an account with.</p>

                        <p>Whilst we will remove you from our marketing databases, we also suggest that you remove bet365 from your notifications and delete/uninstall all bet365 apps, downloads and social media links. You may also wish to consider installing software that blocks access to gambling websites, click here for more information.</p>

                        <p>We recommend that you seek support from a problem gambling support service to help you deal with your problem.</p>

                        <p>You can self-exclude your account in the Responsible Gambling Controls section of Members by choosing <a href="#">Self-Exclusion.</a></p>

                        <p>Alternatively you can <a href="#">Contact</a> our customer service team for assistance and further information.</p>
                    </div>
                </div>
                <div className={`full_rule ${this.state.fullRuleSupport == false ? "" :"show"}`}>
                    <div className="pageHeading">Support and Advice</div>

                    <div className="full_text padLR">
                        <div className="back_btn" onClick={()=>this.toggle("support")}>Responsible Gambling</div>
                        <p>Customers experiencing gambling problems and others affected by problem gambling should seek help. The following organisations are available to provide free and confidential advice on matters of problem gambling.</p>

                            <p><b>Gambling Therapy</b><img src="/img/WebIcon_17x17.gif"/></p>

                        <p>Gambling Therapy offer online support to non-UK residents addicted to gambling and those who show problematic gambling behaviour. Further information can be found at www.gamblingtherapy.org.</p>

                            <p><b>Gamblers Anonymous</b><img src="/img/WebIcon_17x17.gif"/><img src="/img/PhoneIcon_17x17.gif"/><img src="/img/MeetIcon_17x26.gif"/></p>

                        <p>Gamblers Anonymous provide confidential telephone support and face-to-face counselling to anyone who is affected by problem gambling. Gamblers Anonymous can be contacted on (626) 960-3500 or at www.gamblersanonymous.org/ga.</p>
                    </div>
                </div>
                <div className={`full_rule ${this.state.fullRuleFriends == false ? "" :"show"}`}>
                    <div className="pageHeading">Friends and Family</div>

                    <div className="full_text padLR">
                        <div className="back_btn" onClick={()=>this.toggle("friends")}>Responsible Gambling</div>
                        <p>We understand that problem gambling not only affects the gambler, but also their friends and family members. Often people who develop a problem do not realise it.</p>

                        <p>If you are concerned that a friend or family member has developed a gambling problem, here are some of the possible warning signs:</p>

                        <p className="with_link">- Uncontrolled spending</p>
                        <p className="with_link">- Spending significant amounts of time gambling</p>
                        <p className="with_link">- Concealing or lying about gambling behaviour</p>
                        <p className="with_link">- Borrowing money or stealing in order to gamble</p>
                        <p className="with_link">- Gambling impacting on relationships or causing arguments</p>
                        <p className="with_link">- Withdrawal from activities with family and friends</p>
                        <p className="with_link">- Loss of interest in hobbies or leisure pursuits</p>
                        <p className="with_link">- Neglecting work or studies</p>

                        <p>We recommend that you encourage the individual to contact bet365 to discuss their gambling behaviour and to seek help.</p>

                        <p>You can of course <a href="#">Contact</a> our customer service team to discuss the matter. There are also support services that are available to help people affected by problem gambling.</p>
                    </div>
                </div>
                <div className={`full_rule ${this.state.fullRuleProtecting == false ? "" :"show"}`}>
                    <div className="pageHeading">Protecting Minors</div>

                    <div className="full_text padLR">
                        <div className="back_btn" onClick={()=>this.toggle("protecting")}>Responsible Gambling</div>
                        <p>It is against the law for those under the age of 18 to gamble and bet365 takes its responsibility to prevent underage gambling very seriously. We carry out age verification checks on all customers and ask for documentary proof of age where checks are inconclusive.</p>

                            <p>The accounts of anyone under the age of 18 found to be gambling with bet365 will be closed and any winnings will be forfeited.</p>

                            <p>If you suspect that someone under the age of 18 is gambling with bet365 please Contact Us to report this.</p>

                            <p><b>Website Blocking Software</b></p>

                            <p>There are a number of third party applications that you can use to monitor or restrict access to the internet:</p>

                            <p>1. Net Nanny (<a href="https://www.netnanny.com/" target="_blank">www.netnanny.com</a>): General blocking software that protects children from inappropriate web content. Also available on iOS and Android devices.</p>

                            <p>2. CYBERsitter (<a href="https://www.cybersitter.com/" target="_blank">www.cybersitter.com</a>): Filtering software allowing parents to choose their own sites to block.</p>

                            <p>3. GamBlock (<a href="http://www.gamblock.com/" target="_blank">www.gamblock.com</a>): Specific blocking software for gambling websites. Also available for Android devices.</p>

                            <p>4. Betfilter (<a href="http://www.betfilter.com/" target="_blank">www.betfilter.com</a>): Specific blocking software for gambling websites. Also available for Android devices.</p>

                            <p>You may also want to familiarise yourself with the built-in parental controls on your mobile, tablet, PC or TV.</p>

                        <p>There are also <a href="#">support services</a> available to provide free and confidential advice on problem gambling issues.</p>
                    </div>
                </div>


                </div>

        )

    }
}

export default HelperGambling;