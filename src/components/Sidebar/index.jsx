import "./index.scss";
import logo from "../../content/logo.png";
import BtnSidebar from "./BtnSidebar";

const Sidebar = () => {
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
          <BtnSidebar />
          <BtnSidebar />
          <BtnSidebar />
          <BtnSidebar />
          <BtnSidebar />
          <BtnSidebar />
          <BtnSidebar />
          <BtnSidebar />
          <BtnSidebar />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
