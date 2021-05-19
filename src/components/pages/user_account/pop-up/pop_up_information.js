import React from 'react';



class PopUpInfo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div id="pop_up_info" className="modal_bet new_window pop_up_info_window pop_up_account" role="dialog">
                <div className="modal_content">
                    <div className="modal_header">
                        <button type="button" className="close" onClick={()=>this.props.closeModal('info')}></button>
                        <div className="header_text">Betting Options</div>
                    </div>
                    <div className="modal-body pop_up_account_body">
                        <p>This option allows you to select the betting options that will appear on your bet slip. The 'Default' setting will display only the Standard and Banker bet slips:</p>
                        <ul>
                            <li>Standard</li>
                            <li>Banker</li>
                        </ul>
                        <p>The 'Show All' option will also display the following betting options on your bet slip:</p>
                        <ul>
                            <li>If Bet</li>
                            <li>Reverse If Bet</li>
                            <li>Teaser</li>
                        </ul>

                        <div className="meaning btn_group center">
                            <div className="change_btn update" onClick={()=>this.props.closeModal('info')}>Continue</div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default PopUpInfo;