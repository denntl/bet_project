import React from 'react';



class AffiliatesHome extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="innerPageContainer">
                <div className="innerPageContainerBanner">
                    <img src="../../../img/HomepageBanner_2017_970x211.jpg" alt="banner"/>
                </div>
                <h1 className="homepage">Why be a bet365 Affiliate?</h1>
                <div className="home_Content">

                    <div  className="infoBox">

                        <div  className="pods">
                            <img id="MasterMainPlaceHolder_ctl00_ctl01_Pods_PodImage_0" src="../../../img/affiliate_team.jpg"/>
                                <h2>Dedicated Affiliate Team</h2>
                        </div>

                        <div className="infoTextContainer">Our team are here to advise you and help maximise your
                            earnings across our complete range of industry leading products using all our affiliate
                            tools.
                        </div>
                        <a className="infoBox_btn" href="#">Join Now</a>
                    </div>

                    <div  className="infoBox">

                        <div  className="pods">
                            <img id="MasterMainPlaceHolder_ctl00_ctl01_Pods_PodImage_1" src="../../../img/safeIcon.jpg"/>
                                <h2>A Name You Can Trust</h2>
                        </div>

                        <div className="infoTextContainer">Become a business player with the world's favourite online
                            sports betting company with over 35 million customers worldwide.<br/><br/></div>

                        <a className="infoBox_btn" href="#">Join Now</a>
                    </div>

                    <div className="infoBox">

                        <div  className="pods">
                            <img id="MasterMainPlaceHolder_ctl00_ctl01_Pods_PodImage_2" src="../../../img/commision.jpg"/>
                                <h2>Earn Commission On All Products</h2>
                        </div>

                        <div className="infoTextContainer">Whether you are attracting players to Sports,&nbsp;Casino,
                            Poker, Games, Vegas or Bingo, you'll earn revenue from your customers across all bet365
                            products.
                        </div>
                        <a className="infoBox_btn" href="#">Join Now</a>
                    </div>

                    <div className="infoBox">

                        <div  className="pods">
                            <img id="MasterMainPlaceHolder_ctl00_ctl01_Pods_PodImage_3" src="../../../img/toolsIcon.jpg"/>
                                <h2>The Best Affiliate Tools</h2>
                        </div>

                        <div className="infoTextContainer">Partner with us to get access to excellent creative and
                            industry leading player values along with the tools and reports to manage your business.
                        </div>
                        <a className="infoBox_btn" href="#">Join Now</a>
                    </div>

                    <div className="clearFix"></div>

                </div>
            </div>
        )

    }
}

export default AffiliatesHome;