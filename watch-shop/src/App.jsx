import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import PrivacyPolicy from "./pages/privacy";
import TermsAndConditions from "./pages/terms_condition";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about-us" element={<About />} />

      <Route path="/contact-us" element={<Contact />} />

      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
    </Routes>
  );
}

export default App;