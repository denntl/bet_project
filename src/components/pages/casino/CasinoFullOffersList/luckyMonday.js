import React from 'react';



class LuckyMonday extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="full_offer_tab">
                <div className="full_offer_title">Lucky Monday</div>
                <div className="full_offer_sub_title">Enjoy weekly rewards with Lucky Monday!</div>
                <div className="full_offer_sub_title2">7th, 14th, 21st & 28th January</div>
                <div className="full_offer_short_text">Play in the Casino <b>every Monday</b> for the chance to win a share of 180 fantastic prizes with a total prize-pool of <b>3,300 Free Spins!</b></div>

                <div className="how_to_claim_pod">
                    <div className="title">
                        <img src="../../img/Casino-How-To-Claim.svg" className="how_to_claim_icon" alt="how to claim icon"/>
                        <span className="title_text">Here’s how it works:</span>
                    </div>
                    <ul className="how_to_claim_pod_list">
                        <li className="list_item">
                            <span className="list_item_number">1</span>
                            <span className="list_item_text"><b>Opt In</b> and open your favourite slot game.</span>
                        </li>
                        <li className="list_item">
                            <span className="list_item_number">2</span>
                            <span className="list_item_text">Stake $40 or more on slot games to earn your prize draw ticket.</span>
                        </li>
                        <li className="list_item">
                            <span className="list_item_number">3</span>
                            <span className="list_item_text">Win cash prizes of <b>up to $100</b> in every draw you enter!</span>
                        </li>
                    </ul>
                    <div className="button_quaternary">Opt In</div>
                </div>

                <div className="currency_conversion_table">
                    <div className="currency_conversion_table_header">
                        <div className="header_left_column white">Free Spins Prize Draws</div>
                        <div className="header_right_column white"/>
                    </div>
                    <div className="currency_conversion_table_body">
                        <div className="currency_conversion_table_row">
                            <div className="left_content">Number of Winners</div>
                            <div className="right_content">	Free Spins Amount</div>
                        </div>
                        <div className="currency_conversion_table_row">
                            <div className="left_content">10</div>
                            <div className="right_content">50</div>
                        </div>
                        <div className="currency_conversion_table_row">
                            <div className="left_content">20</div>
                            <div className="right_content">40</div>
                        </div>
                        <div className="currency_conversion_table_row">
                            <div className="left_content">50</div>
                            <div className="right_content">20</div>
                        </div>
                        <div className="currency_conversion_table_row">
                            <div className="left_content">100</div>
                            <div className="right_content">10</div>
                        </div>
                    </div>
                </div>


            </div>
        )

    }
}

export default LuckyMonday;
