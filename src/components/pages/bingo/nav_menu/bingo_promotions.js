import React from "react";
import BingoPromotionsMain from "../promotions/promotion_main";
import {Route} from "react-router-dom";
import ArticlePage from "../promotions/article_page";
import Welcome from "../promotions/welcomePackage.js"
import AgeOfTheGods from "../promotions/ageOfTheGods";
import Halloween from "../promotions/halloween";
import WhatsOnMonth from "../promotions/whatsOnMonth";

class BingoPromotions extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Route exact path="/bingo/bingo_promotions/" render={() => <BingoPromotionsMain />}/>
                <Route  path="/bingo/bingo_promotions/welcomePage" render={() => <ArticlePage content={<Welcome/>}/>}/>
                <Route  path="/bingo/bingo_promotions/ageOfTheGods" render={() => <ArticlePage content={<AgeOfTheGods/>}/>}/>
                <Route  path="/bingo/bingo_promotions/halloween" render={() => <ArticlePage content={<Halloween/>}/>}/>
                <Route  path="/bingo/bingo_promotions/whats-on-this-month" render={() => <ArticlePage content={<WhatsOnMonth/>}/>}/>
            </div>
        )
    }
}
export default BingoPromotions;