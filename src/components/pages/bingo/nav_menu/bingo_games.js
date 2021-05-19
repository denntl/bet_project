import React from "react";
import BingoFeatured from "../games_menu/bingo_featured";
import BingoSlots from "../games_menu/bingo_slots";
import BingoMultiplayer from "../games_menu/bingo_multiplayer";
import BingoScratchcards from "../games_menu/bingo_scratchcards";
import BingoCasino from "../games_menu/bingo_casino";
import BingoOthers from "../games_menu/bingo_others";


class BingoGames extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bingo_featured: true,
            bingo_slots: false,
            bingo_multiplayer: false,
            bingo_scratchcards: false,
            bingo_casino: false,
            bingo_others: false
        };
    }
        changeTab(tab)
        {
            if (tab == 'bingo_featured') {
                this.setState({
                    bingo_featured: true,
                    bingo_slots: false,
                    bingo_multiplayer: false,
                    bingo_scratchcards: false,
                    bingo_casino: false,
                    bingo_others: false
                })
            }
            if (tab == 'bingo_slots') {
                this.setState({
                    bingo_featured: false,
                    bingo_slots: true,
                    bingo_multiplayer: false,
                    bingo_scratchcards: false,
                    bingo_casino: false,
                    bingo_others: false
                })
            }
            if (tab == 'bingo_multiplayer') {
                this.setState({
                    bingo_featured: false,
                    bingo_slots: false,
                    bingo_multiplayer: true,
                    bingo_scratchcards: false,
                    bingo_casino: false,
                    bingo_others: false
                })
            }
            if (tab == 'bingo_scratchcards') {
                this.setState({
                    bingo_featured: false,
                    bingo_slots: false,
                    bingo_multiplayer: false,
                    bingo_scratchcards: true,
                    bingo_casino: false,
                    bingo_others: false
                })
            }
            if (tab == 'bingo_casino') {
                this.setState({
                    bingo_featured: false,
                    bingo_slots: false,
                    bingo_multiplayer: false,
                    bingo_scratchcards: false,
                    bingo_casino: true,
                    bingo_others: false
                })
            }
            if (tab == 'bingo_others') {
                this.setState({
                    bingo_featured: false,
                    bingo_slots: false,
                    bingo_multiplayer: false,
                    bingo_scratchcards: false,
                    bingo_casino: false,
                    bingo_others: true
                })
            }

    }

    render() {
        return (
            <div className="MainContainerGames">
                <nav className="GamesNavigator Bingo">
                    <a className={`game-link ${this.state.bingo_featured ? 'active' : ''}`} href="#" onClick={(e) => {e.preventDefault(); this.changeTab('bingo_featured'); }}>Featured</a>
                    <a className={`game-link ${this.state.bingo_slots ? 'active' : ''}`} href="#" onClick={(e) => {e.preventDefault(); this.changeTab('bingo_slots')}}>Slots</a>
                    <a className={`game-link ${this.state.bingo_multiplayer ? 'active' : ''}`} href="#" onClick={(e) => {e.preventDefault(); this.changeTab('bingo_multiplayer')}}>Multiplayer</a>
                    <a className={`game-link ${this.state.bingo_scratchcards ? 'active' : ''}`} href="#" onClick={(e) => {e.preventDefault(); this.changeTab('bingo_scratchcards')}}>Scratchcards</a>
                    <a className={`game-link ${this.state.bingo_casino ? 'active' : ''}`} href="#" onClick={(e) => {e.preventDefault(); this.changeTab('bingo_casino')}}>Casino</a>
                    <a className={`game-link ${this.state.bingo_others ? 'active' : ''}`} href="#" onClick={(e) => {e.preventDefault(); this.changeTab('bingo_others')}}>Other</a>
                </nav>
                <div className="GamesInner">
                    {this.state.bingo_featured ? <BingoFeatured/> : ""}
                    {this.state.bingo_slots ? <BingoSlots/> : ""}
                    {this.state.bingo_multiplayer ? <BingoMultiplayer/> : ""}
                    {this.state.bingo_scratchcards ? <BingoScratchcards/> : ""}
                    {this.state.bingo_casino ? <BingoCasino/> : ""}
                    {this.state.bingo_others ? <BingoOthers/> : ""}
                </div>
            </div>
        )
    }
}
export default BingoGames;