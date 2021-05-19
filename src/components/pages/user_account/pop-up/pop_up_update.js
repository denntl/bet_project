import React from 'react';



class PopUpUpdate extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div id="pop_up_info" className="modal_bet new_window pop_up_info_window pop_up_account" role="dialog">
                <div className="modal_content">
                    <div className="modal_header success">
                        <div className="success_icon"/>
                        <div className="header_text">Preferences Updated</div>
                    </div>
                    <div className="modal-body pop_up_account_body">
                        <p className="update_text">Thank you, your preferences have now been changed.</p>

                        <div className="meaning btn_group center">
                            <div className="change_btn update" onClick={()=>this.props.closeModal('update')}>Close</div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default PopUpUpdate;