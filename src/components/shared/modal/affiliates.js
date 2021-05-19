import React from 'react';
import AffiliatesHome from "./affiliatesTabs/affiliatesHome";
import AffiliatesInformation from "./affiliatesTabs/affiliatesInformation";
import AffiliatesContact from "./affiliatesTabs/affiliatesContact";



class Affiliates extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            topTab: this.props.activePartAffiliates
        }
    }
    changeTab = (tab) => {
        this.setState({
            topTab: tab
        })
    }
    render() {
        return(
            <div id="career" className="modal_bet new_window audioModal" role="dialog">
                <div className="modal_content career">
                    <div className="top_header affiliates">
                        <button type="button" className="close" onClick={() => this.props.closeModal('affiliates')}></button>
                        <div className="admin_block">
                            <div className="user_block_wrapper">
                                <div className="user_block ">
                                    <div className="input_block" >
                                        <input type="text" className="input_field light_green_text" name="email" placeholder="Username"  />
                                        <input type="password" className="input_field light_green_text" name="password" placeholder="Password" />
                                        <button type="submit" className="loginBtn " id="loginBtn">GO</button>
                                        <button className="loginBtn load">
                                            <span className="bs-BtnText_NoMessageSpinner"></span>
                                        </button>

                                    </div>
                                    <div className="helper_block">
                                        <a href="#">Join Now</a>
                                        <a href="#">Lost Login?</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom_header_links">
                         <ul className="bottom_headerTabs">
                                <li className={`${this.state.topTab == "home" ? "active": ""}`} onClick={()=>this.changeTab('home')}>Home </li>
                                <li className={`${this.state.topTab == "information" ? "active": ""}`} onClick={()=>this.changeTab('information')}>Information</li>
                                <li className={`${this.state.topTab == "contact" ? "active": ""}`} onClick={()=>this.changeTab('contact')}>Contact Us</li>
                            </ul>
                    </div>
                    <div className="MainPageContainer">
                        {this.state.topTab == "home" ?
                            <AffiliatesHome/>
                         :""}
                        {this.state.topTab == "information" ?
                            <AffiliatesInformation/>
                        :""}
                        {this.state.topTab == "contact" ?
                            <AffiliatesContact/>
                        :""}

                    </div>
                    <div className="affiliates_footer">
                            <div className="footerArea">
                                <div className="separator"></div>
                                <p id="MasterFooterPlaceHolder_ctl00_copyright">© 2001 - 2019 bet365. All rights
                                    reserved. </p>
                                <ul className="Logos">
                                    <li><a id="MasterFooterPlaceHolder_ctl00_APCWLink" href="#">
                                        <img src="../../../img/APCW_85x33.png"/>
                                        </a></li>
                                    <li><a id="MasterFooterPlaceHolder_ctl00_CapLink" href="#">
                                        <img src="/../../../img/CAP-logo.gif"/></a></li>
                                    <li><a href="#">
                                        <img src="/../../../img/GPWA_85x37.png"/></a></li>
                                </ul>
                            </div>

                    </div>
                </div>
            </div>
        )

    }
}

export default Affiliates;