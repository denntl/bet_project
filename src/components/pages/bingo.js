import React from 'react';
import {Link, NavLink, Route, Switch} from "react-router-dom";
import BingoCommunity from "./bingo/nav_menu/bingo_community";
import BingoHome from "./bingo/nav_menu/bingo_home";
import BingoGames from "./bingo/nav_menu/bingo_games";
import BingoPromotions from "./bingo/nav_menu/bingo_promotions";
import BingoMobile from "./bingo/nav_menu/bingo_mobile";
import FooterBingo from "../footer_bingo";
import {getCasinoList, getCasinoTypes} from "../helpers/data_account";




class Bingo extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            isBingoHome:true,
            isBingoGames:false,
            isBingoPromotions:false,
            isBingoCommunity:false,
            isBingoMobile:false,
            loginToken: this.props.loginToken,
            casinoGames: [],
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
        this.fetchCasinoList(this.state.loginToken, "Bingo");


    }
    changeTab(tab) {
        if (tab == 'bingoHome') {
            this.setState({
                isBingoHome:true,
                isBingoGames:false,
                isBingoPromotions:false,
                isBingoCommunity:false,
                isBingoMobile:false
            })
        }
        if (tab == 'bingoGames') {
            this.setState({
                isBingoHome:false,
                isBingoGames:true,
                isBingoPromotions:false,
                isBingoCommunity:false,
                isBingoMobile:false
            })
        }
        if (tab == 'bingoPromotions') {
            this.setState({
                isBingoHome:false,
                isBingoGames:false,
                isBingoPromotions:true,
                isBingoCommunity:false,
                isBingoMobile:false
            })
        }
        if (tab == 'bingoCommunity') {
            this.setState({
                isBingoHome:false,
                isBingoGames:false,
                isBingoPromotions:false,
                isBingoCommunity:true,
                isBingoMobile:false
            })
        }
        if (tab == 'bingoMobile') {
            this.setState({
                isBingoHome:false,
                isBingoGames:false,
                isBingoPromotions:false,
                isBingoCommunity:false,
                isBingoMobile:true
            })
        }
    }
    render() {
        console.log("Login", this.state.loginToken)
        return(
            <div className="Content BingoPage">
                <div className="SubHeaderContainer">
                    <div className="NavigationWrapper">
                        <nav className="Navigation">
                            <ul className="bingo_nav_list">
                                <li className='top-link'><NavLink to="/bingo/bingo_home" title="Home" >Home</NavLink></li>
                                <li className='top-link'><NavLink to="/bingo/bingo_games" title="Games">Games</NavLink></li>
                                <li className='top-link'><NavLink to="/bingo/bingo_promotions" title="Promotions">Promotions</NavLink></li>
                                <li className='top-link'><NavLink to="/bingo/bingo_community" title="Community">Community</NavLink></li>
                                <li className='top-link'><NavLink to="/bingo/bingo_mobile" title="Mobile" >Mobile</NavLink></li>
                                {this.state.loginToken ?
                                    <li className="depositButton"><Link to="" className="depositLink">Deposit</Link></li>
                                 : ""
                                }
                            </ul>

                        </nav>
                    </div>
                </div>
                <Switch>
                    <Route  exact path="/bingo" render={() => <BingoHome/>}/>
                    <Route  path="/bingo/bingo_home" render={() => <BingoHome/>}/>
                    <Route  path="/bingo/bingo_games" render={() => <BingoGames/>}/>
                    <Route  path="/bingo/bingo_promotions/" render={() => <BingoPromotions/>}/>
                    <Route  path="/bingo/bingo_community" render={() => <BingoCommunity/>}/>
                    <Route  path="/bingo/bingo_mobile" render={() => <BingoMobile/>}/>
                </Switch>
                <FooterBingo/>

            </div>
        )

    }
}

export default Bingo;
