import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Container() {
  return (
    <div className="app">
      <div className="nav">
        <Navbar />
      </div>

      <div className="body">
        <Outlet />
      </div>

      {/* <div>
        <Sidebar />
      </div> */}
    </div>
  );
}
