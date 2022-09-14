import { BsHeartFill } from "react-icons/bs"

const Tracker = ({ gold, health, goldModifier }) => {

    return (
        <>
            {/* <h2>Health</h2> */}
            <div className="tracker">
                <div className="health">
                    <BsHeartFill className="icon" />
                    <p className="health-text">{health.toFixed()}</p>
                    {/* <p className="health-text">{health}</p> */}
                </div>
                <div className="wrapper-gold">
                    {/* <p className="gold">{gold}</p> */}
                    {/* <p className="gold-modifier" >x{goldModifier}</p> */}
                </div>
                {/* <h2 className="gold">{gold}</h2>
            <p>x{goldModifier}</p> */}
            </div>
        </>

    );
}

export default Tracker;