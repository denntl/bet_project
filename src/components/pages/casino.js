import React from 'react';
import {NavLink, Route, Switch} from "react-router-dom";
import CasinoHome from "./casino/casinoHome";
import CasinoOffers from "./casino/casinoOffers";
import CasinoLoyaltyScheme from "./casino/casinoLoyaltyScheme";
import CasinoPlayerGuides from "./casino/casinoPlayerGuides";
import CasinoGetTheApp from "./casino/casinoGetTheApp";
import {getCasinoList, getCasinoTypes} from "../helpers/data_account";
import qs from "query-string";




class Casino extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            isHome:true,
            isOffers:false,
            isFullOffers:false,
            isLoyaltyScheme:false,
            isPlayerGuides:false,
            isGetTheApp:false,
            loginToken: this.props.loginToken,
            casinoGames: [],
            offer_full_name: 'newPlayer',


        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            loginToken: nextProps.loginToken
        })
    }

    componentDidMount(){
        var clear = setInterval(function() {
            if ( $('.casino-banner-slider').length) {
                clearInterval(clear);
                $('.casino-banner-slider').owlCarousel({
                    center: true,
                    items: 3,
                    loop: true,
                    autoWidth:true,
                    margin: 0,
                    nav: true
                });
            }
        }, 300);
        getCasinoTypes(this.state.loginToken, (err, data) => {
            if (!err) {
                console.log('getCasinoTypes', data)
            } else {
                console.log('err getCasinoType', err)
            }
        })

        let queryString = qs.parse(location.search, { ignoreQueryPrefix: true });

        let casinoType = 'casino';

        if(typeof queryString.liveCasinoId != 'undefined'){
            casinoType = 'live casino';
        }

        this.fetchCasinoList(this.state.loginToken, casinoType);

    }
    changeTab(tab) {
        if (tab == 'casinoHome') {
            this.setState({
                isHome: true,
                isOffers: false,
                isLoyaltyScheme: false,
                isPlayerGuides: false,
                isGetTheApp: false
            })
        }
        if (tab == 'casinoOffers') {
            this.setState({
                isHome: false,
                isOffers: true,
                isLoyaltyScheme: false,
                isPlayerGuides: false,
                isGetTheApp: false
            })
        }
        if (tab == 'loyaltyScheme') {
            this.setState({
                isHome: false,
                isOffers: false,
                isLoyaltyScheme: true,
                isPlayerGuides: false,
                isGetTheApp: false
            })
        }
        if (tab == 'playerGuides') {
            this.setState({
                isHome: false,
                isOffers: false,
                isLoyaltyScheme: false,
                isPlayerGuides: true,
                isGetTheApp: false
            })
        }
        if (tab == 'getTheApp') {
            this.setState({
                isHome: false,
                isOffers: false,
                isLoyaltyScheme: false,
                isPlayerGuides: false,
                isGetTheApp: true
            })
        }
    }


    fetchCasinoList = (loginToken, type) => {
        getCasinoList(loginToken, type, (err, data) => {
            if (!err) {
                console.log(' getCasinoList', data)
                this.setState({
                    casinoGames: data
                })
            } else {
                console.log('err getCasinoList', err)
            }
        })
    }

    changeOfferState = (st) => {
        console.log(st)
        this.setState({
            offer_full_name: st,
        })
    }

    render() {
        return(
            <div className="content casino">

                <div className="top-navigation casino">
                            <NavLink className={`top-navigation_item ${this.state.isHome ? "active":""}`} to="/casino/casino_home" title="Home" onClick={(e)=>this.changeTab("casinoHome")} >Home</NavLink>
                            <NavLink className={`top-navigation_item ${this.state.isOffers ? "active":""}`} to="/casino/casino_offers" title="Offers" onClick={(e)=>this.changeTab("casinoOffers")}>Offers</NavLink>
                            <NavLink className={`top-navigation_item ${this.state.isLoyaltyScheme ? "active":""}`} to="/casino/casino_loyalty_scheme" title="LoyaltyScheme" onClick={(e)=>this.changeTab("loyaltyScheme")}>Loyalty Scheme</NavLink>
                            <NavLink className={`top-navigation_item ${this.state.isPlayerGuides ? "active":""}`} to="/casino/casino_player_guides" title="PlayerGuides" onClick={(e)=>this.changeTab("playerGuides")}>Player Guides</NavLink>
                            <NavLink className={`top-navigation_item ${this.state.isGetTheApp ? "active":""}`} to="/casino/casino_get_the_app" title="GetTheApp" onClick={(e)=>this.changeTab("getTheApp")}>Get The App</NavLink>
                </div>

                <Switch>
                    <Route  exact path="/casino" render={() => <CasinoHome  casinoGames={this.state.casinoGames} fetchCasinoList={(loginToken, type) => this.fetchCasinoList(loginToken, type)} loginToken={this.state.loginToken}/>}/>
                    <Route  path="/casino/casino_home" render={() => <CasinoHome offer_full_name={this.state.offer_full_name} changeOfferState={(st) => this.changeOfferState(st) } casinoGames={this.state.casinoGames} fetchCasinoList={(loginToken, type) => this.fetchCasinoList(loginToken, type)} loginToken={this.state.loginToken}/>}/>
                    <Route  path="/casino/casino_offers" render={() => <CasinoOffers offer_full_name={this.state.offer_full_name}  />}/>
                    <Route  path="/casino/casino_loyalty_scheme" render={() => <CasinoLoyaltyScheme/>}/>
                    <Route  path="/casino/casino_player_guides" render={() => <CasinoPlayerGuides/>}/>
                    <Route  path="/casino/casino_get_the_app" render={() => <CasinoGetTheApp/>}/>
                </Switch>

                <div className="casino_footer">
                    {this.props.footer}

                </div>
            </div>
        )

    }
}

export default Casino;
