import React from 'react';




class Jackpots extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="games_list">
                <div className="GamesProd">
                    <div className="ProdImageWrapper">
                        <img src="/img/prodImg1.jpg" alt="product image"/>
                        <div className="ProdImgOverlay"></div>
                    </div>
                    <div className="ProdName">Blackjack Professional Series</div>
                </div>

                <div className="GamesProd">
                    <div className="ProdImageWrapper">
                        <img src="/img/prodImg1.jpg" alt="product image"/>
                    </div>
                    <div className="ProdName">Blackjack Professional Series</div>
                </div>
                <div className="GamesProd">
                    <div className="ProdImageWrapper">
                        <img src="/img/prodImg16.jpg" alt="product image"/>
                        <div className="ProdJackpot" >$215,456.31</div>
                    </div>
                    <div className="ProdName">Holmes and the Stolen Stones</div>
                </div>
            </div>




        )

    }
}

export default Jackpots;