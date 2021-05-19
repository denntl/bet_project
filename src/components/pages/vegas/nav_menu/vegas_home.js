import React from 'react';
import FeaturedGames from "../featured_games";
import PremiumSlots from "../premium_slots";
import TableCard from "../table_card";
import VideoSlots from "../video_slots";
import Jackpots from "../jackpots";




class VegasHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            featured_games: true,
            premium_slots: false,
            video_slots: false,
            table_card: false,
            jackpots: false
        };
        this.changeTab = this.changeTab.bind(this);
    }
    componentDidMount() {
        $('.Banner-slider').owlCarousel({
            center: true,
            items: 3,
            loop: true,
            autoWidth:true,
            margin: 0,
            nav: true
        });
    }
    changeTab(tab){
        if (tab == 'featured_games'){
            this.setState({
                featured_games: true,
                premium_slots: false,
                video_slots: false,
                table_card: false,
                jackpots: false
            })
        }
        if (tab == 'premium_slots'){
            this.setState({
                featured_games: false,
                premium_slots:true,
                video_slots:false,
                table_card:false,
                jackpots:false
            })
        }
        if (tab == 'video_slots'){
            this.setState({
                featured_games: false,
                premium_slots:false,
                video_slots:true,
                table_card:false,
                jackpots:false
            })
        }
        if (tab == 'table_card'){
            this.setState({
                featured_games: false,
                premium_slots:false,
                video_slots:false,
                table_card:true,
                jackpots:false
            })
        }
        if (tab == 'jackpots'){
            this.setState({
                featured_games: false,
                premium_slots:false,
                video_slots:false,
                table_card:false,
                jackpots:true
            })
        }

    }
    render() {
        return (
            <div className="main-content-wrapper vegas_home_page">
                <div className="Banner-slider owl-carousel">
                        <span className="item"><a href="#">
                            <img  src="/img/banner_img_1.jpg" alt="banner_img"/>
                        </a></span>
                    <span className="item"><a href="#">
                            <img src="/img/banner_img_2.jpg" alt="banner_img"/>
                            <div className="banner_infoTextContainer ">In-game opt in required. Qualifying stakes on
                                participating games could trigger a cash prize. Prizes will be credited immediately to
                                withdrawable cash balance. Promotion runs from 16:00 UK Time to 23:59 UK Time every
                                Friday in October. Time limits, game restrictions and T&amp;Cs Apply.
                            </div>
                        </a></span>
                    <span className="item"><a href="#">
                            <img  src="/img/banner_img_3.jpg" alt="banner_img"/>
                        </a></span>
                    <span className="item"><a href="#">
                            <img  src="/img/banner_img_4.jpg" alt="banner_img"/>
                        </a></span>
                    <span className="item"><a href="#">
                            <img  src="/img/banner_img_5.jpg" alt="banner_img"/>
                        </a></span>
                </div>
                <div className="MainContainerGames">
                    <nav className="GamesNavigator">
                        <a className={`game-link ${this.state.featured_games ? 'active' : ''}`} href="#" onClick={(e) => {e.preventDefault(); this.changeTab('featured_games'); }}>featured games</a>
                        <a className={`game-link ${this.state.premium_slots ? 'active' : ''}`} href="#" onClick={(e) => {e.preventDefault(); this.changeTab('premium_slots')}}>premium slots</a>
                        <a className={`game-link ${this.state.video_slots ? 'active' : ''}`} href="#" onClick={(e) => {e.preventDefault(); this.changeTab('video_slots')}}>video slots</a>
                        <a className={`game-link ${this.state.table_card ? 'active' : ''}`} href="#" onClick={(e) => {e.preventDefault(); this.changeTab('table_card')}}>table&card</a>
                        <a className={`game-link ${this.state.jackpots ? 'active' : ''}`} href="#" onClick={(e) => {e.preventDefault(); this.changeTab('jackpots')}}>jackpots</a>
                    </nav>
                    <div className="GamesInner">

                        <div className="GamesProdWrapper">
                            {this.state.featured_games ? <FeaturedGames/> : ""}
                            {this.state.premium_slots ? <PremiumSlots/> : ""}
                            {this.state.table_card ? <TableCard/> : ""}
                            {this.state.video_slots ? <VideoSlots/> : ""}
                            {this.state.jackpots ? <Jackpots/> : ""}
                        </div>
                        <div className="RightColumn">
                            <a href="#" className="advertPod playOffer"> </a>
                            <a href="#" className="advertPod gameLaunch"> </a>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default VegasHome;