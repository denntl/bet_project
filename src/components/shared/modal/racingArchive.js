import React from 'react';
import AffiliatesHome from "./affiliatesTabs/affiliatesHome";
import AffiliatesInformation from "./affiliatesTabs/affiliatesInformation";
import AffiliatesContact from "./affiliatesTabs/affiliatesContact";


class RacingArchive extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="career" className="modal_bet new_window audioModal" role="dialog">
                <div className="modal_content career">
                    <div className="top_header liveStreaming">
                        <button type="button" className="close"
                                onClick={() => this.props.closeModal('racingArchive')}></button>
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
                                        Horse Racing Archive
                                        <a id="BreadcrumbPlaceHolder_BreadcrumbControl_PageLink"></a>
                                    </td>


                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="MainPagePadding">
                            <div className="bet365ExtraGroup archive">
                                <div className="streaming">
                                    <div id="flashContainer">
                                        <object type="application/x-shockwave-flash" data="https://content001.bet365.com/Extra/bet365ExtraImages/bet365/Streaming/engrow/LiveHorseRacingStreamIn.swf" width="480" height="375" id="flashcontent" >
                                            <param name="wmode" value="transparent"/><param name="bgcolor" value="#000000"/></object>
                                    </div>
                                </div>
                                <div className="TabStrip"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )

    }
}

export default RacingArchive;