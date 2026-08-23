import contactBanner from "../../assets/images/about_us/b1.png";

const Banner = () => {
  return (
    <section className="relative w-full">
      
      {/* Banner Image */}
      <img
        src={contactBanner}
        alt="Luxury watches"
        className="block h-[250px] w-full object-cover sm:h-[500px] lg:h-auto lg:min-h-0"
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center">
        
        <div className="ml-[7%] max-w-[250px] -translate-y-[20px] pr-5 sm:max-w-[620px] lg:-translate-y-[60px] lg:max-w-[550px]">   
          <h1 className="font-['Faustina'] text-[26px] font-bold uppercase leading-[1.35] tracking-[0.06em] text-[#000000] sm:text-[38px] lg:text-[40px] lg:leading-[1.6] lg:tracking-[0.12em]">
            WHERE TIME MEETS
            <br />
            TRUST.
          </h1>

          <p className="mt-2 max-w-[200px] font-['Inter'] text-[13px] font-medium leading-tight text-[#145DA0] sm:max-w-[560px] sm:text-[18px] lg:mt-8 lg:max-w-[550px] lg:text-[23px] lg:leading-8">
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