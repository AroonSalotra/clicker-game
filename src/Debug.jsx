const Debug = ({ enemies, setEnemyHealth, setGold, activeEnemy }) => {

    const handleClick = () => {
        setEnemyHealth(enemies[activeEnemy].health)
        setGold(0)
    }

    return (
        <>
            <button onClick={() => handleClick()}>Reset Gold</button>
        </>
    );
}

export default Debug;