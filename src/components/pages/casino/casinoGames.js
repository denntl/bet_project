import React from 'react';
import {Link} from "react-router-dom";

const DOMAIN = "https://bet-adm-new.it-office.pp.ua/";

class CasinoGames extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            casinoGames:this.props.casinoGames,
            typeBlock: this.props.typeBlock,
            selectedGame:this.props.selectedGame
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            casinoGames: nextProps.casinoGames,
            typeBlock: nextProps.typeBlock,
            selectedGame:nextProps.selectedGame
        });
    }
    goPageGame = (typeBlock = false) => {
            this.props.goPageGame(typeBlock)
    }

    render() {
        return(

            <div className="block-games-grid">
                <svg className="block-games-grid__filter" >
                    <filter id="block-games-grid-duotone-filter">
                        <feColorMatrix type="saturate" values="0.10"></feColorMatrix>
                        <feComponentTransfer colorInterpolationFilters="sRGB" result="duotone">
                            <feFuncR type="table" tableValues="0.01568627451 0.1294117647"></feFuncR>
                            <feFuncG type="table" tableValues="0.1019607843 0.8"></feFuncG>
                            <feFuncB type="table" tableValues="0.09411764706 0.7450980392"></feFuncB>
                            <feFuncA type="table" tableValues="0 1"></feFuncA>
                        </feComponentTransfer>
                    </filter>
                </svg>
                <div className="block-games">
                {this.state.casinoGames.map((game,i)=>{

                    return<Link to={{
                                    pathname: '/casino/casino_home/game',
                                    search: (game.type == 'live casino' ? 'liveCasinoId=' : 'id=')+game.id
                                    }} className="block-games-prod" key={game.name+i}>

                                <div className="image-container-wrapp">
                                    <div className="image-container">
                                        {game.image_path != null ?
                                            <img src={DOMAIN + game.image_path} className="games-prod-img" alt="game"/>
                                            :
                                            <img src="/img/500x347-Gamepod-AgeOfGods-GodOFStorms.jpg"
                                                 className="games-prod-img" alt="game"/>
                                        }
                                    </div>
                                    <div className="game-prod-overlay" onClick={()=>this.props.getDataSelectedGame(game)} >
                                        <div className="overlay_text" >Play Now</div>
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
            )

    }
}

export default CasinoGames;