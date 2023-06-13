import "./index.scss";
import { useState, useEffect } from "react";
import { request } from "graphql-request";
import logo from "../../content/logo.png";
import BtnSidebar from "./BtnSidebar";

const Sidebar = () => {
  const [comics, setComics] = useState(null);
  const [activeBtnSidebar, setActiveBtnSidebar] = useState(null);

  useEffect(() => {
    const fetchComics = async () => {
      const { comics } = await request(
        "https://api-sa-east-1.hygraph.com/v2/clit3y4d90ci201tf42ph6j7y/master",
        `
        {
          comics{
            id
            title
            icon
          }
        }`
      );
      setComics(comics);
    };
    fetchComics();
  }, []);

  const handleBtnClick = (id) => {
    setActiveBtnSidebar(id);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <img src={logo} className="logo" alt="Projeto Quadrinhos" />
        <img
          src="https://www.pngall.com/wp-content/uploads/11/DC-Comics-Logo-PNG-File.png"
          className="editora"
          alt="Dc Comics"
        />
      </div>
      <div className="biblioteca">
        <h3>Sua biblioteca</h3>
        <div className="scroll">
          {comics &&
            comics.map(({ id, title, icon }) => (
              <BtnSidebar
                key={id}
                title={title}
                icon={icon}
                active={id === activeBtnSidebar}
                onClick={() => handleBtnClick(id)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
