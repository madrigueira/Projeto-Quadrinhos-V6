import "./index.scss";

const BtnSidebar = ({ title, icon, active, onClick }) => {
  return (
    <div className={`btnSidebar ${active ? "active" : ""}`} onClick={onClick}>
      <img src={icon} />
      <p>{title}</p>
    </div>
  );
};

export default BtnSidebar;
