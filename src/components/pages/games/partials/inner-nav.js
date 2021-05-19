import React from 'react';
import {NavLink} from "react-router-dom";



class InnerNavGames extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div  className="innerNav">
                <ul>
                    <li className="First Selected"><NavLink to="/games/home" title="Home" >Home</NavLink></li>
                    <li className=""><NavLink to="/games/all-games" title="All Games" >All Games</NavLink></li>
                     <li className="Last"><NavLink to="/games/promotions" title="Promotions" >Promotions</NavLink></li>            
                </ul>
            </div>
        )

    }
}

export default InnerNavGames;
