const Tracker = ({ gold, health, goldModifier }) => {
    return (
        <div className="tracker">
            <div className="health">
                <p className="health-text">{health}</p>
            </div>
            <div className="wrapper-gold">
                <p className="gold">{gold}</p>
                {/* <p className="gold-modifier" >x{goldModifier}</p> */}
                <p className="gold-modifier" >{goldModifier ? `x ${goldModifier}` :
                    null
                }</p>
            </div>
            {/* <h2 className="gold">{gold}</h2>
            <p>x{goldModifier}</p> */}
        </div>

    );
}

export default Tracker;