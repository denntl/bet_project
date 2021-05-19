import React from 'react';
import FooterLiveCasino from "../footer_live_casino";
import {Link} from "react-router-dom";
import {getCasinoList, getCasinoTypes} from "../helpers/data_account";
import LiveCasinoGames from "./live_casino/liveCasinoGames";



class LiveCasino extends React.Component {
    constructor(props) {
        super(props);
        let game = {};
        if(JSON.parse(window.localStorage.getItem("selectedCasinoGame"))) {
            //console.log("JSON: ",JSON.parse(window.localStorage.getItem("selectedCasinoGame")));
            game = JSON.parse(window.localStorage.getItem("selectedCasinoGame"));
        }
        this.state={
            loginToken: this.props.loginToken,
            casinoGames: [],
            randomArr:[],
            selectedGame: game || {}

        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            loginToken: nextProps.loginToken
        })
    }
    fetchCasinoList = (loginToken, type) => {
        getCasinoList(loginToken, type, (err, data) => {
            if (!err) {
                console.log(' getCasinoList', data)

                this.setState({
                    casinoGames: data
                })
               let randomArr = this.state.casinoGames.sort(()=>.5 - Math.random()).slice(0,4);
               this.setState({randomArr:randomArr});
            } else {
                console.log('err getCasinoList', err)
            }
        })
    }
    componentDidMount(){


        getCasinoTypes(this.state.loginToken, (err, data) => {
            if (!err) {
                console.log('getCasinoTypes', data)
            } else {
                console.log('err getCasinoType', err)
            }
        })
        this.fetchCasinoList(this.state.loginToken, "live casino");


    }
    getDataSelectedGame=(game)=>{
        window.localStorage.setItem("selectedCasinoGame", JSON.stringify(game));
        this.setState({selectedGame:game});
    };


    render() {
        console.log('randomArr:', this.state.randomArr);
        return(

            <div>

                    <div className="content live-casino">
                        <div className="main-content-wrapper live-casino-page__wrapper">

                            <div className="live-casino-page__main-banner-container live-casino-main-banner">
                                <div className="infoTextContainer live-casino-main-banner__left">
                                    <div className="infoTextContainer live-casino-main-banner__title--deposit">Live Casino</div>
                                        <Link to={{
                                            pathname: '/casino/casino_home/game',
                                            search: 'id=352',
                                            state:"liveCasino"
                                            }}
                                              className="casino_btn" >Play Now</Link>
                                </div>
                                <div className="infoTextContainer live-casino-main-banner__right">
                                    <div className="live-casino-main-banner__girls">
                                        <img src="../img/Casino/DealersGirls.png" className="live-casino-main-banner__girls-image" />
                                    </div>
                                </div>
                            </div>

                            <div className="casino-games-grid-cross-sell__pods" >
                                <div className="live-casino-main-grid-container live-casino-main-grid">
                                    <LiveCasinoGames casinoGames={this.state.randomArr} typeBlock="main" goPageGame={(typeBlock) => this.goPageGame(typeBlock)} selectedGame={this.state.selectedGame} getDataSelectedGame={this.getDataSelectedGame}/>
                                </div>
                            </div>
                        </div>
                        {/*<div className="casino-pre-footer">*/}
                            {/*<div className="cross-sell_wrapper">*/}
                                {/*<div className="casino-games-grid-cross-sell__header">*/}
                                    {/*<div className="casino-games-grid-cross-sell__header-elements">*/}
                                        {/*<div className="casino-games-grid-cross-sell__header-element casino-games-grid-cross-sell__title">*/}
                                            {/*Other Games*/}
                                        {/*</div>*/}

                                        {/*<div className="casino-games-grid-cross-sell__header-element casino-games-grid-cross-sell__link-element">*/}
                                            {/*<Link to="/casino/casino_home" className="casino-games-grid-cross-sell__hyperlink">View more games</Link>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    <FooterLiveCasino/>
                    </div>

            </div>

        )

    }
}

export default LiveCasino;
