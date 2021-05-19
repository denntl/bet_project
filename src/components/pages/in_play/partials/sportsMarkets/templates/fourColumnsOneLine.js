import React from 'react';
import DefaultMarket from './defaultMarket';

class FourColumnOneLine extends DefaultMarket {
    constructor(props) {
        super(props);

        this.state = {
            hideMarketGroupButton: this.props.hideMarketGroupButton,
            template: this.props.template,
            market: this.props.market,
            currentMarket: this.props.currentMarket,
            participants: this.props.participants,
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
        // console.log("clean sheet", this.state)
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
                <div className="MarketGroupContainer clean_sheet">
                    <div className="Market_table wrap">
                        {
                            Object.keys(this.state.template.bets).map((team, index) => {
                                return  <div className="Market Market_General Market_PWidth-50" key={`${team}_${index}`}>
                                    <div className="MarketColumnHeader">
                                        {team}
                                    </div>
                                    <div style={{display: "flex"}}>
                                        {
                                            Object.keys(this.state.template.bets[team]).map((element) => {
                                                let bet = this.state.template.bets[team][element];
                                                return  <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap Market_CN-2"
                                                             id={`${bet.Id}-in_play`} key={bet.Id}
                                                             onClick={() => this.props.addToBetSlip({
                                                                id: this.state.eventId,
                                                                sportId: this.state.typeSport,
                                                                marketName: bet.MarketName,
                                                                marketId: bet.MarketId,
                                                                min: min,
                                                                max: max,
                                                                combineMin: combineMin,
                                                                combineMax: combineMax,
                                                                participants: this.state.participants,
                                                                typeMarketBet: bet.MarketName,
                                                                alias: this.state.market.alias,
                                                            }, bet, bet.Team +" - " + bet.Name)}>
                                                    <span className="ParticipantCentered_Name">{bet.Status == 3 || this.state.blockNameOdd? "" : element}</span>
                                                    <span className="ParticipantCentered_Odds">{(bet.Status == 2 || bet.Status == 3 )? "" : bet.Price}</span>
                                                </div>
                                            })
                                        }
                                    </div>
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

export default FourColumnOneLine;