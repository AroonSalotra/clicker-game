import { useState } from "react";

const Enemy = ({ enemies, activeEnemy }) => {

    return (
        <>
            <h1>{enemies[activeEnemy].name}</h1>
            <div className={`enemy ${enemies[activeEnemy].name}`} id="enemy"></div>
            {/* <button onClick={() => activeactiveEnemy()}>Random</button> */}
        </>
    );
}

export default Enemy;