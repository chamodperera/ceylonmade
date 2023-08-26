import "./App.css";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="nav">
        <Navbar />
      </div>

      <div className="body">
        <Outlet />
      </div>

      <div>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
