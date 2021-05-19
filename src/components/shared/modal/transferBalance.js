import React from 'react';
import {postTransferBalance} from "../../helpers/data_account";

export default class TransferBalance extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            error: false,
            errorText: "",
            success: false,
            loginToken: this.props.loginToken,
            userName: "",
            amount: 0
        }
    }
    closeModal = (inputName) => {
        this.setState({
            error: false,
            success: false,
        });
        this.props.closeModal(inputName)
    }
    onChangeInput = (value, userName) => {
        this.setState({
            [userName]: value,
        });
    }
    transferBalance = ()=>{
        // console.log("77777777", this.state.loginToken)
        let options = {
            token: `${this.state.loginToken}`,
            from: "sports",
            to: "sports",
            receiver: this.state.userName,
            amount: this.state.amount
        };
        postTransferBalance(options, function (err, data) {
            if (!err) {
                console.log('transferBalance-success', data.response);
                this.props.updateBalance(data.balance)
                this.setState({
                    error: false,
                    success: true,
                });
            } else {
                console.log('transferBalance-error', err.response);
                this.setState({
                    error: err.response.data.errors.amount[0],
                    success: false,
                });
            }
        }.bind(this))
    }
    render() {
        return(
            <div id="failedLogin" className="modal_bet new_window failedLogin_window" role="dialog">
                <div className="modal_content">
                    <div className="modal_header white">
                        <div className="head">Transfer Balance</div>
                        <button type="button" className="close" onClick={()=>this.closeModal('transferBalance')}></button>
                    </div>
                    <div className="modal-body">
                        <div className="form_failedLogin">
                            <div className="form-group">
                                <input type="text" placeholder="User's name" className="failed_input" name="name"
                                       onChange={(e) => this.onChangeInput(e.target.value, "userName")} />
                                <input type="number" placeholder="Amount" min = "0" step = "10" className="failed_input" name="count"
                                       onChange={(e) => this.onChangeInput(e.target.value, "amount")}/>
                                <button  className="modal_btn_failedLogin" onClick={()=>this.transferBalance()}>Transfer Balance</button>
                                {this.state.error? <div className="transferBalanceError">{this.state.error}</div> : ""}
                                {this.state.success? <div className="transferBalanceSuccess">Request successful</div> : ""}
}                           </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}