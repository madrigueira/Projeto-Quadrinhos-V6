import "./index.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const BtnSidebar = ({ title, slug, icon, active, onClick }) => {
  useEffect(() => {
    const path = window.location.pathname;
    const pathName = path.startsWith("/") ? path.slice(1) : path;
    const btn = document.querySelector(".btnSidebar");
    const name = btn.getAttribute("name");
    if (name === pathName) {
      btn.classList.add("active");
    }
  }, []);
  return (
    <Link
      to={"/" + slug}
      className={`btnSidebar ${active ? "active" : ""}`}
      name={slug}
      onClick={onClick}
    >
      <img src={icon} />
      <p>{title}</p>
    </Link>
  );
};

export default BtnSidebar;
