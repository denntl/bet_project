import React from 'react';



class ComplaintsProcedure extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            tabComplaint:true,
            tabIbas:false
        }
    }
    toggle = (type) => {
        if (type == "tabComplaint") {
            this.setState({
                tabComplaint: !this.state.tabComplaint,

            })
        }
        if (type == "tabIbas") {
            this.setState({
                tabIbas: !this.state.tabIbas,

            })
        }
    }
    render() {
        return(
            <div className="helper_content">
                <div className="pageHeading">Complaints Procedure</div>
                <div className="sa__singleaccordion">
                    <div className="singleaccordionItem">
                        <div className="sa__singleaccordion__section__head" onClick={()=>this.toggle('tabComplaint')}>
                            <span>Making a complaint</span>
                        </div>
                        {this.state.tabComplaint ?
                        <div className="fullText">
                            bet365 treats all complaints and disputes seriously and is fully committed to ensuring that any received are dealt with in a fair, open and timely manner. You can view our Complaints Procedure here.
                        </div>
                            :""}
                    </div>
                    <div className="singleaccordionItem">
                        <div className="sa__singleaccordion__section__head" onClick={()=>this.toggle('tabIbas')}>
                            <span>About IBAS</span>
                        </div>
                        {this.state.tabIbas ?

                            <div className="fullText">
                                IBAS (Independent Betting Adjudication Service) is an authoritative, independent third party offering adjudication for customers who have an unresolved dispute with an operator.
                                <br/>
                                For further information please see our IBAS page.
                                <br/>
                                If you have an unresolved complaint, please Contact Us. Prior to adjudication, customers are required to fully exhaust our internal Complaints Procedure.
                            </div>
                       :""
                        }
                    </div>

                </div>
            </div>
        )

    }
}

export default ComplaintsProcedure;
