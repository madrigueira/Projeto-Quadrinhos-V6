import "./index.scss";

const Character = ({ comics }) => {
  const bg = {
    backgroundImage:
      "linear-gradient(transparent 0%, #1f1f1f 0%), url('" +
      comics.banner +
      "')",
  };
  return (
    <div className="character">
      <div className="banner" style={bg}></div>
    </div>
  );
};

export default Character;
