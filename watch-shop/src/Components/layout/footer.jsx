import logo from "../../assets/logo/sri_adi_ananta.png";
const Footer = () => {
  return (
    <footer className="w-full bg-white text-black">

      {/* ================= MAIN FOOTER ================= */}
      <div className="border-t border-b border-black">

        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-8 py-20 
                        sm:grid-cols-2
                        lg:grid-cols-4 lg:gap-20 lg:px-0 lg:py-20">

          {/* ================= LOGO & SOCIAL ================= */}
          <div className="lg:-translate-y-10 flex flex-col">

            {/* Logo */}
            <img
  src={logo}
  alt="Sri Adi Ananta"
  className="h-auto w-[230px] object-contain"
/>

            {/* Tagline */}
            <p className="mt-4 text-[20px] leading-[1.25] font-normal">
              Precision in every detail.
              <br />
              Timeless in every moment
            </p>

            {/* Social Media */}
            <div className="mt-12 flex items-center gap-4">

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-[50px] w-[50px] items-center justify-center
                           rounded-full border border-black
                           transition-all duration-200 hover:bg-black hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-7 w-7 fill-current"
                >
                  <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9c0-.66.34-1 1-1z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-[50px] w-[50px] items-center justify-center
                           rounded-full border border-black
                           transition-all duration-200 hover:bg-black hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-7 w-7 fill-none stroke-current"
                  strokeWidth="1.8"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#"
                aria-label="YouTube"
                className="flex h-[50px] w-[50px] items-center justify-center
                           rounded-full border border-black
                           transition-all duration-200 hover:bg-black hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-7 w-7"
                  fill="currentColor"
                >
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.8V8.2l6.5 3.8-6.5 3.8z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="#"
                aria-label="X"
                className="flex h-[50px] w-[50px] items-center justify-center
                           rounded-full border border-black
                           transition-all duration-200 hover:bg-black hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 fill-current"
                >
                  <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.25l-4.9-6.4L6.45 22H3.3l7.24-8.28L2.8 2h6.4l4.43 5.86L18.9 2zm-1.1 17.9h1.73L8.35 4.02H6.5L17.8 19.9z" />
                </svg>
              </a>

            </div>
          </div>


          {/* ================= QUICK LINKS ================= */}
          <div className="lg:pt-1">

            <h3 className="font-Faustina text-[20px] font-bold uppercase">
              QUICK LINKS
            </h3>

            <ul className="mt-5 space-y-5 text-[18px]">

              <li>
                <a
                  href="/"
                  className="transition-colors hover:text-gray-500"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="https://www.fastrack.in/"
                  className="transition-colors hover:text-gray-500"
                >
                  Fastrack
                </a>
              </li>

              <li>
                <a
                  href="https://www.titan.co.in/"
                  className="transition-colors hover:text-gray-500"
                >
                  Titan
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  className="transition-colors hover:text-gray-500"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="transition-colors hover:text-gray-500"
                >
                  Contact Us
                </a>
              </li>

            </ul>

          </div>


          {/* ================= CONTACT US ================= */}
          <div className="lg:pt-1">

            <h3 className="font-Faustina text-[20px] font-bold uppercase">
              CONTACT US
            </h3>

            <ul className="mt-5 space-y-5 text-[18px]">

              <li>
                <a
                  href="tel:+91 7296933687"
                  className="transition-colors hover:text-gray-500"
                >
                  +91 7296933687
                </a>
              </li>

              <li>
                <a
                  href="mailto:contact@sriadiananta.com"
                  className="transition-colors hover:text-gray-500"
                >
                  contact@sriadiananta.com
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="transition-colors hover:text-gray-500"
                >
                  FAQs
                </a>
              </li>

            </ul>

          </div>


          {/* ================= POLICIES ================= */}
          <div className="lg:pt-1">

            <h3 className="font-serif text-[20px] font-bold uppercase">
              POLICIES
            </h3>

            <ul className="mt-5 space-y-5 text-[18px]">

              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-gray-500"
                >
                  Terms &amp; Conditions
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-gray-500"
                >
                  Privacy Policy
                </a>
              </li>

            </ul>

          </div>

        </div>

      </div>


      {/* ================= COPYRIGHT ================= */}
      <div className="flex min-h-[105px] items-center justify-center px-6">

        <p className="text-center text-[18px] font-bold">
          © Sri Adi Ananta. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;