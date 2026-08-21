import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about-us" element={<About />} />

      <Route path="/contact-us" element={<Contact />} />
    </Routes>
  );
}

export default App;