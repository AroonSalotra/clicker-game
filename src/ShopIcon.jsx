import { useState } from "react";

const ShopIcon = (props) => {
    const [counter, setCounter] = useState(1)

    const buyItem = (cost) => {
        //   (props.gold <= cost ?  :)
        if (props.gold >= cost) {
            setCounter(counter + 1)
            props.setGold(props.gold - cost)
        }
    }

    const handleClick = () => {
        // return (counter < 10 ? setCounter(counter + 1) : null)
        switch (counter) {
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
            case 5:
                buyItem(299)
                break;

            default:
                return null
        }
    }

    return (
        <div className="shop-icon">
            {/* {props.text} */}
            <button onClick={() => handleClick()}>{props.text}</button>
            <p>{counter > 9 ? "max" : "level"} {counter}</p>
        </div>
    );
}

export default ShopIcon;