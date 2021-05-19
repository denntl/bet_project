import React from 'react';



class ModalCustomError extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            typeError: this.props.typeError,
        };
    }
    render() {
        return(
            <div id="bet_slip_modal_error" className="modal_window_login">
                <div className="modal_content">
                    <div className="bet_slip_login">
                        <div className="btn_modal_close" onClick={() => this.props.closeErrorModal()}>×</div>
                        <div className="modal_header">{this.state.typeError}</div>
                    </div>
                </div>

            </div>
        )
    }
}

export default ModalCustomError;
