import "./index.scss";
import { Link } from "react-router-dom";

const Character = ({ comics }) => {
  const bg = {
    backgroundImage:
      "linear-gradient(transparent 0%, #1f1f1f 100%), url('" +
      comics.banner +
      "')",
  };
  return (
    <div className="character">
      <div className="content">
        <div className="banner" style={bg}></div>
        <div className="grid">
          {comics &&
            comics.series.map(({ cover, title }) => (
              <Link>
                <img src={cover} />
                <p>{title}</p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Character;
