import ShopIcon from "./ShopIcon";
import { useEffect, useState } from "react";

const Shop = ({ gold, setGold, damage, setDamage, goldModifier, setGoldModifier }) => {

    const [damageModifier, setDamageModifier] = useState(1)
    // const [goldModifier, setGoldModifier] = useState(1)
    const [xpModifier, setXpModifier] = useState(1)

    console.log(`MODIFIERS: DMG: ${damageModifier} GOLD: ${goldModifier} XP: ${xpModifier}`)

    useEffect(() => {
        setDamage(damage * damageModifier)
    }, [damageModifier])

    return (
        <div className="wrapper-shop">
            <h2>SHOP</h2>
            <p className="gold">{gold}g</p>
            <div className="shop-grid">
                <ShopIcon text={"Dam+"} level={true}
                    modifier={damageModifier} setModifier={setDamageModifier}
                    increment={0.3} gold={gold} setGold={setGold} />

                <ShopIcon text={"Skip"} />

                {/* <ShopIcon text={"XP+"}
                    modifier={xpModifier} setModifier={setXpModifier}
                    gold={gold} setGold={setGold} /> */}
            </div>
        </div>
    );
}

export default Shop;