import "./index.scss";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Issue = ({ comics, series }) => {
  const [issuePath, setIssuePath] = useState();
  const [pagePath, setPagePath] = useState();
  const [files, setFiles] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    const issuePathRegex = /\/(\d+)\//;
    const issuePathMatch = path.match(issuePathRegex);
    const issuePath = issuePathMatch ? issuePathMatch[1] : null;
    setIssuePath(issuePath);

    const pagePathPartes = path.split("/");
    const pagePath = pagePathPartes.pop().slice(5);
    setPagePath(pagePath);
  }, [location]);

  const intPagePath = parseInt(pagePath);
  const nextPage = `${comics.slug}/${series.slug}/${issuePath}/page-${
    intPagePath + 1
  }`;
  const prevPage = `${comics.slug}/${series.slug}/${issuePath}/page-${
    intPagePath - 1
  }`;

  useEffect(() => {
    const getFiles = async () => {
      const response = await fetch(
        `https://api.github.com/repos/madrigueira/pq-content/contents/${comics.slug}/${series.slug}/1`
      );
      const data = await response.json();

      const filteredFiles = data.filter((item) => item.type === "file");
      const fileCount = filteredFiles.length;
      setFiles(fileCount);
    };

    getFiles();
  }, []);

  // useEffect(() => {
  if (intPagePath <= 0) {
    document.querySelector(".test").classList.add("active");
    console.log("jej");
  }
  // }, []);

  return (
    <div className="issue">
      <div className="scroll">
        <img
          src={`https://raw.githubusercontent.com/madrigueira/pq-content/main/${comics.slug}/${series.slug}/${issuePath}/${pagePath}.png`}
        />
        <div className="controls">
          <Link to={`../${prevPage}`}>Voltar</Link>
          <br />
          <Link to={`../${nextPage}`}>Ir</Link>
        </div>
      </div>
      <div className="timeline"></div>
      <div className="test">
        <h1>kek</h1>
      </div>
    </div>
  );
};

export default Issue;
