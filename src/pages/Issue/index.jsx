import "./index.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Issue = ({ comics, series }) => {
  const [issuePath, setIssuePath] = useState();
  const [pagePath, setPagePath] = useState();

  useEffect(() => {
    const path = window.location.pathname;

    const issuePathRegex = /\/(\d+)\//;
    const issuePathMatch = path.match(issuePathRegex);
    const issuePath = issuePathMatch ? issuePathMatch[1] : null;
    setIssuePath(issuePath);

    const pagePathPartes = path.split("/");
    const pagePath = pagePathPartes.pop().slice(5);
    setPagePath(pagePath);
  }, []);

  return (
    <div className="issue">
      <div className="scroll">
        <img
          src={
            "https://raw.githubusercontent.com/madrigueira/pq-content/main/" +
            comics.slug +
            "/" +
            series.slug +
            "/" +
            issuePath +
            "/" +
            pagePath +
            ".png"
          }
        />
        <div className="controls">
          <Link to={"/hack-slash/hack-slash-v1/1/page-11"}>Voltar</Link>
          <br />
          <Link to={"../page-2"}>Ir</Link>
        </div>
      </div>
      <div className="timeline"></div>
    </div>
  );
};

export default Issue;
