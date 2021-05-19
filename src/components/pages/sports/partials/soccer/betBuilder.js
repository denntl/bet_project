import React from 'react';



class BetBuilder extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            builder_work: false,
            chooseMarket:false

        }
    }
    showForm(type) {
        if (type == "chooseMarket"){
            this.setState({
                chooseMarket:true
            })
            this.props.showForm(type)
        }
    }
    closeModal(type) {
        if(type == "chooseMarket"){
            this.setState({
                chooseMarket:false
            })
        }
    }
    toggle = (type) =>{
        if (type == "builder_work") {
            this.setState({builder_work: !this.state.builder_work})
        }
        if (type == "liveMatch_list") {
            this.setState({liveMatchAlert: !this.state.liveMatchAlert})
        }

    }

    render() {
        return(
            <section id="Bet-Builder-panel" className="" role="tabpanel">
                <div className="BetBuilderModule">
                    <div id="bet_builder_tab">
                        <div className="BetBuilderModule">
                            <div className="SlipTitle">
                                <span className="SlipTitle_Text">Bet Builder</span>
                                {/*<span className="clear_all">Clear All</span>*/}
                            </div>
                            <div className="Slip_SelectionPane">
                                <div className="Slip_SelectionListWrapper">
                                    {/*<div className="full_Selection">
                                        <div className="full-Selection_Dot"/>
                                        <div className="full-Sentence">
                                            <span className="full-Sentence_Field">Henrique Fabinho</span>
                                            <span className="full-Sentence_Matter">to be</span>
                                            <span className="full-Sentence_Field">Booked</span>
                                            <div className="full-Selection_Remove"/>
                                        </div>
                                        <div className="Selected_MarketGroupName">Player Card</div>
                                    </div>*/}
                                    {/*<div className="full_Selection">
                                        <div className="full-Selection_Dot"/>
                                        <div className="full-Sentence">
                                            <span className="full-Sentence_Field">Henrique Fabinho</span>
                                            <span className="full-Sentence_Matter">to be</span>
                                            <span className="full-Sentence_Field">Booked</span>
                                            <div className="full-Selection_Remove"/>
                                        </div>
                                        <div className="Selected_MarketGroupName">Player Card</div>
                                    </div>*/}
                                </div>
                                <div className="Slip_EmptyMessage ">
                                    Add a selection to start building your bet
                                </div>
                            </div>
                            <div className="ControlBar">
                                <div className="ControlBar_AddSelection plus">
                                    <span className="AddSelection-text" onClick={()=>this.showForm('chooseMarket')}>Add Selection</span>
                                </div>
                                <div className="bbs-OddsButton ">
                                    <div className="bbs-OddsButton_NoSelections ">—.—</div>
                                    {/*<div className="bbs-OddsButton_full">
                                        <span className="bbs-OddsButton_text">Add to Bet Slip</span>
                                        <span className="bbs-Bet_Odds yellow_text">2.37</span>
                                    </div>*/}
                                </div>
                            </div>
                            <div className="HowTo">
                                <div className="bbm-HowTo_Button" onClick={()=>this.toggle("builder_work")}>How does Bet Builder work?</div>

                                <div className={`bbm-HowTo_content ${this.state.builder_work ? "show" :""}`}>
                                    <div className="bbm-HowTo_Title">Bet Builder combines selections into a single bet with better odds</div>
                                    <div className="bbm-HowTo_Wrapper">
                                        <div className="bbm-HowTo_Selection ">Mohamed Salah to Score First in the Match</div>
                                        <div className="bbm-HowTo_Symbol "></div>
                                        <div className="bbm-HowTo_Selection ">Over 3 Goals in the Match for Both Teams Combined</div>
                                        <div className="bbm-HowTo_Symbol "></div>
                                        <div className="bbm-HowTo_Selection ">Over 5 Cards in the Match for Both Teams Combined</div>
                                        <div className="bbm-HowTo_Equals "></div>
                                        <div className="bbm-HowTo_Selection bbm-HowTo_Odds ">+4000</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )

    }
}

export default BetBuilder;
