import "./Button.scss";

const Button = ({name, handleClick, isAltForm}) => {
    return(
        <button className={isAltForm ? "button button--form" : "button"} onClick={handleClick}>{name}</button>
    );
}

export default Button;