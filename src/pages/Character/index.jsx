import "./index.scss";

const Character = ({ comics }) => {
  const pogg =
    "https://imgv2-1-f.scribdassets.com/img/document/465068966/original/be1247240e/1680792359?v=1";
  const bg = {
    backgroundImage:
      "linear-gradient(transparent 0%, #1f1f1f 100%), url('" + pogg + "')",
  };
  return (
    <div className="character">
      <div className="content">
        <div className="banner" style={bg}></div>
        <div className="grid">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Character;
