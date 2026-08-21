import { Link } from "react-router-dom";

import sriAdiAnantaLogo from "../../assets/logo/sri_adi_ananta.png";
import titanLogo from "../../assets/logo/titan_navbar_logo.png";
import fastrackLogo from "../../assets/logo/fastrack_navbar_logo.png";

const Navbar = () => {
  return (
    <header className="w-full bg-[#D7DFEA]">
      <nav className="flex h-[112px] w-full items-center justify-between px-8 lg:px-12">

        {/* Logo */}
        <Link to="/" className="shrink-0">
          <img
            src={sriAdiAnantaLogo}
            alt="Sri Adi Ananta"
            className="w-[160px] object-contain"
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 lg:gap-20 xl:gap-28">

          <Link
            to="/"
            className="text-[18px] font-semibold uppercase tracking-wide text-[#17191D] transition hover:opacity-70 lg:text-[24px]"
          >
            Home
          </Link>

          {/* Titan */}
          <a
            href="https://www.titan.co.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <img
              src={titanLogo}
              alt="Titan"
              className="w-[100px] object-contain"
            />
          </a>

          {/* Fastrack */}
          <a
            href="https://www.fastrack.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <img
              src={fastrackLogo}
              alt="Fastrack"
              className="w-[160px] object-contain"
            />
          </a>

          <Link
            to="/about-us"
            className="text-[18px] font-semibold uppercase tracking-wide text-[#17191D] transition hover:opacity-70 lg:text-[24px]"
          >
            About Us
          </Link>

          <Link
            to="/contact-us"
            className="text-[18px] font-semibold uppercase tracking-wide text-[#17191D] transition hover:opacity-70 lg:text-[24px]"
          >
            Contact Us
          </Link>

        </div>

      </nav>
    </header>
  );
};

export default Navbar;