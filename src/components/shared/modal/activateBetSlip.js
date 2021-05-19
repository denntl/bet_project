import React from 'react';



class ActivateBetSlip extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div id="activateBetSlip" className="modal_bet new_window activateBetSlip_window">
                <div className="modal_content">
                    <button type="button" className="close" onClick={()=>this.props.closeModal('activateBetSlip')}></button>
                     <div className="modal-body quickBet-body">
                        <div className="quickBetTitle">Selections On Your Bet Slip</div>
                        <div className="quickBetMessage">Your existing selections will need to be cleared to enable Quick Bet.</div>
                        <div className="quickBetButtonsWrapp">
                            <div className="quickBetButton">Activate Quick Bet</div>
                            <div className="quickBetButton">Back to Place Bet</div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default ActivateBetSlip;