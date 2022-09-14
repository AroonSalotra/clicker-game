const Background = (props) => {
    const { imgUrl } = props
    return (
        <div className="background">
            <img src={imgUrl} className="background-img" alt="" />
        </div>
    );
}

export default Background;