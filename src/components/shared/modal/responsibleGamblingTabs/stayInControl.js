import React from 'react';



class StayInControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            innerNav:"limit"
        }
    }
    changeTab = (tab) => {
        this.setState({
            innerNav: tab
        })
    }

    render() {
        return(
            <div className="innerPages">
                <div className="responsible_top_banner stayInControl">
                    <div className="top_banner_slogan">
                        <div className="top_banner_slogan_text">
                            <strong>About Responsible Gambling</strong>
                        </div>
                        <div className="top_banner_slogan_text">
                            Responsible Gambling is for everyone, regardless of whether you identify yourself as having a gambling problem.
                        </div>
                    </div>
                    <div className="innerPageNav">
                        <ul>
                            <li className={`inner-link ${this.state.innerNav == "limit" ? 'active' : ''}`}onClick={()=>this.changeTab('limit')}>Limit Your Account</li>
                            <li className={`inner-link ${this.state.innerNav == "recognize" ? 'active' : ''}`} onClick={()=>this.changeTab("recognize")}>Recognising a Problem</li>
                            <li className={`inner-link ${this.state.innerNav == "budget" ? 'active' : ''}`} onClick={()=>this.changeTab("budget")}>Budget Calculator</li>
                            <li className={`inner-link ${this.state.innerNav == "track" ? 'active' : ''}`} onClick={()=>this.changeTab("track")}>Track Your Spending</li>
                            <li className={`inner-link ${this.state.innerNav == "timeOut" ? 'active' : ''}`} onClick={()=>this.changeTab("timeOut")}>Time-Out</li>
                            <li className={`inner-link ${this.state.innerNav == "selfExclusion" ? 'active' : ''}`} onClick={()=>this.changeTab("selfExclusion")}>Self-Exclusion</li>
                        </ul>
                    </div>
                </div>
                <div className="r-main-section">
                    <div className="r-main-section_wrapp">
                    {this.state.innerNav == "limit" ?
                        <div>

                        </div>
                        :""}
                    {this.state.innerNav == "recognize" ?
                        <div></div>
                        :""}
                    {this.state.innerNav == "budget" ?
                        <div></div>
                        :""}
                    {this.state.innerNav == "track" ?
                        <div></div>
                        :""}
                    {this.state.innerNav == "timeOut" ?
                        <div></div>
                        :""}
                    {this.state.innerNav == "selfExclusion" ?
                        <div></div>
                        :""}
                </div>
            </div>
            </div>
        )

    }
}

export default StayInControl;