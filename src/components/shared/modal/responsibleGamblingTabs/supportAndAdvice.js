import React from 'react';



class SupportAndAdvice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            innerNav:"overview"
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
                <div className="responsible_top_banner support">
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
                            <li className={`inner-link ${this.state.innerNav == "overview" ? 'active' : ''}`}onClick={()=>this.changeTab('overview')}>Overview</li>
                            <li className={`inner-link ${this.state.innerNav == "problem" ? 'active' : ''}`} onClick={()=>this.changeTab("problem")}>Problem Gambling</li>
                            <li className={`inner-link ${this.state.innerNav == "gamblingWorks" ? 'active' : ''}`} onClick={()=>this.changeTab("gamblingWorks")}>How Gambling Works</li>
                            <li className={`inner-link ${this.state.innerNav == "myths" ? 'active' : ''}`} onClick={()=>this.changeTab("myths")}>Myths Explained</li>
                        </ul>
                    </div>
                </div>
            </div>
        )

    }
}

export default SupportAndAdvice;