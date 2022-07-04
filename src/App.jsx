import "./styles/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<About />} />
          {/* <Route path="/" element={} /> */}
          {/* <Route path="/" element={} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
