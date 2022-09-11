const Debug = ({ enemies, setEnemyHealth, setGold, activeEnemy, gold }) => {

    const resetGold = () => {
        setEnemyHealth(enemies[activeEnemy].health)
        setGold(0)
    }

    const giveGold = () => {
        setGold(gold + 100)
    }


    return (
        <>
            <div className="debug">
                <button onClick={() => resetGold()}
                    className="debug-btn">
                    Reset Gold</button>

                <button onClick={() => giveGold()}
                    className="debug-btn">
                    Give Gold</button>
            </div>
        </>
    );
}

export default Debug;