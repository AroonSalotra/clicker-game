const Tracker = ({ gold, health }) => {
    return (
        <div className="tracker">
            <div className="health">
                <p className="health-text">{health}</p>
            </div>
            <h2 className="gold">{gold}</h2>
        </div>

    );
}

export default Tracker;