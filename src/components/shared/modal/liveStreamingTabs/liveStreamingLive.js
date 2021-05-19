import React from 'react';



class LiveStreamingLive extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            innerTab: "live"
        }
    }
    changeInnerTab = (tab) =>{
        this.setState({
            innerTab: tab
        })
    }

    render() {
        return(
            <div>
                <div className="tabs_wrapp">
                        <div className={`bottom_tab ${this.state.innerTab == "live" ? 'active' : ''}`} onClick={()=>this.changeInnerTab('live')}>Live</div>
                        <div className={`bottom_tab ${this.state.innerTab == "schedule" ? 'active' : ''}`} onClick={()=>this.changeInnerTab('schedule')}>Schedule</div>
                        <div className={`bottom_tab ${this.state.innerTab == "faqs" ? 'active' : ''}`} onClick={()=>this.changeInnerTab('faqs')}>FAQs</div>
                 </div>
                <div className="streaming-main-body-container">
                    {this.state.innerTab == "live" ?
                           <div className="schedule_list">
                               <div className="selectSports">
                                   <span>All Sports</span>
                               </div>
                               <div className="sportsListWrapper scroll_block">
                                   <div className="sportItem">
                                       <div className="sportIcon tennis"></div>
                                       <div className="sportTime">16:30</div>
                                       <div className="sportName">Roman Safiullin v Alexander Vasilenko</div>
                                   </div>
                                   <div className="sportItem">
                                       <div className="sportIcon soccer"></div>
                                       <div className="sportTime">16:30</div>
                                       <div className="sportName">Roman Safiullin v Alexander Vasilenko</div>
                                   </div>
                                   <div className="sportItem">
                                       <div className="sportIcon soccer"></div>
                                       <div className="sportTime">16:30</div>
                                       <div className="sportName">Roman Safiullin v Alexander Vasilenko</div>
                                   </div>
                                   <div className="sportItem">
                                       <div className="sportIcon soccer"></div>
                                       <div className="sportTime">16:30</div>
                                       <div className="sportName">Roman Safiullin v Alexander Vasilenko</div>
                                   </div>
                                   <div className="sportItem">
                                       <div className="sportIcon volleyball"></div>
                                       <div className="sportTime">16:30</div>
                                       <div className="sportName">Roman Safiullin v Alexander Vasilenko</div>
                                   </div>
                                   <div className="sportItem">
                                       <div className="sportIcon badminton"></div>
                                       <div className="sportTime">16:30</div>
                                       <div className="sportName">Roman Safiullin v Alexander Vasilenko</div>
                                   </div>
                               </div>
                           </div>
                    :""}
                    {this.state.innerTab == "schedule" ?
                        <div>ddd</div>
                        :""}
                    {this.state.innerTab == "faqs" ?
                        <div>zzz</div>
                        :""}
                    <div className="player_window">
                        <div className="buttonswrapper">
                            <div className="player_window_title">
                                Live Streaming Available
                            </div>
                            <div className="btn_line">
                                <div className="links loginLink">Log In</div>
                                <div className="links JoinLink">Join</div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="LiveStreamingDisclaimer">
                    You must have a funded Sports account or have placed a bet within the last 24 hours in order to view bet365 streams. For other FAQs, please see the above tab.
                </div>
            </div>
        )

    }
}

export default LiveStreamingLive;