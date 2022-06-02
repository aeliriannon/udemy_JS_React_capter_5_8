import React from "react";
import { Component } from "react";

class AppStyleMealsItemTab extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            tabStatus: false
        }
    // }
    // onTabStatus = () => {
    //     this.setState = (({tabStatus}) => ({

    //     }))
    // }
    render() {
        const {name} = this.props;
        return (<div className="tabheader__item tabheader__item_active">{name}</div>);
    }    
}

export default AppStyleMealsItemTab;