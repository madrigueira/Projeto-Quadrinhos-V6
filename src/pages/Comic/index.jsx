import "./index.scss";
import { Link } from "react-router-dom";

const Comic = ({ comics }) => {
  const bg = {
    backgroundImage:
      "linear-gradient(transparent 0%, #1f1f1f 100%), url('https://raw.githubusercontent.com/madrigueira/pq-content/main/" +
      comics.slug +
      "/banner.png')",
  };
  return (
    <div className="comic">
      <div className="content">
        <div className="banner" style={bg}></div>
        <div className="grid">
          {comics &&
            comics.series.map(({ slug, title }) => (
              <Link key={slug} to={slug}>
                <img
                  src={
                    "https://raw.githubusercontent.com/madrigueira/pq-content/main/" +
                    comics.slug +
                    "/" +
                    slug +
                    "/cover.jpg"
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

export default Comic;
