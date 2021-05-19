import React from 'react';




class HelperHome extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
           <div className="helper_content">
               <div className="question_list">
                   <div className="question_item">
                     <div className="question_item_title">New to bet365</div>
                       <div className="question_link">Account Verification</div>
                       <div className="question_link">Depositing Funds</div>
                       <div className="question_link">Placing A Bet</div>
                   </div>
                   <div className="question_item">
                       <div className="question_item_title">Deposits</div>
                       <div className="question_link" onClick={()=>this.props.changeContent('deposits')}>Making a Deposit</div>
                       <div className="question_link" onClick={()=>this.props.changeContent('paymentMethods')}>Payment Methods</div>
                       <div className="question_link">Declined Deposit</div>
                   </div>
                   <div className="question_item">
                       <div className="question_item_title">Account Verification</div>
                       <div className="question_link">Verifying Documents</div>
                       <div className="question_link">Know Your Customer</div>
                       <div className="question_link">Verification Timeframes</div>
                   </div>
                   <div className="question_item">
                       <div className="question_item_title">Withdrawals</div>
                       <div className="question_link">Making a Withdrawal</div>
                       <div className="question_link">Withdrawal Timeframes</div>
                       <div className="question_link">Withdrawal Fees</div>
                   </div>
                   <div className="question_item">
                       <div className="question_item_title">Cash Out</div>
                       <div className="question_link">What is Cash Out?</div>
                       <div className="question_link">Auto Cash Out</div>
                       <div className="question_link">Partial Cash Out</div>
                   </div>
                   <div className="question_item">
                       <div className="question_item_title">Responsible Gambling</div>
                       <div className="question_link">Limit Your Account</div>
                       <div className="question_link">Support and advice</div>
                       <div className="question_link">Take a break</div>
                   </div>
               </div>

               <div className="products_list">
                   <a href="#" className="product_link">
                       <span className="product_icon football"/>
                       <span className="product_name">Sports</span>
                   </a>
                   <a href="#" className="product_link">
                       <span className="product_icon casino"/>
                       <span className="product_name">Casino</span>
                   </a>
                   <a href="#" className="product_link">
                       <span className="product_icon poker"/>
                       <span className="product_name">Poker</span>
                   </a>
                   <a href="#" className="product_link">
                       <span className="product_icon games"/>
                       <span className="product_name">Games</span>
                   </a>
                   <a href="#" className="product_link">
                       <span className="product_icon vegas"/>
                       <span className="product_name">Vegas</span>
                   </a>
                   <a href="#" className="product_link">
                       <span className="product_icon bingo"/>
                       <span className="product_name">Bingo</span>
                   </a>
               </div>


           </div>
        )

    }
}

export default HelperHome;