import contactBanner from "../../assets/images/about_us/b1.png";

const Banner = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Banner Image */}
      <img
        src={contactBanner}
        alt="Luxury watches"
        className="h-[260px] w-full object-cover md:h-[350px] lg:h-full"
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center">
        <div className="ml-[7%] max-w-[550px] mb-40">
          <h1
            className="font-['Faustina'] text-[32px] font-bold leading-[1.6] tracking-[0.12em] text-[#1A1A1A]
            md:text-[30px] lg:text-[40px]"
          >
            WHERE TIME MEETS
            <br />
            TRUST.
          </h1>

          <p
            className="mt-5 font-['Inter'] text-[14px] leading-8 text-[#145da0]
            md:text-[16px] lg:mt-8 lg:text-[23px] font-medium"
          >
            Connect with us for authentic timepieces and a truly
            <br className="hidden lg:block" />
            trusted experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;