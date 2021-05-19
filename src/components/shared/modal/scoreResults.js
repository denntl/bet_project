import React from 'react';
import AffiliatesHome from "./affiliatesTabs/affiliatesHome";
import AffiliatesInformation from "./affiliatesTabs/affiliatesInformation";
import AffiliatesContact from "./affiliatesTabs/affiliatesContact";


class ScoreResults extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="career" className="modal_bet new_window audioModal" role="dialog">
                <div className="modal_content career">
                    <div className="top_header liveStreaming">
                        <button type="button" className="close"
                                onClick={() => this.props.closeModal('scoreResults')}></button>
                        <div className="logo"></div>
                        <div className="admin_block">
                            <div className="user_block_wrapper">
                                <div className="user_block ">
                                    <div className="input_block">
                                        <input type="text" className="input_field light_green_text" name="email"
                                               placeholder="Username"/>
                                        <input type="password" className="input_field light_green_text" name="password"
                                               placeholder="Password"/>
                                        <button type="submit" className="loginBtn " id="loginBtn">GO</button>
                                        <button className="loginBtn load">
                                            <span className="bs-BtnText_NoMessageSpinner"></span>
                                        </button>

                                    </div>
                                    <div className="helper_block">
                                        <a href="#">Join Now</a>
                                        <a href="#">Lost Login?</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="containerMain scoreResult">
                        <div className="AdminHoverDiv">
                            <div className="PromotionGroupContainer">
                                <div className="PromotionGroupContainerWrapp">
                                    <div className="ActivePromotionName">
                                        Results &amp; Archive
                                    </div>
                                    <div className="ActivePromotionDescription">
                                        Search previous results
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="BreadcrumbPadding">
                            <table cellPadding="0" cellSpacing="0">
                                <tbody>
                                <tr>
                                    <td className="IconCell">
                                        <img id="BreadcrumbPlaceHolder_BreadcrumbControl_IconImage"
                                             src="/../../../img/BreadCrumb_Arrow.gif"
                                              align="middle"/>
                                    </td>
                                    <td id="BreadcrumbPlaceHolder_BreadcrumbControl_PromotionalGroupCell"
                                        className="PromotionalGroupCell">

                                        Results &amp; Archive
                                    </td>

                                    <td id="BreadcrumbPlaceHolder_BreadcrumbControl_PromotionalGroupAndPageDividerCell"
                                        className="PromotionalGroupAndPageDividerCell">
                                        -
                                    </td>

                                    <td id="BreadcrumbPlaceHolder_BreadcrumbControl_PageCell" className="PageCell">
                                        Results
                                        <a id="BreadcrumbPlaceHolder_BreadcrumbControl_PageLink"></a>
                                    </td>


                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="MainPagePadding">
                            <div className="bet365ExtraGroup">
                                <div className="ContentGroup">
                                    <div className="ErrorMessage">
                                        <p>
                                            This service is available to bet365 Members only. Please Login above.
                                        </p>
                                    </div>
                                    <div className="ContentGroupTitle">Search Criteria </div>
                                    <div className="SearchSection">
                                        <div className="labelText">
                                            Sport
                                        </div>

                                        <div id="MainPagePlaceHolder_ctl00_Results_Search_ctl00_sportsDdlDiv"
                                             className="Dropdown">

                                            <div>
                                                <select
                                                    name="ctl00$MainPagePlaceHolder$ctl00$Results_Search$ctl00$SportsDDL"
                                                    id="MainPagePlaceHolder_ctl00_Results_Search_ctl00_SportsDDL"
                                                    disabled="disabled" className="aspNetDisabled Dropdown">
                                                    <option selected="selected" value="0">Please select a sport</option>
                                                    <option value="118">Alpine Skiing</option>
                                                    <option value="12">American Football</option>
                                                    <option value="93">Archery</option>
                                                    <option value="11">Athletics</option>
                                                    <option value="36">Australian Rules</option>
                                                    <option value="94">Badminton</option>
                                                    <option value="89">Bandy</option>
                                                    <option value="16">Baseball</option>
                                                    <option value="18">Basketball</option>
                                                    <option value="95">Beach Volleyball</option>
                                                    <option value="119">Biathlon</option>
                                                    <option value="120">Bobsleigh</option>
                                                    <option value="66">Bowls</option>
                                                    <option value="9">Boxing/MMA</option>
                                                    <option value="96">Canoe/kayak</option>
                                                    <option value="97">Combat Sports</option>
                                                    <option value="3">Cricket</option>
                                                    <option value="122">Cross Country Skiing</option>
                                                    <option value="98">Curling</option>
                                                    <option value="38">Cycling</option>
                                                    <option value="15">Darts</option>
                                                    <option value="99">Diving</option>
                                                    <option value="100">Equestrian</option>
                                                    <option value="151">Esports</option>
                                                    <option value="101">Fencing</option>
                                                    <option value="90">Floorball</option>
                                                    <option value="10">Formula 1</option>
                                                    <option value="138">Freestyle Skiing</option>
                                                    <option value="83">Futsal</option>
                                                    <option value="75">Gaelic Sports</option>
                                                    <option value="7">Golf</option>
                                                    <option value="4">Greyhounds</option>
                                                    <option value="102">Gymnastics</option>
                                                    <option value="78">Handball</option>
                                                    <option value="84">Hockey</option>
                                                    <option value="2">Horse Racing</option>
                                                    <option value="64">Hurling</option>
                                                    <option value="17">Ice Hockey</option>
                                                    <option value="115">Indy</option>
                                                    <option value="79">International Rules</option>
                                                    <option value="153">Kabaddi</option>
                                                    <option value="143">Lacrosse</option>
                                                    <option value="124">Luge</option>
                                                    <option value="103">Modern Pentathlon</option>
                                                    <option value="27">Motorbikes</option>
                                                    <option value="65">Nascar</option>
                                                    <option value="147">Netball</option>
                                                    <option value="121">Nordic Combined</option>
                                                    <option value="126">Other Motor Sports</option>
                                                    <option value="142">Pelota</option>
                                                    <option value="104">Pesapallo</option>
                                                    <option value="140">Poker</option>
                                                    <option value="35">Pool</option>
                                                    <option value="116">Rally</option>
                                                    <option value="105">Rowing</option>
                                                    <option value="19">Rugby League</option>
                                                    <option value="8">Rugby Union</option>
                                                    <option value="113">Sailing</option>
                                                    <option value="152">Sepak Takraw</option>
                                                    <option value="106">Shooting</option>
                                                    <option value="125">Skating</option>
                                                    <option value="127">Skeleton</option>
                                                    <option value="123">Ski Jumping</option>
                                                    <option value="14">Snooker</option>
                                                    <option value="139">Snowboarding</option>
                                                    <option value="1">Soccer</option>
                                                    <option value="117">Softball</option>
                                                    <option value="136">Specials - Australia</option>
                                                    <option value="130">Specials - China</option>
                                                    <option value="133">Specials - Denmark</option>
                                                    <option value="135">Specials - Germany</option>
                                                    <option value="134">Specials - Italy</option>
                                                    <option value="129">Specials - North America</option>
                                                    <option value="131">Specials - Norway</option>
                                                    <option value="132">Specials - Sweden</option>
                                                    <option value="5">Specials - United Kingdom</option>
                                                    <option value="137">Specials - World</option>
                                                    <option value="24">Speedway</option>
                                                    <option value="107">Squash</option>
                                                    <option value="114">Supercars</option>
                                                    <option value="148">Surfing</option>
                                                    <option value="108">Swimming</option>
                                                    <option value="92">Table Tennis</option>
                                                    <option value="128">Ten Pin Bowling</option>
                                                    <option value="13">Tennis</option>
                                                    <option value="141">Touring Cars</option>
                                                    <option value="109">Triathlon</option>
                                                    <option value="88">Trotting</option>
                                                    <option value="73">US Horse Racing</option>
                                                    <option value="2022">Virtual Cricket</option>
                                                    <option value="2019">Virtual Cycling</option>
                                                    <option value="2023">Virtual Darts</option>
                                                    <option value="145">Virtual Motors</option>
                                                    <option value="146">Virtual Soccer</option>
                                                    <option value="2020">Virtual Tennis</option>
                                                    <option value="2021">Virtual Trotting</option>
                                                    <option value="91">Volleyball</option>
                                                    <option value="110">Water Polo</option>
                                                    <option value="111">Weightlifting</option>
                                                    <option value="80">Winter Sports</option>
                                                    <option value="112">Wrestling</option>

                                                </select>
                                            </div>

                                            <div id="MainPagePlaceHolder_ctl00_Results_Search_ctl00_SportsDisableDiv"/>

                                        </div>
                                    </div>
                                    <div className="SepratorGroup"></div>
                                    <div className="SearchSection">
                                        <div className="labelText">Date</div>

                                        <span className="RadioButt">
                                            <input type="radio" value="Date24" checked="checked"/>
                                            <label>Last 24hrs</label>
                                        </span>

                                        <span className="RadioButt">
                                            <input type="radio"  value="Date48"/>
                                            <label>Last 48hrs</label>
                                        </span>

                                        <span className="RadioButt">
                                            <input type="radio" value="DateFrom"/>
                                                <label>From</label>
                                        </span>
                                        <div className="dataInputWrapp">
                                            <input type="image"
                                                   className="fLeft" src="../../img/Cal_Icon.gif"/>

                                                <input type="text" className="DateInput"/>


                                                    <div className="DateTxt2"><strong>To</strong></div>

                                                    <input type="image"
                                                           className="fLeft"
                                                           src="/../../img/Cal_Icon.gif"/>

                                                        <input type="text" className="DateInput"/>

                                        </div>

                                    </div>
                                    <div className="SepratorGroup"></div>
                                    <div className="SearchSection">
                                        <div className="labelText">
                                            Search by
                                        </div>

                                        <div id="MainPagePlaceHolder_ctl00_Results_Search_ctl00_sportsDdlDiv"
                                             className="Dropdown">
                                            <div>
                                                <select
                                                    disabled="disabled" className="aspNetDisabled Dropdown">
                                                    <option selected="selected" value="0"></option>
                                                    <option value="118">Alpine Skiing</option>
                                                    <option value="12">American Football</option>
                                                    <option value="93">Archery</option>
                                                    <option value="11">Athletics</option>
                                                    <option value="36">Australian Rules</option>
                                                    <option value="94">Badminton</option>

                                                </select>
                                            </div>

                                            <div id="MainPagePlaceHolder_ctl00_Results_Search_ctl00_SportsDisableDiv"/>

                                        </div>
                                    </div>
                                    <div className="SepratorGroup"></div>
                                    <div className="aGetResultsWrapp">
                                        <div className="aspNetDisabled aGetResults">Get Results</div>
                                    </div>

                                    <div className="SepratorGroup"></div>
                                    <div className="ContentGroupTitle">Search Criteria </div>
                                    <div className="QuickSearch">
                                        <table cellPadding="0" cellSpacing="0">
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <div
                                                        id="MainPagePlaceHolder_ctl00_Results_Search_ctl00_quickSearchUL1">
                                                        <ul>
                                                            <li><a href="javascript:void(0)">Soccer - UEFA Champions League</a></li>
                                                            <li><a href="javascript:void(0)">Soccer - FA Cup</a></li>
                                                            <li><a href="javascript:void(0)">Soccer - UEFA Europa League</a></li>
                                                        </ul>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div
                                                        id="MainPagePlaceHolder_ctl00_Results_Search_ctl00_quickSearchUL2">
                                                        <ul>
                                                            <li><a href="javascript:void(0)">Tennis - Today/Yesterday's Results</a></li>
                                                            <li><a href="javascript:void(0)">Basketball - NBA</a></li>
                                                            <li><a href="javascript:void(0)">Basketball - NCAAB</a></li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default ScoreResults;