const ContactInfo = () => {
  return (
    <section className="h-full w-full rounded-[28px] border border-[#D9D9D9] bg-white px-8 py-10 sm:px-12 lg:px-16">
      
      <div className="flex h-full flex-col items-center justify-between text-center">

        {/* ================= EMAIL ================= */}
        <div className="flex flex-col items-center">

          {/* Email Icon */}
          <div className="flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[#145DA0]/[0.07]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-[42px] w-[42px] text-black"
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
          </div>

          <h3 className="mt-4 font-['Inter'] text-[30px] font-medium text-black">
            Email Address
          </h3>

          <p className="mt-2 font-['Inter'] text-[18px] text-black">
            contact@sriadiananta.com
          </p>
        </div>


        {/* ================= DIVIDER ================= */}
        <div className="h-px w-full bg-[#145DA0]/[0.10]" />


        {/* ================= CONTACT NUMBER ================= */}
        <div className="flex flex-col items-center">

          {/* Phone Icon */}
          <div className="flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[#145DA0]/[0.07]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-[42px] w-[42px] text-black"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.64a2 2 0 0 1-.45 2.11L8 9.75a16 16 0 0 0 6 6l1.28-1.28a2 2 0 0 1 2.11-.45c.86.29 1.74.5 2.64.62A2 2 0 0 1 22 16.92Z" />
            </svg>
          </div>

          <h3 className="mt-4 font-['Inter'] text-[30px] font-medium text-black">
            Contact Number
          </h3>

          <p className="mt-2 font-['Inter'] text-[18px] text-black">
            +91 7296933687
          </p>
        </div>


        {/* ================= DIVIDER ================= */}
        <div className="h-px w-full bg-[#145DA0]/[0.10]" />


        {/* ================= STORE LOCATION ================= */}
        <div className="flex flex-col items-center">

          {/* Location Icon */}
          <div className="flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[#145DA0]/[0.07]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-[42px] w-[42px] text-black"
            >
              <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>

          <h3 className="mt-4 font-['Inter'] text-[30px] font-medium text-black">
            Store Location
          </h3>

          <p className="mt-2 max-w-[300px] font-['Inter'] text-[18px] leading-6 text-black">
            Alwar Bypass Rd, opposite KFC, nearby Genesis Mall,
            Bhiwadi, Rajasthan 301019
          </p>
        </div>

      </div>
    </section>
  );
};

export default ContactInfo;