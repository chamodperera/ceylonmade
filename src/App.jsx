import "./App.css";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <div className="nav">
        <Navbar />
      </div>

      <div className="body">
        <Feed />
      </div>
    </div>
  );
}

export default App;
