import "./App.css";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="nav">
        <Navbar />
      </div>

      <div className="body">
        <Outlet />
        <Feed />
      </div>
    </div>
  );
}

export default App;
