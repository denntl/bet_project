import React from 'react';



class PopUpBalanceSum extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div id="pop_up_info" className="modal_bet new_window pop_up_info_window pop_up_account sport_balance" role="dialog">
                <div className="modal_content">
                    <div className="modal_header no_border">
                        <button type="button" className="close" onClick={()=>this.props.closeModal('balanceSum')}></button>
                        <div className="header_text">Sports Balance Summary (EUR)</div>
                    </div>
                    <div className="modal-body pop_up_account_body">
                        <table className="summary_table">
                            <tr>
                                <td className="title_balance">Withdrawable Balance</td>
                                <td>14.82</td>
                            </tr>
                            <tr>
                                <td className="title_balance">Bonus Balance</td>
                                <td>0.00</td>
                            </tr>
                            <tr>
                                <td className="title_balance">Total Balance</td>
                                <td>14.82</td>
                            </tr>
                        </table>

                        <div className="meaning btn_group center">
                            <div className="change_btn update" onClick={()=>this.props.closeModal('balanceSum')}>Close</div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default PopUpBalanceSum;