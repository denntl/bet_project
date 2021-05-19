import React from 'react';
import DefaultMarket from './defaultMarket';
import InputRange from "../../../../../shared/inputRange";

class ThreeColumnsAndSlider extends DefaultMarket {
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
            homeTeamGoals: 0,
            awayTeamGoals: 0,
            currentRate: 0.0,
            currentBet: {},
            selectedTeam: "Draw 0-0",
            blockNameOdd: this.props.blockNameOdd
        };
    }
    componentWillReceiveProps(nextProps) {
        let obj = {};
        obj = {
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
        };

        if (nextProps.eventId != this.state.eventId) {
            let goals = nextProps.template.minMax[1].min + "-" + nextProps.template.minMax[2].min;
            let currentBet = this.showRate(nextProps.market, goals);
            obj['homeTeamGoals'] = nextProps.template.minMax[1].min;
            obj['awayTeamGoals'] = nextProps.template.minMax[2].min;
            obj['currentRate'] = currentBet.Price;
        } else {
            let goals = this.state.homeTeamGoals + "-" + this.state.awayTeamGoals;
            let currentBet = this.showRate(nextProps.market, goals);
            obj['currentRate'] = currentBet.Price;
        }


        this.setState(obj);
    }
    componentDidMount() {
        let goals = this.state.template.minMax[1].min + "-" + this.state.template.minMax[2].min;
        let currentBet = this.showRate(this.state.market, goals);
        this.setState({
            currentRate: currentBet.Price,
            homeTeamGoals: this.state.template.minMax[1].min,
            awayTeamGoals: this.state.template.minMax[2].min,
            currentBet: currentBet
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if ( (prevState.homeTeamGoals != this.state.homeTeamGoals) || (prevState.awayTeamGoals != this.state.awayTeamGoals)) {
            let goals = this.state.homeTeamGoals + "-" + this.state.awayTeamGoals;
            let team = this.state.homeTeamGoals > this.state.awayTeamGoals ? this.state.participants[0].Name : this.state.homeTeamGoals == this.state.awayTeamGoals ? "Draw" : this.state.participants[1].Name;
            this.setState({
                selectedTeam: team + " " + goals
            })
        }
    }

    changeGoals = (type, value) => {
        //console.log('changeGoals', type, value)
        let goals;
        if (type == 1) {
            goals = value +"-"+ this.state.awayTeamGoals;
            let currentBet = this.showRate(this.state.market, goals);
            //console.log('change currentBet', currentBet);
            this.setState({
                homeTeamGoals: value,
                currentRate: currentBet.Price,
                currentBet: currentBet
            })
        }
        if (type == 2 ) {
            goals = this.state.homeTeamGoals  +"-"+ value;
            let currentBet = this.showRate(this.state.market, goals);
           // console.log('change currentBet', currentBet);
            this.setState({
                awayTeamGoals: value,
                currentRate: currentBet.Price,
                currentBet: currentBet
            })
        }
    }

    showRate = (market, goals = null) => {
        let score, currentBet;
        currentBet = {Price: "N/A"};
        if (goals != null) {
            score = goals;
        } else {
            score = "0-0";
        }

        if(
            typeof market.template != 'undefined' &&
            market.template != null &&
            typeof market.template.bets != 'undefined' &&
            market.template.bets != null
        ){
            for(let key in market.template.bets){
                if(market.template.bets[key] instanceof Array){
                    market.template.bets[key].map((bet) => {
                        if (bet.Name == score) {
                            currentBet = bet;
                        }
                    });
                }
            }
        }

       return currentBet
    }

    reverseString(str) {
        return str.split("").reverse().join("");
    }

    render(){
        let { market: { limits:{min=null, max=null} = {}, systemLimit:{min:combineMin=null, max:combineMax=null}={}  } = {} } = this.state
        return <div className={`MarketGroup ${this.state.market.marketStatus != 1 ?"suspended":"" }`}>
            <div className="MarketGroupButtonWrapper">
                <div className="MarketGroupButtonWrapper">


                    {
                        this.state.hideMarketGroupButton ? '' :
                            <div className="MarketGroupButton  MarketGroup_HasButtonBar"
                                 data-toggle="collapse"
                                 data-target={`#collapse_${this.state.currentMarketId}`}
                                 aria-expanded="false"
                                 aria-controls="collapse_Soccer_International_Half_Correct_Score">
                                <span>{typeof this.state.market.alias == 'string' && this.state.market.alias.length ? this.state.market.alias : this.state.market.Name}
                                    <span className="suspended_Text"> - Currently Suspended</span>
                                </span>
                            </div>
                    }


                    <span className="MarketGroup_ButtonBar  nav nav-tabs no-collapsable" role="tablist">
                                        <a href={`#tab${this.state.currentMarketId}_panel_Slider`}  className="MarketGroup_BBarItem active " id="" data-toggle="tab" role="tab">Slider</a>
                                        <a href={`#tab${this.state.currentMarketId}_panel_All`} className="MarketGroup_BBarItem" id="" data-toggle="tab" role="tab">All</a>
                                    </span>
                </div>
            </div>
            <div className="MarketGroup_Wrapper" id={`collapse_${this.state.currentMarketId}`} aria-expanded="false">
                <div  className="content tab-content clearfix">
                    <section id={`tab${this.state.currentMarketId}_panel_Slider`} className="tab-pane fade show active" role="tabpanel">
                        <div className="MarketGroupContainer">
                            <div className="MarketSliders Market_PWidth-100">

                                <div className="MarketSliders_SliderOneContainer">
                                    <div className="MarketSliders_SliderTitleContOne">
                                        <span className="MarketSliders_SliderTitle">{this.state.participants[0].Name}</span>
                                        <div className="MarketSliders_range-slider">
                                            <InputRange
                                                currentMarketId={this.state.currentMarketId}
                                                type={1}
                                                minMax={this.state.template.minMax}
                                                changeGoals={(type, value) => this.changeGoals(type, value)}
                                                eventId={this.state.eventId}
                                                key={this.state.eventId}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="MarketSliders_Gap "></div>

                                <div className="MarketSliders_SliderTwoContainer">
                                    <div className="MarketSliders_SliderTitleContTwo">
                                        <span className="MarketSliders_SliderTitle">{this.state.participants[1].Name}</span>
                                        <InputRange
                                            currentMarketId={this.state.currentMarketId}
                                            type={2}
                                            minMax={this.state.template.minMax}
                                            changeGoals={(type, value) => this.changeGoals(type, value)}
                                            eventId={this.state.eventId}
                                            key={this.state.eventId}
                                        />
                                    </div>
                                </div>

                                <div className="MarketSliders_OddsContainer">
                                    <div className={`ParticipantSliderResultField ${this.state.currentBet.Id}-prematch`}  onClick={() => this.props.addToBetSlip({
                                            id: this.state.eventId,
                                            sportId: this.state.typeSport,
                                            marketName: this.state.currentMarket,
                                            marketId: this.state.currentMarketId,
                                            participants: this.state.participants,
                                            min: min,
                                            max: max,
                                            combineMin: combineMin,
                                            combineMax: combineMax,
                                            alias: this.state.market.alias,
                                            typeMarketBet: this.state.currentMarket}, this.state.currentBet, this.state.selectedTeam)}>
                                        <output  className={`ParticipantSliderResultField_Name`}>{this.state.homeTeamGoals}-{this.state.awayTeamGoals}</output>
                                        <output  className={`ParticipantSliderResultField_Odds`}>{this.state.currentRate}</output>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id={`tab${this.state.currentMarketId}_panel_All`} className="tab-pane fade" role="tabpanel">
                        <div className="MarketGroupContainer">
                            {
                                Object.keys(this.state.template.bets).map((column, index) => {
                                    return  <div className="Market3 Market_General Market_PWidth-33-3333" key={index}>
                                        <div className="MarketColumnHeader">{column}</div>
                                        {
                                            this.state.template.bets[column].length ?
                                                this.state.template.bets[column].map((bet) => {
                                                    let clonedBet = Object.assign({}, bet);
                                                    if(index === 2){
                                                        clonedBet.Name = this.reverseString(clonedBet.Name);
                                                    }

                                                    return  <div className={`ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalRowHeight ${clonedBet.Id}-prematch`}
                                                                 key={`${clonedBet.Id}-home`}
                                                                 onClick={() => this.props.addToBetSlip({
                                                                id: this.state.eventId,
                                                                sportId: this.state.typeSport,
                                                                marketName: this.state.currentMarket,
                                                                min: min,
                                                                max: max,
                                                                combineMin: combineMin,
                                                                combineMax: combineMax,
                                                                marketId: this.state.currentMarketId,
                                                                participants: this.state.participants,
                                                                alias: this.state.market.alias,
                                                                typeMarketBet: this.state.currentMarket}, clonedBet, column + " " + clonedBet.Name)}
                                                    >
                                                        <span className="ParticipantCentered_Name">
                                                            {clonedBet.Status == 3? "" : clonedBet.Name}
                                                        </span>
                                                        <span className="ParticipantCentered_Odds">
                                                            {(clonedBet.Status == 2 || clonedBet.Status == 3)? "" : clonedBet.Price}
                                                        </span>
                                                    </div>
                                                })
                                                : ""
                                        }



                                    </div>
                                })
                            }


                            {/*<div className="Market3 Market_General Market_PWidth-33-3333">*/}
                                {/*<div className="MarketColumnHeader">Draw</div>*/}

                                {/*{*/}
                                    {/*this.state.market.draw.length ?*/}
                                        {/*this.state.market.draw.map((bet) => {*/}
                                            {/*return  <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalRowHeight" key={`${bet.Id}-draw`}>*/}
                                                {/*<span className="ParticipantCentered_Name">{bet.Name}</span><span className="ParticipantCentered_Odds">{bet.Price}</span>*/}
                                            {/*</div>*/}
                                        {/*})*/}
                                        {/*: ""*/}
                                {/*}*/}

                            {/*</div>*/}

                            {/*<div className="Market3 Market_General Market_PWidth-33-3333 Market_LastInRow">*/}
                                {/*<div className="MarketColumnHeader">{this.state.participants[1].Name}</div>*/}
                                {/*{*/}
                                    {/*this.state.market.away.length ?*/}
                                        {/*this.state.market.away.map((bet) => {*/}
                                            {/*return  <div className="ParticipantCentered Participant_General ParticipantCentered_NoHandicap CouponParticipantCenteredAdditionalRowHeight" key={`${bet.Id}-away`}>*/}
                                                {/*<span className="ParticipantCentered_Name">{bet.Name}</span><span className="ParticipantCentered_Odds">{bet.Price}</span>*/}
                                            {/*</div>*/}
                                        {/*})*/}
                                        {/*:""*/}
                                {/*}*/}

                            {/*</div>*/}
                        </div>
                    </section>
                </div>
                {/* <div className="MarketGroupContainer">
                    <div className="OthersOnRequest">
                        <div className="OthersOnRequest_Link">Others on Request</div>
                        <div className="OthersOnRequestAlert OthersOnRequestAlert-above ">To make a request <div className="OthersOnRequestAlert_Nib"></div><span className="OthersOnRequestAlert_LoginLink">Log In</span></div>
                    </div>
                </div> */}
            </div>
        </div>




    }
}

export default ThreeColumnsAndSlider ;