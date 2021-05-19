import React from 'react';



class NewPlayer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="full_offer_tab">
                <div className="full_offer_title">New Player Bonus</div>
                <div className="full_offer_sub_title">Get off to a flying start in the Casino with a New Player Bonus of up to $200!</div>
                <div className="full_offer_sub_title2"></div>
                <div className="full_offer_short_text">When making a qualifying deposit/transfer use the <b>Offer Code BONUS100</b> to claim a <b>100%</b> bonus.</div>

                <div className="how_to_claim_pod">
                    <div className="title">
                        <img src="../../img/Casino-How-To-Claim.svg" className="how_to_claim_icon" alt="how to claim icon"/>
                        <span className="title_text">Here’s how it works:</span>
                    </div>
                    <ul className="how_to_claim_pod_list">
                        <li className="list_item">
                            <span className="list_item_number">1</span>
                            <span className="list_item_text">Deposit/transfer $20 or more and enter the Offer Code <b>BONUS100</b>.</span>
                        </li>
                        <li className="list_item">
                            <span className="list_item_number">2</span>
                            <span className="list_item_text">Open any game and accept your <b>New Player Bonus</b>.</span>
                        </li>
                        <li className="list_item">
                            <span className="list_item_number">3</span>
                            <span className="list_item_text">Wager your qualifying deposit/transfer and bonus 15 times on eligible games to withdraw your ‘Bonus Funds’ balance.</span>
                        </li>
                    </ul>

                </div>
                <div className="full_offer_short_text">It couldn't be easier to <b>give your account a boost</b> and start playing our great selection of games.</div>



            </div>
        )

    }
}

export default NewPlayer;
