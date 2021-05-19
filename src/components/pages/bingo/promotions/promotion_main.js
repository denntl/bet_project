import React from "react";
import {Link, Route, Switch} from "react-router-dom";
import BingoHome from "../nav_menu/bingo_home";
import BingoGames from "../nav_menu/bingo_games";
import BingoPromotions from "../nav_menu/bingo_promotions";
import BingoCommunity from "../nav_menu/bingo_community";
import BingoMobile from "../nav_menu/bingo_mobile";
import hall from "./halloween";


class BingoPromotionsMain extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="MainContainerGames Promotions">



                <div className="BigPromo">
                    <div className="BingoPod">
                        <div className="PodImage"></div>
                        <div className="BingoPodContent">
                            <div className="MainHeader">£300,000 Heavenly Giveaway</div>
                            <div className="SubHeader">Play in the <b>AOTG Bingo room</b>  and on qualifying slots until
                                <b>1st November</b>. You could win fantastic
                            </div>
                            <div className="MoreInfo"><a href="#">More</a></div>
                            <div className="TermsText">Earn five prize draw tickets for every £10 cash spent in the AOTG Bingo room and one for every £10 cash staked on qualifying slots. Qualifying periods run from 26/10/2018 until 28/10/2018 and 29/10/2018 until 01/11/2018. Draws take place on 29/10/18 and 02/11/2018. Time limits, game restrictions and T&Cs apply.</div>
                        </div>
                    </div>
                </div>
                <div className="popstrip-Header">
                    <img src="/img/257x30px-More-Promotions.gif" alt="More Promotions Header"/>
                </div>
                <div className="bingoNewsBlockContainer">
                    <Link to="/bingo/bingo_promotions/welcomePage" className="bingoNews">
                        <div className="newsImg">
                            <img src="/img/WelcomePackage_Feb18_316x180.jpg" alt="Welcome Package"/>
                        </div>
                        <div className="bingoNewsContent">
                            <div className="MainHeader">Bingo Welcome Package</div>
                            <div className="shortDesc">Play in the <b>Age of the Gods Bingo room</b>  from <b>26th October until 10th November</b>
                                for your share of a mighty <b>£200,000 cash prize-pool</b>
                            </div>
                            <div className="news_btn_wrap">
                                <Link to="/bingo/bingo_promotions/welcomePage" className="MoreInfo">More</Link>
                                <a href="#" className="Share">Share
                                    <div className="ShareDropDown">
                                        <ul className="ShareDropDownList">
                                            <li><a href="#">
                                                <img src="/img/22x19px-Twitter.png" alt="twitter"/>
                                                Tweet
                                            </a></li>
                                            <li><a href="#">
                                                <img src="/img/20x21px-Facebook.png"  alt="facebook"/>
                                                Like
                                            </a></li>
                                        </ul>
                                    </div>
                                </a>
                            </div>
                            <div className="TermsText">
                                Play in the Age of the Gods Bingo room. Tickets cost 10p per game. Promotion runs from 26/10/18 until 10/11/18. Time limits apply.
                            </div>
                        </div>
                    </Link>
                    <Link to="/bingo/bingo_promotions/ageOfTheGods" className="bingoNews">
                        <div className="newsImg">
                            <img src="/img/AOTG_BINGO_316x180.jpg" alt="AOTG BINGO"/>
                        </div>
                        <div className="bingoNewsContent">
                            <div className="MainHeader">Age of the Gods Bingo</div>
                            <div className="shortDesc">Play in the <b>Age of the Gods Bingo room</b>  from <b>26th October until 10th November</b>
                                for your share of a mighty <b>£200,000 cash prize-pool</b>
                            </div>
                            <div className="news_btn_wrap">
                                <Link to="/bingo/bingo_promotions/ageOfTheGods" className="MoreInfo">More</Link>
                                <a href="#" className="Share">Share
                                    <div className="ShareDropDown">
                                        <ul className="ShareDropDownList">
                                            <li><a href="#">
                                                <img src="/img/22x19px-Twitter.png" alt="twitter"/>
                                                Tweet
                                            </a></li>
                                            <li><a href="#">
                                                <img src="/img/20x21px-Facebook.png"  alt="facebook"/>
                                                Like
                                            </a></li>
                                        </ul>
                                    </div>
                                </a>
                            </div>
                            <div className="TermsText">
                                Play in the Age of the Gods Bingo room. Tickets cost 10p per game. Promotion runs from 26/10/18 until 10/11/18. Time limits apply.
                            </div>
                        </div>
                    </Link>
                    <Link to="/bingo/bingo_promotions/halloween" className="bingoNews">
                        <div className="newsImg">
                            <img src="/img/10HalloweenBingoBonus_316x180.jpg" alt="Halloween Bingo Bonus"/>
                        </div>
                        <div className="bingoNewsContent">
                            <div className="MainHeader">£10 Halloween Bonus</div>
                            <div className="shortDesc">Play in the <b>Age of the Gods Bingo room</b>  from <b>26th October until 10th November</b>
                                for your share of a mighty <b>£200,000 cash prize-pool</b>
                            </div>
                            <div className="news_btn_wrap">
                                <Link to="/bingo/bingo_promotions/halloween" className="MoreInfo">More</Link>
                                <a href="#" className="Share">Share
                                    <div className="ShareDropDown">
                                        <ul className="ShareDropDownList">
                                            <li><a href="#">
                                                <img src="/img/22x19px-Twitter.png" alt="twitter"/>
                                                Tweet
                                            </a></li>
                                            <li><a href="#">
                                                <img src="/img/20x21px-Facebook.png"  alt="facebook"/>
                                                Like
                                            </a></li>
                                        </ul>
                                    </div>
                                </a>
                            </div>
                            <div className="TermsText">
                                Play in the Age of the Gods Bingo room. Tickets cost 10p per game. Promotion runs from 26/10/18 until 10/11/18. Time limits apply.
                            </div>
                        </div>
                    </Link>
                    <Link to="/bingo/bingo_promotions/whats-on-this-month" className="bingoNews">
                        <div className="newsImg">
                            <img src="/img/WhatsOnThisMonth_316x180.jpg" alt="News"/>
                        </div>
                        <div className="bingoNewsContent">
                            <div className="MainHeader">What's On This Month?</div>
                            <div className="shortDesc">Play Bingo in selected rooms throughout <b>January</b> and enjoy enhanced schedules with  <b>fantastic cash prize-pools</b>! </div>
                            <div className="news_btn_wrap">
                                <Link to="/bingo/bingo_promotions/whats-on-this-month" className="MoreInfo">More</Link>
                                <a href="#" className="Share">Share
                                    <div className="ShareDropDown">
                                        <ul className="ShareDropDownList">
                                            <li><a href="#">
                                                <img src="/img/22x19px-Twitter.png" alt="twitter"/>
                                                Tweet
                                            </a></li>
                                            <li><a href="#">
                                                <img src="/img/20x21px-Facebook.png"  alt="facebook"/>
                                                Like
                                            </a></li>
                                        </ul>
                                    </div>
                                </a>
                            </div>
                            <div className="TermsText">
                                Play in the Age of the Gods Bingo room. Tickets cost 10p per game. Promotion runs from 26/10/18 until 10/11/18. Time limits apply.
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}
export default BingoPromotionsMain;