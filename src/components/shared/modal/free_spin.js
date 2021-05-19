import React from 'react';



class FreeSpin extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div id="freeSpin" className="freeSpin_modal" role="dialog">
                <div className="modal_content">
                    <div className="close_casino" onClick={()=>this.props.closeModal('freeSpin')}> × </div>
                    <div className="modal-body freeSpin_body">
                       <div className="freeSpin_message_block">
                           <div className="freeSpin_message_title">Free Spin Giveaway</div>
                           <div className="freeSpin_message_text_wrapp">
                               <div className="freeSpin_message_text"> imobile922, you've won free spins on one of our top games</div>
                               <div className="freeSpin_message_text after_spinning"> You have won 10 Free Spins on Game</div>
                           </div>
                           <div className="freeSpin_btn">Spin The Wheel</div>
                           <div className="freeSpin_btn play">Play Game</div>
                           <a href="#" className="freeSpin_terms">Terms and Conditions Apply</a>
                       </div>
                        <div className="freeSpin_canvas_block">
                            <div className="result_after_spinning">
                                <span className="result_game">Wu Long</span>
                                <span className="free_spins">Free Spins</span>
                            </div>
                            <div className="canvas_second_wrapper">
                                <canvas className="wof-canvas"></canvas>
                                <div className="wof-cycle"></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default FreeSpin;