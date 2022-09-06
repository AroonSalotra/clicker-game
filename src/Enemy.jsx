import { useState } from "react";

const Enemy = ({ enemies }) => {

    const [enemy, setEnemy] = useState(0)


   

    return (
        <>
            <div className="enemy" id="enemy" />
            {/* <button onClick={() => activeEnemy()}>Random</button> */}
        </>
    );
}

export default Enemy;