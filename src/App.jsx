import "./App.scss";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="main">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content"></div>
    </div>
  );
};

export default App;
