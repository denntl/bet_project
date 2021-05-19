import React from 'react';

class ValidateMessageHelper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showContactInfo: false,
            displayErrorIcon: this.props.errorIcon,
            errorMessageBoldText: this.props.boldText,
            errorMessageText: this.props.text,
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            displayErrorIcon: nextProps.errorIcon,
            errorMessageBoldText: nextProps.boldText,
            errorMessageText: nextProps.text
        })
    }

    toggleContacts=()=>{
        console.log(!this.state.showContactInfo);
        this.setState({showContactInfo: !this.state.showContactInfo});
    }

    render() {
        return <div>
            {this.state.displayErrorIcon ? <div className="valid_icon"></div> : ''}
            {this.state.errorMessageText.length ?
                <div className="message error">
                    <div className="message_text error">
                        <span className="bold_text">{this.state.errorMessageBoldText}</span>
                        <br/>{this.state.errorMessageText}
                    </div>
                    <div className="message_info error">
                        <a href="javascript:void(0)" className="bold_link" onClick={()=>this.toggleContacts()}>Need Help?</a>

                        {this.state.showContactInfo ? <div className="contact_info" style={{display: 'block'}}>
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
                        </div> : ''}

                        <div className="symbols">
                                The following symbols may be used as part of your password:
                                <p> {` !"#$%&'()*+,-./:;<=>?_@[\\]^\`{|}~ `}</p>
                        </div>
                    </div>
                </div> : ''}
        </div>;

    }
}

ValidateMessageHelper.defaultProps = {
    errorIcon: false,
    boldText: 'The field must be completed',
    text: '',
};

export default ValidateMessageHelper;