import React from 'react';



class LostLoginRequestSuccessful extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div id="lost_login_request_successful" className="modal_bet new_window" role="dialog">
                <div className="modal_content">
                    <div className="modal-body lost_login_error">
                        <div className="error_title success">Thank you, your password has now been changed.</div>

                        <button onClick={() => this.props.successButtonClick()} className="modal_btn">Continue</button>


                    </div>
                </div>
            </div>
        )

    }
}

export default LostLoginRequestSuccessful;