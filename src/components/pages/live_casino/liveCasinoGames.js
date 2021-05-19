import React from 'react';
import {Link} from "react-router-dom";



class LiveCasinoGames extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            casinoGames:this.props.casinoGames,
            selectedGame:this.props.selectedGame
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            casinoGames: nextProps.casinoGames,
            selectedGame:nextProps.selectedGame
            //typeBlock: nextProps.typeBlock
        });
    }


    render() {
        return(

            <div className="block-games-grid">
                <div className="block-games">
                    <div style={{margin: '100px 0 0 10px'}}>


                    {this.state.casinoGames.map((game,i)=>{
                        return<Link to={{
                            pathname: '/casino/casino_home/game',
                            search: 'liveCasinoId=' + game.id,
                            state:"liveCasino"
                            }} className="block-games-prod" key={game.name+i}>
                            <div className="image-container-wrapp">
                                <div className="image-container">
                                    <img src="../../img/500x347-Gamepod-AgeOfGods-GodOFStorms.jpg" className="games-prod-img" alt="game"/>
                                </div>
                                <div className="game-prod-overlay"  onClick={()=>this.props.getDataSelectedGame(game)}>
                                    <div className="overlay_text" >Play</div>
                                </div>
                                <div className="game-prod-components">
                                    <div className="game-prod-exclusive">Exclusive to bet365</div>
                                    <div className="game-prod-jackpot">€655,127.55</div>
                                </div>
                            </div>
                            <div className="block-games-title">{game.name}</div>
                        </Link>
                    })}

                    </div>

                </div>
            </div>
        )

    }
}

export default LiveCasinoGames;