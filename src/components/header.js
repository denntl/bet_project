import React from 'react';
import {NavLink} from 'react-router-dom';
import Timer from "./shared/timer";
import Logout from "./pages/autorization/logout";
import Login from "./pages/autorization/login";
import {getlanguage} from "./helpers/data_account";


class Header extends React.Component {
    constructor(props) {
        super(props);

      this.state = {
          pathname: location.pathname,
          loginToken: this.props.loginToken,
          language: {},
          currentLang: {
              id: "en",
              name: "English"
          },
          profile: this.props.profile,
          unsettled_bets: this.props.unsettled_bets,
          currentPage: this.props.currentPage,

      }

    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            loginToken: nextProps.loginToken,
            profile: nextProps.profile,
            unsettled_bets: nextProps.unsettled_bets,
            currentPage: nextProps.currentPage
        })
    }

    componentDidMount() {
        getlanguage(function(err, data) {
            if (!err) {
                this.setState({
                    language: data
                })
            }
        }.bind(this))

            $('.menu_link').click(function () {
            $(this).siblings('.sub_menu').toggleClass('active');
        });
        $('.HeaderLinkAtoz_SidebarLauncher').click(function(){
              $(this).parents('body').find('.HeaderPod').toggleClass('SidebarVisible');
              $(this).parents('body').find('.main_content .page').toggleClass('SidebarVisible');
              $(this).parents('body').find('.SidebarWrapper').toggleClass('SidebarShow');
              $(this).parents('body').find('.inner_footer').toggleClass('SidebarVisible');
        });        
        $('.UnitItem').click(function(){
              $(this).parents('body').find('.HeaderPod').toggleClass('SidebarVisible');
              $(this).parents('body').find('.main_content .page').toggleClass('SidebarVisible');
              $(this).parents('body').find('.SidebarWrapper').toggleClass('SidebarShow');
              $(this).parents('body').find('.inner_footer').toggleClass('SidebarVisible');
        });
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevState.pathname != location.pathname) {
            let styles = false;

            this.setState({
                pathname: location.pathname,

            })
        }

    }
    changeLang = (obj) => {
        this.setState({
            currentLang: obj
        })
    }



    render() {

        // console.log("odd",this.props.odds)
        return(
            <header className={`inner_header ${(this.state.pathname == "/casino" || this.state.pathname == "/live_casino") || this.state.pathname == "/casino/casino_home" || this.state.pathname == "/casino/casino_offers" || this.state.pathname == "/casino/casino_loyalty_scheme" || this.state.pathname == "/casino/casino_player_guides" || this.state.pathname == "/casino/casino_get_the_app" || this.state.pathname == "/casino/casino_home/game" || this.state.pathname == "/casino/casino_offers/liveBlackjack" || this.state.pathname == "/casino/casino_offers/luckyMonday" || this.state.pathname == "/casino/casino_offers/slotsClub" || this.state.pathname == "/casino/casino_offers/newPlayer"
                ? (" black_header") : (this.state.pathname == "/games" ||  this.state.pathname == "/games/all-games" ||  this.state.pathname == "/games/promotions" ||  this.state.pathname == "/games/home")? (" games_header"):((this.state.pathname == "/poker" || this.state.pathname == "/poker/how-to-play")?(" poker_header"):(((this.state.pathname == "/vegas" || this.state.pathname == "/vegas/vegas_home" || this.state.pathname == "/vegas/vegas_promotions" || this.state.pathname == "/vegas/vegas_new_games" || this.state.pathname == "/vegas/vegas_mobile"  || this.state.pathname == "/bingo" ||  this.state.pathname == "/bingo/bingo_home" ||  this.state.pathname == "/bingo/bingo_games" ||  this.state.pathname == "/bingo/bingo_promotions" ||  this.state.pathname == "/bingo/bingo_community" ||  this.state.pathname == "/bingo/bingo_mobile")?(" vegas_bingo_header"):("")))) }`} >
                <div className="top_header">
                    <a href="/" className="logo"></a>
                    <nav  className="main_menu navigation-inner-container">
                        <NavLink exact to="/sports"  className="menu_link" onClick={() => this.props.changePage('sports') }>Sports</NavLink>
                        <NavLink to="/in-play"       className="menu_link" onClick={() => this.props.changePage('sports') }>In-Play</NavLink>
                        {
                            this.state.loginToken ?
                                <NavLink to="/my_bets"    onClick={() => this.props.changePage('my_bets') } className="menu_link">My Bets
                                    {this.state.unsettled_bets == 0 ?
                                     ""
                                    :
                                     <span className="my_bets_count">{this.state.unsettled_bets}</span>
                                    }

                                </NavLink>
                                : ""
                        }
                        {/*<NavLink to="/casino"        className="menu_link" onClick={() => this.props.changePage("casino") } >Casino</NavLink>*/}
                        {/*<NavLink to="/live_casino"   className="menu_link" onClick={() => this.props.changePage('casino') }>Live Casino</NavLink>*/}
                        {/*<NavLink to="/games"         className="menu_link" onClick={() => this.props.changePage('other') }>Games</NavLink>*/}
                        {/*<NavLink to="/poker"         className="menu_link" onClick={() => this.props.changePage('poker') }>Poker</NavLink>*/}
                        {/*/!*<NavLink to="/vegas"         className="menu_link" onClick={() => this.props.changePage('other') }>Vegas</NavLink>*!/*/}
                        {/*<NavLink to="/bingo"         className="menu_link" onClick={() => this.props.changePage('other') }>Bingo</NavLink>*/}
                    </nav>
                    <div className="admin_block">
                        {
                            this.state.loginToken ?
                                <Login setBalance={() => this.props.setBalance()}currentPage={this.state.currentPage} updateProfile={(obj) => this.props.updateProfile(obj)} loginToken={this.state.loginToken} removeToken={() => this.props.removeToken()} showForm={(type, kind) => this.props.showForm(type, kind)} profile={this.state.profile} showUserBal={this.state.showUserBal}/>
                                :
                                <Logout showForm={(type) => this.props.showForm(type)} failedLoginModalShow={(status) => this.props.failedLoginModalShow(status)} setToken={(token) => this.props.setToken(token)}/>
                        }

                    </div>
                </div>

                {/*bottom header*/}



                {
                    this.state.pathname == "/casino" || this.state.pathname == "/live_casino" || this.state.pathname == "/casino/casino_home" || this.state.pathname == "/casino/casino_offers" || this.state.pathname == "/casino/casino_loyalty_scheme" || this.state.pathname == "/casino/casino_player_guides" || this.state.pathname == "/casino/casino_get_the_app" || this.state.pathname == "/casino/casino_home/game" || this.state.pathname == "/casino/casino_offers/newPlayer" || this.state.pathname == "/casino/casino_offers/liveBlackjack" || this.state.pathname == "/casino/casino_offers/luckyMonday" || this.state.pathname == "/casino/casino_offers/slotsClub"?
                        <div className="bottom_header bottom_header_search casino">
                            <div className="search_block">
                                <div className="search_icon">
                                    <svg className="search_loupe" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23">
                                        <path fillRule="evenodd"
                                              d="M16.12 8.06C16.12 3.61 12.51 0 8.06 0 3.61 0 0 3.61 0 8.06c0 4.45 3.61 8.06 8.06 8.06 1.795 0 3.452-.587 4.792-1.58l7.684 7.41.72.694 1.388-1.44-.72-.694-7.623-7.35c1.14-1.39 1.82-3.165 1.82-5.1zm-8.06 6.06c3.347 0 6.06-2.713 6.06-6.06C14.12 4.713 11.407 2 8.06 2 4.713 2 2 4.713 2 8.06c0 3.347 2.713 6.06 6.06 6.06z"></path>
                                    </svg>
                                </div>
                                <input type="text" placeholder="Search" className="input_search"/>
                                <div className="SearchHeader_CloseButton ">Close</div>
                            </div>

                            <ul className="second_menu">
                                <li><a href="javascript:void(0)" className="menu_link light_gray_text" onClick={()=>this.props.showForm('responsibleGambling')}>Responsible Gambling</a></li>
                                {
                                    !this.state.loginToken ?
                                        <li className="drop_down_menu">
                                            <a href="javascript:void(0)" className="menu_link drop light_gray_text">Language
                                                <span className="selected_option">{this.state.currentLang.name}</span>
                                            </a>
                                            <ul className="sub_menu language">
                                                {
                                                    Object.keys(this.state.language).map((ind) => {
                                                        return <li key={ind}
                                                                   className={`${this.state.currentLang.id == ind ? "active" : ""}`}
                                                                   onClick={() => this.changeLang({
                                                                       id: ind,
                                                                       name: this.state.language[ind]
                                                                   })}><a
                                                            className="sub_menu_link">{this.state.language[ind]}</a>
                                                        </li>
                                                    })
                                                }
                                            </ul>
                                        </li>
                                        : ""
                                }
                                {
                                    !this.state.loginToken ?
                                        <li className="drop_down_menu">
                                            <a href="javascript:void(0)" className="menu_link services">Services</a>
                                            <ul className="sub_menu services">
                                                <li className="active"><a href="javascript:void(0)" className="sub_menu_link" onClick={()=>this.props.showForm('accountHelper', 'home')}>Help</a></li>
                                                <li><a href="javascript:void(0)" className="sub_menu_link" onClick={()=>this.props.showForm('responsibleGambling')}>Responsible Gambling</a></li>
                                                <li><a className="sub_menu_link">Banking</a></li>
                                            </ul>
                                        </li>
                                        : ""
                                }
                            </ul>

                            <div className="current_time">
                                <time id="doc_time">{this.state.clock}</time>
                            </div>

                        </div>
                 :
                        <div className="bottom_header bottom_header_search green_bottom_header">
                            <div className="search_block">
                                <div className="search_icon">
                                    <svg className="search_loupe" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23">
                                        <path fillRule="evenodd"
                                              d="M16.12 8.06C16.12 3.61 12.51 0 8.06 0 3.61 0 0 3.61 0 8.06c0 4.45 3.61 8.06 8.06 8.06 1.795 0 3.452-.587 4.792-1.58l7.684 7.41.72.694 1.388-1.44-.72-.694-7.623-7.35c1.14-1.39 1.82-3.165 1.82-5.1zm-8.06 6.06c3.347 0 6.06-2.713 6.06-6.06C14.12 4.713 11.407 2 8.06 2 4.713 2 2 4.713 2 8.06c0 3.347 2.713 6.06 6.06 6.06z"></path>
                                    </svg>
                                </div>
                                <input type="text" placeholder="Search" className="input_search"/>
                                <div className="SearchHeader_CloseButton ">Close</div>
                            </div>

                            <ul className="second_menu">
                                <li><a href="javascript:void(0)" className="menu_link light_green_text" onClick={()=>this.props.showForm('responsibleGambling')}>Responsible Gambling</a></li>
                                <li><a href="javascript:void(0)" className="menu_link light_green_text" onClick={()=>this.props.showForm('liveStreaming', 'liveStreamingTab')}>Live Streaming</a></li>
                                <li><a href="javascript:void(0)" className="menu_link light_green_text" onClick={()=>this.props.showForm('accountHelper', 'home')}>Help</a></li>
                                {
                                    !this.state.loginToken ?
                                        <li className="drop_down_menu">
                                            <a href="javascript:void(0)" className="menu_link drop light_green_text">Language
                                                <span className="selected_option">{this.state.currentLang.name}</span>
                                            </a>
                                            <ul className="sub_menu language">
                                                {
                                                    Object.keys(this.state.language).map((ind) => {
                                                        return <li key={ind} className={`${this.state.currentLang.id == ind ? "active": ""}`} onClick={() => this.changeLang({id: ind, name: this.state.language[ind]})}><a className="sub_menu_link" >{this.state.language[ind]}</a></li>
                                                    })
                                                }
                                            </ul>
                                        </li>
                                        : ""
                                }


                                <li className="drop_down_menu">
                                    <a href="javascript:void(0)" className="menu_link drop light_green_text">Odds
                                        <span className="selected_option"> {this.props.odds.charAt(0).toUpperCase() + this.props.odds.substr(1)}</span>
                                    </a>
                                    <ul className="sub_menu odd">
                                        <li className={`${this.props.odds == "decimal" ? "active": ""}`} onClick={() => this.props.changeOdds("decimal")}><a className="sub_menu_link">Decimal</a></li>
                                        <li className={`${this.props.odds == "fractional" ? "active": ""}`} onClick={() => this.props.changeOdds("fractional")}><a className="sub_menu_link" >Fractional</a></li>
                                        <li className={`${this.props.odds == "american" ? "active": ""}`} onClick={() => this.props.changeOdds("american")}><a className="sub_menu_link">American</a></li>
                                    </ul>

                                </li>
                                {
                                    !this.state.loginToken ?
                                        <li className="drop_down_menu">
                                            <a href="#" className="menu_link services">Services</a>
                                            <ul className="sub_menu services">
                                                <li className="active"><a href="javascript:void(0)" className="sub_menu_link" onClick={()=>this.props.showForm('accountHelper', 'home')}>Help</a></li>
                                                <li><a href="javascript:void(0)" className="sub_menu_link" onClick={()=>this.props.showForm('responsibleGambling')}>Responsible Gambling</a></li>
                                                <li><a className="sub_menu_link">Banking</a></li>
                                            </ul>
                                        </li>
                                        : ""
                                }


                            </ul>

                            <div className="current_time">
                                <Timer/>
                            </div>

                        </div>
                }

                {
                    this.state.pathname == "/games" ||  this.state.pathname == "/games/all-games" ||  this.state.pathname == "/games/promotions" || this.state.pathname == "/games/home"?
                        <div className="bottom_header bottom_header_search">
                            <div className="search_block">
                                <div className="search_icon">
                                    <svg className="search_loupe" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23">
                                        <path fillRule="evenodd"
                                              d="M16.12 8.06C16.12 3.61 12.51 0 8.06 0 3.61 0 0 3.61 0 8.06c0 4.45 3.61 8.06 8.06 8.06 1.795 0 3.452-.587 4.792-1.58l7.684 7.41.72.694 1.388-1.44-.72-.694-7.623-7.35c1.14-1.39 1.82-3.165 1.82-5.1zm-8.06 6.06c3.347 0 6.06-2.713 6.06-6.06C14.12 4.713 11.407 2 8.06 2 4.713 2 2 4.713 2 8.06c0 3.347 2.713 6.06 6.06 6.06z"></path>
                                    </svg>
                                </div>
                                <input type="text" placeholder="Search" className="input_search"/>
                                <div className="SearchHeader_CloseButton ">Close</div>
                            </div>

                            <ul className="second_menu">
                                <li><a href="javascript:void(0)" className="menu_link light_gray_text" onClick={()=>this.props.showForm('accountHelper', 'home')}>Help</a></li>
                                <li><a href="javascript:void(0)" className="menu_link light_gray_text" onClick={()=>this.props.showForm('responsibleGambling')}>Responsible Gambling</a></li>
                                {
                                    !this.state.loginToken ?
                                        <li className="drop_down_menu">
                                            <a href="javascript:void(0)" className="menu_link drop light_gray_text">Language
                                                <span className="selected_option">{this.state.currentLang.name}</span>
                                            </a>
                                            <ul className="sub_menu language">
                                                {
                                                    Object.keys(this.state.language).map((ind) => {
                                                        return <li key={ind}
                                                                   className={`${this.state.currentLang.id == ind ? "active" : ""}`}
                                                                   onClick={() => this.changeLang({
                                                                       id: ind,
                                                                       name: this.state.language[ind]
                                                                   })}><a
                                                            className="sub_menu_link">{this.state.language[ind]}</a>
                                                        </li>
                                                    })
                                                }
                                            </ul>
                                        </li>
                                        : ""
                                }
                                {
                                    !this.state.loginToken ?
                                        <li className="drop_down_menu">
                                            <a href="#" className="menu_link services">Services</a>
                                            <ul className="sub_menu services">
                                                <li className="active"><a href="javascript:void(0)" className="sub_menu_link" onClick={()=>this.props.showForm('accountHelper', 'home')}>Help</a></li>
                                                <li><a href="javascript:void(0)" className="sub_menu_link" onClick={()=>this.props.showForm('responsibleGambling')}>Responsible Gambling</a></li>
                                                <li><a className="sub_menu_link">Banking</a></li>
                                            </ul>
                                        </li>
                                        : ""
                                }
                            </ul>

                            <div className="current_time">
                                <time id="doc_time">{this.state.clock}</time>
                            </div>

                        </div>
                        :""
                }

                {
                    this.state.pathname == "/poker" || this.state.pathname == "/poker/how-to-play"?
                        <div className="bottom_header bottom_header_search">
                            <div className="search_block">
                                <div className="search_icon">
                                    <svg className="search_loupe" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23">
                                        <path fillRule="evenodd"
                                              d="M16.12 8.06C16.12 3.61 12.51 0 8.06 0 3.61 0 0 3.61 0 8.06c0 4.45 3.61 8.06 8.06 8.06 1.795 0 3.452-.587 4.792-1.58l7.684 7.41.72.694 1.388-1.44-.72-.694-7.623-7.35c1.14-1.39 1.82-3.165 1.82-5.1zm-8.06 6.06c3.347 0 6.06-2.713 6.06-6.06C14.12 4.713 11.407 2 8.06 2 4.713 2 2 4.713 2 8.06c0 3.347 2.713 6.06 6.06 6.06z"></path>
                                    </svg>
                                </div>
                                <input type="text" placeholder="Search" className="input_search"/>
                                <div className="SearchHeader_CloseButton ">Close</div>
                            </div>

                            <ul className="second_menu">
                                <li><a href="javascript:void(0)" className="menu_link light_gray_text" onClick={()=>this.props.showForm('responsibleGambling')}>Responsible Gambling</a></li>

                                {/*<div className="divSubHeaderContainer">*/}
                                    <div className="navigation" style={{position: "absolute", left: "30%", fontSize: "12px" }}>
                                        <div className="innerNav">
                                            <ul>
                                                {/*<li className="First Selected"><a href="/poker/home" title="Home" >Home</a></li>*/}
                                                <li style={{position: "inherit"}}><a href="/poker/home" title="Home" >Home</a></li>
                                                <li><a href="javascript: void(0)" title="Play Poker" >Play</a></li>
                                                <li><a href="javascript: void(0)" title="Promotions" >Promotions</a></li>
                                                <li><a href="javascript: void(0)" title="Tournaments" >Tournaments</a></li>
                                                <li><a href="javascript: void(0)" title="Loyalty Club">Loyalty Club</a></li>
                                                <li><a href="javascript: void(0)" title="Get The App" >Get The App</a></li>
                                                <li className="Last"><a href="/poker/how-to-play" title="How To Play" >How To Play</a></li>

                                                {/*<li style={{position: "inherit"}}><a href="/poker/home" title="Home" >Home</a></li>*/}
                                                {/*<li><a href="/poker/play" title="Play Poker" >Play</a></li>*/}
                                                {/*<li><a href="/poker/promotions" title="Promotions" >Promotions</a></li>*/}
                                                {/*<li><a href="/poker/tournaments" title="Tournaments" >Tournaments</a></li>*/}
                                                {/*<li><a href="/poker/loyalty-club" title="Loyalty Club">Loyalty Club</a></li>*/}
                                                {/*<li><a href="/poker/mobile" title="Get The App" >Get The App</a></li>*/}
                                                {/*<li className="Last"><a href="/poker/how-to-play" title="How To Play" >How To Play</a></li>*/}
                                            </ul>
                                        </div>
                                    </div>
                                {/*</div>*/}
                                {
                                    !this.state.loginToken ?
                                        <li className="drop_down_menu">
                                            <a href="javascript:void(0)" className="menu_link drop light_gray_text">Language
                                                <span
                                                    className="selected_option light_gray_text">{this.state.currentLang.name}</span>
                                            </a>
                                            <ul className="sub_menu language">
                                                {
                                                    Object.keys(this.state.language).map((ind) => {
                                                        return <li key={ind}
                                                                   className={`${this.state.currentLang.id == ind ? "active" : ""}`}
                                                                   onClick={() => this.changeLang({
                                                                       id: ind,
                                                                       name: this.state.language[ind]
                                                                   })}><a
                                                            className="sub_menu_link">{this.state.language[ind]}</a>
                                                        </li>
                                                    })
                                                }
                                            </ul>
                                        </li>
                                        : ""
                                }
                                {
                                    !this.state.loginToken ?
                                        <li className="drop_down_menu">
                                            <a href="#" className="menu_link services light_gray_text">Services</a>
                                            <ul className="sub_menu services">
                                                <li className="active"><a href="javascript:void(0)" className="sub_menu_link" onClick={()=>this.props.showForm('accountHelper', 'home')}>Help</a></li>
                                                <li><a href="javascript:void(0)" className="sub_menu_link" onClick={()=>this.props.showForm('responsibleGambling')}>Responsible Gambling</a></li>
                                                <li><a className="sub_menu_link">Banking</a></li>
                                            </ul>
                                        </li>
                                        : ""
                                }

                            </ul>

                            <div className="current_time">
                                <time id="doc_time">{this.state.clock}</time>
                            </div>

                        </div>
                        :""
                }

                {
                    this.state.pathname == "/vegas" || this.state.pathname == "/vegas/vegas_home" || this.state.pathname == "/vegas/vegas_promotions" || this.state.pathname == "/vegas/vegas_new_games" || this.state.pathname == "/vegas/vegas_mobile" ||  this.state.pathname == "/bingo" ||  this.state.pathname == "/bingo/bingo_home" ||  this.state.pathname == "/bingo/bingo_games" ||  this.state.pathname == "/bingo/bingo_promotions" ||  this.state.pathname == "/bingo/bingo_community" ||  this.state.pathname == "/bingo/bingo_mobile" ?
                        <div className="bottom_header bottom_header_search">

                            <ul className="second_menu">
                                <li><a href="javascript:void(0)" className="menu_link light_green_text" onClick={()=>this.props.showForm('accountHelper', 'home')}>Help</a></li>
                                <li><a href="javascript:void(0)" className="menu_link light_green_text" onClick={()=>this.props.showForm('responsibleGambling')}>Responsible Gambling</a></li>

                                <li className="drop_down_menu">
                                    <a href="javascript:void(0)" className="menu_link drop light_green_text">Language
                                        <span className="selected_option">{this.state.currentLang.name}</span>
                                    </a>
                                    <ul className="sub_menu language">
                                        <li className="active"><a className="sub_menu_link">English</a></li>
                                        {
                                            Object.keys(this.state.language).map((ind) => {
                                                return <li key={ind} className={`${this.state.currentLang.id == ind ? "active": ""}`} onClick={() => this.changeLang({id: ind, name: this.state.language[ind]})}><a className="sub_menu_link" >{this.state.language[ind]}</a></li>
                                            })
                                        }
                                    </ul>
                                </li>
                                {
                                    !this.state.loginToken ?
                                        <li className="drop_down_menu">
                                            <a href="#" className="menu_link services">Services</a>
                                            <ul className="sub_menu services">
                                                <li className="active"><a href="javascript:void(0)" className="sub_menu_link" onClick={()=>this.props.showForm('accountHelper', 'home')}>Help</a></li>
                                                <li><a href="javascript:void(0)" className="sub_menu_link" onClick={()=>this.props.showForm('responsibleGambling')}>Responsible Gambling</a></li>
                                                <li><a className="sub_menu_link">Banking</a></li>
                                            </ul>
                                        </li>
                                        : ""
                                }
                            </ul>

                            <div className="current_time left">
                                <time id="doc_time">{this.state.clock}</time>
                            </div>

                        </div>
                        : ""
                }
                        
                        <div className="HeaderPod">
                            <nav className="HeaderPod_Nav">
                                <div className="HeaderLink HeaderLinkAtoz_SidebarLauncher">
                                    <span>A-Z</span>
                                </div>
                                <div className="HeaderLink HeaderLinkInplay_Launcher">
                                    <span>In-Play</span>
                                </div>
                                <div className="HeaderLink HeaderLink_Highlighted HeaderLinkHome_Launcher">
                                    <div className="HeaderLinkHome_LauncherLogo"></div>
                                </div>
                                <div className="HeaderLink HeaderLinkJoin_Launcher">
                                    <span>Join</span>
                                </div>
                                <div className="HeaderLink HeaderLinkLogin_Launcher">
                                    <span>Log In</span>
                                </div>
                                <span className="HeaderPod_CurrentIndicator HeaderPod_CurrentIndicatorDisplayed "></span>
                                <div className="HeaderLinkHome_Cover"></div>
                            </nav>
                        </div>

            </header>
        )

    }
}

export default Header;
