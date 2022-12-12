import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <div className="main">
        <Navbar />
        <HomePage />
      </div>
    </div>
  );
}

export default App;
