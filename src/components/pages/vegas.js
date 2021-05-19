import React from 'react';
import FooterVegas from "../footer_vegas";
import {NavLink, Route, Switch} from "react-router-dom";
import VegasHome from "./vegas/nav_menu/vegas_home";
import VegasPromotions from "./vegas/nav_menu/vegas_promotions";
import VegasNewGames from "./vegas/nav_menu/vegas_new_games";
import VegasMobile from "./vegas/nav_menu/vegas_mobile";




class Vegas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHome: true,
            isPromotion:false,
            isNew_games:false,
            isMobile:false
        }
    }
    changeWidth = (home) =>{
        console.log('changeWidth home: ',home);
        if(home === 'isHome'){this.setState({
            isHome:true,
            isPromotion:false,
            isNew_games:false,
            isMobile:false
        })}
        if(home === 'isPromotion'){this.setState({
            isHome: false,
            isPromotion:true,
            isNew_games:false,
            isMobile:false
        })}
        if(home === 'isNew_games'){this.setState({
            isHome: false,
            isPromotion:false,
            isNew_games:true,
            isMobile:false
        })}
        if(home === 'isMobile'){this.setState({
            isHome: false,
            isPromotion:false,
            isNew_games:false,
            isMobile:true
        })}
        //else this.setState({isHome:false});
    };

    render() {
        return(
            <div className="Content VegasPage" >
                <div className="SubHeaderContainer">
                    <div className="NavigationWrapper">
                        <nav className="Navigation">
                            <ul style={(this.state.isHome)?({'width':812}):({'width':950})}>
                                <li className={`top-link ${this.state.isHome ? 'active' : ''}`}><NavLink to="/vegas/vegas_home" title="Home" onClick = {(e)=>this.changeWidth('isHome')} >Home</NavLink></li>
                                <li className={`top-link ${this.state.isPromotion ? 'active' : ''}`}><NavLink to="/vegas/vegas_promotions" title="Promotions" onClick={(e)=>this.changeWidth('isPromotion')} >Promotions</NavLink></li>
                                <li className={`top-link ${this.state.isNew_games ? 'active' : ''}`}><NavLink to="/vegas/vegas_new_games" title="New games" onClick={(e)=>this.changeWidth('isNew_games')} >New Games</NavLink></li>
                                <li className={`top-link ${this.state.isMobile ? 'active' : ''}`}><NavLink to="/vegas/vegas_mobile" title="Mobile" onClick={(e)=>this.changeWidth('isMobile')} >Mobile</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <Switch>
                    <Route  exact path="/vegas" render={() => <VegasHome/>}/>
                    <Route  path="/vegas/vegas_home" render={() => <VegasHome/>}/>
                    <Route  path="/vegas/vegas_promotions" render={() => <VegasPromotions/>}/>
                    <Route  path="/vegas/vegas_new_games" render={() => <VegasNewGames/>}/>
                    <Route  path="/vegas/vegas_mobile" render={() => <VegasMobile/>}/>
                </Switch>
                <FooterVegas/>
            </div>

        )

    }
}

export default Vegas;

