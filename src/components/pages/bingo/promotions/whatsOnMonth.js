import React from "react";
export default class WhatsOnMonth extends React.Component{
    render() {
        return(
            <div className="MainContainerGames fullArticle">
                <div className="topBanner">
                    <img src="/img/WhatsOnThisMonth_948x355.jpg" alt="AOTG BINGO"/>
                </div>
                <div className="textSection">
                    <div className="textSectionWrapp">
                        <p className="header_block">What's On This Month?</p>
                        <p className="sub_header_block">Enjoy enhanced schedules throughout January!</p>
                        <div className="AdvancedList">
                            <div className="infoTextContainer">
                                <p>
                                    Join us in selected rooms throughout <b>January</b>  and enjoy exciting enhanced schedules with <b>fantastic cash prize-pools</b>!

                                </p>
                                <p>How to take part:</p>
                            </div>
                            <ul>
                                <li>
                                    <span className="blue_text">Buy your tickets from the schedule.</span>
                                </li>
                                <li>
                                    <span className="blue_text">Play in the relevant rooms at the times listed in the table below.</span>
                                </li>
                                <li>
                                    <span className="blue_text">Go for <b>fantastic cash prize-pools</b>!</span>
                                </li>
                            </ul>
                        </div>
                        <a href="#" className="PinkButton">Play Bingo</a>

                        <div className="TableContainer">
                            <table className="ContentTable">
                                <tbody>
                                <tr className="HeaderRow">
                                    <th>
                                        Enhanced Schedule
                                    </th>
                                    <th>
                                        Date
                                    </th>
                                    <th>
                                        UK Time
                                    </th>
                                    <th>
                                        Room
                                    </th>
                                </tr>
                                <tr className="ItemRow  ">
                                    <td>
                                        £20,000 Big Night Out
                                    </td>
                                    <td>
                                        Friday 4th
                                    </td>
                                    <td>
                                        18:00 - 23:59
                                    </td>
                                    <td>
                                        A Night on the Town
                                    </td>
                                </tr>
                                <tr className="AlternateItemRow  ">
                                    <td>
                                        £10,000 Rainbow Riches
                                    </td>
                                    <td>
                                        Friday 11th
                                    </td>
                                    <td>
                                        17:00 - 23:59
                                    </td>
                                    <td>
                                        Rainbow Riches Bingo
                                    </td>
                                </tr>
                                <tr className="ItemRow ">
                                    <td>
                                        £25,000 Speed Bingo
                                    </td>
                                    <td>
                                        Saturday 12th
                                    </td>
                                    <td>
                                        12:00 - 23:59
                                    </td>
                                    <td>
                                        The Press Room
                                    </td>
                                </tr>
                                <tr className="ItemRow LastItemRow With2Columns ">
                                    <td>
                                        £25,000 DOND Prize Night
                                    </td>
                                    <td>
                                        Friday 18th
                                    </td>
                                    <td>
                                        16:00 - 23:59
                                    </td>
                                    <td>
                                        DOND 90 Ball Room
                                    </td>
                                </tr>
                                <tr className="ItemRow LastItemRow With2Columns ">
                                    <td>
                                        Rush Hours
                                    </td>
                                    <td>
                                        Monday - Fridays
                                    </td>
                                    <td>
                                        08:00 - 9:00,<br/> 12:00 - 13:00,<br/> 17:00 - 18:00
                                    </td>
                                    <td>
                                        The Press Room
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="infoTextContainer ">
                            <p>
                                These are enhanced schedules run by Virtue Fusion and available to all members of participating Virtue Fusion websites.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}