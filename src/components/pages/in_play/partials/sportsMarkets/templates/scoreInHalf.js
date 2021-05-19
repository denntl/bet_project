import React from 'react';
import DefaultMarket from './defaultMarket';

class ScoreInHalf extends DefaultMarket {
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
        return    <div className={`MarketGroup CouponMarketGroup ${this.state.market.marketStatus != 1 ?"suspended":"" }`}>

            {
                this.state.hideMarketGroupButton ? '' :
                    <div className="MarketGroupButtonWrapper">
                        <div className="MarketGroupButton " data-toggle="collapse"
                             data-target="#collapse_To_Score_in_Half" aria-expanded="false"
                             aria-controls="collapse_To_Score_in_Half">
                            <div className="CouponMarketGroupButton_Title">
                                <span>{typeof this.state.market.alias == 'string' && this.state.market.alias.length ? this.state.market.alias : this.state.market.Name}
                                    <span className="suspended_Text"> - Currently Suspended</span>
                                </span>
                            </div>
                        </div>
                    </div>
            }
            <div className="MarketGroup_Wrapper collapse show" id="collapse_To_Score_in_Half" aria-expanded="true">
                <div className="MarketGroupContainer MarketGroupContainer_HasLabels">

                    {
                        Object.keys(this.state.template.bets).map((team, index) => {
                            let bets = this.state.template.bets[team];
                            return  <div className="market_row" key={`${team}-${index}`}>

                                <div className="table_header">
                                    <div className="MarketCouponValuesExplicit28 Market_General Market_HasLabels Market_PWidth-62-5">
                                        <div className="MarketColumnHeader MarketColumnHeaderLeftAlign">
                                            {team}
                                        </div>
                                    </div>
                                    <div className="MarketCouponValuesExplicit29 Market_General Market_PWidth-18-75">
                                        <div className="MarketColumnHeader">
                                            Yes
                                        </div>
                                    </div>
                                    <div className="MarketCouponValuesExplicit29 Market_General Market_PWidth-18-75 Market_LastInRow">
                                        <div className="MarketColumnHeader">
                                            No
                                        </div>
                                    </div>
                                </div>
                                {
                                   Object.keys(bets).map((row, ind) => {
                                       let bet = bets[row];
                                        return <div className="table_content" key={`${ind}-${team}-${index}`}>
                                            <div className="MarketCouponValuesExplicit28 Market_General Market_HasLabels Market_PWidth-62-5">
                                                <div className="CouponParticipantWithoutBookCloses">
                                                    <span className="CouponParticipantWithoutBookCloses_Name">{row}</span>
                                                </div>
                                            </div>
                                            {
                                                Object.keys(bet).map((val, idx) => {
                                                        return <div className="MarketCouponValuesExplicit29 Market_General Market_PWidth-18-75" key={`${bet[val.Id]}-${idx}-${ind}`}>
                                                            <div className="CouponParticipantOddsOnlyAdditionalRowHeight ParticipantOddsOnly Participant_General" id={`${bet[val].Id}-in_play`} onClick={() => this.props.addToBetSlip({
                                                                id: this.state.eventId,
                                                                sportId: this.state.typeSport,
                                                                marketName: bet[val].OldMarketName,
                                                                marketId:  bet[val].MarketId,
                                                                participants: this.state.participants,
                                                                min: min,
                                                                max: max,
                                                                combineMin: combineMin,
                                                                combineMax: combineMax,
                                                                typeMarketBet: bet[val].OldMarketName,
                                                                alias: this.state.market.alias,
                                                            }, bet[val], bet[val].Team +" - "+ bet[val].oldName)}>
                                                                <span className="ParticipantOddsOnly_Odds">{bet[val].Status == 2 || bet[val].Status == 3? "" : bet[val].Price}</span>
                                                            </div>
                                                        </div>
                                                })
                                            }
                                        </div>
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

export default ScoreInHalf;