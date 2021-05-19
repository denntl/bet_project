import React from 'react';



class HelperHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="helper_header">
                <div className="top_helper_header">
                    <div className="helper_menu" onClick={()=> this.props.toggle()}>
                        <div className={`helper_menu_icon ${this.props.navMenu == false ? "" :"close_icon"}`} />
                        <div className="helper_menu_text">Help</div>
                    </div>
                    <a href="javascript:void(0)" className="helper_header_logo" onClick={()=>this.props.changeContent('home')}/>
                    <div className="search_btn"></div> {/*class search_close*/}
                </div>
                <div className="bottom_helper_header">
                    <div className="search_text">How can we help you?</div>
                    <div className="search_box">
                        <input type="text" placeholder="Search" className="helper_search_input"/>
                        <div className="search_btn"></div>
                    </div>
                </div>

            </div>
        )

    }
}

export default HelperHeader;