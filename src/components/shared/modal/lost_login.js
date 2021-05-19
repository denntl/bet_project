import React from 'react';
import {getRestorePasswordStep1, getRestorePasswordStep2} from "../../helpers/data";
import LostLoginError from "./lost_login_error";
import LostLoginRequestUnsuccessful from "./lost_login_request_unsuccessfull";
import LostLoginRequestSuccessful from "./lost_login_request_successfull";

class LostLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            helpUserName: false,
            helpEmail: false,
            helpSecurityNum: false,
            helpBirth: false,
            helpNewPassword: false,
            helpNewPasswordConfirm: false,

            errorEmail: false,
            errorSecurityNum: false,
            errorBirth: false,
            errorNewPassword: false,
            errorNewPasswordConfirm: false,

            errorEmailIcon: false,
            errorSecurityNumIcon: false,
            errorBirthIcon: false,
            errorNewPasswordIcon: false,
            errorNewPasswordConfirmIcon: false,

            successEmailIcon: false,
            successSecurityNumIcon: false,
            successBirthIcon: false,
            successNewPasswordIcon: false,
            successNewPasswordConfirmIcon: false,

            valueSecurity: '',
            valueEmail: '',
            valueDayOfBirthDay: '',
            valueMonthOfBirthDay: '',
            valueYearOfBirthDay: '',
            valueNewPassword: '',
            valueNewPasswordConfirm: '',

            clickedField: '',

            displayResetPassword: false,

            restore_token: '',
            loginToken: '',

            showLostLoginRequestUnsuccessful: false,
            showLostLoginRequestSuccessful: false
        };
        this.showContacts = this.showContacts.bind(this);
    }

 handleUserInput=(e)=>{

        console.log('handleUserInput', e.target.name, e.target.value);

     switch (e.target.name) {
         case 'email':
             this.setState({valueEmail: e.target.value});
             break;
         case 'securityNum':
             this.setState({valueSecurity: e.target.value});
             break;
         case 'dayOfBirthDay':
             this.setState({valueDayOfBirthDay: e.target.value});
             break;
         case 'monthOfBirthDay':
             this.setState({valueMonthOfBirthDay: e.target.value});
             break;
         case 'yearOfBirthDay':
             this.setState({valueYearOfBirthDay: e.target.value});
             break;
         case 'newPassword':
             this.setState({valueNewPassword: e.target.value});
             break;
         case 'newPasswordConfirm':
             this.setState({valueNewPasswordConfirm: e.target.value});
             break;
     }
 }

 validateEmail=(email)=> {
     return /\S+@\S+\.\S+/.test(email);
 }

 validateSecurity(valueSecurity){
    return !(valueSecurity.length != 4 || /\D/.test(valueSecurity));
 }
 
 validateDayOfBirthDay(dayOfBirthDay){
    return dayOfBirthDay > 0 && dayOfBirthDay < 32;
 }

 validateMonthOfBirthDay(monthOfBirthDay){
    return monthOfBirthDay > 0 && monthOfBirthDay < 13;
 }

 validateYearOfBirthDay(yearOfBirthDay) {
     return yearOfBirthDay > 1900 && yearOfBirthDay < 3000
 }

 validatePassword(isConfirm){
    if(isConfirm){
        return this.state.valueNewPassword == this.state.valueNewPasswordConfirm &&
            this.state.valueNewPasswordConfirm.length;
    }

    return this.state.valueNewPassword.length > 5;
 }

successButtonClick =()=> {
   this.props.closeModal('lost');
}

closeModal =(type)=> {
    switch(type){
        case 'LostLoginRequestUnsuccessful':
            this.setState({showLostLoginRequestUnsuccessful: false});
            break;
        case 'LostLoginRequestSuccessful':
            this.setState({showLostLoginRequestSuccessful: false});
            break;
    }
}

clickSubmit(){

    let catchError = false;

    if(this.state.displayResetPassword){
        this.setState({
            errorNewPassword: false,
            errorNewPasswordConfirm: false,
            helpNewPassword: false,
            helpNewPasswordConfirm: false,
        });

        if (!this.validatePassword(false)) {
            this.setState({
                errorNewPasswordIcon: true,
                successNewPasswordIcon: false
            });
            catchError = true;
        } else {
            this.setState({
                errorNewPasswordIcon: false,
                successNewPasswordIcon: true
            });
        }

        if (!this.validatePassword(true)) {
            this.setState({
                errorNewPasswordConfirmIcon: true,
                successNewPasswordConfirmIcon: false
            });
            catchError = true;
        } else {
            this.setState({
                errorNewPasswordConfirmIcon: false,
                successNewPasswordConfirmIcon: true
            });
        }

        if (!catchError) {

            let options = {
                restore_token: this.state.restoreToken,
                password: this.state.valueNewPassword
            };

            getRestorePasswordStep2(options, function (err, data) {
                if (!err) {

                    console.log('пришла дата 2 запрос', typeof data, data);

                    let loginToken = typeof data['token'] != 'undefined' ? data['token'] : '';

                    this.props.setToken(loginToken);

                    this.setState({
                        showLostLoginRequestSuccessful: true,
                        loginToken: loginToken,
                        clickedField: '',
                        successNewPasswordIcon: false,
                        successNewPasswordConfirmIcon: false
                    });
                } else {

                    this.setState({
                        showLostLoginRequestUnsuccessful: true,
                        clickedField: '',
                        errorNewPasswordIcon: true,
                        errorNewPasswordConfirmIcon: true,
                        successNewPasswordIcon: false,
                        successNewPasswordConfirmIcon: false
                    });
                    console.log('ошибочка 2й запрос', err);
                }
            }.bind(this))
        }

    } else {

        this.setState({
            errorEmail: false,
            errorSecurityNum: false,
            errorBirth: false,

            helpUserName: false,
            helpEmail: false,
            helpSecurityNum: false,
            helpBirth: false,
        });

        if (!this.validateEmail(this.state.valueEmail)) {
            this.setState({
                errorEmailIcon: true,
                successEmailIcon: false
            });
            catchError = true;
        } else {
            this.setState({
                errorEmailIcon: false,
                successEmailIcon: true
            });
        }

        if (!this.validateSecurity(this.state.valueSecurity)) {
            this.setState({
                errorSecurityNumIcon: true,
                successSecurityNumIcon: false
            });

            catchError = true;
        } else {
            this.setState({
                errorSecurityNumIcon: false,
                successSecurityNumIcon: true
            });
        }

        if (
            !this.validateDayOfBirthDay(this.state.valueDayOfBirthDay) ||
            !this.validateMonthOfBirthDay(this.state.valueMonthOfBirthDay) ||
            !this.validateYearOfBirthDay(this.state.valueYearOfBirthDay)
        ) {
            this.setState({
                errorBirthIcon: true,
                successBirthIcon: false
            });

            catchError = true;
        } else {
            this.setState({
                errorBirthIcon: false,
                successBirthIcon: true
            });
        }

        if (!catchError) {

            let options = {
                email: this.state.valueEmail,
                dob: this.state.valueYearOfBirthDay + '-' + this.state.valueMonthOfBirthDay + '-' + this.state.valueDayOfBirthDay,
                security_code: parseInt(this.state.valueSecurity)
            };

            getRestorePasswordStep1(options, function (err, data) {
                if (!err) {

                    console.log('пришла дата', typeof data, data);

                    let restoreToken = typeof data.restore_token == 'string' && data.restore_token.length ?
                        data.restore_token : '';

                    this.setState({
                        restoreToken: restoreToken,
                        clickedField: '',
                        displayResetPassword: true,
                        successEmailIcon: false,
                        successSecurityNumIcon: false,
                        successBirthIcon: false,
                    });
                } else {

                    this.setState({
                        showLostLoginRequestUnsuccessful: true,
                        clickedField: '',
                        successEmailIcon: false,
                        successSecurityNumIcon: false,
                        successBirthIcon: false,
                        errorEmailIcon: true,
                        errorSecurityNumIcon: true,
                        errorBirthIcon: true,
                    });

                    console.log('ошибочка', err);
                }
            }.bind(this))
        }
    }
}

 clickHandler=(name)=> {

    console.log('clickHandler ', name, this.state.clickedField);

    if(this.state.clickedField){

        switch (this.state.clickedField) {
            case 'username':
                break;

            case 'valueEmail':
                this.setState({
                    errorEmail: false
                });
                if(!this.validateEmail(this.state.valueEmail)){
                    this.setState({
                        errorEmailIcon: true,
                        successEmailIcon: false
                    });
                } else {
                    this.setState({
                        errorEmailIcon: false,
                        successEmailIcon: true
                    });
                }
                break;

            case 'valueSecurity':
                this.setState({
                    errorSecurityNum: false
                });
                if(!this.validateSecurity(this.state.valueSecurity)) {
                    this.setState({
                        errorSecurityNumIcon: true,
                        successSecurityNumIcon: false
                    });
                } else {
                    this.setState({
                        errorSecurityNumIcon: false,
                        successSecurityNumIcon: true
                    });
                }
                break;

            case 'dayOfBirthDay':
            case 'monthOfBirthDay':
            case 'yearOfBirthDay':
                this.setState({
                    errorBirth: false
                });
                if(
                    !this.validateDayOfBirthDay(this.state.valueDayOfBirthDay) ||
                    !this.validateMonthOfBirthDay(this.state.valueMonthOfBirthDay) ||
                    !this.validateYearOfBirthDay(this.state.valueYearOfBirthDay)
                ) {
                    this.setState({
                        errorBirthIcon: true,
                        successBirthIcon: false
                    });
                } else {
                    this.setState({
                        errorBirthIcon: false,
                        successBirthIcon: true
                    });
                }
                break;

            case 'newPassword':
                this.setState({
                    errorNewPassword: false
                });
                if(!this.validatePassword(false)) {
                    this.setState({
                        errorNewPasswordIcon: true,
                        successNewPasswordIcon: false
                    });
                } else {
                    this.setState({
                        errorNewPasswordIcon: false,
                        successNewPasswordIcon: true
                    });
                }
                break;

            case 'newPasswordConfirm':
                this.setState({
                    errorNewPasswordConfirm: false
                });
                if(!this.validatePassword(true)) {
                    this.setState({
                        errorNewPasswordConfirmIcon: true,
                        successNewPasswordConfirmIcon: false
                    });
                } else {
                    this.setState({
                        errorNewPasswordConfirmIcon: false,
                        successNewPasswordConfirmIcon: true
                    });
                }
                break;
        }
    }

    let states = {};
     switch (name) {
         case 'username':
             this.setState({
                 clickedField: 'username',
                 helpUserName: true,
                 helpEmail: false,
                 helpSecurityNum: false,
                 helpBirth: false,
             });
             break;

         case 'email':
             states = {
                 helpUserName: false,
                 helpSecurityNum: false,
                 helpBirth: false
             };
             if(this.state.errorEmailIcon){
                 states['errorEmail'] = true;
             } else {
                 states['helpEmail'] = true;
             }
             states['clickedField'] = 'valueEmail';
             this.setState(states);
             break;

         case 'securityNum':
             states = {
                 helpUserName: false,
                 helpEmail: false,
                 helpBirth: false
             };
             if(this.state.errorSecurityNumIcon){
                 states['errorSecurityNum'] = true;
             } else {
                 states['helpSecurityNum'] = true;
             }
             states['clickedField'] = 'valueSecurity';
             this.setState(states);
             break;

         case 'dayOfBirthDay':
             states = {
                 helpUserName: false,
                 helpEmail: false,
                 helpSecurityNum: false
             };
             if(this.state.errorBirthIcon){
                 states['errorBirth'] = true;
             } else {
                 states['helpBirth'] = true;
             }
             states['clickedField'] = 'dayOfBirthDay';
             this.setState(states);
             break;

         case 'monthOfBirthDay':
             states = {
                 helpUserName: false,
                 helpEmail: false,
                 helpSecurityNum: false
             };
             if(this.state.errorBirthIcon){
                 states['errorBirth'] = true;
             } else {
                 states['helpBirth'] = true;
             }
             states['clickedField'] = 'monthOfBirthDay';
             this.setState(states);
             break;

         case 'yearOfBirthDay':
             states = {
                 helpUserName: false,
                 helpEmail: false,
                 helpSecurityNum: false
             };
             if(this.state.errorBirthIcon){
                 states['errorBirth'] = true;
             } else {
                 states['helpBirth'] = true;
             }
             states['clickedField'] = 'yearOfBirthDay';
             this.setState(states);
             break;

         case 'newPassword':
             states = {
                 helpNewPasswordConfirm: false
             };
             if(this.state.errorNewPasswordIcon){
                 states['errorNewPassword'] = true;
             } else {
                 states['helpNewPassword'] = true;
             }
             states['clickedField'] = 'newPassword';
             this.setState(states);
             break;

         case 'newPasswordConfirm':
             states = {
                 helpNewPassword: false
             };
             if(this.state.errorNewPasswordConfirmIcon){
                 states['errorNewPasswordConfirm'] = true;
             } else {
                 states['helpNewPasswordConfirm'] = true;
             }
             states['clickedField'] = 'newPasswordConfirm';
             this.setState(states);
             break;
     }
 }

    showContacts(){
        if ($('.contact_info').hasClass('show'))
            $('.contact_info').removeClass('show')
        else(
            $('.contact_info').addClass('show')
        )

    }

    render() {
        return(
            <div id="lost_login" className="modal_bet new_window" role="dialog">
                <div className="modal_content">
                    <div className="modal_header full">
                        <button type="button" className="close" onClick={() => this.props.closeModal('lost')}></button>

                    </div>
                    <div className="modal-body lost_login">
                        <div className="block_before_form">
                            <p className="title">Lost Login</p>
                            <p className="text_before_form">
                                Please enter your account details below to change your password. For security reasons you must enter at least your Email Address, Security Number and Date of Birth. If you know your Username, please also enter this as it will assist in identifying your account.
                            </p>
                        </div>
                        <div className="change_pass">
                            <p className="title">Change Your Password</p>
                        </div>

                            <p className="change_pass_notice"><span className="red_star">*</span> Fields must be completed</p>
                        <form action="post" className="form_lost_login">
                            <div className="form-group">
                                <label className="control-label">Username</label>
                                <input disabled={this.state.displayResetPassword} type="text" name="username" id="username" onClick={()=>this.clickHandler('username')}/>

                                {this.state.helpUserName ?
                                    <div className="message help">
                                        <div className="message_text help">
                                            Please enter your bet365 username. This is not mandatory but will help us to validate your account details.
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
                                    :""}
                            </div>
                            <div className="form-group">
                                <label className="control-label">Email Adress <span className="red_star">*</span></label>
                                <input disabled={this.state.displayResetPassword} type="email" name="email" id="email" onChange={this.handleUserInput} onClick={()=>this.clickHandler('email')}/>
                                {this.state.errorEmailIcon ? <div className="valid_icon"></div> : '' }
                                {this.state.successEmailIcon ? <div className="valid_icon valid_green"></div> : '' }
                                {this.state.helpEmail && !this.state.errorEmail ?
                                    <div className="message help">
                                    <div className="message_text help">
                                        Please enter your email address.
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

                                            <p>{` /!/"/#/$/%/&/'/(/)/*/+/,/-/.///:/;/</=/>/?/_/@/[/\ /]/^/{ / | /}~ `}</p>
                                        </div>
                                    </div>
                                </div>
                                    :""}
                                {this.state.errorEmail ?
                                <div className="message error">
                                    <div className="message_text error">
                                        <span className="bold_text">The field must be completed</span>
                                        Please enter your email address.
                                    </div>
                                    <div className="message_info error">
                                        <a href="#" className="bold_link" onClick={()=>this.showContacts()}>Need Help?</a>
                                        {this.state.helpСontacts ?
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
                                            :""}
                                        <div className="symbols">
                                            The following symbols may be used as part of your password:
                                            <p>{` /!/"/#/$/%/&/'/(/)/*/+/,/-/.///:/;/</=/>/?/_/@/[/\ /]/^/{ / | /}~ `}</p>
                                        </div>
                                    </div>
                                </div>
                                    :""}
                            </div>
                            <div className="form-group">
                                <label className="control-label">Four-digit Security Number <span className="red_star">*</span></label>
                                <input disabled={this.state.displayResetPassword} type="text" name="securityNum" maxLength={4} onChange={this.handleUserInput} onClick={()=>this.clickHandler('securityNum')}/>
                                {this.state.errorSecurityNumIcon ? <div className="valid_icon"></div> : '' }
                                {this.state.successSecurityNumIcon ? <div className="valid_icon valid_green"></div> : '' }
                                {this.state.helpSecurityNum && !this.state.errorSecurityNum ?
                                    <div className="message help">
                                    <div className="message_text help">
                                        Please enter your four digit security number.
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
                                            <p>{` /!/"/#/$/%/&/'/(/)/*/+/,/-/.///:/;/</=/>/?/_/@/[/\ /]/^/{ / | /}~ `}</p>
                                        </div>
                                    </div>
                                </div>
                                    :""}
                                {this.state.errorSecurityNum ?
                                    <div className="message error">
                                    <div className="message_text error">
                                        <span className="bold_text">The field must be completed</span>
                                        Please enter your four digit security number.
                                    </div>
                                    <div className="message_info error">
                                        <a href="#" className="bold_link" onClick={()=>this.showContacts()}>Need Help?</a>
                                        {this.state.helpСontacts ?
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
                                            :""}
                                        <div className="symbols">
                                            The following symbols may be used as part of your password:
                                            <p>{` /!/"/#/$/%/&/'/(/)/*/+/,/-/.///:/;/</=/>/?/_/@/[/\ /]/^/{ / | /}~ `}</p>
                                        </div>
                                    </div>
                                </div>
                                    :""}
                            </div>

                            <div className="form-group">
                                <label className="control-label">Date of Birth <span className="red_star">*</span></label>
                                <select disabled={this.state.displayResetPassword} name="dayOfBirthDay" id="DateOfBirthDay_lost_login" onChange={this.handleUserInput} onClick={()=>this.clickHandler('dayOfBirthDay')}>
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

                                {this.state.helpBirth ?
                                    <div className="message help">
                                        <div className="message_text help">
                                            Please select your date of birth.
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

                                                <p>{` /!/"/#/$/%/&/'/(/)/*/+/,/-/.///:/;/</=/>/?/_/@/[/\ /]/^/{ / | /}~ `}</p>
                                            </div>
                                        </div>
                                    </div>
                                    : ""}
                                {this.state.errorBirth ?
                                <div className="message error">
                                    <div className="message_text error">
                                        <span className="bold_text">The field must be completed</span>
                                        Please select your date of birth.
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

                                            <p>{` /!/"/#/$/%/&/'/(/)/*/+/,/-/.///:/;/</=/>/?/_/@/[/\ /]/^/{ / | /}~ `}</p>
                                        </div>
                                    </div>
                                </div>
                                    :""}

                                <select disabled={this.state.displayResetPassword} name="monthOfBirthDay" id="MonthOfBirthDay_lost_login" onChange={this.handleUserInput} onClick={()=>this.clickHandler('monthOfBirthDay')}>
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
                                {this.state.helpBirth ?
                                    <div className="message help">
                                        <div className="message_text help">
                                            Please select your date of birth.
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
                                    : ""}
                                {this.state.errorBirth ?
                                    <div className="message error">
                                        <div className="message_text error">
                                            <span className="bold_text">The field must be completed</span>
                                            Please select your date of birth.
                                        </div>
                                        <div className="message_info error">
                                            <a href="#" className="bold_link" onClick={()=>this.showContacts()}>Need Help?</a>
                                            {this.state.helpСontacts ?
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
                                                :""}
                                            <div className="symbols">
                                                The following symbols may be used as part of your password:
                                                <p>{` /!/"/#/$/%/&/'/(/)/*/+/,/-/.///:/;/</=/>/?/_/@/[/\ /]/^/{ / | /}~ `}</p>

                                            </div>
                                        </div>
                                    </div>
                                    :""}
                                <select disabled={this.state.displayResetPassword} name="yearOfBirthDay" id="YearOfBirthDay_lost_login" onChange={this.handleUserInput} onClick={()=>this.clickHandler('yearOfBirthDay')}>
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

                                {this.state.errorBirthIcon ? <div className="valid_icon"></div> : '' }
                                {this.state.successBirthIcon ? <div className="valid_icon valid_green"></div> : '' }

                                {this.state.helpBirth && !this.state.errorBirth ?
                                    <div className="message help">
                                        <div className="message_text help">
                                            Please select your date of birth.
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

                                                <p>{` /!/"/#/$/%/&/'/(/)/*/+/,/-/.///:/;/</=/>/?/_/@/[/\ /]/^/{ / | /}~ `}</p>
                                            </div>
                                        </div>
                                    </div>
                                    : ""}
                                {this.state.errorBirth ?
                                    <div className="message error">
                                        <div className="message_text error">
                                            <span className="bold_text">The field must be completed</span>
                                            Please select your date of birth.
                                        </div>
                                        <div className="message_info error">
                                            <a href="#" className="bold_link" onClick={()=>this.showContacts()}>Need Help?</a>
                                            {this.state.helpСontacts ?
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
                                                :""}
                                            <div className="symbols">
                                                The following symbols may be used as part of your password:

                                                <p>{` /!/"/#/$/%/&/'/(/)/*/+/,/-/.///:/;/</=/>/?/_/@/[/\ /]/^/{ / | /}~ `}</p>
                                            </div>
                                        </div>
                                    </div>
                                    :""}
                            </div>

                            {this.state.displayResetPassword ? <div className="form-group">
                                <label className="control-label">New password <span className="red_star">*</span></label>
                                <input disabled={this.state.loginToken.length > 0} type="password" name="newPassword" onChange={this.handleUserInput} onClick={()=>this.clickHandler('newPassword')}/>
                                {this.state.errorNewPasswordIcon ? <div className="valid_icon"></div> : '' }
                                {this.state.successNewPasswordIcon ? <div className="valid_icon valid_green"></div> : '' }
                                {this.state.helpNewPassword && !this.state.errorNewPassword ?
                                    <div className="message help">
                                        <div className="message_text help">
                                            Please enter a password. This must be 6 -32 characters long using letters, numbers and accepted symbols only, with no spaces. Your password should not contain your username, name, email address or year of birth. You can increase the strength of your password by using a mixture of letters, numbers and symbols. Please remember that passwords are case sensitive.
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

                                                <p>{` /!/"/#/$/%/&/'/(/)/*/+/,/-/.///:/;/</=/>/?/_/@/[/\ /]/^/{ / | /}~ `}</p>
                                            </div>
                                        </div>
                                    </div>
                                    :""}
                                {this.state.errorNewPassword ?
                                    <div className="message error">
                                        <div className="message_text error">
                                            <span className="bold_text">The field must be completed</span>
                                            Please enter your new password.
                                        </div>
                                        <div className="message_info error">
                                            <a href="#" className="bold_link" onClick={()=>this.showContacts()}>Need Help?</a>
                                            {this.state.helpСontacts ?
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
                                                :""}
                                            <div className="symbols">
                                                The following symbols may be used as part of your password:

                                                <p>{` /!/"/#/$/%/&/'/(/)/*/+/,/-/.///:/;/</=/>/?/_/@/[/\ /]/^/{ / | /}~ `}</p>
                                            </div>
                                        </div>
                                    </div>
                                    :""}
                            </div> : ''}

                            {this.state.displayResetPassword ? <div className="form-group">
                                <label className="control-label">New password confirm <span className="red_star">*</span></label>
                                <input disabled={this.state.loginToken.length > 0} type="password" name="newPasswordConfirm" onChange={this.handleUserInput} onClick={()=>this.clickHandler('newPasswordConfirm')}/>
                                {this.state.errorNewPasswordConfirmIcon ? <div className="valid_icon"></div> : '' }
                                {this.state.successNewPasswordConfirmIcon ? <div className="valid_icon valid_green"></div> : '' }
                                {this.state.helpNewPasswordConfirm && !this.state.errorNewPasswordConfirm ?
                                    <div className="message help">
                                        <div className="message_text help">
                                            Please confirm your new password.
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

                                                <p>{` /!/"/#/$/%/&/'/(/)/*/+/,/-/.///:/;/</=/>/?/_/@/[/\ /]/^/{ / | /}~ `}</p>
                                            </div>
                                        </div>
                                    </div>
                                    :""}
                                {this.state.errorNewPasswordConfirm ?
                                    <div className="message error">
                                        <div className="message_text error">
                                            <span className="bold_text">The field must be completed</span>
                                            Please re-enter your password.
                                        </div>
                                        <div className="message_info error">
                                            <a href="#" className="bold_link" onClick={()=>this.showContacts()}>Need Help?</a>
                                            {this.state.helpСontacts ?
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
                                                :""}
                                            <div className="symbols">
                                                The following symbols may be used as part of your password:

                                                <p>{` /!/"/#/$/%/&/'/(/)/*/+/,/-/.///:/;/</=/>/?/_/@/[/\ /]/^/{ / | /}~ `}</p>
                                            </div>
                                        </div>
                                    </div>
                                    :""}
                            </div> : ''}
                            <button disabled={this.state.loginToken.length > 0} type="button" id="CurrentFindAddress" className="modal_btn" onClick={()=>this.clickSubmit()}>Continue</button>

                        </form>

                        <div className="need_help">
                            Need Help? <a href="#">Open Chart</a>
                        </div>

                    </div>
                </div>
                {/*<div className="Modal_wrapp">*/}
                    {/*<LostLoginError/>*/}
                {/*</div>*/}


                {this.state.showLostLoginRequestUnsuccessful ?
                <div className="Modal_wrapp">
                    <LostLoginRequestUnsuccessful closeModal={(type) => this.closeModal(type)} />
                </div> : ''}

                {this.state.showLostLoginRequestSuccessful ?
                <div className="Modal_wrapp">
                    <LostLoginRequestSuccessful successButtonClick={() => this.successButtonClick()} />
                </div> : ''}
            </div>
        )

    }
}

export default LostLogin;