import React from 'react';
import {
    getCountry, getTimezone, isEmailUnique, isUsernameUnique, registration,
    validateSecCode
} from "../../helpers/data_account";



class JoinNow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            country: {},
            timezone: "",
            error: false,
            err_username: false,
            err_username_unic: false,
            err_password: false,
            err_conf_password: false,
            err_conf_security_code: false,
            err_security_code: false,
            err_phone2: false,
            err_email: false,
            err_email_unic: false,
            err_birthday: false,
            err_country_code: false,
            err_firstname: false,
            err_lastname: false,
            err_address_unit_number: false,
            err_address_street: false,
            err_address_postcode: false,
            err_address_building_number: false,
            err_radio_block: {},
            modified: false
        }
    }
    componentWillMount() {
      this.fetchData()
    }


    componentWillReceiveProps(nextProps) {

    }

    fetchData() {
        getCountry(function(err, data) {
            if (!err) {
                this.setState({
                    country: data
                })
            }
        }.bind(this));

        getTimezone(function(err, data) {
            if (!err) {
                this.setState({
                    timezone: data
                })
            }
        }.bind(this))
    }

    showAccept=()=>{
        if ($('.accept_notice').hasClass('show'))
            $('.accept_notice').removeClass('show');
        else(
            $('.accept_notice').addClass('show')
        )
    };
    showNotes(name) {
        if ($("."+ name +" .notes_info_text").hasClass('show')) {
            $('.'+ name +' .notes_info_text').removeClass('show');
        } else {
            $("."+ name +" .notes_info_text").addClass('show')
        }


    }

    joinBet = () => {
       var form =  $(".SignUp").serializeArray();
       var form1 =  $(".SignUp").serialize();
       console.log("kkkkkkkkkk", form1);
       let arr = {};
        let dob, day, month, year, code, phone, fullPhone = "";

            form.map((field) => {
           if (field.value == "") {

               if (field.name == "address_building_number" || field.name == "address_unit_number" || field.name == "address_street" || field.name == "address_postcode") {
                   arr['err_'+field.name] = true;
               }

               if (field.name  != 'bonus_code') {
                   arr['err_'+field.name] = true;
               }

           }
           if (field.value == "-1" && (field.name == "day" || field.name == "month" || field.name == "year")) {

               arr['err_birthday'] = true;

           }

               if (field.name == "day") {
                   day = field.value;
               }
                if (field.name == "month") {
                    month = field.value;
                }
                if (field.name == "year") {
                    year = field.value;
                }
                if (field.name == "code") {
                    code = field.value;
                }
                if (field.name == "phone2") {
                    phone = field.value;
                }

           if (Object.keys(this.state.err_radio_block).length < 4) {

              //console.log(field["enable_notification"])

                if (Object.keys(this.state.err_radio_block).length  === 0) {
                    arr['err_radio_block'] = {};
                    arr['modified'] = true;
                    $('.SignUp input[type="radio"]').addClass("error");
                } else {
                    Object.keys(this.state.err_radio_block).map((ind) => {
                        $('.SignUp input[name="'+ ind +'"]').addClass("error");
                    })
                }

           }



       })
        dob = year + "-" + month + "-" + day;
        fullPhone = code + phone;


        form.push({name: 'dob', value: dob})
        form.push({name: 'phone', value: fullPhone})

       // console.log('finish', form)


        this.setState(arr);

       if (Object.keys(arr).length < 1 ) {

           let obj = {};
           form.map((field) =>  {

               obj[field.name] = field.value
           })

           registration(obj, function(err, data) {
                if (!err) {
                    if (typeof data.errors == 'undefined') {
                        this.props.setToken(data.token);
                        this.props.closeModal("join");
                    } else {
                        Object.keys(data.errors).map((name) => {
                            console.log("Error:", name, data.errors[name] )
                        });

                        this.setState({
                            error: true
                        })
                    }

                }
           }.bind(this))
       } else {
            // show error on full desktop
           this.setState({
               error: true
           })
       }


    }
    validation = (value, name) => {

        var leng = value.length;

       if (name == "username") {
           if (leng > 14  || leng < 6 || value.match("^[a-zA-Z0-9]*$") == null){
              // $('.SignUp .'+ name +' .error_message_block').css("display", "block")
               this.setState({
                   err_username: true
               })
           } else {
               // this.setState({
               //     err_username: false
               // })
               isUsernameUnique(value, function (err, data) {
                   if (!err) {
                       console.log("name!!!!!!!!!!!!", data)
                       if (data.success) {
                            this.setState({
                                err_username: false,
                            })
                       } else {
                         this.setState({
                               err_username: true
                          })

                       }

                   }
               }.bind(this))


           }
       }
        if (name == "firstname") {
            if (value.match("^[a-zA-Z0-9]*$") == null) {
                this.setState({
                    err_firstname: true
                })
            } else {
                this.setState({
                    err_firstname: false
                })
            }
        }
        if (name == "lastname") {
            if (value.match("^[a-zA-Z0-9]*$") == null) {
                this.setState({
                    err_lastname: true
                })
            } else {
                this.setState({
                    err_lastname: false
                })
            }
        }
        if (name == "password") {
            if (leng > 32  || leng < 5) {
                this.setState({
                    err_password: true
                })
            } else {
                this.setState({
                    err_password: false
                })
            }
        }
        if (name == "conf_password") {
            if (leng > 32  || leng < 5) {

                this.setState({
                    err_conf_password: true
                })
            } else {
                let password = $('.SignUp input[name="password"]').val();
                if (password != value) {
                    this.setState({
                        err_conf_password: true
                    })
                } else {
                    this.setState({
                        err_conf_password: false
                    })
                }

            }
        }

        if (name == "phone2") {
            function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); }
            if (isNumber(value)) {
               this.setState({
                   err_phone2: false
               })
           } else {
                this.setState({
                    err_phone2: true
                })
           }
        }

        if (name == "email") {
           if (leng > 3) {
               isEmailUnique(value, function(err, data) {
                   console.log("валидация", data)
                   if (!err) {
                       console.log(data);
                       if (data.success) {
                           this.setState({
                               err_email: false,
                               err_email_unic: false
                           })
                       } else {
                           if (typeof data.error != "undefined") {
                               this.setState({
                                   err_email_unic: false,
                                   err_email: true
                               })
                           } else {
                               this.setState({
                                   err_email_unic: true,
                                   err_email: false
                               })
                           }

                       }
                   } else {
                       console.log("ошибка сервера", err)
                   }
               }.bind(this))
           }
        }

        if (name == "security_code") {

            if (leng < 4) {
                this.setState({
                    err_security_code: true
                })
            } else {
                    validateSecCode(value, function(err, data) {
                        if (!err) {
                        console.log('dddddd', data)
                            if (data.success) {
                                this.setState({
                                    err_security_code: false
                                })
                            } else {
                                    this.setState({
                                        err_security_code: true
                                    })
                            }
                        }
                }.bind(this))
            }
        }

        if (name == "conf_security_code") {
           let security_code = $('.SignUp input[name="security_code"]').val();
           if (leng == 4 && security_code != value) {
               this.setState({
                   err_conf_security_code: true
               })
           } else {
               this.setState({
                   err_conf_security_code: false
               })
           }
        }
    }
    selectRadio = (value, name) => {
        let err_radio_block = this.state.err_radio_block;
        err_radio_block[name] = value;

        this.setState({
            modified: true,
            err_radio_block: err_radio_block
        })
    }

    acceptError = () => {
        this.setState({
            error: false
        })
    }

    render() {
        console.log("jjjjjjjjjjjjjjjjjjjjjj", this.state)
        return(
            <div id="join_now" className="modal_bet new_window" role="dialog">
                <div className="modal_content">
                    <div className="modal_header">
                        <button type="button" className="close" onClick={() => this.props.closeModal('join')}></button>
                        <div className="modal_logo"></div>
                        <h2>Open Account</h2>
                    </div>
                    <div className="modal-body">
                        <div className="GetHelp">
                            <h3 className="GetHelp_Text">Get Help with this form —
                                <a href="javascript:void(0)" className="GetHelp_Link">Contact Us</a>
                            </h3>
                            <div className="GetHelp_Info"></div>
                        </div>

                        <form action="post" className="SignUp">
{/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
                            <fieldset data-section="resident_country" className="section_resident_country">
                                <legend>Country of Residence</legend>
                                <div className="fieldset_Bordered country">
                                    <div className="DropDown">
                                        <span className="caret"></span>
                                        <div className="under_bg"></div>
                                    <select name="country_code" id="country">
                                        {Object.keys(this.state.country).map((id, index) => {
                                            return <option key={`${index}-country`} value={id}>{this.state.country[id]}</option>
                                        })}
                                    </select>
                                        <div className="green_border"></div>
                                    </div>
                                    <div className={`error_message_block ${this.state.err_country_code ? "show" : ""}`}>
                                        <span className="error_message_text">Please enter valid characters only.</span>
                                    </div>
                                </div>
                            </fieldset>
{/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}

                            <fieldset data-section="personal_info" className="section_personal_info">
                                <legend>Personal Information </legend>
                                <p className="add_info">Please enter accurate information. Your identity must be verified to allow continued use of your account.</p>
                                <div className="fieldset_Bordered margin_b title">
                                    <div className="DropDown">
                                        <span className="caret"></span>
                                        <div className="under_bg"></div>

                                        <select name="title" id="title">
                                            <option value="Mr">Mr</option>
                                            <option value="Mrs">Mrs</option>
                                            <option value="Ms">Ms</option>
                                            <option value="Miss">Miss</option>
                                        </select>
                                        <span className="input_title">Title</span>
                                        <div className="green_border"></div>
                                    </div>
                                    <div className="error_message_block">
                                        <span className="error_message_text">Please enter valid characters only.</span>
                                    </div>
                                </div>

                                <div className="fieldset_Bordered firstname">
                                    <div className="DropDown">
                                        <div className="under_bg"></div>

                                        <input type="text" name="firstname" onBlur={(e) => this.validation(e.target.value, e.target.name)}/>
                                        <span className="input_title">First name</span>
                                        <div className="green_border"></div>
                                    </div>
                                    <div className={`error_message_block ${this.state.err_firstname ? "show" : ""}`}>
                                        <span className="error_message_text">Please enter your first name.</span>
                                    </div>
                                </div>

                                <div className="fieldset_Bordered margin_b lastname">
                                    <div className="DropDown">
                                        <div className="under_bg"></div>

                                        <input type="text" name="lastname" onBlur={(e) => this.validation(e.target.value, e.target.name)}/>
                                        <span className="input_title">Surname</span>
                                        <div className="green_border"></div>
                                    </div>
                                    <div className={`error_message_block ${this.state.err_lastname ? "show" : ""}`}>
                                        <span className="error_message_text">Please enter your surname.</span>
                                    </div>
                                </div>


                                <div className="fieldset_Bordered flexed ">
                                    <div className="flexed">
                                        <div className="DropDown">
                                            <span className="caret"></span>
                                            <div className="under_bg"></div>

                                            <select name="day" id="DateOfBirthDay">
                                                <option selected="selected" value="-1">Day</option>
                                                <option value="01">1</option>
                                                <option value="02">2</option>
                                                <option value="03">3</option>
                                                <option value="04">4</option>
                                                <option value="05">5</option>
                                                <option value="06">6</option>
                                                <option value="07">7</option>
                                                <option value="08">8</option>
                                                <option value="09">9</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                                <option value="13">13</option>
                                                <option value="14">14</option>
                                                <option value="15">15</option>
                                                <option value="16">16</option>
                                                <option value="17">17</option>
                                                <option value="18">18</option>
                                                <option value="19">19</option>
                                                <option value="20">20</option>
                                                <option value="21">21</option>
                                                <option value="22">22</option>
                                                <option value="23">23</option>
                                                <option value="24">24</option>
                                                <option value="25">25</option>
                                                <option value="26">26</option>
                                                <option value="27">27</option>
                                                <option value="28">28</option>
                                                <option value="29">29</option>
                                                <option value="30">30</option>
                                                <option value="31">31</option>
                                            </select>
                                            <div className="green_border"></div>
                                        </div>
                                        <div className="DropDown">
                                            <span className="caret"></span>
                                            <div className="under_bg"></div>
                                            <select name="month" id="MonthOfBirthDay">
                                                <option selected="selected" value="-1">Month</option>
                                                <option value="01">January</option>
                                                <option value="02">February</option>
                                                <option value="03">March</option>
                                                <option value="04">April</option>
                                                <option value="05">May</option>
                                                <option value="06">June</option>
                                                <option value="07">July</option>
                                                <option value="08">August</option>
                                                <option value="09">September</option>
                                                <option value="10">October</option>
                                                <option value="11">November</option>
                                                <option value="12">December</option>
                                            </select>
                                            <div className="green_border"></div>
                                        </div>
                                        <div className="DropDown">
                                            <span className="caret"></span>
                                            <div className="under_bg"></div>
                                            <select name="year" id="YearOfBirthDay">
                                                <option selected="selected" value="-1">Year</option>
                                                <option value="2000">2000</option>
                                                <option value="1999">1999</option>
                                                <option value="1998">1998</option>
                                                <option value="1997">1997</option>
                                                <option value="1996">1996</option>
                                                <option value="1995">1995</option>
                                                <option value="1994">1994</option>
                                                <option value="1993">1993</option>
                                                <option value="1992">1992</option>
                                                <option value="1991">1991</option>
                                                <option value="1990">1990</option>
                                                <option value="1989">1989</option>
                                                <option value="1988">1988</option>
                                                <option value="1987">1987</option>
                                                <option value="1986">1986</option>
                                                <option value="1985">1985</option>
                                                <option value="1984">1984</option>
                                                <option value="1983">1983</option>
                                                <option value="1982">1982</option>
                                                <option value="1981">1981</option>
                                                <option value="1980">1980</option>
                                                <option value="1979">1979</option>
                                                <option value="1978">1978</option>
                                                <option value="1977">1977</option>
                                                <option value="1976">1976</option>
                                                <option value="1975">1975</option>
                                                <option value="1974">1974</option>
                                                <option value="1973">1973</option>
                                                <option value="1972">1972</option>
                                                <option value="1971">1971</option>
                                                <option value="1970">1970</option>
                                                <option value="1969">1969</option>
                                                <option value="1968">1968</option>
                                                <option value="1967">1967</option>
                                                <option value="1966">1966</option>
                                                <option value="1965">1965</option>
                                                <option value="1964">1964</option>
                                                <option value="1963">1963</option>
                                                <option value="1962">1962</option>
                                                <option value="1961">1961</option>
                                                <option value="1960">1960</option>
                                                <option value="1959">1959</option>
                                                <option value="1958">1958</option>
                                                <option value="1957">1957</option>
                                                <option value="1956">1956</option>
                                                <option value="1955">1955</option>
                                                <option value="1954">1954</option>
                                                <option value="1953">1953</option>
                                                <option value="1952">1952</option>
                                                <option value="1951">1951</option>
                                                <option value="1950">1950</option>
                                                <option value="1949">1949</option>
                                                <option value="1948">1948</option>
                                                <option value="1947">1947</option>
                                                <option value="1946">1946</option>
                                                <option value="1945">1945</option>
                                                <option value="1944">1944</option>
                                                <option value="1943">1943</option>
                                                <option value="1942">1942</option>
                                                <option value="1941">1941</option>
                                                <option value="1940">1940</option>
                                                <option value="1939">1939</option>
                                                <option value="1938">1938</option>
                                                <option value="1937">1937</option>
                                                <option value="1936">1936</option>
                                                <option value="1935">1935</option>
                                                <option value="1934">1934</option>
                                                <option value="1933">1933</option>
                                                <option value="1932">1932</option>
                                                <option value="1931">1931</option>
                                                <option value="1930">1930</option>
                                                <option value="1929">1929</option>
                                                <option value="1928">1928</option>
                                                <option value="1927">1927</option>
                                                <option value="1926">1926</option>
                                                <option value="1925">1925</option>
                                                <option value="1924">1924</option>
                                                <option value="1923">1923</option>
                                                <option value="1922">1922</option>
                                                <option value="1921">1921</option>
                                                <option value="1920">1920</option>
                                                <option value="1919">1919</option>
                                                <option value="1918">1918</option>
                                                <option value="1917">1917</option>
                                                <option value="1916">1916</option>
                                                <option value="1915">1915</option>
                                                <option value="1914">1914</option>
                                                <option value="1913">1913</option>
                                                <option value="1912">1912</option>
                                                <option value="1911">1911</option>
                                                <option value="1910">1910</option>
                                                <option value="1909">1909</option>
                                                <option value="1908">1908</option>
                                                <option value="1907">1907</option>
                                                <option value="1906">1906</option>
                                                <option value="1905">1905</option>
                                                <option value="1904">1904</option>
                                                <option value="1903">1903</option>
                                                <option value="1902">1902</option>
                                                <option value="1901">1901</option>
                                                <option value="1900">1900</option>
                                            </select>
                                            <div className="green_border"></div>
                                        </div>
                                    </div>
                                    <div className={`error_message_block ${this.state.err_birthday ? "show" : ""}`}>
                                        <span className="error_message_text">Please enter a valid date of birth.</span>
                                    </div>
                                </div>
                            </fieldset>
{/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
                            <fieldset data-section="contact_info" className="section_contact_info">
                                <legend>Contact Information</legend>
                                <div className="fieldset_Bordered email">
                                    <div className="DropDown">
                                        <div className="notes_info" onClick={()=>this.showNotes("email")}></div>
                                        <div className="under_bg"></div>
                                        <input type="mail" name="email" onBlur={(e) => this.validation(e.target.value, e.target.name)}/>
                                        <span className="input_title">Email Address</span>
                                        <div className="green_border"></div>
                                    </div>

                                    <div className={`error_message_block ${this.state.err_email ? "show" : ""}`}>
                                        <span className="error_message_text">Please enter a valid email address.</span>
                                    </div>
                                    <div className={`error_message_block ${this.state.err_email_unic ? "show" : ""}`}>
                                        <span className="error_message_text">Email taken.</span>
                                    </div>
                                    <div className="notes_info_text notes_email">
                                        <span>Your email address will be used to notify you about important account information.</span>
                                    </div>
                                </div>
                                <div className="fieldset_Bordered phone">
                                    <div className="flexed">
                                        <div className="DropDown shot_tel">
                                            <div className="under_bg"></div>
                                            <input type="tel" value="+380" maxLength="5" name="code" />
                                            <span className="input_title">Contact Number</span>
                                            <div className="green_border"></div>
                                        </div>
                                        <div className="DropDown">
                                            <div className="notes_info" onClick={()=>this.showNotes('phone')}></div>
                                            <div className="under_bg"></div>
                                            <input type="tel"  name="phone2" onBlur={(e) => this.validation(e.target.value, e.target.name)}/>
                                            <div className="green_border"></div>
                                        </div>
                                    </div>
                                    <div className={`error_message_block ${this.state.err_phone2 ? "show" : ""}`}>
                                        <span className="error_message_text">Please enter a valid contact number.</span>
                                    </div>
                                    <div className="notes_info_text">
                                        <span>Your contact number is needed in case we nrrd to speak to you about your account.</span>
                                    </div>
                                </div>

                                <div className="fieldset_Bordered no_border">
                                    <div className="radioBtn_block">
                                        <p className="radioBtn_block_info">Choose how you receive your offers.</p>
                                        <div className="radio_item">
                                           <div className="radio_label">Notification</div>
                                            <div className="radio_block">
                                                <label>
                                                <input type="radio" name="enable_notification" value="1" className="radio" onClick={(e) => this.selectRadio(e.target.value, e.target.name)}/>
                                                    <span className="radio-custom"></span>
                                                    <span className="radio_label">Yes</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name="enable_notification" value="0" className="radio" onClick={(e) => this.selectRadio(e.target.value, e.target.name)}/>
                                                    <span className="radio-custom"></span>
                                                    <span className="radio_label">No</span>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="radio_item">
                                            <div className="radio_label">Text message</div>
                                            <div className="radio_block">
                                                <label>
                                                    <input type="radio" name="enable_sms" value="1" className="radio" onClick={(e) => this.selectRadio(e.target.value, e.target.name)}/>
                                                    <span className="radio-custom"></span>
                                                    <span className="radio_label">Yes</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name="enable_sms" value="0" className="radio" onClick={(e) => this.selectRadio(e.target.value, e.target.name)}/>
                                                    <span className="radio-custom"></span>
                                                    <span className="radio_label">No</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="radio_item">
                                            <div className="radio_label">Email</div>
                                            <div className="radio_block">
                                                <label>
                                                    <input type="radio" name="enable_email" value="1" className="radio" onClick={(e) => this.selectRadio(e.target.value, e.target.name)}/>
                                                    <span className="radio-custom"></span>
                                                    <span className="radio_label">Yes</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name="enable_email" value="0" className="radio" onClick={(e) => this.selectRadio(e.target.value, e.target.name)}/>
                                                    <span className="radio-custom"></span>
                                                    <span className="radio_label">No</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="radio_item">
                                            <div className="radio_label">Message in bet365</div>
                                            <div className="radio_block">
                                                <label>
                                                    <input type="radio" name="enable_internal_message" value="1" className="radio" onClick={(e) => this.selectRadio(e.target.value, e.target.name)}/>
                                                    <span className="radio-custom"></span>
                                                    <span className="radio_label">Yes</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name="enable_internal_message" value="0" className="radio" onClick={(e) => this.selectRadio(e.target.value, e.target.name)}/>
                                                    <span className="radio-custom"></span>
                                                    <span className="radio_label">No</span>
                                                </label>
                                            </div>
                                        </div>

                                    </div>
                                    <div className={`error_message_block ${ this.state.modified && Object.keys(this.state.err_radio_block).length < 4 ? "show" : ""}`}>
                                        <span className="error_message_text">Please choose an option for all contact fields</span>
                                    </div>
                                </div>
                            </fieldset>
{/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}

                            <fieldset data-section="adress" className="section_adress">
                                <legend>Adress</legend>
                                <div className="fieldset_Bordered address_building_number">
                                    <div className="DropDown">
                                        <div className="under_bg"></div>
                                        <input type="text" name="address_building_number"/>
                                        <span className="input_title">House Number</span>
                                        <div className="green_border"></div>
                                    </div>
                                    <div className={`error_message_block ${this.state.err_address_building_number ? "show" : ""}`}>
                                        <span className="error_message_text">Please enter your house number.</span>
                                    </div>
                                </div>
                                <div className="fieldset_Bordered address_unit_number">
                                    <div className="DropDown">
                                        <div className="optional">Optional</div>
                                        <div className="under_bg"></div>
                                        <input type="text" name="address_unit_number"/>
                                        <span className="input_title">Unit/Apt. Number</span>
                                        <div className="green_border"></div>
                                    </div>
                                    <div className={`error_message_block ${this.state.err_address_unit_number ? "show" : ""}`}>
                                        <span className="error_message_text">Please enter valid characters only.</span>
                                    </div>
                                </div>
                                <div className="fieldset_Bordered address_street">
                                    <div className="DropDown">
                                        <div className="under_bg"></div>
                                        <input type="text" name="address_street"/>
                                        <span className="input_title">Street</span>
                                        <div className="green_border"></div>
                                    </div>
                                    <div className={`error_message_block ${this.state.err_address_street ? "show" : ""}`}>
                                        <span className="error_message_text">Please enter the street where you live.</span>
                                    </div>
                                </div>

                                <div className="fieldset_Bordered address_postcode">
                                    <div className="DropDown">
                                        <div className="under_bg"></div>
                                        <input type="text" name="address_postcode"/>
                                        <span className="input_title">Postcode</span>
                                        <div className="green_border"></div>
                                    </div>
                                    <div className={`error_message_block ${this.state.err_address_postcode ? "show" : ""}`}>
                                        <span className="error_message_text">Please enter your postcode.</span>
                                    </div>
                                </div>
                                <span className="error_message_text address_find" style={{textAlign: "center", color: "#D50000", display: "none"}}>Please select to find your address.</span>

                                <div className="fieldset_Bordered no_border">
                                <button type="button" id="CurrentFindAddress" className="modal_btn" >Find Address</button>
                                </div>
                            </fieldset>
{/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
                            <fieldset data-section="create_login" className="section_create_login">
                                <legend>Create Login</legend>
                                <div className="fieldset_Bordered margin_b username">
                                    <div className="DropDown">
                                        <div className="optional">6-14 Characters</div>
                                        <div className="notes_info" onClick={()=>this.showNotes("username")}></div>
                                        <div className="under_bg"></div>
                                        <input type="text" name="username" onBlur={(e) => this.validation(e.target.value, e.target.name)}/>
                                        <span className="input_title">Username</span>
                                        <div className="green_border"></div>
                                    </div>

                                    <div className={`error_message_block ${this.state.err_username ? "show" : ""}`}>
                                        <span className="error_message_text">Please enter a valid username.</span>
                                    </div>

                                    {/*<div className={`error_message_block ${this.state.err_username_unic ? "show" : ""}`}>*/}
                                        {/*<span className="error_message_text">Username taken.</span>*/}
                                    {/*</div>*/}

                                    <div className="notes_info_text">
                                        <span>Can contain letters, numbers and underscores only, with no accents or spaces.</span>
                                    </div>

                                </div>
                                <div className="fieldset_Bordered password">
                                    <div className="DropDown">
                                        <div className="optional">6-32 Characters</div>
                                        <div className="notes_info" onClick={()=>this.showNotes("password")}></div>
                                        <div className="under_bg"></div>
                                        <input type="text" name="password" onBlur={(e) => this.validation(e.target.value, e.target.name)}/>
                                        <span className="input_title">Password</span>
                                        <div className="green_border"></div>
                                    </div>
                                    <div className={`error_message_block ${this.state.err_password ? "show" : ""}`}>
                                        <span className="error_message_text">Please enter a valid password.</span>
                                    </div>
                                    <div className="notes_info_text">
                                    <div className="symbols">
                                        Cannot contain username, name, email address or year of birth.
                                        <br/>
                                        Strengthen your password by using a mixture of:
                                        <br/>
                                        Numbers
                                        <br/>
                                        Uppercase letters
                                        <br/>
                                        Lowercase letters
                                        <br/>
                                        {` /!/"/#/$/%/&/'/(/)/*/+/,/-/.///:/;/</=/>/?/_/@/[/\ /]/^/{ / | /}~ `}
                                    </div>
                                    </div>
                                </div>
                                <div className="fieldset_Bordered confirm_password">
                                    <div className="DropDown">
                                        <div className="under_bg"></div>
                                        <input type="text" name="conf_password" onBlur={(e) => this.validation(e.target.value, e.target.name)}/>
                                        <span className="input_title">Confirm Password</span>
                                        <div className="green_border"></div>
                                    </div>
                                    <div className={`error_message_block ${this.state.err_conf_password ? "show" : ""}`}>
                                        <span className="error_message_text">Please enter a valid password.</span>
                                    </div>
                                </div>
                            </fieldset>
{/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
                            <fieldset data-section="security" className="section_security">
                                <legend>Security</legend>
                                <p className="add_info">You will need to quote your four-digit security number when you contact us.</p>
                                <div className="fieldset_Bordered security_code">
                                    <div className="DropDown">
                                        <div className="notes_info" onClick={()=>this.showNotes("security_code")}></div>
                                        <div className="under_bg"></div>
                                        <input type="text" name="security_code" maxLength="4"  onBlur={(e) => this.validation(e.target.value, e.target.name)}/>
                                        <span className="input_title">Four-Digit Security Number</span>
                                        <div className="green_border"></div>
                                    </div>
                                    <div className={`error_message_block ${this.state.err_security_code ? "show" : ""}`}>
                                        <span className="error_message_text">Please enter a valid four-digit security number.</span>
                                    </div>
                                    <div className="notes_info_text">
                                        <span>Cannot contain common sequences e.g. 1234, 0000.</span>
                                    </div>

                                </div>
                                <div className="fieldset_Bordered conf_security_code">
                                    <div className="DropDown">
                                        <div className="under_bg"></div>
                                        <input type="text" name="conf_security_code" maxLength="4"  onBlur={(e) => this.validation(e.target.value, e.target.name)}/>
                                        <span className="input_title">Confirm Four-Digit Security Number</span>
                                        <div className="green_border"></div>
                                    </div>
                                    <div className={`error_message_block ${this.state.err_conf_security_code ? "show" : ""}`}>
                                        <span className="error_message_text">Please enter a matching four-digit security number.</span>
                                    </div>
                                </div>

                            </fieldset>
{/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
                            <fieldset data-section="preferences" className="section_preferences">
                                <legend>Preferences</legend>

                                <div className="fieldset_Bordered margin_b timezone">
                                    <div className="DropDown">
                                        <div className="caret"></div>
                                        <div className="under_bg"></div>
                                        <select name="timezone" id="TimeZone">
                                            {Object.keys(this.state.timezone).map((id, index) => {
                                                return <option key={`${index}-time`} value={id}>{this.state.timezone[id]}</option>
                                            })}
                                        </select>
                                        <span className="input_title">Time Zone</span>
                                        <div className="green_border"></div>
                                    </div>
                                </div>
                                <div className="fieldset_Bordered margin_b odds_format">
                                    <div className="DropDown">
                                        <div className="caret"></div>
                                        <div className="under_bg"></div>
                                        <select name="odds_format" id="OddsDisplay">
                                            <option selected="selected" value="decimal">Decimal</option>
                                            <option value="fraction">Fractional</option>
                                            <option value="american">American</option>
                                        </select>
                                        <span className="input_title">Odds Display</span>
                                        <div className="green_border"></div>
                                    </div>
                                </div>
                                <div className="fieldset_Bordered bonus_code">
                                    <div className="DropDown">
                                        <div className="optional">Optional</div>
                                        <div className="under_bg"></div>
                                        <input type="text" name="bonus_code"/>
                                        <span className="input_title">Bonus Code</span>
                                        <div className="green_border"></div>
                                    </div>

                                </div>
                                <div className="fieldset_Bordered no_border">
                                    <div className="acceptance">
                                        <div className="checkcomponent">
                                            <label>
                                                <input type="checkbox" name="accept_check" className="checkbox_accept" onClick={()=>this.showAccept()}/>
                                                <span className="checkbox_custom_accept"></span>
                                            </label>
                                        </div>
                                        <div className="accept_text">
                                            I am at least 18 years of age and I have read, accept and agree to the
                                            <a href="#">Terms and Conditions</a>,
                                            <a href="#">Rules</a>,
                                            <a href="#">Privacy Policy</a>
                                            <a href="#">Cookies Policy</a>  and policies relating to
                                            <a href="#">age verification</a> and
                                            <a href="#">KYC (Know Your Customer)</a>.
                                        </div>
                                    </div>
                                    <div className="accept_notice show">Please tick to confirm you have read and understood bet365's policies relating to age verification, terms, conditions, rules and privacy statement.</div>
                                    <button type="button" id="JoinBet" className={`modal_btn ${this.state.error ? "join_btn_error" : ""}`} onClick={() => this.joinBet()}>Join bet365</button>

                                </div>

                            </fieldset>
{/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
                        </form>
                    </div>
                </div>
                <div className={`Modal_wrapp inner ${this.state.error ? "active" : ""}`}>

                    <div className="lightBox">
                        <div className="lightBox_header">Please complete or correct all required fields.</div>
                        <div className="lightBox_btn" onClick={() => this.acceptError()}>OK</div>
                    </div>
                </div>
            </div>
        )

    }
}

export default JoinNow;
