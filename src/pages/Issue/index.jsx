import "./index.scss";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Issue = ({ comics, series }) => {
  const [issuePath, setIssuePath] = useState();
  const [pagePath, setPagePath] = useState();
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

  useEffect(() => {
    // Lógica para recarregar as imagens aqui
    const loadImage = async () => {
      try {
        const response = await fetch(
          `https://raw.githubusercontent.com/madrigueira/pq-content/main/${comics.slug}/${series.slug}/${issuePath}/${pagePath}.png`
        );
      } catch (error) {
        console.error(error);
      }
    };

    loadImage();
  }, [comics.slug, series.slug, issuePath, pagePath]);

  const intPagePath = parseInt(pagePath);
  const nextPage = `${comics.slug}/${series.slug}/${issuePath}/page-${
    intPagePath + 1
  }`;
  const prevPage = `${comics.slug}/${series.slug}/${issuePath}/page-${
    intPagePath - 1
  }`;

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
    </div>
  );
};

export default Issue;
