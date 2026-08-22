import b1 from "../../assets/images/about_us/b1.png";
import b2 from "../../assets/images/about_us/b2.png";
import i1 from "../../assets/images/about_us/i1.png";
import i2 from "../../assets/images/about_us/i2.png";
import i3 from "../../assets/images/about_us/i3.png";

import missionVector from "../../assets/images/about_us/mission_vector.png";
import promisesVector from "../../assets/images/about_us/promises_vector.png";
import visionVector from "../../assets/images/about_us/vision_vector.png";

const BannerSection = () => {
  return (
    <section className="w-full overflow-hidden bg-white">

      {/* =====================================================
          HERO BANNER
      ===================================================== */}
      <section className="relative w-full">
  <img
    src={b1}
    alt="Watch Collection"
    className="block h-[250px] w-full object-cover sm:h-[500px] lg:h-auto lg:min-h-0"
  />

  <div className="absolute inset-0 flex items-center">
    <div className="ml-[6%] max-w-[80%] -translate-y-[20px] pr-5 sm:max-w-[620px] lg:-translate-y-[60px] lg:max-w-[620px]">
      
      <h1 className="font-['Faustina'] text-[26px] font-semibold uppercase leading-[1.35] tracking-[0.06em] text-black sm:text-[38px] lg:text-[46px] lg:leading-[1.45] lg:tracking-[0.1em]">
        YOUR STYLE DESERVES
        <br />
        THE RIGHT WATCH.
      </h1>

      <p className="mt-4 max-w-[200px] font-['Inter'] text-[13px] font-medium leading-tight text-[#145DA0] sm:max-w-[560px] sm:text-[18px] lg:mt-7 lg:text-[22px]">
        Discover authentic timepieces made to complement every
        occasion.
      </p>

    </div>
  </div>
</section>


      {/* =====================================================
          SRI ADI ANANTA
      ===================================================== */}
      <section className="relative mx-auto w-full max-w-[1440px]">

        <div className="relative flex min-h-[620px] flex-col lg:block lg:min-h-[540px]">

          {/* Text */}
          <div className="relative z-10 order-2 w-full bg-white px-[7%] py-10 sm:-mt-16 sm:px-[8%] sm:py-14 lg:absolute lg:left-[6%] lg:top-[12%] lg:mt-0 lg:w-[44%] lg:px-0 lg:py-10 lg:pr-[10%]">
            <h2 className="mb-8 font-['Faustina'] text-[26px] font-semibold uppercase tracking-[0.08em] text-black sm:text-[32px] lg:mb-16 lg:text-[40px] lg:tracking-[0.12em]">
              SRI ADI ANANTA
            </h2>

            <p className="font-['Inter'] text-[14px] font-medium leading-[1.8] tracking-[0.03em] sm:text-[17px] lg:mt-6 lg:text-[20px] lg:leading-[2] lg:tracking-[0.05em]">
              Sri Adi Ananta is an established offline retail business with
              multiple stores across different locations. We are committed to
              providing customers with authentic products, reliable service,
              and the right choices based on their needs.
            </p>

          </div>

          {/* Person Image */}
          <div className="relative z-20 order-1 mx-auto w-[70%] top-[10px] sm:w-[65%] lg:absolute lg:right-[4%] lg:top-[-95px] lg:w-[48%]">
            <img
              src={i1}
              alt="Sri Adi Ananta"
              className="block h-auto w-full object-contain"
            />
          </div>

        </div>
      </section>


      {/* =====================================================
          WHAT WE DO
      ===================================================== */}
      <section className="relative w-full">

        <img
          src={b2}
          alt="Watch Store"
          className="block h-[250px] w-full object-cover sm:h-[850px] lg:h-auto lg:min-h-0"
        />

        <div className="absolute left-[10%] right-[7%] top-1/2 z-10 w-auto max-w-none -translate-y-1/2 bg-[#000000]/50 px-[7%] py-10 text-white sm:left-[12%] sm:right-[12%] sm:px-[6%] sm:py-12 lg:left-auto lg:right-[8%] lg:top-[156px] lg:w-[42%] lg:max-w-[700px] lg:translate-y-0 lg:px-[4%] lg:py-[4%] lg:pb-[7%]">

          <h2 className="mb-6 font-['Faustina'] text-[26px] font-semibold uppercase tracking-[0.1em] sm:text-[36px] lg:mb-10 lg:text-[40px] lg:tracking-[0.15em]">
            WHAT WE DO
          </h2>

          <p className="font-['Inter'] text-[14px] font-medium leading-[1.8] tracking-[0.03em] sm:text-[17px] lg:mt-6 lg:text-[20px] lg:leading-[2] lg:tracking-[0.05em]">
            With multiple stores at different locations, we make quality
            products accessible to customers while ensuring authenticity
            and trusted service. Our team helps customers choose the right
            product according to their preferences and requirements.
          </p>

        </div>
      </section>


      {/* =====================================================
          TITAN WORLD & FASTRACK
      ===================================================== */}
      <section className="relative mx-auto flex min-h-[900px] w-full flex-col overflow-hidden px-[7%] py-14 sm:min-h-[1050px] sm:px-[8%] lg:block lg:h-[650px] lg:min-h-0 lg:px-0 lg:py-0 lg:overflow-visible">

        {/* Left Text Content */}
        <div className="relative z-10 w-full sm:w-[75%] lg:absolute lg:left-[8%] lg:top-[60px] lg:w-[40%]">

          <p className="font-['Inter'] text-[12px] uppercase tracking-[0.12em] text-black sm:text-[16px] lg:text-[20px] lg:tracking-[0.15em]">
            WE PROUDLY PRESENT YOU
          </p>

          {/* Main Heading */}
          <h2 className="mt-4 font-['Faustina'] text-[27px] font-semibold uppercase leading-[1.5] tracking-[0.15em] text-black sm:text-[38px] lg:mt-5 lg:text-[45px] lg:leading-[1.69] lg:tracking-[0.41em] lg:[word-spacing:45px]">
            TITAN WORLD
            <br />
            & FASTRACK
          </h2>

          {/* Description */}
          <p className="mt-5 max-w-[500px] font-['Inter'] text-[14px] leading-[1.7] tracking-[0.04em] text-black sm:text-[17px] lg:mt-7 lg:text-[18px] lg:leading-[1.9] lg:tracking-[0.10em]">
            Discover authentic watches from Titan and Fastrack,
            bringing trusted brands and timeless style together.
          </p>

        </div>


        {/* Watches Image */}
        <div className="relative right-auto top-auto z-20 mt-10 ml-auto w-[90%] sm:w-[75%] lg:absolute lg:right-[4%] lg:top-[-100px] lg:mt-0 lg:w-[48%]">

          <img
            src={i2}
            alt="Watch Collection"
            className="block h-auto w-full object-contain"
          />

          {/* WATCHES text */}
          <div className="absolute inset-0 flex items-center justify-center lg:mr-[280px] lg:justify-center">

            <h2 className="font-['Faustina'] text-[30px] font-semibold uppercase tracking-[0.25em] text-white sm:text-[32px] mt-[-100px] lg:mt-[-60px] lg:text-[45px] lg:tracking-[0.50em]">
              WATCHES
            </h2>

          </div>

        </div>


        {/* Single Watch Overlay */}
        <div className="relative z-30 -mt-20 ml-[1%] w-[60%] sm:-mt-16 sm:ml-[20%] sm:w-[50%] lg:absolute lg:left-[34%] lg:top-[400px] lg:mt-0 lg:ml-0 lg:w-[38%]">

          <img
            src={i3}
            alt="Luxury Watch"
            className="block h-auto w-full object-contain"
          />

        </div>

      </section>


      {/* =====================================================
          MISSION / VISION / PROMISES
      ===================================================== */}
      <section className="relative mx-auto -mt-40 min-h-0 w-full max-w-[1440px] px-[7%] py-4 sm:-mt-10 sm:px-[8%] sm:py-18 lg:mt-0 lg:min-h-[720px] lg:px-0 lg:py-0">
        {/* Information Box */}
        <div className="relative left-auto top-auto z-40 w-full bg-[#C9D5E1]/60 px-6 py-8 sm:px-10 sm:py-10 lg:absolute lg:left-[6.5%] lg:top-[-150px] lg:w-[32%] lg:px-[4%] lg:py-[3%]">

          {/* ================= MISSION ================= */}
          <div>

            <div className="flex items-center gap-4 lg:gap-5">

              <div className="w-[45px] shrink-0 sm:w-[55px] lg:w-[70px]">
                <img
                  src={missionVector}
                  alt="Mission"
                  className="h-auto w-full"
                />
              </div>

              <h3 className="font-['Faustina'] text-[17px] font-bold uppercase tracking-[0.06em] text-black sm:text-[19px] lg:text-[20px] lg:tracking-[0.08em]">
                OUR MISSION
              </h3>

            </div>

            <p className="mt-3 font-['Inter'] text-[13px] leading-[1.6] tracking-[0.04em] text-black sm:text-[15px] lg:mt-2 lg:text-[18px] lg:leading-[1.4] lg:tracking-[0.08em]">
              Our mission is to provide customers with a wide range of
              high-quality watches and reliable service, helping them
              make informed choices while maintaining trust and
              transparency.
            </p>

          </div>


          {/* ================= VISION ================= */}
          <div className="mt-8 lg:mt-7">

            <div className="flex items-center gap-4 lg:gap-5">

              <div className="w-[45px] shrink-0 sm:w-[55px] lg:w-[70px]">
                <img
                  src={visionVector}
                  alt="Vision"
                  className="h-auto w-full"
                />
              </div>

              <h3 className="font-['Faustina'] text-[17px] font-bold uppercase tracking-[0.06em] text-black sm:text-[19px] lg:text-[20px] lg:tracking-[0.08em]">
                OUR VISION
              </h3>

            </div>

            <p className="mt-3 font-['Inter'] text-[13px] leading-[1.6] tracking-[0.04em] text-black sm:text-[15px] lg:mt-2 lg:text-[18px] lg:leading-[1.4] lg:tracking-[0.08em]">
              Our vision is to become a trusted and recognized retail
              destination for watches, known for authenticity, quality,
              customer satisfaction, and continuous improvement.
            </p>

          </div>


          {/* ================= PROMISES ================= */}
          <div className="mt-8 lg:mt-7">

            <div className="flex items-center gap-4 lg:gap-5">

              <div className="w-[45px] shrink-0 sm:w-[55px] lg:w-[70px]">
                <img
                  src={promisesVector}
                  alt="Promises"
                  className="h-auto w-full"
                />
              </div>

              <h3 className="font-['Faustina'] text-[17px] font-bold uppercase tracking-[0.06em] text-black sm:text-[19px] lg:text-[20px] lg:tracking-[0.08em]">
                OUR PROMISES
              </h3>

            </div>

            <p className="mt-3 font-['Inter'] text-[13px] leading-[1.6] tracking-[0.04em] text-black sm:text-[15px] lg:mt-2 lg:text-[18px] lg:leading-[1.4] lg:tracking-[0.08em]">
              We promise to put authenticity, trust, and customer
              satisfaction first, offering genuine products, responsive
              service, and transparent information so customers can
              confidently experience and shop for quality watches.
            </p>

          </div>

        </div>

      </section>

    </section>
  );
};

export default BannerSection;