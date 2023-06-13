import "./index.scss";

const Character = ({ slug }) => {
  return (
    <div className="character">
      <h1>{slug}</h1>
    </div>
  );
};

export default Character;
