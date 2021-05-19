import React from 'react';




class BingoOthers extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="games_list_bingo">
                <div className="GamesProd">
                    <div className="ProdImageWrapper">
                        <img src="/img/TikiParadise-MaskOfMayhem_420x420.jpg" alt="Tiki Paradise - Mask Of Mayhem"/>
                        <div className="prodJackpot"></div>
                    </div>
                    <div className="ProdDetailsWrapper">
                        <img src="/img/TikiParadise-MaskOfMayhem_200x151.jpg" alt="Prod Detail"/>
                        <table className="ProdDetailsTable">
                            <tbody>
                            <tr>
                                <td className="GameDetails">
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td className="Title1">Lines</td>
                                            <td className="Title1Text">25</td>
                                        </tr>
                                        <tr>
                                            <td className="Title2">Reels</td>
                                            <td className="Title2Text">5</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td className="MinimumBet"><span>25p</span></td>
                                <td className="gameButton playButton"><span>Play</span></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="ProdName">Tiki Paradise</div>
                </div>
                <div className="GamesProd">
                    <div className="ProdImageWrapper">
                        <img src="/img/AgeOfTheGodsKingOfTheUnderworld_420x420.jpg" alt="Age Of The Gods King Of The Underworld"/>
                        <div className="prodJackpot"></div>
                    </div>
                    <div className="ProdDetailsWrapper">
                        <img src="/img/AgeOfTheGodsKingOfTheUnderworld_Aug18_200x151.jpg" alt="Prod Detail"/>
                        <table className="ProdDetailsTable">
                            <tbody>
                            <tr>
                                <td className="GameDetails">
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td className="Title1">Lines</td>
                                            <td className="Title1Text">25</td>
                                        </tr>
                                        <tr>
                                            <td className="Title2">Reels</td>
                                            <td className="Title2Text">5</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td className="MinimumBet"><span>25p</span></td>
                                <td className="gameButton playButton"><span>Play</span></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="ProdName">King of the Underworld</div>
                </div>
                <div className="GamesProd">
                    <div className="ProdImageWrapper">
                        <img src="/img/AoG-LordOfTheLightening_420x420.jpg" alt="Lord Of Lightning"/>
                        <div className="prodJackpot"></div>
                    </div>
                    <div className="ProdDetailsWrapper">
                        <img src="/img/AoG-LordOfTheLightening_200x151.jpg" alt="Prod Detail"/>
                        <table className="ProdDetailsTable">
                            <tbody>
                            <tr>
                                <td className="GameDetails">
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td className="Title1">Lines</td>
                                            <td className="Title1Text">20</td>
                                        </tr>
                                        <tr>
                                            <td className="Title2">Reels</td>
                                            <td className="Title2Text">5</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td className="MinimumBet"><span>£0.05</span></td>
                                <td className="gameButton playButton"><span>Play</span></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="ProdName">Lord Of Lightning</div>
                </div>


            </div>

        )

    }
}

export default BingoOthers;