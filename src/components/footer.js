import React from 'react';
import {NavLink} from "react-router-dom";



class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <footer className="inner_footer">
                <div className="menu_column_wrapper">
                    <div className="menu_column">
                        <div className="column_title help">Help</div>
                        <a href="javascript:void(0)" className="footer_link" onClick={()=>this.props.showForm('accountHelper','paymentMethods', 'deposits')}>Deposits</a>
                        <a href="javascript:void(0)" className="footer_link" onClick={()=>this.props.showForm('accountHelper','paymentMethods', 'withdrawals')}>Withdrawals</a>
                        <a href="javascript:void(0)" className="footer_link" onClick={()=>this.props.showForm('accountHelper', 'contacts')}>Contact Us</a>
                        <a href="javascript:void(0)" className="footer_link" onClick={()=>this.props.showForm('accountHelper', 'home')}>bet365 FAQ</a>
                        <a href="javascript:void(0)" className="footer_link" onClick={()=>this.props.showForm('accountHelper', 'termaAndConditions')}>Terms and Conditions</a>
                        <a href="javascript:void(0)" className="footer_link" onClick={()=>this.props.showForm('responsibleGambling')}>Responsible Gambling</a>
                        <a href="javascript:void(0)" className="footer_link" onClick={()=>this.props.showForm('accountHelper', 'privacyPolicy')}>Privacy Policy</a>
                        <a href="javascript:void(0)" className="footer_link" onClick={()=>this.props.showForm('accountHelper', 'cookiesPolicy')}>Cookies Policy</a>
                        <a href="javascript:void(0)" className="footer_link" onClick={()=>this.props.showForm('accountHelper', 'fairPayouts')}>Fair Payouts</a>
                        <a href="javascript:void(0)" className="footer_link" onClick={()=>this.props.showForm('accountHelper', 'complaintsProcedure')}>Complaints Procedure</a>
                    </div>
                    <div className="menu_column">
                        <div className="column_title form">Form & Stats</div>
                        <a href="javascript:void(0)" className="footer_link" onClick={()=>this.props.showForm('formAndStats', 'language')}>Soccer Stats</a>
                        <a href="javascript:void(0)" className="footer_link" onClick={()=>this.props.showForm('usSportsStats')}>US Sports Stats</a>
                        <a href="javascript:void(0)" className="footer_link" onClick={()=>this.props.showForm('formAndStats', 'home')}>Sports Stats</a>
                        {/*<a href="javascript:void(0)" className="footer_link">Australian Sports Stats</a>*/}
                        <a href="javascript:void(0)" className="footer_link" onClick={()=>this.props.showForm('irishHorseForm', 'racecards')}>UK & Irish Horse Form</a>
                        <a href="javascript:void(0)" className="footer_link" onClick={()=>this.props.showForm('racingArchive')}>UK & Irish Racing Archive</a>
                        <a href="javascript:void(0)" className="footer_link" onClick={()=>this.props.showForm('australianHorseForm', 'raceCards')}>Australian Horse Form</a>
                        <a href="javascript:void(0)" className="footer_link" onClick={()=>this.props.showForm('horseForm', 'racecards')}>US Horse Form</a>
                        <a href="javascript:void(0)" className="footer_link" onClick={()=>this.props.showForm('greyhoundForm', 'news')}>UK & Irish Greyhound Form</a>

                    </div>
                    <div className="menu_column">
                        <div className="column_title scores">Scores & Results</div>
                        <a href="javascript:void(0)" className="footer_link" onClick={()=>this.props.showForm('liveScore', 'soccer')}>Live Scores</a>
                        <a href="javascript:void(0)" className="footer_link" onClick={()=>this.props.showForm('scoreResults')}>Results</a>

                        <div className="column_title promotions">Promotions</div>
                        <a href="javascript:void(0)" className="footer_link" onClick={()=>this.props.showForm('liveStreaming', 'promotions')}>Current Offers</a>

                        <div className="column_title audio">Audio</div>
                        <a href="javascript:void(0)" className="footer_link" onClick={()=>this.props.showForm('audioModal')}>Horse Racing</a>
                        <a href="javascript:void(0)" className="footer_link" onClick={()=>this.props.showForm('audioModal')}>Greyhounds</a>
                        <a href="javascript:void(0)" className="footer_link" onClick={()=>this.props.showForm('audioModal')}>Soccer</a>
                        <a href="javascript:void(0)" className="footer_link" onClick={()=>this.props.showForm('audioModal')}>Cricket</a>
                    </div>

                </div>
                <div className="footer_wrapper">


                    <div className="footer_logo">
                        <img src="/img/bet365.png" alt="bet365" />
                    </div>

                    <nav className="footer_menu">
                        <a href="javascript:void(0)" className="footer_menu_link" onClick={()=>this.props.showForm('liveStreaming', 'promotions')}>Mobile & Tablet</a>
                        <a href="javascript:void(0)" className="footer_menu_link" onClick={()=>this.props.showForm('liveStreaming', 'bettingNews')}>Betting News</a>
                        <a href="javascript:void(0)" className="footer_menu_link"onClick={()=>this.props.showForm('affiliates', 'home')}>Affiliates</a>
                        <a href="javascript:void(0)" className="footer_menu_link" onClick={()=>this.props.showForm('careerBet', 'home')}>Careers</a>
                        <a href="javascript:void(0)" className="footer_menu_link" onClick={()=>this.props.showForm('liveStreaming', 'promotions')}>Extra</a>
                        <NavLink to="/casino"  className="footer_menu_link">Casino</NavLink>
                        <NavLink to="/live_casino"  className="footer_menu_link">Live Casino</NavLink>
                        <NavLink to="/poker" className="footer_menu_link">Poker</NavLink>
                        <NavLink to="/games" className="footer_menu_link">Games</NavLink>
                        <NavLink to="/bingo" className="footer_menu_link">Bingo</NavLink>
                        {/*<a href="javascript:void(0)" className="footer_menu_link">Vegas</a>*/}
                    </nav>
                    
                    <ul className="helpLinks">
                        <li id=""><a href="javascript:void(0)" data-nav="Preferences">Preferences</a></li>
                        <li id=""><a href="javascript:void(0)" target="_blank">Rules</a></li>
                        <li id=""><a href="javascript:void(0)" data-nav="ContactUs">Contact Us</a></li>
                        <li id=""><a href="javascript:void(0)" target="_blank">bet365 FAQ</a></li>
                        <li id=""><a href="javascript:void(0)" target="_blank">Responsible Gambling</a></li>
                        <li id=""><a href="javascript:void(0)" target="_blank">Terms and Conditions</a></li>
                        <li id=""><a href="javascript:void(0)" target="_blank">Privacy Policy</a></li>
                        <li id=""><a href="javascript:void(0)" target="_blank">Fair Payouts</a></li>
                        <li id=""><a href="javascript:void(0)" target="_blank">Betting News</a></li>
                        <li id=""><a href="javascript:void(0)" target="_blank">Cash Out</a></li>
                        <li id=""><a href="javascript:void(0)" target="_blank">Complaints Procedure</a></li>
                        <li id=""><a href="javascript:void(0)" target="_blank">Careers</a></li>
                    </ul>
                    
                    <div className="statFormsContainer">
                        <span className="title">Form &amp; Stats</span>
                        <ul className="formStatLinks">
                            <li id="" className="ftr-StatFormsContainer_StatLinks"><a href="javascript:void(0)" onClick={()=>this.props.showForm('formAndStats')}>Soccer Stats</a></li>
                            <li id="" className="ftr-StatFormsContainer_StatLinks"><a href="javascript:void(0)" >Sports Stats</a></li>
                            <li id="" className="ftr-StatFormsContainer_StatLinks"><a href="javascript:void(0)" >Horse Form</a></li>
                            <li id="" className="ftr-StatFormsContainer_StatLinks"><a href="javascript:void(0)" >US Horse Form</a></li>
                            <li id="" className="ftr-StatFormsContainer_StatLinks"><a href="javascript:void(0)" >US Sports Stats</a></li>
                            <li id="" className="ftr-StatFormsContainer_StatLinks"><a href="javascript:void(0)" >Greyhound Form</a></li>
                            <li id="" className="ftr-StatFormsContainer_StatLinks"><a href="javascript:void(0)" >Betting News</a></li>
                            <li id="" className="ftr-StatFormsContainer_StatLinks"><a href="javascript:void(0)" >Australian Horse Form</a></li>
                        </ul>
                    </div>

                    <div className="footer_partners">
                        <a href="https://www.gamblingtherapy.org/en?ReferrerID=102" target="_blank"><img src="/img/partner1.png" alt="partner" /></a>
                        <a href="javascript:void(0)" onClick={()=>this.props.showForm('accountHelper', 'essa')}><img src="/img/partner2.png" alt="partner" /></a>
                        <a href="https://www.authorisation.mga.org.mt/verification.aspx?lang=en&company=671c2548-ec97-4aa3-9339-442fc68a6e44&details=1" target="_blank"><img src="/img/LGA.png" alt="partner" /></a>
                        <a href="javascript:void(0)"><img src="/img/partner4.png" alt="partner" /></a>
                        <a href="javascript:void(0)" onClick={()=>this.props.showForm('accountHelper', 'ibas')}><img src="/img/partner5.png" alt="partner" /></a>
                        <a href="javascript:void(0)"><img src="/img/partner6.png" alt="partner" /></a>
                    </div>
                    <div className="footer_info_text">
                        By accessing, continuing to use or navigating throughout this site you accept that we will use certain browser cookies to improve your customer experience with us. bet365 only uses cookies which will improve your experience with us and will not interfere with your privacy. Please refer to our
                         <a href="#">Cookies Policy</a>
                        for further information on our use of cookies and how you can disable or manage their use should you wish.
                    </div>
                    <div className="footer_info_text">
                        Gambling can be addictive, please play responsibly. For information on support measures, please visit our <a href="javascript:void(0)" onClick={()=>this.props.showForm('responsibleGambling')}>Responsible Gambling Help</a> page.
                    </div>
                    <div className="footer_info_text">
                        © 2001-2018 bet365. All rights reserved.
                    </div>
                    <div className="footer_socials">
                        <a href="https://twitter.com/bet365" target="_blank" className="twitter">Follow</a>
                        <a href="https://www.facebook.com/bet365uk" target="_blank" className="facebook">Like</a>

                    </div>
                </div>

            </footer>
        )

    }
}

export default Footer;
