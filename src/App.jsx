import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <Router basename="/portfolio">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:title" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default App;
