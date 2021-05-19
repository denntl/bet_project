import React from 'react';




class PremiumSlots extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="games_list">
                <div className="GamesProd">
                    <div className="ProdImageWrapper">
                        <img src="/img/prodImg12.jpg" alt="product image"/>
                    </div>
                    <div className="ProdName">Tut's Twister</div>
                </div>

                <div className="GamesProd">
                    <div className="ProdImageWrapper">
                        <img src="/img/prodImg31.jpg" alt="product image"/>
                      </div>
                    <div className="ProdName">Halloween Jack</div>
                </div>
                <div className="GamesProd">
                    <div className="ProdImageWrapper">
                        <img src="/img/prodImg3.jpg" alt="product image"/>
                    </div>
                    <div className="ProdName">Coins of Egypt</div>
                </div>
                <div className="GamesProd">
                    <div className="ProdImageWrapper">
                        <img src="/img/prodImg6.jpg" alt="product image"/>
                    </div>
                    <div className="ProdName">Berryburst</div>
                </div>
                <div className="GamesProd">
                    <div className="ProdImageWrapper">
                        <img src="/img/prodImg5.jpg" alt="product image"/>
                    </div>
                    <div className="ProdName">Double Stacks</div>
                </div>
                <div className="GamesProd">
                    <div className="ProdImageWrapper">
                        <img src="/img/prodImg15.jpg" alt="product image"/>
                    </div>
                    <div className="ProdName">Valley of the Gods</div>
                </div>
                <div className="GamesProd">
                    <div className="ProdImageWrapper">
                        <img src="/img/prodImg4.jpg" alt="product image"/>
                    </div>
                    <div className="ProdName">Wolf Hunters</div>
                </div>
                <div className="GamesProd">
                    <div className="ProdImageWrapper">
                        <img src="/img/prodImg32.jpg" alt="product image"/>
                    </div>
                    <div className="ProdName">Nirvana</div>
                </div>

            </div>
        )

    }
}

export default PremiumSlots;