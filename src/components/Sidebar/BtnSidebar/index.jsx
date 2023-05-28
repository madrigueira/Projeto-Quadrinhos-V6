import { useEffect, useRef } from "react";
import "./index.scss";

const BtnSidebar = ({ className }) => {
  const btnSidebar = useRef(null);

  useEffect(() => {
    if (className === "active") {
      btnSidebar.current.classList.add("active");
    }
  }, []);
  return (
    <div className="btnSidebar" ref={btnSidebar}>
      <img src="https://qph.cf2.quoracdn.net/main-qimg-0d29e0d15c7dd741fda33694b550f07e-pjlq" />
      <p>Mulher-maravilha</p>
    </div>
  );
};

export default BtnSidebar;
