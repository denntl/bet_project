import React from 'react';
import TableTotalgames from "./tableTotalgames";
import {getPrematchEvents} from "../../helpers/data";



class TableHighlights extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSport: 6046,
            highlights: this.props.highlights,
            allSports: this.props.allSports
        }
        this.selectGame = this.selectGame.bind(this);
        //this.fetchTotalEvents = this.fetchTotalEvents.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            highlights: nextProps.highlights,
            allSports: nextProps.allSports
        })
    }

    componentDidMount() {
        // setTimeout(function() {
        //
        // }, 3000)
    }

    // fetchTotalEvents() {
    //     getPrematchEvents(function(err, events, header) {
    //         console.log("prematch", events)
    //     })
    // }

    selectGame(id) {

        this.setState({
          selectedSport: id
        })


    }


    render() {
        //console.log('highlights', this.state)
        return(
            <div className="total_table_tabs">
                <ul className="nav nav-tabs green_header">
                {
                    Object.keys(this.state.highlights).map((ind) => {
                        var nameTab;
                        this.state.allSports.forEach((sport) => {
                                if (sport.id == ind) {
                                    if (ind == 6046) {
                                        nameTab = "Soccer"
                                    } else {
                                        nameTab = sport.name;
                                    }

                                }
                            })
                        return <li className="nav-item" key={`highlights-${ind}`}>
                            <a className={`nav-link light_green_text ${ind == this.state.selectedSport ? "active" : "" }`} onClick={() => {this.selectGame(ind)} }>{nameTab}</a>
                        </li>
                    })
                }
                </ul>
                {
                    Object.keys(this.state.highlights).length ?
                        <TableTotalgames addToBetSlip={(info, bet, typeBet) => this.props.addToBetSlip(info, bet, typeBet)}
                                         selectedSport={this.state.selectedSport}
                                         highlightsEvents={this.state.highlights[this.state.selectedSport]}
                                         setSelectedEventFromOtherPage={(event) => this.props.setSelectedEventFromOtherPage(event)}/>
                        : ""
                }
            </div>
        )

    }
}

export default TableHighlights;
