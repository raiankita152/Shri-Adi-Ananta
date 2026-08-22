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
          className="block min-h-[350px] w-full object-cover sm:min-h-[450px] lg:min-h-0"
        />

        <div className="absolute inset-0 flex items-center">
          <div className="ml-[6%] max-w-[620px] pr-5">
            <h1 className="font-['Faustina'] text-[40px] font-semibold uppercase leading-[1.45] tracking-[0.1em] text-black sm:text-[38px] lg:text-[46px]">
              YOUR STYLE DESERVES
              THE RIGHT WATCH.
            </h1>

            <p className="mt-5 max-w-[560px] font-['Inter'] text-[15px] font-medium leading-tight text-[#145DA0] sm:text-[18px] lg:mt-7 lg:text-[22px]">
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
        
        <div className="relative min-h-[420px] lg:min-h-[540px]">
          
          {/* Text */}
          <div className="absolute left-[6%] top-[18%] z-10 w-[44%] bg-white py-10 pr-[10%] lg:top-[12%]">
            <h2 className="font-['Faustina'] mb-16 text-[26px] font-semibold uppercase tracking-[0.12em] text-black sm:text-[32px] lg:text-[40px]">
              SRI ADI ANANTA
            </h2>

            <p className="mt-6 font-['Inter'] text-[14px] font-medium leading-[2] tracking-[0.05em] sm:text-[17px] lg:text-[20px]">
              Sri Adi Ananta is an established offline retail business with multiple stores across different locations. We are committed to providing customers with authentic products, reliable service, and the right choices based on their needs.
            </p>
          </div>

          {/* Person Image */}
          <div className="absolute right-[4%] top-[-95px] z-20 w-[48%]">
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
          className="block min-h-[1440px] w-full object-cover lg:min-h-0"
        />

        <div className="absolute right-[8%] top-[156px] z-10 w-[42%] max-w-[700px] bg-[#000000]/50 px-[4%] py-[4%] pb-[7%] text-white leading-loose">
          
  <h2 className="mb-10 font-['Faustina'] text-[30px] font-semibold uppercase tracking-[0.15em] sm:text-[36px] lg:text-[40px]">
    WHAT WE DO
  </h2>

  <p className="mt-6 font-['Inter'] text-[14px] font-medium leading-[2] tracking-[0.05em] sm:text-[17px] lg:text-[20px]">
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
<section className="relative mx-auto h-[650px] w-full max-w-[1440px] overflow-visible">

  {/* Left Text Content */}
  <div className="absolute left-[6%] top-[60px] z-10 w-[40%]">
    
    <p className="font-['Inter'] text-[14px] uppercase tracking-[0.15em] text-black lg:text-[20px]">
      WE PROUDLY PRESENT YOU
    </p>

    {/* Main Heading */}
    <h2 className="mt-5 font-['Faustina'] text-[34px] font-semibold uppercase leading-[1.69] tracking-[0.41em] [word-spacing:45px] text-black lg:text-[45px]">
  TITAN WORLD
  <br />
  & FASTRACK
</h2>

    {/* Description */}
    <p className="mt-7 max-w-[500px] font-['Inter'] tracking-[0.10em] text-[15px] leading-[1.9] text-black lg:text-[18px]">
      Discover authentic watches from Titan and Fastrack,
      bringing trusted brands and timeless style together.
    </p>

  </div>


  {/* Watches Image */}
  <div className="absolute right-[4%] top-[-100px] z-20 w-[48%]">

    <img
      src={i2}
      alt="Watch Collection"
      className="block h-auto w-full object-contain"
    />

    {/* WATCHES text */}
    <div className="absolute inset-0 flex items-left mr-[280px] justify-center">

      <h2 className="mt-[290px] font-['Faustina'] text-[38px] font-semibold uppercase tracking-[0.50em] text-white lg:text-[45px]">
        WATCHES
      </h2>

    </div>

  </div>


  {/* Single Watch Overlay */}
  <div className="absolute top-[400px] left-[34%] z-30 w-[38%]">

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
<section className="relative mx-auto min-h-[720px] w-full max-w-[1440px]">

  {/* Information Box */}
  <div className="absolute left-[6.5%] top-[-150px] z-40 w-[32%] bg-[#C9D5E1]/60 px-[4%] py-[3%]">
    {/* ================= MISSION ================= */}
<div>
  {/* Logo + Heading in same line */}
  <div className="flex items-center gap-5">
    <div className="w-[42px] shrink-0 lg:w-[70px]">
      <img
        src={missionVector}
        alt="Mission"
        className="h-auto w-full"
      />
    </div>

    <h3 className="font-['Faustina'] text-[18px] font-bold uppercase tracking-[0.08em] text-black lg:text-[20px]">
      OUR MISSION
    </h3>
  </div>

  {/* Description starts from LEFT edge */}
  <p className="mt-2 font-['Inter'] text-[13px] leading-[1.4] tracking-[0.08em] text-black lg:text-[18px]">
    Our mission is to provide customers with a wide range of
    high-quality watches and reliable service, helping them
    make informed choices while maintaining trust and
    transparency.
  </p>
</div>


{/* ================= VISION ================= */}
<div className="mt-7">
  {/* Logo + Heading in same line */}
  <div className="flex items-center gap-5">
    <div className="w-[42px] shrink-0 lg:w-[70px]">
      <img
        src={visionVector}
        alt="Vision"
        className="h-auto w-full"
      />
    </div>

    <h3 className="font-['Faustina'] text-[18px] font-bold uppercase tracking-[0.08em] text-black lg:text-[20px]">
      OUR VISION
    </h3>
  </div>

  {/* Description starts from LEFT edge */}
  <p className="mt-2 font-['Inter'] text-[13px] leading-[1.4] tracking-[0.08em] text-black lg:text-[18px]">
    Our vision is to become a trusted and recognized retail
    destination for watches, known for authenticity, quality,
    customer satisfaction, and continuous improvement.
  </p>
</div>


{/* ================= PROMISES ================= */}
<div className="mt-7">
  {/* Logo + Heading in same line */}
  <div className="flex items-center gap-5">
    <div className="w-[42px] shrink-0 lg:w-[70px]">
      <img
        src={promisesVector}
        alt="Promises"
        className="h-auto w-full"
      />
    </div>

    <h3 className="font-['Faustina'] text-[18px] font-bold uppercase tracking-[0.08em] text-black lg:text-[20px]">
      OUR PROMISES
    </h3>
  </div>

  {/* Description starts from LEFT edge */}
  <p className="mt-2 font-['Inter'] text-[13px] leading-[1.4] tracking-[0.08em] text-black lg:text-[18px]">
    We promise to put authenticity, trust, and customer
    satisfaction first, offering genuine products, responsive
    service, and transparent information so customers can
    confidently experience and shop for quality watches.
  </p>
</div>
  </div>

</section>
</section>
  )
};
export default BannerSection;