import React from 'react';



class FooterLiveCasino extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
             <footer className="inner_footer">
                <div className="footer_wrapper">

                    <div className="footer_logo">
                        <img src="/img/bet365.png" alt="bet365" />
                    </div>

                    <nav className="footer_menu">
                        <a href="#" className="footer_menu_link">Mobile & Tablet</a>
                        <a href="#" className="footer_menu_link">Betting News</a>
                        <a href="#" className="footer_menu_link">Affiliates</a>
                        <a href="#" className="footer_menu_link">Careers</a>
                        <a href="#" className="footer_menu_link">Extra</a>
                        <a href="#" className="footer_menu_link">Casino</a>
                        <a href="#" className="footer_menu_link">Games</a>
                        <a href="#" className="footer_menu_link">Poker</a>
                        <a href="#" className="footer_menu_link">Bingo</a>
                        <a href="#" className="footer_menu_link">Vegas</a>
                    </nav>
                    
                    <ul className="helpLinks">
                        <li id=""><a href="#" data-nav="Preferences">Preferences</a></li>
                        <li id=""><a href="#" target="_blank">Rules</a></li>
                        <li id=""><a href="#" data-nav="ContactUs">Contact Us</a></li>
                        <li id=""><a href="#" target="_blank">bet365 FAQ</a></li>
                        <li id=""><a href="#" target="_blank">Responsible Gambling</a></li>
                        <li id=""><a href="#" target="_blank">Terms and Conditions</a></li>
                        <li id=""><a href="#" target="_blank">Privacy Policy</a></li>
                        <li id=""><a href="#" target="_blank">Fair Payouts</a></li>
                        <li id=""><a href="#" target="_blank">Betting News</a></li>
                        <li id=""><a href="#" target="_blank">Cash Out</a></li>
                        <li id=""><a href="#" target="_blank">Complaints Procedure</a></li>
                        <li id=""><a href="#" target="_blank">Careers</a></li>
                    </ul>
                    
                    <div className="statFormsContainer">
                        <span className="title">Form &amp; Stats</span>
                        <ul className="formStatLinks">
                            <li id="" className="ftr-StatFormsContainer_StatLinks"><a href="#" target="_blank">Soccer Stats</a></li>
                            <li id="" className="ftr-StatFormsContainer_StatLinks"><a href="#" target="_blank">Sports Stats</a></li>
                            <li id="" className="ftr-StatFormsContainer_StatLinks"><a href="#" target="_blank">Horse Form</a></li>
                            <li id="" className="ftr-StatFormsContainer_StatLinks"><a href="#" target="_blank">US Horse Form</a></li>
                            <li id="" className="ftr-StatFormsContainer_StatLinks"><a href="#" target="_blank">US Sports Stats</a></li>
                            <li id="" className="ftr-StatFormsContainer_StatLinks"><a href="#" target="_blank">Greyhound Form</a></li>
                            <li id="" className="ftr-StatFormsContainer_StatLinks"><a href="#" target="_blank">Betting News</a></li>
                            <li id="" className="ftr-StatFormsContainer_StatLinks"><a href="#" target="_blank">Australian Horse Form</a></li>
                        </ul>
                    </div>

                    <div className="footer_partners">
                        <a href="#"><img src="/img/partner1.png" alt="partner" /></a>
                        <a href="#"><img src="/img/partner2.png" alt="partner" /></a>
                        <a href="#"><img src="/img/partner3.png" alt="partner" /></a>
                        <a href="#"><img src="/img/partner4.png" alt="partner" /></a>
                        <a href="#"><img src="/img/partner5.png" alt="partner" /></a>
                        <a href="#"><img src="/img/partner6.png" alt="partner" /></a>
                    </div>
                    <div className="footer_info_text">
                        By accessing, continuing to use or navigating throughout this site you accept that we will use certain browser cookies to improve your customer experience with us. bet365 only uses cookies which will improve your experience with us and will not interfere with your privacy. Please refer to our
                         <a href="#">Cookies Policy</a>
                        for further information on our use of cookies and how you can disable or manage their use should you wish.
                    </div>
                    <div className="footer_info_text">
                        Registered Office Hillside (International Sports) LP (registration number 119), Unit 1.1, First Floor, Waterport Place, 2 Europort Avenue, Gibraltar. Hillside (International Sports) LP is licensed by the Government of Gibraltar and regulated by the Gibraltar Gambling Commissioner (RGL number 076).
                    </div>
                    <div className="footer_info_text">
                        © 2001-2018 bet365. All rights reserved.
                    </div>
                    <div className="footer_socials">
                        <a href="#" className="twitter">Follow</a>
                        <a href="#" className="facebook">Like</a>

                    </div>
                </div>

            </footer>
        )

    }
}

export default FooterLiveCasino;
