import React from 'react';



class SiteFeatures extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        var clear = setInterval(function() {
            if ( $('.featureCarousel').length) {
                clearInterval(clear);
                $('.featureCarousel').owlCarousel({
                    center: true,
                    items: 1,
                    loop: true,
                    autoWidth:true,
                    margin: 0,
                    nav: false,
                    autoplay:true,
                    autoplayTimeout:5000,
                });
            }
        }, 300)
    }
    componentDidUpdate(prevProps, prevState) {
        $('.featureCarousel').owlCarousel({
            items: 1,
            loop: true,
            autoWidth:true,
            margin: 0,
            nav: false,
            autoplay:true,
            autoplayTimeout:5000,
        });

    }
    render() {
        return(
            <div>

                <div className="tabs_wrapp">

                </div>

                <div className="promotion-main-body-container">
                    <div className="featureCarousel owl-carousel owl-theme">
                        <div className="item">
                            <div className="CoverImageWrapper">
                                <div className="CoverImage">
                                    <img src="../../img/l3_1351x300_MatchLive_eng.jpg" alt="img"/>
                                </div>
                            </div>
                            <div className="button-box-container">
                                <div className="bannerTitle">Match Live</div>
                                <div className="bannerText"> Use real time updates to follow a range of sports as the action unfolds</div>
                                <div className="bannerSubText"></div>
                                <div className="link-container">
                                    <div className="links join_btn yellow_text">Join Now</div>
                                    <div className="links more_btn">More Details</div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="CoverImageWrapper">
                                <div className="CoverImage">
                                    <img src="../../img/l3_1351x300_EditBet_eng.jpg" alt="img"/>
                                </div>
                            </div>
                            <div className="button-box-container">
                                <div className="bannerTitle">Edit Bet</div>
                                <div className="bannerText">  Giving you the ability to add, swap or remove selections from your bet</div>
                                <div className="bannerSubText">Terms and Conditions apply.</div>
                                <div className="link-container">
                                    <div className="links join_btn yellow_text">Join Now</div>
                                    <div className="links more_btn">More Details</div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="CoverImageWrapper">
                                <div className="CoverImage">
                                    <img src="../../img/l3_1351x300_v3ExtraWayExtra_eng.jpg" alt="img"/>
                                </div>
                            </div>
                            <div className="button-box-container">
                                <div className="bannerTitle">Each Way Extra</div>
                                <div className="bannerText">  Choose your place terms for Each Way Horse Racing bets on selected Horse Races</div>
                                <div className="bannerSubText">Terms and Conditions apply.</div>
                                <div className="link-container">
                                    <div className="links join_btn yellow_text">Join Now</div>
                                    <div className="links more_btn">More Details</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="outer_pod_container">
                        <div className="promotion-pod">
                            <div className="img_wrapp">
                                <div className="img" style={{backgroundImage: "url(" + "../../img/l3_1351x300_BetBuilder_ArsenalvManCity_eng.jpg" + ")"}}></div>

                            </div>
                            <div className="promotion-pod-text-wrapper">
                                <div className="promotion-pod-title">Bet Builder</div>
                                <p className="promotion-pod-text">Create your own personalised bet on any Soccer game. T&Cs apply.</p>
                            </div>
                        </div>
                        <div className="promotion-pod">
                            <div className="img_wrapp">
                                <div className="img" style={{backgroundImage: "url(" + "../../img/l3_1351x300_LiveMatchAlerts_eng.jpg" + ")"}}></div>

                            </div>
                            <div className="promotion-pod-text-wrapper">
                                <div className="promotion-pod-title">My Alerts</div>
                                <p className="promotion-pod-text">Personalise the alerts you wish to receive.</p>
                            </div>
                        </div>
                        <div className="promotion-pod">
                            <div className="img_wrapp">
                                <div className="img" style={{backgroundImage: "url(" + "../../img/l3_1351x300_v3ExtraWayExtra_eng.jpg" + ")"}}></div>

                            </div>
                            <div className="promotion-pod-text-wrapper">
                                <div className="promotion-pod-title">Each Way Extra</div>
                                <p className="promotion-pod-text">Choose your place terms for Each Way Horse Racing bets on selected Horse Races. T&Cs apply.</p>
                            </div>
                        </div>
                        <div className="promotion-pod">
                            <div className="img_wrapp">
                                <div className="img" style={{backgroundImage: "url(" + "../../img/l3_1351x300_CashOut_eng.jpg" + ")"}}></div>

                            </div>
                            <div className="promotion-pod-text-wrapper">
                                <div className="promotion-pod-title">Each Way Extra</div>
                                <p className="promotion-pod-text">Choose your place terms for Each Way Horse Racing bets on selected Horse Races. T&Cs apply.</p>
                            </div>
                        </div>
                        <div className="promotion-pod">
                            <div className="img_wrapp">
                                <div className="img" style={{backgroundImage: "url(" + "../../img/l3_1351x300_CashOut_eng.jpg" + ")"}}></div>

                            </div>
                            <div className="promotion-pod-text-wrapper">
                                <div className="promotion-pod-title">Each Way Extra</div>
                                <p className="promotion-pod-text">Choose your place terms for Each Way Horse Racing bets on selected Horse Races. T&Cs apply.</p>
                            </div>
                        </div>
                        <div className="promotion-pod">
                            <div className="img_wrapp">
                                <div className="img" style={{backgroundImage: "url(" + "../../img/l3_1351x300_CashOut_eng.jpg" + ")"}}></div>

                            </div>
                            <div className="promotion-pod-text-wrapper">
                                <div className="promotion-pod-title">Each Way Extra</div>
                                <p className="promotion-pod-text">Choose your place terms for Each Way Horse Racing bets on selected Horse Races. T&Cs apply.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default SiteFeatures;