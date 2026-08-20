import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/layout/navbar";
import Footer from "./Components/layout/footer";

function Home() {
  return (
    <div className="min-h-screen">
      <h1 className="p-10 text-3xl font-bold">
        Home Page
      </h1>
    </div>
  );
}

function Titan() {
  return (
    <div className="min-h-screen">
      <h1 className="p-10 text-3xl font-bold">
        Titan Watches
      </h1>
    </div>
  );
}

function Fastrack() {
  return (
    <div className="min-h-screen">
      <h1 className="p-10 text-3xl font-bold">
        Fastrack Watches
      </h1>
    </div>
  );
}

function AboutUs() {
  return (
    <div className="min-h-screen">
      <h1 className="p-10 text-3xl font-bold">
        About Us
      </h1>
    </div>
  );
}

function ContactUs() {
  return (
    <div className="min-h-screen">
      <h1 className="p-10 text-3xl font-bold">
        Contact Us
      </h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/titan" element={<Titan />} />
        <Route path="/fastrack" element={<Fastrack />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;