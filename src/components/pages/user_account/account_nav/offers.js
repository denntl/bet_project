import React from 'react';



class Offers extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            submenu:"sports",
            detailsTab: "offers_available",
            detailsTabBingo:"offers_available_bingo",
            detailsTabVegas:"offers_available_vegas",
            detailsTabCasino:"offers_available_casino",
            detailsTabSports:"offers_available_sports"
        }
    }
    //change tabs
    changeSubMenu = (tab) => {
        this.setState({
            submenu:tab
        })
    }
    changeDetailTab = (tab) => {
        this.setState({
            detailsTab:tab
        })
    }
    changeDetailTabBingo = (tab) =>{
        this.setState({
            detailsTabBingo:tab
        })
    }
    changeDetailTabVegas = (tab) =>{
        this.setState({
            detailsTabVegas:tab
        })
    }
    changeDetailTabCasino = (tab) =>{
        this.setState({
            detailsTabCasino:tab
        })
    }
    changeDetailTabSports = (tab) =>{
        this.setState({
            detailsTabSports:tab
        })
    }
    render() {
        return(
            <div className="userAccount_info">
                <div className="top_sub_menu">
                    <a href="#" className={`top_sub_menu_link ${this.state.submenu == "sports"  ? 'active' : ''}`} onClick={(e)=>{e.preventDefault(); this.changeSubMenu("sports")}}><span>Sports</span></a>
                    <a href="#" className={`top_sub_menu_link ${this.state.submenu == "casino"  ? 'active' : ''}`} onClick={(e)=>{e.preventDefault(); this.changeSubMenu("casino")}}><span>Casino</span></a>
                    <a href="#" className={`top_sub_menu_link ${this.state.submenu == "games"  ? 'active' : ''}`} onClick={(e)=>{e.preventDefault(); this.changeSubMenu("games")}}><span>Games</span></a>
                    <a href="#" className={`top_sub_menu_link ${this.state.submenu == "bingo" ? 'active' : ''}`} onClick={(e)=>{e.preventDefault(); this.changeSubMenu("bingo")}}><span>Bingo</span></a>
                    <a href="#" className={`top_sub_menu_link ${this.state.submenu == "vegas" ? 'active' : ''}`} onClick={(e)=>{e.preventDefault(); this.changeSubMenu("vegas")}}><span>Vegas</span></a>
                </div>
                {this.state.submenu == "sports" ?
                    <div className="account_info_container">
                        <div className="table_content">
                            <div className="offer_block_wrapp">
                                <div className="offer-item-title">Open Account Offer  - get up to 30 <span className="currency">USD</span> in Bet Credits</div>
                                <div className="offer-item-description">
                                    We'll match your qualifying deposit in Bet Credits (up to 30 <span className="currency">USD</span>) when you place qualifying bets to the same value and they are settled.
                                </div>
                                <div className="offer-item-description-small">Claim By 26 Dec 12:06. Min deposit 10 <span className="currency">USD</span>. Min odds, bet and payment method restrictions apply. Returns exclude Bet Credits stake. </div>
                                <div className="offer-item-terms-conditions">Time limits and T&Cs apply</div>
                                <div className="user_deposit_btn">Deposit Now</div>
                            </div>
                            {/*~~~~~~~~~~~~~~~~~~when have history~~~~~~~~~~~~~~~~~~~~~~~~*/}
                            <div className="tabs_in_details">
                                <nav className="account_details_Navigation">
                                    <ul >
                                        <li className={`account-link ${this.state.detailsTabSports == "offers_available_sports"  ? 'active' : ''}`}><a href="#"  onClick={(e) => {e.preventDefault(); this.changeDetailTabSports('offers_available_sports')}}>Offers Available</a></li>
                                        <li className={`account-link ${this.state.detailsTabSports == "bonus_history" ? 'active' : ''}`}><a href="#" onClick={(e) => {e.preventDefault(); this.changeDetailTabSports('bonus_history')}}>Bonus History</a></li>
                                    </ul>
                                </nav>
                                {this.state.detailsTabSports == "offers_available_sports" ?
                                    <div className="tab_details_info">
                                        <div className="empty_bonus_tab">
                                            <div className="attention_icon"/>
                                            <div className="empty_bonus_text">Unfortunately, you currently have no offers available on your account.</div>
                                        </div>
                                    </div>
                                    :""
                                }
                                {this.state.detailsTabSports == "bonus_history" ?
                                    <div className="tab_details_info">
                                        <div className="empty_bonus_tab">
                                            <div className="attention_icon"/>
                                            <div className="empty_bonus_text">There is no current bonus information to display.</div>
                                        </div>
                                    </div>

                                    :""
                                }
                            </div>
                        </div>


                    </div>
                :""
                }
                {this.state.submenu == "casino" ?
                    <div className="account_info_container">
                        <div className="table_content my_account">
                            <div className="tabs_in_details">
                                <nav className="account_details_Navigation">
                                    <ul >
                                        <li className={`account-link ${this.state.detailsTabCasino == "offers_available_casino"  ? 'active' : ''}`}><a href="#"  onClick={(e) => {e.preventDefault(); this.changeDetailTabCasino('offers_available_casino')}}>Offers Available</a></li>
                                        <li className={`account-link ${this.state.detailsTabCasino == "bonus_history" ? 'active' : ''}`}><a href="#" onClick={(e) => {e.preventDefault(); this.changeDetailTabCasino('bonus_history')}}>Bonus History</a></li>
                                    </ul>
                                </nav>
                                {this.state.detailsTabCasino == "offers_available_casino" ?
                                    <div className="tab_details_info">
                                        <div className="empty_bonus_tab">
                                            <div className="attention_icon"/>
                                            <div className="empty_bonus_text">There is no current bonus information to display.</div>
                                        </div>
                                    </div>
                                    :""
                                }
                                {this.state.detailsTabCasino == "bonus_history" ?
                                    <div className="tab_details_info">
                                        <div className="empty_bonus_tab">
                                            <div className="attention_icon"/>
                                            <div className="empty_bonus_text">There is no current bonus information to display.</div>
                                        </div>
                                    </div>

                                    :""
                                }
                            </div>

                        </div>

                    </div>
                :""
                }
                {this.state.submenu == "games" ?
                    <div className="account_info_container">
                        <div className="table_content my_account">
                            <div className="tabs_in_details">
                                <nav className="account_details_Navigation">
                                    <ul >
                                        <li className={`account-link ${this.state.detailsTab == "offers_available"  ? 'active' : ''}`}><a href="#"  onClick={(e) => {e.preventDefault(); this.changeDetailTab('offers_available')}}>Offers Available</a></li>
                                        <li className={`account-link ${this.state.detailsTab == "bonus_history" ? 'active' : ''}`}><a href="#" onClick={(e) => {e.preventDefault(); this.changeDetailTab('bonus_history')}}>Bonus History</a></li>
                                    </ul>
                                </nav>
                                {this.state.detailsTab == "offers_available" ?
                                    <div className="tab_details_info">
                                        <div className="tab_title no_border">Your Current Offers</div>
                                        <div className="transferFunds">
                                            <div className="transferFunds_title">New Player Bonus</div>
                                            <div className="transferFunds_body">
                                                <div className="attention_icon"/>
                                                <div className="description_block">
                                                    <div className="description_text">To qualify for this offer you must make a successful deposit/transfer into your Games/Bingo/Vegas balance.  Ref: GO9B.</div>
                                                    <button type="button" className="modal_btn" >Deposit Now</button>
                                                    <div className="description_link">Terms and Conditions</div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>


                                    :""
                                }
                                {this.state.detailsTab == "bonus_history" ?
                                    <div className="tab_details_info">
                                        <div className="empty_bonus_tab">
                                            <div className="attention_icon"/>
                                            <div className="empty_bonus_text">There is no current bonus information to display.</div>
                                        </div>
                                    </div>

                                    :""
                                }
                            </div>

                        </div>

                    </div>
                :""
                }
                {this.state.submenu == "bingo" ?
                    <div className="account_info_container">
                        <div className="table_content my_account">
                            <div className="tabs_in_details">
                                <nav className="account_details_Navigation">
                                    <ul >
                                        <li className={`account-link ${this.state.detailsTabBingo == "offers_available_bingo"  ? 'active' : ''}`}><a href="#"  onClick={(e) => {e.preventDefault(); this.changeDetailTabBingo('offers_available_bingo')}}>Offers Available</a></li>
                                        <li className={`account-link ${this.state.detailsTabBingo == "pending_bonus" ? 'active' : ''}`}><a href="#" onClick={(e) => {e.preventDefault(); this.changeDetailTabBingo('pending_bonus')}}>Pending Bonus</a></li>
                                    </ul>
                                </nav>
                                {this.state.detailsTabBingo == "offers_available_bingo" ?
                                    <div className="tab_details_info">
                                        <div className="tab_title no_border">Your Current Offers</div>
                                        <div className="transferFunds">
                                            <div className="transferFunds_title">Bingo Bonus</div>
                                            <div className="transferFunds_body">
                                                <div className="attention_icon"/>
                                                <div className="description_block">
                                                    <div className="description_text">To qualify for this offer you must make a successful deposit/transfer into your Games/Bingo/Vegas balance.  Ref: GO9B.</div>
                                                    <button type="button" className="modal_btn" >Deposit Now</button>
                                                    <div className="description_link">Terms and Conditions</div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    :""
                                }
                                {this.state.detailsTabBingo == "pending_bonus" ?
                                    <div className="tab_details_info">
                                        <div className="empty_bonus_tab">
                                            <div className="attention_icon"/>
                                            <div className="empty_bonus_text">There is no current bonus information to display.</div>
                                        </div>
                                    </div>
                                    :""
                                }
                            </div>

                        </div>

                    </div>
                :""
                }
                {this.state.submenu == "vegas" ?
                    <div className="account_info_container">
                        <div className="table_content my_account">
                            <div className="tabs_in_details">
                                <nav className="account_details_Navigation">
                                    <ul >
                                        <li className={`account-link ${this.state.detailsTabVegas == "offers_available_vegas"  ? 'active' : ''}`}><a href="#"  onClick={(e) => {e.preventDefault(); this.changeDetailTabVegas('offers_available_vegas')}}>Offers Available</a></li>
                                        <li className={`account-link ${this.state.detailsTabVegas == "bonus_history_vegas" ? 'active' : ''}`}><a href="#" onClick={(e) => {e.preventDefault(); this.changeDetailTabVegas('bonus_history_vegas')}}>Bonus History</a></li>
                                    </ul>
                                </nav>
                                {this.state.detailsTabVegas == "offers_available_vegas" ?
                                    <div className="tab_details_info">
                                        <div className="tab_title no_border">Your Current Offers</div>
                                        <div className="transferFunds">
                                            <div className="transferFunds_title">New Player Offer</div>
                                            <div className="transferFunds_body">
                                                <div className="attention_icon"/>
                                                <div className="description_block">
                                                    <div className="description_text">To qualify for this offer you must make a successful deposit/transfer into your Games/Bingo/Vegas balance.  Ref: GO9B.</div>
                                                    <button type="button" className="modal_btn" >Deposit Now</button>
                                                    <div className="description_link">Terms and Conditions</div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    :""
                                }
                                {this.state.detailsTabVegas == "bonus_history_vegas" ?
                                    <div className="tab_details_info">
                                        <div className="empty_bonus_tab">
                                            <div className="attention_icon"/>
                                            <div className="empty_bonus_text">There is no current bonus information to display.</div>
                                        </div>
                                    </div>
                                    :""
                                }
                            </div>

                        </div>

                    </div>
                :""
                }

            </div>

        )

    }
}

export default Offers;