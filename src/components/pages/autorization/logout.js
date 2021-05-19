import React from 'react';
import {loginRequest} from "../../helpers/data_account";


class Logout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            passwordValue: '',
            emailValue: ''
        };
    }
    loginFormSubmit=()=>{

        console.log('test')
        if (this.state.emailValue.length > 0 && this.state.passwordValue.length > 5) {
            $('.loginBtn').hide();
            $('.loginBtn.load').show();
            loginRequest(this.state.emailValue, this.state.passwordValue, function (err, data) {
                if (!err) {
                    if (typeof data.token == 'string' && data.token.length) {
                        this.props.setToken(data.token);
                    }
                } else {
                    this.props.failedLoginModalShow(true);
                }
            }.bind(this))
        }

    }
    handleUserInput=(e)=> {

        //  console.log('handleUserInput', e.target.name, e.target.value);

        switch (e.target.name) {
            case 'email':
                this.setState({emailValue: e.target.value});
                break;
            case 'password':
                this.setState({passwordValue: e.target.value});
                break;
        }


    }
    pressEnter=(target)=>{
        if(target.charCode==13) {
            console.log('test')
            if (this.state.emailValue.length > 0 && this.state.passwordValue.length > 5) {
                $('.loginBtn').hide();
                $('.loginBtn.load').show();
                loginRequest(this.state.emailValue, this.state.passwordValue, function (err, data) {
                    if (!err) {
                        if (typeof data.token == 'string' && data.token.length) {
                            this.props.setToken(data.token);
                        }
                    } else {
                        this.props.failedLoginModalShow(true);
                    }
                }.bind(this))
            }
        }
    }


    render() {
        return(
            <div className="user_block_wrapper">
                <div className="user_block ">
                    <div className="input_block" >
                        <input type="text" className="input_field light_green_text" name="email" placeholder="Username" onChange={this.handleUserInput} />
                        <input type="password" className="input_field light_green_text" name="password" placeholder="Password" onChange={this.handleUserInput}  onKeyPress={this.pressEnter} />
                        <button type="submit" className="loginBtn " id="loginBtn" onClick={() => this.loginFormSubmit()}>GO</button>
                        <button className="loginBtn load">
                            <span className="bs-BtnText_NoMessageSpinner"></span>
                        </button>

                    </div>
                    <div className="helper_block">
                        <a href="#" onClick={() => this.props.showForm("join")}>Join Now</a>
                        <a href="#" onClick={() => this.props.showForm("lost")}>Lost Login?</a>
                    </div>
                </div>
            </div>
        )

    }
}

export default Logout;