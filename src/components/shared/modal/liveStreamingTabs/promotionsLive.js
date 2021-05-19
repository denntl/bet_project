import React from 'react';



class PromotionsLive extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        var clear = setInterval(function() {
            if ( $('.promotionCarousel').length) {
                clearInterval(clear);
                $('.promotionCarousel').owlCarousel({
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
            $('.promotionCarousel').owlCarousel({
                center: true,
                items: 1,
                loop: true,
                //autoWidth:true,
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
                    <div className="promotionCarousel owl-carousel owl-theme">
                        <div className="item">
                            <div className="CoverImageWrapper">
                                <div className="CoverImage">
                                    <img src="../../img/l3_Extra_1351x300_ChampsLeagueEPO_Blue.jpg" alt="img"/>
                                </div>
                            </div>
                            <div className="button-box-container">
                                <div className="bannerTitle">2 Goals Ahead Early Payout Offer</div>
                                <div className="bannerText">Get your bets paid out if the team you back goes 2 goals ahead</div>
                                <div className="bannerSubText">Only available to new and eligible customers. Bet restrictions and T&Cs apply.</div>
                                <div className="link-container">
                                    <div className="links join_btn yellow_text">Join Now</div>
                                    <div className="links more_btn">More Details</div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="CoverImageWrapper">
                                <div className="CoverImage">
                                    <img src="../../img/l3_Extra_1351x300_EuroSoccerBonus_v3.jpg" alt="img"/>
                                </div>
                            </div>
                            <div className="button-box-container">
                                <div className="bannerTitle">Euro Soccer Bonus</div>
                                <div className="bannerText"> Including the Champions League and Europe's top domestic leagues</div>
                                <div className="bannerSubText">Only available to new and eligible customers. Bet restrictions and T&Cs apply.</div>
                                <div className="link-container">
                                    <div className="links join_btn yellow_text">Join Now</div>
                                    <div className="links more_btn">More Details</div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="CoverImageWrapper">
                                <div className="CoverImage">
                                    <img src="../../img/l3_1351x300_WorldCup18_v4BoreDraw.jpg" alt="img"/>
                                </div>
                            </div>
                            <div className="button-box-container">
                                <div className="bannerTitle">Bore Draw Money Back</div>
                                <div className="bannerText"> We will pay out at 1/3 odds for unlimited places in 90 minutes play</div>
                                <div className="bannerSubText">Only available to new and eligible customers. Bet restrictions and T&Cs apply.</div>
                                <div className="link-container">
                                    <div className="links join_btn yellow_text">Join Now</div>
                                    <div className="links more_btn">More Details</div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="outer_pod_container">
                    <div className="promotion-pod">
                        <div className="img_wrapp">
                            <div className="img" style={{backgroundImage: "url(" + "../../img/1351x300_Extra_PricePromise18.jpg" + ")"}}></div>

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
                            <div className="img" style={{backgroundImage: "url(" + "../../img/l3_1351x300_POD_EWFGS.jpg" + ")"}}></div>

                        </div>
                        <div className="promotion-pod-text-wrapper">
                            <div className="promotion-pod-title">Each Way Extra</div>
                            <p className="promotion-pod-text">Choose your place terms for Each Way Horse Racing bets on selected Horse Races. T&Cs apply.</p>
                        </div>
                    </div>
                    <div className="promotion-pod">
                        <div className="img_wrapp">
                            <div className="img" style={{backgroundImage: "url(" + "../../img/1351x300_LiveStreaming_eng.jpg" + ")"}}></div>

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
        )

    }
}

export default PromotionsLive;