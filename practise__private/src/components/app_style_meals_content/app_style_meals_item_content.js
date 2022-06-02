import React from "react";

const AppStyleMealsItemContent = ({ text, imagePath }) => {
    return (
        <div className="tabcontent">
            <img src={imagePath} alt="vegy" />
            <div className="tabcontent__descr">
                {text}
            </div>
        </div>
    );
}

export default AppStyleMealsItemContent;