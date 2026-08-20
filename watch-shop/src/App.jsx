import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/layout/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";



function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
       
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;