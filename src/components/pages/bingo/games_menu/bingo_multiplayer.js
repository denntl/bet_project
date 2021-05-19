import React from 'react';




class BingoMultiplayer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="games_list_bingo">
                <div className="GamesProd">
                    <div className="ProdImageWrapper">
                        <img src="/img/CloverCountdown_420x420_Jul18.jpg" alt="Clover Countdown"/>
                        <div className="prodJackpot"></div>
                    </div>
                    <div className="ProdDetailsWrapper">
                        <img src="/img/CloverCountdown_Aug18_200x151.jpg" alt="Prod Detail"/>
                        <table className="ProdDetailsTable">
                            <tbody>
                            <tr>
                                <td className="PromotionalText">
                                    Look for the lucky four-leaf clover!
                                </td>
                                <td className="MinimumBet"><span>25p</span></td>
                                <td className="gameButton playButton"><span>Play</span></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="ProdName">Clover Countdown</div>
                </div>
                <div className="GamesProd">
                    <div className="ProdImageWrapper">
                        <img src="/img/DONDTheMoneyLadder_420x420.jpg" alt="DOND The Money Ladder"/>
                        <div className="prodJackpot"></div>
                    </div>
                    <div className="ProdDetailsWrapper">
                        <img src="/img/DONDMoneyLadder_200x151.jpg" alt="Prod Detail"/>
                        <table className="ProdDetailsTable">
                            <tbody>
                            <tr>
                                <td className="PromotionalText">
                                    Climb the ladder for a share of the jackpot.
                                </td>
                                <td className="MinimumBet"><span>2p</span></td>
                                <td className="gameButton playButton"><span>Play</span></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="ProdName">DOND The Money Ladder</div>
                </div>
                <div className="GamesProd">
                <div className="ProdImageWrapper">
                    <img src="/img/MarineMayhem_v2_420x420.jpg" alt="Marine Mayhem"/>
                    <div className="prodJackpot"></div>
                </div>
                <div className="ProdDetailsWrapper">
                    <img src="/img/MarineMayhem_200x151_v2.jpg" alt="Prod Detail"/>
                    <table className="ProdDetailsTable">
                        <tbody>
                        <tr>
                            <td className="PromotionalText">
                                Look for the lucky four-leaf clover!
                            </td>
                            <td className="MinimumBet"><span>£0.05</span></td>
                            <td className="gameButton playButton"><span>Play</span></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="ProdName">Marine Mayhem</div>
            </div>

                <div className="GamesProd">
                    <div className="ProdImageWrapper">
                        <img src="/img/MultiBalls_420x420_Oct17.jpg" alt="Multi Balls"/>
                        <div className="prodJackpot"></div>
                    </div>
                    <div className="ProdDetailsWrapper">
                        <img src="/img/Multiballs_200x151_Oct17.jpg" alt="Prod Detail"/>
                        <table className="ProdDetailsTable">
                            <tbody>
                            <tr>
                                <td className="PromotionalText">
                                    Create combos for a share of the pot.
                                </td>
                                <td className="MinimumBet"><span>£0.05</span></td>
                                <td className="gameButton playButton"><span>Play</span></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="ProdName">Multi Balls</div>
                </div>


            </div>

        )

    }
}

export default BingoMultiplayer;