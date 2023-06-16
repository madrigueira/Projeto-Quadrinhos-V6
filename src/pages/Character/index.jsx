import "./index.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Character = ({ comics }) => {
  const bg = {
    backgroundImage:
      "linear-gradient(transparent 0%, #1f1f1f 100%), url('https://raw.githubusercontent.com/madrigueira/Projeto-Quadrinhos-V6/main/src/content/Dc/" +
      comics.slug +
      "/banner-" +
      comics.slug +
      ".png')",
  };
  return (
    <div className="character">
      <div className="content">
        <div className="banner" style={bg}></div>
        <div className="grid">
          {comics &&
            comics.series.map(({ slug, title }) => (
              <Link key={slug}>
                <img
                  src={
                    "https://raw.githubusercontent.com/madrigueira/Projeto-Quadrinhos-V6/main/src/content/Dc/" +
                    comics.slug +
                    "/comics/" +
                    slug +
                    ".jpg"
                  }
                />
                <div className="box">
                  <h5>{title}</h5>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Character;
