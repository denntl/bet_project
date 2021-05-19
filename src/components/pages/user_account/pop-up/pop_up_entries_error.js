import React from 'react';



class PopUpEntriesError extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div id="pop_up_info" className="modal_bet new_window pop_up_info_window pop_up_account" role="dialog">
                <div className="modal_content">
                    <div className="modal-body lost_login_error">
                        <div className="error_title">{this.props.undefinedServerError ? 'Something was wrong' : 'Some entries were not completed correctly'}</div>
                        <div className="sub_error_title">{this.props.undefinedServerError ? 'Please contact support' : 'Please review the following fields'}</div>

                        <ul className="error_list">
                            {
                                Object.keys(this.props.errors).map((error) => {
                                if (this.props.errors[error]) {
                                    return  <li key={error}>{error.replace("error_", "")}</li>
                                }
                            })
                            }


                        </ul>

                        <div className="meaning btn_group center">
                            <div className="change_btn update" onClick={()=>this.props.closeModal('error')}>OK</div>
                        </div>

                        <div className="need_help">
                            Need Help? <a href="#">Open Chart</a>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default PopUpEntriesError;