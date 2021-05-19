import React from 'react';



class ImportantNote extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            show_notes: false
        }
    }
// toggle notes
toggle=()=>{
        this.setState({show_notes: !this.state.show_notes})
}
    render() {
        return(
            <div className="important_info">
                <div className="important_info_header" onClick={() => this.toggle()}>Important note on information displayed and
                    transmission delays
                </div>

                <div className={(this.state.show_notes)?("important_info_content show"):("important_info_content")}>
                    <div className="close_btn" onClick={() => this.toggle()}>Close</div>
                    <p className="header_info">Important Info</p>
                    <p className="important_info_text">
                        Although every effort is made to ensure that information displayed on site with
                        regards to an event is correct, it is to be used as a guide only. In the event
                        of any particular information (score, time of game etc) being incorrect we
                        assume no liability for this. Please refer to our betting rules for information
                        on how we settle individual markets.
                    </p>
                    <p className="important_info_text">
                        For the purposes of In-Play betting, customers should be aware that
                        transmissions described as live by some broadcasters including bet365 Live
                        Streaming may actually be delayed. The extent of any delay may vary between
                        customers, depending on the set-up through which they are receiving pictures or
                        data.
                    </p>
                </div>

            </div>
        )

    }
}

export default ImportantNote;