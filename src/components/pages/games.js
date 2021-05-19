import React from 'react';
import {Switch, Route} from 'react-router-dom';
import InnerNavGames from "./games/partials/inner-nav";
import Home from "./games/home";
import AllGames from "./games/all-games";
import Promotions from "./games/promotions";
import '../../../assets/style/games-page-styles.css';
import FooterGames from "../footer_games";



class HomeGames extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(

            <div className="main_content game-pages">
                <div  className="divSubHeaderContainer gamesPage">
                    <div  className="SearchBar" data-component-type="SearchBar">
                        <div  className="searchIcon"></div>
                        <input type="text" data-full-placeholder="Search Game" data-short-placeholder="Search" placeholder="Search" />
                        <div  className="close"></div>
                        <ul  className="SearchResults"></ul>
                    </div>
                    <div  className="navigation">
                        <InnerNavGames/>
                    </div>
                </div>
                <Switch>
                    <Route  exact path="/games" render={() => <Home/>}/>
                    <Route  path="/games/home" render={() => <Home/>}/>
                    <Route  path="/games/all-games" render={() => <AllGames/>}/>
                    <Route  path="/games/promotions" render={() => <Promotions/>}/>
                </Switch>
                <FooterGames/>
            </div>
        )

    }
}

export default HomeGames;
