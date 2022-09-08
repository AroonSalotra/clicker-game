import { useState } from "react";

const Bar = (props) => {
    const { bgcolor, completed } = props;

    const barDisplay = {
        width: `${completed}%`,
    }

    return (
        <div className="wrapper-bar">
            <div style={barDisplay} className={"bar-content"}>
                <span>{`${completed}%`}</span>
            </div>
        </div>
    );
}

export default Bar;