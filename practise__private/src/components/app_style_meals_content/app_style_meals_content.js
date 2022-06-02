import React from "react";
import { Component } from "react";
import AppStyleMealsItemContent from "./app_style_meals_item_content";




class AppStyleMealContent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { dataContent } = this.props;
        const tabsItemContent = dataContent.map((item) => {
            return (
                <AppStyleMealsItemContent key={item.id} text={item.text} imagePath={item.imagePath} />
            )
        });
        return (
            <div>
                {tabsItemContent}
            </div>
        )
    }
}

export default AppStyleMealContent;