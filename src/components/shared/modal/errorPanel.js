import React from 'react';

export default class ErrorPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            requestFailed: this.props.requestFailed
        }
    }

    render() {
        const requestFailed = this.state.requestFailed
        return(
            <div id="failedLogin" className="modal_bet new_window failedLogin_window errorModal" role="dialog">
                <div className="modal_content">
                    <div className="modal_header white">
                        <div className="valid_icon"></div>
                        <div className="head">{requestFailed? "Transfer Unsuccessful" : "Some entries were not completed correctly" }</div>
                    </div>
                    <div className="modal-body">
                        <div className="form_failedLogin">
                            <div className="form-group">
                                {requestFailed ?
                                    <div className="remark">{requestFailed}</div>
                                    :
                                    <div>
                                        <div className="remark">Please review the following fields:</div>
                                        <ul className = "errorsList">
                                            <li>Transfer to</li>
                                            <li>Amount</li>
                                        </ul>
                                    </div>
                                }
                                <div className="buttonContainer">
                                    <button  className="modal_btn_failedLogin"
                                             onClick = {() => this.props.closeModal("errorPanel")}>OK</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}