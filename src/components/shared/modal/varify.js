import React from 'react';



class Varify extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div id="verifyUser" className="modal_bet new_window" role="dialog">
                <div className="modal_content">
                    <div className="modal-body verify_body">
                        <div className="verify_title">Please verify your identity</div>

                        <div className="sub_verify_title">Your identity must be verified to allow continued use of your account.</div>

                        <button  className="modal_btn verify_btn">Verify identity</button>
                        <button  className="remind_btn">Remind me later</button>

                    </div>
                </div>
            </div>
        )

    }
}

export default Varify;