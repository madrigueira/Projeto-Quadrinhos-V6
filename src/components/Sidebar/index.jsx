import "./index.scss";
import logo from "../../content/logo.png";
import Button from "./Button";
import { batman } from "./assets";

const Sidebar = () => {
  return (
    <div className="main-sidebar">
      <div className="top">
        <div className="logo">
          <img src={logo} alt="Projeto Quadrinhos" />
        </div>
        <div className="editora">
          <img
            src="https://www.pngall.com/wp-content/uploads/11/DC-Comics-Logo-PNG-File.png"
            alt="DC Comics"
          />
        </div>
      </div>
      <div className="biblioteca">
        <h3>Sua Biblioteca</h3>
        <div className="scroll">
          <Button name="Batman" icon={batman} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
