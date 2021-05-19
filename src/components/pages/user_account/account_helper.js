import React from 'react';
import HelperHeader from "./account_nav/account_helper/helper_header";
import HelperHome from "./account_nav/account_helper/helper_home";
import HelperProduct from "./account_nav/account_helper/helper_product";
import HelperSupport from "./account_nav/account_helper/helper_support";
import HelperGambling from "./account_nav/account_helper/helper_gambling";
import HelperContacts from "./account_nav/account_helper/helper_contacts";
import HelperContactBtn from "./account_nav/account_helper/helper_contact_btn";
import PaymentMethods from "./account_nav/account_helper/paymentMethods";
import TermsAndConditions from "./account_nav/account_helper/termsAndConditions";
import PrivacyPolicy from "./account_nav/account_helper/privacyPolicy";
import CookiesPolicy from "./account_nav/account_helper/cookiesPolicy";
import FairPayouts from "./account_nav/account_helper/fairPayouts";
import ComplaintsProcedure from "./account_nav/account_helper/complaintsProcedure";
import IBAS from "./account_nav/account_helper/ibas";
import ESSA from "./account_nav/account_helper/essa";
import Deposits from "./account_nav/account_helper/deposits";




class AccountHelper extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            navMenu: false,
            navItem:this.props.activePartHelp,
            navItemInner:this.props.activePartHelpInner,
            submenuAccount:false,
            submenuProd:false,
            submenuSupport:false,
            showContact:false
        }
    }
    componentDidMount() {
        if ($('.scroll_block').length) {
            $('.scroll_block').mCustomScrollbar({
                axis: "y",
                theme: "minimal",
                scrollInertia: 550,
                scrollbarPosition: "inside"
            });
        }
    }
    toggle = (type) => {
        if (type == "Mainmenu") {
            this.setState({navMenu: !this.state.navMenu})
        }
        if(type == "submenuAccount"){
            this.setState({submenuAccount: !this.state.submenuAccount})
        }
        if(type == "submenuProdHelp"){
            this.setState({submenuProd: !this.state.submenuProd})
        }
        if(type == "submenuSupport"){
            this.setState({submenuSupport: !this.state.submenuSupport})
        }
    }
    changeContent = (tab) => {
        this.setState({
            navItem:tab
        })
    }

    render() {
        return(
            <div id="account_helper" className="modal_bet new_window" role="dialog">
                <div className="modal_content helper scroll_block">
                    <div className={`helper_navigation ${this.state.navMenu == false ? "" :"show"}`}>
                        <ul className="helper_navigation_list">
                            <li className="helper_navigation_item"  onClick={()=>this.changeContent('home')}>
                                <div className={`link_wrapp ${this.state.navItem == "home" ? "selected" :""}`} onClick={()=>this.toggle("Mainmenu")}>
                                    <span className="helper_navigation_icon home"/>
                                    <span className="helper_navigation_text" >Home</span>
                                </div>
                            </li>
                            <li className="helper_navigation_item" onClick={()=>this.toggle('submenuAccount')}>
                                <div className={`link_wrapp ${this.state.navItem == "my_account" ? "selected" :""}`} >
                                    <span className="helper_navigation_icon account"/>
                                    <span className="helper_navigation_text">My Account</span>
                                </div>

                                <ul className={`submenu ${this.state.submenuAccount == false ? "" :"show"}`}>
                                    <li className="link_wrapp">
                                        <span className="helper_navigation_icon"/>
                                        <span className="submenu_text">Login Problems</span>
                                    </li>
                                    <li className="link_wrapp">
                                        <span className="helper_navigation_icon"/>
                                        <span className="submenu_text" onClick={()=>this.changeContent('deposits')}>Deposits</span>
                                    </li>
                                    <li className="link_wrapp">
                                        <span className="helper_navigation_icon"/>
                                        <span className="submenu_text" onClick={()=>this.changeContent('paymentMethods')}>Payment Methods</span>
                                    </li>
                                    <li className="link_wrapp">
                                        <span className="helper_navigation_icon"/>
                                        <span className="submenu_text">Payment Support</span>
                                    </li>
                                    <li className="link_wrapp">
                                        <span className="helper_navigation_icon"/>
                                        <span className="submenu_text">Account Verification</span>
                                    </li>
                                    <li className="link_wrapp">
                                        <span className="helper_navigation_icon"/>
                                        <span className="submenu_text">Withdrawals</span>
                                    </li>
                                    <li className="link_wrapp">
                                        <span className="helper_navigation_icon"/>
                                        <span className="submenu_text" onClick={()=>this.changeContent('complaintsProcedure')}>Complaints Procedure</span>
                                    </li>
                                </ul>
                            </li>
                            <li className="helper_navigation_item" onClick={()=>{this.changeContent('prod_help'); this.toggle("submenuProdHelp")}}>
                                <div className={`link_wrapp ${this.state.navItem == "prod_help" ? "selected" :""}`}>
                                    <span className="helper_navigation_icon prod_help"/>
                                    <span className="helper_navigation_text">Product Help</span>
                                </div>
                                <ul className={`submenu ${this.state.submenuProd == false ? "" :"show"}`}>
                                    <li className="link_wrapp">
                                        <span className="helper_navigation_icon"/>
                                        <span className="submenu_text">Sports</span>
                                    </li>
                                    <li className="link_wrapp">
                                        <span className="helper_navigation_icon"/>
                                        <span className="submenu_text">Casino</span>
                                    </li>
                                    <li className="link_wrapp">
                                        <span className="helper_navigation_icon"/>
                                        <span className="submenu_text">Poker</span>
                                    </li>
                                    <li className="link_wrapp">
                                        <span className="helper_navigation_icon"/>
                                        <span className="submenu_text">Games</span>
                                    </li>
                                    <li className="link_wrapp">
                                        <span className="helper_navigation_icon"/>
                                        <span className="submenu_text">Vegas</span>
                                    </li>
                                    <li className="link_wrapp">
                                        <span className="helper_navigation_icon"/>
                                        <span className="submenu_text">Bingo</span>
                                    </li>
                                </ul>
                            </li>
                            <li className="helper_navigation_item" onClick={()=>{this.changeContent('support'); this.toggle("submenuSupport")}}>
                                <div className={`link_wrapp ${this.state.navItem == "support" ? "selected" :""}`}>
                                    <span className="helper_navigation_icon support"/>
                                    <span className="helper_navigation_text">Technical Support</span>
                                </div>
                                <ul className={`submenu ${this.state.submenuSupport == false ? "" :"show"}`}>
                                    <li className="link_wrapp">
                                        <span className="helper_navigation_icon"/>
                                        <span className="submenu_text">FAQs</span>
                                    </li>
                                    <li className="link_wrapp">
                                        <span className="helper_navigation_icon"/>
                                        <span className="submenu_text">System Requirements</span>
                                    </li>

                                </ul>
                            </li>
                            <li className="helper_navigation_item" onClick={()=>this.changeContent('respons_gamb')}>
                                <div className={`link_wrapp ${this.state.navItem == "respons_gamb" ? "selected" :""}`} onClick={()=>this.toggle("Mainmenu")}>
                                    <span className="helper_navigation_icon respons_gamb"/>
                                    <span className="helper_navigation_text">Responsible Gambling</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className={`helper_page_wrapp ${this.state.navMenu == false ? "" :"opened"}`}>
                        <div className="modal_header_helper">
                            <button type="button" className="close" onClick={() => this.props.closeModal('accountHelper')}></button>
                            <HelperHeader toggle ={()=>this.toggle("Mainmenu")} navMenu = {this.state.navMenu} changeContent={(tab)=>this.changeContent(tab)}/>
                        </div>
                        <div className="dynamic_content">
                            {this.state.navItem == "home" ?
                                <HelperHome changeContent={(tab)=>this.changeContent(tab)}/>
                            :""
                            }
                            {this.state.navItem == "paymentMethods" ?
                               <PaymentMethods navItemInner = {this.state.navItemInner} />


                            :""
                            }
                            {this.state.navItem == "prod_help" ?
                                <HelperProduct/>
                            :""
                            }
                            {this.state.navItem == "support" ?
                                <HelperSupport/>

                            :""
                            }
                            {this.state.navItem == "termaAndConditions" ?
                            <div>
                                <TermsAndConditions/>
                                <HelperContactBtn changeContent = {(tab)=>this.changeContent(tab)} />
                            </div>
                            :""
                            }
                            {this.state.navItem == "privacyPolicy" ?
                            <div>
                                <PrivacyPolicy/>
                                <HelperContactBtn changeContent = {(tab)=>this.changeContent(tab)} />
                            </div>
                            :""
                            }

                            {this.state.navItem == "cookiesPolicy" ?
                            <div>
                                <CookiesPolicy/>
                                <HelperContactBtn changeContent = {(tab)=>this.changeContent(tab)} />
                            </div>
                            :""
                            }
                            {this.state.navItem == "fairPayouts" ?
                            <div>
                                <FairPayouts/>
                                <HelperContactBtn changeContent = {(tab)=>this.changeContent(tab)} />
                            </div>
                            :""
                            }
                            {this.state.navItem == "complaintsProcedure" ?
                            <div>
                                <ComplaintsProcedure/>
                                <HelperContactBtn changeContent = {(tab)=>this.changeContent(tab)} />
                            </div>
                            :""
                            }
                            {this.state.navItem == "ibas" ?
                            <div>
                                <IBAS/>
                                <HelperContactBtn changeContent = {(tab)=>this.changeContent(tab)} />
                            </div>
                            :""
                            }
                            {this.state.navItem == "essa" ?
                                <div>
                                    <ESSA/>
                                    <HelperContactBtn changeContent = {(tab)=>this.changeContent(tab)} />
                                </div>
                                :""
                            }
                            {this.state.navItem == "deposits" ?
                                <div>
                                    <Deposits/>
                                    <HelperContactBtn changeContent = {(tab)=>this.changeContent(tab)} />
                                </div>
                                :""
                            }
                            {this.state.navItem == "respons_gamb" ?
                                <div className={`page_content_wrapp ${this.state.showContact == "contacts" ? "" :"show"}`}>
                                <HelperGambling/>
                                <HelperContactBtn changeContent = {(tab)=>this.changeContent(tab)} />

                                </div>
                            :""
                            }
                            {this.state.navItem == "contacts"?
                                <HelperContacts/>
                            :""
                            }
                            </div>
                        <footer className="footer_helper">
                                <div className="footer_helper_links">
                                    <a href="#">Contact Us</a>
                                    <a href="#">Responsible Gambling</a>
                                    <a href="#">Privacy Policy</a>
                                    <a href="#">About Us</a>
                                    <a href="#">ESSA</a>
                                    <a href="#">Sports Rules</a>
                                    <a href="#">Terms and Conditions</a>
                                    <a href="#">Cookies Policy</a>
                                    <a href="#">IBAS</a>
                                    <a href="#">Fair Payouts</a>
                                    <a href="#">Complaints Procedure</a>
                                </div>
                                <div className="footer_helper_text">© 2001-2018 bet365. All rights reserved.</div>
                            </footer>
                    </div>
                </div>
            </div>
         )

     }
  }

export default AccountHelper;