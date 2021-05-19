import React from 'react';
import {NavLink, Route, Switch} from "react-router-dom";
import Bank from "./bank";
import MyAccount from "./my_account";
import History from "./history";
import Offers from "./offers";
import Messaging from "./messaging";
import TabAll from "../../in_play/partials/partsSideBarGames/tabAll";
import TabTop from "../../in_play/partials/partsSideBarGames/tabTop";
import TabVideo from "../../in_play/partials/partsSideBarGames/tabVideo";
import {getBettingOpt, getCountry, getInactivityTime, getlanguage, getTimezone} from "../../../helpers/data_account";
import AccountUser from "../account_user";



class AccountTabs extends React.Component {

    constructor(props) {
        super(props);
        let activePage = this.props.activePage;
        this.state={
            bettingOptions: {},
            inactivityTimes: {},
            loginToken: this.props.loginToken,
            activePage: activePage,
            profile: this.props.profile,
            country: {},
            languages: {},
            timezones: {}
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            //activePage: nextProps.activePage,
            profile: nextProps.profile,
            loginToken: nextProps.loginToken
        })
    }
    componentWillMount(){
        getBettingOpt(function(err, data) {
            if (!err) {
                this.setState({
                    bettingOptions: data
                })
            }
        }.bind(this));
        getInactivityTime(function(err, data) {
            if (!err) {
                this.setState({
                    inactivityTimes: data
                })
            }
        }.bind(this));
    }
    componentDidMount() {
        getlanguage(function(err, data) {
            if (!err) {
                this.setState({
                    languages: data
                })
            }
        }.bind(this))
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
                    timezones: data
                })
            }
        }.bind(this))
    }
    //change tabs
    changeTab = (tab) => {
        this.setState({
            activePage: tab
        })
    }
    render() {
        //console.log("ИИИИИИИИИИИ", this.state.profile)
        return(
            <div className="user_account_Navigation">
                <div className="deposit_btn">Deposit</div>
                <nav className="account_Navigation">
                    <ul >
                        <li className={`account-link ${this.state.activePage == "bank" ||  this.state.activePage == "withdraw" ||  this.state.activePage == "members"  ? 'active' : ''}`}><a href="#"  onClick={(e) => {e.preventDefault(); this.changeTab('bank')}}>Bank</a></li>
                        <li className={`account-link ${this.state.activePage == "myAccount" ? 'active' : ''}`}><a href="#" onClick={(e) => {e.preventDefault(); this.changeTab('myAccount')}}>My Account</a></li>
                        <li className={`account-link ${this.state.activePage == "history" ? 'active' : ''}`}><a href="#" onClick={(e) => {e.preventDefault(); this.changeTab('history')}}>History</a></li>
                        <li className={`account-link ${this.state.activePage == "offers" ? 'active' : ''}`}><a href="#" onClick={(e) => {e.preventDefault(); this.changeTab('offers')}} >Offers</a></li>
                        <li className={`account-link ${this.state.activePage == "messages" ? 'active' : ''}`}><a href="#" onClick={(e) => {e.preventDefault(); this.changeTab('messaging')}}>Messaging</a></li>
                    </ul>
                </nav>
                {this.state.activePage == "bank" ||  this.state.activePage == "members" ||  this.state.activePage == "withdraw"   ? <Bank profile={this.state.profile} token={this.state.loginToken} setBalance={() => this.props.setBalance()} />:""}
                {this.state.activePage == "myAccount" ? <MyAccount bettingOptions={this.state.bettingOptions} inactivityTimes={this.state.inactivityTimes} loginToken={this.state.loginToken} profile={this.state.profile} timezones={this.state.timezones} country={this.state.country} languages={this.state.languages}/> : ""}
                {this.state.activePage == "history" ? <History  currentPage={this.props.currentPage} profile={this.state.profile} loginToken={this.state.loginToken} balance={this.state.profile.balance}/> : ""}
                {this.state.activePage == "offers" ? <Offers/> : ""}
                {this.state.activePage == "messages" ? <Messaging/> : ""}
            </div>
        )

    }
}

export default AccountTabs;