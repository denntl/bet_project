import React from 'react';

class Modal_Bet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            combineCalculation: this.props.combineCalculation,
            calculation: []
        }
    }

    componentWillMount() {
        let calculation = [];
        let typeCombine = this.state.combineCalculation.name;
        let count = Object.keys(this.state.combineCalculation.bets).length;
        console.log('count', count);
        let arr = [];


        function recurs(arr, combine, lvl=0) {
            if (arr.length <= 1) {
               return [arr];
            }
            var a = arr.slice(0, 1)

            var tempArr = recurs(arr.slice(1), combine, lvl+1)
            var currArr = [];
            currArr.push(a)

            for (var i = 0; i < tempArr.length; i++) {
                if (tempArr[i].length < combine) {
                    currArr.push(a.concat(tempArr[i]))
                }

                currArr.push(tempArr[i])
            }

            if (lvl === 0) {
            let newAr = []

                for (let i =0; i< currArr.length; i++ )  {
                    if (currArr[i].length == combine) {
                        newAr.push(currArr[i])
                    }
                }
                currArr = newAr
            }
            return currArr
        }

        if ( this.state.combineCalculation.idx == "3trixie" || this.state.combineCalculation.idx == "4yankee"|| this.state.combineCalculation.idx == "5super_yankee" ) {
            let number = parseInt(this.state.combineCalculation.idx);
            let indArr = Object.keys(this.state.combineCalculation.bets).map((id, index) => {return index + 1});
            for (let x = 2; x <= number; x ++) {
                let tempArr = recurs(indArr, x);
                 tempArr.map((el) => {
                     arr.push(el.join('/'))
                });

            }

        } else {
            let tempArr = recurs(Object.keys(this.state.combineCalculation.bets).map((id, index) => {return index + 1}), parseInt(this.state.combineCalculation.idx));
            arr = tempArr.map((el) => {
                return el.join('/')
            })
        }

        // arr.sort(function(a, b) {
        //     if (a > b) return 1;
        //     if (a < b) return -1;
        // })


        for (let x = 0; x < this.state.combineCalculation.rate; x++) {
            let curBets = arr[x].split('/');
            let objOdds = {};

            objOdds[curBets.join('')] = 0;

            Object.keys(this.state.combineCalculation.bets).map((idx) => {

                for (let x = 0; x <= curBets.length; x++) {
                    if (this.state.combineCalculation.bets[idx].sort == curBets[x]) {
                        let rate = this.state.combineCalculation.bets[idx].bet.Price;
                        console.log('gggggggggggggggggggggggg', rate)

                        if (objOdds[curBets.join('')] === 0) {
                            objOdds[curBets.join('')] = rate;
                            console.log('########11111111111', objOdds)
                        } else {
                            let res = objOdds[curBets.join('')] * rate;
                            objOdds[curBets.join('')] = res;
                            console.log('########22222222222', objOdds)
                        }
                    }
                }

            })
            console.log('########333333333333', objOdds)
            let obj = {
                selections: arr[x],
                odds: objOdds[curBets.join('')].toFixed(2),//objOdds[arr[x]][0] * objOdds[arr[x]][1],
                return: (this.state.combineCalculation.stake * objOdds[curBets.join('')]).toFixed(2)
            };

            calculation.push(obj)
        }


        this.setState({
            calculation: calculation
        })
    }

    render() {
        console.log("combineCalculation", this.state)
        return(
            <div className="modal_bet fade show" id="trebles_modal" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close grey" onClick={() => this.props.closeModal()}></button>
                            <p className="modal-title">Bet Details</p>
                            <h4 className="modal-sub-title">{this.state.combineCalculation.name}</h4>
                        </div>
                        <div className="modal-body scroll_block">
                            <table className="bw-BetslipBreakdownDialog_TableWin">
                                <tbody>
                                <tr className="bw-BetslipBreakdownDialog_HeaderBar">
                                    <td className="bw-BetslipBreakdownDialog_HeaderCell">
                                        <label>Selections</label></td>
                                    <td className="bw-BetslipBreakdownDialog_HeaderCell"><label>Stake</label>
                                    </td>
                                    <td className="bw-BetslipBreakdownDialog_HeaderCell"><label>Odds</label>
                                    </td>
                                    <td className="bw-BetslipBreakdownDialog_HeaderCell"><label>To
                                        Return</label></td>
                                </tr>
                                {
                                    this.state.calculation.map((element, index) => {
                                        return <tr key={index}>
                                            <td className="bw-BetslipBreakdownDialog_DataCell bw-BetslipBreakdownDialog_FirstRow">
                                                <label>{element.selections}</label></td>
                                            <td className="bw-BetslipBreakdownDialog_DataCell bw-BetslipBreakdownDialog_FirstRow">
                                                <label>{this.state.combineCalculation.stake != ("" || 0)? parseFloat(this.state.combineCalculation.stake).toFixed(2) : ""}</label></td>
                                            <td className="bw-BetslipBreakdownDialog_DataCell bw-BetslipBreakdownDialog_FirstRow">
                                                <label>{this.state.combineCalculation.stake != ("" || 0) ?  element.odds: "SP" }</label></td>
                                            <td className="bw-BetslipBreakdownDialog_DataCell bw-BetslipBreakdownDialog_FirstRow">
                                                <label>{this.state.combineCalculation.stake != ("" || 0) ?  element.return : "" }</label></td>
                                        </tr>
                                    })
                                }


                                {/*<tr>*/}
                                    {/*<td className="bw-BetslipBreakdownDialog_DataCell"><label>1/3</label></td>*/}
                                    {/*<td className="bw-BetslipBreakdownDialog_DataCell"><label></label></td>*/}
                                    {/*<td className="bw-BetslipBreakdownDialog_DataCell"><label>SP</label></td>*/}
                                    {/*<td className="bw-BetslipBreakdownDialog_DataCell"><label></label></td>*/}
                                {/*</tr>*/}
                                {/*<tr>*/}
                                    {/*<td className="bw-BetslipBreakdownDialog_DataCell"><label>1/4</label></td>*/}
                                    {/*<td className="bw-BetslipBreakdownDialog_DataCell"><label></label></td>*/}
                                    {/*<td className="bw-BetslipBreakdownDialog_DataCell"><label>SP</label></td>*/}
                                    {/*<td className="bw-BetslipBreakdownDialog_DataCell"><label></label></td>*/}
                                {/*</tr>*/}
                                {/*<tr>*/}
                                    {/*<td className="bw-BetslipBreakdownDialog_DataCell"><label>2/3</label></td>*/}
                                    {/*<td className="bw-BetslipBreakdownDialog_DataCell"><label></label></td>*/}
                                    {/*<td className="bw-BetslipBreakdownDialog_DataCell"><label>SP</label></td>*/}
                                    {/*<td className="bw-BetslipBreakdownDialog_DataCell"><label></label></td>*/}
                                {/*</tr>*/}
                                {/*<tr>*/}
                                    {/*<td className="bw-BetslipBreakdownDialog_DataCell"><label>2/4</label></td>*/}
                                    {/*<td className="bw-BetslipBreakdownDialog_DataCell"><label></label></td>*/}
                                    {/*<td className="bw-BetslipBreakdownDialog_DataCell"><label>SP</label></td>*/}
                                    {/*<td className="bw-BetslipBreakdownDialog_DataCell"><label></label></td>*/}
                                {/*</tr>*/}
                                {/*<tr>*/}
                                    {/*<td className="bw-BetslipBreakdownDialog_DataCell"><label>3/4</label></td>*/}
                                    {/*<td className="bw-BetslipBreakdownDialog_DataCell"><label></label></td>*/}
                                    {/*<td className="bw-BetslipBreakdownDialog_DataCell"><label>SP</label></td>*/}
                                    {/*<td className="bw-BetslipBreakdownDialog_DataCell"><label></label></td>*/}
                                {/*</tr>*/}
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <div>Bonuses not included.</div>
                            <div>'To Return' values are subject to maximum payouts as detailed in our rules. </div>

                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default Modal_Bet;
