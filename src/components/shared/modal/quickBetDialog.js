import React from 'react';
import {postTransferBalance} from "../../helpers/data_account";

export default class TransferBalance extends React.Component {
    constructor(props) {
        super(props);
        this.state={
        }
    }

    activateQuickBet = () => {
        this.props.removeBet("all");
        this.props.enableQuickBet();
        this.props.closeModal('quickBetDialog');
    }

    render() {
        return(
            <div id="failedLogin" className="modal_bet new_window failedLogin_window" role="dialog">
                <div className="modal_content">
                    <div className="modal_header white">
                        <div className="head">Selections On Your Bet Slip</div>
                        <button type="button" className="close" onClick={()=>this.props.closeModal('quickBetDialog')}></button>
                    </div>
                    <div className="modal-body">
                        <div className="form_failedLogin">
                            <div className="form-group">
                                <div className="remark">Your existing selections will need to be cleared to enable Quick Bet.</div>
                                <div className="buttonContainer">
                                    <button  className="modal_btn_failedLogin" onClick = {() => this.activateQuickBet()}>Activate Quick Bet</button>
                                    <button  className="modal_btn_failedLogin" onClick={()=>this.props.closeModal('quickBetDialog')}>Back to Place Bet</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}