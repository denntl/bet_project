import React from 'react';
import BettingNews from "./liveStreamingTabs/bettingNews";
import PromotionsLive from "./liveStreamingTabs/promotionsLive";
import LiveStreamingLive from "./liveStreamingTabs/liveStreamingLive";
import LiveSocial from "./liveStreamingTabs/liveSocial";
import SiteFeatures from "./liveStreamingTabs/siteFeatures";



class LiveStreaming extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            topTab:this.props.activePartLiveStreaming
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
    componentWillReceiveProps(nextProps) {
        this.setState({
            //activePartLiveStreaming:nextProps.activePartLiveStreaming,
        })
    }
    changeTab = (tab) => {
            this.setState({
                topTab: tab
            })
        }


    render() {
        return(
            <div id="liveStreaming" className="modal_bet new_window liveStreaming" role="dialog">
                <div className="modal_content scroll_block">
                    <div className="top_header liveStreaming">
                        <button type="button" className="close" onClick={() => this.props.closeModal('liveStreaming')}></button>
                       <div className="logo"></div>
                        <nav className="main_menu navigation-inner-container">
                            <a className={`menu_link ${this.state.topTab == "promotions" ? "active" :""}`} onClick={()=>this.changeTab('promotions')}>Promotions</a>
                            <a className={`menu_link ${this.state.topTab == "bettingNews" ? "active" :""}`} onClick={()=>this.changeTab('bettingNews')}>Betting News</a>
                            <a className={`menu_link ${this.state.topTab == "liveStreamingTab" ? "active" :""}`} onClick={()=>this.changeTab('liveStreamingTab')}>Live Streaming</a>
                            <a className={`menu_link ${this.state.topTab == "social" ? "active" :""}`} onClick={()=>this.changeTab('social')}>Social</a>
                            <a className={`menu_link ${this.state.topTab == "siteFeatures" ? "active" :""}`} onClick={()=>this.changeTab('siteFeatures')}>Site Features</a>
                        </nav>
                        <div className="loginSection">
                            <div className="loginUser">Log In</div>
                        </div>
                    </div>
                    <div className="bottom_header liveStreaming">
                        <div className="selectLanguage">English</div>
                    </div>
                    <div className="mainContainer">
                        {this.state.topTab == "promotions" ?
                            <PromotionsLive/>
                        :""}
                        {this.state.topTab == "bettingNews" ?
                            <BettingNews/>
                            :""}
                        {this.state.topTab == "liveStreamingTab" ?
                            <LiveStreamingLive/>
                            :""}
                        {this.state.topTab == "social" ?
                            <LiveSocial/>
                            :""}
                        {this.state.topTab == "siteFeatures" ?
                            <SiteFeatures/>
                            :""}
                    </div>
                <div className="footerLive">
                    <footer className="inner_footer">
                        <div className="footer_wrapper">

                            <div className="footer_logo">
                                <img src="/img/bet365.png" alt="bet365" />
                            </div>
                            <div className="footer_partners">
                                <a href="#"><img src="/img/partner1.png" alt="partner" /></a>
                                <a href="#"><img src="/img/partner2.png" alt="partner" /></a>
                                <a href="#"><img src="/img/SPORTSX2-MGA.png" alt="partner" /></a>
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
                                Hillside (Sports) ENC, registration number P1811, Office 1/2373, Level G, Quantum House, 75 Abate Rigord Street, Ta’ Xbiex XBX 1120, Malta. Hillside (Sports) ENC is licensed and regulated by the Malta Gaming Authority (MGA), Licence number MGA/B2C/531/2018.
                            </div>
                            <div className="footer_info_text">
                                Gambling can be addictive, please play responsibly. For information on support measures, please visit our
                                Responsible Gambling Help page.
                            </div>
                            <div className="footer_info_text">
                                © 2001-2019 bet365. All rights reserved.
                            </div>

                        </div>

                    </footer>
                </div>


                </div>
            </div>
        )

    }
}

export default LiveStreaming;
