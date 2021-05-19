import React from 'react';

// const defaultTabState = {
//     'playerToScore': '',
//     'playerCard': '',
//     'result': '',
//     'doubleChance': '',
//     'totalGoals': '',
//     'halfFullTime': '',
//     'score': '',
//     'goalsOddEven': '',
//     'corners': '',
//     'cards': '',
//     'teamsScore': '',
//     'halfGoals': '',
//     'teamSpecials': '',
//     'goalscorer': '',
//     'redCard': '',
//     'winningMargin': '',
// };

class ChooseMarket extends React.Component {

    constructor(props) {
        super(props);

        let defaultTabState = {
            'playerToScore': '',
            'playerCard': '',
            'result': '',
            'doubleChance': '',
            'totalGoals': '',
            'halfFullTime': '',
            'score': '',
            'goalsOddEven': '',
            'corners': '',
            'cards': '',
            'teamsScore': '',
            'halfGoals': '',
            'teamSpecials': '',
            'goalscorer': '',
            'redCard': '',
            'winningMargin': '',
        };

        this.state={
            innerTab:"select_player",
            secondStep: false,
            tabsStatus: defaultTabState,
            hideMarketList: false,
            tabTitle: 'Choose a Market',
            defaultTabState: defaultTabState
        }

    }
    changeTab =(firstTab, secondTab, tabTitle)=> {
        var tabsStatus = Object.assign({}, this.state.defaultTabState);
        // let tabsStatus = this.state.defaultTabState;
        tabsStatus[firstTab] = secondTab;

        let newStates = {
            hideMarketList: true,
            tabsStatus: tabsStatus
        };
        if(typeof tabTitle == 'string'){
            newStates['tabTitle'] = tabTitle;
        }
        this.setState(newStates)
    }

    setTabsStatusDefault=()=>{

        console.log(123123123, this.state.defaultTabState);

        this.setState({
            tabTitle: 'Choose a Market',
            hideMarketList: false,
            tabsStatus: this.state.defaultTabState
        });
    }
    componentDidMount() {
        if ($('.scroll_block').length) {
            $('.scroll_block').mCustomScrollbar({
                axis: "y",
                theme: "minimal",
                scrollInertia: 550,
                scrollbarPosition: "inside"
            });
        }
    }
    render() {
        console.log("STATE", this.state);
        return(
            <div id="choose_market" className="modal_bet new_window choose_market" role="dialog">
                <div className="modal_content">
                    <div className="bbw-Wizard ">
                        <div className="bbw-Menu ">
                            <div className="bbw-Menu_Title-container">
                                <span className="bbw-Menu_Title" onClick={() => this.setTabsStatusDefault()}>{this.state.tabTitle}</span>

                                <div className="bbw-Menu_Close" onClick={()=>this.props.closeModal('chooseMarket')}></div>
                            </div>

                            <div className={`firstStep ${this.state.hideMarketList ? "hidden" :""}`}>
                                <div className="bbw-Menu_ItemContainer first_step scroll_block">
                                    <div className="bbw-Menu_MarketGroup " onClick={() => this.changeTab('playerToScore', 'select_player', 'Player to Score')}>Player to Score</div>
                                    <div className="bbw-Menu_MarketGroup " onClick={() => this.changeTab('playerCard', "player_card", 'Player Card')}>Player Card</div>
                                    <div className="bbw-Menu_MarketGroup " onClick={() => this.changeTab('result','match_result', 'Result')}>Result</div>
                                    <div className="bbw-Menu_MarketGroup " onClick={() => this.changeTab('doubleChance',"match", 'Double Chance')}>Double Chance</div>
                                    <div className="bbw-Menu_MarketGroup " onClick={() => this.changeTab('totalGoals', "over", 'Total Goals')}>Total Goals</div>
                                    <div className="bbw-Menu_MarketGroup " onClick={() => this.changeTab('corners', "over_corners", 'Corners')}>Corners</div>
                                    <div className="bbw-Menu_MarketGroup " onClick={() => this.changeTab('cards', "over_cards", 'Cards')}>Cards</div>
                                    <div className="bbw-Menu_MarketGroup " onClick={() => this.changeTab('teamsScore', "match_team", 'Both Teams to Score')}>Both Teams to Score</div>
                                    <div className="bbw-Menu_MarketGroup " onClick={() => this.changeTab('halfFullTime',"half_wolver", 'Half Time/Full Time')}>Half Time/Full Time</div>
                                    <div className="bbw-Menu_MarketGroup " onClick={() => this.changeTab('score', "fullTimeScore", 'Score')}>Score</div>
                                    <div className="bbw-Menu_MarketGroup " onClick={() => this.changeTab('halfGoals', "firstHalf", 'Half with Most Goals')}>Half with Most Goals</div>
                                    <div className="bbw-Menu_MarketGroup " onClick={() => this.changeTab('teamSpecials', "burnley", 'Team Specials')}>Team Specials</div>
                                    <div className="bbw-Menu_MarketGroup " onClick={() => this.changeTab('goalscorer', "player_goalscorer", 'Team Goalscorer')}>Team Goalscorer</div>
                                    <div className="bbw-Menu_MarketGroup " onClick={() => this.changeTab('redCard', 'Red Card in Match')}>Red Card in Match</div>
                                    <div className="bbw-Menu_MarketGroup " onClick={() => this.changeTab('winningMargin', "team_winning", 'Winning Margin')}>Winning Margin</div>
                                    <div className="bbw-Menu_MarketGroup " onClick={() => this.changeTab('goalsOddEven', "odd", 'Goals - Odd/Even')}>Goals - Odd/Even</div>
                                </div>
                            </div>



                                <div className={`secondStep ${this.state.hideMarketList ? "show":""}`}>
                                    {this.state.tabsStatus['playerToScore'].length ?
                                        <div className="playerToScore">
                                            <div className="tab_submenu">
                                                <span className={`tab select_players ${this.state.tabsStatus['playerToScore'] == "select_player" ? "active" :""}`} onClick={()=>this.changeTab('playerToScore', 'select_player')}>Select Players</span>
                                                <span className="tab_submenu_text">to</span>
                                                <span className={`tab underline ${this.state.tabsStatus['playerToScore'] == "anytime" ? "active" :""}`} onClick={()=>this.changeTab('playerToScore', 'anytime')}>Score Anytime</span>
                                                <span className="tab_submenu_text">in the Match</span>
                                            </div>

                                            {this.state.tabsStatus['playerToScore'] == "select_player" ?
                                                <div className="bbw-Menu_ItemContainer">
                                                    <div className="choose_message">Choose one or more players</div>
                                                    <div className="bbw-Menu_MarketGroup ">Mohamed Salah</div>
                                                    <div className="bbw-Menu_MarketGroup ">Daniel Sturridge</div>
                                                    <div className="bbw-Menu_MarketGroup ">Divock Origi</div>
                                                </div>
                                                :""}
                                            {this.state.tabsStatus['playerToScore'] == "anytime" ?
                                                <div className="bbw-Menu_ItemContainer">
                                                    <div className="bbw-Menu_MarketGroup ">Score Anytime</div>
                                                    <div className="bbw-Menu_MarketGroup ">Score First</div>
                                                    <div className="bbw-Menu_MarketGroup ">Score Last</div>
                                                    <div className="bbw-Menu_MarketGroup ">Score 2 or More</div>
                                                    <div className="bbw-Menu_MarketGroup ">Score 3 or More</div>
                                                </div>
                                                :""}
                                        </div>
                                    :""}

                                    {this.state.tabsStatus['playerCard'].length ?
                                        <div className="playerCard">
                                            <div className="tab_submenu">
                                                <span className={`tab select_players ${this.state.tabsStatus['playerCard'] == "player_card" ?"active":""}`} onClick={() => this.changeTab('playerCard', "player_card")}>Select Players</span>
                                                <span className="tab_submenu_text">to</span>
                                                <span className={`tab underline ${this.state.tabsStatus['playerCard']== "booked" ? "active" :""}`} onClick={() => this.changeTab('playerCard', "booked")}>Booked</span>
                                           </div>
                                            {this.state.tabsStatus['playerCard'] == "player_card" ?
                                                <div className="bbw-Menu_ItemContainer" >
                                                    <div className="choose_message">Choose one or more players</div>
                                                    <div className="bbw-Menu_MarketGroup ">Oriol Romeu</div>
                                                    <div className="bbw-Menu_MarketGroup ">Pablo Zabaleta</div>
                                                    <div className="bbw-Menu_MarketGroup ">Jan</div>
                                                </div>
                                                :""}
                                            {this.state.tabsStatus['playerCard'] == "booked" ?
                                                <div className="bbw-Menu_ItemContainer" >
                                                    <div className="bbw-Menu_MarketGroup ">Booked</div>
                                                    <div className="bbw-Menu_MarketGroup ">Sent Off</div>
                                                </div>
                                                :""}
                                        </div>
                                    :""}

                                    {this.state.tabsStatus['result'].length ?
                                        <div className="result">
                                            <div className="tab_submenu">
                                                <span className={`tab select_players ${this.state.tabsStatus['result'] == "match_result" ? "active" :""}`} onClick={()=>this.changeTab('result', 'match_result')}>Match</span>
                                                <span className="tab_submenu_text">result will be</span>
                                                <span className={`tab underline ${this.state.tabsStatus['result'] == "wolver" ? "active" :""}`} onClick={()=>this.changeTab('result', 'wolver')}>Wolverhampton</span>
                                            </div>
                                            {this.state.tabsStatus['result'] == "match_result" ?
                                                <div className="bbw-Menu_ItemContainer">
                                                    <div className="bbw-Menu_MarketGroup ">Match</div>
                                                    <div className="bbw-Menu_MarketGroup ">1st Half</div>
                                                    <div className="bbw-Menu_MarketGroup ">2nd Half</div>
                                                    <div className="bbw-Menu_MarketGroup ">10 Minute</div>
                                                </div>
                                                :""}
                                            {this.state.tabsStatus['result'] == "wolver" ?
                                                <div className="bbw-Menu_ItemContainer">
                                                    <div className="bbw-Menu_MarketGroup ">Wolverhampton</div>
                                                    <div className="bbw-Menu_MarketGroup ">Draw</div>
                                                    <div className="bbw-Menu_MarketGroup ">Livepool</div>
                                                </div>
                                                :""}
                                        </div>
                                    :""}

                                    {this.state.tabsStatus['doubleChance'].length ?
                                        <div className="double_chance">
                                            <div className="tab_submenu">
                                                <span className={`tab select_players ${this.state.tabsStatus['doubleChance'] == "match" ? "active" :""}`} onClick={()=>this.changeTab('doubleChance', 'match')}>Match</span>
                                                <span className="tab_submenu_text">result will be</span>
                                                <span className={`tab underline ${this.state.tabsStatus['doubleChance'] == "wolverDraw" ? "active" :""}`} onClick={()=>this.changeTab('doubleChance', 'wolverDraw')}>Wolverhampton or Draw</span>

                                            </div>

                                            {this.state.tabsStatus['doubleChance'] == "match" ?
                                                <div className="bbw-Menu_ItemContainer">
                                                    <div className="bbw-Menu_MarketGroup ">Match</div>
                                                </div>
                                                :""
                                            }
                                            {this.state.tabsStatus['doubleChance'] == "wolverDraw" ?
                                                <div className="bbw-Menu_ItemContainer">{/*Wolverhampton or Draw tab*/}
                                                    <div className="bbw-Menu_MarketGroup selected">Wolverhampton or Draw</div>
                                                    <div className="bbw-Menu_MarketGroup ">Draw or Liverpool</div>
                                                    <div className="bbw-Menu_MarketGroup ">Wolverhampton or Liverpool</div>
                                                </div>
                                                :""
                                            }
                                        </div>
                                    :""}

                                    {this.state.tabsStatus['totalGoals'].length ?
                                        <div className="total_goals">
                                            <div className="tab_submenu">
                                                <span className={`tab underline ${this.state.tabsStatus['totalGoals']  == "over" ? "active" :""}`} onClick={()=>this.changeTab('totalGoals', 'over')}>Over</span>
                                                <span className={`tab underline ${this.state.tabsStatus['totalGoals'] == "goals" ? "active" :""}`} onClick={()=>this.changeTab('totalGoals', 'goals')}>0 Goals</span>
                                                <span className="tab_submenu_text">in the</span>
                                                <span className={`tab underline ${this.state.tabsStatus['totalGoals'] == "total_match" ? "active" :""}`} onClick={()=>this.changeTab('totalGoals', 'total_match')}>Match</span>
                                                <span className="tab_submenu_text">for</span>
                                                <span className={`tab underline ${this.state.tabsStatus['totalGoals'] == "both_teams" ? "active" :""}`} onClick={()=>this.changeTab('totalGoals', 'both_teams')}>Both Teams Combined</span>

                                            </div>
                                            {this.state.tabsStatus['totalGoals'] == "over" ?
                                                <div className="bbw-Menu_ItemContainer">
                                                    <div className="bbw-Menu_MarketGroup selected">Over</div>
                                                    <div className="bbw-Menu_MarketGroup">Exactly</div>
                                                    <div className="bbw-Menu_MarketGroup">Under</div>
                                                </div>
                                                :""
                                            }
                                            {this.state.tabsStatus['totalGoals'] == "goals" ?
                                                <div className="bbw-Menu_ItemContainer">
                                                    <div className="bbw-Menu_MarketGroup selected">0 Goals</div>
                                                    <div className="bbw-Menu_MarketGroup ">1 Goals</div>
                                                    <div className="bbw-Menu_MarketGroup ">2 Goals</div>
                                                </div>
                                                :""
                                            }
                                            {this.state.tabsStatus['totalGoals'] == "total_match" ?
                                                <div className="bbw-Menu_ItemContainer">
                                                    <div className="bbw-Menu_MarketGroup selected">Match</div>
                                                    <div className="bbw-Menu_MarketGroup ">1st Half</div>
                                                    <div className="bbw-Menu_MarketGroup ">2nd Half</div>
                                                    <div className="bbw-Menu_MarketGroup ">First 10 Minutes</div>
                                                </div>
                                                :""
                                            }
                                            {this.state.tabsStatus['totalGoals'] == "both_teams" ?
                                                <div className="bbw-Menu_ItemContainer">
                                                    <div className="bbw-Menu_MarketGroup selected">Both Teams Combined</div>
                                                    <div className="bbw-Menu_MarketGroup ">Wolverhampton</div>
                                                    <div className="bbw-Menu_MarketGroup ">Liverpool</div>
                                                </div>
                                                :""
                                            }
                                        </div>
                                    :""}
                                    {this.state.tabsStatus['corners'].length ?
                                        <div className="corners">
                                            <div className="tab_submenu">
                                                <span className={`tab underline ${this.state.tabsStatus['corners'] == "over_corners" ? "active" :""}`} onClick={()=>this.changeTab('corners', 'over_corners')}>Over</span>
                                                <span className={`tab underline ${this.state.tabsStatus['corners'] == "goals_corners" ? "active" :""}`} onClick={()=>this.changeTab('corners', 'goals_corners')}>0 Corners</span>
                                                <span className="tab_submenu_text">in the</span>
                                                <span className={`tab underline ${this.state.tabsStatus['corners'] == "match_corners" ? "active" :""}`} onClick={()=>this.changeTab('corners', 'match_corners')}>Match</span>
                                                <span className="tab_submenu_text">for</span>
                                                <span className={`tab underline ${this.state.tabsStatus['corners'] == "wolver_corners" ? "active" :""}`} onClick={()=>this.changeTab('corners', 'wolver_corners')}>Wolverhampton</span>

                                            </div>
                                            {this.state.tabsStatus['corners'] == "over_corners" ?
                                                <div className="bbw-Menu_ItemContainer">
                                                    <div className="bbw-Menu_MarketGroup selected">Over</div>
                                                    <div className="bbw-Menu_MarketGroup">Exactly</div>
                                                    <div className="bbw-Menu_MarketGroup">Under</div>
                                                </div>
                                                :""
                                            }
                                            {this.state.tabsStatus['corners'] == "goals_corners" ?
                                                <div className="bbw-Menu_ItemContainer">
                                                    <div className="bbw-Menu_MarketGroup selected">0 Corners</div>
                                                    <div className="bbw-Menu_MarketGroup ">1 Corners</div>
                                                    <div className="bbw-Menu_MarketGroup ">2 Corners</div>
                                                </div>
                                                :""
                                            }
                                            {this.state.tabsStatus['corners'] == "match_corners" ?
                                                <div className="bbw-Menu_ItemContainer">
                                                    <div className="bbw-Menu_MarketGroup selected">Match</div>
                                                    <div className="bbw-Menu_MarketGroup ">1st Half</div>
                                                    <div className="bbw-Menu_MarketGroup ">2nd Half</div>
                                                    <div className="bbw-Menu_MarketGroup ">First 10 Minutes</div>
                                                </div>
                                                :""
                                            }
                                            {this.state.tabsStatus['corners'] == "wolver_corners" ?
                                                <div className="bbw-Menu_ItemContainer">
                                                    <div className="bbw-Menu_MarketGroup ">Both Teams Combined</div>
                                                    <div className="bbw-Menu_MarketGroup selected">Wolverhampton</div>
                                                    <div className="bbw-Menu_MarketGroup ">Liverpool</div>
                                                </div>
                                                :""
                                            }
                                        </div>
                                    :""}
                                    {this.state.tabsStatus['cards'].length ?
                                        <div className="cards">
                                            <div className="tab_submenu">
                                                <span className={`tab underline ${this.state.tabsStatus['cards'] == "over_cards" ? "active" :""}`} onClick={()=>this.changeTab('cards', 'over_cards')}>Over</span>
                                                <span className={`tab underline ${this.state.tabsStatus['cards'] == "player_cards" ? "active" :""}`} onClick={()=>this.changeTab('cards', 'player_cards')}>0 Cards</span>
                                                <span className="tab_submenu_text">in the</span>
                                                <span className={`tab underline ${this.state.tabsStatus['cards'] == "match_cards" ? "active" :""}`} onClick={()=>this.changeTab('cards', 'match_cards')}>Match</span>
                                                <span className="tab_submenu_text">for</span>
                                                <span className={`tab underline ${this.state.tabsStatus['cards'] == "both_teams_cards" ? "active" :""}`} onClick={()=>this.changeTab('cards', 'both_teams_cards')}>Both Teams Combined</span>

                                            </div>
                                            {this.state.tabsStatus['cards'] == "over_cards" ?
                                                <div className="bbw-Menu_ItemContainer">
                                                    <div className="bbw-Menu_MarketGroup selected">Over</div>
                                                    <div className="bbw-Menu_MarketGroup">Exactly</div>
                                                    <div className="bbw-Menu_MarketGroup">Under</div>
                                                </div>
                                                :""
                                            }
                                            {this.state.tabsStatus['cards'] == "player_cards" ?
                                                <div className="bbw-Menu_ItemContainer">
                                                    <div className="bbw-Menu_MarketGroup selected">0 Cards</div>
                                                    <div className="bbw-Menu_MarketGroup ">1 Cards</div>
                                                    <div className="bbw-Menu_MarketGroup ">2 Cards</div>
                                                </div>
                                                :""
                                            }
                                            {this.state.tabsStatus['cards'] == "match_cards" ?
                                                <div className="bbw-Menu_ItemContainer">
                                                    <div className="bbw-Menu_MarketGroup selected">Match</div>
                                                    <div className="bbw-Menu_MarketGroup ">1st Half</div>
                                                    <div className="bbw-Menu_MarketGroup ">2nd Half</div>
                                                    <div className="bbw-Menu_MarketGroup ">First 10 Minutes</div>
                                                </div>
                                                :""
                                            }
                                            {this.state.tabsStatus['cards'] == "both_teams_cards" ?
                                                <div className="bbw-Menu_ItemContainer">
                                                    <div className="bbw-Menu_MarketGroup selected">Both Teams Combined</div>
                                                    <div className="bbw-Menu_MarketGroup ">Wolverhampton</div>
                                                    <div className="bbw-Menu_MarketGroup ">Liverpool</div>
                                                </div>
                                                :""
                                            }
                                        </div>
                                    :""}

                                    {this.state.tabsStatus['teamsScore'].length ?
                                        <div className="teamsScore">
                                            <div className="tab_submenu">
                                                <span className="tab_submenu_text">Both Teams to Score in the </span>
                                                <span className={`tab underline ${this.state.tabsStatus['teamsScore'] == "match_team" ? "active" :""}`} onClick={()=>this.changeTab('teamsScore', 'match_team')}>Match</span>
                                                <span className="tab_submenu_text"> - </span>
                                                <span className={`tab underline ${this.state.tabsStatus['teamsScore'] == "team_yes" ? "active" :""}`} onClick={()=>this.changeTab('teamsScore', 'team_yes')}>Yes</span>


                                            </div>
                                            {this.state.tabsStatus['teamsScore'] == "match_team" ?
                                                <div className="bbw-Menu_ItemContainer">
                                                    <div className="bbw-Menu_MarketGroup selected">Match</div>
                                                    <div className="bbw-Menu_MarketGroup">1st Half</div>
                                                    <div className="bbw-Menu_MarketGroup">2nd Half</div>
                                                </div>
                                                :""
                                            }
                                            {this.state.tabsStatus['teamsScore'] == "team_yes" ?
                                                <div className="bbw-Menu_ItemContainer">
                                                    <div className="bbw-Menu_MarketGroup selected">Yes</div>
                                                    <div className="bbw-Menu_MarketGroup ">No</div>
                                                </div>
                                                :""
                                            }
                                        </div>
                                    :""}

                                    {this.state.tabsStatus['halfFullTime'].length ?
                                        <div className="half_full_time">
                                            <div className="tab_submenu">
                                                <span className="tab_submenu_text">Half Time Result</span>
                                                <span className={`tab underline ${this.state.tabsStatus['halfFullTime'] == "half_wolver" ? "active" :""}`} onClick={()=>this.changeTab('halfFullTime', 'half_wolver')}>Wolverhampton</span>
                                                <span className="tab_submenu_text">- Full Time Result</span>
                                                <span className={`tab underline ${this.state.tabsStatus['halfFullTime'] == "full_wolver" ? "active" :""}`} onClick={()=>this.changeTab('halfFullTime', 'full_wolver')}>Wolverhampton</span>


                                            </div>
                                            {this.state.tabsStatus['halfFullTime'] == "half_wolver" ?
                                                <div className="bbw-Menu_ItemContainer">
                                                    <div className="bbw-Menu_MarketGroup selected">Wolverhampton</div>
                                                    <div className="bbw-Menu_MarketGroup">Draw</div>
                                                    <div className="bbw-Menu_MarketGroup">Liverpool</div>
                                                </div>
                                                :""
                                            }
                                            {this.state.tabsStatus['halfFullTime'] == "full_wolver" ?
                                                <div className="bbw-Menu_ItemContainer">
                                                    <div className="bbw-Menu_MarketGroup selected">Wolverhampton</div>
                                                    <div className="bbw-Menu_MarketGroup ">Draw</div>
                                                    <div className="bbw-Menu_MarketGroup ">Liverpool</div>
                                                </div>
                                                :""
                                            }
                                        </div>
                                    :""}

                                    {this.state.tabsStatus['score'].length ?
                                        <div className="score">
                                            <div className="tab_submenu">
                                                <span className={`tab underline ${this.state.tabsStatus['score'] == "fullTimeScore" ? "active" :""}`} onClick={()=>this.changeTab('score', 'fullTimeScore')}>FullTimeScore</span>
                                                <span className="tab_submenu_text"> will be</span>
                                                <span className={`tab underline ${this.state.tabsStatus['score'] == "score_wolver" ? "active" :""}`} onClick={()=>this.changeTab('score', 'score_wolver')}>Wolverhampton 1-0</span>


                                            </div>
                                            {this.state.tabsStatus['score'] == "fullTimeScore" ?
                                                <div className="bbw-Menu_ItemContainer">
                                                    <div className="bbw-Menu_MarketGroup selected">Full Time Score</div>
                                                    <div className="bbw-Menu_MarketGroup">Half Time Score</div>
                                                </div>
                                                :""
                                            }
                                            {this.state.tabsStatus['score'] == "score_wolver" ?
                                                <div className="bbw-Menu_ItemContainer">
                                                    <div className="bbw-Menu_MarketGroup selected">Wolverhampton 1-0</div>
                                                    <div className="bbw-Menu_MarketGroup ">Wolverhampton 2-0</div>
                                                    <div className="bbw-Menu_MarketGroup ">Wolverhampton 2-1</div>
                                                    <div className="bbw-Menu_MarketGroup ">Wolverhampton 3-0</div>
                                                    <div className="bbw-Menu_MarketGroup ">Wolverhampton 3-1</div>
                                                    <div className="bbw-Menu_MarketGroup ">Wolverhampton 3-2</div>
                                                    <div className="bbw-Menu_MarketGroup ">Wolverhampton 4-0</div>
                                                    <div className="bbw-Menu_MarketGroup ">Wolverhampton 4-1</div>
                                                    <div className="bbw-Menu_MarketGroup ">Wolverhampton 4-2</div>
                                                    <div className="bbw-Menu_MarketGroup ">Wolverhampton 4-3</div>
                                                    <div className="bbw-Menu_MarketGroup ">Draw 0-0</div>
                                                    <div className="bbw-Menu_MarketGroup ">Draw 1-1</div>
                                                    <div className="bbw-Menu_MarketGroup ">Draw 2-2</div>
                                                    <div className="bbw-Menu_MarketGroup ">Draw 3-3</div>
                                                    <div className="bbw-Menu_MarketGroup ">Draw 4-4</div>
                                                    <div className="bbw-Menu_MarketGroup ">Liverpool 1-0</div>
                                                    <div className="bbw-Menu_MarketGroup ">Liverpool 2-0</div>
                                                    <div className="bbw-Menu_MarketGroup ">Liverpool 2-1</div>
                                                    <div className="bbw-Menu_MarketGroup ">Liverpool 3-0</div>
                                                    <div className="bbw-Menu_MarketGroup ">Liverpool 3-1</div>
                                                    <div className="bbw-Menu_MarketGroup ">Liverpool 3-2</div>
                                                    <div className="bbw-Menu_MarketGroup ">Liverpool 4-0</div>
                                                    <div className="bbw-Menu_MarketGroup ">Liverpool 4-1</div>
                                                    <div className="bbw-Menu_MarketGroup ">Liverpool 4-2</div>
                                                    <div className="bbw-Menu_MarketGroup ">Liverpool 4-3</div>
                                                    <div className="bbw-Menu_MarketGroup ">Liverpool 5-0</div>
                                                    <div className="bbw-Menu_MarketGroup ">Liverpool 5-1</div>
                                                    <div className="bbw-Menu_MarketGroup ">Liverpool 5-2</div>
                                                    <div className="bbw-Menu_MarketGroup ">Liverpool 5-3</div>
                                                    <div className="bbw-Menu_MarketGroup ">Liverpool 6-0</div>
                                                    <div className="bbw-Menu_MarketGroup ">Liverpool 6-1</div>
                                                    <div className="bbw-Menu_MarketGroup ">Liverpool 6-2</div>
                                                    <div className="bbw-Menu_MarketGroup ">Liverpool 7-0</div>
                                                    <div className="bbw-Menu_MarketGroup ">Liverpool 7-1</div>
                                                </div>
                                                :""
                                            }
                                        </div>
                                    :""}

                                    {this.state.tabsStatus['halfGoals'].length ?
                                        <div className=" halfGoals">
                                            <div className="tab_submenu">
                                                <span className="tab_submenu_text"> Most Goals to be Scored in</span>
                                                <span className={`tab underline ${this.state.tabsStatus['halfGoals'] == "firstHalf" ? "active" :""}`} onClick={()=>this.changeTab('halfGoals', 'firstHalf')}>1st Half</span>


                                            </div>
                                            {this.state.tabsStatus['halfGoals'] == "firstHalf" ?
                                                <div className="bbw-Menu_ItemContainer">
                                                    <div className="bbw-Menu_MarketGroup selected">1st Half</div>
                                                    <div className="bbw-Menu_MarketGroup">2nd Half</div>
                                                    <div className="bbw-Menu_MarketGroup">Neither Half (Tie)</div>
                                                </div>
                                                :""
                                            }
                                        </div>
                                     :""}

                                    {this.state.tabsStatus['teamSpecials'].length ?
                                        <div className="teamSpecials">
                                            <div className="tab_submenu">
                                                <span className={`tab underline ${this.state.tabsStatus['teamSpecials'] == "burnley" ? "active" :""}`} onClick={()=>this.changeTab('teamSpecials', 'burnley')}>Burnley</span>

                                                <span className={`tab underline ${this.state.tabsStatus['teamSpecials'] == "winBehind" ? "active" :""}`} onClick={()=>this.changeTab('teamSpecials', 'winBehind')}>to Win from Behind</span>


                                            </div>
                                            {this.state.tabsStatus['teamSpecials'] == "burnley" ?
                                                <div className="bbw-Menu_ItemContainer">
                                                    <div className="bbw-Menu_MarketGroup selected">Burnley</div>
                                                    <div className="bbw-Menu_MarketGroup">Everton</div>
                                                </div>
                                                :""
                                            }
                                            {this.state.tabsStatus['teamSpecials'] == "winBehind" ?
                                                <div className="bbw-Menu_ItemContainer">
                                                    <div className="bbw-Menu_MarketGroup selected">to Win from Behind</div>
                                                    <div className="bbw-Menu_MarketGroup ">to Win to Nil</div>
                                                    <div className="bbw-Menu_MarketGroup ">to Win Either Half</div>
                                                    <div className="bbw-Menu_MarketGroup ">to Win Both Halves</div>
                                                    <div className="bbw-Menu_MarketGroup ">to Score in Both Halves</div>
                                                </div>
                                                :""
                                            }
                                        </div>
                                    :""}

                                    {this.state.tabsStatus['goalscorer'].length ?
                                        <div className="goalscorer">
                                            <div className="tab_submenu">
                                                <span className={`tab underline ${this.state.tabsStatus['goalscorer'] == "player_goalscorer" ? "active" :""}`} onClick={()=>this.changeTab('goalscorer', 'player_goalscorer')}>de Andrade Richarlison</span>
                                                <span className="tab_submenu_text">to</span>
                                                <span className={`tab underline ${this.state.tabsStatus['goalscorer'] == "score_first" ? "active" :""}`} onClick={()=>this.changeTab('goalscorer', 'score_first')}>Score First</span>
                                                <span className="tab_submenu_text">for</span>
                                                <span className={`tab underline ${this.state.tabsStatus['goalscorer'] == "everton" ? "active" :""}`} onClick={()=>this.changeTab('goalscorer', 'everton')}>Everton</span>
                                            </div>
                                            {this.state.tabsStatus['goalscorer'] == "player_goalscorer" ?
                                                <div className="bbw-Menu_ItemContainer">
                                                    <div className="bbw-Menu_MarketGroup selected">de Andrade Richarlison</div>
                                                    <div className="bbw-Menu_MarketGroup">Cenk Tosun</div>
                                                    <div className="bbw-Menu_MarketGroup">Ashley Barnes</div>
                                                </div>
                                                :""
                                            }
                                            {this.state.tabsStatus['goalscorer'] == "score_first" ?
                                                <div className="bbw-Menu_ItemContainer">
                                                    <div className="bbw-Menu_MarketGroup selected">Score First</div>
                                                    <div className="bbw-Menu_MarketGroup ">Score Last</div>
                                                </div>
                                                :""
                                            }
                                            {this.state.tabsStatus['goalscorer'] == "everton" ?
                                                <div className="bbw-Menu_ItemContainer">
                                                    <div className="bbw-Menu_MarketGroup selected">Everton</div>
                                                    <div className="bbw-Menu_MarketGroup ">Burnley</div>
                                                </div>
                                                :""
                                            }

                                        </div>
                                    :""}

                                    {this.state.tabsStatus['redCard'].length ?
                                        <div className="red_cards">
                                            <div className="tab_submenu">
                                                <span className="tab_submenu_text">A Red Card in the Match -</span>
                                                <span className="tab underline active" >Yes</span>
                                            </div>
                                                <div className="bbw-Menu_ItemContainer">
                                                    <div className="bbw-Menu_MarketGroup selected">Yes</div>
                                                    <div className="bbw-Menu_MarketGroup">No</div>
                                                </div>
                                        </div>
                                    :""}

                                    {this.state.tabsStatus['winningMargin'].length ?
                                        <div className="winningMargin">
                                            <div className="tab_submenu">
                                                <span className={`tab underline ${this.state.tabsStatus['winningMargin'] == "team_winning" ? "active" :""}`} onClick={()=>this.changeTab('winningMargin', 'team_winning')}>Burnley</span>
                                                <span className="tab_submenu_text">to win the</span>
                                                <span className={`tab underline ${this.state.tabsStatus['winningMargin'] == "team_match" ? "active" :""}`} onClick={()=>this.changeTab('winningMargin', 'team_match')}>Match</span>
                                                <span className="tab_submenu_text">by</span>
                                                <span className={`tab underline ${this.state.tabsStatus['winningMargin'] == "goal_num" ? "active" :""}`} onClick={()=>this.changeTab('winningMargin', 'goal_num')}>1 Goal</span>
                                            </div>
                                            {this.state.tabsStatus['winningMargin'] == "team_winning" ?
                                                <div className="bbw-Menu_ItemContainer">
                                                    <div className="bbw-Menu_MarketGroup selected">Burnley</div>
                                                    <div className="bbw-Menu_MarketGroup ">Everton</div>
                                                    <div className="bbw-Menu_MarketGroup ">Either Team</div>
                                                </div>
                                                :""
                                            }
                                            {this.state.tabsStatus['winningMargin'] == "team_match" ?
                                                <div className="bbw-Menu_ItemContainer">
                                                    <div className="bbw-Menu_MarketGroup selected">Match</div>
                                                    <div className="bbw-Menu_MarketGroup ">1st Half</div>
                                                    <div className="bbw-Menu_MarketGroup ">2nd Half</div>
                                                    <div className="bbw-Menu_MarketGroup ">First 10 Minutes</div>
                                                </div>
                                                :""
                                            }
                                            {this.state.tabsStatus['winningMargin'] == "goal_num" ?
                                                <div className="bbw-Menu_ItemContainer">
                                                    <div className="bbw-Menu_MarketGroup selected">1 Goal</div>
                                                    <div className="bbw-Menu_MarketGroup ">2 Goals</div>
                                                    <div className="bbw-Menu_MarketGroup ">2 or more Goals</div>
                                                    <div className="bbw-Menu_MarketGroup ">3 Goals</div>
                                                    <div className="bbw-Menu_MarketGroup ">3 or more Goals</div>
                                                    <div className="bbw-Menu_MarketGroup ">4 Goals</div>
                                                    <div className="bbw-Menu_MarketGroup ">4 or more Goals</div>
                                                    <div className="bbw-Menu_MarketGroup ">5 Goals</div>
                                                    <div className="bbw-Menu_MarketGroup ">5 or more Goals</div>
                                                    <div className="bbw-Menu_MarketGroup ">6 Goals</div>
                                                    <div className="bbw-Menu_MarketGroup ">6 or more Goals</div>
                                                    <div className="bbw-Menu_MarketGroup ">7 Goals</div>
                                                    <div className="bbw-Menu_MarketGroup ">7 or more Goals</div>
                                                </div>
                                                :""
                                            }

                                        </div>
                                    :""}

                                    {this.state.tabsStatus['goalsOddEven'].length ?
                                        <div className="goalsOddEven">
                                            <div className="tab_submenu">
                                                <span className={`tab underline ${this.state.tabsStatus['goalsOddEven'] == "odd" ? "active" :""}`} onClick={()=>this.changeTab('goalsOddEven', 'odd')}>Odd</span>
                                                <span className="tab_submenu_text"> Number of Goals in the</span>
                                                <span className={`tab underline ${this.state.tabsStatus['goalsOddEven'] == "matchOddEven" ? "active" :""}`} onClick={()=>this.changeTab('goalsOddEven', 'matchOddEven')}>Match</span>


                                            </div>
                                            {this.state.tabsStatus['goalsOddEven'] == "odd" ?
                                                <div className="bbw-Menu_ItemContainer">
                                                    <div className="bbw-Menu_MarketGroup selected">Odd</div>
                                                    <div className="bbw-Menu_MarketGroup">Even</div>
                                                </div>
                                                :""
                                            }
                                            {this.state.tabsStatus['goalsOddEven'] == "matchOddEven" ?
                                                <div className="bbw-Menu_ItemContainer">
                                                    <div className="bbw-Menu_MarketGroup selected">Match</div>
                                                    <div className="bbw-Menu_MarketGroup ">1st Half</div>
                                                    <div className="bbw-Menu_MarketGroup ">2nd Half</div>
                                                </div>
                                                :""
                                            }
                                        </div>
                                     :""}



                                    <div className="bbw-MarketControlBar">
                                        <div className="priceContainer">
                                            <span className="controlBar_Price">—.—</span>
                                            <span className="controlBar_Price_Label">Bet Builder Odds</span>
                                        </div>
                                        <div className="addButton disabled">{/*class disabled*/}
                                            <span>Add this Selection</span>
                                        </div>
                                    </div>
                                </div>




                        </div>

                     </div>
                </div>
            </div>
        )

    }
}

export default ChooseMarket;