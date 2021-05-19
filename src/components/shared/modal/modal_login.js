import React from 'react';
import {loginRequest} from "../../helpers/data_account";



class Modal_Login extends React.Component {
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
                        this.props.closeModal();
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
            <div id="bet_slip_modal_login" className="modal_window_login" role="dialog">
                <div className="modal_content">
                    <div className="bet_slip_login">
                        <div className="btn_modal_close" onClick={() => this.props.closeModal()}>×</div>
                        <div className="modal_header">Please log in to place a bet</div>
                        <div className="login_input">
                            <input type="text" name="email" placeholder="E-mail"  onChange={this.handleUserInput} />
                            <input type="password" name="password"  placeholder="Password" onChange={this.handleUserInput} />
                            <button className="login_btn" onClick={() => this.loginFormSubmit()}>Log In</button>
                        </div>
                        <div className="modal_help_block">
                            <p>New Customer?</p>
                            <a href="#" className="link">Join Now</a>
                        </div>

                    </div>
                </div>

            </div>
        )

    }
}

export default Modal_Login;
