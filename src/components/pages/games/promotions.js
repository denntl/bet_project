import React from 'react';




class PromotionsGames extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(                    
                <div className="main-content-wrapper promotions-page">
                    <div className="promotions-page__container">
                                <div className="GamesPromoPod clickablePodHover" data-component-type="GamesPromoPod" data-promocode="">
                                    <div className="PodImage">
                                        <img src="https://content001.bet365.com/Games/v3/Promotions/NewPlayerBonus2018/500x500-Games-Pods-NewPlayerBonus2018.jpg" alt="Up to $100 New Player Bonus" />
                                    </div>
                                    <div className="PodContent">
                                        <div className="MainHeader">Up to $100 New Player Bonus</div>
                                        <div className="SubHeader">Deposit between $20 and $100 to claim. Wager 30x on eligible games. Bonus will be matched to qualifying deposit. Time limits, game restrictions and T&amp;Cs apply.</div>                        
                                        <div className="Buttons">
                                            <a href="#" className="ReadMoreButton" >Read More</a>
                                            <a href="#" className="FlexibleButton">Join Now</a>                       
                                        </div>
                                    </div>                            
                                </div>
                            
                                <div className="GamesPromoPod clickablePodHover" data-component-type="GamesPromoPod" data-promocode="">
                                    <div className="PodImage">
                                        <img src="https://content001.bet365.com/Games/v3/Promotions/DoubleYourWinnings/DoubleYourWinnings_500x500.jpg" alt="Double Your Winnings up to $50" />
                                    </div>
                                    <div className="PodContent">
                                        <div className="MainHeader">Double Your Winnings up to $50</div>
                                        <div className="SubHeader">Opt in required. Wager $100 cash in a minimum of 10 spins on relevant featured game. Promotion runs every Thursday in October 2018. Total winnings from $2 up to $50 cash will be matched and must be accepted. Time limits, game restrictions and T&amp;Cs apply.</div>                    
                                        <div className="Buttons">
                                            <a href="#" className="ReadMoreButton" >Read More</a> 
                                        </div>
                                    </div>                        
                                </div>
                    </div> 
                </div>
        )

    }
}

export default PromotionsGames;
