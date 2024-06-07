import "./style.css"

const Loading = ({position}) => {
    return (
        <div className={`dots__container ${position}`}>
            <div className="dots__content">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
    )
}

export default Loading