import { useState } from "react";

const Bar = (props) => {
    const { bgcolor, completed } = props;

    const contentStyle = {
        width: `${completed}%`,
    }

    return (
        <div className="wrapper-bar">
            <div style={contentStyle} className={"bar-content"}>
                <span>{`${completed}%`}</span>
            </div>
        </div>
    );
}

export default Bar;