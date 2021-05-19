import React from 'react';
import {getLeagueTableData} from "../../../../helpers/data";



class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            currentLeagueTableData:this.props.currentLeagueTableData
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            currentLeagueTableData:nextProps.currentLeagueTableData
        });
    }

    render() {
        return(
            <section id="Table_panel" className="" >
                <div className="CouponModule">
                    <div className="MarketGrid">
                        <div className="MarketGroup CouponMarketGroup CouponMarketGroupLiveUpdates">
                            <div className="MarketGroupButton MarketGroupButtonNoCollapse ">
                                <div className="CouponMarketGroupButton_Title"><span>League Table</span></div>
                                <div className="MarketGroupButton_UpdateWrapper">
                                    <div className="MarketGroupButton_LastUpdatedLabel">Updated</div>
                                    <div className="MarketGroupButton_LastUpdated">22:49 GMT+2</div>
                                    <div className="MarketGroupButton_LiveUpdateLabel">Updated based on live scores</div>
                                </div>
                            </div>
                            <div className="MarketGroup_Wrapper" >
                                <div className="MarketGroupContainer">
                                    <div className="MarketCouponLeagueStatisticsTriple MarketFullWidth Market_General Market_PWidth-100">
                                        <div className="MarketColumnHeader MarketCouponLeagueStatisticsHeader">
                                            <div className="MarketCouponLeagueStatisticsHeader_Label MarketCouponLeagueStatisticsHeader_Item">England Premier League</div>

                                            <div className="MarketCouponLeagueStatisticsHeader_Wrapper">
                                                <div className="MarketCouponLeagueStatisticsHeader_Item">P</div>
                                                <div className="MarketCouponLeagueStatisticsHeader_RemoveableItem MarketCouponLeagueStatisticsHeader_Item">W</div>
                                                <div className="MarketCouponLeagueStatisticsHeader_RemoveableItem MarketCouponLeagueStatisticsHeader_Item">D</div>
                                                <div className="MarketCouponLeagueStatisticsHeader_RemoveableItem MarketCouponLeagueStatisticsHeader_Item">L</div>
                                                <div className="MarketCouponLeagueStatisticsHeader_RemoveableItem MarketCouponLeagueStatisticsHeader_Item">F</div>
                                                <div className="MarketCouponLeagueStatisticsHeader_Item">+/-</div>
                                                <div className="MarketCouponLeagueStatisticsHeader_Item">Pts</div>
                                            </div>
                                        </div>
                                        {this.state.currentLeagueTableData.map((leagueTable, i)=>
                                           <div className="CouponParticipantLeagueStatistics" key={leagueTable.team+i}>
                                                <div className="CouponParticipantLeagueStatistics_NameWrapper CouponParticipantLeagueStatistics_Linked">
                                                    <div className="CouponParticipantLeagueStatistics_Number">{leagueTable.order}</div>
                                                    <div className="CouponParticipantLeagueStatistics_Name">{leagueTable.team}</div>
                                                </div>

                                                <div className="CouponParticipantLeagueStatistics_StatsWrapper">
                                                    <div className="CouponParticipantLeagueStatistics_Item">{leagueTable.p}</div>
                                                    <div className="CouponParticipantLeagueStatistics_Item CouponParticipantLeagueStatistics_RemovableItem">{leagueTable.w}</div>
                                                    <div className="CouponParticipantLeagueStatistics_Item CouponParticipantLeagueStatistics_RemovableItem">{leagueTable.d}</div>
                                                    <div className="CouponParticipantLeagueStatistics_Item CouponParticipantLeagueStatistics_RemovableItem">{leagueTable.l}</div>
                                                    <div className="CouponParticipantLeagueStatistics_Item CouponParticipantLeagueStatistics_RemovableItem">{leagueTable.f}</div>
                                                    <div className="CouponParticipantLeagueStatistics_Item">{leagueTable.plus_minus}</div>
                                                    <div className="CouponParticipantLeagueStatistics_Item">{leagueTable.pts}</div>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/*<div className="MarketCouponLeagueOdds Market Market_General Market_PWidth-13-333">*/}
                                        {/*<div className="MarketColumnHeader MarketCouponLeagueOddsHeader">Win</div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">1.36</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">11.00</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">5.50</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">51.00</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">67.00</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">1001.00</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">81.00</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">1001.00</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">1001.00</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">1001.00</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">1001.00</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">2501.00</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">2001.00</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">4501.00</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">4501.00</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">4501.00</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">4501.00</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">4501.00</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">4501.00</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">4501.00</span>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}

                                    {/*<div className="MarketCouponLeagueOdds Market Market_General Market_PWidth-13-333">*/}
                                        {/*<div className="MarketColumnHeader MarketCouponLeagueOddsHeader">Top 4</div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">1.001</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">1.20</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">1.062</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">1.72</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">2.25</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">81.00</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">3.75</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">81.00</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">51.00</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">101.00</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">101.00</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">251.00</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">201.00</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">501.00</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">751.00</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">751.00</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">501.00</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">1501.00</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">2001.00</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">1501.00</span>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}

                                    {/*<div className="MarketCouponLeagueOdds Market Market_General Market_PWidth-13-333 Market_LastInRow">*/}
                                        {/*<div className="MarketColumnHeader MarketCouponLeagueOddsHeader">Relegated</div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General ParticipantOddsOnly_Suspended"></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General ParticipantOddsOnly_Suspended"></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General ParticipantOddsOnly_Suspended"></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General ParticipantOddsOnly_Suspended"></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General ParticipantOddsOnly_Suspended"></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">101.00</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">1001.00</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">101.00</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">201.00</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">67.00</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">81.00</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">13.00</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">21.00</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">6.00</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">2.30</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">5.00</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">3.75</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">1.44</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">1.40</span></div>*/}

                                        {/*<div className="ParticipantOddsOnlyDarker CouponParticipantOddsOnlyLeagueTable ParticipantOddsOnly Participant_General">*/}
                                            {/*<span className="ParticipantOddsOnly_Odds">1.66</span>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>

                        {/*<div className="MarketGroup CouponMarketGroup">*/}
                            {/*<div className="MarketGroupButtonWrapper">*/}
                                {/*<div className="MarketGroupButton CouponMarketGroupButton" data-toggle="collapse" data-target="#collapse_Table_Related_Markets" aria-expanded="false" aria-controls="collapse_Table_Related_Markets">*/}
                                    {/*<div className="CouponMarketGroupButton_Title"><span>Related Markets</span></div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                            {/*<div className="MarketGroup_Wrapper collapse show" id="collapse_Table_Related_Markets" aria-expanded="true">*/}
                                {/*<div className="MarketGroupContainer">*/}
                                    {/*<div className="MarketLink MarketFullWidth Market_General Market_PWidth-100">*/}
                                        {/*<div className="OutrightLinkParticipant Market_CN-3">*/}
                                            {/*<div className="OutrightLinkParticipant_Wrapper">*/}
                                                {/*<div className="OutrightLinkParticipant_InnerWrapper">*/}
                                                    {/*<span className="OutrightLinkParticipant_Link">To Win Outright</span>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}

                                        {/*<div className="OutrightLinkParticipant Market_CN-3">*/}
                                            {/*<div className="OutrightLinkParticipant_Wrapper">*/}
                                                {/*<div className="OutrightLinkParticipant_InnerWrapper">*/}
                                                    {/*<span className="OutrightLinkParticipant_Link">Without Man City</span>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}

                                        {/*<div className="OutrightLinkParticipant Market_CN-3">*/}
                                            {/*<div className="OutrightLinkParticipant_Wrapper">*/}
                                                {/*<div className="OutrightLinkParticipant_InnerWrapper">*/}
                                                    {/*<span className="OutrightLinkParticipant_Link">Top Goalscorer</span>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}

                                        {/*<div className="OutrightLinkParticipant Market_CN-3">*/}
                                            {/*<div className="OutrightLinkParticipant_Wrapper">*/}
                                                {/*<div className="OutrightLinkParticipant_InnerWrapper">*/}
                                                    {/*<span className="OutrightLinkParticipant_Link">To be Relegated</span>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}

                                        {/*<div className="OutrightLinkParticipant Market_CN-3">*/}
                                            {/*<div className="OutrightLinkParticipant_Wrapper">*/}
                                                {/*<div className="OutrightLinkParticipant_InnerWrapper">*/}
                                                    {/*<span className="OutrightLinkParticipant_Link">Not to be Relegated</span>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}

                                        {/*<div className="OutrightLinkParticipant Market_CN-3">*/}
                                            {/*<div className="OutrightLinkParticipant_Wrapper">*/}
                                                {/*<div className="OutrightLinkParticipant_InnerWrapper">*/}
                                                    {/*<span className="OutrightLinkParticipant_Link">To Finish in Top 4</span>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}

                                        {/*<div className="OutrightLinkParticipant Market_CN-3">*/}
                                            {/*<div className="OutrightLinkParticipant_Wrapper">*/}
                                                {/*<div className="OutrightLinkParticipant_InnerWrapper">*/}
                                                    {/*<span className="OutrightLinkParticipant_Link">Not to Finish in Top 4</span>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}

                                        {/*<div className="OutrightLinkParticipant Market_CN-3">*/}
                                            {/*<div className="OutrightLinkParticipant_Wrapper">*/}
                                                {/*<div className="OutrightLinkParticipant_InnerWrapper">*/}
                                                    {/*<span className="OutrightLinkParticipant_Link">To Finish in Top 6</span>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}

                                        {/*<div className="OutrightLinkParticipant Market_CN-3">*/}
                                            {/*<div className="OutrightLinkParticipant_Wrapper">*/}
                                                {/*<div className="OutrightLinkParticipant_InnerWrapper">*/}
                                                    {/*<span className="OutrightLinkParticipant_Link">To Finish in Top Half</span>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}

                                        {/*<div className="OutrightLinkParticipant Market_CN-3">*/}
                                            {/*<div className="OutrightLinkParticipant_Wrapper">*/}
                                                {/*<div className="OutrightLinkParticipant_InnerWrapper">*/}
                                                    {/*<span className="OutrightLinkParticipant_Link">To Finish in Bottom Half</span>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}

                                        {/*<div className="OutrightLinkParticipant Market_CN-3">*/}
                                            {/*<div className="OutrightLinkParticipant_Wrapper">*/}
                                                {/*<div className="OutrightLinkParticipant_InnerWrapper">*/}
                                                    {/*<span className="OutrightLinkParticipant_Link">To Finish Bottom</span>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}

                                        {/*<div className="OutrightLinkParticipant Market_CN-3">*/}
                                            {/*<div className="OutrightLinkParticipant_Wrapper">*/}
                                                {/*<div className="OutrightLinkParticipant_InnerWrapper">*/}
                                                    {/*<span className="OutrightLinkParticipant_Link">Competition Specials</span>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}

                                        {/*<div className="OutrightLinkParticipant Market_CN-3">*/}
                                            {/*<div className="OutrightLinkParticipant_Wrapper">*/}
                                                {/*<div className="OutrightLinkParticipant_InnerWrapper">*/}
                                                    {/*<span className="OutrightLinkParticipant_Link">PFA Player of the Year</span>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}

                                        {/*<div className="MarketLinkDummyParticipant Market_CN-3"></div>*/}

                                        {/*<div className="MarketLinkDummyParticipant Market_CN-3"></div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </section>
        )

    }
}

export default Table;
