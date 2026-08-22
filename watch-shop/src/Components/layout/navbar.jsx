import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import sriAdiAnantaLogo from "../../assets/logo/sri_adi_ananta.png";
import titanLogo from "../../assets/logo/titan_navbar_logo.png";
import fastrackLogo from "../../assets/logo/fastrack_navbar_logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // ==================================================
  // CLOSE MENU WHEN CLICKING OUTSIDE
  // ==================================================
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // ==================================================
  // CLOSE MENU
  // ==================================================
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-[#D7DFEA]">

      {/* ==================================================
          NAVBAR
      ================================================== */}
      <nav
        className="
          flex
          h-[80px]
          w-full
          items-center
          justify-between
          px-8
          lg:px-12
        "
      >

        {/* ==================================================
            LOGO
        ================================================== */}
        <Link
          to="/"
          onClick={closeMenu}
          className="shrink-0"
        >
          <img
            src={sriAdiAnantaLogo}
            alt="Sri Adi Ananta"
            className="w-[130px] object-contain"
          />
        </Link>


        {/* ==================================================
            DESKTOP NAVIGATION
            ONLY VISIBLE ON lg AND ABOVE
        ================================================== */}
        <div className="hidden items-center gap-8 lg:flex lg:gap-20 xl:gap-28">

          {/* Home */}
          <Link
            to="/"
            className="
              text-[18px]
              font-semibold
              uppercase
              tracking-wide
              text-[#17191D]
              transition
              hover:opacity-70
              lg:text-[24px]
            "
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


          {/* About Us */}
          <Link
            to="/about-us"
            className="
              text-[18px]
              font-semibold
              uppercase
              tracking-wide
              text-[#17191D]
              transition
              hover:opacity-70
              lg:text-[24px]
            "
          >
            About Us
          </Link>


          {/* Contact Us */}
          <Link
            to="/contact-us"
            className="
              text-[18px]
              font-semibold
              uppercase
              tracking-wide
              text-[#17191D]
              transition
              hover:opacity-70
              lg:text-[24px]
            "
          >
            Contact Us
          </Link>

        </div>


        {/* ==================================================
            HAMBURGER BUTTON
            ONLY VISIBLE BELOW lg
        ================================================== */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="
            flex
            h-[42px]
            w-[42px]
            items-center
            justify-center
            rounded-md
            border
            border-[#17191D]
            lg:hidden
          "
        >

          {isMenuOpen ? (

            /* X ICON */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12" />
              <path d="M18 6L6 18" />
            </svg>

          ) : (

            /* HAMBURGER ICON */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </svg>

          )}

        </button>

      </nav>


      {/* ==================================================
          MOBILE / TABLET MENU
          ONLY VISIBLE BELOW lg
      ================================================== */}
      <div
        ref={menuRef}
        className={`
          absolute
          left-0
          top-[80px]
          w-full
          overflow-hidden
          bg-[#D7DFEA]
          shadow-lg
          transition-all
          duration-300
          lg:hidden

          ${
            isMenuOpen
              ? "max-h-[500px] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }
        `}
      >

        <div className="flex flex-col px-6 pb-7 pt-4 sm:px-10">

          {/* ==================================================
              HOME
          ================================================== */}
          <Link
            to="/"
            onClick={closeMenu}
            className="
              border-b
              border-black/10
              py-4
              text-[18px]
              font-semibold
              uppercase
              tracking-wide
              text-[#17191D]
              transition
              hover:opacity-60
              sm:text-[20px]
            "
          >
            Home
          </Link>


          {/* ==================================================
              TITAN
          ================================================== */}
          <a
            href="https://www.titan.co.in/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="
              flex
              items-center
              border-b
              border-black/10
              py-4
            "
          >
            <img
              src={titanLogo}
              alt="Titan"
              className="w-[90px] object-contain sm:w-[100px]"
            />
          </a>


          {/* ==================================================
              FASTRACK
          ================================================== */}
          <a
            href="https://www.fastrack.in/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="
              flex
              items-center
              border-b
              border-black/10
              py-4
            "
          >
            <img
              src={fastrackLogo}
              alt="Fastrack"
              className="w-[135px] object-contain sm:w-[150px]"
            />
          </a>


          {/* ==================================================
              ABOUT US
          ================================================== */}
          <Link
            to="/about-us"
            onClick={closeMenu}
            className="
              border-b
              border-black/10
              py-4
              text-[18px]
              font-semibold
              uppercase
              tracking-wide
              text-[#17191D]
              transition
              hover:opacity-60
              sm:text-[20px]
            "
          >
            About Us
          </Link>


          {/* ==================================================
              CONTACT US
          ================================================== */}
          <Link
            to="/contact-us"
            onClick={closeMenu}
            className="
              py-4
              text-[18px]
              font-semibold
              uppercase
              tracking-wide
              text-[#17191D]
              transition
              hover:opacity-60
              sm:text-[20px]
            "
          >
            Contact Us
          </Link>

        </div>

      </div>

    </header>
  );
};

export default Navbar;