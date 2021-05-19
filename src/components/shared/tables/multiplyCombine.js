import React from 'react';


class MultiplyCombine extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            equalMatch: this.props.equalMatch,
            name: {
                1: "Singles",
                2: "Doubles",
                3: "Trebles",
                4: "4 Folds",
                5: "5 Folds",
                6: "6 Folds",
                7: "7 Folds",
                8: "8 Folds",
                9: "9 Folds",
                10: "10 Folds",
                11: "11 Folds",
                12: "12 Folds",
                13: "13 Folds",
                14: "14 Folds"
            },
            currentName: "",
            multiplier: 0,
            bets: {},
            multiCombine: {},
            singles: ""
        };
        this.createStakeCombine = this.createStakeCombine.bind(this);

       this.showCombineBet = this.showCombineBet.bind(this);
    }

    componentDidMount() {

        // console.log('multiDidMount', this.props.multiCombine)
        this.setState({
            bets: this.props.bets,
            multiplier: this.props.count,
            multiCombine: this.props.multiCombine
        })


    }

    componentWillReceiveProps(nextProps) {
        //console.log('multiRecieveProps', nextProps.multiCombine)



        this.setState({
            equalMatch: nextProps.equalMatch,
            multiCombine: nextProps.multiCombine,
            multiplier: nextProps.count,
            bets: nextProps.bets
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (typeof this.state.multiCombine != 'undefined' && Object.keys(this.state.multiCombine).length) {
            for (var i in this.state.multiCombine) {
                // console.log('wwwww', this.state.multiCombine[i].stake)
                this.state.multiCombine[i].stake == 0? $('.bs-MultipleBets_Stake.combine-'+i).val() : $('.bs-MultipleBets_Stake.combine-'+i).val(this.state.multiCombine[i].stake)
            }
        }

    }

    createStakeCombine(stake, bet, type) {
// console.log('type2', stake)
        if (type == 1) {
            let res = parseFloat(stake) * bet;
            let multiCombine = null;
            this.setState({
                singles: stake
            })
            this.props.createStakeCombine(res, stake, multiCombine);

        } else {
           if (stake.length == 0) {
               stake = 0;
           }
            let combineBet = $('.combine-'+type).val();
            let res = parseFloat(stake) * combineBet;
            //this.state.multiCombine[type] = res;
            this.state.multiCombine[type] = {
                res: res,
                stake: stake,
                bet: combineBet,
            };
            let newMultiCombaine = {};
            Object.keys(this.state.multiCombine).map((el) => {
                if(this.state.multiCombine[el].stake != 0){
                    console.log("add")
                    newMultiCombaine[el] = this.state.multiCombine[el]
                }
            })
            this.state.multiCombine = newMultiCombaine
            this.props.createStakeCombine(res, stake, newMultiCombaine);


        }

    }

    showCombineBet(id) {
        if (id == 1 ) {
            return this.state.multiplier;
        } else {
            return this.props.calculationBet(this.state.multiplier, id);
        }
    }
    showCalculation = (name, idx, rate, bets) => {
        let obj = {
            name: name,
            stake: $('.stk.bs-MultipleBets_Stake.combine-'+ idx).val(),
            bets: bets,
            rate: rate,
            idx: idx
        };
        // console.log('gggggggggggggg', obj)
        this.props.showTreblesModal(obj)
    }

    render() {
        // console.log('ttrrr', this.state.multiCombine)
        // console.log('xxxx', this.state.singles)
        return(
            <div>
            {
                Object.keys(this.state.bets).map((bet, index) => {
                    let idx = index +1;
                    return this.state.equalMatch && idx > 1 ? '' : <div className={`bs-Item bs-MultipleBets_StakeRow main_combine ${idx == this.props.count || this.state.equalMatch ? "" : "hide"}`} key={`combine-${index}`}>
                    <div className="bs-MultipleBets_StakeContainer">
                        <div className="bs-MultipleBets_StakeRowLabel" onClick={() => idx != 1 ? this.showCalculation(this.state.name[idx], idx, this.showCombineBet(idx), this.state.bets) : ""}>{this.state.name[idx]}</div>
                        <div className="bs-MultipleBets_StakeData">
                            <div className="bs-MultipleBets_BetCount">{this.showCombineBet(idx)}x</div>
                            <input type="hidden" className={`combine-${idx}`} name={this.state.name[idx]} value={this.showCombineBet(idx)}  />
                            <div className="bs-MultipleBets_Stakeitem">
                                <input type="text"
                                       onInput={(e)=> this.props.maxLengthInput(e)}
                                       className={`stk bs-MultipleBets_Stake combine-${idx}`}
                                       placeholder="Stake"
                                       onChange={(e) => this.createStakeCombine(e.target.value,  this.state.multiplier, idx)}
                                />
                            </div>
                        </div>
                        <div className="bs-MultipleBets_EW"></div>
                    </div>
                </div>
            })
            }
                {
                this.state.multiplier == 3 && !this.state.equalMatch ?
                    <div className="bs-Item bs-MultipleBets_StakeRow extra_combine hide">
                        <div className="bs-MultipleBets_StakeContainer">
                            <div className="bs-MultipleBets_StakeRowLabel">
                                <a href="#" onClick={(e) => {e.preventDefault(); this.showCalculation("Trixie", "3trixie", 4, this.state.bets)}}> Trixie</a>
                            </div>
                            <div className="bs-MultipleBets_StakeData">
                                <div className="bs-MultipleBets_BetCount">4x</div>
                                <input type="hidden" className={`combine-3trixie`} name="trixie" value="4" />
                                <div className="bs-MultipleBets_Stakeitem">
                                    <input onInput={(e)=> this.props.maxLengthInput(e)} type="text" className="stk bs-MultipleBets_Stake combine-3trixie" placeholder="Stake"
                                           onChange={(e) => this.createStakeCombine(e.target.value, this.state.multiplier, "3trixie")}/>
                                    <div className="bs-BetMaxMultiple">
                                        <span className="bs-BetMaxMultiple_Text">Bet Max</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bs-MultipleBets_EW"></div>
                        </div>
                    </div>
                :
                ""
                }
                {
                this.state.multiplier == 4 && !this.state.equalMatch ?
                    <div className="bs-Item bs-MultipleBets_StakeRow extra_combine hide">
                        <div className="bs-MultipleBets_StakeContainer">
                            <div className="bs-MultipleBets_StakeRowLabel">
                                <a href="#" onClick={(e) => {e.preventDefault(); this.showCalculation("Yankee", "4yankee", 11, this.state.bets)}}> Yankee</a>
                            </div>
                            <div className="bs-MultipleBets_StakeData">
                                <div className="bs-MultipleBets_BetCount">11x</div>
                                <input type="hidden" className={`combine-4yankee`} name="yankee" value="11" />
                                <div className="bs-MultipleBets_Stakeitem">
                                    <input onInput={(e)=> this.props.maxLengthInput(e)} type="text" className="stk bs-MultipleBets_Stake combine-4yankee" placeholder="Stake"  onChange={(e) => this.createStakeCombine(e.target.value, this.state.multiplier, "4yankee")}/>
                                    <div className="bs-BetMaxMultiple">
                                        <span className="bs-BetMaxMultiple_Text">Bet Max</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bs-MultipleBets_EW"></div>
                        </div>
                    </div>
                :
                ""
                }
                {
                    this.state.multiplier == 5 && !this.state.equalMatch ?
                        <div className="bs-Item bs-MultipleBets_StakeRow extra_combine hide">
                            <div className="bs-MultipleBets_StakeContainer">
                                <div className="bs-MultipleBets_StakeRowLabel">
                                    <a href="#" onClick={(e) => {e.preventDefault(); this.showCalculation("Super Yankee", "5super_yankee", 26, this.state.bets)}}> Super Yankee</a>
                                </div>
                                <div className="bs-MultipleBets_StakeData">
                                    <div className="bs-MultipleBets_BetCount">26x</div>
                                    <input type="hidden" className={`combine-5super_yankee`} name="super_yankee" value="26" />
                                    <div className="bs-MultipleBets_Stakeitem">
                                        <input onInput={(e)=> this.props.maxLengthInput(e)} type="text" className="stk bs-MultipleBets_Stake combine-5super_yankee" placeholder="Stake" onChange={(e) => this.createStakeCombine(e.target.value, this.state.multiplier, "5super_yankee")}/>
                                        <div className="bs-BetMaxMultiple">
                                            <span className="bs-BetMaxMultiple_Text">Bet Max</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bs-MultipleBets_EW"></div>
                            </div>
                        </div>
                        :
                        ""
                }
            </div>
        )

    }
}

export default MultiplyCombine;