import React from 'react';
import FootballTime from "../../helpers/match_time/footballTime";
import {getEventBySports} from "../../helpers/proccess_data";
import moment from "moment";



class Live extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bets: this.props.bets,
            combineName: this.props.combineName,
            count: this.props.count,
            setIntervalCount: 0,
            allEvents: [],
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            bets: nextProps.bets,
            combineName: nextProps.combineName,
            count: nextProps.count,
            allEvents: nextProps.allEvents,
        })
    }
    componentDidMount(){

        this.interval = setInterval(() => {
            this.setState({setIntervalCount: this.state.setIntervalCount + 1})
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render() {
       // console.log("HHHHHHHHHH", this.state)
        return(
            <div>

                {
                    this.state.bets && this.state.bets.length ?

                        <div className="my_bet_items_container">
                            <div className="cash_out" style={{display: 'none'}}>
                                <div className="cash_out_header">
                                    <div className="cash_out_header_text">
                                        Auto Cash Out
                                    </div>
                                    <div className="cash_out_header_icon">
                                        New
                                    </div>
                                </div>
                                <div className="cash_out_body">
                                    <div className="cash_out_body_text">
                                        <p>Set a rule to auto cash out your bet.</p>
                                        <p>It even works when logged out.</p>
                                        <div className="cash_out_link">Okay, got it</div>
                                    </div>
                                    <div className="cash_out_body_icon"/>
                                </div>

                            </div>

                            {

                                this.state.bets.map((bet, ind) => {
                                    if (typeof bet.bets != "undefined") {
                                        return  <div className="settled_tab" key={ind}>
                                            <div className="OpenBetItem">
                                                <div className={`OpenBetItem_header hd-${bet.id}`}  onClick={() => this.props.toggleHistoryLine(bet.id)}>
                                                    <div className="name_container">
                                                        <span className="OpenBetItem_BetStake">{bet.total_stake}</span>
                                                        <span className="OpenBetItem_name">{this.state.combineName[bet.multiple_type]}</span>

                                                    </div>
                                                    <span className="OpenBetItem_subname" style={{display: 'none'}}>Malaysia U21 , Persija Jakarta </span>
                                                    {/*<div className="return_container">*/}
                                                    {/*<div className="can_return show">*/}
                                                    {/*<span className="return_label">{bet.status == "won" ? "Returned" : "Lost"}</span>*/}
                                                    {/*{*/}
                                                    {/*bet.status == "won" ?*/}
                                                    {/*<span className="return_cash">{bet.to_return}</span>*/}
                                                    {/*: ""*/}
                                                    {/*}*/}
                                                    {/*</div>*/}
                                                    {/*</div>*/}
                                                </div>
                                                <div className="message_sub_header" style={{display: 'none'}}>Edit Bet is no longer available
                                                </div>
                                                <div className={`OpenBetItem_details id-${bet.id}`}>



                                                    {
                                                        bet.bets.map((val, index) => {
                                                            console.log(3, val)
                                                            return  <div className="OpenBetItem_ParticipantContainer" key={index}>
                                                                <div className="OpenBetItem_Participant">
                                                                    <div className="OpenBetItem_Participant_header">
                                                                        <span className={`OpenBetItem_Participant_icon`}/>
                                                                        <span className="OpenBetItem_Participant_text"> {
                                                                            val.bet_description == 1 || val.bet_description == 2 ?
                                                                                val.participants.map((team) => {
                                                                                    if (val.bet_description == team.position) {
                                                                                        return team.name
                                                                                    }
                                                                                })
                                                                                : val.bet_description == "X" ? "Draw" :  val.bet_description
                                                                            }
                                                                            <span className="OpenBetItem_Participant_line">
                                                                                {val.line == null ||
                                                                                val.line === "underfined" ||
                                                                                val.line == ""?
                                                                                    "" :  val.line}
                                                                            </span>
                                                                        </span>
                                                                        <span
                                                                            className="OpenBetItem_Participant_odds">{val.rate}</span>
                                                                    </div>
                                                                    <div className="OpenBetItem_ParticipantMarket">{ val.market_description }
                                                                    </div>
                                                                    <div className="OpenBetItem_Participant_Fixture">
                                                                        <div className="OpenBetItem_Participant_Fixture_description">
                                                                            {val.event}
                                                                        </div>
                                                                        <div className="BetScores_wrapp" >
                                                                            {
                                                                                (bet.status == 'won' || bet.status == 'lost') ? '' :
                                                                            <div className="BetScore">{val.score != null && Object.keys(val.score).length ? val.score[0].value + '-' + val.score[1].value : ''}</div>
                                                                            }
                                                                            <div className={`BetScore_Goal ${val.id}-goal-icon`}>GOAL</div>
                                                                            {/*class show*/}
                                                                            <div className="BetScore_Time">
                                                                                {getEventBySports(this.state.allEvents, bet.fixture_id, bet.sport_id) == null ?
                                                                                    <span className="match_time">
                                                                                        {moment(moment.utc(bet.event_date)).local().format("ddd DD MMM HH:mm")}
                                                                                    </span> :
                                                                                    <FootballTime event = {getEventBySports(this.state.allEvents, bet.fixture_id, bet.sport_id)}
                                                                                                  setIntervalCount={this.state.setIntervalCount}
                                                                                                  eventStartDate={bet.event_date}
                                                                                                  serverTimestamp={bet.server_timestamp}
                                                                                    />
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        })
                                                    }






                                                    <div className="stakeToReturnContainer">
                                                        <div className="UnitStake">
                                                            <div className="unitStake_Title">Stake</div>
                                                            <div className="unitStake_Content">{bet.total_stake} <span
                                                                className="currency">EUR</span></div>
                                                        </div>
                                                        <div className="toReturnWin">
                                                            <div className="toReturnWin_Title">To Return</div>
                                                            {/*<div className="toReturnWin_Content">{bet.status == "won" ? bet.to_return : "0.00"} */}
                                                            <div className="toReturnWin_Content">{bet.to_return}
                                                            <span className="currency">EUR</span></div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    } else {
                                        return  <div className="settled_tab" key={ind}>
                                            <div className="OpenBetItem">
                                                <div className={`OpenBetItem_header hd-${bet.id}`}  onClick={() => this.props.toggleHistoryLine(bet.id)}>
                                                    <div className="name_container">
                                                        <span className="OpenBetItem_BetStake">{bet.stake}</span>
                                                        <span className="OpenBetItem_name">Single</span>

                                                    </div>
                                                    <span className="OpenBetItem_subname" style={{display: 'none'}}>{
                                                        bet.bet_description == 1 || bet.bet_description == 2 ?
                                                            bet.participants.map((team) => {
                                                                if (bet.bet_description == team.position) {
                                                                    return team.name
                                                                }
                                                            })
                                                            : bet.bet_description == "X" ? "Draw" :  bet.bet_description
                                                    } </span>
                                                    {/*<div className="return_container">*/}
                                                    {/*<div className="can_return show">*/}
                                                    {/*<span className="return_label">{bet.status == "won" ? "Returned" : "Lost"}</span>*/}
                                                    {/*{*/}
                                                    {/*bet.status == "won" ?*/}
                                                    {/*<span className="return_cash">{bet.to_return}</span>*/}
                                                    {/*: ""*/}
                                                    {/*}*/}
                                                    {/*</div>*/}
                                                    {/*</div>*/}
                                                </div>
                                                <div className="message_sub_header" style={{display: 'none'}}>Edit Bet is no longer available
                                                </div>
                                                <div className={`OpenBetItem_details id-${bet.id}`}>




                                                    <div className="OpenBetItem_ParticipantContainer">
                                                        <div className="OpenBetItem_Participant">
                                                            <div className="OpenBetItem_Participant_header">
                                                                <span className={`OpenBetItem_Participant_icon`}/>
                                                                <span className="OpenBetItem_Participant_text">{
                                                                    bet.bet_description == 1 || bet.bet_description == 2 ?
                                                                        bet.participants.map((team) => {
                                                                            if (bet.bet_description == team.position) {
                                                                                return team.name
                                                                            }
                                                                        })
                                                                        : bet.bet_description == "X" ? "Draw" :  bet.bet_description
                                                                    }
                                                                    <span className="OpenBetItem_Participant_line">
                                                                        {bet.line == null ||
                                                                        bet.line === "underfined" ||
                                                                        bet.line == ""?
                                                                            "" :  bet.line}
                                                                    </span>
                                                                </span>
                                                                <span
                                                                    className="OpenBetItem_Participant_odds">{bet.rate}</span>
                                                            </div>
                                                            <div className="OpenBetItem_ParticipantMarket">{bet.market_description }
                                                            </div>
                                                            <div className="OpenBetItem_Participant_Fixture">
                                                                <div className="OpenBetItem_Participant_Fixture_description">
                                                                    {bet.event}
                                                                </div>
                                                                <div className="BetScores_wrapp">
                                                                    {
                                                                        (bet.status == 'won' || bet.status == 'lost') ? '' :
                                                                    <div className="BetScore">{bet.score != null && Object.keys(bet.score).length ? bet.score[0].value + '-' + bet.score[1].value : ''}</div>
                                                                    }
                                                                    <div className={`BetScore_Goal ${bet.id}-goal-icon`}>GOAL</div>
                                                                    {/*class show*/}
                                                                    <div className="BetScore_Time">
                                                                        {getEventBySports(this.state.allEvents, bet.fixture_id, bet.sport_id) == null ?
                                                                            <span className="match_time">
                                                                                {moment(moment.utc(bet.event_date)).local().format("ddd DD MMM HH:mm")}
                                                                            </span> :
                                                                            <FootballTime event = {getEventBySports(this.state.allEvents, bet.fixture_id, bet.sport_id)}
                                                                                          setIntervalCount={this.state.setIntervalCount}
                                                                                          eventStartDate={bet.event_date}
                                                                                          serverTimestamp={bet.server_timestamp}
                                                                            />
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="stakeToReturnContainer">
                                                        <div className="UnitStake">
                                                            <div className="unitStake_Title">Stake</div>
                                                            <div className="unitStake_Content">{bet.stake} <span
                                                                className="currency">EUR</span></div>
                                                        </div>
                                                        <div className="toReturnWin">
                                                            <div className="toReturnWin_Title">To Return</div>
                                                            {/*<div className="toReturnWin_Content">{bet.status == "won" ? bet.to_return : "0.00"} */}
                                                            <div className="toReturnWin_Content">{bet.to_return}
                                                            <span className="currency">EUR</span></div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    }
                                })
                            }

                            {
                                this.state.count > this.state.bets.length ?
                                    <div className="ShowMoreBetsButton" onClick={() => this.props.showMore()}><span>Show More Bets</span></div>
                                    :""
                            }
                        </div>
                        :
                        <div className="EmptyMsg">There are no bets Live Now
                            <p className="emptymsg_linetwo">Any of your In-Play bets can be viewed here</p>
                        </div>
                }

            </div>
        )

    }
}

export default Live;
