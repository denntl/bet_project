import React from 'react';



class LiveBlackjack extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="full_offer_tab">
                <div className="full_offer_title">Live Blackjack Cashback</div>
                <div className="full_offer_sub_title">Get 25% cashback when you opt in and play Live Blackjack!</div>
                <div className="full_offer_sub_title2">Every Tuesday in January, February and March</div>
                <div className="full_offer_short_text">Opt in, play Live Blackjack and be in with a chance of earning <b>25% cashback up to $50</b> if you are down overall as a result of your play.</div>

                <div className="how_to_claim_pod">
                    <div className="title">
                        <img src="../../img/Casino-How-To-Claim.svg" className="how_to_claim_icon" alt="how to claim icon"/>
                        <span className="title_text">Here’s how it works:</span>
                    </div>
                    <ul className="how_to_claim_pod_list">
                        <li className="list_item">
                            <span className="list_item_number">1</span>
                            <span className="list_item_text">Opt In</span>
                        </li>
                        <li className="list_item">
                            <span className="list_item_number">2</span>
                            <span className="list_item_text">During promotion periods play a minimum of 10 game rounds of </span><a href="#">Live Blackjack</a><span>.</span>
                        </li>
                        <li className="list_item">
                            <span className="list_item_number">3</span>
                            <span className="list_item_text">Get <b>25% cashback from $10 up to $50</b> if you're down on your play.</span>
                        </li>
                    </ul>
                    <div className="button_quaternary">Opt In</div>
                </div>
                <div className="full_offer_short_text">Losses less than $40 will not qualify and only cash wagers made on Live Blackjack games contribute towards the promotion.</div>



            </div>
        )

    }
}

export default LiveBlackjack;
