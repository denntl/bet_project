import React from 'react';
import CasinoGames from "./casinoGames";
import qs from "query-string";
import {Link} from "react-router-dom";

const DOMAIN = "https://bet-adm-new.it-office.pp.ua/";

class CasinoPageGame extends React.Component {
    constructor(props) {
        super(props);
        let idGame, fromPage ;

        if (typeof this.props.location != "undefined") {
             idGame =  qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).id;
             if(typeof idGame == 'undefined'){
                 idGame =  qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).liveCasinoId;
             }

             fromPage = this.props.location.state;
        }


        console.log("select", typeof this.props.selectedGame != "undefined" ? this.props.selectedGame : JSON.parse(window.localStorage.getItem("selectedCasinoGame")))


        this.state={
            selectedGame: typeof this.props.selectedGame != "undefined" ? this.props.selectedGame : JSON.parse(window.localStorage.getItem("selectedCasinoGame")),
            casinoGames:this.props.casinoGames,
            randomArr:this.props.casinoGames.sort(()=>.5 - Math.random()).slice(0,4),
            idSelectedGame: idGame,
            getDataSelectedGame:this.props.getDataSelectedGame,
            fromPage:fromPage

        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.casinoGames != this.state.casinoGames) {
            let game;
            if (typeof this.props.location != "undefined") {
                game = this.state.casinoGames.find((el, i, arr) => el.id == this.state.idSelectedGame ? arr[i] : false);

                if(typeof game != "undefined"){
                    this.setState({
                        selectedGame: game
                    })
                }
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        //console.log("nextP", nextProps)
        this.setState({
            casinoGames: nextProps.casinoGames,
            selectedGame: nextProps.selectedGame,
            randomArr:nextProps.casinoGames.sort(()=>.5 - Math.random()).slice(0,4),
        });
    }

    resizeIframe=()=>{
        if ($(".blockWithGame").hasClass('maximized')) {
            $(".blockWithGame").removeClass('maximized')
        } else {
            $(".blockWithGame").addClass('maximized')
        }
    }

    render() {
        //  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@", this.state.selectedGame);
        // console.log('randomArr', this.state, this.props)
        return(
            <div className="fullGameContainer">
                <div className="blockWithGame" style={{backgroundImage:"url(" + DOMAIN + this.state.selectedGame.image_path + ")"}}>
                    <div className="iframe_header">
                        {this.state.fromPage == "liveCasino" ?
                            <Link to="/live_casino" className="left_content"  >Lobby</Link>
                        :
                            <Link to="/casino/casino_home" className="left_content"  >Lobby</Link>
                        }


                        <div className="center_content">{this.state.selectedGame.name}</div>
                        <div className="right_content" onClick={()=>this.resizeIframe()}></div>
                    </div>
                    <iframe className="iframe_game_container" scrolling="no" src={this.state.selectedGame.url} frameBorder="0" allowFullScreen> </iframe>
                </div>
                <div className="alsoLikeBlock">
                    <div className="alsoLikeHeader">You might also like</div>
                    <div className="proposeGames">
                            <CasinoGames casinoGames={this.state.randomArr}  selectedGame={this.state.selectedGame} getDataSelectedGame={this.props.getDataSelectedGame}/>
                    </div>
                </div>

            </div>
        )

    }
}

export default CasinoPageGame;