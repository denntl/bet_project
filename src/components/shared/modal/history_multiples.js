import React from 'react';



class HistoryMultiples extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selections: this.props.selections
        }
    }
    render() {
        return(
            <div id="historyMultiples" className="modal_bet new_window historyMultiples" role="dialog">
                    <div className="modal-body bet-breakdown">
                       <div className="bet-breakdown-header">
                           <button type="button" className="close" onClick={() => this.props.closeHistoryMultiples()}></button>
                           <div className="bet-breakdown-header-title">Bet Details</div>
                           <div className="bet-breakdown-header-print">Print</div>
                       </div>
                        <div className="bet-breakdown-body-table">
                            <table className="results-table">
                                <thead>
                                <tr>
                                    <th className="results-header-th" colSpan={7}>Trebles</th>
                                </tr>
                                <tr>
                                    <th className="results-header-th fs10 results-header-number">No.</th>
                                    <th className="results-header-th fs10 results-header-selection">Selections</th>
                                    <th className="results-header-th fs10 text-center">Stake</th>
                                    <th className="results-header-th fs10 text-center">Odds</th>
                                    <th className="results-header-th fs10 text-center ">To Return</th>
                                    <th className="results-header-th fs10 text-center ">Result</th>
                                    <th className="results-header-th fs10 text-center ">Return</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.selections.map((sel, ind) => {
                                        return   <tr key={`${ind}-selections`}>
                                            <td className="result-item table_number">{++ind} </td>
                                            <td className="result-item ">{sel.selections}</td>
                                            <td className="result-item text-center">{sel.stake}</td>
                                            <td className="result-item text-center">{sel.odds}</td>
                                            <td className="result-item text-center">0.21</td>
                                            <td className="result-item text-center">{sel.status}</td>
                                            <td className="result-item text-center">{sel.status == "won" ? sel.to_return : "0.00"}</td>
                                        </tr>
                                    })
                                }

                                </tbody>
                            </table>
                        </div>
                        <div className="bet-breakdown-footer">
                            <p className="bet-breakdown-footer-message"> * Bonuses not included.</p>
                            <p className="bet-breakdown-footer-message">  * All bets are accepted and settled in accordance with our Terms and Conditions and Rules.</p>

                            <button type="button" className="modal_btn" onClick={() => this.props.closeHistoryMultiples()}>Close</button>
                        </div>
                    </div>
            </div>
        )

    }
}

export default HistoryMultiples;