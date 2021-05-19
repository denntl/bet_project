import React from 'react';



class MakeDeposit extends React.Component {
    constructor(props) {
        super(props);
    }
    showContacts = () => {
        if ($('.contact_info').hasClass('show'))
            $('.contact_info').removeClass('show')
        else(
            $('.contact_info').addClass('show')
        )

    }
    changeColor = () => {
        if ($('.free-bet-callout').hasClass('no_active'))
            $('.free-bet-callout').removeClass('no_active')
        else(
            $('.free-bet-callout').addClass('no_active')
        )
    }
    render() {
        return(
            <div id="make_deposit" className="modal_bet new_window" role="dialog">
                <div className="modal_content">
                    <div className="modal_header full">
                        <button type="button" className="close" onClick={() => this.props.closeModal('makeDeposit')}></button>

                    </div>
                    <div className="modal-body make_deposit">
                        <div className="block_before_form">
                            <p className="title">Deposit to Sports</p>
                            <div className="pay_options">
                                <a href="#">Payment Options</a>
                            </div>
                        </div>
                        <div className="info_panel">
                            <span className="green_text">Your account has been created</span>
                            <span className="info_text">Deposit now to complete the process</span>
                        </div>
                        <p className="modal_notice"><span className="red_star">*</span> Fields must be completed</p>
                        <form action="post" className="form_lost_login form_make_deposit">
                            <div className="pay_method_field">
                                <div className="form-group">
                                    <label className="control-label">Payment Method</label>
                                    <select name="payment_method" id="payment_method" className="w315">
                                        <option selected="selected" value="1">Credit/Debit Card</option>
                                        <option value="18">Skrill</option>
                                        <option value="82">Skrill 1-Tap</option>
                                        <option value="8">Neteller</option>
                                        <option value="19">paysafecard</option>
                                        <option value="22">Entropay</option>
                                        <option value="85">Qiwi</option>
                                        <option value="4">Wire Transfer</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="control-label">Betting Currency</label>
                                    <select name="betting_currency" id="betting_currency" className="w315">
                                        <option value="17">Euros (EUR)</option>
                                        <option value="1">UK Pounds (GBP)</option>
                                        <option selected="selected" value="54">United States Dollars (USD)</option>
                                    </select>
                                </div>
                            </div>

                            <div className="pay_method_field">
                                <div className="form-group">
                                    <label className="control-label">Card Number <span className="red_star">*</span></label>
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
                                    <label className="control-label">Cardholder Name <span className="red_star">*</span></label>
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
                                    <label className="control-label">Start Date<span className="red_star">*</span></label>
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
                                    <label className="control-label">Expiry Date<span className="red_star">*</span></label>
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
                                    <label className="control-label">Issue Number <span className="red_star">*</span></label>
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
                                    <label className="control-label">Card Security Number<span className="red_star">*</span></label>
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
                            <div className="pay_method_field">
                            <div className="form-group">
                                <label className="control-label">Deposit Amount USD<span className="red_star">*</span></label>
                                <input type="text" name="deposit_amount" id="deposit_amount" className="w95"/>
                                <span className="deposit_limit">Min. 10.00 USD</span>
                                <div className="valid_icon"></div>
                                <div className="message error">
                                    <div className="message_text error">
                                        <span className="bold_text">The field must be completed</span>
                                        <br/>Please enter the amount you wish to deposit into your account using numbers only. Do not enter a currency symbol. The minimum deposit amount is 10.00 USD.

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
                                            <p> {` !"#$%&'()*+,-./:;<=>?_@[\\]^\`{|}~ `}</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="free-bet-callout no_active">
                                <div className="free-bet-callout_header no_active">Open Account Offer - get up to 30
                                <span className="offer-item-title-currency"> USD </span>in Bet Credits
                                </div>
                                <div className="free-bet-callout_body">
                                    <div className="checkcomponent">
                                        <label>
                                            <input type="checkbox" name="accept_check" className="checkbox_accept" onClick={()=>this.changeColor()}/>
                                            <span className="checkbox_custom_accept"></span>
                                        </label>
                                    </div>
                                    <div className="accept_text">
                                        <div className="free-bet-callout_title">
                                            Claim <span className="user_balance">0.00</span> <span className="currency">USD</span> in Bet Credits
                                        </div>
                                        <p className="description">
                                            We'll match your qualifying deposit in Bet Credits (up to 30 <span className="currency">USD</span> ) when you place qualifying bets to the same value and they are settled.
                                        </p>
                                        <p className="description">Claim By 26 Dec 12:06. Min deposit 10 <span className="currency">USD</span>. Min odds, bet and payment method restrictions apply. Returns exclude Bet Credits stake. </p>
                                        <a href="#" className="terms-link">Time limits and T&Cs apply</a>
                                    </div>

                                </div>

                            </div>
                            <div className="form-group">
                                <label className="control-label">Deposit Limit Period<span className="red_star">*</span></label>
                                <select name="deposit_period" id="deposit_period" className="w203">
                                    <option value="-1">Please select</option>
                                    <option value="0">24 Hour</option>
                                    <option value="1">7 Day</option>
                                    <option value="2">30 Day</option>
                                </select>
                                <div className="valid_icon"></div>
                                <div className="message error">
                                    <div className="message_text error">
                                        <span className="bold_text">The field must be completed</span>
                                        <br/>Please select a 24 hour, 7 day or 30 day deposit limit.

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
                                <label className="control-label">Deposit Limit<span className="red_star">*</span></label>
                                <select name="deposit_limit" id="deposit_limit" className="w203">
                                    <option value="">Please select</option>
                                    <option value="500000000">Unlimited</option>
                                    <option value="10">10</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                    <option value="150">150</option>
                                    <option value="250">250</option>
                                    <option value="500">500</option>
                                    <option value="1000">1000</option>
                                    <option value="2000">2000</option>
                                    <option value="2500">2500</option>
                                    <option value="5000">5000</option>
                                    <option value="10000">10000</option>
                                    <option value="20000">20000</option>
                                    <option value="50000">50000</option>
                                    <option value="100000">100000</option>
                                    <option value="250000">250000</option>
                                </select>
                                <div className="valid_icon"></div>
                                <div className="message error">
                                    <div className="message_text error">
                                        <span className="bold_text">The field must be completed</span>
                                        <br/>Please select your deposit limit.

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
                            <div className="deposit_limit_info">
                                <p>Use Deposit Limits to manage the amount of money you are able to deposit into your account over a specified period.</p>
                                <p>You can set, amend and confirm all available deposit limits in the Responsible Gambling Controls section of Members by choosing Deposit Limits.</p>
                            </div>
                            </div>
                           <button type="button" id="makeDeposit_btn" className="modal_btn" >Make Deposit</button>
                        </form>

                    </div>
                </div>
            </div>
        )

    }
}

export default MakeDeposit;
