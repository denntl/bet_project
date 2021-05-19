import React from 'react';



class Deposits extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="helper_content">
                <div className="pageHeading">Deposits</div>
                <div className="accordion" id="accordionExample275">
                    <div className="deposit-card z-depth-0">
                        <div className="accordion-header" id="headingOne2">
                            <h5 className="mb-0">
                                <button className="btn btn-link" type="button" data-toggle="collapse"
                                        data-target="#collapseOne2"
                                        aria-expanded="true" aria-controls="collapseOne2">
                                    Changing payment method
                                </button>
                            </h5>
                        </div>
                        <div id="collapseOne2" className="collapse" aria-labelledby="headingOne2"
                             data-parent="#accordionExample275">
                            <div className="card-body">
                                You can add and edit your payment details before you make a deposit once logged in via the Deposit page.<br/>

                                If you fund your account using multiple payment methods, we are required to process any withdrawal request you make proportionally between the methods you have used to deposit with. Withdrawal requests will be reviewed and we will contact you via email within 24 hours to confirm where the funds will be sent.<br/>

                                Please note that you can store a maximum of five credit/debit cards, so you may need to remove an existing card if you wish to add a new one.<br/>

                                For more information, see our our Payment Methods page.<br/>
                            </div>
                        </div>
                    </div>
                    <div className="deposit-card z-depth-0">
                        <div className="accordion-header" id="headingTwo2">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse"
                                        data-target="#collapseTwo2"
                                        aria-expanded="false" aria-controls="collapseTwo2">
                                    Deposit clearance times
                                </button>
                            </h5>
                        </div>
                        <div id="collapseTwo2" className="collapse" aria-labelledby="headingTwo2"
                             data-parent="#accordionExample275">
                            <div className="card-body">
                                Deposits can be made instantly using debit and credit cards, prepaid vouchers and eWallet systems.

                                The amount of time that your deposit will take will vary depending on your payment method. For full details relating to clearance times, please refer to our Payment Methods.
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )

    }
}

export default Deposits;