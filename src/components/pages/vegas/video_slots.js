import React from 'react';




class VideoSlots extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="games_list">
                <div className="GamesProd">
                    <div className="ProdImageWrapper">
                        <img src="/img/prodImg23.jpg" alt="product image"/>
                        <div className="ProdImgOverlay"></div>
                    </div>
                    <div className="ProdName">Reptoids</div>
                </div>

                <div className="GamesProd">
                    <div className="ProdImageWrapper">
                        <img src="/img/prodImg24.jpg" alt="product image"/>
                    </div>
                    <div className="ProdName">Incinerator</div>
                </div>
                <div className="GamesProd">
                    <div className="ProdImageWrapper">
                        <img src="/img/prodImg25.jpg" alt="product image"/>
                        {/*<div className="ProdJackpot" >$215,456.31</div>*/}
                    </div>
                    <div className="ProdName">Legend of the Golden Monkey</div>
                </div>
                <div className="GamesProd">
                    <div className="ProdImageWrapper">
                        <img src="/img/prodImg26.jpg" alt="product image"/>
                        <div className="ProdJackpot" >$215,456.31</div>
                    </div>
                    <div className="ProdName">Power Plant</div>
                </div>
                <div className="GamesProd">
                    <div className="ProdImageWrapper">
                        <img src="/img/prodImg27.jpg" alt="product image"/>
                        {/*<div className="ProdJackpot" >$215,456.31</div>*/}
                    </div>
                    <div className="ProdName">Pumpkin Smash</div>
                </div>
                <div className="GamesProd">
                    <div className="ProdImageWrapper">
                        <img src="/img/prodImg28.jpg" alt="product image"/>
                        {/*<div className="ProdJackpot" >$215,456.31</div>*/}
                    </div>
                    <div className="ProdName">Doubles</div>
                </div>
                <div className="GamesProd">
                    <div className="ProdImageWrapper">
                        <img src="/img/prodImg29.jpg" alt="product image"/>
                        {/*<div className="ProdJackpot" >$215,456.31</div>*/}
                    </div>
                    <div className="ProdName">Winterberries</div>
                </div>
                <div className="GamesProd">
                    <div className="ProdImageWrapper">
                        <img src="/img/prodImg30.jpg" alt="product image"/>
                        {/*<div className="ProdJackpot" >$215,456.31</div>*/}
                    </div>
                    <div className="ProdName">Spiña Colada</div>
                </div>
            </div>
        )

    }
}

export default VideoSlots;