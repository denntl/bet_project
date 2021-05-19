import React from 'react';



class Messaging extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            messageTab:"inbox"
        }
    }
    //change tabs
    changeDetailTab = (tab) => {
        this.setState({
            messageTab:tab
        })
    }
    render() {
        return(
            <div className="userAccount_info">
                <div className="top_sub_menu">
                    <a href="#" className="top_sub_menu_link"><span></span></a>
                    <a href="#" className="top_sub_menu_link"><span></span></a>
                    <a href="#" className="top_sub_menu_link"><span></span></a>
                    <a href="#" className="top_sub_menu_link"><span></span></a>
                </div>

                <div className="account_info_container">
                    <div className="table_content messaging">
                        <nav className="vertical_Navigation">
                            <ul >
                                <li className={`account-link inbox ${this.state.messageTab == "inbox"  ? 'active' : ''}`}><a href="#"  onClick={(e) => {e.preventDefault(); this.changeDetailTab('inbox')}}>Inbox <span className="msg_count">1</span></a></li>
                                <li className={`account-link ${this.state.messageTab == "sent_mess" ? 'active' : ''}`}><a href="#" onClick={(e) => {e.preventDefault(); this.changeDetailTab('sent_mess')}}>Sent Messages</a></li>
                                <li className={`account-link new_mess ${this.state.messageTab == "new_mess" ? 'active' : ''}`}><a href="#" onClick={(e) => {e.preventDefault(); this.changeDetailTab('new_mess')}}>New Messages</a></li>

                            </ul>
                        </nav>
                        {this.state.messageTab == "inbox" ?
                            <div className="tab_message_content no_border">
                                <table className="table_inbox">
                                    <tbody>
                                    <tr className="head">
                                        <td className="img cell1"></td>
                                        <td className="lft sub">Subject</td>
                                        <td className="ctr">Date Received</td>
                                        <td className="del ctr">Select</td>
                                    </tr>
                                    <tr className="first">
                                        <td className="img cell1">
                                            <img /></td>
                                        <td className="lft sub">
                                            <a className="messageLink no_read" href="#">Welcome to bet365</a></td>
                                        <td className="message_data">26/11/2018 12:06</td>
                                        <td className="del ctr borderTRL">
                                            <input type="checkbox"  name="select_mess"/>
                                        </td>
                                    </tr>
                                    <tr className="first">
                                        <td className="img cell1">
                                            <img /></td>
                                        <td className="lft sub">
                                            <a className="messageLink" href="#">Welcome to bet365</a></td>
                                        <td className="message_data">26/11/2018 12:06</td>
                                        <td className="del ctr borderTRL">
                                            <input type="checkbox"  name="select_mess"/>
                                        </td>
                                    </tr>
                                    <tr className="tr foot">
                                        <td colSpan="3">&nbsp;</td>
                                        <td className="del ctr borderTRL bottom">
                                            <a className="mes_delete_link">Delete</a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>

                                <div className="see_full_mess">
                                    <div className="tab_message_content">
                                        <div className="action_bar">
                                            <div className="actionLink send">Reply</div>
                                            <div className="actionLink cancel">Cancel</div>
                                        </div>
                                        <div className="mess_body">
                                            <div className="mess_top_info">
                                                <div className="mess_title">Your Deposit Bonus Awaits!</div>
                                                <div className="short_info_mess">
                                                    <div className="message_data"> <span>Sent</span> 07/11/2018 19:05</div>
                                                    <div className="message_id"><span>Reference</span> WMS1049462852</div>
                                                </div>
                                            </div>

                                            <div className="message_text">
                                               <p>Your Username is molidabm. </p>
                                                <p>Hi Mst Molida,</p>
                                                <p>bet365 is committed to responsible gambling; for more information go to <a
                                                    href="#">www.gamblingtherapy.org</a>.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="send_mess_btn">Reply</div>
                                </div>
                                <div className="reply_full_mess">
                                    <div className="tab_message_content">
                                        <div className="action_bar">
                                            <div className="actionLink send">Send</div>
                                            <div className="actionLink cancel">Cancel</div>
                                        </div>
                                        <div className="write_mess">
                                            <div className="form-group">
                                                <div className="error_line">The subject field is blank. Please add a subject before sending.</div>
                                                <label>Subject:</label>
                                                <input type="text" className="reply_title"/>
                                                <div className="short_info_mess">
                                                    <div className="message_id"><span>Reference</span> WMS1049462852</div>
                                                </div>
                                            </div>
                                            <div className="form-group put_mess_text">
                                                <div className="error_line">The message field is blank. Please add a message before sending.</div>
                                                <label>Message:</label>
                                                <textarea name="text" id="" cols="20" rows="2" min="1" max="800" ></textarea>
                                            </div>
                                            <div className="security_num">
                                                <label>Four-digit security number (if known)</label>
                                                <input type="text"/>
                                                <a href="#" className="info_security_link">Information</a>
                                            </div>
                                            <div className="send_mess_btn">Send</div>
                                        </div>


                                    </div>
                                </div>


                            </div>
                            : ""
                        }
                        {this.state.messageTab == "sent_mess" ?
                            <div className="tab_message_content">
                                <div className="no_message">You currently have no sent messages</div>

                            </div>
                            : ""
                        }
                        {this.state.messageTab == "new_mess" ?
                            <div className="tab_message_content">
                                <div className="action_bar">
                                    <div className="actionLink send">Send</div>
                                    <div className="actionLink cancel">Cancel</div>
                                </div>
                                <div className="write_mess">
                                    <div className="form-group">
                                        <div className="error_line">The subject field is blank. Please add a subject before sending.</div>
                                        <label>Subject:</label>
                                        <input type="text"/>
                                    </div>
                                    <div className="form-group put_mess_text">
                                        <div className="error_line">The message field is blank. Please add a message before sending.</div>
                                        <label>Message:</label>
                                        <textarea name="text" id="" cols="20" rows="2" min="1" max="800" ></textarea>
                                    </div>
                                    <div className="security_num">
                                        <label>Four-digit security number (if known)</label>
                                        <input type="text"/>
                                        <a href="#" className="info_security_link">Information</a>
                                    </div>
                                    <div className="send_mess_btn">Send</div>
                                </div>


                            </div>
                            : ""
                        }

                    </div>
                </div>
            </div>
        )

    }
}

export default Messaging;