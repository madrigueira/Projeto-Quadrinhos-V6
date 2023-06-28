import "./index.scss";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Serie = ({ comics, series }) => {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    const getFolders = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/madrigueira/pq-content/contents/${comics.slug}/${series.slug}`
        );
        const data = await response.json();

        const filteredFolders = data.filter((item) => item.type === "dir");
        setFolders(filteredFolders);
      } catch (error) {
        console.error("Erro ao obter as pastas:", error);
      }
    };
    getFolders();
  }, []);

  return (
    <div className="serie">
      <h1>{series.title}</h1>
      <div className="grid">
        {folders.map((folder) => (
          <Link key={folder.name} to={`${folder.name}/page-1`}>
            {folder.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Serie;
