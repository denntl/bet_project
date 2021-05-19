import React from "react";
import {Link} from "react-router-dom";


class BingoHome extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        $('.Mostpopular-Slider').owlCarousel({
            center: true,
            items: 8,
            loop: true,
            autoWidth: true,
            margin: 0,
            nav: true
        });
    }
        render() {
        return (
            <div className="MainContainerBingo">
                <div className="HeaderBanner">
                    <div className="HeaderBannerContainer">
                        <a href="#" className="BannerItemBig">
                            <div>
                                <a href="#" className="banner_btn_big">Join Now</a>
                            </div>

                        </a>
                        <div className="banner_text_description">
                            <p>Terms and Conditions Apply</p>
                            <p>New Bingo customers only. First deposit/transfer to Bingo of £10 or more qualifies for 200% Bingo Bonus up to £100. 4x wagering requirement. Enter promo code TIKIBONUS and stake £10 on Tiki Paradise Masks of Mayhem for £20 Slots Bonus. Must be used on same game. 20x wagering requirement. Time limits exclusions and T&Cs apply.</p>
                        </div>
                        <div className="BannerItemColumn">
                            <div className="bannerColumn Top">
                                <a href="#" className="banner_btn"><span>Play Bingo</span></a>
                            </div>
                            <div className="bannerColumn Bottom">
                                <a href="#" className="banner_btn"><span>See All Games</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Mostpopular-wrapper">
                    <div className="Mostpopular-Header">
                        <span className="Mostpopular-Header_Alt">
                            <img src="/img/211x22-Most-Popular.gif" alt="Most Popular"/>
                        </span>
                    </div>
                    <div className="slider_wrapp">
                        <div className="Mostpopular-Slider games_list_bingo owl-carousel">
                            <div className="GamesProd">
                                <div className="ProdImageWrapper">
                                    <img src="/img/BedrockBullion_420x420.jpg" alt="Bedrock Bullion"/>
                                    <div className="prodJackpot"></div>
                                </div>
                                <div className="ProdDetailsWrapper">
                                    <img src="/img/BedrockBullion_200x151.jpg" alt="Prod Detail"/>
                                    <table className="ProdDetailsTable">
                                        <tbody>
                                        <tr>
                                            <td className="GameDetails">
                                                <table>
                                                    <tbody>
                                                    <tr>
                                                        <td className="Title1">Lines</td>
                                                        <td className="Title1Text">20</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="Title2">Reels</td>
                                                        <td className="Title2Text">5</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td className="MinimumBet"><span>£0.05</span></td>
                                            <td className="gameButton playButton"><span>Play</span></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="ProdName">Bedrock Bullion</div>
                            </div>
                            <div className="GamesProd">
                                <div className="ProdImageWrapper">
                                    <img src="/img/AOTGAthenaVAres_420x420.jpg" alt="Age of the Gods: Athena v Ares"/>
                                    <div className="prodJackpot"></div>
                                </div>
                                <div className="ProdDetailsWrapper">
                                    <img src="/img/AOTGAthenaVAres_200x151.jpg" alt="Prod Detail"/>
                                    <table className="ProdDetailsTable">
                                        <tbody>
                                        <tr>
                                            <td className="GameDetails">
                                                <table>
                                                    <tbody>
                                                    <tr>
                                                        <td className="Title1">Lines</td>
                                                        <td className="Title1Text">20</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="Title2">Reels</td>
                                                        <td className="Title2Text">5</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td className="MinimumBet"><span>£0.05</span></td>
                                            <td className="gameButton playButton"><span>Play</span></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="ProdName">Age of the Gods: Athena v Ares</div>
                            </div>
                            <div className="GamesProd">
                                <div className="ProdImageWrapper">
                                    <img src="/img/AoG-LordOfTheLightening_420x420.jpg" alt="Lord Of Lightning"/>
                                    <div className="prodJackpot"></div>
                                </div>
                                <div className="ProdDetailsWrapper">
                                    <img src="/img/AoG-LordOfTheLightening_200x151.jpg" alt="Prod Detail"/>
                                    <table className="ProdDetailsTable">
                                        <tbody>
                                        <tr>
                                            <td className="GameDetails">
                                                <table>
                                                    <tbody>
                                                    <tr>
                                                        <td className="Title1">Lines</td>
                                                        <td className="Title1Text">20</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="Title2">Reels</td>
                                                        <td className="Title2Text">5</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td className="MinimumBet"><span>£0.05</span></td>
                                            <td className="gameButton playButton"><span>Play</span></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="ProdName">Lord Of Lightning</div>
                            </div>
                            <div className="GamesProd">
                                <div className="ProdImageWrapper">
                                    <img src="/img/KingdomOfCash_420x420_Nov17.jpg" alt="Kingdom Of Cash"/>
                                    <div className="prodJackpot"></div>
                                </div>
                                <div className="ProdDetailsWrapper">
                                    <img src="/img/KingdomofCash_Aug18_200x151.jpg" alt="Prod Detail"/>
                                    <table className="ProdDetailsTable">
                                        <tbody>
                                        <tr>
                                            <td className="GameDetails">
                                                <table>
                                                    <tbody>
                                                    <tr>
                                                        <td className="Title1">Lines</td>
                                                        <td className="Title1Text">25</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="Title2">Reels</td>
                                                        <td className="Title2Text">5</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td className="MinimumBet"><span>25p</span></td>
                                            <td className="gameButton playButton"><span>Play</span></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="ProdName">Kingdom Of Cash</div>
                            </div>
                            <div className="GamesProd">
                                <div className="ProdImageWrapper">
                                    <img src="/img/TikiParadise-MaskOfMayhem_420x420.jpg" alt="Tiki Paradise - Mask Of Mayhem"/>
                                    <div className="prodJackpot"></div>
                                </div>
                                <div className="ProdDetailsWrapper">
                                    <img src="/img/TikiParadise-MaskOfMayhem_200x151.jpg" alt="Prod Detail"/>
                                    <table className="ProdDetailsTable">
                                        <tbody>
                                        <tr>
                                            <td className="GameDetails">
                                                <table>
                                                    <tbody>
                                                    <tr>
                                                        <td className="Title1">Lines</td>
                                                        <td className="Title1Text">25</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="Title2">Reels</td>
                                                        <td className="Title2Text">5</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td className="MinimumBet"><span>25p</span></td>
                                            <td className="gameButton playButton"><span>Play</span></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="ProdName">Tiki Paradise</div>
                            </div>
                        </div>
                        <div className="blur_block"></div>
                    </div>


                </div>

                <div className="bingo_table_block">
                    <div className="bingo_table_container">
                        <div className="bingo_table_wrap">
                            <div className="table_column">
                                <div className="BingoLobbyWrapper">
                                    <div className="BingoLobbyHeader">
                                        <img src="/img/286x30-Bingo-Games-Coming-Up.gif" alt="Bingo Lobby Header"/>
                                        <a href="#" className="gameBingobtn">Play Bingo</a>
                                    </div>
                                    <div className="BingoLobbyTable">
                                        <div className="LobbyGame">
                                            <div className="timeCell">
                                                <div className="currentTime">02:25</div>
                                                <div className="cost">5p</div>

                                            </div>
                                            <div className="roomCell">
                                                <div className="roomName">Deal Or No Deal Bingo 75</div>
                                                <div className="type">SPECIALS</div>

                                            </div>
                                            <div className="prizeCell">
                                                <span>£15.00</span>
                                            </div>
                                            <div className="playCell">
                                                <a href="#" className="play_btn">Play</a>
                                            </div>
                                        </div>

                                        <div className="LobbyGame">
                                            <div className="timeCell">
                                                <div className="currentTime">02:25</div>
                                                <div className="cost">5p</div>

                                            </div>
                                            <div className="roomCell">
                                                <div className="roomName">Deal Or No Deal Bingo 75</div>
                                                <div className="type">SPECIALS</div>

                                            </div>
                                            <div className="prizeCell">
                                                <span>£15.00</span>
                                            </div>
                                            <div className="playCell">
                                                <a href="#" className="play_btn">Play</a>
                                            </div>
                                        </div>

                                        <div className="LobbyGame">
                                            <div className="timeCell">
                                                <div className="currentTime">02:25</div>
                                                <div className="cost">5p</div>

                                            </div>
                                            <div className="roomCell">
                                                <div className="roomName">Deal Or No Deal Bingo 75</div>
                                                <div className="type">SPECIALS</div>

                                            </div>
                                            <div className="prizeCell">
                                                <span>£15.00</span>
                                            </div>
                                            <div className="playCell">
                                                <a href="#" className="play_btn">Play</a>
                                            </div>
                                        </div>

                                        <div className="LobbyGame">
                                            <div className="timeCell">
                                                <div className="currentTime">02:25</div>
                                                <div className="cost">5p</div>

                                            </div>
                                            <div className="roomCell">
                                                <div className="roomName">Deal Or No Deal Bingo 75</div>
                                                <div className="type">SPECIALS</div>

                                            </div>
                                            <div className="prizeCell">
                                                <span>£15.00</span>
                                            </div>
                                            <div className="playCell">
                                                <a href="#" className="play_btn">Play</a>
                                            </div>
                                        </div>

                                        <div className="LobbyGame">
                                            <div className="timeCell">
                                                <div className="currentTime">02:25</div>
                                                <div className="cost">5p</div>

                                            </div>
                                            <div className="roomCell">
                                                <div className="roomName">Deal Or No Deal Bingo 75</div>
                                                <div className="type">SPECIALS</div>

                                            </div>
                                            <div className="prizeCell">
                                                <span>£15.00</span>
                                            </div>
                                            <div className="playCell">
                                                <a href="#" className="play_btn">Play</a>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                            <div className="public_column">
                                <a href="#" className="ScheduledContent">
                                  <div className="ScheduledContent_btn">
                                      <span>Find Out More</span>
                                  </div>
                                </a>
                                <div className="FollowUs">
                                    <img src="/img/Follow-Us.gif" className="followUs_header" alt="follow Us"/>
                                    <div className="socials_list">
                                        <a href="#" className="social_icon twitter_icon">
                                            <img src="/img/45x38px-Twitter.png" alt="twitter"/>
                                        </a>
                                        <a href="#" className="social_icon facebook_icon">
                                            <img src="/img/42x42px-Facebook.png" alt="facebook"/>
                                        </a>
                                        <a href="#" className="social_icon youtube_icon">
                                            <img src="/img/35x42px-YouTube.png" alt="youtube"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="bingoNewsBlock">
                    <div className="bingoNewsBlockContainer">
                        <a href="#" className="bingoNews">
                            <div className="newsImg">
                                <img src="/img/10HalloweenBingoBonus_316x180.jpg" alt="Halloween Bingo Bonus"/>
                            </div>
                            <div className="bingoNewsContent">
                                <div className="MainHeader">£10 Halloween Bonus</div>
                                <div className="shortDesc">Grab a terror-iffic £10 Bingo treat! Get a <b>£10 Bingo Bonus</b>
                                    when you enter the promo code HALLOWEEN and play Bingo from <b>29th until 31st October</b>
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
                                    Enter promo code HALLOWEEN then spend min. £10 cash on Bingo Tickets to qualify for £10 Bingo Bonus. Bonus must be accepted and wagered 4x to make the winnings withdrawable. One entry per promotional period: 29/10/2018 until 31/10/2018. Time limits and T&Cs apply.
                                </div>
                            </div>
                        </a>
                        <Link to="/bingo/bingo_promotions/whats-on-this-month" className="bingoNews">
                            <div className="newsImg">
                                <img src="/img/WhatsOnThisMonth_316x180.jpg" alt="Whats On This Month"/>
                            </div>
                            <div className="bingoNewsContent">
                                <div className="MainHeader">What's On This Month?</div>
                                <div className="shortDesc">Play Bingo in selected rooms throughout <b>October</b>
                                    and enjoy enhanced schedules with <b>fantastic cash prize-pools</b>
                                </div>
                                <div className="news_btn_wrap">
                                    <a href="#" className="MoreInfo">More</a>
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
                                    Enhanced schedules run throughout October in selected rooms.
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

                    </div>

                </div>

            </div>
        )
    }
}
export default BingoHome;