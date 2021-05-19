import React from 'react';
import ValidateMessageHelper from "../validateMessageHelper";
import {postBalance, postTransferBalance} from "../../../helpers/data_account";
import ErrorPanel from "../../../shared/modal/errorPanel";

class Bank extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            submenu: "balance",
            profile: this.props.profile,
            token: this.props.token,
            showOfferCode: false,
            errorPanel: false,
            postSuccess: false,
            requestFailed: false,
            transferForm: {
                data: {
                    transferFrom: "sports",
                    transferTo: "casino",
                    amount: false,
                    offerCode: false,
                },
                errors: {
                    transferFrom: {},
                    transferTo: {
                        error: false,
                        errorIcon: false,
                    },
                    amount: {
                        error: false,
                        errorIcon: false,
                    },
                    offerCode: {
                        error: false,
                        errorIcon: false,
                    },
                },
                clickedField: ''
            },
        }
    }

    /** НЕ ЗАКОНЧЕНО **/
    // validateFormField=(field)=>{
    //     switch (field) {
    //         case 'transferTo':
    //             return this.state.transferForm.data.transferTo.length &&
    //                 this.state.transferForm.data.transferTo != this.state.transferForm.data.transferFrom;
    //         case 'amount':
    //             return this.state.transferForm.data.amount > 0;
    //         //case '':
    //
    //     }
    //
    // }

    changeSubMenu = (tab) => {
        this.setState({
            submenu:tab
        })
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            profile: nextProps.profile
        })
    }
    showContacts(){
        if ($('.contact_info').hasClass('show'))
            $('.contact_info').removeClass('show')
        else(
            $('.contact_info').addClass('show')
        )
    }

    changeValueOnInput = (e, name) => {
        let {transferForm : newForm} = this.state
        newForm.data[name] = e.target.value == ""? 0 : e.target.value
        this.setState({
            transferForm: newForm
        })
    }

    removeAllErrors = () => {
        let newForm = this.state.transferForm
        let {data, errors} = newForm
        Object.keys(newForm.errors).map((el) => {
            newForm.errors[el].error = false
            newForm.errors[el].errorIcon = false
        })
    }

    checkInput = (name) => {
        let newForm = this.state.transferForm
        let {data, errors} = newForm
        Object.keys(newForm.errors).map((el) => {
            newForm.errors[el].error = false
        })
        if(newForm.errors[name].errorIcon){
            newForm.errors[name].error = true;
        }
        if(name == "transferFrom" || name == "offerCode") {
            if(data.transferFrom == data.transferTo){
                newForm.errors.transferTo.errorIcon = true;
            } else{
                newForm.errors.transferTo.errorIcon = false;
            }
            if(Number(data.amount) <= 0 && data.amount !==false){
                newForm.errors.amount.errorIcon = true;
            } else{
                newForm.errors.amount.errorIcon = false;
            }
        }

        if(name == "transferTo") {
            if(Number(data.amount) <= 0 && data.amount !==false){
                newForm.errors.amount.errorIcon = true;
            } else{
                newForm.errors.amount.errorIcon = false;
            }
        }
        if(name == "amount") {
            if(newForm.data.amount === false) {
                newForm.data.amount = 0;
            }
            if(data.transferFrom === data.transferTo){
                newForm.errors.transferTo.errorIcon = true;
            } else{
                newForm.errors.transferTo.errorIcon = false;
            }
        }

        this.setState({
            transferForm: newForm,
            requestFailed: false,
        })

    }

    onSubmit = () => {
        let {data, errors} = this.state.transferForm
        let options = {
            token: `${this.state.token}`,
            from: data.transferFrom,
            to: data.transferTo,
            amount: data.amount
        };
        if(data.transferTo == data.transferFrom || !data.amount || Number(data.amount) <= 0){
            this.setState({
                errorPanel: true
            })
        } else{
            postBalance(options, function (err, data) {
                if (!err) {
                        this.setState({
                            postSuccess: true,
                            requestFailed: false,
                        })

                    setTimeout(() => {
                        this.setState({
                            postSuccess: false
                        })
                    }, 5000);

                    this.removeAllErrors()
                    this.props.setBalance()
                } else {
                    this.setState({
                        requestFailed: err.response.data.error,
                        errorPanel: true,
                        postSuccess: false,
                    })

                }
            }.bind(this))
        }


    }
    ClosePostSuccess=()=>{
        this.setState({
             postSuccess: false
        })
    }

    changeProps = (props, ...other) => {
        let {[props]:oldProps} = this.state
        this.setState({
            [props]: !oldProps
        })
    }


    render() {

        const {errors, data} = this.state.transferForm
        //console.log('bank', this.state);

        return(
            <div className="userAccount_info">
                {
                    this.state.errorPanel ?
                        <div className="Modal_wrapp">
                            <ErrorPanel
                                closeModal = {(type) => this.changeProps(type)}
                                requestFailed={this.state.requestFailed}
                                />

                        </div>
                        :""
                }
                <div className="top_sub_menu">

                    <a href="#" className={`top_sub_menu_link ${this.state.submenu == "balance"  ? 'active' : ''}`} onClick={(e) => {e.preventDefault(); this.changeSubMenu('balance')}}><span>Balances</span></a>
                    <a href="#" className={`top_sub_menu_link ${this.state.submenu == "deposit"  ? 'active' : ''}`} onClick={(e)=>{e.preventDefault(); this.changeSubMenu('deposit')}}><span>Deposit</span></a>
                    <a href="#" className={`top_sub_menu_link ${this.state.submenu == "transfer"  ? 'active' : ''}`} onClick={(e)=>{e.preventDefault(); this.changeSubMenu('transfer')}}><span>Transfer</span></a>
                    <a href="#" className={`top_sub_menu_link ${this.state.submenu == "cancel_withdraw"  ? 'active' : ''}`} onClick={(e)=>{e.preventDefault(); this.changeSubMenu('cancel_withdraw')}}><span>Cancel Withdraw</span></a> {/*~~~~~appear when have history~~~~~*/}
                    <a href="#" className={`top_sub_menu_link ${this.state.submenu == "withdraw"  ? 'active' : ''}`} onClick={(e)=>{e.preventDefault(); this.changeSubMenu('withdraw')}}><span>Withdraw</span></a>
                </div>

                {this.state.submenu == "balance" ?
                    <div className="account_info_container">
                        <div className="table_content">
                            {
                                this.state.postSuccess?
                                    <div className="post-success-bank">
                                        <div className="success">Transfer Successful</div>
                                        <div className="text">Your balances have been updated.</div>
                                        <button type="button" className="close" onClick={()=>this.ClosePostSuccess()}></button>
                                    </div> : ""
                            }
                            <div className="balance_table">
                                <div className="balance_table_title">
                                    <p className="title"> Your Balances (USD)</p>
                                    <p className="refresh_link">Refresh Balances</p>
                                </div>
                                <table className="balances">
                                    <thead>
                                        <tr>
                                            <th className="col1">
                                            Account
                                            </th>
                                            <th className="col2">
                                            Withdrawable
                                            </th>
                                            <th className="col3">
                                            Bet Credits/Bonus
                                            </th>
                                            <th className="col4">
                                            Total
                                            </th>
                                            <th className="col5"/>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="col1">
                                            Sports
                                            </td>
                                            <td className="col2">
                                                <span className="col2">0.00</span>
                                            </td>
                                            <td className="col3">
                                            <span className="col3">
                                            <span>0.00</span>
                                            </span>
                                            </td>
                                            <td className="col4">
                                                <span className="col4 bold">{this.state.profile.balance.sports}</span>
                                            </td>
                                            <td className="col5">
                                                <a href="#" className="make_dep">Make Deposit</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="col1">
                                                Casino
                                            </td>
                                            <td colSpan="3">
                                                <a href="#" className="show_balance_link">Show Ballance</a>
                                            </td>
                                            <td className="col5">
                                                <a href="#" className="make_dep">Make Deposit</a>
                                            </td>
                                        </tr>
                                        {/*~~~~~~когда есть данные~~~~~~~*/}
                                        <tr>
                                            <td className="col1">
                                                Casino
                                            </td>
                                            <td className="col2">
                                                <span className="col2 balance">0.00</span>
                                            </td>
                                            <td className="col2">
                                                <span className="col2 balance">0.00</span>
                                            </td>
                                            <td className="col4">
                                                <span className="col4 bold">{this.state.profile.balance.casino}</span>
                                            </td>
                                            <td className="col5">
                                                <a href="#" className="make_dep">Make Deposit</a>
                                            </td>
                                        </tr>
                                        {/*~~~~~~//когда есть данные~~~~~~~*/}
                                        <tr>
                                            <td className="col1">
                                            Poker
                                            </td>
                                            <td colSpan="3">
                                                <a href="#" className="show_balance_link">Show Ballance</a>
                                            </td>
                                            <td className="col5">
                                                <a href="#" className="make_dep">Make Deposit</a>
                                            </td>
                                        </tr>
                                        {/*~~~~~~когда есть данные~~~~~~~*/}
                                        <tr>
                                            <td className="col1">
                                                Poker
                                            </td>
                                            <td className="col2">
                                                <span className="col2 balance">0.00</span>
                                            </td>
                                            <td className="col2">
                                                <span className="col2 balance">0.00</span>
                                            </td>
                                            <td className="col4">
                                                <span className="col4 bold">{this.state.profile.balance.poker}</span>
                                            </td>
                                            <td className="col5">
                                                <a href="#" className="make_dep">Make Deposit</a>
                                            </td>
                                        </tr>
                                        {/*~~~~~~//когда есть данные~~~~~~~*/}
                                        <tr>
                                        <td className="col1">
                                            Games/Bingo/<br/>Vegas
                                        </td>
                                        <td className="col2">
                                            <span className="col2 balance">0.00</span>
                                        </td>
                                        <td className="col3">
                                            <span className="col3">
                                            <span className="bonusBalance">0.00</span>/<span className="bingoBonusBalance">0.00</span>/<br/>
                                            <span className="vegasBonusBalance">0.00</span>
                                            </span>
                                        </td>
                                        <td className="col4">
                                            <span className="col4 bold">{this.state.profile.balance.other}</span>
                                        </td>
                                        <td className="col5">
                                            <a href="#" className="make_dep">Make Deposit</a>
                                        </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>



                            <div className="transferFunds">
                                <div className="transferFunds_title">Transfer Funds</div>
                                <form action="post"
                                      className="form_lost_login form_transferFunds">
                                    <div className="form-group">
                                        <label className="control-label">Transfer from</label>
                                        <select onFocus={()=>this.checkInput('transferFrom')}
                                                name="transfer_from"
                                                onChange={(e) => this.changeValueOnInput(e, 'transferFrom')}
                                                id="transfer_from"
                                                className="w210">
                                            <option selected="selected" value="sports">Sports</option>
                                            <option value="casino">Casino</option>
                                            <option value="poker">Poker</option>
                                            <option value="other">Games/Bingo/Vegas</option>>
                                        </select>

                                    </div>




                                    <div className="form-group">
                                        <label className="control-label">Transfer to</label>
                                        <select onFocus={()=>this.checkInput('transferTo')}
                                                name="transfer_to"
                                                onChange={(e) => this.changeValueOnInput(e, 'transferTo')}
                                                id="transfer_to"
                                                className="w210">
                                            <option value="sports">Sports</option>
                                            <option selected="selected" value="casino">Casino</option>
                                            <option value="poker">Poker</option>
                                            <option value="other">Games/Bingo/Vegas</option>>
                                        </select>
                                        <ValidateMessageHelper errorIcon={this.state.transferForm.errors.transferTo.errorIcon}
                                                               text={this.state.transferForm.errors.transferTo.error ? 'Please ensure the “Transfer from” selection is not the same as the “Transfer to” selection.' : ''} />
                                    </div>


                                    <div className="form-group">
                                        <label className="control-label">Amount USD</label>
                                        <input onFocus={()=>this.checkInput('amount')}
                                               type="number"
                                               name="amount"
                                               min = "0"
                                               className="w210"
                                               onChange={(e) => this.changeValueOnInput(e, 'amount')}/>
                                        <ValidateMessageHelper  errorIcon={this.state.transferForm.errors.amount.errorIcon}
                                                                text={this.state.transferForm.errors.amount.error ? 'Please enter the amount.' : ''} />
                                    </div>


                                    {data.transferTo != "casino"? "" :
                                    <div className="form-group">
                                        <label className="control-label">Offer Code</label>
                                            <select onFocus={()=>this.checkInput('offerCode')}
                                                    name="offer_code"
                                                    id="offer_code"
                                                    className="w210">
                                                <option value="">Please select</option>
                                                <option value="140">BONUS100</option>
                                                <option value="-1">No Bonus</option>
                                            </select>

                                            {/*<div className="valid_icon"></div>*/}
                                            {/*<div className="message error">*/}
                                                {/*<div className="message_text error">*/}
                                                    {/*<span className="bold_text">The field must be completed</span><br/>*/}
                                                    {/*Please enter the offer code.*/}
                                                {/*</div>*/}
                                                {/*<div className="message_info error">*/}
                                                    {/*<a href="#" className="bold_link" onClick={()=>this.showContacts()}>Need Help?</a>*/}
                                            
                                                    {/*<div className="contact_info">*/}
                                                        {/*<div className="contacts">*/}
                                                            {/*<span>Live Chat</span>*/}
                                                            {/*<a href="#">Speak to an advisor</a>*/}
                                                        {/*</div>*/}
                                                        {/*<div className="contacts">*/}
                                                            {/*<span>Phone</span>*/}
                                                            {/*<div className="phone_num">+44 1782 684 757</div>*/}
                                                        {/*</div>*/}
                                                        {/*<div className="contacts">*/}
                                                            {/*<span>Email</span>*/}
                                                            {/*<a href="#">Send us an email</a>*/}
                                                        {/*</div>*/}
                                                    {/*</div>*/}
                                            
                                                    {/*<div className="symbols">*/}
                                                    {/*The following symbols may be used as part of your password:*/}
                                                    {/*<br/>*/}
                                                        {/*{`!"#$%&'()*+,-./:;<=>?_@[\\]^\`{|}~`}*/}
                                                    {/*</div>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<a href="#" className="offer_code_link">Terms and Conditions</a>*/}
                                        </div>}
                                    <button
                                        type="button"
                                        className="modal_btn"
                                        onClick={this.onSubmit}>
                                        Transfer Funds</button>
                                </form>
                            </div>






                        </div>
                    </div>
                    :""
                }
                {this.state.submenu == "deposit" ?
                    <div className="account_info_container">
                        <div className="table_content">
                            {/*when you haven't deposit = open modal window Deposit*/}
                            {/*~~~~~~ have account history~~~~~~~~~*/}
                            <div className="tab_details_info full_deposit">
                                <div className="tab_title full_deposit">
                                    <span>Deposit to Sports</span>
                                    <div className="right_link">
                                        Payment Options
                                    </div>
                                </div>
                                <div className="payment_method_block">

                                    <div className="form-group payment_variant">
                                        <label className="control-label">Payment Method</label>
                                        <select name="select_payment_method" id="payment_method">
                                            <option selected="selected" value="8">Neteller</option>
                                            <option value="18">Skrill</option>
                                            <option value="82">Skrill 1-Tap</option>
                                            <option value="1">Credit/Debit Card</option>
                                            <option value="19">paysafecard</option>
                                            <option value="22">Entropay</option>
                                            <option value="4">Wire Transfer</option>
                                            <option value="3">Cheque</option>
                                        </select>
                                    </div>
                                    {/*~~~~~content for Neteller~~~~~*/}
                                    <div id="Neteller">
                                        <div className="payment_title">To open a Neteller account visit <a href="#">www.neteller.com</a></div>
                                        <div className="payment-group">
                                            <div className="personal_details_row">
                                                <div className="label">Neteller Account ID/Email</div>
                                                <input type="text" className="meaning"/>
                                                <div className="valid_icon"></div>
                                                <div className="message error">
                                                    <div className="message_text error">
                                                        <span className="bold_text">The field is not valid</span><br/>
                                                        Please enter your 12 digit Neteller account ID OR your Neteller Email Address.
                                                    </div>
                                                    <div className="message_info error">
                                                        <a href="#" className="bold_link" onClick={()=>this.showContacts()}>Need Help?</a>

                                                        <div className="contact_info">
                                                            <div className="contacts">
                                                                <span>Live Chat</span>
                                                                <a href="#">Speak to an advisor</a>
                                                            </div>
                                                            <div className="contacts">
                                                                <span>Phone</span>
                                                                <div className="phone_num">+44 1782 684 757</div>
                                                            </div>
                                                            <div className="contacts">
                                                                <span>Email</span>
                                                                <a href="#">Send us an email</a>
                                                            </div>
                                                        </div>

                                                        <div className="symbols">
                                                            The following symbols may be used as part of your password:
                                                            <br/>
                                                            {` !"#$%&'()*+,-./:;<=>?_@[\\]^\`{|}~ `}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="personal_details_row">
                                                <div className="label rows">Neteller Secure ID or<br/> Authentication Code</div>
                                                <input type="text" className="meaning"/>
                                                <div className="valid_icon"></div>
                                                <div className="message error">
                                                    <div className="message_text error">
                                                        <span className="bold_text">The field must be completed</span><br/>
                                                        Please enter your 6 digit Neteller Secure ID or Authentication Code.
                                                    </div>
                                                    <div className="message_info error">
                                                        <a href="#" className="bold_link" onClick={()=>this.showContacts()}>Need Help?</a>

                                                        <div className="contact_info">
                                                            <div className="contacts">
                                                                <span>Live Chat</span>
                                                                <a href="#">Speak to an advisor</a>
                                                            </div>
                                                            <div className="contacts">
                                                                <span>Phone</span>
                                                                <div className="phone_num">+44 1782 684 757</div>
                                                            </div>
                                                            <div className="contacts">
                                                                <span>Email</span>
                                                                <a href="#">Send us an email</a>
                                                            </div>
                                                        </div>

                                                        <div className="symbols">
                                                            The following symbols may be used as part of your password:
                                                            <br/>
                                                            {` !"#$%&'()*+,-./:;<=>?_@[\\]^\`{|}~ `}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="payment-group">
                                            <div className="personal_details_row">
                                                <div className="label">Current Balance</div>
                                                <div className="meaning">15.19 <span className="currency">EUR</span></div>
                                            </div>
                                            <div className="personal_details_row">
                                                <div className="label">Deposit Amount <span className="currency">EUR</span></div>
                                                <input type="text" className="meaning dep_limit"/>
                                                <span className="deposit_limit">Min. 15.00 EUR</span>
                                            </div>
                                        </div>
                                        <div className="personal_details_row">
                                            <div className="label"/>
                                            <div className="meaning btn_group column">
                                                <div className="change_btn update">Make Deposit</div>
                                                <div className="link ">Deposit Limits</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*~~~~~content for Skrill~~~~~*/}
                                    <div id="Skrill">
                                        <div className="payment_title">Please be aware that you are no longer able to fund your Skrill account with a Mastercard, however you can continue to use a Mastercard to make a Skrill deposit from the bet365 deposit page, by selecting the Card option within your Skrill account when completing your payment.
                                            <p className="note">Please enter the email address on your Skrill account.</p>
                                            <div className="personal_details_row">
                                                <div className="label">Skrill Email</div>
                                                <input type="email" className="meaning"/>
                                            </div>
                                        </div>

                                        <div className="payment-group">
                                            <div className="personal_details_row">
                                                <div className="label">Current Balance</div>
                                                <div className="meaning">15.19 <span className="currency">EUR</span></div>
                                            </div>
                                            <div className="personal_details_row">
                                                <div className="label">Deposit Amount <span className="currency">EUR</span></div>
                                                <input type="text" className="meaning dep_limit"/>
                                                <span className="deposit_limit">Min. 5.00 EUR</span>
                                            </div>
                                        </div>
                                        <div className="personal_details_row">
                                            <div className="label"/>
                                            <div className="meaning btn_group column">
                                                <div className="change_btn update">Make Deposit</div>
                                                <div className="link ">Deposit Limits</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*~~~~~content for Skrill 1-Tap~~~~~*/}
                                    <div id="Skrill_1Tap">
                                        <div className="payment_title">To open a Skrill account visit <a href="#">www.skrill.com</a>
                                            <p className="note">You will need to be re-directed to the Skrill website to complete your first Skrill 1-Tap deposit.
                                                For subsequent deposits, you will remain on the bet365 page.</p>
                                            <p className="note">The email address stored on your bet365 account must match the email address stored on your Skrill account. Please update your bet365 email address if necessary.</p>
                                            <div className="personal_details_row">
                                                <div className="label">bet365 Email Address</div>
                                                <input type="email" className="meaning"/>
                                            </div>
                                        </div>

                                        <div className="payment-group">
                                            <div className="personal_details_row">
                                                <div className="label">Current Balance</div>
                                                <div className="meaning">15.19 <span className="currency">EUR</span></div>
                                            </div>
                                            <div className="personal_details_row">
                                                <div className="label">Deposit Amount <span className="currency">EUR</span></div>
                                                <input type="text" className="meaning dep_limit"/>
                                                <span className="deposit_limit">Min. 5.00 EUR</span>
                                            </div>
                                        </div>
                                        <div className="personal_details_row">
                                            <div className="label"/>
                                            <div className="meaning btn_group column">
                                                <div className="change_btn update">Make Deposit</div>
                                                <div className="link ">Deposit Limits</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*~~~~~content for Credit/Debit Card~~~~~*/}
                                    <div id="Credit_Debit_Card">
                                        <div className="pay_method_field credit_payment">
                                            <div className="form-group">
                                                <label className="control-label">Card Number</label>
                                                <input type="text" name="cardnum" id="cardnum"/>
                                                <div className="valid_icon"></div>
                                                <div className="message error">
                                                    <div className="message_text error">
                                                        <span className="bold_text">The field must be completed</span>
                                                        <br/>Please enter the card number.
                                                    </div>
                                                    <div className="message_info error">
                                                        <a href="#" className="bold_link" onClick={()=>this.showContacts()}>Need Help?</a>

                                                        <div className="contact_info">
                                                            <div className="contacts">
                                                                <span>Live Chat</span>
                                                                <a href="#">Speak to an advisor</a>
                                                            </div>
                                                            <div className="contacts">
                                                                <span>Phone</span>
                                                                <div className="phone_num">+44 1782 684 757</div>
                                                            </div>
                                                            <div className="contacts">
                                                                <span>Email</span>
                                                                <a href="#">Send us an email</a>
                                                            </div>
                                                        </div>

                                                        <div className="symbols">
                                                            The following symbols may be used as part of your password:
                                                            <p> {` !"#$%&'()*+,-./:;<=>?_@[\\]^\`{|}~ `}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="control-label">Cardholder Name</label>
                                                <input type="text" name="cardholder" id="cardholder"/>
                                                <div className="valid_icon"></div>
                                                <div className="message error">
                                                    <div className="message_text error">
                                                        <span className="bold_text">The field must be completed</span>
                                                        <br/>Please enter the name as it appears on the card.
                                                    </div>
                                                    <div className="message_info error">
                                                        <a href="#" className="bold_link" onClick={()=>this.showContacts()}>Need Help?</a>

                                                        <div className="contact_info">
                                                            <div className="contacts">
                                                                <span>Live Chat</span>
                                                                <a href="#">Speak to an advisor</a>
                                                            </div>
                                                            <div className="contacts">
                                                                <span>Phone</span>
                                                                <div className="phone_num">+44 1782 684 757</div>
                                                            </div>
                                                            <div className="contacts">
                                                                <span>Email</span>
                                                                <a href="#">Send us an email</a>
                                                            </div>
                                                        </div>

                                                        <div className="symbols">
                                                            The following symbols may be used as part of your password:
                                                            <p> {` !"#$%&'()*+,-./:;<=>?_@[\\]^\`{|}~ `}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="control-label">Start Date</label>
                                                <select name="start_date_m" id="start_date_m" className="w50">
                                                    <option value="0">MM</option>
                                                    <option value="1">01</option>
                                                    <option value="2">02</option>
                                                    <option value="3">03</option>
                                                    <option value="4">04</option>
                                                    <option value="5">05</option>
                                                    <option value="6">06</option>
                                                    <option value="7">07</option>
                                                    <option value="8">08</option>
                                                    <option value="9">09</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                </select>

                                                <select name="start_date_y" id="start_date_y" className="w50">
                                                    <option value="0">YY</option>
                                                    <option value="1993">93</option>
                                                    <option value="1994">94</option>
                                                    <option value="1995">95</option>
                                                    <option value="1996">96</option>
                                                    <option value="1997">97</option>
                                                    <option value="1998">98</option>
                                                    <option value="1999">99</option>
                                                    <option value="2000">00</option>
                                                    <option value="2001">01</option>
                                                    <option value="2002">02</option>
                                                    <option value="2003">03</option>
                                                    <option value="2004">04</option>
                                                    <option value="2005">05</option>
                                                    <option value="2006">06</option>
                                                    <option value="2007">07</option>
                                                    <option value="2008">08</option>
                                                    <option value="2009">09</option>
                                                    <option value="2010">10</option>
                                                    <option value="2011">11</option>
                                                    <option value="2012">12</option>
                                                    <option value="2013">13</option>
                                                    <option value="2014">14</option>
                                                    <option value="2015">15</option>
                                                    <option value="2016">16</option>
                                                    <option value="2017">17</option>
                                                    <option value="2018">18</option>
                                                    <option value="2019">19</option>
                                                </select>
                                                <div className="valid_icon"></div>
                                                <div className="message error">
                                                    <div className="message_text error">
                                                        <span className="bold_text">The field must be completed</span>
                                                        <br/>Please enter the start date of the card.

                                                    </div>
                                                    <div className="message_info error">
                                                        <a href="#" className="bold_link" onClick={()=>this.showContacts()}>Need Help?</a>

                                                        <div className="contact_info">
                                                            <div className="contacts">
                                                                <span>Live Chat</span>
                                                                <a href="#">Speak to an advisor</a>
                                                            </div>
                                                            <div className="contacts">
                                                                <span>Phone</span>
                                                                <div className="phone_num">+44 1782 684 757</div>
                                                            </div>
                                                            <div className="contacts">
                                                                <span>Email</span>
                                                                <a href="#">Send us an email</a>
                                                            </div>
                                                        </div>

                                                        <div className="symbols">
                                                            The following symbols may be used as part of your password:
                                                            <p> {` !"#$%&'()*+,-./:;<=>?_@[\\]^\`{|}~ `}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="control-label">Expiry Date</label>
                                                <select name="expiry_date_m" id="expiry_date_m" className="w50">
                                                    <option value="0">MM</option>
                                                    <option value="1">01</option>
                                                    <option value="2">02</option>
                                                    <option value="3">03</option>
                                                    <option value="4">04</option>
                                                    <option value="5">05</option>
                                                    <option value="6">06</option>
                                                    <option value="7">07</option>
                                                    <option value="8">08</option>
                                                    <option value="9">09</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                </select>
                                                <select name="expiry_date_y" id="expiry_date_y" className="w50">
                                                    <option value="0">YY</option>
                                                    <option value="1993">93</option>
                                                    <option value="1994">94</option>
                                                    <option value="1995">95</option>
                                                    <option value="1996">96</option>
                                                    <option value="1997">97</option>
                                                    <option value="1998">98</option>
                                                    <option value="1999">99</option>
                                                    <option value="2000">00</option>
                                                    <option value="2001">01</option>
                                                    <option value="2002">02</option>
                                                    <option value="2003">03</option>
                                                    <option value="2004">04</option>
                                                    <option value="2005">05</option>
                                                    <option value="2006">06</option>
                                                    <option value="2007">07</option>
                                                    <option value="2008">08</option>
                                                    <option value="2009">09</option>
                                                    <option value="2010">10</option>
                                                    <option value="2011">11</option>
                                                    <option value="2012">12</option>
                                                    <option value="2013">13</option>
                                                    <option value="2014">14</option>
                                                    <option value="2015">15</option>
                                                    <option value="2016">16</option>
                                                    <option value="2017">17</option>
                                                    <option value="2018">18</option>
                                                    <option value="2019">19</option>
                                                </select>
                                                <div className="valid_icon"></div>
                                                <div className="message error">
                                                    <div className="message_text error">
                                                        <span className="bold_text">The field must be completed</span>
                                                        <br/>Please enter the expiry date of the card.

                                                    </div>
                                                    <div className="message_info error">
                                                        <a href="#" className="bold_link" onClick={()=>this.showContacts()}>Need Help?</a>

                                                        <div className="contact_info">
                                                            <div className="contacts">
                                                                <span>Live Chat</span>
                                                                <a href="#">Speak to an advisor</a>
                                                            </div>
                                                            <div className="contacts">
                                                                <span>Phone</span>
                                                                <div className="phone_num">+44 1782 684 757</div>
                                                            </div>
                                                            <div className="contacts">
                                                                <span>Email</span>
                                                                <a href="#">Send us an email</a>
                                                            </div>
                                                        </div>

                                                        <div className="symbols">
                                                            The following symbols may be used as part of your password:
                                                            <p> {` !"#$%&'()*+,-./:;<=>?_@[\\]^\`{|}~ `}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="control-label">Issue Number</label>
                                                <input type="text" name="issue_number" id="issue_number"/>
                                                <div className="valid_icon"></div>
                                                <div className="message error">
                                                    <div className="message_text error">
                                                        <span className="bold_text">The field must be completed</span>
                                                        <br/>Please enter the issue number of the card.

                                                    </div>
                                                    <div className="message_info error">
                                                        <a href="#" className="bold_link" onClick={()=>this.showContacts()}>Need Help?</a>

                                                        <div className="contact_info">
                                                            <div className="contacts">
                                                                <span>Live Chat</span>
                                                                <a href="#">Speak to an advisor</a>
                                                            </div>
                                                            <div className="contacts">
                                                                <span>Phone</span>
                                                                <div className="phone_num">+44 1782 684 757</div>
                                                            </div>
                                                            <div className="contacts">
                                                                <span>Email</span>
                                                                <a href="#">Send us an email</a>
                                                            </div>
                                                        </div>

                                                        <div className="symbols">
                                                            The following symbols may be used as part of your password:
                                                            <p> {` !"#$%&'()*+,-./:;<=>?_@[\\]^\`{|}~ `}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="control-label">Card Security Number</label>
                                                <input type="text" name="card_security" id="card_security"/>
                                                <div className="valid_icon"></div>
                                                <div className="message error">
                                                    <div className="message_text error">
                                                        <span className="bold_text">The field must be completed</span>
                                                        <br/>Please enter the card security number. This is the last 3 digits of the number found on signature strip on the reverse of the card.

                                                    </div>
                                                    <div className="message_info error">
                                                        <a href="#" className="bold_link" onClick={()=>this.showContacts()}>Need Help?</a>

                                                        <div className="contact_info">
                                                            <div className="contacts">
                                                                <span>Live Chat</span>
                                                                <a href="#">Speak to an advisor</a>
                                                            </div>
                                                            <div className="contacts">
                                                                <span>Phone</span>
                                                                <div className="phone_num">+44 1782 684 757</div>
                                                            </div>
                                                            <div className="contacts">
                                                                <span>Email</span>
                                                                <a href="#">Send us an email</a>
                                                            </div>
                                                        </div>

                                                        <div className="symbols">
                                                            The following symbols may be used as part of your password:
                                                            <p> {` !"#$%&'()*+,-./:;<=>?_@[\\]^\`{|}~ `}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="payment-group">
                                            <div className="personal_details_row">
                                                <div className="label">Current Balance</div>
                                                <div className="meaning">15.19 <span className="currency">EUR</span></div>
                                            </div>
                                            <div className="personal_details_row">
                                                <div className="label">Deposit Amount <span className="currency">EUR</span></div>
                                                <input type="text" className="meaning dep_limit"/>
                                                <span className="deposit_limit">Min. 5.00 EUR</span>
                                            </div>
                                        </div>
                                        <div className="personal_details_row">
                                            <div className="label"/>
                                            <div className="meaning btn_group column">
                                                <div className="change_btn update">Make Deposit</div>
                                                <div className="link ">Deposit Limits</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/*~~~~~content for paysafecard~~~~~*/}
                                    <div id="paysafecard">
                                        <div className="payment_title">To obtain a paysafecard visit <a href="#">www.paysafecard.com</a></div>
                                        <div className="payment-group">
                                            <div className="personal_details_row">
                                                <div className="label">Current Balance</div>
                                                <div className="meaning">15.19 <span className="currency">EUR</span></div>
                                            </div>
                                            <div className="personal_details_row">
                                                <div className="label">Deposit Amount <span className="currency">EUR</span></div>
                                                <input type="text" className="meaning dep_limit"/>
                                                <span className="deposit_limit">Min. 5.00 EUR</span>
                                            </div>
                                        </div>
                                        <div className="personal_details_row">
                                            <div className="label"/>
                                            <div className="meaning btn_group column">
                                                <div className="change_btn update">Make Deposit</div>
                                                <div className="link ">Deposit Limits</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*~~~~~content for Entropay~~~~~*/}
                                    <div id="Entropay">
                                        <div className="payment_title">
                                            <p className="note red">Please be aware that from the 31st October Entropay will no longer process deposits for users living in countries outside of the EEA.<br/>
                                                Alternatively we offer a range of payment methods which allow you to make quick and easy deposits, including Neteller and Skrill.<br/>
                                                For further details on these payment methods, please visit the Help section of our website, which can be located under the Services menu in the top right-hand corner.</p>
                                            You will need to register with Entropay to make a deposit. <a href="#">Sign up now </a> to receive your bet365 Virtual Entropay card.<br/>
                                            By using a bet365 Virtual Entropay card, Entropay will not charge you for loading funds onto this card.
                                        </div>
                                        <div className="pay_method_field credit_payment">
                                            <div className="form-group">
                                                <label className="control-label">Card Number</label>
                                                <input type="text" name="cardnum" id="cardnum"/>
                                                <div className="valid_icon"></div>
                                                <div className="message error">
                                                    <div className="message_text error">
                                                        <span className="bold_text">The field must be completed</span>
                                                        <br/>Please enter the card number.
                                                    </div>
                                                    <div className="message_info error">
                                                        <a href="#" className="bold_link" onClick={()=>this.showContacts()}>Need Help?</a>

                                                        <div className="contact_info">
                                                            <div className="contacts">
                                                                <span>Live Chat</span>
                                                                <a href="#">Speak to an advisor</a>
                                                            </div>
                                                            <div className="contacts">
                                                                <span>Phone</span>
                                                                <div className="phone_num">+44 1782 684 757</div>
                                                            </div>
                                                            <div className="contacts">
                                                                <span>Email</span>
                                                                <a href="#">Send us an email</a>
                                                            </div>
                                                        </div>

                                                        <div className="symbols">
                                                            The following symbols may be used as part of your password:
                                                            <p> {` !"#$%&'()*+,-./:;<=>?_@[\\]^\`{|}~ `}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="control-label">Expiry Date</label>
                                                <select name="expiry_date_m" id="expiry_date_m" className="w50">
                                                    <option value="0">MM</option>
                                                    <option value="1">01</option>
                                                    <option value="2">02</option>
                                                    <option value="3">03</option>
                                                    <option value="4">04</option>
                                                    <option value="5">05</option>
                                                    <option value="6">06</option>
                                                    <option value="7">07</option>
                                                    <option value="8">08</option>
                                                    <option value="9">09</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                </select>
                                                <select name="expiry_date_y" id="expiry_date_y" className="w50">
                                                    <option value="0">YY</option>
                                                    <option value="1993">93</option>
                                                    <option value="1994">94</option>
                                                    <option value="1995">95</option>
                                                    <option value="1996">96</option>
                                                    <option value="1997">97</option>
                                                    <option value="1998">98</option>
                                                    <option value="1999">99</option>
                                                    <option value="2000">00</option>
                                                    <option value="2001">01</option>
                                                    <option value="2002">02</option>
                                                    <option value="2003">03</option>
                                                    <option value="2004">04</option>
                                                    <option value="2005">05</option>
                                                    <option value="2006">06</option>
                                                    <option value="2007">07</option>
                                                    <option value="2008">08</option>
                                                    <option value="2009">09</option>
                                                    <option value="2010">10</option>
                                                    <option value="2011">11</option>
                                                    <option value="2012">12</option>
                                                    <option value="2013">13</option>
                                                    <option value="2014">14</option>
                                                    <option value="2015">15</option>
                                                    <option value="2016">16</option>
                                                    <option value="2017">17</option>
                                                    <option value="2018">18</option>
                                                    <option value="2019">19</option>
                                                </select>
                                                <div className="valid_icon"></div>
                                                <div className="message error">
                                                    <div className="message_text error">
                                                        <span className="bold_text">The field must be completed</span>
                                                        <br/>Please enter the expiry date of the card.

                                                    </div>
                                                    <div className="message_info error">
                                                        <a href="#" className="bold_link" onClick={()=>this.showContacts()}>Need Help?</a>

                                                        <div className="contact_info">
                                                            <div className="contacts">
                                                                <span>Live Chat</span>
                                                                <a href="#">Speak to an advisor</a>
                                                            </div>
                                                            <div className="contacts">
                                                                <span>Phone</span>
                                                                <div className="phone_num">+44 1782 684 757</div>
                                                            </div>
                                                            <div className="contacts">
                                                                <span>Email</span>
                                                                <a href="#">Send us an email</a>
                                                            </div>
                                                        </div>

                                                        <div className="symbols">
                                                            The following symbols may be used as part of your password:
                                                            <p> {` !"#$%&'()*+,-./:;<=>?_@[\\]^\`{|}~ `}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="control-label">Card Security Number (CVV)</label>
                                                <input type="text" name="cardcvv" id="cardcvv"/>
                                                <div className="valid_icon"></div>
                                                <div className="message error">
                                                    <div className="message_text error">
                                                        <span className="bold_text">The field must be completed</span>
                                                        <br/>Please enter the card number.
                                                    </div>
                                                    <div className="message_info error">
                                                        <a href="#" className="bold_link" onClick={()=>this.showContacts()}>Need Help?</a>

                                                        <div className="contact_info">
                                                            <div className="contacts">
                                                                <span>Live Chat</span>
                                                                <a href="#">Speak to an advisor</a>
                                                            </div>
                                                            <div className="contacts">
                                                                <span>Phone</span>
                                                                <div className="phone_num">+44 1782 684 757</div>
                                                            </div>
                                                            <div className="contacts">
                                                                <span>Email</span>
                                                                <a href="#">Send us an email</a>
                                                            </div>
                                                        </div>

                                                        <div className="symbols">
                                                            The following symbols may be used as part of your password:
                                                            <p> {` !"#$%&'()*+,-./:;<=>?_@[\\]^\`{|}~ `}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="payment-group">
                                            <div className="personal_details_row">
                                                <div className="label">Current Balance</div>
                                                <div className="meaning">15.19 <span className="currency">EUR</span></div>
                                            </div>
                                            <div className="personal_details_row">
                                                <div className="label">Deposit Amount <span className="currency">EUR</span></div>
                                                <input type="text" className="meaning dep_limit"/>
                                                <span className="deposit_limit">Min. 10.00 EUR</span>
                                            </div>
                                        </div>
                                        <div className="personal_details_row">
                                            <div className="label"/>
                                            <div className="meaning btn_group column">
                                                <div className="change_btn update">Make Deposit</div>
                                                <div className="link ">Deposit Limits</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/*~~~~~content for Wire Transfer~~~~~*/}
                                    <div id="Wire_Transfer">
                                       <div className="bank_details_block">
                                           <p className="bank_details_title">How To Make Your Bank Wire Deposit</p>
                                           <p className="note">Send funds to the following bank account including your username as a reference:</p>
                                           <div className="bank_details_info">
                                               <div className="personal_details_row">
                                                   <div className="label">Account Name</div>
                                                   <div className="meaning">Hillside (Sports) GP Limited</div>
                                               </div>
                                               <div className="personal_details_row">
                                                   <div className="label">Bank Name</div>
                                                   <div className="meaning">Barclays Bank plc</div>
                                               </div>
                                               <div className="personal_details_row">
                                                   <div className="label">Bank Address</div>
                                                   <div className="meaning note">50 Pall Mall
                                                       <p>London</p>
                                                       <p>St James</p>
                                                       <p>Greater London</p>
                                                       <p>SW1Y 5JH</p>
                                                       <p>United Kingdom</p>
                                                   </div>
                                               </div>
                                               <div className="personal_details_row">
                                                   <div className="label">IBAN</div>
                                                   <div className="meaning">GB33BARC20658259151311</div>
                                               </div>
                                               <div className="personal_details_row">
                                                   <div className="label">Swift Code</div>
                                                   <div className="meaning">BARCGB22</div>
                                               </div>
                                               <div className="personal_details_row">
                                                   <div className="label">Account Number</div>
                                                   <div className="meaning">59151311</div>
                                               </div>
                                               <div className="personal_details_row">
                                                   <div className="label">Reference</div>
                                                   <div className="meaning">molidabm</div>
                                               </div>
                                           </div>
                                           <p className="note">The minimum deposit amount via Bank Wire is 200.00 EUR. Once funds have been received and cleared we will notify you by email.</p>
                                           <div className="personal_details_row">
                                               <div className="label"/>
                                               <div className="meaning btn_group column">
                                                   <div className="change_btn update">Submit</div>
                                                   <div className="link ">Deposit Limits</div>
                                               </div>
                                           </div>
                                       </div>
                                    </div>
                                    {/*~~~~~content for Cheque~~~~~*/}
                                    <div id="Cheque">
                                        <div className="bank_details_block">
                                            <p className="bank_details_title">How To Make Your Cheque Deposit</p>
                                            <p className="notes">We accept Cashiers' Cheques, Bankers Drafts, International Money Orders or Personal cheques.</p>
                                            <p className="notes">All cheques should be made payable to to Hillside(Sports) GP Limited T/A bet365. Please print your username, name and address on the reverse and send to:</p>
                                            <p className="adress">
                                                C/O Hillside (Shared Services) Limited T/A bet365<br/>
                                                Internal Audit Department<br/>
                                                bet365 House<br/>
                                                Media Way<br/>
                                                Stoke on Trent<br/>
                                                ST1 5SZ<br/>
                                                United Kingdom
                                            </p>
                                            <p className="notes">Deposits will be credited to your account as soon as cheques have been cleared, for Personal cheques this may take up to 28 days.</p>
                                            <p className="notes">Please contact us for details of how to send your payment via FedEx.</p>
                                            <div className="personal_details_row">
                                                <div className="label"/>
                                                <div className="meaning btn_group column">
                                                    <div className="change_btn update">Submit</div>
                                                    <div className="link ">Deposit Limits</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :""
                }
                {this.state.submenu == "transfer" ?
                    <div className="account_info_container">
                        <div className="table_content">
                            {
                                this.state.postSuccess?
                                    <div className="post-success-bank">
                                        <div className="success">Transfer Successful</div>
                                        <div className="text">Your balances have been updated.</div>
                                        <button type="button" className="close" onClick={()=>this.ClosePostSuccess()}></button>
                                    </div> : ""
                            }
                            <div className="balance_table">
                                <div className="balance_table_title">
                                    <p className="title"> Deposit to Sports</p>
                                    <p className="refresh_link">Payment Options</p>
                                </div>
                                <table className="balances">
                                    <thead>
                                    <tr>
                                        <th className="col1">
                                            Account
                                        </th>
                                        <th className="col2">
                                            Withdrawable
                                        </th>
                                        <th className="col3">
                                            Bet Credits/Bonus
                                        </th>
                                        <th className="col4">
                                            Total
                                        </th>
                                        <th className="col5"/>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className="col1">
                                            Sports
                                        </td>
                                        <td className="col2">
                                            <span className="col2">0.00</span>
                                        </td>
                                        <td className="col3">
                                            <span className="col3">
                                            <span>0.00</span>
                                            </span>
                                        </td>
                                        <td className="col4">
                                            <span className="col4 bold">0.00</span>
                                        </td>
                                        <td className="col5">
                                            <a href="#" className="make_dep">Make Deposit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col1">
                                            Casino
                                        </td>
                                        <td colSpan="3">
                                            <a href="#" className="show_balance_link">Show Ballance</a>
                                        </td>
                                        <td className="col5">
                                            <a href="#" className="make_dep">Make Deposit</a>
                                        </td>
                                    </tr>
                                    {/*~~~~~~когда есть данные~~~~~~~*/}
                                    <tr>
                                        <td className="col1">
                                            Casino
                                        </td>
                                        <td className="col2">
                                            <span className="col2 balance">0.00</span>
                                        </td>
                                        <td className="col2">
                                            <span className="col2 balance">0.00</span>
                                        </td>
                                        <td className="col4">
                                            <span className="col4 bold">0.00</span>
                                        </td>
                                        <td className="col5">
                                            <a href="#" className="make_dep">Make Deposit</a>
                                        </td>
                                    </tr>
                                    {/*~~~~~~//когда есть данные~~~~~~~*/}
                                    <tr>
                                        <td className="col1">
                                            Poker
                                        </td>
                                        <td colSpan="3">
                                            <a href="#" className="show_balance_link">Show Ballance</a>
                                        </td>
                                        <td className="col5">
                                            <a href="#" className="make_dep">Make Deposit</a>
                                        </td>
                                    </tr>
                                    {/*~~~~~~когда есть данные~~~~~~~*/}
                                    <tr>
                                        <td className="col1">
                                            Poker
                                        </td>
                                        <td className="col2">
                                            <span className="col2 balance">0.00</span>
                                        </td>
                                        <td className="col2">
                                            <span className="col2 balance">0.00</span>
                                        </td>
                                        <td className="col4">
                                            <span className="col4 bold">0.00</span>
                                        </td>
                                        <td className="col5">
                                            <a href="#" className="make_dep">Make Deposit</a>
                                        </td>
                                    </tr>
                                    {/*~~~~~~//когда есть данные~~~~~~~*/}
                                    <tr>
                                        <td className="col1">
                                            Games/Bingo/<br/>Vegas
                                        </td>
                                        <td className="col2">
                                            <span className="col2 balance">0.00</span>
                                        </td>
                                        <td className="col3">
                                            <span className="col3">
                                            <span className="bonusBalance">0.00</span>/<span className="bingoBonusBalance">0.00</span>/<br/>
                                            <span className="vegasBonusBalance">0.00</span>
                                            </span>
                                        </td>
                                        <td className="col4">
                                            <span className="col4 bold">0.00</span>
                                        </td>
                                        <td className="col5">
                                            <a href="#" className="make_dep">Make Deposit</a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="transferFunds">
                                <div className="transferFunds_title">Transfer Funds</div>
                                <form action="post"
                                      className="form_lost_login form_transferFunds">
                                    <div className="form-group">
                                        <label className="control-label">Transfer from</label>
                                        <select onFocus={()=>this.checkInput('transferFrom')}
                                                name="transfer_from"
                                                onChange={(e) => this.changeValueOnInput(e, 'transferFrom')}
                                                id="transfer_from"
                                                className="w210">
                                            <option selected="selected" value="sports">Sports</option>
                                            <option value="casino">Casino</option>
                                            <option value="poker">Poker</option>
                                            <option value="other">Games/Bingo/Vegas</option>>
                                        </select>

                                    </div>




                                    <div className="form-group">
                                        <label className="control-label">Transfer to</label>
                                        <select onFocus={()=>this.checkInput('transferTo')}
                                                name="transfer_to"
                                                onChange={(e) => this.changeValueOnInput(e, 'transferTo')}
                                                id="transfer_to"
                                                className="w210">
                                            <option value="sports">Sports</option>
                                            <option selected="selected" value="casino">Casino</option>
                                            <option value="poker">Poker</option>
                                            <option value="other">Games/Bingo/Vegas</option>>
                                        </select>
                                        <ValidateMessageHelper errorIcon={this.state.transferForm.errors.transferTo.errorIcon}
                                                               text={this.state.transferForm.errors.transferTo.error ? 'Please ensure the “Transfer from” selection is not the same as the “Transfer to” selection.' : ''} />
                                    </div>


                                    <div className="form-group">
                                        <label className="control-label">Amount USD</label>
                                        <input onFocus={()=>this.checkInput('amount')}
                                               type="number"
                                               name="amount"
                                               min = "0"
                                               className="w210"
                                               onChange={(e) => this.changeValueOnInput(e, 'amount')}/>
                                        <ValidateMessageHelper  errorIcon={this.state.transferForm.errors.amount.errorIcon}
                                                                text={this.state.transferForm.errors.amount.error ? 'Please enter the amount.' : ''} />
                                    </div>


                                    {data.transferTo != "casino"? "" :
                                        <div className="form-group">
                                            <label className="control-label">Offer Code</label>
                                            <select onFocus={()=>this.checkInput('offerCode')}
                                                    name="offer_code"
                                                    id="offer_code"
                                                    className="w210">
                                                <option value="">Please select</option>
                                                <option value="140">BONUS100</option>
                                                <option value="-1">No Bonus</option>
                                            </select>

                                            {/*<div className="valid_icon"></div>*/}
                                            {/*<div className="message error">*/}
                                            {/*<div className="message_text error">*/}
                                            {/*<span className="bold_text">The field must be completed</span><br/>*/}
                                            {/*Please enter the offer code.*/}
                                            {/*</div>*/}
                                            {/*<div className="message_info error">*/}
                                            {/*<a href="#" className="bold_link" onClick={()=>this.showContacts()}>Need Help?</a>*/}

                                            {/*<div className="contact_info">*/}
                                            {/*<div className="contacts">*/}
                                            {/*<span>Live Chat</span>*/}
                                            {/*<a href="#">Speak to an advisor</a>*/}
                                            {/*</div>*/}
                                            {/*<div className="contacts">*/}
                                            {/*<span>Phone</span>*/}
                                            {/*<div className="phone_num">+44 1782 684 757</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="contacts">*/}
                                            {/*<span>Email</span>*/}
                                            {/*<a href="#">Send us an email</a>*/}
                                            {/*</div>*/}
                                            {/*</div>*/}

                                            {/*<div className="symbols">*/}
                                            {/*The following symbols may be used as part of your password:*/}
                                            {/*<br/>*/}
                                            {/*{`!"#$%&'()*+,-./:;<=>?_@[\\]^\`{|}~`}*/}
                                            {/*</div>*/}
                                            {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<a href="#" className="offer_code_link">Terms and Conditions</a>*/}
                                        </div>}
                                    <button
                                        type="button"
                                        className="modal_btn"
                                        onClick={this.onSubmit}>
                                        Transfer Funds</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    :""
                }
                {this.state.submenu == "cancel_withdraw" ?
                    <div className="account_info_container">
                        <div className="table_content">
                            <div className="empty_bonus_tab">You have no pending withdrawals.</div>
                        </div>
                    </div>
                    :""
                }
                {this.state.submenu == "withdraw" ?
                    <div className="account_info_container">
                        <div className="table_content">
                            {/*~~~~~~ no account history~~~~~~~~~*/}
                            <div className="tab_details_info withdraw_tab">
                                    <p className="tab_title"> Account Access</p>
                                <div className="text_info">
                                    <p>In accordance with licensing conditions we are required to verify your age and identity. Certain restrictions may be applied to your account until we are able to verify your details. Please go to the Know Your Customer page in Members and provide the requested information.</p>
                                </div>
                            </div>
                            {/*~~~~~~ have account history~~~~~~~~~*/}
                            <div className="tab_details_info withdraw_tab">
                                <p className="tab_title"> Skrill Withdrawal From Sports</p>
                                <div className="payment-group">
                                    <div className="personal_details_row">
                                        <div className="label">Current Withdrawable Balance</div>
                                        <div className="meaning">15.19 <span className="currency">EUR</span></div>
                                    </div>
                                    <div className="personal_details_row">
                                        <div className="label">Withdrawal Amount EUR</div>
                                        <div className="meaning note">
                                            <input type="text" className="meaning amount"/>
                                            <p className="some_note">Min. 5.00 / Max. 35,000.00</p>
                                        </div>
                                        <div className="valid_icon"></div>
                                        <div className="message error">
                                            <div className="message_text error">
                                                <span className="bold_text">The field must contain a valid amount</span><br/>
                                                Please enter the amount you wish to withdraw from your account using numbers only. Do not enter a currency symbol. The minimum withdrawal amount is 5.00 EUR.
                                            </div>
                                            <div className="message_info error">
                                                <a href="#" className="bold_link" onClick={()=>this.showContacts()}>Need Help?</a>

                                                <div className="contact_info">
                                                    <div className="contacts">
                                                        <span>Live Chat</span>
                                                        <a href="#">Speak to an advisor</a>
                                                    </div>
                                                    <div className="contacts">
                                                        <span>Phone</span>
                                                        <div className="phone_num">+44 1782 684 757</div>
                                                    </div>
                                                    <div className="contacts">
                                                        <span>Email</span>
                                                        <a href="#">Send us an email</a>
                                                    </div>
                                                </div>

                                                <div className="symbols">
                                                    The following symbols may be used as part of your password:
                                                    <br/>
                                                    {` !"#$%&'()*+,-./:;<=>?_@[\\]^\`{|}~ `}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="personal_details_row">
                                        <div className="label">Password</div>
                                        <input type="password" className="meaning"/>
                                        <div className="valid_icon"></div>
                                        <div className="message error">
                                            <div className="message_text error">
                                                <span className="bold_text">The field must be completed</span><br/>
                                                Please enter your bet365 password.
                                            </div>
                                            <div className="message_info error">
                                                <a href="#" className="bold_link" onClick={()=>this.showContacts()}>Need Help?</a>

                                                <div className="contact_info">
                                                    <div className="contacts">
                                                        <span>Live Chat</span>
                                                        <a href="#">Speak to an advisor</a>
                                                    </div>
                                                    <div className="contacts">
                                                        <span>Phone</span>
                                                        <div className="phone_num">+44 1782 684 757</div>
                                                    </div>
                                                    <div className="contacts">
                                                        <span>Email</span>
                                                        <a href="#">Send us an email</a>
                                                    </div>
                                                </div>

                                                <div className="symbols">
                                                    The following symbols may be used as part of your password:
                                                    <br/>
                                                    {` !"#$%&'()*+,-./:;<=>?_@[\\]^\`{|}~ `}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="personal_details_row bordered">
                                        <div className="label"/>
                                        <div className="meaning btn_group column ">
                                            <div className="change_btn update">Make Withdrawal</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    :""
                }


            </div>
        )

    }
}

export default Bank;