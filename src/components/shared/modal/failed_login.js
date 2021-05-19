import React from 'react';
import {loginRequest} from "../../helpers/data_account";



class FailedLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            passwordValue: '',
            emailValue: ''
        };
    }
    loginFormSubmit=()=>{
        if(this.state.emailValue.length > 0 && this.state.passwordValue.length > 7){
            loginRequest(this.state.emailValue, this.state.passwordValue, function (err, data) {
                if (!err) {
                    if(typeof data.token == 'string' && data.token.length){
                        this.props.setToken(data.token);
                        this.props.failedLoginModalShow(false);
                    }
                }
            }.bind(this))
        }
    }
    handleUserInput=(e)=> {

        console.log('handleUserInput', e.target.name, e.target.value);

        switch (e.target.name) {
            case 'email':
                this.setState({emailValue: e.target.value});
                break;
            case 'password':
                this.setState({passwordValue: e.target.value});
                break;
        }
    }

    render() {
        return(
            <div id="failedLogin" className="modal_bet new_window failedLogin_window" role="dialog">
                <div className="modal_content">
                    <div className="modal_header white">
                        <button type="button" className="close" onClick={() => this.props.failedLoginModalShow(false)}></button>
                        <div className="header_text red">Your details weren't recognised</div>
                        <div className="header_text">Passwords are case sensitive. Your account will become locked after three consecutive failed log in attempts.</div>
                    </div>
                    <div className="modal-body failedLogin">
                        <div className="form_failedLogin">
                            <div className="form-group">
                                <input type="text" placeholder="E-mail" className="failed_input" name="email" onChange={this.handleUserInput}/>
                                <input type="password" placeholder="Password" className="failed_input" name="password" onChange={this.handleUserInput}/>
                                <button  className="modal_btn_failedLogin" onClick={() => this.loginFormSubmit()}>Log In</button>
                            </div>
                        </div>
                        <div className="help_failedLogin">
                            <div className="help_failedLogin_link">Lost Login?</div>
                            <div className="help_failedLogin_link">Do you need help?</div>

                        </div>



                    </div>
                </div>
            </div>
        )

    }
}

export default FailedLogin;
