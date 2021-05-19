import React from 'react';



class AudioModal extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div id="audioModal" className="modal_bet new_window audioModal" role="dialog">
                <div className="modal_content">
                    <div className="top_header liveStreaming">
                        <button type="button" className="close" onClick={() => this.props.closeModal('audioModal')}></button>
                        <div className="logo"></div>
                    </div>
                    <div className="containerMain">
                        <div className="streaming">
                            <div id="flashContainer">
                                <object type="application/x-shockwave-flash" data="https://content001.bet365.com/Extra/bet365ExtraImages/bet365/Streaming/engrow/LiveHorseRacingStreamIn.swf" width="480" height="375" id="flashcontent" >
                                    <param name="wmode" value="transparent"/><param name="bgcolor" value="#000000"/></object>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default AudioModal;