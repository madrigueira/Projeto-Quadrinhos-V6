import "./index.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const BtnSidebar = ({ title, slug, active, onClick }) => {
  useEffect(() => {
    const path = window.location.pathname;
    const pathName = path.startsWith("/") ? path.slice(1) : path;
    const firstPathName = pathName.split("/")[0];
    const btns = document.querySelectorAll(".btnSidebar");
    btns.forEach((btn) => {
      const name = btn.getAttribute("name");
      if (name === firstPathName) {
        btn.classList.add("active");
      }
    });
  }, []);
  return (
    <Link
      to={"/" + slug}
      className={`btnSidebar ${active ? "active" : ""}`}
      name={slug}
      onClick={onClick}
    >
      <img
        src={
          "https://raw.githubusercontent.com/madrigueira/pq-content/main/" +
          slug +
          "/icon.png"
        }
      />
      <p>{title}</p>
    </Link>
  );
};

export default BtnSidebar;
