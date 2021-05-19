import React from "react";


class VegasMobile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="vegas_mobile_wrap">
                <div className="MainContainerGames vegas_mobile">
                    <div className="TopImage">
                        <img src="/img/VegasBannerMob.jpg" alt="vegas mobile banner"/>
                    </div>
                    <div className="DescriptionBlock">
                        <div className="InfoText">Mobile Vegas</div>
                        <div className="AvailableOn">Available on iPhone, iPad & Android</div>
                        <div className="DownloadAppBtn">
                            <a href="#" className="Download_Btn">
                                <img src="/img/androidBtn.png" alt="DownloadApp Button"/>
                            </a>
                        </div>

                        <ul className="AdvancedTextList">
                            <li>Fast paced games can be enjoyed any time, anywhere</li>
                            <li>Instant access to dozens of top titles</li>
                            <li>Play counts towards the great range of promotions</li>
                            <li>Optimised to work on all supported mobile handsets</li>
                            <li>Simple and easy to use features</li>
                            <li>Completely free to download</li>
                        </ul>
                        <div className="NoDownloadContainer">
                            <span className="NoDownload">No Download. </span>
                            <span className="PlayInfo">Play in your iPhone, iPad or Android browser</span>
                        </div>
                        <div className="VisitContainer">
                            <span className="VisitUrl">vegas.bet365.com</span>
                            <span className="AppleLogo">
                            <img src="/img/Apple-Icon.png" alt="Apple logo"/>
                        </span>
                            <span className="AndroidLogo">
                            <img src="/img/Andriod-Icon.png" alt="Android logo"/>
                        </span>
                        </div>
                    </div>
                </div>

                <div className="MainContainerGames vegas_mobile">
                    <div className="DesktopMobileGrid">
                        <div className="DesktopMobileGamesGridHeader">
                            <span className="viewGames">View Games</span>
                            <span className="filterLabel">by Device</span>
                                <div id="selectDev"><span>Show all</span>
                                    <ul className="selectDevice">
                                        <li>Android 4.0+</li>
                                        <li>iPhone</li>
                                        <li>iPad</li>
                                        <li>Show all</li>
                                    </ul>
                                </div>


                            <span className="filterLabel">by Game Category</span>
                            <div id="selectGameCat">
                                    <span>Show all</span>
                                    <ul className="selectGameCategory">
                                        <li>Show all</li>
                                        <li>Premium Slots</li>
                                        <li>Table & Card</li>
                                    </ul>
                            </div>

                            <a href="#" className="SelectGameBtn">Show Games</a>
                        </div>
                        <div className="DesktopMobileGamesGridProds">
                            <div className="GamesProd">
                                <div className="ProdImageWrapper">
                                    <img src="/img/prodImg34.jpg" alt="Bollywood Story"/>
                                    <div className="IsNew">New</div>
                                </div>
                                <div className="ProdName">Bollywood Story</div>
                            </div>
                            <div className="GamesProd">
                                <div className="ProdImageWrapper">
                                    <img src="/img/prodImg10.jpg" alt="Lost Relics"/>
                                    <div className="IsNew">New</div>
                                </div>
                                <div className="ProdName">Lost Relics</div>
                            </div>
                            <div className="GamesProd">
                                <div className="ProdImageWrapper">
                                    <img src="/img/prodImg35.jpg" alt="Ozwin's Jackpots"/>
                                    {/*<div className="IsNew">New</div>*/}
                                </div>
                                <div className="ProdName">Ozwin's Jackpots</div>
                            </div>
                            <div className="GamesProd">
                                <div className="ProdImageWrapper">
                                    <img src="/img/prodImg36.jpg" alt="Vikings Go To Hell"/>
                                    {/*<div className="IsNew">New</div>*/}
                                </div>
                                <div className="ProdName">Vikings Go To Hell</div>
                            </div>
                            <div className="GamesProd">
                                <div className="ProdImageWrapper">
                                    <img src="/img/prodImg37.jpg" alt="Asgardian Stones"/>
                                    {/*<div className="IsNew">New</div>*/}
                                </div>
                                <div className="ProdName">Asgardian Stones</div>
                            </div>
                            <div className="GamesProd">
                                <div className="ProdImageWrapper">
                                    <img src="/img/prodImg14.jpg" alt="Easter Island"/>
                                    {/*<div className="IsNew">New</div>*/}
                                </div>
                                <div className="ProdName">Easter Island</div>
                            </div>
                            <div className="GamesProd">
                                <div className="ProdImageWrapper">
                                    <img src="/img/prodImg38.jpg" alt="Gem Rocks"/>
                                    {/*<div className="IsNew">New</div>*/}
                                </div>
                                <div className="ProdName">Gem Rocks</div>
                            </div>
                            <div className="GamesProd">
                                <div className="ProdImageWrapper">
                                    <img src="/img/prodImg39.jpg" alt="Butterfly Staxx"/>
                                    {/*<div className="IsNew">New</div>*/}
                                </div>
                                <div className="ProdName">Butterfly Staxx</div>
                            </div>
                            <div className="GamesProd">
                                <div className="ProdImageWrapper">
                                    <img src="/img/prodImg.jpg" alt="Orient Express"/>
                                    {/*<div className="IsNew">New</div>*/}
                                </div>
                                <div className="ProdName">Orient Express</div>
                            </div>
                            <div className="GamesProd">
                                <div className="ProdImageWrapper">
                                    <img src="/img/prodImg41.jpg" alt="Rainbow Ryan"/>
                                    {/*<div className="IsNew">New</div>*/}
                                </div>
                                <div className="ProdName">Rainbow Ryan</div>
                            </div>
                            <div className="GamesProd">
                                <div className="ProdImageWrapper">
                                    <img src="/img/prodImg42.jpg" alt="Twin Spin Deluxe"/>
                                    {/*<div className="IsNew">New</div>*/}
                                </div>
                                <div className="ProdName">Twin Spin Deluxe</div>
                            </div>
                            <div className="GamesProd">
                                <div className="ProdImageWrapper">
                                    <img src="/img/prodImg15.jpg" alt="Valley of the Gods"/>
                                    {/*<div className="IsNew">New</div>*/}
                                </div>
                                <div className="ProdName">Valley of the Gods</div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="MainContainerGames vegas_mobile">
                    <div className="FAQ-group panel-group" id="accordion">
                            <div className="faqHeader">FAQs</div>
                            <div className="FAQ-panel panel panel-default">
                                <div className="panel-heading ">
                                    <h4 className="panel-title">
                                        <a className="accordion-toggle collapsed" data-toggle="collapse"
                                           href="#collapseOne">How do I get the Vegas at bet365 app on my phone or tablet? </a>
                                    </h4>
                                </div>
                                <div id="collapseOne" className="panel-collapse collapse " data-parent="#accordion">
                                    <div className="panel-body">
                                        For Android devices, firstly adjust your security settings to allow the installation of Apps from sources other than the Play Store, (go to Settings > Security and tick "Allow the installation of apps from sources other than the Play Store"), then go to vegas.bet365.com in your browser and start the download. Once the download is complete, follow the instructions provided. The Vegas at bet365 App is supported on Android 4.4 or higher.
                                    </div>
                                </div>
                            </div>
                        <div className="FAQ-panel panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <a className="accordion-toggle collapsed" data-toggle="collapse"
                                       href="#collapseTwo">How much does the Vegas at bet365 app cost? </a>
                                </h4>
                            </div>
                            <div id="collapseTwo" className="panel-collapse collapse" data-parent="#accordion">
                                <div className="panel-body">
                                    The Vegas at bet365 app is free to download and use. Data charges may be applied by your service provider. For data charge information, please contact your service provider.
                                </div>
                            </div>
                        </div>
                        <div className="FAQ-panel panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <a className="accordion-toggle collapsed" data-toggle="collapse"
                                       href="#collapseThree">Can I play Mobile Vegas without downloading the Vegas at bet365 app? </a>
                                </h4>
                            </div>
                            <div id="collapseThree" className="panel-collapse collapse" data-parent="#accordion">
                                <div className="panel-body">
                                    To access Mobile Vegas without the app, simply visit vegas.bet365.com on your web browser.
                                </div>
                            </div>
                        </div>
                        <div className="FAQ-panel panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <a className="accordion-toggle collapsed" data-toggle="collapse"
                                       href="#collapseFour">Why does the Vegas at bet365 app offer a better experience? </a>
                                </h4>
                            </div>
                            <div id="collapseFour" className="panel-collapse collapse " data-parent="#accordion">
                                <div className="panel-body">
                                    The Vegas at bet365 app offers extra features and faster gameplay, it’s the easiest way to play Mobile Vegas.
                                </div>
                            </div>
                        </div>
                        <div className="FAQ-panel panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <a className="accordion-toggle collapsed" data-toggle="collapse"
                                       href="#collapseFive">How do I know if my device is compatible with Mobile Vegas?</a>
                                </h4>
                            </div>
                            <div id="collapseFive" className="panel-collapse collapse" data-parent="#accordion">
                                <div className="panel-body">
                                    Mobile Vegas is officially supported on any device with either of the following operating systems: iOS 9; Android 4.4 or their more recent versions.
                                </div>
                            </div>
                        </div>
                        <div className="FAQ-panel panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <a className="accordion-toggle collapsed" data-toggle="collapse"
                                       href="#collapseSix">What else do I need to play Mobile Vegas?</a>
                                </h4>
                            </div>
                            <div id="collapseSix" className="panel-collapse collapse" data-parent="#accordion">
                                <div className="panel-body">
                                    When logging in to play Mobile Vegas, you will be required to enter the bet365 username and password that you chose when you opened your bet365 account.
                                </div>
                            </div>
                        </div>
                        <div className="FAQ-panel panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <a className="accordion-toggle collapsed" data-toggle="collapse"
                                       href="#collapseSeven">Do I need to open a separate account to play on Mobile Vegas?</a>
                                </h4>
                            </div>
                            <div id="collapseSeven" className="panel-collapse collapse" data-parent="#accordion">
                                <div className="panel-body">
                                    No, you don't. The same account you use for Vegas at bet365 can also be used for game play on your mobile.
                                </div>
                            </div>
                        </div>
                        <div className="FAQ-panel panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <a className="accordion-toggle collapsed" data-toggle="collapse"
                                       href="#collapseEight">What do I do if I forget my password?</a>
                                </h4>
                            </div>
                            <div id="collapseEight" className="panel-collapse collapse" data-parent="#accordion">
                                <div className="panel-body">
                                    If you forget your password you can click here and enter the details that match the information held on your account. Alternatively, Contact Us and one of our Customer Service advisors will be pleased to assist you.
                                </div>
                            </div>
                        </div>
                        <div className="FAQ-panel panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <a className="accordion-toggle collapsed" data-toggle="collapse"
                                       href="#collapseNine">How can I fund my Mobile Vegas account?</a>
                                </h4>
                            </div>
                            <div id="collapseNine" className="panel-collapse collapse" data-parent="#accordion">
                                <div className="panel-body">
                                    You can deposit in exactly the same way as you do on your computer, using the same range of payment methods. It is also possible to transfer funds from your other bet365 balances into Mobile Vegas.
                                </div>
                            </div>
                        </div>
                        <div className="FAQ-panel panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <a className="accordion-toggle collapsed" data-toggle="collapse"
                                       href="#collapseTen">Can I play Mobile Vegas when I’m abroad?</a>
                                </h4>
                            </div>
                            <div id="collapseTen" className="panel-collapse collapse" data-parent="#accordion">
                                <div className="panel-body">
                                    Yes, you can play Mobile Vegas in non-restricted countries, as long as your service provider allows you to roam foreign networks and the network you have roamed onto supports GPRS.
                                </div>
                            </div>
                        </div>
                        <div className="FAQ-panel panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <a className="accordion-toggle collapsed" data-toggle="collapse"
                                       href="#collapseEleven">Why can’t I access Mobile Vegas?</a>
                                </h4>
                            </div>
                            <div id="collapseEleven" className="panel-collapse collapse" data-parent="#accordion">
                                <div className="panel-body">
                                    Content blocking, put in place by your mobile network operator, may prevent you from accessing Mobile Vegas. Content blocking exists to stop unauthorised access to certain services, such as those which are age-restricted.

                                    Contact your mobile service provider to disable content blocking on your device. If you have already spoken to your service provider and continue to experience difficulties, please Contact Us and one of our Customer Service advisors will be pleased to assist you.
                                </div>
                            </div>
                        </div>
                        <div className="FAQ-panel panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <a className="accordion-toggle collapsed" data-toggle="collapse"
                                       href="#collapseTwelve">Why do the graphics display slowly during gameplay? </a>
                                </h4>
                            </div>
                            <div id="collapseTwelve" className="panel-collapse collapse" data-parent="#accordion">
                                <div className="panel-body">
                                    Certain devices have a low specification audio player which may cause jerky graphics. To improve the display, turn off sound in your device settings.
                                </div>
                            </div>
                        </div>
                        <div className="FAQ-panel panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <a className="accordion-toggle collapsed" data-toggle="collapse"
                                       href="#collapseThirteen">What happens if I receive a call whilst playing?</a>
                                </h4>
                            </div>
                            <div id="collapseThirteen" className="panel-collapse collapse" data-parent="#accordion">
                                <div className="panel-body">
                                    The game will pause automatically; on some phones it may lose connection. When your call has finished, the game will resume automatically or you can resume by returning to the normal location of the game. You should be able to continue your game from where you left it, or log in again and resume a broken game.
                                </div>
                            </div>
                        </div>
                        <div className="FAQ-panel panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <a className="accordion-toggle collapsed" data-toggle="collapse"
                                       href="#collapseFourteen">What happens if I lose connection or run out of battery whilst playing?</a>
                                </h4>
                            </div>
                            <div id="collapseFourteen" className="panel-collapse collapse" data-parent="#accordion">
                                <div className="panel-body">
                                    Once the connection has improved or your battery has charged, log in to Mobile Vegas and you should be able to continue your game where you left it.
                                </div>
                            </div>
                        </div>
                        <div className="FAQ-panel panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <a className="accordion-toggle collapsed" data-toggle="collapse"
                                       href="#collapseFifteen">Is the Vegas at bet365 app compatible with iOS features?</a>
                                </h4>
                            </div>
                            <div id="collapseFifteen" className="panel-collapse collapse" data-parent="#accordion">
                                <div className="panel-body">
                                    The Vegas at bet365 app now features Touch ID and 3D Touch on Apple devices with iOS 9 or higher. Touch ID is a secure and fast way to access your Vegas at bet365 account by using your fingerprint to instantly log in. Once you enable this feature, your fingerprint will then be linked to your account and you will be prompted to confirm your identity by using this each time you wish to use the Vegas at bet365 app.

                                    3D Touch responds to the different pressures of your finger to provide fast access to your most recent and favourite games. By simply pressing and holding your finger on the Vegas at bet365 app icon, your device will suggest actions that are tailored to the way you play; making it quicker and easier to play on Vegas at bet365.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}
export default VegasMobile;