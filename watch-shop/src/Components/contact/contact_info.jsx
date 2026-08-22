import { useState } from "react";

const ContactInfo = () => {
  const [copied, setCopied] = useState(false);

  const email = "contact@sriadiananta.com";
  const phone = "+917296933687";
  const address =
    "Alwar Bypass Rd, opposite KFC, nearby Genesis Mall, Bhiwadi, Rajasthan 301019";

  // Copy email
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy email:", error);
    }
  };

  return (
    <section className="h-full w-full rounded-[28px] border border-[#D9D9D9] bg-white px-5 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-10">
      
      <div className="flex h-full flex-col items-center justify-between text-center">

        {/* ================= EMAIL ================= */}
        <div className="flex flex-col items-center">

          {/* Email Icon */}
          <a
            href={`mailto:${email}`}
            aria-label="Send email"
            className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#145DA0]/[0.07] transition-all duration-200 hover:bg-[#145DA0]/[0.14] sm:h-[70px] sm:w-[70px] lg:h-[80px] lg:w-[80px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-[32px] w-[32px] text-black sm:h-[37px] sm:w-[37px] lg:h-[42px] lg:w-[42px]"
            >
              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="1"
              />
              <path d="m3 7 9 6 9-6" />
            </svg>
          </a>

          <h3 className="mt-3 font-['Inter'] text-[22px] font-medium text-black sm:mt-4 sm:text-[26px] lg:text-[30px]">
            Email Address
          </h3>

          {/* Email + Hover Copy */}
          <div className="group relative mt-2">
            <a
              href={`mailto:${email}`}
              className="break-all font-['Inter'] text-[14px] text-black underline-offset-4 transition-colors duration-200 hover:text-[#145DA0] sm:text-[16px] lg:text-[18px]"
            >
              {email}
            </a>

            {/* Copy tooltip */}
            <button
              type="button"
              onClick={handleCopyEmail}
              className="
                invisible
                absolute
                left-1/2
                top-full
                z-20
                mt-2
                -translate-x-1/2
                rounded-md
                bg-black
                px-3
                py-1.5
                font-['Inter']
                text-[12px]
                text-white
                opacity-0
                transition-all
                duration-200
                group-hover:visible
                group-hover:opacity-100
              "
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>

        </div>


        {/* ================= DIVIDER ================= */}
        <div className="my-8 h-px w-full bg-[#145DA0]/[0.10] sm:my-9 lg:my-0" />


        {/* ================= CONTACT NUMBER ================= */}
        <div className="flex flex-col items-center">

          {/* Phone Icon */}
          <a
            href={`tel:${phone}`}
            aria-label="Call Sri Adi Ananta"
            className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#145DA0]/[0.07] transition-all duration-200 hover:bg-[#145DA0]/[0.14] sm:h-[70px] sm:w-[70px] lg:h-[80px] lg:w-[80px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-[32px] w-[32px] text-black sm:h-[37px] sm:w-[37px] lg:h-[42px] lg:w-[42px]"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.64a2 2 0 0 1-.45 2.11L8 9.75a16 16 0 0 0 6 6l1.28-1.28a2 2 0 0 1 2.11-.45c.86.29 1.74.5 2.64.62A2 2 0 0 1 22 16.92Z" />
            </svg>
          </a>

          <h3 className="mt-3 font-['Inter'] text-[22px] font-medium text-black sm:mt-4 sm:text-[26px] lg:text-[30px]">
            Contact Number
          </h3>

          <a
            href={`tel:${phone}`}
            className="mt-2 font-['Inter'] text-[14px] text-black underline-offset-4 transition-colors duration-200 hover:text-[#145DA0] hover:underline sm:text-[16px] lg:text-[18px]"
          >
            +91 7296933687
          </a>

        </div>


        {/* ================= DIVIDER ================= */}
        <div className="my-8 h-px w-full bg-[#145DA0]/[0.10] sm:my-9 lg:my-0" />


        {/* ================= STORE LOCATION ================= */}
        <div className="flex flex-col items-center">

          {/* Location Icon */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Titan%20World%20-%20Bhiwadi&query_place_id=0x390d49dba861c627%3A0x96444393a5c5a11b"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Titan World Bhiwadi in Google Maps"
            className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#145DA0]/[0.07] transition-all duration-200 hover:bg-[#145DA0]/[0.14] sm:h-[70px] sm:w-[70px] lg:h-[80px] lg:w-[80px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-[32px] w-[32px] text-black sm:h-[37px] sm:w-[37px] lg:h-[42px] lg:w-[42px]"
            >
              <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </a>

          <h3 className="mt-3 font-['Inter'] text-[22px] font-medium text-black sm:mt-4 sm:text-[26px] lg:text-[30px]">
            Store Location
          </h3>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Titan%20World%20-%20Bhiwadi&query_place_id=0x390d49dba861c627%3A0x96444393a5c5a11b"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 max-w-[280px] font-['Inter'] text-[14px] leading-5 text-black underline-offset-4 transition-colors duration-200 hover:text-[#145DA0] hover:underline sm:max-w-[300px] sm:text-[16px] sm:leading-6 lg:text-[18px]"
          >
            {address}
          </a>

        </div>

      </div>
    </section>
  );
};

export default ContactInfo;