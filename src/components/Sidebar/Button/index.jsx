import "./index.scss";

const Button = ({ name, icon }) => {
  return (
    <div className="button">
      <img src={`./src/content/sidebar-imgs/batman.png`} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default Button;
