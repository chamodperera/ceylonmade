import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <div className="nav">
        <Navbar />
      </div>

      <div className="body">
        <h1>Hi</h1>
      </div>

      <div>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
