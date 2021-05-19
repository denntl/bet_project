import React from 'react';
import ThreeColumns from "./templates/threeColumns";
import TwoColumnsWithTitleTeams from "./templates/twoColumnsWithTitleTeams";
import TwoColumns from "./templates/twoColumns";
import FourColumnOneLine from "./templates/fourColumnsOneLine";
import ThreeColumnsAndSlider from "./templates/threeColumnsAndSlider";
import ScoreInHalf from "./templates/scoreInHalf";
import FourColumnsWithTitle from "./templates/fourColumnsWithTitle";
import Specials from "./templates/specials";
import List from "./templates/list";
import ThreeColumnsWithTitleAndLine from "./templates/threeColumnsWithTitleAndLine";



class IceHockey extends React.Component {
    //Winning Margin - ThreeColumnsWithTitleAndLineOverUnder
    templates = {
        "ListGoals": List,
        "ListTeams": List,
        "ListTeamsGoals": List,
        "TwoColumnsYesNo": TwoColumns,
        "TwoColumnsTeams": TwoColumns,
        "TwoColumnsOddEven": TwoColumns,
        "TwoColumnsWithTitleTeams": TwoColumnsWithTitleTeams,
        "ThreeColumnsDraw": ThreeColumns,
        "ThreeColumnsNoGoal": ThreeColumns,
        "ThreeColumnsDouble": ThreeColumns,
        "ThreeColumnsHomeAway": ThreeColumns,
        "ThreeColumnsDrawDouble": ThreeColumns,
        "Slider": ThreeColumnsAndSlider,
        "ThreeColumnsWithTitleAndLineOverUnder": ThreeColumnsWithTitleAndLine,
        "FourColumnsOverExactlyUnder": FourColumnsWithTitle,
        "GroupFourColumns": FourColumnOneLine,
        "GroupSpecials": Specials,
        "GroupToScoreInHalf": ScoreInHalf,
        "GroupCleenSheet": FourColumnOneLine
    };

    constructor(props) {
        super(props);

        this.state = {
            fromEventView: typeof this.props.fromEventView != 'undefined' && this.props.fromEventView,
            markets: this.props.markets,
            currentMarket: this.props.currentMarket,
            participants: this.props.participants,
            // multipleRates: false,
            eventId: this.props.eventId,
            fromPage: this.props.fromPage,
            mainMarkets: ["1X2", "Next Goal", "Under/Over"],
            // combineMarket: typeof this.props.combineMarket != "undefined" ? this.props.combineMarket : false,
            typeSport: this.props.typeSport
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            fromEventView: typeof nextProps.fromEventView != 'undefined' && nextProps.fromEventView,
            markets: nextProps.markets,
            currentMarket: nextProps.currentMarket,
            participants: nextProps.participants,
            eventId: nextProps.eventId,
            fromPage: nextProps.fromPage,
            typeSport: nextProps.typeSport
        })
    }


    render() {

        let returnBody = "";
        if (this.state.currentMarket) {
            /** CurrentMarket то строка то объект, надо привести к одному формату, но пока так **/
            // let currentMarketLength = typeof this.state.currentMarket == 'object' ?
            //     Object.keys(this.state.currentMarket).length :
            //     typeof this.state.currentMarket == 'string' ?
            //         this.state.currentMarket.length : '';


            if (Object.keys(this.state.currentMarket).length ) {


                if (typeof this.state.markets != 'undefined') {
                    //console.log("this.state.markets", this.state.markets)
                    Object.keys(this.state.markets).map((id, index) => {

                        /** CurrentMarket то строка то объект, надо привести к одному формату, но пока так **/
                        let currentMarketName = typeof this.state.currentMarket == 'string' ? this.state.currentMarket :
                            typeof this.state.currentMarket == 'object' ?
                                this.state.currentMarket.Name : '';

                        if (this.state.markets[id].Name == currentMarketName) {

                            /** Если есть конфигурация шаблона **/
                            if (typeof this.state.markets[id].template != 'undefined') {

                                let template = this.state.markets[id].template;

                                if (typeof  this.templates[template['name']] == "undefined") {

                                    /** Не нашли компонент шаблона **/

                                    console.log('!!! Undefined template: ' + template['name'] + ' market: ' + this.state.markets[id].Name, this.state.markets[id]);

                                } else {

                                    /** Отображаем компонент шаблона **/

                                        //console.log('!!! View template: ' + template['name']);

                                    const TagName = this.templates[template['name']];
                                    // console.log("$$$$$$$$$$$$$$$$$$$$$$$", this.state.fromPage)
                                    returnBody =
                                        <TagName key={index} template={template} typeSport={this.state.typeSport}
                                                 currentMarketId={this.state.markets[id].Id}
                                                 typeMarket={currentMarketName}
                                                 eventId={this.state.eventId} market={this.state.markets[id]}
                                                 participants={this.state.participants}
                                                 fromPage={this.state.fromPage}
                                                 fromEventView={this.state.fromEventView}
                                                 currentMarket={currentMarketName}
                                                 addToBetSlip={(info, bet, typeBet) => this.props.addToBetSlip(info, bet, typeBet)}/>
                                }

                            }
                        }
                    })
                } else {
                    returnBody = ""
                }

            }

        } else {

            returnBody = <div className="market_row_wrapp">
                {
                    (typeof this.state.markets != 'undefined' && Object.keys(this.state.markets).length) ?
                        Object.keys(this.state.markets).map((id, index) => {

                            /** CurrentMarket то строка то объект, надо привести к одному формату, но пока так **/
                            let currentMarketName = typeof this.state.currentMarket == 'string' ? this.state.currentMarket :
                                typeof this.state.currentMarket == 'object' ?
                                    this.state.currentMarket.Name : this.state.markets[id].Name;
                            // console.log("!!!!!!!!!!!!!2222222222222222", currentMarketName)

                            if (this.state.markets[id].Name == currentMarketName || this.state.fromEventView) {

                                /** Если есть конфигурация шаблона **/
                                if (typeof this.state.markets[id].template != 'undefined') {

                                    let template = this.state.markets[id].template;

                                    if (typeof  this.templates[template['name']] == "undefined") {

                                        /** Не нашли компонент шаблона **/

                                        console.log('!!! Undefined template: ' + template['name'] + ' market: ' + this.state.markets[id].Name, this.state.markets[id]);

                                    } else {

                                        /** Отображаем компонент шаблона **/

                                            //console.log('!!! View template: ' + template['name']);

                                        const TagName = this.templates[template['name']];

                                        return <TagName
                                            key={index}
                                            template={template}
                                            typeSport={this.state.typeSport}
                                            currentMarketId={this.state.markets[id].Id}
                                            typeMarket={currentMarketName}
                                            eventId={this.state.eventId}
                                            market={this.state.markets[id]}
                                            participants={this.state.participants}
                                            fromPage={this.state.fromPage}
                                            fromEventView={this.state.fromEventView}
                                            currentMarket={currentMarketName}
                                            addToBetSlip={(info, bet, typeBet) => this.props.addToBetSlip(info, bet, typeBet)}
                                        />
                                    }

                                }
                            }


                        })
                        : ""


                }
            </div>;

        }


        return returnBody;
    }
}

export default IceHockey;
