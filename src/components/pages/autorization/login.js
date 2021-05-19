import React from 'react';
import {
    getInactivityTime, getlanguage, getTimezone, updateInactivityTime, updateOddsFormat,
    updateTimezone
} from "../../helpers/data_account";



class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            userDropDown: false,
            tab: "account",
            showBalance: true,
            showName: true,
            hideUsername: false,
            showUsername: false,
            language: {},
            currentLang: {
                id: "en",
                name: "English"
            },
            showLangs: false,
            inactivityTime: false,
            currentInactTime: 20,
            showInactTime: false,
            currentOdds: "decimal",
            odds: ["decimal", "fractional", "american"],
            showOdds: false,
            timezone: {},
            showTimezone: false,
            currentTimezone:  "GMT+00:00",
            profile: this.props.profile,
            loginToken: this.props.loginToken,
            currentPage: this.props.currentPage == "my_bets" || this.props.currentPage == "/my_bets" ? "sports" : this.props.currentPage

        }

    }
    componentDidMount() {
        getlanguage(function(err, data) {
            if (!err) {
               this.setState({
                   language: data
               })
            }
        }.bind(this))

        getInactivityTime(function (err, data) {
            if (!err) {
                this.setState({
                    inactivityTime: data
                })
            }
        }.bind(this))

        getTimezone(function(err, data) {
            if (!err) {
                this.setState({
                    timezone: data
                })
            }
        }.bind(this))
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            profile: nextProps.profile,
            loginToken:nextProps.loginToken,
            currentTimezone: nextProps.profile.timezone != null ? nextProps.profile.timezone : "GMT+00:00",
            currentOdds: nextProps.profile.currentOdds,
            currentInactTime: nextProps.profile.inactivity_time_max_minutes,
            currentPage: nextProps.currentPage == "/my_bets"  || nextProps.currentPage == "my_bets" || nextProps.currentPage == "" || nextProps.currentPage == "/in-play"  || nextProps.currentPage == "in-play"?  "sports" : nextProps.currentPage,
            //showUserBal: nextProps.showUserBal
        })
    }

    showUserDropDown = () =>{
        this.setState({
            userDropDown: !this.state.userDropDown
        })
    }


    logout = () => {
        this.props.removeToken()
    }
    changeTab = (tab) => {
        this.setState({
            tab: tab
        })
    }

    toggleBalance = () => {
        this.setState({
            showBalance: !this.state.showBalance
        })
    }
    toggleName = () => {
        this.setState({
            showName: !this.state.showName
        })
    }
    showButton = () => {
        if (this.state.showName) {
            this.setState({
                hideUsername: true,
                //showUsername: false,
                showName: false
            })
        } else {
            // this.setState({
            //     hideUsername: false,
            //     showUsername: true
            // })
        }
    }
    hideButton = () => {
        if (!this.state.showUsername) {
            this.setState({
                showName: true,
                hideUsername: false
            })
        }

    }
    hide = () => {
        this.setState({
            showName: false,
            hideUsername: false,
            showUsername: true
        })
    }
    show = () => {
        this.setState({
            showUsername: false,
            showName: true
        })
    }
    toggleLang = () => {
        this.setState({
            showLangs: !this.state.showLangs
        })
    }
    toggleInactTime = () => {
        this.setState({
            showInactTime: !this.state.showInactTime
        })
    }
    changeInactTime = (obj) => {
        updateInactivityTime(this.state.loginToken, obj, function(err,data) {
            if (!err) {
                console.log('updateTimezone', data)
            } else {
                console.log('updateTimezone error', err)

            }
        })
        this.props.updateProfile({key: "inactivity_time_max_minutes", value:obj})
    }

    changeOdds = (obj) => {
        updateOddsFormat(this.state.loginToken, obj, function(err,data) {
            if (!err) {
                console.log('updateTimezone', data)
            } else {
                console.log('updateTimezone error', err)

            }
        })
        this.props.updateProfile({key: "odds_format", value:obj})
    }

    toggleOdds = () => {
        this.setState({
            showOdds: !this.state.showOdds
        })
    }

    toggleTimezone = () => {
        this.setState({
            showTimezone: !this.state.showTimezone
        })
    }

    changeTimezone = (obj) => {
        updateTimezone(this.state.loginToken, obj, function(err,data) {
            if (!err) {
                console.log('updateTimezone', data)
            } else {
                console.log('updateTimezone error', err)

            }
        })
        this.props.updateProfile({key: "timezone", value:obj})
    }

    render() {
        return(
            <div className="user_block_wrapper">

                <div className="user_block login" onClick={()=> this.showUserDropDown()}>
                    <div className="user_account_info">
                        <div className="user_name">
                            <div className="current_user_name"  onClick={(e) => {e.preventDefault()}}>

                                        <span className={`user_name_active ${this.state.showName ? "active": ""}`} onMouseEnter={() => this.showButton()}> {this.state.profile.username} </span>

                                <div className={`hide_user_name ${this.state.hideUsername ? "active": ""}`} onClick={(e) =>{this.hide(); e.stopPropagation(); e.nativeEvent.stopImmediatePropagation()} } onMouseLeave={() => {this.hideButton()}}>Hide Username</div>
                                <div className={`show_user_name ${this.state.showUsername ? "active": ""}`} onClick={(e) =>{this.show(); e.stopPropagation(); e.nativeEvent.stopImmediatePropagation()} }>Show Username</div>

                            </div>




                            <div className="btn_envelope no_read"></div>
                        </div>
                        <div className="user_bank_info">
                            {
                                this.state.showBalance ?
                                    <div className="user_balance">{typeof this.state.profile.balance != "undefined" ? this.state.profile.balance[this.state.currentPage] : "0.00"}<span> USD</span></div>
                                    :
                                    <div className="user_balance"><span>Balance</span></div>

                            }
                            <a href="#" className="user_deposit_link" onClick={()=>{this.props.showForm('accountUser', 'withdraw'); this.showUserDropDown()}}>Deposit</a>
                        </div>

                    </div>
                    <div className="user_account_icon"/>
                </div>
                {this.state.userDropDown  ?
                    <div className="user_info_container">
                        <div className="user_balance_container">
                            <div className="left_wrapper">
                                {
                                    this.state.showBalance ?
                                        <div className="user_balance_info">
                                            <div className="user_balance_total">{typeof this.state.profile.balance != "undefined" ? this.state.profile.balance[this.state.currentPage] : "0.00"}</div>
                                            <div className="user_balance_currency">USD</div>
                                        </div>
                                        :
                                        <div className="user_balance_info">
                                            <span className="user_balance_text">Balance</span>
                                        </div>

                                }


                                <div className={`show_balance ${this.state.showBalance ? "" : "hide_bal" }`} onClick={() => this.toggleBalance()}/> {/*~~class hide_bal~~~*/}
                                <div className="refresh_balance" onClick={() => this.props.setBalance()}/> {/*~~class rotate~~~*/}
                            </div>
                            <div className="right_wrapper">
                                <div className="user_deposit_btn" onClick={()=>this.props.showForm('accountUser', 'withdraw')}>Deposit</div>
                            </div>
                        </div>
                        {
                            this.state.showBalance ?
                                <div className="user_balance_slat">
                                    <div className="user_balance_slat_block user_balance_slat_withdraw">
                                        <div className="user_balance_title">Withdrawable</div>
                                        <div className="balance_amount">0.00</div>
                                        <div className="user_balance_currency">USD</div>
                                    </div>
                                    <div className="user_balance_slat_block user_balance_slat_bonus">
                                        <div className="user_balance_title">Bet Credits</div>
                                        <div className="balance_amount">0.00</div>
                                        <div className="user_balance_currency">USD</div>
                                    </div>

                                </div>
                                :
                                ""

                        }

                        <div className="user_balance_nav_menu">
                            <div className={`user_balance_nav_menu_btn ${this.state.tab == "account" ? "selected" : ""}`} onClick={() => this.changeTab('account')}>Account</div>
                            <div className={`user_balance_nav_menu_btn my_offers ${this.state.tab == "offers" ? "selected" : ""}`} onClick={() => this.changeTab('offers')}>My Offers</div>
                            <div className={`user_balance_nav_menu_btn preferences_btn ${this.state.tab == "settings" ? "selected" : ""}`} onClick={() => this.changeTab('settings')}/>
                        </div>
                        {this.state.tab == "account" ?
                            <div className="user_info_general">
                                <div className="user_info_general_link messages" onClick={()=>this.props.showForm('accountUser', 'messages')}>
                                    <span className="user_info_general_text">Messages</span>
                                    <span className="user_info_general_count_label">0</span>
                                </div>
                                <div className="user_info_general_link" onClick={()=>{this.props.showForm('accountUser', 'members'); this.showUserDropDown()}}>Members</div>
                                <div className="user_info_general_link" onClick={()=>{this.props.showForm('accountUser', 'withdraw'); this.showUserDropDown()}}>Withdraw</div>
                                <div className="user_info_general_link" onClick={()=>{this.props.showForm('accountUser', 'history'); this.showUserDropDown()}}>History</div>
                                <div className="user_info_general_link" onClick={()=>{this.props.showForm('liveStreaming', 'promotions'); this.showUserDropDown()}}>Promotions</div>
                                <div className="user_info_general_link" onClick={()=>{this.props.showForm('accountHelper','home'); this.showUserDropDown()}}>Help</div>
                                <div className="user_info_general_link" onClick={()=>{this.props.showForm('responsibleGambling'); this.showUserDropDown()}}>Responsible Gambling</div>
                                <div className="user_info_general_link" onClick={()=>{this.props.showForm('transferBalance')}}>Transfer Balance</div>
                                <div className="user_info_general_link" onClick={() => this.logout() }>Logout</div>
                            </div>
                            :""
                        }
                        {this.state.tab == "offers" ?

                            <div className="user_offers_content">
                                <div className="user_offers_content_title">Open Account Offer - get up to <br/> 30 <span
                                    className="currency">USD</span> in Bet Credits
                                </div>
                                <div className="user_offers_content_description">We'll match your qualifying deposit in Bet
                                    Credits (up to 30
                                    <span className="currency">USD</span>) when you place qualifying bets to the same value
                                    and they are settled.
                                </div>
                                <div className="user_offers_content_footer">
                                    <div className="user_offers_content_footer_text">
                                        By 26 Dec 12:06. Min deposit 10 <span className="currency">USD</span>. Min odds, bet
                                        and payment method restrictions apply. Returns exclude Bet Credits stake.
                                    </div>
                                    <a href="#" className="user_offers_content_footer_link">Time limits and T&C’s apply</a>

                                </div>
                                <div className="user_deposit_btn" onClick={()=>this.props.showForm('accountUser', 'withdraw')}>Deposit Now</div>
                            </div>
                            : ""
                        }

                        { this.state.tab == "settings" ?
                            <div className="user_preferences_content">
                                <div className="preference_dropDown">
                                    <div className="preference_dropDown_header">Language</div>
                                    <div className="preference_dropDown_btn clicked" onClick={() => this.toggleLang()}>{this.state.currentLang.name}</div>
                                    <div className={`preference_dropDown_container ${this.state.showLangs ? "show" : ""}`}>
                                        {
                                            Object.keys(this.state.language).map((ind) => {
                                                return <div key={ind} className={`preference_dropDown_item ${this.state.currentLang.id == ind ? "selected": "" }`}>{this.state.language[ind]}</div>
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="preference_dropDown">
                                    <div className="preference_dropDown_header">Time Zone</div>

                                    {
                                        Object.keys(this.state.timezone).map((ind, index) => {
                                            if (this.state.currentTimezone == ind) {
                                                return <div key={`${index}-name`}  className="preference_dropDown_btn" onClick={() => this.toggleTimezone()}>{this.state.timezone[ind]}</div>
                                            }
                                        })
                                    }

                                    <div className={`preference_dropDown_container ${this.state.showTimezone ? "show" : ""} `}>
                                        {
                                            Object.keys(this.state.timezone).map((ind) => {
                                                return <div key={ind} className={`preference_dropDown_item ${this.state.profile.timezone == ind ? "selected" : ""}`} onClick={() => this.changeTimezone(ind)}>{this.state.timezone[ind]}</div>
                                            })

                                        }

                                    </div>
                                </div>

                                <div className="preference_dropDown">
                                    <div className="preference_dropDown_header">Odds Display</div>
                                    <div className="preference_dropDown_btn" onClick={() => this.toggleOdds()}>{this.state.profile.odds_format}</div>
                                    <div className={`preference_dropDown_container ${this.state.showOdds ? "show" : ""} `}>
                                        {
                                            this.state.odds.map((odd) => {
                                                return <div key={odd} className={`preference_dropDown_item ${this.state.profile.odds_format == odd ? "selected" : ""}`} onClick={() => this.changeOdds(odd)}>{odd}</div>
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="preference_dropDown">
                                    <div className="preference_dropDown_header">Maximum Inactivity Time</div>

                                    {
                                        Object.keys(this.state.inactivityTime).map((ind, i) => {
                                            if (this.state.currentInactTime == ind) {
                                                return <div key={`${i}-time`} className="preference_dropDown_btn" onClick={() => this.toggleInactTime()}>{this.state.inactivityTime[ind]} </div>
                                            }
                                        })

                                    }

                                    <div className={`preference_dropDown_container ${this.state.showInactTime ? "show" : ""}`}>
                                        {
                                            Object.keys(this.state.inactivityTime).map((ind) => {
                                                return <div key={ind} className={`preference_dropDown_item ${this.state.profile.inactivity_time_max_minutes == ind ? "selected" : ""}`} onClick={() => this.changeInactTime(ind)}>{this.state.inactivityTime[ind]}</div>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            : ""
                        }
                    </div>
                :""
                }


                </div>


        )

    }
}

export default Login;