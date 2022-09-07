import ShopIcon from "./ShopIcon";

const Shop = ({ gold, setGold }) => {
    return (
        <div className="wrapper-shop">
            <h2>SHOP</h2>
            <div className="shop-grid">
                <ShopIcon text={"DAM+"} gold={gold} setGold={setGold} />
                <ShopIcon text={"GOLD+"} gold={gold} setGold={setGold} />
                <ShopIcon text={"XP+"} gold={gold} setGold={setGold} />
            </div>
        </div>
    );
}

export default Shop;