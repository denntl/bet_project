import React from 'react';

const factorial = {
    1: 1,
    2: 2,
    3: 6,
    4: 24,
    5: 120,
    6: 720,
    7: 5040,
    8: 40320,
    9: 362880,
    10: 3628800,
    11: 39916800,
    12: 479001600,
    13: 6227020800,
    14: 87178291200
};

class DefaultPage extends React.Component {
    constructor(props) {
        super(props);
    }

    calculationBet = (count, typeBet) => {
        let res = 0;


        switch (typeBet) {
            case "3trixie":
                res = 4;
                break;
            case "4yankee":
                res = 11;
                break;
            case "5super_yankee":
                res = 26;
                break;
            default:
                if (count != typeBet) {
                    let diff = count - typeBet;
                    res = parseFloat(factorial[count]) / (parseFloat(factorial[typeBet] * parseFloat(factorial[diff])));
                } else {
                    res = 1 ;
                }
                break;
        }
        return res;
    };

    removeBet(id, betArr = []) {
        let arr = {};
        let st = 0;
        let total = 0;
        let idArr = [];
        let multiCombine ={};
        this.props.changeMaxSelections(false)
        if (id != "all") {
            for (var i in this.state.bets) {
                if (i != id && betArr.indexOf(i) == -1) {
                    arr[i] = this.state.bets[i];
                    if (this.state.bets[i].stake != "") {
                        st = this.state.bets[i].stake;
                    }
                    total += parseFloat(st);
                } else {
                    idArr.push(i)
                }

            }
            idArr.forEach((id) => {
                $('.' + id ).removeClass('selected_bet');
                $('.' + id + '-premath, .' + id + '-prematch, #' + id + '-in_play, .' + id + "-in_play" ).removeClass('selected_bet');
            })
            let count = Object.keys(arr).length;

            for (var x in this.state.multiCombine) {

                if (count >= x ) {

                    let betNew = this.calculationBet(count, x);
                    let stake = "";
                    if (this.state.multiCombine[x].stake != "") {
                        stake =  this.state.multiCombine[x].stake
                    } else {
                        stake = 0
                    }
                    let res  =  stake * betNew;


                    multiCombine[x] = {
                        res: res,
                        stake: this.state.multiCombine[x].stake
                    };
                    total += parseFloat(multiCombine[x].res)
                }
            }

            // for (var x in multiCombine) {
            //     total += parseFloat(multiCombine[x].res);
            // }

            this.setState({
                currentTotalStake: total,
                multiCombine: multiCombine
            })

        } else {
            window.localStorage.removeItem("currentStake");
            $('.selected_bet').removeClass('selected_bet');
            this.setState({
                currentTotalStake: 0,
                multiCombine: {}
            })
        }
        this.props.saveBetToLocalStorage(arr, total, multiCombine)
        this.setState({
            bets: arr,
            quickBet: {}
        });

    }

    changeMaxSelections = (value) => {
        this.props.changeMaxSelections(value)
    }

    addToBetSlip = (info, bet, typeBet) => {
        console.log("addToBetSlip",info, bet, typeBet)
        if(bet.Price === 'N/A') return false;

        if (this.state.quickBetEnabled) {
            let newBets = {};
            if (this.state.selectedQuickBetId){
                if(this.state.selectedQuickBetId == bet.Id){
                    //this.props.saveBetToLocalStorage(newBets, 0, {});
                    this.props.changeStateQuickBet(newBets)
                    this.setQuickBetId(false);

                    return;
                } else {
                    $('#'+ this.state.selectedQuickBetId +'-in_play').removeClass("selected_bet");
                    $('#'+ bet.Id +'-in_play').addClass("selected_bet");
                    this.removeBet(this.state.selectedQuickBetId);
                }
            }
            newBets[bet['Id']]= {
                info: info,
                bet: bet,
                typeBet: typeBet,
                resStake: 0,
                stake: "",
                sort: 1
            };
            let total = parseFloat(bet['stake']);
            this.props.changeStateQuickBet(newBets)
            this.setState({
                currentTotalStake: total
            });
            this.setQuickBetId(bet['Id']);



        } else {
            window.localStorage.setItem("quickBet", 'disable');
            this.setState({
                selectedQuickBetId: false,
                quickBetEnabled: false,
            })
            let newbets = {};

            if (Object.keys(this.state.bets).length >= 1) {
                let isSet = Object.keys(this.state.bets).some((ind) => {
                    return ind == bet.Id
                });
                if (isSet) {
                    this.props.changeMaxSelections(false)
                    for (var i in this.state.bets) {
                        if (i == bet.Id) {
                        } else {
                            newbets[i] =  this.state.bets[i]
                        }
                    }

                    this.props.saveBetToLocalStorage(newbets, this.state.currentTotalStake, this.state.multiCombine)

                    this.setState({
                        bets: newbets
                    });
                } else if(Object.keys(this.state.bets).length > 13){
                    this.props.changeMaxSelections(true)
                    $("#"+bet.Id+"-in_play").removeClass("selected_bet")
                } else {

                    this.state.bets[bet['Id']]= {
                        info: info,
                        bet: bet,
                        typeBet: typeBet,
                        resStake: 0,
                        stake: "",
                        sort: Object.keys(this.state.bets).length + 1
                    };
                    let count = Object.keys(this.state.bets).length;
                    let multiCombine = this.state.multiCombine;
                    let total = 0;

                    if (!Object.keys(multiCombine).length) {
                        Object.keys(this.state.bets).map((bet) => {
                            let st = 0;
                            if (this.state.bets[bet].stake != "") {
                                st = this.state.bets[bet].stake;
                            }
                            total += parseFloat(st);
                        })
                    }


                    if (Object.keys(multiCombine).length) {
                        Object.keys(this.state.bets).map((bet, index) => {
                            let st = 0;
                            if (this.state.bets[bet].stake != "") {
                                st = this.state.bets[bet].stake;
                            }
                            total += parseFloat(st);
                            let idx = index +1;
                            if (idx != 1) {
                                let betNew = this.calculationBet(count, idx);
                                let stake = "";
                                if (multiCombine[idx] != undefined && multiCombine[idx].stake != "") {
                                    stake =  multiCombine[idx].stake
                                } else {
                                    stake = 0
                                }
                                let res  =  stake * betNew;
                                multiCombine[idx] = {
                                    res: res,
                                    stake: stake
                                }
                                total +=  multiCombine[idx].res;
                            }

                        })
                    }


                    this.props.saveBetToLocalStorage(this.state.bets, total, this.state.multiCombine)

                    this.setState({
                        bets:  this.state.bets,
                        currentTotalStake: total
                    })
                }



            } else {
                this.state.bets [bet['Id']] = {
                    info: info,
                    bet: bet,
                    typeBet: typeBet,
                    resStake: 0,
                    stake: "",
                    sort: 1
                };

                this.props.saveBetToLocalStorage(this.state.bets, this.state.currentTotalStake, this.state.multiCombine)

                this.setState({
                    bets: this.state.bets
                })
            }
        }

    }

    acceptChanged = () => {

        let bets = [];
        let needToUpdateBetState = false;
        if(this.state.allEvents.length != 0) { //check if allEvents have elements
            Object.keys(this.state.bets).map((ind) => {
                if (this.state.bets[ind]['changed'] == true && this.state.bets[ind]['suspended'] != true) {
                    this.state.bets[ind]['changed'] = false
                    this.setState({
                        bets: this.state.bets
                    })
                    needToUpdateBetState = true;
                }
                if (this.state.bets[ind]['suspended'] == true) {
                    bets.push(this.state.bets[ind].bet.Id);
                    needToUpdateBetState = true;
                }
            })
        }
        if(needToUpdateBetState){
            this.setState({
                bets: this.state.bets
            });
            this.props.saveBetToLocalStorage(this.state.bets, this.state.currentTotalStake, this.state.multiCombine)
        }
        if(bets.length){
            this.removeBet(null, bets)
        }

    }

    render() {}
}

export default DefaultPage;
