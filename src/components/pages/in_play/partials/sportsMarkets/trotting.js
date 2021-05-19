import React from 'react';



class Trotting extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
       // console.log(this.props)
        return(
            <div className="column">
                {
                    Object.keys(this.props.markets).length ?
                        Object.keys(this.props.markets).map((id) => {
                            if (this.props.markets[id].name == this.props.currentMarket) {
                                switch(this.props.currentMarket) {
                                    case "1X2":
                                        this.props.markets[id].bets.map((bet, index) => {
                                            return  <div className="value_wrapp">
                                                <span className="participant_name">{bet.Name == 1 ? this.props.participants[0]['Name'] : bet.Name == 2 ? this.props.participants[1]['Name'] : "Draw" }</span>
                                                <span className="participant_odds yellow_text">{this.props.bets.home.Price}</span>
                                            </div>
                                        })
                                        break;
                                }

                            }
                        })
                        : ""
                }
                {/*<div className="column">*/}
                {/*<div className="value_wrapp">*/}
                {/*<span className="participant_name">{this.props.participants[0]['Name']}</span>*/}
                {/*<span className="participant_odds yellow_text">{this.props.bets.home.Price}</span>*/}
                {/*</div>*/}
                {/*<div className="value_wrapp">*/}
                {/*<span className="participant_name">Draw</span>*/}
                {/*<span className="participant_odds yellow_text">{this.props.bets.draw.Price}</span>*/}
                {/*</div>*/}
                {/*<div className="value_wrapp">*/}
                {/*<span className="participant_name">{this.props.participants[1]['Name']}</span>*/}
                {/*<span className="participant_odds yellow_text">{this.props.bets.away.Price}</span>*/}
                {/*</div>*/}

                {/*</div>*/}
            </div>
        )

    }
}

export default Trotting;
