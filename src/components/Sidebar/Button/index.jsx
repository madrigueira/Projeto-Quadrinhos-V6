import "./index.scss";

const Button = ({ name, icon }) => {
  return (
    <div className="button">
      <img src={icon} alt={name}></img>
      <p>{name}</p>
    </div>
  );
};

export default Button;
