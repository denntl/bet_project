import React from 'react';



class LostLoginError extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div id="lost_login_error" className="modal_bet new_window" role="dialog">
                <div className="modal_content">
                    <div className="modal-body lost_login_error">
                        <div className="error_title">Some entries were not completed correctly</div>

                        <div className="sub_error_title">Please review the following fields</div>

                        <ul className="error_list">
                            <li>Email Address</li>
                            <li>4 Digit Security Number</li>
                            <li>Date of Birth</li>
                        </ul>

                        <button  className="modal_btn">OK</button>

                        <div className="need_help">
                            Need Help? <a href="#">Open Chart</a>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default LostLoginError;