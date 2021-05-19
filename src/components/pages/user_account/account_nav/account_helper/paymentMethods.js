import React from 'react';




class PaymentMethods extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            debitCard:false,
            creditCard:false,
            bankTransfer:false,
            navItemInner:this.props.navItemInner,
        }
    }


    toggle = (type) => {
        if (type == "debitCard") {
            this.setState({debitCard: !this.state.debitCard})
        }
        if(type == "creditCard"){
            this.setState({creditCard: !this.state.creditCard})
        }
        if(type == "bankTransfer"){
            this.setState({bankTransfer: !this.state.bankTransfer})
        }
    };
    changeContentInner = (tab) => {
        console.log("changeContentInner tab :",tab);
        this.setState({
            navItemInner:tab
        })
    }
    render() {
        return(
            <div className="helper_content">
                <div className="pageHeading payment">Payment Methods</div>
                <div className="helperInnerTabs">
                    <ul className="paymentList">
                        <li className={`paymentItem ${this.state.navItemInner == "deposits" ? "active":""}`} onClick={()=>this.changeContentInner("deposits")}>Deposits</li>
                        <li className={`paymentItem ${this.state.navItemInner == "withdrawals" ? "active":""}`}  onClick={()=>this.changeContentInner("withdrawals")}>Withdrawals</li>
                    </ul>
                </div>
                <div className="pp__paymentMethods__selectsContainer">
                    <div className="pp__paymentMethods__column">
                        <div className="pp__paymentMethods__countryLabelWrapper">
                            <h3 className="pp__paymentMethods__countryLabel">Country</h3>
                        </div>
                        <div className="pp__paymentMethods__countrySelectWrapper">
                            <span className="pp__paymentMethods__countrySelect__countryIcon"></span>
                            <select className="  pp__paymentMethods__countrySelect">
                                <option value="3">Albania</option>
                                <option value="4">Algeria</option>
                                <option value="6">Andorra</option>
                                <option value="7">Anguilla</option>
                                <option value="9">Antigua and Barbuda</option>
                                <option value="10">Argentina</option>
                                <option value="11">Armenia</option>
                                <option value="12">Aruba</option>
                                <option value="14">Austria</option>
                                <option value="15">Azerbaijan</option>
                                <option value="16">Bahamas</option>
                                <option value="17">Bahrain</option>
                                <option value="18">Bangladesh</option>
                                <option value="19">Barbados</option>
                                <option value="20">Belarus</option>
                                <option value="21">Belize</option>
                                <option value="23">Benin</option>
                                <option value="24">Bermuda</option>
                                <option value="25">Bolivia</option>
                                <option value="26">Bosnia-Herzegovina</option>
                                <option value="27">Botswana</option>
                                <option value="28">Brazil</option>
                                <option value="29">British Virgin Islands</option>
                                <option value="30">Brunei Darussalam</option>
                                <option value="32">Burkina Faso</option>
                                <option value="35">Cameroon</option>
                                <option value="36">Canada</option>
                                <option value="37">Cape Verde Islands</option>
                                <option value="38">Cayman Islands</option>
                                <option value="39">Central African Republic</option>
                                <option value="41">Chile</option>
                                <option value="42">China</option>
                                <option value="44">Colombia</option>
                                <option value="46">Cook Islands</option>
                                <option value="47">Costa Rica</option>
                                <option value="48">Cote D'Ivoire</option>
                                <option value="50">Croatia</option>
                                <option value="49">Cuba</option>
                                <option value="55">Djibouti</option>
                                <option value="56">Dominica</option>
                                <option value="57">Dominican Republic</option>
                                <option value="58">Ecuador</option>
                                <option value="59">Egypt</option>
                                <option value="60">El Salvador</option>
                                <option value="62">Equatorial Guinea</option>
                                <option value="65">Ethiopia</option>
                                <option value="66">Faroe Islands</option>
                                <option value="67">Fiji</option>
                                <option value="68">Finland</option>
                                <option value="183">French Polynesia</option>
                                <option value="72">Gabon</option>
                                <option value="73">Gambia</option>
                                <option value="74">Georgia</option>
                                <option value="75">Germany</option>
                                <option value="76">Ghana</option>
                                <option value="77">Gibraltar</option>
                                <option value="79">Grenada</option>
                                <option value="82">Guatemala</option>
                                <option value="83">Guinea</option>
                                <option value="85">Guyana</option>
                                <option value="87">Honduras</option>
                                <option value="89">Hungary</option>
                                <option value="90">Iceland</option>
                                <option value="91">India</option>
                                <option value="92">Indonesia</option>
                                <option value="95">Ireland</option>
                                <option value="98">Jamaica</option>
                                <option value="99">Japan</option>
                                <option value="100">Jordan</option>
                                <option value="101">Kazakhstan</option>
                                <option value="102">Kenya</option>
                                <option value="104">Korea (South)</option>
                                <option value="105">Kuwait</option>
                                <option value="106">Kyrgyzstan</option>
                                <option value="107">Laos</option>
                                <option value="108">Latvia</option>
                                <option value="109">Lebanon</option>
                                <option value="110">Lesotho</option>
                                <option value="111">Liberia</option>
                                <option value="113">Liechtenstein</option>
                                <option value="114">Lithuania</option>
                                <option value="115">Luxembourg</option>
                                <option value="214">Macedonia</option>
                                <option value="117">Madagascar</option>
                                <option value="118">Malawi</option>
                                <option value="121">Malaysia</option>
                                <option value="122">Maldives</option>
                                <option value="119">Mali</option>
                                <option value="120">Malta</option>
                                <option value="124">Mauritania</option>
                                <option value="125">Mauritius</option>
                                <option value="126">Mexico</option>
                                <option value="127">Moldova</option>
                                <option value="128">Mongolia</option>
                                <option value="225">Montenegro</option>
                                <option value="129">Montserrat</option>
                                <option value="130">Morocco</option>
                                <option value="131">Mozambique</option>
                                <option value="133">Namibia</option>
                                <option value="134">Nepal</option>
                                <option value="136">Netherlands Antilles</option>
                                <option value="137">New Caledonia</option>
                                <option value="138">New Zealand</option>
                                <option value="139">Nicaragua</option>
                                <option value="140">Niger</option>
                                <option value="141">Nigeria</option>
                                <option value="143">Norway</option>
                                <option value="144">Oman</option>
                                <option value="145">Pakistan</option>
                                <option value="146">Palestine</option>
                                <option value="147">Panama</option>
                                <option value="148">Papua New Guinea</option>
                                <option value="149">Paraguay</option>
                                <option value="150">Peru</option>
                                <option value="155">Qatar</option>
                                <option value="158">Russia</option>
                                <option value="157">Rwanda</option>
                                <option value="159">San Marino</option>
                                <option value="160">Sao Tome E Principe</option>
                                <option value="161">Saudi Arabia</option>
                                <option value="163">Senegal</option>
                                <option value="240">Serbia</option>
                                <option value="164">Seychelles</option>
                                <option value="165">Sierra Leone</option>
                                <option value="172">Slovakia</option>
                                <option value="167">Slovenia</option>
                                <option value="168">Solomon Islands</option>
                                <option value="176">Sri Lanka</option>
                                <option value="177">St. Kitts and Nevis</option>
                                <option value="178">St. Lucia</option>
                                <option value="180">Surinam</option>
                                <option value="173">Swaziland</option>
                                <option value="181">Sweden</option>
                                <option value="174">Switzerland</option>
                                <option value="212">Taiwan</option>
                                <option value="185">Tanzania</option>
                                <option value="186">Thailand</option>
                                <option value="187">Togo</option>
                                <option value="188">Tonga</option>
                                <option value="193">Trinidad and Tobago</option>
                                <option value="189">Tunisia</option>
                                <option value="192">Turks and Caicos Islands</option>
                                <option value="194">Uganda</option>
                                <option value="197">UK</option>
                                <option selected="" value="195">Ukraine</option>
                                <option value="196">United Arab Emirates</option>
                                <option value="199">Uruguay</option>
                                <option value="202">Vanuatu</option>
                                <option value="204">Vietnam</option>
                                <option value="179">Vincent and The Grenadines</option>
                                <option value="206">Western Samoa</option>
                                <option value="207">Zambia</option>
                            </select>
                        </div>

                    </div>
                    <div className="pp__paymentMethods__column">
                        <div className="pp__paymentMethods__currencyLabelWrapper">
                            <h3 className="pp__paymentMethods__currencyLabel">Currency</h3>
                        </div>
                        <div className="pp__paymentMethods__currencySelectWrapper">
                            <span className="pp__paymentMethods__currencySelect__icon"></span>
                            <select className="pp__paymentMethods__currencySelect ">
                                <option value="17">EUR</option>
                                <option value="1">GBP</option>
                                <option selected="" value="54">USD</option>
                            </select>
                        </div>

                    </div>
                </div>
                {this.state.navItemInner == "deposits" ?
                <div className="paymethod_wrapp">
                    <div className="pp__paymentMethods__accordion__paymentsTypeTable">
                        <div
                            className="pp__paymentMethods__accordion__paymentsTypeTable__paymentCol pp__paymentMethods__accordion__paymentsTypeTable__paymentCol--logo  pp__paymentMethods__accordion__paymentsTypeTable__paymentCol--alignLeft">
                            <span className="pp__paymentMethods__accordion__section__paymentInfoSummary__header">Payment Method</span>
                        </div>
                        <div className="pp__paymentMethods__accordion__paymentsTypeTable__paymentCol">
                            <span className="pp__paymentMethods__accordion__section__paymentInfoSummary__header">Fee</span>
                        </div>
                        <div
                            className="pp__paymentMethods__accordion__paymentsTypeTable__paymentCol pp__paymentMethods__accordion__paymentsTypeTable__paymentCol--time">
                            <span className="pp__paymentMethods__accordion__section__paymentInfoSummary__header">Process Time</span>
                        </div>
                        <div className="pp__paymentMethods__accordion__paymentsTypeTable__paymentCol">
                            <span className="pp__paymentMethods__accordion__section__paymentInfoSummary__header">Min</span>
                        </div>
                        <div className="pp__paymentMethods__accordion__paymentsTypeTable__paymentCol">
                            <span className="pp__paymentMethods__accordion__section__paymentInfoSummary__header">Max</span>
                        </div>
                        <div
                            className="pp__paymentMethods__accordion__paymentsTypeTable__paymentCol pp__paymentMethods__accordion__paymentsTypeTable__paymentCol--details pp__paymentMethods__accordion__paymentsTypeTable__paymentCol--alignRight">
                        <span
                            className="pp__paymentMethods__accordion__section__paymentInfoSummary__header">Details</span>
                        </div>
                    </div>
                    <div className="main_wrapper pp__paymentMethods__accordion">
                        <div id="0" className="pp__paymentMethods__accordion__section" onClick={()=>this.toggle('debitCard')}>

                            <div className="pp__paymentMethods__accordion__paymentsTypeTable__paymentCol pp__paymentMethods__accordion__paymentsTypeTable__paymentCol--logo  pp__paymentMethods__accordion__paymentsTypeTable__paymentCol--alignLeft">
                            <span className="pp__paymentMethods__accordion__section__paymentInfoSummary__header">
                                <img className="pp__paymentMethods__accordion__section__head__logo" alt="Debit Card"
                                     src="../../img/DebitCardsv2.png"/>
                                </span>
                            </div>
                            <div className="pp__paymentMethods__accordion__paymentsTypeTable__paymentCol">
                                <span className="dataTable">Free</span>
                            </div>
                            <div
                                className="pp__paymentMethods__accordion__paymentsTypeTable__paymentCol pp__paymentMethods__accordion__paymentsTypeTable__paymentCol--time">
                                <span className="dataTable">Instant</span>
                            </div>
                            <div className="pp__paymentMethods__accordion__paymentsTypeTable__paymentCol">
                                <span className="dataTable">10</span>
                            </div>
                            <div className="pp__paymentMethods__accordion__paymentsTypeTable__paymentCol">
                                <span className="dataTable">30000</span>
                            </div>
                            <div
                                className="pp__paymentMethods__accordion__paymentsTypeTable__paymentCol pp__paymentMethods__accordion__paymentsTypeTable__paymentCol--details pp__paymentMethods__accordion__paymentsTypeTable__paymentCol--alignRight">
                                <span className="dataTable">Debit Card</span>
                            </div>
                        </div>
                        {this.state.debitCard ?
                            <div className="pp__paymentMethods__accordion__section__body">
                                <div className="infoTextContainer ">You can make secure online
                                    payments instantly using Visa, Electron, Maestro and Mastercard Debit Cards.
                                    Deposits are instant and bet365 apply no charges for using this method.<br/><br/>

                                </div>
                                <div className="infoTextContainer " >To transfer funds, click
                                    on Deposit and select Credit/Debit Card from the list of available payment methods.
                                    Enter your card details, deposit amount and click Make Deposit. Once complete, the
                                    amount will be instantly credited to your bet365 account.<br/><br/>

                                </div>
                                <div className="infoTextContainer ">The card holders name must
                                    match the name registered on your bet365 account.<br/><br/>

                                </div>
                                <div className="infoTextContainer ">Card deposits will appear on your bank statement as
                                    being paid to b365 or bet365.<br/><br/>

                                </div>
                                <div className="infoTextContainer ">Some deposits may be processed via Mastercard
                                    SecureCode or Verified by Visa which are an extra level of protection used when
                                    making payments from your card. This may require you to enter a PIN number or
                                    password to approve the payment. This service is quick, easy and free to set up.

                                </div>
                            </div>
                            :""}
                        <div id="0" className="pp__paymentMethods__accordion__section" onClick={()=>this.toggle('creditCard')}>

                            <div className="pp__paymentMethods__accordion__paymentsTypeTable__paymentCol pp__paymentMethods__accordion__paymentsTypeTable__paymentCol--logo  pp__paymentMethods__accordion__paymentsTypeTable__paymentCol--alignLeft">
                            <span className="pp__paymentMethods__accordion__section__paymentInfoSummary__header">
                                <img className="pp__paymentMethods__accordion__section__head__logo" alt="Debit Card"
                                     src="../../img/CreditCardsv2.png"/>
                                </span>
                            </div>
                            <div className="pp__paymentMethods__accordion__paymentsTypeTable__paymentCol">
                                <span className="dataTable">Free</span>
                            </div>
                            <div
                                className="pp__paymentMethods__accordion__paymentsTypeTable__paymentCol pp__paymentMethods__accordion__paymentsTypeTable__paymentCol--time">
                                <span className="dataTable">Instant</span>
                            </div>
                            <div className="pp__paymentMethods__accordion__paymentsTypeTable__paymentCol">
                                <span className="dataTable">10</span>
                            </div>
                            <div className="pp__paymentMethods__accordion__paymentsTypeTable__paymentCol">
                                <span className="dataTable">30000</span>
                            </div>
                            <div
                                className="pp__paymentMethods__accordion__paymentsTypeTable__paymentCol pp__paymentMethods__accordion__paymentsTypeTable__paymentCol--details pp__paymentMethods__accordion__paymentsTypeTable__paymentCol--alignRight">
                                <span className="dataTable">Credit Card</span>
                            </div>
                        </div>

                        {this.state.creditCard ?
                            <div className="pp__paymentMethods__accordion__section__body">
                                <div className="infoTextContainer ">You can make secure online payments instantly using Visa and MasterCard issued Credit Cards. We also accept prepaid cards issued by Visa and Mastercard, you may need to confirm with the issuer whether there are any restrictions on the card.<br/><br/>

                                </div>
                                <div className="infoTextContainer " >Deposits are instant and bet365 apply no charges for using this method.<br/><br/>
                                </div>
                                <div className="infoTextContainer ">To transfer funds, click on Deposit and select Credit/Debit Card from the list of available payment methods. Enter your card details, deposit amount and click Make Deposit. Once complete, the amount will be instantly credited to your bet365 account.<br/><br/>

                                </div>
                                <div className="infoTextContainer ">The card holders name must match the name registered on your bet365 account.<br/><br/>

                                </div>
                                <div className="infoTextContainer ">Card deposits will appear on your bank statement as being paid to b365 or bet365. </div>
                                <div className="infoTextContainer ">Some deposits may be processed via Mastercard SecureCode or Verified by Visa which are an extra level of protection used when making payments from your card. This may require you to enter a PIN number or password to approve the payment. This service is quick, easy and free to set up.<br/><br/>

                                </div>
                            </div>
                            :""}

                    </div>
                </div>
                :""}

                {this.state.navItemInner == "withdrawals" ?
                    <div className="paymethod_wrapp">
                        <div className="pp__paymentMethods__accordion__paymentsTypeTable">
                            <div
                                className="pp__paymentMethods__accordion__paymentsTypeTable__paymentCol pp__paymentMethods__accordion__paymentsTypeTable__paymentCol--logo  pp__paymentMethods__accordion__paymentsTypeTable__paymentCol--alignLeft">
                                <span className="pp__paymentMethods__accordion__section__paymentInfoSummary__header">Payment Method</span>
                            </div>
                            <div className="pp__paymentMethods__accordion__paymentsTypeTable__paymentCol">
                                <span className="pp__paymentMethods__accordion__section__paymentInfoSummary__header">Fee</span>
                            </div>
                            <div
                                className="pp__paymentMethods__accordion__paymentsTypeTable__paymentCol pp__paymentMethods__accordion__paymentsTypeTable__paymentCol--time">
                                <span className="pp__paymentMethods__accordion__section__paymentInfoSummary__header">Process Time</span>
                            </div>
                            <div className="pp__paymentMethods__accordion__paymentsTypeTable__paymentCol">
                                <span className="pp__paymentMethods__accordion__section__paymentInfoSummary__header">Min</span>
                            </div>
                            <div className="pp__paymentMethods__accordion__paymentsTypeTable__paymentCol">
                                <span className="pp__paymentMethods__accordion__section__paymentInfoSummary__header">Max</span>
                            </div>
                            <div
                                className="pp__paymentMethods__accordion__paymentsTypeTable__paymentCol pp__paymentMethods__accordion__paymentsTypeTable__paymentCol--details pp__paymentMethods__accordion__paymentsTypeTable__paymentCol--alignRight">
                        <span
                            className="pp__paymentMethods__accordion__section__paymentInfoSummary__header">Details</span>
                            </div>
                        </div>
                        <div className="main_wrapper pp__paymentMethods__accordion">
                            <div id="0" className="pp__paymentMethods__accordion__section" onClick={()=>this.toggle('bankTransfer')}>

                                <div className="pp__paymentMethods__accordion__paymentsTypeTable__paymentCol pp__paymentMethods__accordion__paymentsTypeTable__paymentCol--logo  pp__paymentMethods__accordion__paymentsTypeTable__paymentCol--alignLeft">
                            <span className="pp__paymentMethods__accordion__section__paymentInfoSummary__header">
                                <img className="pp__paymentMethods__accordion__section__head__logo" alt="Debit Card"
                                     src="../../img/126x50-bankwire.gif"/>
                                </span>
                                </div>
                                <div className="pp__paymentMethods__accordion__paymentsTypeTable__paymentCol">
                                    <span className="dataTable">1 free every 28 days or USD 9.00</span>
                                </div>
                                <div
                                    className="pp__paymentMethods__accordion__paymentsTypeTable__paymentCol pp__paymentMethods__accordion__paymentsTypeTable__paymentCol--time">
                                    <span className="dataTable">2-10 Banking Days</span>
                                </div>
                                <div className="pp__paymentMethods__accordion__paymentsTypeTable__paymentCol">
                                    <span className="dataTable">40</span>
                                </div>
                                <div className="pp__paymentMethods__accordion__paymentsTypeTable__paymentCol">
                                    <span className="dataTable">50000</span>
                                </div>
                                <div
                                    className="pp__paymentMethods__accordion__paymentsTypeTable__paymentCol pp__paymentMethods__accordion__paymentsTypeTable__paymentCol--details pp__paymentMethods__accordion__paymentsTypeTable__paymentCol--alignRight">
                                    <span className="dataTable">Bank Transfer</span>
                                </div>

                            </div>
                            {this.state.bankTransfer ?
                                <div className="pp__paymentMethods__accordion__section__body">
                                    <div className="infoTextContainer ">You can make secure online payments instantly using Visa and MasterCard issued Credit Cards. We also accept prepaid cards issued by Visa and Mastercard, you may need to confirm with the issuer whether there are any restrictions on the card.<br/><br/>

                                    </div>
                                    <div className="infoTextContainer " >Deposits are instant and bet365 apply no charges for using this method.<br/><br/>
                                    </div>
                                    <div className="infoTextContainer ">To transfer funds, click on Deposit and select Credit/Debit Card from the list of available payment methods. Enter your card details, deposit amount and click Make Deposit. Once complete, the amount will be instantly credited to your bet365 account.<br/><br/>

                                    </div>
                                    <div className="infoTextContainer ">The card holders name must match the name registered on your bet365 account.<br/><br/>

                                    </div>
                                    <div className="infoTextContainer ">Card deposits will appear on your bank statement as being paid to b365 or bet365. </div>
                                    <div className="infoTextContainer ">Some deposits may be processed via Mastercard SecureCode or Verified by Visa which are an extra level of protection used when making payments from your card. This may require you to enter a PIN number or password to approve the payment. This service is quick, easy and free to set up.<br/><br/>

                                    </div>
                                </div>
                                :""}
                            <div id="0" className="pp__paymentMethods__accordion__section" onClick={()=>this.toggle('creditCard')}>

                                <div className="pp__paymentMethods__accordion__paymentsTypeTable__paymentCol pp__paymentMethods__accordion__paymentsTypeTable__paymentCol--logo  pp__paymentMethods__accordion__paymentsTypeTable__paymentCol--alignLeft">
                            <span className="pp__paymentMethods__accordion__section__paymentInfoSummary__header">
                                <img className="pp__paymentMethods__accordion__section__head__logo" alt="Debit Card"
                                     src="../../img/CreditCardsv2.png"/>
                                </span>
                                </div>
                                <div className="pp__paymentMethods__accordion__paymentsTypeTable__paymentCol">
                                    <span className="dataTable">Free</span>
                                </div>
                                <div
                                    className="pp__paymentMethods__accordion__paymentsTypeTable__paymentCol pp__paymentMethods__accordion__paymentsTypeTable__paymentCol--time">
                                    <span className="dataTable">Instant</span>
                                </div>
                                <div className="pp__paymentMethods__accordion__paymentsTypeTable__paymentCol">
                                    <span className="dataTable">10</span>
                                </div>
                                <div className="pp__paymentMethods__accordion__paymentsTypeTable__paymentCol">
                                    <span className="dataTable">30000</span>
                                </div>
                                <div
                                    className="pp__paymentMethods__accordion__paymentsTypeTable__paymentCol pp__paymentMethods__accordion__paymentsTypeTable__paymentCol--details pp__paymentMethods__accordion__paymentsTypeTable__paymentCol--alignRight">
                                    <span className="dataTable">Credit Card</span>
                                </div>
                            </div>

                            {this.state.creditCard ?
                                <div className="pp__paymentMethods__accordion__section__body">
                                    <div className="infoTextContainer ">You can make secure online payments instantly using Visa and MasterCard issued Credit Cards. We also accept prepaid cards issued by Visa and Mastercard, you may need to confirm with the issuer whether there are any restrictions on the card.<br/><br/>

                                    </div>
                                    <div className="infoTextContainer " >Deposits are instant and bet365 apply no charges for using this method.<br/><br/>
                                    </div>
                                    <div className="infoTextContainer ">To transfer funds, click on Deposit and select Credit/Debit Card from the list of available payment methods. Enter your card details, deposit amount and click Make Deposit. Once complete, the amount will be instantly credited to your bet365 account.<br/><br/>

                                    </div>
                                    <div className="infoTextContainer ">The card holders name must match the name registered on your bet365 account.<br/><br/>

                                    </div>
                                    <div className="infoTextContainer ">Card deposits will appear on your bank statement as being paid to b365 or bet365. </div>
                                    <div className="infoTextContainer ">Some deposits may be processed via Mastercard SecureCode or Verified by Visa which are an extra level of protection used when making payments from your card. This may require you to enter a PIN number or password to approve the payment. This service is quick, easy and free to set up.<br/><br/>

                                    </div>
                                </div>
                                :""}


                        </div>
                    </div>
                    :""}
            </div>


        )

    }
}

export default PaymentMethods;