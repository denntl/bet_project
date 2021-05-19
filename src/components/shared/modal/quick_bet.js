import React from 'react';
import {placeBet} from "../../helpers/data";


class QuickBet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedQuickBetId: this.props.selectedQuickBetId,
            changed: false,
            quickBet: this.props.quickBet,
            loginToken: this.props.loginToken,
            currentTotalStake: this.props.currentTotalStake,
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.quickBet[nextProps.selectedQuickBetId].changed != this.state.changed && typeof nextProps.quickBet[nextProps.selectedQuickBetId].changed !== "undefined"){
            let {quickBet: newQuickBet, selectedQuickBetId: id, currentTotalStake: total} = nextProps
            newQuickBet[id].resStake = this.resStake(total)
            this.setState({
                changed: true
            })
            this.props.changeStateQuickBet(newQuickBet)
        }
        if(nextProps.suspended == true){
            this.props.setQuickBetId(false)
        }
        if(
            this.state.selectedQuickBetId !== false &&
            this.state.selectedQuickBetId != nextProps.selectedQuickBetId
        ){
            this.changeModalPosition(nextProps.selectedQuickBetId);
        }
        this.setState({
            selectedQuickBetId: nextProps.selectedQuickBetId,
            quickBet: nextProps.quickBet,
            currentTotalStake: nextProps.currentTotalStake
        })
    }

    changeModalPosition = (selectedQuickBetId = this.state.selectedQuickBetId) => {
        let top, left, heightModal, modal, clickButton, width, arrow;
        modal = $(".quickBetModule");
        clickButton = $(".selected_bet");
        top = clickButton.offset().top;
        left = clickButton.offset().left;
        heightModal = modal.height();
        width = clickButton.width();
        arrow = $(".quickBetArrow")
        if(top < 330) {
            modal.css({
                'top': (top + 45),
                'left': left,
                'display': "block"
            });
            modal.addClass("arrowTop")
            left < 250? arrow.css({"left" : "33px"}) : arrow.css({"left" : "50%"})
        }
        else{
            modal.css({
                'top' : (top - heightModal),
                'left': left,
                'display' : "block"
            });
            modal.removeClass("arrowTop")
            left < 250? arrow.css({"left" : "33px"}) : arrow.css({"left" : "50%"})
        }
    }

    componentDidMount(){
        this.changeModalPosition();
    }

    componentDidUpdate() {
        if (this.state.currentTotalStake != this.state.quickBet[this.state.selectedQuickBetId].stake) {
            let {quickBet: newQuickBet, selectedQuickBetId: id,} = this.state
            newQuickBet[id].stake = this.state.currentTotalStake
            newQuickBet[id].resStake = this.resStake(newQuickBet[id].stake)
            this.props.changeStateQuickBet(newQuickBet)
        }
    }

    changeCurrentStake = (total, valueInput) => {
        let {quickBet:newQuickBet, selectedQuickBetId:id, currentTotalStake:totalStake} = this.state;
        let newTotal, newResStake;
        if(total == 0){
            newTotal = valueInput ;
        } else{
            newTotal = (Number(totalStake) + Number(total)).toFixed(2);
            if(newTotal < 0){
                newTotal = 0;
            }
        }
        newResStake = this.resStake(newTotal);
        newQuickBet[id].resStake = newResStake;
        newQuickBet[id].stake = newTotal;
        this.props.changeStateQuickBet(newQuickBet);
        this.props.saveBetToLocalStorage({},newTotal);
    }

    resStake = (newTotal) => {
        let res = newTotal * this.state.quickBet[this.state.selectedQuickBetId].bet.Price;
        return res.toFixed(2)
    }

    onBlur = () => {
        let {currentTotalStake:newTotal} = this.state;
        newTotal = Number(newTotal).toFixed(2)
        this.props.saveBetToLocalStorage({},newTotal);
    }

    correctInput = (event) => {
        let e = event.target;
        e.value = e.value.replace(/[^\d,.]*/g, '')
            .replace(/([.])[.]+/g, '$1')
            .replace(/^[^\d]*(\d+([.]\d{0,5})?).*$/g, '$1');//можно вводить цыфры и не больше одной точки
        if (e.value.indexOf(".") != '-1') {
            e.value = e.value.substring(0, e.value.indexOf(".") + 3); // цифра 3, устанавливает количество цифр после запятой,
            // т.е. если 3, то максимум 2 цифры после запятой
        }
    }

    placeQuickBet = () => {
        let {quickBet: bet, loginToken: token, currentTotalStake: total} = this.state
        let obj = {token, bet}
        $(".quickBetFooter_btn").hide();
        $(".quickBetFooter_btn.processing").show()
        if(total  > 0){
            placeBet(obj, function (err, data) {
                if (!err) {
                    $(".quickBetFooter_btn.processing").hide()
                    $(".quickBetFooter_btn.betPlaced").show()
                    setTimeout(() => {
                        this.props.setQuickBetId(false)
                    }, 2000);
                    this.props.setBalance()
                }
            }.bind(this))
        } else {
            this.props.disableQuickBet()
            this.props.changeStateQuickBet({})
            this.props.saveBetToLocalStorage(bet, 0)
        }
    }

    render() {
        let event = this.state.quickBet[this.state.selectedQuickBetId]
        let state = this.state

        return(
            <div className="quickBetModule show above"> {/* class below*/}
                <div className="quickBetArrow"></div>
                <div className="quickBet_close" onClick = {() => this.props.setQuickBetId(false)}/>
                <div className="quickBetModule_full">
                    {state.priceChanged ?
                        <div className="quickBetHeader">
                            Price Change
                        </div> : ''}
                    <div className="quickBetSelection">
                        <div className="quickBetSelection_row">
                            <div className="row_selection">{event.bet.Name}</div>
                            <div className="row_handicap"></div>
                            <div className="row_oddsAt">@</div>
                            <div className="row_odds">{event.bet.Price}</div>{/* add class green_text*/}
                        </div>
                        <div className="quickBetSelection_betType">
                            {event.info.alias?
                                event.info.alias :
                                event.info.marketName }
                        </div>
                    </div>
                    {/*<div className="quickBetCredits hidden">/!*add class checked*!/*/}
                        {/*<label className="quickBet_checkbox">*/}
                            {/*<input type="checkbox"/>*/}
                            {/*<div className="checkbox_content"/>*/}
                        {/*</label>*/}
                    {/*</div>*/}
                    <div className="quickBetStake">
                        <div className="stake_line">
                            <div className="stake_line_btn" onClick = {()=>this.changeCurrentStake(-1)}>-</div>
                            <input type="text"
                                   className="stake_line_input"
                                   onChange={(e) => this.changeCurrentStake(0, e.target.value)}
                                   value={state.currentTotalStake}
                                   onInput={(e) => this.correctInput(e)}
                                   onBlur={() => this.onBlur()}
                            />
                            <div className="stake_line_btn" onClick = {()=>this.changeCurrentStake(1)}>+</div>
                        </div>
                        <div className="stake_bumpers">
                            <div className="stake_bumpers_btn" onClick = {()=>this.changeCurrentStake(5)}>+5</div>
                            <div className="stake_bumpers_btn" onClick = {()=>this.changeCurrentStake(10)}>+10</div>
                            <div className="stake_bumpers_btn" onClick = {()=>this.changeCurrentStake(50)}>+50</div>
                        </div>
                    </div>
                    <div className="quickBetFooter">

                        <div className={`quickBetFooter_btn  ${event.changed? "accept":""}`} onClick = {() => this.placeQuickBet()}>
                            <div className="quickBetFooter_stake">{state.currentTotalStake? state.currentTotalStake : "0"}<span className="currency">USD</span></div>
                            {event.changed?
                                <div className="quickBetFooter_text">Accept & Place Bet</div>
                                :
                                <div className="quickBetFooter_text">Place Bet</div>
                            }
                            <div className="quickBetFooter_toReturn">
                                <span className="toReturn_label">To Return</span>
                                <span className="toReturn_label hidden">Net Return</span>
                                <span className="toReturn_amount">{event.resStake}</span>
                            </div>
                        </div>

                        <div className="quickBetFooter_btn processing displayNone" style = {{display: "none"}}>
                            Processing <span className="bs-BtnText_NoMessageSpinner"></span>
                        </div>

                        <div className="quickBetFooter_btn betPlaced displayNone" style = {{display: "none"}}>
                            Bet Placed <span className = "checkMark">✔</span>
                        </div>

                    </div>
                </div>
                <div className="quickBetModule_empty displayNone">
                    Market Suspended
                </div>

            </div>
        )

    }
}

export default QuickBet;