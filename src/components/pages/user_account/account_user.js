import React from 'react';
import AccountTabs from "./account_nav/account_tabs";



class AccountUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: this.props.activePartAccountUser,
            profile: this.props.profile,
            loginToken: this.props.loginToken,
            showUserBal:this.props.showUserBal
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            activePage: nextProps.activePartAccountUser,
            profile: nextProps.profile,
            loginToken: nextProps.loginToken,
            showUserBal:nextProps.showUserBal
        })
    }
    componentDidMount() {
        if ($('.scroll_block').length) {
            $('.scroll_block').mCustomScrollbar({
                axis: "y",
                theme: "minimal",
                scrollInertia: 550,
                scrollbarPosition: "inside"
            });
        }
    }
    render() {
        return(
            <div id="account_user" className="modal_bet new_window" role="dialog">
                <div className="modal_content scroll_block">
                    <div className="modal_header_user">
                        <button type="button" className="close" onClick={() => this.props.closeModal('accountUser')}></button>
                        <div className="account_header">
                            <div className="empty"/>
                            <div className="header_contact">
                                <p className="header_contact_title">Contact Us</p>
                                <div className="contact_list">
                                    <a href="#" className="contact_link">Live Chat</a>
                                    <a href="#" className="contact_link tel">+44 1782 684 757</a>
                                    <a href="#" className="contact_link">Email</a>
                                    <a href="#" className="contact_link">Web Message</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <AccountTabs
                        currentPage={this.props.currentPage}
                        loginToken={this.state.loginToken}
                        profile={this.state.profile}
                        setBalance={() => this.props.setBalance()}
                        activePage={this.state.activePage}/>

                </div>
            </div>
        )

    }
}

export default AccountUser;