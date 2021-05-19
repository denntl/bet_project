import React from 'react';




class HelperContacts extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            navMenu: this.props.navMenu
        }
    }
    render() {
        return(
            <div className="contact_page_wrapp">
                <div className="pageHeading">Contact Us</div>
                <div className="contact_page padLR">
                   <div className="countrySelectWrapper">
                       <span className="countrySelectIcon"/>
                       <select name="country" id="select_country" className="select_country">
                           <option value="2">Afghanistan</option>
                           <option value="3">Albania</option>
                           <option value="4">Algeria</option>
                           <option value="5">American Samoa</option>
                           <option value="6">Andorra</option>
                           <option value="8">Angola</option>
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
                           <option value="22">Belgium</option>
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
                           <option value="33">Burundi</option>
                           <option value="34">Cambodia</option>
                           <option value="35">Cameroon</option>
                           <option value="36">Canada</option>
                           <option value="37">Cape Verde Islands</option>
                           <option value="38">Cayman Islands</option>
                           <option value="39">Central African Republic</option>
                           <option value="40">Chad</option>
                           <option value="41">Chile</option>
                           <option value="42">China</option>
                           <option value="420">China (North)</option>
                           <option value="421">China (South)</option>
                           <option value="44">Colombia</option>
                           <option value="45">Congo</option>
                           <option value="46">Cook Islands</option>
                           <option value="47">Costa Rica</option>
                           <option value="48">Cote D'Ivoire</option>
                           <option value="50">Croatia</option>
                           <option value="49">Cuba</option>
                           <option value="52">Czech Republic</option>
                           <option value="53">Democratic Rep. Of Congo</option>
                           <option value="55">Djibouti</option>
                           <option value="56">Dominica</option>
                           <option value="57">Dominican Republic</option>
                           <option value="58">Ecuador</option>
                           <option value="59">Egypt</option>
                           <option value="60">El Salvador</option>
                           <option value="62">Equatorial Guinea</option>
                           <option value="63">Eritrea</option>
                           <option value="65">Ethiopia</option>
                           <option value="66">Faroe Islands</option>
                           <option value="67">Fiji</option>
                           <option value="68">Finland</option>
                           <option value="70">France</option>
                           <option value="69">French Guyana</option>
                           <option value="183">French Polynesia</option>
                           <option value="72">Gabon</option>
                           <option value="73">Gambia</option>
                           <option value="74">Georgia</option>
                           <option value="75">Germany</option>
                           <option value="76">Ghana</option>
                           <option value="77">Gibraltar</option>
                           <option value="79">Grenada</option>
                           <option value="81">Guadeloupe</option>
                           <option value="80">Guam</option>
                           <option value="82">Guatemala</option>
                           <option value="83">Guinea</option>
                           <option value="84">Guinea-Bissau</option>
                           <option value="85">Guyana</option>
                           <option value="86">Haiti</option>
                           <option value="87">Honduras</option>
                           <option value="88">Hong Kong</option>
                           <option value="89">Hungary</option>
                           <option value="90">Iceland</option>
                           <option value="91">India</option>
                           <option value="92">Indonesia</option>
                           <option value="94">Iran</option>
                           <option value="93">Iraq</option>
                           <option value="95">Ireland</option>
                           <option value="96">Israel</option>
                           <option value="98">Jamaica</option>
                           <option value="99">Japan</option>
                           <option value="100">Jordan</option>
                           <option value="101">Kazakhstan</option>
                           <option value="102">Kenya</option>
                           <option value="103">Korea (North)</option>
                           <option value="104">Korea (South)</option>
                           <option value="105">Kuwait</option>
                           <option value="106">Kyrgyzstan</option>
                           <option value="107">Laos</option>
                           <option value="108">Latvia</option>
                           <option value="109">Lebanon</option>
                           <option value="110">Lesotho</option>
                           <option value="111">Liberia</option>
                           <option value="112">Libya</option>
                           <option value="113">Liechtenstein</option>
                           <option value="114">Lithuania</option>
                           <option value="115">Luxembourg</option>
                           <option value="116">Macau</option>
                           <option value="214">Macedonia</option>
                           <option value="117">Madagascar</option>
                           <option value="118">Malawi</option>
                           <option value="121">Malaysia</option>
                           <option value="122">Maldives</option>
                           <option value="119">Mali</option>
                           <option value="120">Malta</option>
                           <option value="123">Martinique</option>
                           <option value="124">Mauritania</option>
                           <option value="125">Mauritius</option>
                           <option value="126">Mexico</option>
                           <option value="127">Moldova</option>
                           <option value="128">Mongolia</option>
                           <option value="225">Montenegro</option>
                           <option value="129">Montserrat</option>
                           <option value="130">Morocco</option>
                           <option value="131">Mozambique</option>
                           <option value="132">Myanmar</option>
                           <option value="133">Namibia</option>
                           <option value="134">Nepal</option>
                           <option value="135">Netherlands</option>
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
                           <option value="151">Philippines</option>
                           <option value="152">Poland</option>
                           <option value="153">Portugal</option>
                           <option value="154">Puerto Rico</option>
                           <option value="155">Qatar</option>
                           <option value="156">Romania</option>
                           <option value="158">Russia</option>
                           <option value="157">Rwanda</option>
                           <option value="159">San Marino</option>
                           <option value="160">Sao Tome E Principe</option>
                           <option value="161">Saudi Arabia</option>
                           <option value="163">Senegal</option>
                           <option value="240">Serbia</option>
                           <option value="164">Seychelles</option>
                           <option value="165">Sierra Leone</option>
                           <option value="166">Singapore</option>
                           <option value="172">Slovakia</option>
                           <option value="167">Slovenia</option>
                           <option value="168">Solomon Islands</option>
                           <option value="170">Somalia</option>
                           <option value="169">South Africa</option>
                           <option value="176">Sri Lanka</option>
                           <option value="177">St. Kitts and Nevis</option>
                           <option value="178">St. Lucia</option>
                           <option value="175">Sudan</option>
                           <option value="180">Surinam</option>
                           <option value="173">Swaziland</option>
                           <option value="181">Sweden</option>
                           <option value="174">Switzerland</option>
                           <option value="182">Syria</option>
                           <option value="212">Taiwan</option>
                           <option value="184">Tajikistan</option>
                           <option value="185">Tanzania</option>
                           <option value="186">Thailand</option>
                           <option value="187">Togo</option>
                           <option value="188">Tonga</option>
                           <option value="193">Trinidad and Tobago</option>
                           <option value="189">Tunisia</option>
                           <option value="190">Turkey</option>
                           <option value="191">Turkmenistan</option>
                           <option value="192">Turks and Caicos Islands</option>
                           <option value="194">Uganda</option>
                           <option value="197">UK</option>
                           <option selected="" value="195">Ukraine</option>
                           <option value="196">United Arab Emirates</option>
                           <option value="199">Uruguay</option>
                           <option value="200">US Virgin Islands</option>
                           <option value="198">USA</option>
                           <option value="201">Uzbekistan</option>
                           <option value="202">Vanuatu</option>
                           <option value="203">Venezuela</option>
                           <option value="204">Vietnam</option>
                           <option value="179">Vincent and The Grenadines</option>
                           <option value="206">Western Samoa</option>
                           <option value="208">Yemen</option>
                           <option value="207">Zambia</option>
                           <option value="210">Zimbabwe</option>
                       </select>
                   </div>
                    <div className="contact_variants">
                        <div className="contact_block">
                            <div className="contact_title">Live Chat</div>
                            <div className="contact_text">Chat with an Advisor to resolve a query</div>
                            <div className="contact_text"> 24 hours a day, 7 days a week</div>
                            <div className="contact_variant_btn">Open Chat</div>
                        </div>

                        <div className="contact_block">
                            <div className="contact_title">Email</div>
                            <div className="contact_text">Send an email from your private account</div>
                            <div className="contact_variant_btn">Send Email</div>
                        </div>

                        <div className="contact_block">
                            <div className="contact_title">Web Message</div>
                            <div className="contact_text">Send a message from your account inbox</div>
                            <div className="contact_variant_btn">Send Web Message</div>
                        </div>
                        <div className="contact_block">
                            <div className="contact_title">Call Us</div>
                            <div className="contact_text">Speak to one of our team</div>
                            <div className="contact_text">24 hours a day, 7 days a week</div>
                            <a href="tel:+441782684757" data-rel="external">+44 1782 684757</a>
                        </div>
                        <div className="contact_block">
                            <div className="contact_title">Post</div>
                            <div className="contact_text">Customer Services</div>
                            <div className="contact_text">bet365 House</div>
                            <div className="contact_text">Media Way</div>
                            <div className="contact_text">Stoke-on-Trent</div>
                            <div className="contact_text">Staffordshire</div>
                            <div className="contact_text">ST1 5SZ</div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default HelperContacts;