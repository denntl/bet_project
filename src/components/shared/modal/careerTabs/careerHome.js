import React from 'react';


class CareerHome extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            selectbox:false
        }
    }
    toggle=(type)=>{
        if (type == "selectbox") {
            this.setState({selectbox: !this.state.selectbox})
        }
    }
    componentDidMount() {
        $('.careerCarousel').owlCarousel({
            center: true,
            items: 1,
            loop: true,
            // autoWidth:true,
            margin: 0,
            nav: false,
            autoplay:true,
            autoplayTimeout:5000,
        });
    }

    render() {
        return (
            <div className="containerCareer">
                <div className="careerCarousel owl-carousel owl-theme">
                    <div className="item">
                        <div className="contentWrappCareer ">
                            <div className="button-box-containerCareer">
                                <div className="bannerTitleCareer">JOIN THE BEST</div>
                                <div className="bannerTextCareer">
                                    THE WORLD'S LEADING ONLINE <br/> GAMBLING GROUP
                                </div>
                            </div>
                            <div className="sliderImg one">
                                <img src="../../../img/allen_slide1.png" alt="img"/>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="contentWrappCareer ">
                            <div className="button-box-containerCareer">
                                <div className="bannerTitleCareer">Technological <br/> Innovation</div>
                                <div className="bannerTextCareer">
                                    Information Technology lies<br/> at the heart of our business
                                </div>
                            </div>
                            <div className="sliderImg second">
                                <img src="../../../img/slide-2.png" alt="img"/>
                            </div>
                        </div>

                    </div>
                    <div className="item">
                        <div className="contentWrappCareer ">
                            <div className="contentWrappCareer ">
                                <div className="button-box-containerCareer">
                                    <div className="bannerTitleCareer">CUSTOMER FOCUSED</div>
                                    <div className="bannerTextCareer">
                                        OUR OPERATIONS AND MARKETING <br/>
                                        TEAMS PROVIDE THE BEST POSSIBLE <br/>
                                        EXPERIENCE TO ALL OUR CUSTOMERS <br/>WORLDWIDE
                                    </div>
                                </div>
                                <div className="sliderImg third">
                                    <img src="../../../img/slide-3.png" alt="img"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-twelve">

                    <div id="job-search" className="six columns offset-by-three box box-yellow">

                        <div className="padding">

                            <form>
                                <label>Current Vacancies</label>
                                <input id="_input" type="text" className="selectbox" onClick={()=>this.toggle('selectbox')}/>
                                {this.state.selectbox ?
                                    <div id="_container" className="selectbox-wrapper">
                                        <ul>
                                            <li id="_input_all" className="selected">Select an area</li>
                                            <li id="_input_all">All</li>
                                            <li id="_input_information-technology">Information Technology</li>
                                            <li id="_input_operations-marketing">Operations &amp; Marketing</li>
                                            <li id="_input_trading">Trading</li>
                                        </ul>
                                    </div>
                                :""}

                                    {/*<select name="role" >*/}
                                        {/*<option value="all">Select an area</option>*/}
                                        {/*<option value="all">All</option>*/}
                                        {/*<option value="information-technology">Information Technology</option>*/}
                                        {/*<option value="operations-marketing">Operations &amp; Marketing</option>*/}
                                        {/*<option value="trading">Trading</option>*/}
                                    {/*</select>*/}

                            </form>
                        </div>
                    </div>
                </div>
                <div className="divider divider-top"></div>
                <div id="homepage-about" className="twelve columns">

                    <div className="six columns alpha">

                        <h2>About Us</h2>

                        <h3>Work for the world's leading online gambling group</h3>

                        <p><strong>bet365 recognises that people are key to our success. If you believe that you have
                            the drive and tenacity to become part of a dynamic and forward-thinking organisation, we
                            would like to hear from you.</strong></p>

                        <a className="btn-find-more" href="#">Find out more</a>

                    </div>

                    <div className="six columns omega">

                        <ul>
                            <li className="two columns alpha">
                                <img src="../../../img/icon-about-customers.png" alt="icon"/>
                                    <strong>22 million customers</strong>
                            </li>
                            <li className="two columns">
                                <img src="../../../img/icon-about-countries.png" alt="icon"/>
                                    <strong>Across 200 countries</strong>
                            </li>
                            <li className="two columns omega">
                                <img src="../../../img/icon-about-employees.png" alt="icon"/>
                                    <strong>Employ over 3,500 people</strong>
                            </li>
                        </ul>

                    </div>

                </div>
            </div>
        )

    }
}

export default CareerHome;