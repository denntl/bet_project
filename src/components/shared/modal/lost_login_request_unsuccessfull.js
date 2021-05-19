import React from 'react';



class LostLoginRequestUnsuccessful extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div id="lost_login_request_unsuccessful" className="modal_bet new_window" role="dialog">
                <div className="modal_content">
                    <div className="modal-body lost_login_error">
                        <div className="error_title">Request Unsuccessful</div>

                        <div className="sub_error_title">Sorry, but the details you have supplied do not match any account information we have stored.</div>


                        <button className="modal_btn" onClick={() => this.props.closeModal('LostLoginRequestUnsuccessful')}>Close</button>

                        <div className="need_help">
                            Need Help? <a href="#">Open Chart</a>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default LostLoginRequestUnsuccessful;