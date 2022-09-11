import { useState, useEffect } from "react";

const ShopIcon = (props) => {
    // const [counter, setCounter] = useState(1)
    const [display, setDisplay] = useState(null)
    const [price, setPrice] = useState(50)

    const buyItem = () => {
        if (props.gold >= price) {
            props.setModifier(props.modifier + props.increment)
            props.setGold(props.gold - price)
            setPrice(Math.round(price + price / 1.5))
        }
    }

    console.log(price)

    return (
        <div className="shop-icon">
            <button onClick={() => buyItem()} className={`shop-btn ${display}`}>
                {props.text}</button>
            <p className="price">{price}g</p>
            {/* <p className="shop-text">{props.modifier > 4 ? "Max" : `Lv. ${props.modifier}`}</p> */}
            <p className="shop-text">{`Lv. ${props.modifier}`}</p>
        </div>
    );
}

export default ShopIcon;