import React from 'react';




class TableCard extends React.Component {
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
                        <img src="/img/prodImg17.jpg" alt="product image"/>
                        <div className="ProdJackpot" >$215,456.31</div>
                    </div>
                    <div className="ProdName">Casino Hold'em Poker</div>
                </div>
                <div className="GamesProd">
                    <div className="ProdImageWrapper">
                        <img src="/img/prodImg18.jpg" alt="product image"/>
                        <div className="ProdJackpot" >$215,456.31</div>
                    </div>
                    <div className="ProdName">Baccarat Professional Series</div>
                </div>
                <div className="GamesProd">
                    <div className="ProdImageWrapper">
                        <img src="/img/prodImg19.jpg" alt="product image"/>
                        {/*<div className="ProdJackpot" >$215,456.31</div>*/}
                    </div>
                    <div className="ProdName">Double Exposure Blackjack Pro</div>
                </div>
                <div className="GamesProd">
                    <div className="ProdImageWrapper">
                        <img src="/img/prodImg20.jpg" alt="product image"/>
                        {/*<div className="ProdJackpot" >$215,456.31</div>*/}
                    </div>
                    <div className="ProdName">TXS Hold'em Professional Series</div>
                </div>
                <div className="GamesProd">
                    <div className="ProdImageWrapper">
                        <img src="/img/prodImg21.jpg" alt="product image"/>
                        {/*<div className="ProdJackpot" >$215,456.31</div>*/}
                    </div>
                    <div className="ProdName">Oasis Poker Professional Series</div>
                </div>
                <div className="GamesProd">
                    <div className="ProdImageWrapper">
                        <img src="/img/prodImg22.jpg" alt="product image"/>
                        {/*<div className="ProdJackpot" >$215,456.31</div>*/}
                    </div>
                    <div className="ProdName">Red Dog Progressive</div>
                </div>
            </div>
        )

    }
}

export default TableCard;