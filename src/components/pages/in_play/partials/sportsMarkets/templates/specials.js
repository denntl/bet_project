import React from 'react';
import DefaultMarket from './defaultMarket';

class Specials extends DefaultMarket {
    constructor(props) {
        super(props);

        this.state = {
            hideMarketGroupButton: this.props.hideMarketGroupButton,
            template: props.template,
            market: props.market,
            currentMarket: props.currentMarket,
            participants: props.participants,
            // fromEventView: props.fromEventView,
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
            // fromEventView: nextProps.fromEventView,
            eventId: nextProps.eventId,
            typeSport: nextProps.typeSport,
            typeMarket: nextProps.typeMarket,
            currentMarketId: nextProps.currentMarketId,
            fromPage: nextProps.fromPage
        });
    }

    render(){
        let { market: { limits:{min=null, max=null} = {}, systemLimit:{min:combineMin=null, max:combineMax=null}={}  } = {} } = this.state
        return   <div className={`MarketGroup CouponMarketGroup ${this.state.market.marketStatus != 1 ?"suspended":"" }`}>

            {
                this.state.hideMarketGroupButton ? '' :
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse" data-target="#collapse_Specials"
                             aria-expanded="false" aria-controls="collapse_Specials">
                            <div className="CouponMarketGroupButton_Title">
                                <span>{typeof this.state.market.alias == 'string' && this.state.market.alias.length ? this.state.market.alias : this.state.market.Name}
                                    <span className="suspended_Text"> - Currently Suspended</span>
                                </span>
                            </div>
                        </div>
                    </div>
            }

            <div className="MarketGroup_Wrapper collapse show" id="collapse_Specials" aria-expanded="true">
                <div className="MarketGroupContainer MarketGroupContainer_HasLabels">
                    {/*start*/}

                    <div className="MarketCouponScorerTitleTwoColumn Market_General Market_HasLabels Market_PWidth-75">
                        <div className="MarketColumnHeader">
                            &nbsp;
                        </div>
                    </div>

                    <div className="MarketCouponScorerValues Market_General Market_PWidth-12-5">
                        <div className="MarketColumnHeader">
                            1
                        </div>
                    </div>

                    <div className="MarketCouponScorerValues Market_General Market_PWidth-12-5 Market_LastInRow">
                        <div className="MarketColumnHeader">
                            2
                        </div>
                    </div>

                    {
                        Object.keys(this.state.template.bets).map((market, index) => {
                            return     <div className="market_row" key={index}>
                                <div className="MarketCouponScorerTitleTwoColumn Market_General Market_HasLabels Market_PWidth-75">
                                    <div className="CouponParticipantRowName">
                                        <span className="CouponParticipantRowName_Name">{market}</span>
                                    </div>
                                </div>
                                {
                                    Object.keys(this.state.template.bets[market]).map((id, index) => {
                                        let bet = this.state.template.bets[market][id];
                                        if (bet.Name == (index + 1)) {
                                            return  <div className="MarketCouponScorerValues Market_General Market_PWidth-12-5" key={bet.Id}>
                                                <div className="ParticipantOddsOnly Participant_General CouponParticipantOddsOnlyAdditionalRowHeight" id={`${bet.Id}-in_play`} onClick={() => this.props.addToBetSlip({
                                                    id: this.state.eventId,
                                                    sportId: this.state.typeSport,
                                                    marketName: market,
                                                    marketId: bet.MarketId,
                                                    participants: this.state.participants,
                                                    min: min,
                                                    max: max,
                                                    combineMin: combineMin,
                                                    combineMax: combineMax,
                                                    typeMarketBet: market,
                                                    alias: this.state.market.alias,
                                                }, bet, this.state.participants[bet.oldName - 1].Name + " "+market.toLowerCase())}>
                                                    <span className="ParticipantOddsOnly_Odds">{(bet.Status == 2 || bet.Status == 3)? "" : bet.Price}</span>
                                                </div>
                                            </div>
                                        }

                                    })
                                }

                            </div>
                        })
                    }
                </div>
            </div>
        </div>




    }
}

export default Specials;