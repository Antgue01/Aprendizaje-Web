
const Button = (props) => {
    const { onClick, name, icon } = props;



    return (<button className = "pick-button" onClick={onClick}>{name} <span className={`${icon}`}> </span></button>);

}
export default Button;