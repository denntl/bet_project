import React from 'react';



class SlotsClub extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="full_offer_tab">
                <div className="full_offer_title">Slots Club</div>
                <div className="full_offer_sub_title">Make the most of your slots play by taking part in our monthly Slots Club promotion. It's free to join, so all you need to do is opt in and start playing our great range of slot games.</div>
                <div className="full_offer_sub_title2"/>
                <div className="full_offer_short_text"/>

                <div className="how_to_claim_pod">
                    <div className="title">
                        <img src="../../img/Casino-How-To-Claim.svg" className="how_to_claim_icon" alt="how to claim icon"/>
                        <span className="title_text">Here’s how it works:</span>
                    </div>
                    <ul className="how_to_claim_pod_list">
                        <li className="list_item">
                            <span className="list_item_number">1</span>
                            <span className="list_item_text">Play your favourite slot games and earn Comp Points.</span>
                        </li>
                        <li className="list_item">
                            <span className="list_item_number">2</span>
                            <span className="list_item_text">Select your currency from the table below.</span>
                        </li>
                        <li className="list_item">
                            <span className="list_item_number">3</span>
                            <span className="list_item_text">Achieve one of the Comp Points totals and receive a great bonus.</span>
                        </li>
                    </ul>
                    <div className="button_quaternary">Opt In</div>
                </div>
                <div className="full_offer_short_text"></div>
                <div className="currency_conversion_table">
                    <div className="currency_conversion_table_header">
                        <div className="header_table_content white">USD</div>
                        <div className="header_table_content white">100</div>
                        <div className="header_table_content white">200</div>
                        <div className="header_table_content white">500</div>
                        <div className="header_table_content white">1,000</div>
                        <div className="header_table_content white">2,000</div>
                        <div className="header_table_content white">5,000</div>
                        <div className="header_table_content white">8,000</div>
                    </div>
                    <div className="currency_conversion_table_body">
                        <div className="currency_conversion_table_row">
                            <div className="table_row_content">10 Days</div>
                            <div className="table_row_content">$10</div>
                            <div className="table_row_content">$20</div>
                            <div className="table_row_content">$50</div>
                            <div className="table_row_content">$100</div>
                            <div className="table_row_content">$200</div>
                            <div className="table_row_content">$500</div>
                            <div className="table_row_content">$800</div>
                        </div>
                        <div className="currency_conversion_table_row">
                            <div className="table_row_content">15 Days</div>
                            <div className="table_row_content">$15</div>
                            <div className="table_row_content">$30</div>
                            <div className="table_row_content">$75</div>
                            <div className="table_row_content">$150</div>
                            <div className="table_row_content">$300</div>
                            <div className="table_row_content">$750</div>
                            <div className="table_row_content">$1,200</div>
                        </div>
                        <div className="currency_conversion_table_row">
                            <div className="table_row_content">20 Days</div>
                            <div className="table_row_content">$20</div>
                            <div className="table_row_content">$40</div>
                            <div className="table_row_content">$100</div>
                            <div className="table_row_content">$200</div>
                            <div className="table_row_content">$400</div>
                            <div className="table_row_content">$1,000</div>
                            <div className="table_row_content">$1,600</div>
                        </div>
                        <div className="currency_conversion_table_row">
                            <div className="table_row_content">25 Days</div>
                            <div className="table_row_content">$25</div>
                            <div className="table_row_content">$50</div>
                            <div className="table_row_content">$125</div>
                            <div className="table_row_content">$250</div>
                            <div className="table_row_content">$500</div>
                            <div className="table_row_content">$1,250</div>
                            <div className="table_row_content">$2,000</div>
                        </div>
                    </div>
                </div>


            </div>
        )

    }
}

export default SlotsClub;
