import React from 'react';



class FooterBingo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <footer className="bingo_footer">
                <div className="footer_logo">
                    <img src="/img/bet365.png" alt="bet365" />
                </div>
                <div className="footer_wrapper">
                    <nav className="footer_menu">
                        <a href="#" className="footer_menu_link">Help</a>
                        <a href="#" className="footer_menu_link">Banking</a>
                        <a href="#" className="footer_menu_link">Responsible Gambling</a>
                        <a href="#" className="footer_menu_link">Affiliates</a>
                        <a href="#" className="footer_menu_link">Terms & Conditions</a>
                        <a href="#" className="footer_menu_link">Privacy Policy</a>
                        <a href="#" className="footer_menu_link">Cookies Policy</a>
                        <a href="#" className="footer_menu_link">Fair Payouts</a>
                        <a href="#" className="footer_menu_link">Careers</a>
                        <a href="#" className="footer_menu_link">Complaints Procedure</a>
                    </nav>

                    <div className="footer_partners">
                        <a href="#"><img src="/img/partner1.png" alt="partner" /></a>
                        <a href="#"><img src="/img/partner2.png" alt="partner" /></a>
                        <a href="#"><img src="/img/partner3.png" alt="partner" /></a>
                        <a href="#"><img src="/img/partner4.png" alt="partner" /></a>
                        <a href="#"><img src="/img/partner5.png" alt="partner" /></a>
                        <a href="#"><img src="/img/partner6.png" alt="partner" /></a>
                    </div>
                    <div className="footer_info_text vegas">
                        By accessing, continuing to use or navigating throughout this site you accept that we will use certain browser cookies to improve your customer experience with us. bet365 only uses cookies which will improve your experience with us and will not interfere with your privacy. Please refer to our
                        <a href="#">Cookies Policy</a>
                        for further information on our use of cookies and how you can disable or manage their use should you wish.
                    </div>
                    <div className="footer_info_text ">
                        <b>Registered Office</b> Hillside (International Sports) LP (registration number 119), Unit 1.1, First Floor, Waterport Place, 2 Europort Avenue, Gibraltar. <b>Hillside (International Sports) LP</b> is licensed by the Government of Gibraltar and regulated by the Gibraltar Gambling Commissioner (RGL number 076).
                    </div>

                    <div className="footer_socials">
                        <a href="#" className="twitter">Follow</a>
                        <a href="#" className="facebook">Like</a>
                        <a href="#" className="backToTop">Back to Top</a>

                    </div>
                </div>

            </footer>
        )

    }
}

export default FooterBingo;
