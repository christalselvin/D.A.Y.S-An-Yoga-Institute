import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./pages/Home/components/Navbar";
import Home from "./pages/Home";
import Article from './pages/Article'; 
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Article />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
