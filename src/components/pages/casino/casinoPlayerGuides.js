import React from 'react';
import CasinoFullPlayerGuides from "./casinoFullPlayerGuides";



class CasinoPlayerGuides extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            isFullPlayerGuides:false,
            fullPlayerGuides:"playBaccarat"

        }
    }
    togglePlayerGuides=(name)=>{
        this.setState({
            isFullPlayerGuides:!this.state.isFullPlayerGuides,
            fullPlayerGuides:name
        })
    }
    render() {
        console.log('isFullPlayerGuides:', this.state.isFullPlayerGuides)
        return(
            <div className="MainContainerGames Casino">
                {this.state.isFullPlayerGuides == false ?
                    <div className="casino_short_PlayerGuides">
                        <div className="casino_offers">
                            <div className="casino_offer_img">
                                <img src="../img/Casino_PlayerGuides_Baccarat_1200x300.jpg" alt="offer_img"/>
                            </div>
                            <div className="casino_offer_details">
                                <div className="offer_details_header">Learn to play Baccarat</div>
                                <div className="casino_btn casino_offer bordered" onClick={()=>this.togglePlayerGuides('playBaccarat')}>See Player Guide</div>
                            </div>
                        </div>
                        <div className="casino_offers">
                            <div className="casino_offer_img">
                                <img src="../img/Casino_PlayerGuides_Blackjack_1200x300_V2.jpg" alt="offer_img"/>
                            </div>
                            <div className="casino_offer_details">
                                <div className="offer_details_header">Learn to play Blackjack</div>
                                <div className="casino_btn casino_offer bordered" onClick={()=>this.togglePlayerGuides('playBlackjack')}>See Player Guide</div>
                            </div>
                        </div>
                        <div className="casino_offers">
                            <div className="casino_offer_img">
                                <img src="../img/Casino_PlayerGuidesRoulette_1200x300.jpg" alt="offer_img"/>
                            </div>
                            <div className="casino_offer_details">
                                <div className="offer_details_header">Learn to play Roulette</div>
                                <div className="casino_btn casino_offer bordered" onClick={()=>this.togglePlayerGuides('playRoulette')}>See Player Guide</div>
                            </div>
                        </div>
                    </div>
                :
                    <div className="casino_full_PlayerGuides">
                        <CasinoFullPlayerGuides fullPlayerGuides={this.state.fullPlayerGuides}/>
                    </div>
                }

            </div>
        )

    }
}

export default CasinoPlayerGuides;