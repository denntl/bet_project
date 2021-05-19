import React from 'react';
import PopUpInfo from "../pop-up/pop_up_information";
import PopUpEntriesError from "../pop-up/pop_up_entries_error";
import PopUpUpdate from "../pop-up/pop_up_update";
import ValidateMessageHelper from "../validateMessageHelper";
import {
    updatePreferencesGeneral, updateAddress, updateContactDetails,
    updatePassword, updateSecurCode, updatePreferencesNotifications
} from "../../../helpers/data_account";
import PopUpWait from "../pop-up/pop_up_wait";



class MyAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            loginToken: this.props.loginToken,
            detailsTab:"personal",
            submenu:"my_details",
            myAccRespTab:"DepositLimits",
            responsTimeOutTab: "Create_Time_Out",
            changeDefaultContacts:false,
            changeDefaultAdress:false,
            pop_up_info: false,
            requestPVC:false,
            depositLimits:false,
            profile: this.props.profile,
            pop_up_error:false,
            pop_up_update: false,
            errorResidentialAddress: false,
            countries: this.props.country,
            languages: this.props.languages,
            timezones: this.props.timezones,
            focus: {
                password: false,
                new_password: false,
                new_conf_password: false,
                security_conf_code_new: false,
                security_code_new: false,
                security_code: false
            },
            error_password: false,
            error_new_password: false,
            error_security_code: false,
            error_security_code_new: false,
            error_security_conf_code_new: false,
            error_new_conf_password: false,
            error_address_building_number: false,
            error_address_unit_number: false,
            error_address_street: false,
            error_address_postcode: false,
            error_city: false,
            undefinedServerError: false,
            error_email: false,
            error_phone: false,
            error_nickname:false,
            activeSubmitButton: false,
            valuePassword: '',
            valueEmail: this.props.profile.email,
            valueTextMessage:  this.props.profile.phone,
            errorPasswordIcon:false,
            errorPassword: false,
            errorEmailIcon: false,
            errorEmail: false,
            errorTextMessageIcon: false,
            errorTextMessage: false,
            clickedField: ''
        }
    }

    handleUserInput=(e)=>{
        let profile = this.state.profile;
        switch (e.target.name) {
            case 'email':
                profile['email'] = e.target.value;
                this.setState({valueEmail: e.target.value, profile: profile});
                break;
            case 'password':
                profile['password'] = e.target.value;
                this.setState({
                    valuePassword: e.target.value,
                    activeSubmitButton: this.validatePassword(e.target.value),
                    profile: profile
                });
                break;
            case 'text-message':
                profile['phone'] = e.target.value;
                this.setState({valueTextMessage: e.target.value, profile: profile});
                break;
        }
    }

    validateEmail=(email)=> {
        return /\S+@\S+\.\S+/.test(email);
    }

    validatePassword=(pass)=>{
        return pass.length > 5;
    }

    validateTextMessage=(text)=>{
        return text.length > 5;
    }

    clickHandler=(name)=> {
        let state = this.state;
        if (this.state.clickedField) {
            switch (this.state.clickedField) {
                case 'email':
                    state['errorEmail'] = false;
                    if (!this.validateEmail(this.state.valueEmail) && this.state.profile.enable_email == 1) {
                        state['errorEmailIcon'] = true;
                    } else {
                        state['errorEmailIcon'] = false;
                    }
                    break;
                case 'password':
                    state['errorPassword'] = false;
                    if (!this.validatePassword(this.state.valuePassword)) {
                        state['errorPasswordIcon'] = true;
                    } else {
                        state['errorPasswordIcon'] = false;
                    }
                    break;
                case 'text-message':
                    state['errorTextMessage'] = false;
                    if (!this.validateTextMessage(this.state.valueTextMessage) && this.state.profile.enable_sms == 1) {
                        state['errorTextMessageIcon'] = true;
                    } else {
                        state['errorTextMessageIcon'] = false;
                    }
                    break;
            }
        }
        switch (name) {
            case 'email':
                if (state.errorEmailIcon) {
                    state['errorEmail'] = true;
                }
                break;
            case 'password':
                if (state.errorPasswordIcon) {
                    state['errorPassword'] = true;
                }
                break;
            case 'text-message':
                if (state.errorTextMessageIcon) {
                    state['errorTextMessage'] = true;
                }
                break;
        }
        state['clickedField'] = name;

        console.log('CLICK', state);

        this.setState(state);
    }

    changePreferencesFormState=(param, event)=>{
        this.state.profile[param] = event.target.value;
        this.setState({profile: this.state.profile});
    }

    clickSubmit(){
        let catchError = false;
        if(!this.validateEmail(this.state.valueEmail)){
            this.setState({
                errorEmailIcon: true
            });
            catchError = true;
        } else {
            this.setState({errorEmailIcon: false, errorEmail: false});
        }
        if(!this.validatePassword(this.state.valuePassword)){
            this.setState({
                errorPasswordIcon: true
            });
            catchError = true;
        } else {
            this.setState({errorPasswordIcon: false, errorPassword: false});
        }
        if(!this.validateTextMessage(this.state.valueTextMessage)){
            this.setState({
                errorTextMessageIcon: true
            });
            catchError = true;
        } else {
            this.setState({errorTextMessageIcon: false, errorTextMessage: false});
        }
        if(this.state.activeSubmitButton){
            if (!catchError) {
                $('.pop_up_wait').show();
                this.setState({activeSubmitButton: false});
                let options = {
                    token: this.props.loginToken,
                    enable_notification: parseInt(this.state.profile.enable_notification),
                    enable_sms: parseInt(this.state.profile.enable_sms),
                    enable_email: parseInt(this.state.profile.enable_email),
                    enable_internal_message: parseInt(this.state.profile.enable_internal_message),
                    enable_offer_popup: parseInt(this.state.profile.enable_offer_popup),
                    email: this.state.profile.email,
                    phone: this.state.profile.phone,
                    password: this.state.profile.password,
                };
                updatePreferencesNotifications(options, (err, data) => {
                    if (!err) {
                        if(typeof data.errors != 'undefined'){
                            //console.log('RESPONSE ERROR', data.errors);
                            this.setState({undefinedServerError: true});
                            $('.pop_up_wait').hide();
                            this.showModal('error');
                            this.setState({activeSubmitButton: true});
                        } else {
                            //console.log('RESPONSE SUCCESS', data);
                            $('.pop_up_wait').hide();
                            this.showModal('update');
                            this.setState({activeSubmitButton: true});
                        }
                    } else {
                        //console.log('RESPONSE ERROR', err);
                        this.setState({undefinedServerError: true});
                        $('.pop_up_wait').hide();
                        this.showModal('error');
                        this.setState({activeSubmitButton: true});
                    }
                });
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            profile: nextProps.profile,
            loginToken: nextProps.loginToken,
            countries: nextProps.country,
            timezones: nextProps.timezones,
            languages: nextProps.languages,
            valueEmail: nextProps.profile.email,
            valueTextMessage:  nextProps.profile.phone,
        })
    }
    //change tabs
    changeSubMenu = (tab) => {
        this.setState({
            submenu:tab
        })
    }
    changeDetailTab = (tab) => {
        this.setState({
            detailsTab:tab
        })
    }
    changemyAccRespTab = (tab) => {
        this.setState({
            myAccRespTab:tab
        })
    }
    changeResponsTimeOutTab = (tab) => {
        this.setState({
            responsTimeOutTab:tab
        })
    }
    //changeDefault info for user
    toggle = (type) => {
        if (type == "contacts") {
            this.setState({changeDefaultContacts: !this.state.changeDefaultContacts})
        }
        if (type == "adress") {
            this.setState({changeDefaultAdress: !this.state.changeDefaultAdress})
        }
        if (type == "request") {
            this.setState({requestPVC: !this.state.requestPVC})
        }
        if (type == "depLimit") {
            this.setState({depositLimits: !this.state.depositLimits})
        }
        if (type == "password") {

            this.setState({
                focus: {
                    password: false,
                    new_password: false,
                    new_conf_password: false
                },
                error_password: false,
                error_new_password: false,
                error_new_conf_password: false
            })
            $('.password input[type="password"]').val("");
        }
        if (type == "sec_code") {

            this.setState({
                focus: {
                    security_conf_code_new: false,
                    security_code_new: false,
                    security_code: false
                },
                error_security_code: false,
                error_security_code_new: false,
                error_security_conf_code_new: false,
            })
            $('.update_sec_code input').val("");
        }
        this.setState({
            error_password:false
        })
    }

    //modals
    closeModal = (type) =>{
        if (type == "info") {
            this.setState({
                pop_up_info: false
            })
        }
        if (type == "update") {
            this.setState({
                pop_up_update: false
            })
        }
        if (type == "error") {
            this.setState({
                pop_up_error: false
            })
        }
    }
    showModal = (type) =>{
        if (type == "info") {
            this.setState({
                pop_up_info: true
            })
        }
        if (type == "update") {
            this.setState({
                pop_up_update: true
            })
        }
        if (type == "error") {
            this.setState({
                pop_up_error: true
            })
        }

    }

    showContacts(){
        if ($('.contact_info').hasClass('show'))
            $('.contact_info').removeClass('show')
        else(
            $('.contact_info').addClass('show')
        )
    }
    showCollapseBox(){
        $('.CollapseBox_Content').parent().toggleClass('show')
    }

    validation = (name, value) => {
        if (this.state['error_'+name]) {
            if (value.length < 6 || value.length > 32) {
                for (var i in this.state.focus) {
                    if (i == name) {
                        this.state.focus[i] = true;
                    } else {
                        this.state.focus[i] = false;
                    }
                }


            } else {
                let obj = {};
                obj['error_' + name] = false;
                this.setState(obj)
                for (var i in this.state.focus) {
                        this.state.focus[i] = false;

                }
            }

            this.setState({
                focus: this.state.focus
            })
        } else {
            if (value.length < 6 || value.length > 32) {
                let obj = {};
                obj['error_' + name] = true;
                this.setState(obj)
            } else {
                let obj = {};
                obj['error_' + name] = false;
                this.setState(obj)
            }
        }
        if (name == "nickname") {
            if (value.match("^[a-zA-Z0-9]*$") == null) {
                this.setState({
                    error_nickname: true
                })
            } else {
                this.setState({
                    error_nickname: false
                })
            }
        }



    }
    updateSecurityCode = () => {
        let form = $('.update_sec_code input');
        let error_security_code, error_security_code_new, error_security_conf_code_new, pop_up_error = false;
        let arr = {};
        let security_code_new, conf_security_code_new;
        form.map((id) => {
            if (form[id].value.length < 4) {
                pop_up_error = true;
                if (form[id].name == "security_code") {
                    error_security_code = true;
                }
                if (form[id].name == "security_code_new") {
                    error_security_code_new = true;

                }
                if (form[id].name == "security_conf_code_new") {
                    error_security_conf_code_new = true;
                }
            }
            if (form[id].name == "security_code_new") {
                security_code_new = form[id].value;
            }
            if (form[id].name == "security_conf_code_new") {
                conf_security_code_new = form[id].value;
            }


            arr[form[id].name] = form[id].value

        })
        let mod = false;
        if (!pop_up_error) {
            if (security_code_new != conf_security_code_new) {
                pop_up_error = true;
                error_security_conf_code_new = true;
                mod = true;
            }
        }


        if (pop_up_error) {

            for (var i in this.state.focus) {
                if (mod !== true) {
                    if (i == "security_code") {
                        this.state.focus[i] = true;
                    } else {
                        this.state.focus[i] = false;
                    }
                } else {
                    if (i == "security_conf_code_new") {
                        this.state.focus[i] = true;
                    } else {
                        this.state.focus[i] = false;
                    }
                }

            }

            this.setState({
                pop_up_error: pop_up_error,
                error_security_code: error_security_code,
                error_security_code_new: error_security_code_new,
                error_security_conf_code_new: error_security_conf_code_new,
                focus:  this.state.focus
            })
        } else {
            $('.pop_up_wait').show();
            //console.log('ppppppppppppppppp!!!!!!!!!!!!!!!!', arr)
            updateSecurCode(this.state.loginToken, arr, function(err, data) {
                if (!err) {

                    $('.pop_up_wait').hide();
                    this.toggle('sec_code')
                } else {
                    if (typeof err.error != "undefined") {
                        $('.pop_up_wait').hide();
                        console.log('updateContacts1', data)
                    } else {
                        $('.pop_up_wait').hide();
                        console.log('updateContacts2', err)
                    }
                }
            }.bind(this))
        }
    }


    updatePassword = () => {
        let form = $('.password input[type="password"]');
        let error_password, error_new_password, error_new_conf_password, pop_up_error = false;
        let arr = {};
        let new_password, new_conf_password;
        form.map((id) => {
                if (form[id].value.length < 6 || form[id].value.length > 32) {
                    pop_up_error = true;
                    if (form[id].name == "password") {
                        error_password = true;
                    }
                    if (form[id].name == "new_password") {
                        error_new_password = true;
                        new_password = form[id].value;
                    }
                    if (form[id].name == "new_conf_password") {
                        error_new_conf_password = true;
                        new_conf_password = form[id].value;
                    }
                }
            if (form[id].name == "new_password") {
                new_password = form[id].value;
            }
            if (form[id].name == "new_conf_password") {
                new_conf_password = form[id].value;
            }


            arr[form[id].name] = form[id].value

        })
        let mod = false;
        if (!pop_up_error) {
            if (new_password != new_conf_password) {
                pop_up_error = true;
                error_new_conf_password = true;
                mod = true;
            }
        }


        if (pop_up_error) {

            for (var i in this.state.focus) {
                if (mod !== true) {
                    if (i == "password") {
                        this.state.focus[i] = true;
                    } else {
                        this.state.focus[i] = false;
                    }
                } else {
                    if (i == "new_conf_password") {
                        this.state.focus[i] = true;
                    } else {
                        this.state.focus[i] = false;
                    }
                }

            }

            this.setState({
                pop_up_error: pop_up_error,
                error_password: error_password,
                error_new_password: error_new_password,
                error_new_conf_password: error_new_conf_password,
                focus:  this.state.focus
            })
        } else {
            $('.pop_up_wait').show();
            updatePassword(this.state.loginToken, arr, function(err, data) {
                if (!err) {

                    $('.pop_up_wait').hide();
                    this.toggle('password')
                } else {
                    if (typeof err.error != "undefined") {
                        $('.pop_up_wait').hide();
                        console.log('updateContacts1', data)
                    } else {
                        console.log('updateContacts2', err)
                    }
                }
            }.bind(this))
        }


    }

    updateContacts = () => {
        let form = $('.update_contacts input');
        let error_password, error_email, error_phone, pop_up_error = false;
        let arr= {};
        form.map((id) => {
            if (form[id].name != "nickname") {
                if (form[id].value.length < 1) {
                    pop_up_error = true;
                    if (form[id].name == "password") {
                        error_password = true;
                    }
                    if (form[id].name == "email") {
                        error_email = true;
                    }
                    if (form[id].name == "phone") {
                        error_phone = true;
                    }
                }
            }

            arr[form[id].name] = form[id].value

        })

        if (pop_up_error) {
            this.setState({
                pop_up_error: pop_up_error,
                error_password: error_password,
                error_email: error_email,
                error_phone: error_phone,

            })
        } else {
         $('.pop_up_wait').show();
            updateContactDetails(this.state.loginToken, arr, function(err, data) {
                if (!err) {
                        this.state.profile['phone'] = arr.phone;
                        this.state.profile['nickname'] = arr.nickname;
                        this.state.profile['email'] = arr.email;
                        this.state.profile['password'] = "";
                        console.log(777777777777777, this.state.profile)
                        this.setState({
                            profile:  this.state.profile
                        })
                    $('.pop_up_wait').hide();
                        this.toggle('contacts')

                } else {
                    if (typeof err.error != "undefined") {
                        $('.pop_up_wait').hide();
                        console.log('updateContacts1', data)
                    } else {
                        console.log('updateContacts2', err)
                    }
                }
            }.bind(this))
        }
    }

    updateDetails = () => {
        let form = $('.update_form input');
        let error_password, error_address_building_number, error_address_unit_number, error_address_street, error_address_postcode, error_city, pop_up_error = false;
        let arr = {};
        form.map((id) => {
                if (form[id].name != "state") {
                    if (form[id].value.length < 1) {
                        pop_up_error = true;
                        if (form[id].name == "password") {
                            error_password = true;
                        }
                        if (form[id].name == "address_building_number") {
                            error_address_building_number = true;
                        }
                        if (form[id].name == "address_unit_number") {
                            error_address_unit_number = true;
                        }
                        if (form[id].name == "address_street") {
                            error_address_street = true;
                        }
                        if (form[id].name == "address_postcode") {
                            error_address_postcode = true;
                        }
                        if (form[id].name == "city") {
                            error_city = true;
                        }
                    }
                }

            arr[form[id].name] = form[id].value

        })

        if (pop_up_error) {
            this.setState({
                pop_up_error: pop_up_error,
                error_password: error_password,
                error_address_building_number: error_address_building_number,
                error_address_unit_number: error_address_unit_number,
                error_address_street: error_address_street,
                error_address_postcode: error_address_postcode,
                error_city: error_city
            })
        } else {
            $('.pop_up_wait').show();
            updateAddress(this.state.loginToken, arr, function(err, data) {
                if (!err) {
                        this.state.profile['address_building_number'] = arr.address_building_number;
                        this.state.profile['address_unit_number'] = arr.address_unit_number;
                        this.state.profile['address_street'] = arr.address_street;
                        this.state.profile['city'] = arr.city;
                        this.state.profile['state'] = arr.state;
                        this.state.profile['address_postcode'] = arr.address_postcode;
                        this.state.profile['password'] = "";

                        this.setState({
                        profile:  this.state.profile
                        })
                    $('.pop_up_wait').hide();
                        this.toggle('adress')

                } else {
                    if (typeof err.error != "undefined") {
                        $('.pop_up_wait').hide();
                        console.log('updateAdress1', data)
                    } else {
                        console.log('updateAdress2', err)
                    }
                }
            }.bind(this))
        }

    }

    updatePreferencesFirstForm=()=>{
        $('.pop_up_wait').show();
        updatePreferencesGeneral(
            this.props.loginToken,
            this.state.profile.language,
            this.state.profile.timezone,
            this.state.profile.betting_options,
            this.state.profile.inactivity_time_max_minutes,
            (err, data) => {
                if (!err ) {
                    if(typeof data.errors != 'undefined'){
                        this.setState({undefinedServerError: true});
                        $('.pop_up_wait').hide();
                        this.showModal('error');
                    } else {
                        $('.pop_up_wait').hide();
                        this.showModal('update');
                    }
                } else {
                    this.setState({undefinedServerError: true});
                    $('.pop_up_wait').hide();
                    this.showModal('error');
                }
            }
        );
    }

    render() {
        console.log("profile", this.state.profile)
        return(
            <div className="userAccount_info">
                <div className="top_sub_menu">
                    <a href="#" className={`top_sub_menu_link ${this.state.submenu == "my_details"  ? 'active' : ''}`} onClick={(e) => {e.preventDefault(); this.changeSubMenu('my_details')}}><span>My Details</span></a>
                    <a href="#" className={`top_sub_menu_link ${this.state.submenu == "postal_verif"  ? 'active' : ''}`} onClick={(e)=>{e.preventDefault(); this.changeSubMenu('postal_verif')}}><span>Postal Verification</span></a>
                    <a href="#" className={`top_sub_menu_link ${this.state.submenu == "know_customer"  ? 'active' : ''}`}  onClick={(e)=>{e.preventDefault(); this.changeSubMenu('know_customer')}}><span>Know Your Customer</span></a>
                    <a href="#" className={`top_sub_menu_link ${this.state.submenu == "respons_controls"  ? 'active' : ''}`} onClick={(e)=>{e.preventDefault(); this.changeSubMenu('respons_controls')}}><span>Responsible Gambling Controls</span></a>
                </div>
                {this.state.submenu == "my_details" ?
                    <div className="account_info_container">
                        <div className="table_content my_account">
                            <div className="tabs_in_details">
                                <nav className="account_details_Navigation">
                                    <ul >
                                        <li className={`account-link ${this.state.detailsTab == "personal"  ? 'active' : ''}`}><a href="#"  onClick={(e) => {e.preventDefault(); this.changeDetailTab('personal')}}>Personal</a></li>
                                        <li className={`account-link ${this.state.detailsTab == "preferences" ? 'active' : ''}`}><a href="#" onClick={(e) => {e.preventDefault(); this.changeDetailTab('preferences')}}>Preferences</a></li>
                                        <li className={`account-link ${this.state.detailsTab == "password" ? 'active' : ''}`}><a href="#" onClick={(e) => {e.preventDefault(); this.changeDetailTab('password')}}>Password</a></li>
                                        <li className={`account-link ${this.state.detailsTab == "security_num" ? 'active' : ''}`}><a href="#" onClick={(e) => {e.preventDefault(); this.changeDetailTab('security_num')}} >Security Number</a></li>

                                    </ul>
                                </nav>
                                {this.state.detailsTab == "personal" ?
                                    <div className="tab_details_info">
                                        <div className="tab_title">Personal Details</div>
                                        <div className={`personal_details_table ${ this.state.changeDefaultAdress ? "opacity" :""}`} >
                                            <div className="personal_details_header">Contact Details</div>
                                            <div className="personal_details">

                                                <div className={`personal_details_default_contacts ${this.state.changeDefaultContacts == false ? 'show':''}`}>
                                                    <div className="personal_details_row">
                                                        <div className="label">Known As</div>
                                                        <div className="meaning">{this.state.profile.nickname}</div>
                                                        <div className={`personal_details_changebtn ${this.state.changeDefaultAdress ? "none": ""}`} onClick={()=>this.toggle('contacts')}>Change</div>
                                                    </div>
                                                    <div className="personal_details_row">
                                                        <div className="label">Contact Number</div>
                                                        <div className="meaning">{this.state.profile.phone}</div>
                                                    </div>
                                                    <div className="personal_details_row">
                                                        <div className="label">Email Address</div>
                                                        <div className="meaning">{this.state.profile.email}</div>
                                                    </div>
                                                </div>
                                                {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
                                                <div className={`personal_details_change_contacts ${this.state.changeDefaultContacts == true ? 'show':''} update_contacts`}>
                                                    <div className="personal_details_row">
                                                        <div className="label">Known As</div>
                                                        <input type="text" name="nickname" className="meaning" defaultValue={this.state.profile.nickname != null ? this.state.profile.nickname : ""} onBlur={(e) => this.validation(e.target.name, e.target.value)}/>
                                                        <ValidateMessageHelper errorIcon={this.state.error_nickname} text={this.state.error_nickname ? 'Please enter a valid nickname.' : ''} />
                                                    </div>
                                                    <div className="personal_details_row">
                                                        <div className="label">Contact Number</div>
                                                        <input type="text" name="phone" className="meaning" defaultValue={this.state.profile.phone}/>
                                                        <ValidateMessageHelper errorIcon={this.state.error_phone} text={this.state.error_phone ? 'Please enter a valid contact number.' : ''} />
                                                    </div>
                                                    <div className="personal_details_row">
                                                        <div className="label">Email Address</div>
                                                        <input type="email" name="email" className="meaning" defaultValue={this.state.profile.email}/>
                                                        <ValidateMessageHelper errorIcon={this.state.error_email} text={this.state.error_email ? 'Please enter a valid E-mail.' : ''} />
                                                    </div>
                                                    <div className="personal_details_row">
                                                        <div className="label">Password</div>
                                                        <input type="password" name="password" className="meaning" defaultValue={typeof this.state.profile.password != "undefined" ? this.state.profile.password: ""}/>
                                                        <ValidateMessageHelper errorIcon={this.state.error_password} text={this.state.error_password ? 'Please confirm your password.' : ''} />
                                                    </div>
                                                    <div className="personal_details_row">
                                                        <div className="label"/>
                                                        <div className="meaning btn_group">
                                                            <div className="change_btn update" onClick={() => this.updateContacts()}>Update</div>
                                                            <div className="change_btn cancel" onClick={()=>this.toggle('contacts')}>Cancel</div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className={`personal_details_table ${this.state.changeDefaultContacts ? "opacity" : ""}`}>
                                            <div className="personal_details_header">Residental Adress</div>
                                            <div className="personal_details">
                                                <div className={`personal_details_default_adress ${this.state.changeDefaultAdress == false ? 'show':''}`}>
                                                    <div className="personal_details_row">
                                                        <div className="label">Residential Address</div>
                                                        <div className="meaning adress_default">
                                                            <div className="street_flat">{this.state.profile.address_street} {this.state.profile.address_building_number} kv.{this.state.profile.address_unit_number}</div>
                                                            <div className="city">{this.state.profile.city != null ? this.state.profile.city : ""}</div>
                                                            <div className="region">{this.state.profile.state != null ? this.state.profile.state : ""}</div>
                                                            <div className="postcode">{this.state.profile.address_postcode}</div>
                                                            <div className="country">{this.props.country[this.state.profile.country_code]}</div>
                                                        </div>
                                                        <div className={`personal_details_changebtn ${this.state.changeDefaultContacts ? "none" : ""}`} onClick={()=>this.toggle('adress')}>Change</div>
                                                    </div>
                                                </div>
                                                    {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
                                                    <div className={`personal_details_change_adress ${this.state.changeDefaultAdress == true ? 'show':''} update_form`}>
                                                        <div className="personal_details_row">
                                                            <div className="label">Country of Residence</div>
                                                            <div className="meaning">{this.props.country[this.state.profile.country_code]}</div>
                                                        </div>
                                                        <div className="personal_details_row">
                                                            <div className="label"/>
                                                            <div className="meaning note">If you need to change your Country of Residence please contact us.</div>
                                                        </div>
                                                        <div className="personal_details_row">
                                                            <div className="label">House Number</div>
                                                            <input type="text" name="address_building_number" className="meaning" defaultValue={this.state.profile.address_building_number}/>
                                                            <ValidateMessageHelper errorIcon={this.state.error_address_building_number} text={this.state.error_address_building_number ? 'Please enter a valid contact number.' : ''} />
                                                        </div>
                                                        <div className="personal_details_row">
                                                            <div className="label">Unit/Apt. Number</div>
                                                            <input type="text" name="address_unit_number" className="meaning"  defaultValue={this.state.profile.address_unit_number}/>
                                                            <ValidateMessageHelper errorIcon={this.state.error_address_unit_number} text={this.state.error_address_unit_number ? 'Please enter a valid contact number.' : ''} />
                                                        </div>
                                                        <div className="personal_details_row">
                                                            <div className="label">Street</div>
                                                            <input type="text"  name="address_street" className="meaning" defaultValue={this.state.profile.address_street}/>
                                                            <ValidateMessageHelper errorIcon={this.state.error_address_street} text={this.state.error_address_street ? 'Please enter a valid contact number.' : ''} />
                                                        </div>
                                                        <div className="personal_details_row">
                                                            <div className="label">Town/City</div>
                                                            <input type="text" name="city" className="meaning" defaultValue={this.state.profile.city != null ? this.state.profile.city : ""} />
                                                            <ValidateMessageHelper errorIcon={this.state.error_city} text={this.state.error_city ? 'Please enter your town/city.' : ''} />
                                                        </div>

                                                        <div className="personal_details_row">
                                                            <div className="label">State/Region</div>
                                                            <input type="text" name="state" className="meaning" defaultValue={this.state.profile.state != null ? this.state.profile.state : ""} />
                                                        </div>
                                                        <div className="personal_details_row">
                                                            <div className="label">Postcode</div>
                                                            <input type="text" name="address_postcode" className="meaning" defaultValue={this.state.profile.address_postcode}/>
                                                            <ValidateMessageHelper errorIcon={this.state.error_address_postcode} text={this.state.error_address_postcode ? 'Please enter your postcode.' : ''} />
                                                        </div>
                                                        <div className="personal_details_row">
                                                            <div className="label">Password</div>
                                                            <input type="password" name="password" className="meaning" defaultValue={typeof this.state.profile.password != "undefined" ? this.state.profile.password: ""}/>
                                                            <ValidateMessageHelper errorIcon={this.state.error_password} text={this.state.error_password ? 'Please confirm your password.' : ''} />
                                                        </div>
                                                        <div className="personal_details_row">
                                                            <div className="label"/>
                                                            <div className="meaning btn_group">
                                                                <div className="change_btn update" onClick={() => this.updateDetails()}>Update</div>
                                                                <div className="change_btn cancel" onClick={()=>this.toggle('adress')}>Cancel</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                            </div>
                                        </div>
                                    </div>


                                    :""
                                }
                                {this.state.detailsTab == "preferences" ?
                                    <div className="tab_details_info">
                                        <div className="tab_title">Preferences</div>
                                        <div className="personal_details_change">
                                            <div className="personal_details_row">
                                                <div className="label">Language</div>
                                                    <select name="language" className="meaning" onChange={(e) => this.changePreferencesFormState('language', e)} value={this.state.profile.language}>
                                                        {Object.keys(this.state.languages).map((ind) => {
                                                            return <option key={`language-${ind}`} value={ind} >{this.state.languages[ind]}</option>;
                                                        })}
                                                    </select>
                                            </div>
                                            <div className="personal_details_row">
                                                <div className="label">Time Zone</div>
                                                    <select name="time_zone"  className="meaning" onChange={(e) => this.changePreferencesFormState('timezone', e)} value={this.state.profile.timezone}>
                                                        {Object.keys(this.state.timezones).map((ind) => {
                                                            return <option key={`timezone-${ind}`} value={ind} >{this.state.timezones[ind]}</option>;
                                                        })}
                                                    </select>
                                            </div>
                                            <div className="personal_details_row">
                                                <div className="label">Betting Options</div>
                                                <select name="time_zone" className="meaning" onChange={(e) => this.changePreferencesFormState('betting_options', e)} value={this.state.profile.betting_options}>
                                                    {Object.keys(this.props.bettingOptions).map((ind) => {
                                                        return <option key={`betting_options-${ind}`} value={ind} >{this.props.bettingOptions[ind]}</option>;
                                                    })}
                                                </select>
                                                <div className="personal_details_changebtn" onClick={()=>this.showModal("info")}>Information</div>
                                            </div>
                                            <div className="personal_details_row">
                                                <div className="label">Maximum Inactivity Time</div>
                                                <select name="time_zone" className="meaning" onChange={(e) => this.changePreferencesFormState('inactivity_time_max_minutes', e)} value={this.state.profile.inactivity_time_max_minutes}>
                                                    {Object.keys(this.props.inactivityTimes).map((ind) => {
                                                        return <option key={`inactivity_time_max_minutes-${ind}`} value={ind} >{this.props.inactivityTimes[ind]}</option>;
                                                    })}
                                                </select>
                                            </div>
                                            <div className="personal_details_row">
                                                <div className="label"/>
                                                <div className="meaning btn_group">
                                                    <div className="change_btn update" onClick={() => this.updatePreferencesFirstForm()}>Update</div>
                                                    <div className="change_btn cancel">Cancel</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="preference_group">
                                            <div className="preference_group_header">Choose how you receive your offers</div>
                                            <div className="personal_details_change">
                                                <div className="personal_details_row">
                                                    <div className="label">Notification</div>
                                                    <div className="meaning">
                                                        <div className="meaning_radio_wrapper">
                                                            <input type="radio"  name="notification-radio" onClick={(event) => this.changePreferencesFormState('enable_notification', event)} value="1" defaultChecked={this.state.profile.enable_notification == 1 ? 1 : 0}/>
                                                            <label>Yes</label>
                                                        </div>
                                                        <div className="meaning_radio_wrapper">
                                                            <input type="radio"  name="notification-radio" onClick={(event) => this.changePreferencesFormState('enable_notification', event)} value="0" defaultChecked={this.state.profile.enable_notification == 1 ? 0 : 1}/>
                                                            <label>No</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="personal_details_row">
                                                    <div className="label">Text Message</div>
                                                    <div className="meaning">
                                                        <div className="meaning_radio_wrapper">
                                                            <input type="radio" onClick={(event) => this.changePreferencesFormState('enable_sms', event)} name="text-message-radio" value="1" defaultChecked={this.state.profile.enable_sms == 1 ? 1 : 0}/>
                                                            <label>Yes</label>
                                                        </div>
                                                        <div className="meaning_radio_wrapper">
                                                            <input type="radio" onClick={(event) => this.changePreferencesFormState('enable_sms', event)} name="text-message-radio" value="0" defaultChecked={this.state.profile.enable_sms == 1 ? 0 : 1}/>
                                                            <label>No</label>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="personal_details_row">
                                                    <div className="label"></div>
                                                    {this.state.profile.enable_sms == 1 ? <input name="text-message" value={this.state.profile.phone} onChange={this.handleUserInput} type="text" onClick={()=>this.clickHandler('text-message')} className="meaning"/> : ''}
                                                    <ValidateMessageHelper errorIcon={this.state.errorTextMessageIcon} text={this.state.errorTextMessage ? 'Please enter a valid contact number.' : ''} />
                                                </div>
                                                <div className="personal_details_row">
                                                    <div className="label">Email</div>
                                                    <div className="meaning">
                                                        <div className="meaning_radio_wrapper">
                                                            <input type="radio" onClick={(event) => this.changePreferencesFormState('enable_email', event)} name="email-radio" value="1" defaultChecked={this.state.profile.enable_email == 1 ? 1 : 0}/>
                                                            <label>Yes</label>
                                                        </div>
                                                        <div className="meaning_radio_wrapper">
                                                            <input type="radio" onClick={(event) => this.changePreferencesFormState('enable_email', event)} name="email-radio" value="0" defaultChecked={this.state.profile.enable_email == 1 ? 0 : 1}/>
                                                            <label>No</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="personal_details_row">
                                                    <div className="label"></div>
                                                    {this.state.profile.enable_email == 1 ? <input name="email" value={this.state.profile.email} onChange={this.handleUserInput} onClick={()=>this.clickHandler('email')} type="text" className="meaning"/> : ''}
                                                    <ValidateMessageHelper errorIcon={this.state.errorEmailIcon} text={this.state.errorEmail ? 'Please enter your email address. Your email address will be used to send you important account information and offer codes that must be entered to claim bonuses.' : ''} />
                                                </div>
                                                <div className="personal_details_row">
                                                    <div className="label">In bet365</div>
                                                    <div className="meaning"/>
                                                </div>
                                                <div className="personal_details_row">
                                                    <div className="label">Messages Inbox</div>
                                                    <div className="meaning">
                                                        <div className="meaning_radio_wrapper">
                                                            <input type="radio" onClick={(event) => this.changePreferencesFormState('enable_internal_message', event)} name="messages-radio" value="1" defaultChecked={this.state.profile.enable_internal_message == 1 ? 1 : 0}/>
                                                            <label>Yes</label>
                                                        </div>
                                                        <div className="meaning_radio_wrapper">
                                                            <input type="radio" onClick={(event) => this.changePreferencesFormState('enable_internal_message', event)} name="messages-radio" value="0" defaultChecked={this.state.profile.enable_internal_message == 1 ? 0 : 1}/>
                                                            <label>No</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="personal_details_row">
                                                    <div className="label">Offer Pop Ups</div>
                                                    <div className="meaning">
                                                        <div className="meaning_radio_wrapper">
                                                            <input type="radio" onClick={(event) => this.changePreferencesFormState('enable_offer_popup', event)} name="offer-pop-ups-radio" value="1" defaultChecked={this.state.profile.enable_offer_popup == 1 ? 1 : 0}/>
                                                            <label>Yes</label>
                                                        </div>
                                                        <div className="meaning_radio_wrapper">
                                                            <input type="radio" onClick={(event) => this.changePreferencesFormState('enable_offer_popup', event)} name="offer-pop-ups-radio" value="0" defaultChecked={this.state.profile.enable_offer_popup == 1 ? 0 : 1}/>
                                                            <label>No</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="personal_details_row">
                                                    <div className="label">Password</div>
                                                    <input name="password" onChange={this.handleUserInput} onClick={()=>this.clickHandler('password')} type="password" className="meaning"/>
                                                    <ValidateMessageHelper errorIcon={this.state.errorPasswordIcon} text={this.state.errorPassword ? 'Please confirm your password.' : ''} />
                                                </div>
                                                <div className="personal_details_row">
                                                    <div className="label"/>
                                                    <div className="meaning btn_group">
                                                        <div className={`change_btn update ${this.state.activeSubmitButton ? '' : 'no_active'}`} id="submit-button" onClick={()=>this.clickSubmit()}>Update</div>

                                                        <div className="change_btn cancel">Cancel</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    :""
                                }
                                {this.state.detailsTab == "password" ?
                                    <div className="tab_details_info password">
                                        <div className="tab_title">Password</div>
                                        <div className="text_info">
                                            <p>Please use letters, numbers and accepted symbols only, with no spaces, minimum 6, maximum 32 characters.</p>
                                            <p>Your password should not contain your username, name, email address or year of birth. You can increase the strength of your password by using a mixture of letters, numbers and symbols. Please remember that passwords are case sensitive.</p>
                                            <p>The following symbols may be used as part of your password:<br/>
                                                {` !"#$%&'()*+,-./:;<=>?_@[\ ]^{ | }~ `}</p>
                                        </div>
                                        <div className="personal_details_change">
                                            <div className="personal_details_row">
                                                <div className="label">Current Password</div>
                                                <input  type="password" name="password" className="meaning" onBlur={(e) => this.validation(e.target.name, e.target.value)} />
                                                <ValidateMessageHelper errorIcon={this.state.error_password} text={this.state.focus.password ? 'Please enter your current password.' : ''} />
                                            </div>
                                            <div className="personal_details_row">
                                                <div className="label">New Password</div>
                                                <input  type="password" name="new_password" onBlur={(e) => this.validation(e.target.name, e.target.value)} className="meaning" />
                                                <ValidateMessageHelper errorIcon={this.state.error_new_password} text={this.state.focus.new_password ? 'Please enter a password. This must be 6 -32 characters long using letters, numbers and accepted symbols only, with no spaces. Your password should not contain your username, name, email address or year of birth. You can using the strength of your password by including a mixture of letters, numbers and symbols. Please remember that passwords are case sensitive.' : ''} />
                                            </div>
                                            <div className="personal_details_row">
                                                <div className="label">Confirm New Password</div>
                                                <input type="password" name="new_conf_password" onBlur={(e) => this.validation(e.target.name, e.target.value)} className="meaning" />
                                                <ValidateMessageHelper errorIcon={this.state.error_new_conf_password} text={this.state.focus.new_conf_password ? 'Please re-enter your new password.' : ''} />
                                            </div>
                                            <div className="personal_details_row">
                                                <div className="label"/>
                                                <div className="meaning btn_group">
                                                    <div className="change_btn update" onClick={() => this.updatePassword()}>Update</div>
                                                    <div className="change_btn cancel" onClick={() => this.toggle('password')}>Cancel</div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    :""
                                }
                                {this.state.detailsTab == "security_num" ?
                                    <div className="tab_details_info update_sec_code">
                                        <div className="tab_title">Change Security Number</div>
                                        <div className="personal_details_change">
                                            <div className="personal_details_row">
                                                <div className="label">Current Security Number</div>
                                                <input type="text" name="security_code" className="meaning"/>
                                                <ValidateMessageHelper errorIcon={this.state.error_security_code} text={this.state.focus.security_code ? 'Please enter your current four digit security number.' : ''} />
                                            </div>
                                            <div className="personal_details_row">
                                                <div className="label">New Security Number</div>
                                                <input type="text" name="security_code_new" className="meaning"/>
                                                <ValidateMessageHelper errorIcon={this.state.error_security_code_new} text={this.state.focus.security_code_new ? 'Please enter your new four digit security number.' : ''} />
                                            </div>
                                            <div className="personal_details_row">
                                                <div className="label">Confirm New Security Number</div>
                                                <input type="text" name="security_conf_code_new" className="meaning"/>
                                                <ValidateMessageHelper errorIcon={this.state.error_security_conf_code_new} text={this.state.focus.security_conf_code_new ? 'Please re-enter your four digit security number.' : ''} />
                                            </div>
                                            <div className="personal_details_row">
                                                <div className="label"/>
                                                <div className="meaning btn_group">
                                                    <div className="change_btn update" onClick={() => this.updateSecurityCode()}>Update</div>
                                                    <div className="change_btn cancel" onClick={() => this.toggle('sec_code')}>Cancel</div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    :""
                                }

                            </div>

                        </div>

                    </div>
                :""
                }
                {this.state.submenu == "postal_verif" ?
                    <div className="account_info_container">
                        <div className="TabContainer PostalVerificationCode">

                            <div className={`block_wrapp ${this.state.requestPVC == false ? 'show':''}`}>
                                <div className="DetailsSteck">
                                    <div className="DetailsSteck_Header">
                                        <div className="DetailsSteck_Title">Postal Verification</div>
                                    </div>
                                    <div className="DetailsSteck_Content">
                                        <div className="DetailsSteck_ContentText">
                                            <p>If we have sent a Postal Verification Code (<a id="" href="#" onClick={(e)=>{e.preventDefault(); this.toggle('request')}}>Request PVC</a>) to your address, please enter it below.</p>
                                        </div>
                                        <div className="DetailsSteck_Form">
                                            <div className="FormRow">
                                                <div className="FormLabel">Postal Verification Code</div>
                                                <div className="FormMeaning">
                                                    <div className="FormFieldSet">
                                                        <input type="text" className="" name="PVC"/>
                                                        <div className="valid_icon"></div>
                                                        <div className="message error">
                                                            <div className="message_text error">
                                                                <span className="bold_text">This Postal Verification Code (PVC) is invalid</span><br/> Please enter your Postal Verification Code (PVC).
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
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="FormRow action">
                                                <div className="FormMeaning">
                                                    <div className="FormLabel"></div>
                                                    <div className="FormBtn submit">Submit</div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="DetailsSteck verification">
                                    <div className="DetailsSteck_Header">
                                        <div className="DetailsSteck_Title">Address Details</div>
                                    </div>
                                    <div id="PVC_personalDetails" className="DetailsSteck_Form visible">
                                        <div className={`FormRow adress ${this.state.changeDefaultAdress == false ? 'show':''}`}>
                                            <div className="FormLabel">Residential Address</div>
                                            <div className="FormMeaning adress_default">
                                                <div className="street_flat">Lopanskya 3 kv.52</div>
                                                <div className="city">Kharkov</div>
                                                <div className="region">Kharkovskya</div>
                                                <div className="postcode">62418</div>
                                                <div className="country">Ukraine</div>
                                            </div>
                                            <div className="FormMeaning">
                                                <a href="" id="PVC_personalDetails_Change" className="visible" onClick={(e)=> {e.preventDefault(); this.toggle('adress')}}>Change</a>
                                            </div>
                                        </div>
                                        {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
                                        <div className={`personal_details_change_adress ${this.state.changeDefaultAdress == true ? 'show':''}`}>
                                            <div className="personal_details_row">
                                                <div className="label">Country of Residence</div>
                                                <div className="meaning">Ukraine</div>
                                            </div>
                                            <div className="personal_details_row">
                                                <div className="label"/>
                                                <div className="meaning note">If you need to change your Country of Residence please contact us.</div>
                                            </div>
                                            <div className="personal_details_row">
                                                <div className="label">Residential Address <span className="red_star">*</span></div>
                                                <input type="text" className="meaning"/>
                                            </div>
                                            <div className="personal_details_row">
                                                <div className="label"></div>
                                                <input type="text" className="meaning"/>
                                            </div>
                                            <div className="personal_details_row">
                                                <div className="label"></div>
                                                <input type="text" className="meaning"/>
                                            </div>
                                            <div className="personal_details_row">
                                                <div className="label">Town/City <span className="red_star">*</span></div>
                                                <input type="text" className="meaning"/>
                                            </div>
                                            <div className="personal_details_row">
                                                <div className="label">State/Region</div>
                                                <input type="text" className="meaning"/>
                                            </div>
                                            <div className="personal_details_row">
                                                <div className="label">Postcode <span className="red_star">*</span></div>
                                                <input type="text" className="meaning"/>
                                            </div>
                                            <div className="personal_details_row">
                                                <div className="label">Password</div>
                                                <input type="password" className="meaning"/>
                                            </div>
                                            <div className="personal_details_row">
                                                <div className="label"/>
                                                <div className="meaning btn_group">
                                                    <div className="change_btn update">Update</div>
                                                    <div className="change_btn cancel" onClick={()=>this.toggle('adress')}>Cancel</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`DetailsSteck request ${this.state.requestPVC == true ? 'show':''}`}>
                                <div className="DetailsSteck_Header">
                                    <div className="DetailsSteck_Title">Postal Verification Code (PVC)</div>
                                </div>
                                    <div className="send_verif_code">
                                        <div className="success_icon"></div>
                                        <div className="send_verif_code_text">Thank you, we will send your postal verification code to
                                            your residential address. Please allow 7-10 working days for this to arrive.
                                        </div>
                                    </div>
                                    <p className="note">Please contact us if you need more assistance with Postal Verification.</p>
                            </div>
                        </div>
                    </div>
                :""
                }
                {this.state.submenu == "know_customer" ?
                    <div className="account_info_container">
                        <div className="TabContainer KnowYourCustomer">
                            {/*~~~~~~~~~~~~no account history~~~~~~~~~~~~~~~*/}
                            <div className="DetailsSteck_Header">
                                <div className="DetailsSteck_Title">Verification of Your Account</div>
                            </div>
                            <div className="DetailsSteckContent">
                            <div className="DetailsSteck">                                


                                    <div className="DetailsSteck_Content">
                                        <div className="DetailsSteck_ContentText">
                                              <p>It is important that we are able to positively identify our customers to comply with both regulatory requirements and to help ensure the security of accounts. We call this process KYC or Know Your Customer.</p>
                                              <p>KYC is a two-step process. You will need to complete one check from Step 1 and one check from Step 2.</p>
                                              <p>Until you have successfully completed KYC you will not be able to withdraw from your account.</p>
                                              <p>If you choose to upload or send in documents to complete both Step 1 and Step 2, please ensure that you use a different document in each step.</p>
                                        </div> 
                                    </div>

                            </div>
                            <div className="DetailsSteck"> 
                                <div className="DetailsSteck_Content">
                                    <div className="DetailsSteck_ContentText">
                                        <p><strong>Step 1 – Please complete one of the verification options below</strong></p>
                                    </div> 
                                    <div className="CollapseBox">
                                        <div className="CollapseBox_Action" onClick={()=>this.showCollapseBox()}>Upload Your Identity Document</div>                        
                                        <div className="CollapseBox_Content">
                                             <div className="DetailsSteck_ContentText">
                                                 <p>You can upload a copy or take a photo of your identity document by selecting one of the options below.</p>
                                             </div>
                                            <div className="DetailsSteck_Form">                                        
                                                <div className="FormRow action center">
                                                    <div className="FormMeaning">
                                                        <div className="FormBtn submit">Upload Passport</div>                                                
                                                        <div className="FormBtn submit">Upload ID Card</div>
                                                        <div className="FormBtn submit">Upload Driving Licence</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="CollapseBox">
                                        <div className="CollapseBox_Action" onClick={()=>this.showCollapseBox()}>Upload Your Supporting Documentation</div>                        
                                        <div className="CollapseBox_Content">
                                             <div className="DetailsSteck_ContentText">
                                                 <p>You can upload any of the supporting document types specified in the list below by selecting the relevant option and clicking on submit.</p>
                                                 <br/>
                                                 <br/>
                                                 <p>Please ensure the document contains both your full name and residential address as registered on your bet365 account. Where applicable, documents must not have expired and statements or bills must be dated within the last three months. For card and bank statements, please blank out all but the first 6 and last 4 digits of your card number.</p>
                                             </div> 
                                            <div className="DetailsSteck_Form">                                        
                                                <div className="FormRow action center">
                                                    <div className="FormMeaning">
                                                        <div className="FormBtn submit">Submit</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="DetailsSteck_ContentText">
                                               <p><strong>Please note, we are unable to accept the same document for Step 1 and Step 2.</strong></p>
                                               <p>&nbsp;</p>
                                           </div>
                                        </div>
                                    </div>
                                    <div className="CollapseBox">
                                        <div className="CollapseBox_Action" onClick={()=>this.showCollapseBox()}>Email Supporting Documentation</div>                        
                                        <div className="CollapseBox_Content">
                                             <div className="DetailsSteck_ContentText">
                                                 <p>Please be aware that using the Upload Your Identity Document service is the quickest way to have your passport, driving licence or ID card verified.</p>
                                                 <p>However, if you are using an alternative document or the Upload Your Identity Document service is unavailable, you can email a copy to <a href="mailto:#">documents@bet365.com</a>. Your username and four-digit security number must be included in your email.</p>
                                                 <p>Please ensure the document contains both your full name and date of birth as registered on your bet365 account. Where applicable, documents must not have expired and statements or bills must be dated within the last three months.</p>
                                                 <p>Accepted Documents:<br/>
                                                 Residency permit<br/>
                                                 Visa</p>
                                             </div> 
                                        </div>
                                    </div>                                    
                                </div>
                            </div>
                            <div className="DetailsSteck"> 
                                <div className="DetailsSteck_Content">
                                    <div className="DetailsSteck_ContentText">
                                        <p><strong>Step 2 – Please complete one of the verification options below</strong></p>
                                    </div> 
                                    <div className="CollapseBox">
                                        <div className="CollapseBox_Action" onClick={()=>this.showCollapseBox()}>Upload Your Identity Document</div>                        
                                        <div className="CollapseBox_Content">
                                             <div className="DetailsSteck_ContentText">
                                                 <p>You can upload a copy or take a photo of your identity document by selecting one of the options below.</p>
                                                 <p>Please ensure the document contains both your full name and residential address as registered on your bet365 account..</p>
                                             </div>
                                            <div className="DetailsSteck_Form">                                        
                                                <div className="FormRow action center">
                                                    <div className="FormMeaning">
                                                        <div className="FormBtn submit">Upload Passport</div>                                                
                                                        <div className="FormBtn submit">Upload ID Card</div>
                                                        <div className="FormBtn submit">Upload Driving Licence</div>
                                                    </div>
                                                </div>
                                            </div>                                             
                                        </div>
                                    </div>
                                    <div className="CollapseBox">
                                        <div className="CollapseBox_Action" onClick={()=>this.showCollapseBox()}>Upload Your Supporting Documentation</div>                        
                                        <div className="CollapseBox_Content">
                                             <div className="DetailsSteck_ContentText">
                                                 <p>You can upload any of the supporting document types specified in the list below by selecting the relevant option and clicking on submit.</p>
                                                 <p>&nbsp;</p>
                                                 <p>&nbsp;</p>
                                                 <p>Please ensure the document contains both your full name and residential address as registered on your bet365 account. Where applicable, documents must not have expired and statements or bills must be dated within the last three months. For card and bank statements, please blank out all but the first 6 and last 4 digits of your card number.</p>
                                             </div> 
                                            <div className="DetailsSteck_Form">                                        
                                                <div className="FormRow action center">
                                                    <div className="FormMeaning">
                                                        <div className="FormBtn submit">Submit</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="DetailsSteck_ContentText">
                                               <p><strong>Please note, we are unable to accept the same document for Step 1 and Step 2.</strong></p>
                                               <p>&nbsp;</p>
                                           </div>
                                        </div>
                                    </div>
                                    <div className="CollapseBox">
                                        <div className="CollapseBox_Action" onClick={()=>this.showCollapseBox()}>Enter Your Postal Verification Code</div>                        
                                        <div className="CollapseBox_Content">
                                            <div className="DetailsSteck">                                
                                                    <div className="DetailsSteck_Header">
                                                        <div className="DetailsSteck_Title">Postal Verification</div>
                                                    </div>
                                                    <div className="DetailsSteck_Content">
                                                        <div className="DetailsSteck_ContentText">
                                                              <p>If we have sent a Postal Verification Code (<a id="" href="#">Request PVC</a>) to your address, please enter it below.</p>
                                                        </div> 
                                                        <div className="DetailsSteck_Form">
                                                            <div className="FormRow">
                                                                <div className="FormLabel">Postal Verification Code</div>
                                                                <div className="FormMeaning">
                                                                    <div className="FormFieldSet">
                                                                        <input type="text" className="" name="PVC"/>
                                                                        <div className="valid_icon"></div>
                                                                        <div className="message error">
                                                                            <div className="message_text error">
                                                                                <span className="bold_text">This Postal Verification Code (PVC) is invalid</span><br/> Please enter your Postal Verification Code (PVC).
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
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>                                                
                                                            </div>                                            
                                                            <div className="FormRow action">
                                                                <div className="FormMeaning">
                                                                    <div className="FormLabel"></div>
                                                                    <div className="FormBtn submit">Submit</div>
                                                                </div>
                                                            </div>
                
                                                        </div>
                                                    </div>
                                            </div>
                                            <div className="DetailsSteck">                                
                                                    <div className="DetailsSteck_Header">
                                                        <div className="DetailsSteck_Title">Address Details</div>
                                                    </div>
                                                    <div id="PVC_personalDetails" className="DetailsSteck_Form visible">
                                                        <div className="FormRow">
                                                                <div className="FormLabel">Residential Address</div>
                                                                <div className="FormMeaning adress_default">
                                                                    <div className="street_flat">Lopanskya 3 kv.52</div>
                                                                    <div className="city">Kharkov</div>
                                                                    <div className="region">Kharkovskya</div>
                                                                    <div className="postcode">62418</div>
                                                                    <div className="country">Ukraine</div>
                                                                </div>
                                                                <div className="FormMeaning">
                                                                        <a href="" id="PVC_personalDetails_Change" className="visible">Change</a>
                                                                </div>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>                                    
                                </div>
                            </div>
                            </div>
                            {/*~~~~~~~~~~~~have account history~~~~~~~~~~~~~~~*/}
                            <div className="account_verified">
                                <p className="note">Your account is verified for Know Your Customer.</p>
                                <p className="note">Please note, in certain circumstances we may require further information from you in accordance with our licence conditions. We will contact you should this be necessary.</p>
                            </div>
                        </div>
                    </div>
                :""
                }
                {this.state.submenu == "respons_controls" ?
                    <div className="account_info_container">
                        <nav className="TabNavigation respons_control">
                                    <ul >
                                        <li className={`ItemLink ${this.state.myAccRespTab == "DepositLimits"  ? 'active' : ''}`}><a href="#"  onClick={(e) => {e.preventDefault(); this.changemyAccRespTab('DepositLimits')}}>Deposit Limits</a></li>
                                        <li className={`ItemLink ${this.state.myAccRespTab == "TimeOut" ? 'active' : ''}`}><a href="#" onClick={(e) => {e.preventDefault(); this.changemyAccRespTab('TimeOut')}}>Time-Out</a></li>
                                        <li className={`ItemLink ${this.state.myAccRespTab == "SelfExclusion" ? 'active' : ''}`}><a href="#" onClick={(e) => {e.preventDefault(); this.changemyAccRespTab('SelfExclusion')}}>Self-Exclusion</a></li>
                                        <li className={`ItemLink ${this.state.myAccRespTab == "AccountClosure" ? 'active' : ''}`}><a href="#" onClick={(e) => {e.preventDefault(); this.changemyAccRespTab('AccountClosure')}} >Account Closure</a></li>
                                        <li className={`ItemLink ${this.state.myAccRespTab == "RealityChecks" ? 'active' : ''}`}><a href="#" onClick={(e) => {e.preventDefault(); this.changemyAccRespTab('RealityChecks')}}>Reality Checks</a></li>
                                    </ul>
                        </nav>

                        {this.state.myAccRespTab == "DepositLimits" ?
                        <div className="TabContainer ResponsibleGamblingControls">                        
                             <div className="DetailsSteck">                                
                                    <div className="DetailsSteck_Header">
                                        <div className="DetailsSteck_Title">Deposit Limits</div>
                                    </div>
                                    <div className="DetailsSteck_Content">
                                        <div className="DetailsSteck_ContentText">
                                              <p>This facility enables you to limit the amount of money that you are able to deposit online into your account on either a 24 hour, 7 day and/or 30 day basis.</p>
                                              <p>These amounts may be revised downwards at any time but any increase will only be implemented 24 hours after the request. Our Customer Services staff will be available to provide any further information required but are unable to override limits set by you.</p>
                                              <p>Your existing deposit limits are:</p>
                                            <div className={`personal_details_default_limits ${this.state.depositLimits == false ? "show" : "" }`}>
                                                <div className="personal_details_row">
                                                    <div className="label">24 Hour</div>
                                                    <div className="meaning">No limits</div>
                                                </div>
                                                <div className="personal_details_row">
                                                    <div className="label">7 Day</div>
                                                    <div className="meaning">No limits</div>
                                                </div>
                                                <div className="personal_details_row">
                                                    <div className="label">30 Day</div>
                                                    <div className="meaning">No limits</div>
                                                </div>
                                                <div className="personal_details_row">
                                                    <div className="label"/>
                                                    <div className="meaning btn_group">
                                                        <div className="change_btn update" onClick={()=>this.toggle('depLimit')}>Change</div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
                                            <div className={`personal_details_change_limits ${this.state.depositLimits == true ? "show" : "" }`}>
                                                <div className="personal_details_row">
                                                    <div className="label">24 Hour Deposit Limit</div>
                                                    <select name="dep_limit24h" id="dep_limit24h" className="meaning">
                                                        <option value="-1">Please select</option>
                                                        <option value="5">5</option>
                                                        <option value="25">25</option>
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
                                                        <option selected="selected" value="500000000">No limits</option>
                                                    </select>
                                                </div>
                                                <div className="personal_details_row">
                                                    <div className="label">7 Day Deposit Limit</div>
                                                    <select name="dep_limit7d" id="dep_limit7d" className="meaning">
                                                        <option value="-1">Please select</option>
                                                        <option value="5">5</option>
                                                        <option value="25">25</option>
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
                                                        <option selected="selected" value="500000000">No limits</option>
                                                    </select>
                                                </div>
                                                <div className="personal_details_row">
                                                    <div className="label">30 Day Deposit Limit</div>
                                                    <select name="dep_limit30d" id="dep_limit30d" className="meaning">
                                                        <option value="-1">Please select</option>
                                                        <option value="5">5</option>
                                                        <option value="25">25</option>
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
                                                        <option selected="selected" value="500000000">No limits</option>
                                                    </select>
                                                </div>
                                                <div className="personal_details_row">
                                                    <div className="label">Password</div>
                                                    <input type="password" className="meaning"/>
                                                </div>

                                                <div className="personal_details_row">
                                                    <div className="label"/>
                                                    <div className="meaning btn_group">
                                                        <div className="change_btn update">Update</div>
                                                        <div className="change_btn cancel" onClick={()=>this.toggle('depLimit')}>Cancel</div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div> 
                                    </div>
                            </div>
                        </div> 
                            :""
                        }
                        {this.state.myAccRespTab == "TimeOut" ?
                        <div className="timeout_wrapp">
                            <div className="DetailsSteck_Header">
                                <div className={`DetailsSteck_Title ${this.state.responsTimeOutTab == "Create_Time_Out"  ? 'active' : ''}`} onClick={()=>this.changeResponsTimeOutTab("Create_Time_Out")}>Create a Time-Out</div>
                                <div className={`DetailsSteck_Title ${this.state.responsTimeOutTab == "Existing_Time-Outs"  ? 'active' : ''}`} onClick={()=>this.changeResponsTimeOutTab("Existing_Time-Outs")}>Existing Time-Outs</div>
                            </div>

                            <div className="TabContainer ResponsibleGamblingControls">

                                {this.state.responsTimeOutTab == "Create_Time_Out" ?
                                    <div className="DetailsSteck">
                                        <div className="DetailsSteck_Content">
                                            <div className="DetailsSteck_ContentText">
                                                <p>If you want to take a short break from playing with us, you may do so by taking a Time-Out.</p>
                                                <p>If you feel you are at risk of developing a gambling problem or believe you currently have a gambling problem, please visit our <a href="#" title="Self-Exclusion">Self-Exclusion</a> page.</p>
                                                <p>Once you begin your Time-Out, you will no longer be able to deposit funds or play in any of our products. However, you will be able to withdraw any balance you may have.</p>
                                            </div>
                                            <div className="personal_details_row">
                                                <div className="label rows">Time-Out Period</div>
                                                <select name="time_out_period" id="time_out_period" className="meaning">
                                                    <option value="">Please select</option>
                                                    <option value="1">24 Hours</option>
                                                    <option value="2">48 Hours</option>
                                                    <option value="7">7 Days</option>
                                                    <option value="30">30 Days</option>
                                                </select>
                                                <div className="valid_icon"></div>
                                                <div className="message error">
                                                    <div className="message_text error">
                                                        <span className="bold_text">The field must be completed</span>
                                                        <br/>Please select your Time-Out period.
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
                                                <div className="valid_icon valid_green"></div>
                                                <div className="message help">
                                                    <div className="message_text help">
                                                        <span className="bold_text">The field must be completed</span>
                                                        <br/>Please select your Time-Out period.
                                                    </div>
                                                    <div className="message_info help">
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

                                                            <p> {` /!/"/#/$/%/&/'/(/)/*/+/,/-/.///:/;/</=/>/?/_/@/[/\ /]/^/{ / | /}~ `}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="personal_details_row">
                                                <div className="label"/>
                                                <div className="meaning btn_group">
                                                    <div className="change_btn update w100 no_active">Continue</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                :""
                                }
                                {this.state.responsTimeOutTab == "Existing_Time-Outs" ?
                                    <div className="DetailsSteck">
                                        <div className="DetailsSteck_Content">
                                            <div className="DetailsSteck_ContentText">
                                                <p>You have no Custom Time-Outs.</p>
                                            </div>
                                        </div>
                                    </div>
                                :""
                                }

                            </div>
                        </div>                              
                            :""
                        }
                        {this.state.myAccRespTab == "SelfExclusion" ?
                        <div className="TabContainer ResponsibleGamblingControls">                        
                             <div className="DetailsSteck">                                
                                    <div className="DetailsSteck_Header">
                                        <div className="DetailsSteck_Title">Self-Exclusion</div>
                                    </div>
                                    <div className="DetailsSteck_Content">
                                        <div className="DetailsSteck_ContentText">
                                              <p>If you feel you are at risk of developing a gambling problem or believe you currently have a gambling problem, please consider Self-Exclusion.</p>
                                              <p>If you want to stop playing for any other reason, please visit our <a href="#" title="Time-Out">Time-Out</a> and <a href="#" title="Account Closure">Account Closure</a> pages.</p>
                                              <p>bet365 provides the facility to allow a customer to self-exclude themselves from their account or specific products for a set period of time. Once this change has been made, it will not be possible for the selected products to be re-activated for any reason until after the set period has expired.</p>
                                              <p>During the period of self-exclusion bet365 will do all it can to prevent new accounts being opened.</p>
                                              <p>If you would like further information regarding self-exclusion, please contact us and one of our highly trained Customer Service team will be pleased to assist you.</p>
                                              <p>If you wish to self-exclude yourself now, you can do so by selecting the period of self-exclusion and the products you wish to be self-excluded from below. You will be asked to confirm the details, at which point the self-exclusion will become effective immediately.</p>
                                              <p>Please note that the Sports and Poker products may be self-excluded independently. However, should you wish to self-exclude from the Casino or the Games/Bingo/Vegas products this will result in the self-exclusion of the Casino, Games/Bingo/Vegas and Poker products collectively.</p>
                                        </div>
                                        <div className="personal_details_row">
                                            <div className="label">Self-Exclusion Period</div>
                                            <select name="self_exclusion_period" id="self_exclusion_period" className="meaning">
                                                <option value="">Please select</option>
                                                <option value="1">6 Months</option>
                                                <option value="2">1 Year</option>
                                                <option value="3">2 Years</option>
                                                <option value="4">5 Years</option>
                                                <option value="7">Indefinitely</option>
                                            </select>
                                            <div className="valid_icon"></div>
                                            <div className="message error">
                                                <div className="message_text error">
                                                    <span className="bold_text">The field must be completed</span>
                                                    <br/>Please select a Self-Exclusion Period.
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
                                            <div className="valid_icon valid_green"></div>
                                        </div>
                                        <div className="personal_details_row">
                                            <div className="label"/>
                                            <div className="meaning">
                                                <input type="checkbox"/>
                                                <span className="meaning_label">All Products</span>
                                            </div>
                                            <div className="message help">
                                                <div className="message_text help">
                                                    Please select at least one Product

                                                </div>
                                                <div className="message_info help">
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

                                                        <p> {` /!/"/#/$/%/&/'/(/)/*/+/,/-/.///:/;/</=/>/?/_/@/[/\ /]/^/{ / | /}~ `}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="personal_details_row">
                                            <div className="label"/>
                                            <div className="meaning">
                                                <input type="checkbox" className="opacity"/>{/*~~~when select All Products other checkboxes have class opacity~~~~*/}
                                                <span className="meaning_label">Sports</span>
                                            </div>
                                            <div className="message help">
                                                <div className="message_text help">
                                                    Please select at least one Product

                                                </div>
                                                <div className="message_info help">
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

                                                        <p> {` /!/"/#/$/%/&/'/(/)/*/+/,/-/.///:/;/</=/>/?/_/@/[/\ /]/^/{ / | /}~ `}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="personal_details_row">
                                            <div className="label"/>
                                            <div className="meaning">
                                                <input type="checkbox"/>
                                                <span className="meaning_label">Poker</span>
                                            </div>
                                            <div className="message help">
                                                <div className="message_text help">
                                                    Please select at least one Product

                                                </div>
                                                <div className="message_info help">
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

                                                        <p> {` /!/"/#/$/%/&/'/(/)/*/+/,/-/.///:/;/</=/>/?/_/@/[/\ /]/^/{ / | /}~ `}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="personal_details_row">
                                            <div className="label"/>
                                            <div className="meaning">
                                                <input type="checkbox"/>
                                                <span className="meaning_label">Casino</span>
                                            </div>
                                            <div className="message help">
                                                <div className="message_text help">
                                                    Please select at least one Product

                                                </div>
                                                <div className="message_info help">
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

                                                        <p> {` /!/"/#/$/%/&/'/(/)/*/+/,/-/.///:/;/</=/>/?/_/@/[/\ /]/^/{ / | /}~ `}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="personal_details_row">
                                            <div className="label"/>
                                            <div className="meaning">
                                                <input type="checkbox"/>
                                                <span className="meaning_label">Games/Bingo/Vegas</span>
                                            </div>
                                            <div className="message help">
                                                <div className="message_text help">
                                                    Please select at least one Product
                                                </div>
                                                <div className="message_info help">
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

                                                        <p> {` /!/"/#/$/%/&/'/(/)/*/+/,/-/.///:/;/</=/>/?/_/@/[/\ /]/^/{ / | /}~ `}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="personal_details_row">
                                            <div className="label"/>
                                            <div className="meaning btn_group">
                                                <div className="change_btn update no_active w134">Continue</div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>                             
                            :""
                        }
                        {this.state.myAccRespTab == "AccountClosure" ?
                        <div className="TabContainer ResponsibleGamblingControls">                        
                             <div className="DetailsSteck">                                
                                    <div className="DetailsSteck_Header">
                                        <div className="DetailsSteck_Title">Account Closure</div>
                                    </div>
                                    <div className="DetailsSteck_Content">
                                        <div className="DetailsSteck_ContentText">
                                              <p>If you want to stop playing with us, you may do so by closing your account.</p>
                                              <p>If you feel you are at risk of developing a gambling problem or believe you currently have a gambling problem, please visit our <a href="#" title="Self-Exclusion">Self-Exclusion</a> page.</p>
                                              <p>Once you close your account, you will no longer be able to deposit funds or play in any of our products. Should you wish to re-open your account during this period, you will be required to answer additional security questions to safeguard your account.</p>
                                              <p>Please note that verification of your account is still outstanding. Until we have successfully verified your account, it will not be possible to withdraw any remaining balance you may have. You can verify your account by visiting the <a href="#" title="Know Your Customer">Know Your Customer</a> page.</p>
                                              <p>In order to finalise the closure of your account, please select the closure period and the main reason for closure.</p>
                                        </div>
                                        <div className="closureForm">
                                            <div className="list_closure_period">
                                                <div className="personal_details_row">
                                                    <div className="label">Closure Period</div>
                                                    <div className="meaning radio_meaning">
                                                        <input type="radio"/>
                                                        <span className="meaning_label">Duration</span>
                                                    </div>
                                                    <select name="select_duration" id="select_duration" className="meaning">
                                                        <option value="0">Please select</option>
                                                        <option value="1">One Week</option>
                                                        <option value="2">One Month</option>
                                                        <option value="3">3 Months</option>
                                                        <option value="4">6 Months</option>
                                                        <option value="5">12 Months</option>
                                                        <option value="6">Indefinitely</option>
                                                    </select>
                                                    <div className="valid_icon valid_green"></div>
                                                    <div className="message help">
                                                        <div className="message_text help">
                                                            Please select a Closure Period from the list, or a date from which you would like your account to be reopened.
                                                        </div>
                                                        <div className="message_info help">
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

                                                                <p> {` /!/"/#/$/%/&/'/(/)/*/+/,/-/.///:/;/</=/>/?/_/@/[/\ /]/^/{ / | /}~ `}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="personal_details_row">
                                                    <div className="label"/>
                                                    <div className="meaning radio_meaning">
                                                        <input type="radio"/>
                                                        <span className="meaning_label">Until</span>
                                                    </div>
                                                    <div className="meaning closure_period_until">
                                                        <select name="period_day" id="period_day">
                                                            <option selected="selected" value="0">Day</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                            <option value="7">7</option>
                                                            <option value="8">8</option>
                                                            <option value="9">9</option>
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
                                                        <select name="period_month" id="period_month">
                                                            <option selected="selected" value="0">Month</option>
                                                            <option value="1">January</option>
                                                            <option value="2">February</option>
                                                            <option value="3">March</option>
                                                            <option value="4">April</option>
                                                            <option value="5">May</option>
                                                            <option value="6">June</option>
                                                            <option value="7">July</option>
                                                            <option value="8">August</option>
                                                            <option value="9">September</option>
                                                            <option value="10">October</option>
                                                            <option value="11">November</option>
                                                            <option value="12">December</option>
                                                        </select>
                                                        <select name="period_year" id="period_year">
                                                            <option selected="selected" value="0">Year</option>
                                                            <option value="2018">2018</option>
                                                            <option value="2019">2019</option>
                                                        </select>
                                                    </div>
                                                <div className="valid_icon valid_green"></div>
                                                <div className="message help">
                                                    <div className="message_text help">
                                                        Please select a Closure Period from the list, or a date from which you would like your account to be reopened.
                                                    </div>
                                                    <div className="message_info help">
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

                                                            <p> {` /!/"/#/$/%/&/'/(/)/*/+/,/-/.///:/;/</=/>/?/_/@/[/\ /]/^/{ / | /}~ `}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                            <p className="note">Please select the main reason for closure:</p>
                                            <div className="list_reason_closure">
                                                <div className="personal_details_row">
                                                    <div className="label"/>
                                                    <div className="meaning">
                                                        <input value ="no_time" name="reason_closure" type="radio"/>
                                                        <span className="meaning_label">Do not have time, e.g. going on a holiday, preparing for an exam etc</span>
                                                    </div>
                                                </div>
                                                <div className="personal_details_row">
                                                    <div className="label"/>
                                                    <div className="meaning">
                                                        <input value ="no_interest" name="reason_closure" type="radio"/>
                                                        <span className="meaning_label">Not interested in online gambling anymore</span>
                                                    </div>
                                                </div>
                                                <div className="personal_details_row">
                                                    <div className="label"/>
                                                    <div className="meaning">
                                                        <input value="no_service" name="reason_closure" type="radio"/>
                                                        <span className="meaning_label">Not happy with your service/product</span>
                                                    </div>
                                                </div>
                                                <div className="personal_details_row">
                                                    <div className="label"/>
                                                    <div className="meaning">
                                                        <input value ="no_offers" name="reason_closure" type="radio"/>
                                                        <span className="meaning_label">Not happy with your offers</span>
                                                    </div>
                                                </div>
                                                <div className="personal_details_row">
                                                    <div className="label"/>
                                                    <div className="meaning">
                                                        <input value ="other_provider" name="reason_closure" type="radio"/>
                                                        <span className="meaning_label">Want to play (or already playing) at a different provider</span>
                                                    </div>
                                                </div>
                                                <div className="personal_details_row">
                                                    <div className="label"/>
                                                    <div className="meaning">
                                                        <input value="no_specify" name="reason_closure" type="radio"/>
                                                        <span className="meaning_label">Prefer not to specify</span>
                                                    </div>
                                                </div>
                                                <div className="personal_details_row">
                                                    <div className="label"/>
                                                    <div className="meaning btn_group column ">
                                                        <div className="change_btn update no_active w134">Continue</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>                             
                            :""
                        }
                        {this.state.myAccRespTab == "RealityChecks" ?
                        <div className="TabContainer ResponsibleGamblingControls">                        
                             <div className="DetailsSteck">                                
                                    <div className="DetailsSteck_Header">
                                        <div className="DetailsSteck_Title">Reality Checks</div>
                                    </div>
                                    <div className="DetailsSteck_Content">
                                        <div className="DetailsSteck_ContentText">
                                              <p>To support you in managing the amount of time you spend playing, you can set up a Reality Check on your account. Once this is set, a pop-up alert will be displayed as a reminder that you have been logged into your account for the specified period of time (excludes poker game play).</p>
                                              <p>If you wish to reduce your Reality Check setting, the changes selected will be applied straight away. Any increases to this setting will be applied 24 hours after the request.</p>
                                              <p>When the Reality Check alert is received you can choose to remain logged in, view your account history or log out of your account. If you choose to remain logged in then you will receive another alert after the same length of time so that you can keep track of your total time spent playing.</p>
                                              <p>Your existing Reality Check setting is: <span className="updateWide">No Check</span></p>
                                      </div>
                                        <div className={`block_wrapp ${this.state.depositLimits == false ? "show" : ""}`}>
                                            <div className="personal_details_row">
                                                <div className="label"/>
                                                <div className="meaning btn_group center">
                                                    <div className="change_btn update w150" onClick={()=>this.toggle('depLimit')}>Change</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`personal_details_change_limits ${this.state.depositLimits == true ? "show" : "" }`}>
                                            <div className="personal_details_row">
                                                <div className="label">Reality Check</div>
                                                <select name="Reality_Check" id="Reality_Check" className="meaning">
                                                    <option value="10">10 minutes</option>
                                                    <option value="11">20 minutes</option>
                                                    <option value="12">30 minutes</option>
                                                    <option value="1">1 Hour</option>
                                                    <option value="2">2 Hours</option>
                                                    <option value="3">4 Hours</option>
                                                    <option value="4">6 Hours</option>
                                                    <option value="5">8 Hours</option>
                                                    <option selected="selected" value="9">No Check</option>
                                                </select>
                                                <div className="message help">
                                                    <div className="message_text help">
                                                        Please select a Reality Check setting. A Reality Check will let you know when you have been logged in for the specified amount of time.
                                                    </div>
                                                    <div className="message_info help">
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

                                                            <p> {` /!/"/#/$/%/&/'/(/)/*/+/,/-/.///:/;/</=/>/?/_/@/[/\ /]/^/{ / | /}~ `}</p>
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
                                                        Please confirm your password.
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
                                                            {`!"#$%&'()*+,-./:;<=>?_@[\\]^\`{|}~`}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="personal_details_row">
                                                <div className="label"/>
                                                <div className="meaning btn_group">
                                                    <div className="change_btn update" onClick={()=>this.showModal('error')}>Submit</div>
                                                    <div className="change_btn cancel" onClick={()=>this.toggle('depLimit')}>Cancel</div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                             </div>
                        </div>                             
                            :""
                        }
                    </div>
                    
                    :""
                }
                {this.state.pop_up_info ?
                    <div className="Modal_wrapp">
                        <PopUpInfo closeModal = {(type) => this.closeModal(type)}/>
                    </div>
                :""
                }
                {this.state.pop_up_error ?
                    <div className="Modal_wrapp">
                        <PopUpEntriesError
                            closeModal={(type) => this.closeModal(type)}
                            errors={{
                                error_password: this.state.error_password,
                                error_new_password: this.state.error_new_password,
                                error_new_conf_password: this.state.error_new_conf_password,
                                error_address_building_number: this.state.error_address_building_number,
                                error_address_unit_number: this.state.error_address_building_number,
                                error_address_street: this.state.error_address_street,
                                error_address_postcode: this.state.error_address_postcode,
                                error_city: this.state.error_city,
                                error_email: this.state.error_email,
                                error_phone: this.state.error_phone,
                                error_security_code: this.state.error_security_code,
                                error_security_code_new: this.state.error_security_code_new,
                                error_security_conf_code_new: this.state.error_security_conf_code_new
                            }}
                            undefinedServerError={this.state.undefinedServerError}
                        />
                    </div>
                : ""
                }

                {this.state.pop_up_update ?
                    <div className="Modal_wrapp">
                        <PopUpUpdate closeModal={(type) => this.closeModal(type)}/>
                    </div>
                    : ""
                }


                        <div className="Modal_wrapp none pop_up_wait">
                            <PopUpWait/>
                        </div>



            </div>
        )

    }
}

export default MyAccount;