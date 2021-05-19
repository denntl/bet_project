import React from 'react';
import ThreeColumns from "./sportsMarkets/templates/threeColumns";
import TwoColumnsWithTitleTeams from "./sportsMarkets/templates/twoColumnsWithTitleTeams";
import TwoColumns from "./sportsMarkets/templates/twoColumns";
import FourColumnOneLine from "./sportsMarkets/templates/fourColumnsOneLine";
import ThreeColumnsAndSlider from "./sportsMarkets/templates/threeColumnsAndSlider";
import ScoreInHalf from "./sportsMarkets/templates/scoreInHalf";
import FourColumnsWithTitle from "./sportsMarkets/templates/fourColumnsWithTitle";
import Specials from "./sportsMarkets/templates/specials";
import List from "./sportsMarkets/templates/list";
import ThreeColumnsWithTitleAndLine from "./sportsMarkets/templates/threeColumnsWithTitleAndLine";
import GroupThreeMarkets from "./sportsMarkets/templates/GroupThreeMarkets";


class ManagMatch extends React.Component {

    templates = {
        "ListGoals": List,
        "ListTeams": List,
        "ListTeamsGoals": List,
        "ListTeamsGoalsAway": List,
        "TwoColumnsYesNo": TwoColumns,
        "TwoColumnsTeams": TwoColumns,
        "TwoColumnsOddEven": TwoColumns,
        "TwoColumnsWithTitleTeams": TwoColumnsWithTitleTeams,
        "ThreeColumnsDraw": ThreeColumns,
        "ThreeColumnsNoGoal": ThreeColumns,
        "ThreeColumnsDouble": ThreeColumns,
        "ThreeColumnsHomeAway": ThreeColumns,
        "ThreeColumnsDrawDouble": ThreeColumns,
        "ThreeColumnsWithTitleAndLineTeams": ThreeColumnsWithTitleAndLine,
        "ThreeColumnsWithTitleAndLineOverUnder": ThreeColumnsWithTitleAndLine,
        "Slider": ThreeColumnsAndSlider,
        "FourColumnsOverExactlyUnder": FourColumnsWithTitle,
        "GroupFourColumns": FourColumnOneLine,
        "GroupSpecials": Specials,
        "GroupToScoreInHalf": ScoreInHalf,
        "GroupCleenSheet": FourColumnOneLine,
        "GroupThreeMarkets": GroupThreeMarkets,
    };

    constructor(props) {
        super(props);
        this.state = {
            hideMarketGroupButton: this.props.hideMarketGroupButton,
            showOnlyGroup: this.props.showOnlyGroup,
            typeSport: this.props.typeSport,
            participants: this.props.participants,
            bets: this.props.bets ? this.props.bets : {},
            markets: this.props.markets,
            currentMarket: this.props.currentMarket ? this.props.currentMarket : false,
            fromEventView: typeof this.props.fromEventView != 'undefined' && this.props.fromEventView,
            eventId: this.props.eventId,
            fromPage: this.props.fromPage,
            livescore: this.props.livescore,
            blockNameOdd: this.props.blockNameOdd,
            needTwoColumnsRender: this.props.needTwoColumnsRender,
            mainMarkets:
                {
                    6046: ["1X2", "Next Goal", "Under/Over"],
                    48242: ["Asian Handicap Including Overtime", "Under/Over Including Overtime", "12 Including Overtime"],
                    54094: ["12" , "Game Winner",],
                    154830:["12"],
                    35709: ["Under/Over", "1X2"]
                },
            mainMarketsIds:
                {
                    54094: ["52" , "300",]
                },
            isMarketsAzian: false,
            isMarketsGoal: false,
            marketsCount: this.props.marketsCount,

        }

    }


    componentWillReceiveProps(nextProps) {
        // console.log("ManagMatch",this.state)
        this.setState({
            hideMarketGroupButton: nextProps.hideMarketGroupButton,
            typeSport: nextProps.typeSport,
            participants: nextProps.participants,
            bets: nextProps.bets,
            markets: nextProps.markets,
            currentMarket: nextProps.currentMarket ? nextProps.currentMarket : false,
            fromEventView:  typeof nextProps.fromEventView != 'undefined' && nextProps.fromEventView,
            eventId: nextProps.eventId,
            fromPage: nextProps.fromPage,
            showOnlyGroup: nextProps.showOnlyGroup,
            isMarketsAzian: false,
            isMarketsGoal: false,
            needTwoColumnsRender: nextProps.needTwoColumnsRender,
            marketsCount: nextProps.marketsCount,
            livescore: nextProps.livescore,
        })

    }


    addToBetSlip = (info, bet, typeBet) => {
        if(bet.Price === 'N/A') return false;
       // console.log('!!!!!!!!!rrrrrrrrrrrr',bet, info)
        if ((Object.keys(bet).length && bet.Id != "") && bet.Status != 2 && bet.Status !=3) {

            if ($('#'+bet.Id+'-in_play, .'+bet.Id+'-in_play').hasClass('selected_bet')) {
                $('#'+bet.Id+'-in_play, .'+bet.Id+'-in_play').removeClass("selected_bet");
            } else {
                $('#'+bet.Id+'-in_play, .'+bet.Id+'-in_play').addClass("selected_bet");
            }
            if ($('#'+bet.Id+'-prematch, .'+bet.Id+'-prematch').hasClass('selected_bet')) {
                $('#'+bet.Id+'-prematch, .'+bet.Id+'-prematch').removeClass("selected_bet");
            } else {
                $('#'+bet.Id+'-prematch, .'+bet.Id+'-prematch').addClass("selected_bet");
            }


            this.props.addToBetSlip(info, bet, typeBet)
        } else {
            console.log("no bets")
        }

    }
    getColumnPosition = (id) =>{
        let position = this.state.markets[id].Id == 1 ? 0 : this.state.markets[id].Id == 59 ? 1 : 2;

        if(this.state.typeSport == 48242){
            position =  this.state.markets[id].Id == 342 ? 0 : this.state.markets[id].Id == 28 ? 1 : 2;
        }
        if(this.state.typeSport == 54094){
            position =  this.state.markets[id].Id == 52 ? 0 : this.state.markets[id].Id == 300 ? 2 : 1;
        }
        if(this.state.typeSport == 154830){
            position =  this.state.markets[id].Id == 52 ? 0 :
                this.state.markets[id].Id == 202 || this.state.markets[id].Id == 203 || this.state.markets[id].Id == 204 || this.state.markets[id].Id == 205 || this.state.markets[id].Id == 206 ? 1 : 2;
        }
        if(this.state.typeSport == 35709){
            position =  this.state.markets[id].Id == 2 ? 1 : this.state.markets[id].Id == 1 ? 2:0;
        }
        //console.log(123, this.state.markets[id], position);
        return position;
    }

    render() {
            let returnBody = [];

            if(this.state.fromPage == "main"){

                    let defaultElem = <div className="Market_table сolumnW33">

                        <div className="Participant grid3">
                            <span className="participant_name"></span>
                            <span className="participant_odds yellow_text"></span>
                        </div>
                        <div className="Participant grid3">
                            <span className="participant_name"></span>
                            <span className="participant_odds yellow_text"></span>
                        </div>
                        <div className="Participant grid3">
                            <span className="participant_name"></span>
                            <span className="participant_odds yellow_text"></span>
                        </div>
                    </div>;
                    if(this.state.typeSport == 6046 || this.state.typeSport == 35709){
                         returnBody = [defaultElem, defaultElem, defaultElem];
                    } else{
                        returnBody = [defaultElem, defaultElem];
                    }



                let currentMarketId = null;
                let currentMarketIdAsian = null;
                let currentMarketIdHandicap = null;

                if(this.state.typeSport == 54094) {
                    if (
                        this.state.livescore != null &&
                        typeof this.state.livescore != 'undefined' &&
                        typeof this.state.livescore.Scoreboard != 'undefined' &&
                        typeof this.state.livescore.Scoreboard.CurrentPeriod != 'undefined'
                    ) {
                            switch (this.state.livescore.Scoreboard.CurrentPeriod) {
                                case 1:
                                    currentMarketId = 202;
                                    break;
                                case 2:
                                    currentMarketId = 203;
                                    break;
                                case 3:
                                    currentMarketId = 204;
                            }
                    }
                }
                if(this.state.typeSport == 154830) {
                    if (
                        this.state.livescore != null &&
                        typeof this.state.livescore != 'undefined' &&
                        typeof this.state.livescore.Scoreboard != 'undefined' &&
                        typeof this.state.livescore.Scoreboard.CurrentPeriod != 'undefined'
                    ) {
                        switch (this.state.livescore.Scoreboard.CurrentPeriod) {
                            case 1:
                                currentMarketId = 202;
                                break;
                            case 2:
                                currentMarketId = 203;
                                break;
                            case 3:
                                currentMarketId = 204;
                                break;
                            case 4:
                                currentMarketId = 205;
                                break;
                            case 5:
                                currentMarketId = 206;

                        }
                        switch (this.state.livescore.Scoreboard.CurrentPeriod) {
                            case 1:
                                currentMarketIdAsian = 64;
                                break;
                            case 2:
                                currentMarketIdAsian = 65;
                                break;
                            case 3:
                                currentMarketIdAsian = 66;
                                break;
                            case 4:
                                currentMarketIdAsian = 67;
                                break;
                            case 5:
                                currentMarketIdAsian = 68;
                                break;

                        }
                    }
                }
                if(this.state.typeSport == 35709) {
                    if (
                        this.state.livescore != null &&
                        typeof this.state.livescore != 'undefined' &&
                        typeof this.state.livescore.Scoreboard != 'undefined' &&
                        typeof this.state.livescore.Scoreboard.CurrentPeriod != 'undefined'
                    ) {
                        switch (this.state.livescore.Scoreboard.CurrentPeriod) {
                            case 1:
                            case 2:
                            case 20:
                                currentMarketIdHandicap = 3;
                                break;


                        }
                    }
                }
                Object.keys(this.state.markets).map((id, index) => {
                    if(
                        (this.state.typeSport == 35709 && currentMarketIdHandicap == this.state.markets[id].Id)
                        ||
                        (this.state.typeSport == 54094 && currentMarketId == this.state.markets[id].Id)
                        ||
                        (this.state.typeSport == 154830 && currentMarketId == this.state.markets[id].Id || this.state.typeSport == 154830 && currentMarketIdAsian == this.state.markets[id].Id)
                        ||
                        (typeof this.state.mainMarkets[this.state.typeSport] != 'undefined' &&
                        this.state.mainMarkets[this.state.typeSport].indexOf(this.state.markets[id].Name) != -1 ||
                            this.state.typeSport == 6046 && this.state.markets[id].Id == 59)
                    ){
                        if( this.state.eventId == 4361033){


                        console.log(this.state.markets[id].Id)
                        }
                        if (typeof this.state.markets[id].template != 'undefined') {

                            let template = this.state.markets[id].template;

                            if (typeof  this.templates[template['name']] == "undefined") {

                                /** Не нашли компонент шаблона **/

                                //console.log('!!! Undefined template: ' + template['name'] + ' market: ' + this.state.markets[id].Name, this.state.markets[id]);

                            } else {
                                //console.log('!!! template: ' + template['name'] + ' market: ' + this.state.markets[id].Name, this.state.markets[id]);
                                /** Отображаем компонент шаблона **/

                                const TagName = this.templates[template['name']];

                                let columnPosition = this.getColumnPosition(id);

                                returnBody[columnPosition] = <TagName key={index} template={template} typeSport={this.state.typeSport}
                                         currentMarketId={this.state.markets[id].Id}
                                         typeMarket={this.state.markets[id].Name}
                                         eventId={this.state.eventId} market={this.state.markets[id]}
                                         participants={this.state.participants}
                                         fromPage={this.state.fromPage}
                                         blockNameOdd={this.state.blockNameOdd}
                                         hideMarketGroupButton={this.state.hideMarketGroupButton}
                                         needTwoColumnsRender={this.state.needTwoColumnsRender}
                                         fromEventView={this.state.fromEventView}
                                         marketsCount={this.state.marketsCount}
                                         currentMarket={this.state.markets[id].Name}
                                         addToBetSlip={(info, bet, typeBet) => this.addToBetSlip(info, bet, typeBet)}/>
                            }

                        }


                    }
                });

            } else if (this.state.currentMarket) {
                /** CurrentMarket то строка то объект, надо привести к одному формату, но пока так **/
                // let currentMarketLength = typeof this.state.currentMarket == 'object' ?
                //     Object.keys(this.state.currentMarket).length :
                //     typeof this.state.currentMarket == 'string' ?
                //         this.state.currentMarket.length : '';


                if (Object.keys(this.state.currentMarket).length || typeof this.state.currentMarket == 'string' && this.state.currentMarket.length) {


                    if (typeof this.state.markets != 'undefined') {
                        //console.log("this.state.markets", this.state.markets)
                        Object.keys(this.state.markets).map((id, index) => {

                            /** CurrentMarket то строка то объект, надо привести к одному формату, но пока так **/
                            let currentMarketName = typeof this.state.currentMarket.description == 'string' ? this.state.currentMarket.description :
                                typeof this.state.currentMarket == 'string' ? this.state.currentMarket :
                                    typeof this.state.currentMarket == 'object' ?
                                    this.state.currentMarket.Name : '';

                            if (this.state.markets[id].Name == currentMarketName || this.state.markets[id].alias == currentMarketName) {

                                /** Если есть конфигурация шаблона **/
                                if (typeof this.state.markets[id].template != 'undefined') {

                                        let template = this.state.markets[id].template;

                                    if (typeof  this.templates[template['name']] == "undefined") {

                                        /** Не нашли компонент шаблона **/

                                        //console.log('!!! Undefined template: ' + template['name'] + ' market: ' + this.state.markets[id].Name, this.state.markets[id]);

                                    } else {

                                        /** Отображаем компонент шаблона **/

                                        //console.log('!!! View template: ' + template['name']);

                                        const TagName = this.templates[template['name']];
                                        // console.log("$$$$$$$$$$$$$$$$$$$$$$$", this.state.fromPage)
                                        returnBody =
                                        <TagName key={index} template={template} typeSport={this.state.typeSport}
                                             hideMarketGroupButton={this.state.hideMarketGroupButton}
                                             needTwoColumnsRender={this.state.needTwoColumnsRender}
                                            currentMarketId={this.state.markets[id].Id}
                                            typeMarket={currentMarketName}
                                            eventId={this.state.eventId} market={this.state.markets[id]}
                                            participants={this.state.participants}
                                            fromPage={this.state.fromPage}
                                            fromEventView={this.state.fromEventView}
                                            currentMarket={currentMarketName}
                                            marketsCount={this.state.marketsCount}
                                             blockNameOdd={this.state.blockNameOdd}
                                             addToBetSlip={(info, bet, typeBet) => this.addToBetSlip(info, bet, typeBet)}
                                        />
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

                                if (
                                    (
                                        typeof this.state.showOnlyGroup === 'undefined' &&
                                        (
                                            this.state.markets[id].Name == currentMarketName ||
                                            this.state.markets[id].alias == currentMarketName
                                        )
                                    )
                                        ||
                                    (
                                        this.state.fromEventView &&
                                        (
                                            typeof this.state.showOnlyGroup !== 'string' ||
                                            this.state.markets[id].Groups.some((groupName) => {
                                                return groupName.search(new RegExp(this.state.showOnlyGroup, 'i')) > -1;
                                            })
                                        )
                                    )
                                ) {

                                    /** Если есть конфигурация шаблона **/
                                    if (typeof this.state.markets[id].template != 'undefined') {
                                        Object.keys(this.state.markets).map((el) => {
                                            if(this.state.markets[el].Id == "goal_line"){
                                                this.state.isMarketsAzian = true;
                                            }
                                            if(this.state.markets[el].Id == 3){
                                                this.state.isMarketsGoal = true;
                                            }
                                        })

                                        let template = this.state.markets[id].template;

                                        if (typeof  this.templates[template['name']] == "undefined") {

                                            /** Не нашли компонент шаблона **/

                                            //console.log('!!! Undefined template: ' + template['name'] + ' market: ' + this.state.markets[id].Name, this.state.markets[id]);

                                        } else {

                                            /** Отображаем компонент шаблона **/

                                                //console.log('!!! View template: ' + template['name']);

                                            const TagName = this.templates[template['name']];
                                            // console.log("444444444", this.state.markets[id].Id == 3)
                                            let halfW = ((this.state.markets[id].Id == "goal_line" ||
                                                        this.state.markets[id].Id == 3) &&
                                                        (this.state.isMarketsAzian && this.state.isMarketsGoal))? true : false
                                            return <TagName
                                                hideMarketGroupButton={this.state.hideMarketGroupButton}
                                                needTwoColumnsRender={this.state.needTwoColumnsRender}
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
                                                halfWidth={halfW}
                                                blockNameOdd={this.state.blockNameOdd}
                                                marketsCount={this.state.marketsCount}
                                                addToBetSlip={(info, bet, typeBet) => this.addToBetSlip(info, bet, typeBet)}
                                            />
                                        }

                                    }
                                }
                            })
                            : ""
                    }
                </div>;
            }

            return(
                <div key={this.state.eventId} className={`marker_row_wrapp_wrapp ${this.state.fromPage == "main" ? "mainMarketColumns" :""}`}>
                {returnBody}
                </div>
            )

    }
}

export default ManagMatch;
