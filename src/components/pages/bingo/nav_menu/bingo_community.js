import React from "react";
import {Link, Route} from "react-router-dom";
import RewardClub from "../community/rewardClub";
import FreeBingo from "../community/freeBingo";
import LoyaltyScheme from "../community/loyaltyScheme";


class BingoCommunity extends React.Component {
    constructor(props) {
        super(props);
    }
    bingoCommunity = ()=>{
        return<div className="Community_wrapper">
                <div className="HeaderBanner">
                    <div className="FallbackImage"></div>
                    <div className="animationContainer">
                        <div className="animatedImg" id="animatedImg1"></div>
                        <div className="animatedImg" id="animatedImg2"></div>
                        <div className="animatedImg" id="animatedImg3"></div>
                    </div>
                    <div className="BannerItemOuterContainer">
                        <Link to="/bingo/bingo_community/bingo-reward-club" className="bannerItem">
                            <div className="banner_header">
                                <img src="/img/316x88_RewardClub_engV2.png" alt="Revard Club"/>
                            </div>
                            <div className="banner_content">
                                <div className="text_block">Receive the red carpet treatment and rewards to match with our exclusive Bingo Reward Club.</div>
                                <div className="MoreInfo">More</div>
                            </div>
                        </Link>
                        <Link to="/bingo/bingo_community/loyalty-scheme" className="bannerItem">
                            <div className="banner_header">
                                <img src="/img/316x88px-K-Loyalty-Scheme.gif" alt="Loyalty Scheme"/>
                            </div>
                            <div className="banner_content">
                                <div className="text_block">Points certainly earn prizes with our fantastic Loyalty Scheme - you play and we pay!</div>
                                <div className="MoreInfo">More</div>
                            </div>
                        </Link>
                        <Link to="/bingo/bingo_community/free-bingo" className="bannerItem">
                            <div className="banner_header">
                                <img src="/img/316x88px-K-Free-Bingo.gif" alt="Free Bingo"/>
                            </div>
                            <div className="banner_content">
                                <div className="text_block">Everybody loves a freebie; from BOGOF to Superbooks, we’ve got Free Bingo covered.</div>
                                <div className="MoreInfo">More</div>
                            </div>
                        </Link>
                        <div className="BannerTermsText">
                            <p>Terms & Conditions Apply</p>
                            <p>Winnings on Free Bingo must be wagered four times before becoming withdrawable.</p>
                        </div>
                    </div>
                </div>
                <div className="MainContainerGames Community">


                    <div className="mainContainerCommunity">
                        <div className="MiddlePods">
                            <div className="BingoPod">
                                <img src="/img/183x30px-Chat-Games.gif" alt="Chat Games"/>
                                <div className="infoTextContainer ">
                                    <b>Join in the Chat Games</b> for the chance to win bonuses
                                </div>
                                <a href="#" className="Buttons">See Chat Games</a>
                            </div>
                            <div className="BingoPod">
                                <img src="/img/192x30-Promotions.gif" alt="Promotions"/>
                                <div className="infoTextContainer ">
                                    Visit the  <b>Promotions page</b> and discover our current offers!
                                </div>
                                <Link to="/bingo/bingo_promotions/" className="Buttons">See Promotions</Link>
                            </div>
                            <div className="BingoPod">
                                <img src="/img/159x30-Follow-Us.gif" alt="Follow Us"/>
                                <div className="socials_list">
                                    <a href="#" className="social_icon twitter_icon">
                                        <img src="/img/68x57px-Twitter.png" alt="twitter"/>
                                    </a>
                                    <a href="#" className="social_icon twitter_icon">
                                        <img src="/img/63x64px-Facebook.png" alt="facebook"/>
                                    </a>
                                    <a href="#" className="social_icon twitter_icon">
                                        <img src="/img/53x64px-YouTube.png" alt="youtube"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="WinnersSection">
                            <div className="PastWinnersHeader">
                                <img src="/img/131x30px-Winners.gif" alt="Winners"/>
                            </div>
                            <div className="PastWinners">
                                <div className="PastWinnerPod">
                                    <div className="PastWinner">
                                        <img src="/img/24x32px-Man-Icon.png" alt="Man Icon"/>
                                        <div className="MiddleContent">
                                            <div className="name">Bentybird <span className="won">Won</span></div>
                                            <div className="amount">£125,654</div>
                                            <div className="playing">Playing Lucky Ladies 88</div>
                                        </div>
                                        <a href="#" className="play_btn">Play</a>
                                    </div>
                                </div>
                                <div className="PastWinnerPod">
                                    <div className="PastWinner">
                                        <img src="/img/24x32px-Man-Icon.png" alt="Man Icon"/>
                                        <div className="MiddleContent">
                                            <div className="name">Bentybird <span className="won">Won</span></div>
                                            <div className="amount">£125,654</div>
                                            <div className="playing">Playing Lucky Ladies 88</div>
                                        </div>
                                        <a href="#" className="play_btn">Play</a>
                                    </div>
                                </div>
                                <div className="PastWinnerPod">
                                    <div className="PastWinner">
                                        <img src="/img/24x32px-Man-Icon.png" alt="Man Icon"/>
                                        <div className="MiddleContent">
                                            <div className="name">Bentybird <span className="won">Won</span></div>
                                            <div className="amount">£125,654</div>
                                            <div className="playing">Playing Lucky Ladies 88</div>
                                        </div>
                                        <a href="#" className="play_btn">Play</a>
                                    </div>
                                </div>
                                <div className="lastRow">
                                    <div className="PastWinnerPod">
                                        <div className="PastWinner">
                                            <img src="/img/24x32px-Man-Icon.png" alt="Man Icon"/>
                                            <div className="MiddleContent">
                                                <div className="name">Bentybird <span className="won">Won</span></div>
                                                <div className="amount">£125,654</div>
                                                <div className="playing">Playing Lucky Ladies 88</div>
                                            </div>
                                            <a href="#" className="play_btn">Play</a>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
              </div>
    }
    render() {
        return (

            <div>
                <Route exact path="/bingo/bingo_community/" render={() => this.bingoCommunity()}/>
                <Route  path="/bingo/bingo_community/bingo-reward-club" render={() => <RewardClub/>}/>
                <Route  path="/bingo/bingo_community/loyalty-scheme" render={() => <LoyaltyScheme/>}/>
                <Route  path="/bingo/bingo_community/free-bingo" render={() => <FreeBingo/>}/>
            </div>
        )
    }
}
export default BingoCommunity;