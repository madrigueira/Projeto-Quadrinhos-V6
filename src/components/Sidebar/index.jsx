import "./index.scss";
import { useState } from "react";
import logo from "../../content/logo.png";
import BtnSidebar from "./BtnSidebar";

const Sidebar = ({ comics }) => {
  const [activeBtnSidebar, setActiveBtnSidebar] = useState(null);

  const handleBtnClick = (slug) => {
    const btns = document.querySelectorAll(".btnSidebar");
    const path = window.location.pathname;
    const pathName = path.startsWith("/") ? path.slice(1) : path;
    const firstPathName = pathName.split("/")[0];
    btns.forEach((btn) => {
      if (slug != firstPathName) {
        btn.classList.remove("active");
      }
    });
    setActiveBtnSidebar(slug);
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
            comics.map(({ title, slug }) => (
              <BtnSidebar
                key={slug}
                title={title}
                slug={slug}
                active={slug === activeBtnSidebar}
                onClick={() => handleBtnClick(slug)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
