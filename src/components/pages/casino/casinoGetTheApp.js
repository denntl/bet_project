import React from 'react';



class CasinoGetTheApp extends React.Component {
    constructor(props) {
        super(props);

    }

    toggleFAQ(id) {
        if ($('.accordion_item_text.id-' + id).hasClass("slow_appear")) {
            $('.accordion_item_text.id-' + id).removeClass("slow_appear").show(200);
            $('.accordion_item_title.hd-' + id).removeClass("header_close");
        } else {
            $('.accordion_item_text.id-' + id).addClass("slow_appear").hide(200);
            $('.accordion_item_title.hd-' + id).addClass("header_close");
        }
    }

    render() {
        return(
            <div className="MainContainerGames Casino">
                <div className="getTheApp_container">
                    <div className="getTheApp_title">Get The App on desktop or mobile</div>
                    <a href="#" className="casino_btn download">Download Client</a>
                    <div className="getTheApp_img_container">
                        <img src="/img/BonusChips_1500x682.jpg" alt=""/>
                        <div className="prod_badge">
                            <img src="/img/Casino-AppIcons-English.svg" alt=""/>
                        </div>
                    </div>
                    <div className="getTheApp_faq_container">
                        <div className="faq_container_title">FAQs</div>
                        <div className="faq_accordion">
                            <div className="accordion_item">
                                <div className="accordion_item_title hd-1" onClick={()=>this.toggleFAQ(1)}>How do I download the Casino desktop software?</div>

                                <div className="accordion_item_text id-1">
                                    Please <a className="accordion_item_text_link">click here</a> to begin the process. When the download box appears, click <b>Run</b> and follow the on screen prompts, A System Security prompt may appear, if this happens click <b>Run</b> once more. Select your preferred language for the software and the download process will now complete. For any assistance, please <a className="accordion_item_text_link"> Contact Us</a> and we will be happy to help.
                                </div>
                            </div>
                            <div className="accordion_item">
                                <div className="accordion_item_title hd-2 header_close"onClick={()=>this.toggleFAQ(2)}>How do I install the Casino software?</div>
                                <div className="accordion_item_text id-2 slow_appear">
                                    Once download is complete the installation process will begin. Click <b>INSTALL</b> and follow the on screen prompts. For any assistance, please Contact Us and we will be happy to help.
                                </div>
                            </div>
                            <div className="accordion_item">
                                <div className="accordion_item_title hd-3 header_close" onClick={()=>this.toggleFAQ(3)}>How do I create an account?</div>
                                <div className="accordion_item_text id-3 slow_appear">
                                    The Casino software will open automatically on your system following successful installation. To join us at the tables, simply select <b>JOIN NOW</b> from the login box and complete the new player registration process. Log in with your new username and password and you will be prompted to create your unique Casino Nickname. Make your first deposit to activate your <b>New Player Bonus</b>
                                    <a href="#" className="accordion_item_text_link">Contact Us</a> and we will be happy to help.
                                </div>
                            </div>
                            <div className="accordion_item">
                                <div className="accordion_item_title hd-4 header_close" onClick={()=>this.toggleFAQ(4)}>How do I get the Casino at bet365 app on my phone or tablet?</div>
                                <div className="accordion_item_text id-4 slow_appear">
                                    To access Mobile Casino without the app, simply visit the casino on your web browser.
                                </div>
                            </div>
                            <div className="accordion_item">
                                <div className="accordion_item_title hd-5 header_close" onClick={()=>this.toggleFAQ(5)}>Why does the Casino at bet365 app offer a better experience?</div>
                                <div className="accordion_item_text id-5 slow_appear">
                                    The Casino at bet365 app offers extra features and faster gameplay, it’s the easiest way to play Mobile Casino.
                                </div>
                            </div>
                            <div className="accordion_item">
                                <div className="accordion_item_title hd-6 header_close" onClick={()=>this.toggleFAQ(6)}>How do I know if my device is compatible with Mobile Casino?</div>
                                <div className="accordion_item_text id-6 slow_appear">
                                    Mobile Casino is officially supported on any device with either of the following operating systems: iOS 9; Android 4.4 or their more recent versions.
                                </div>
                            </div>
                            <div className="accordion_item">
                                <div className="accordion_item_title hd-7 header_close" onClick={()=>this.toggleFAQ(7)}>What else do I need to play Mobile Casino?</div>
                                <div className="accordion_item_text id-7 slow_appear">
                                    When logging in to play Mobile Casino, you will be required to enter the bet365 username and password that you chose when you opened your bet365 account.
                                </div>
                            </div>
                            <div className="accordion_item">
                                <div className="accordion_item_title hd-8 header_close" onClick={()=>this.toggleFAQ(8)}>Do I need to open a separate account to play on Mobile Casino?</div>
                                <div className="accordion_item_text id-8 slow_appear">
                                    No, you don't. The same account you use for Casino at bet365 can also be used for game play on your mobile.
                                </div>
                            </div>
                            <div className="accordion_item">
                                <div className="accordion_item_title hd-9 header_close" onClick={()=>this.toggleFAQ(9)}>What do I do if I forget my password?</div>
                                <div className="accordion_item_text id-9 slow_appear">
                                    If you forget your password you can click <a className="accordion_item_text_link"> here</a> and enter the details that match the information held on your account. Alternatively, <a className="accordion_item_text_link">Contact Us</a> and one of our Customer Service advisors will be pleased to assist you.
                                </div>
                            </div>
                            <div className="accordion_item">
                                <div className="accordion_item_title hd-10 header_close" onClick={()=>this.toggleFAQ(10)}>How can I fund my Mobile Casino account?</div>
                                <div className="accordion_item_text id-10 slow_appear">
                                    You can deposit in exactly the same way as you do on your computer, using the same range of payment methods. It is also possible to transfer funds from your other bet365 balances into Mobile Casino.
                                </div>
                            </div>
                            <div className="accordion_item">
                                <div className="accordion_item_title hd-11 header_close" onClick={()=>this.toggleFAQ(11)}>Can I play Mobile Casino when I’m abroad?</div>
                                <div className="accordion_item_text id-11 slow_appear">
                                    Yes, you can play Mobile Casino in non-restricted countries, as long as your service provider allows you to roam foreign networks and the network you have roamed onto supports GPRS.
                                </div>
                            </div>
                            <div className="accordion_item">
                                <div className="accordion_item_title hd-12 header_close" onClick={()=>this.toggleFAQ(12)}>Why can’t I access Mobile Casino?</div>
                                <div className="accordion_item_text id-12 slow_appear">
                                    Content blocking, put in place by your mobile network operator, may prevent you from accessing Mobile Casino. Content blocking exists to stop unauthorised access to certain services, such as those which are age-restricted.<br/>
                                    Contact your mobile service provider to disable content blocking on your device. If you have already spoken to your service provider and continue to experience difficulties, please Contact Us and one of our Customer Service advisors will be pleased to assist you.
                                </div>
                            </div>
                            <div className="accordion_item">
                                <div className="accordion_item_title hd-13 header_close" onClick={()=>this.toggleFAQ(13)}>Why do the graphics display slowly during gameplay?</div>
                                <div className="accordion_item_text id-13 slow_appear">
                                    Certain devices have a low specification audio player which may cause jerky graphics. To improve the display, turn off sound in your device settings.
                                </div>
                            </div>
                            <div className="accordion_item">
                                <div className="accordion_item_title hd-14 header_close" onClick={()=>this.toggleFAQ(14)}>What happens if I receive a call whilst playing?</div>
                                <div className="accordion_item_text id-14 slow_appear">
                                    The game will pause automatically; on some phones it may lose connection. When your call has finished, the game will resume automatically or you can resume by returning to the normal location of the game. You should be able to continue your game from where you left it, or log in again and resume a broken game.
                                </div>
                            </div>
                            <div className="accordion_item">
                                <div className="accordion_item_title hd-15 header_close" onClick={()=>this.toggleFAQ(15)}>What happens if I lose connection or run out of battery whilst playing?</div>
                                <div className="accordion_item_text id-15 slow_appear">
                                    Once the connection has improved or your battery has charged, log in to Mobile Casino and you should be able to continue your game where you left it.
                                </div>
                            </div>
                            <div className="accordion_item">
                                <div className="accordion_item_title hd-16 header_close" onClick={()=>this.toggleFAQ(16)}>Is the Casino at bet365 app compatible with iOS features?</div>
                                <div className="accordion_item_text id-16 slow_appear">
                                    The Casino at bet365 app now features Touch ID and 3D Touch on Apple devices with iOS 9 or higher. Touch ID is a secure and fast way to access your Casino at bet365 account by using your fingerprint to instantly log in. Once you enable this feature, your fingerprint will then be linked to your account and you will be prompted to confirm your identity by using this each time you wish to use the Casino at bet365 app.
                                    <br/>
                                    3D Touch responds to the different pressures of your finger to provide fast access to your most recent and favourite games. By simply pressing and holding your finger on the Casino at bet365 app icon, your device will suggest actions that are tailored to the way you play; making it quicker and easier to play on Casino at bet365.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default CasinoGetTheApp;

