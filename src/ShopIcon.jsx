import { useState } from "react";

const ShopIcon = (props) => {
    // const [counter, setCounter] = useState(1)

    const buyItem = (cost) => {
        if (props.gold >= cost) {
            props.setModifier(props.modifier + 1)
            props.setGold(props.gold - cost)
        }
    }

    const handleClick = () => {
        switch (props.modifier) {
            case 1:
                buyItem(49)
                break;
            case 2:
                buyItem(99)
                break;
            case 3:
                buyItem(149)
                break;
            case 4:
                buyItem(199)
                break;
            default:
                return null
        }
    }

    return (
        <div className="shop-icon">
            <button onClick={() => handleClick()}>{props.text}</button>
            <p>{props.modifier > 4 ? "Max" : `Level ${props.modifier}`}</p>
        </div>
    );
}

export default ShopIcon;