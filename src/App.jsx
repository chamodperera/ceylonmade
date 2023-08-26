import "./App.css";
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
      </div>
    </div>
  );
}

export default App;
