import React from 'react';
import DefaultMarket from './defaultMarket';

class List extends DefaultMarket {
    constructor(props) {
        super(props);

        this.state = {
            hideMarketGroupButton: this.props.hideMarketGroupButton,
            template: props.template,
            market: props.market,
            currentMarket: props.currentMarket,
            participants: props.participants,
            classNameLower: this.props.currentMarketId,
            eventId: this.props.eventId,
            typeSport: this.props.typeSport,
            typeMarket: this.props.typeMarket,
            currentMarketId: this.props.currentMarketId,
            fromPage: this.props.fromPage,
            blockNameOdd: this.props.blockNameOdd
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            hideMarketGroupButton: nextProps.hideMarketGroupButton,
            template: nextProps.template,
            market: nextProps.market,
            currentMarket: nextProps.currentMarket,
            participants: nextProps.participants,
            eventId: nextProps.eventId,
            typeSport: nextProps.typeSport,
            typeMarket: nextProps.typeMarket,
            currentMarketId: nextProps.currentMarketId,
            fromPage: nextProps.fromPage
        });
    }

    render(){
        let { market: { limits:{min=null, max=null} = {}, systemLimit:{min:combineMin=null, max:combineMax=null}={}  } = {} } = this.state
        return   <div className={`MarketGroup ${this.state.market.marketStatus != 1 ?"suspended":"" }`}>

            {
                this.state.hideMarketGroupButton ? '' :
                    <div className="MarketGroupButton" onClick={() => this.toggleMarket(this.state.classNameLower)}>
                        <span className="MarketGroupButton_Text">
                            {typeof this.state.market.alias == 'string' && this.state.market.alias.length ? this.state.market.alias : this.state.market.Name}
                            <span className="suspended_Text"> - Currently Suspended</span>
                            </span>
                    </div>
            }

            <div className={`MarketGroup_Wrapper ${this.state.classNameLower}-market`}>
                <div className="MarketGroupContainer">
                    <div className="Market_table wrap">
                        {
                            Object.keys(this.state.template.bets).map((id, index) => {
                                let bet = this.state.template.bets[id];
                                return  <div className="Participant grid3" key={`${bet.Id}-${index}`} id={`${bet.Id}-in_play`}  onClick={() => this.props.addToBetSlip({
                                    id: this.state.eventId,
                                    sportId: this.state.typeSport,
                                    marketName: this.state.market.Name,
                                    marketId: this.state.currentMarketId,
                                    participants: this.state.participants,
                                    typeMarketBet: this.state.typeMarket,
                                    min: min,
                                    max: max,
                                    combineMin: combineMin,
                                    combineMax: combineMax,
                                    alias: this.state.market.alias,
                                }, bet, bet.Name)}>
                                    <span className="participant_name">{bet.Status == 3 || this.state.blockNameOdd? "" : bet.Name}</span>
                                    <span className="participant_odds yellow_text">{(bet.Status == 2 || bet.Status == 3)? "" : bet.Price}</span>
                                </div>
                            })
                        }

                    </div>
                </div>
            </div>
            {this.state.hideMarketGroupButton ? '' : <div className="MarketGroup_FavouriteButton "></div>}
        </div>




    }
}

export default List;