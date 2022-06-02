import React from "react";
import { Component } from "react";

import AppStyleMealsItemTab from "./app_style_meals_tab";


class AppStyleMealsTabs extends Component {
    render() {
        const {dataTabs} = this.props;
        const tabsItem = dataTabs.map((item) => {
            return (<AppStyleMealsItemTab key = {item.id} name = {item.name} />);
            
        });
        return (
            <div className="tabheader__items">
                {tabsItem}
            </div>
        )

    }
}

export default AppStyleMealsTabs;