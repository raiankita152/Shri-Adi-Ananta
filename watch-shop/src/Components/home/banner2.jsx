import premiumQuality from "../../assets/images/home_page/premiumquality_vector.png";
import customerSupport from "../../assets/images/home_page/customer_support_vector.png";
import secureShopping from "../../assets/images/home_page/secure_shopping_vector.png";
import stylesIcon from "../../assets/images/home_page/over10kstyle_vector.png";
import specialistBanner from "../../assets/images/home_page/banner2_homepage.png";

const SpecialistStore = () => {
  const features = [
    {
      icon: premiumQuality,
      title: "Premium Quality",
      description: "Trusted Brands",
    },
    {
      icon: customerSupport,
      title: "Customer Support",
      description: "We’re Here to Help",
    },
    {
      icon: secureShopping,
      title: "Secure shopping",
      description: "You’re in safe hands",
    },
    {
      icon: stylesIcon,
      title: "Over 10,000 Styles",
      description: "You’re in safe hands",
    },
  ];

  return (
    <section className="w-full">
     <div
  className="relative w-full min-h-[620px] overflow-hidden bg-cover bg-center bg-no-repeat sm:min-h-[650px] md:min-h-[700px] lg:min-h-[769px]"
  style={{
    backgroundImage: `url(${specialistBanner})`,
  }}
>
        {/* ================= CONTENT ================= */}
        <div className="absolute inset-0 flex flex-col justify-between">

          {/* ================= HEADING ================= */}
          <div className="px-6 pt-[11%] sm:px-10 md:px-12 lg:px-[3.8%] lg:pt-[6.5%] xl:px-[3.8%]">

            <p className=" font-inter mb-8 text-[10px] font-inter uppercase tracking-[3px] text-black sm:text-[12px] md:mb-10 md:text-[15px] lg:text-[16px]">
              Need a closer look? Come visit us in store
            </p>

            <h2 className="font-inter max-w-[600px] font-inter text-[28px] font-bold uppercase leading-[1.15] tracking-[2px] text-black sm:text-[38px] md:text-[48px] lg:text-[50px] xl:text-[52px]">
              Your Specialist
              <br />
              Watch Store
            </h2>

          </div>

          {/* ================= FEATURES ================= */}
<div className="w-full px-5 pb-[2%] sm:px-8 md:px-10 lg:px-[6.5%] lg:pb-[2%] xl:px-[6.5%]">

 {/* Horizontal line */}
  <div className="mx-3 mb-2 h-[0.2px] bg-white/15 sm:mx-4 md:mx-6 lg:mx-8" />

  <div className="grid grid-cols-2 lg:grid-cols-4">

    {features.map((feature, index) => (
      <div
        key={feature.title}
        className={`
          flex items-center gap-3 py-4
          sm:gap-4 sm:py-5
          md:gap-5 md:py-6
          lg:px-5 lg:py-6
          xl:px-6

          ${index % 2 !== 0 ? "border-l-[0.5px] border-white/20" : ""}

          ${index >= 2
            ? "border-t-[0.5px] border-white/20 lg:border-t-0"
            : ""}

          ${index > 0
            ? "lg:border-l-[0.5px] lg:border-white/20"
            : ""}
        `}
      >

                  {/* VECTOR ICON */}
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="h-[38px] w-[38px] shrink-0 object-contain sm:h-[44px] sm:w-[44px] md:h-[50px] md:w-[50px] lg:h-[52px] lg:w-[52px]"
                  />

                  {/* TEXT */}
                  <div className="min-w-0">
                    <h3 className="whitespace-nowrap text-[11px] font-bold text-white sm:text-[14px] md:text-[17px] lg:text-[18px] xl:text-[20px]">
                      {feature.title}
                    </h3>

                    <p className="mt-1 text-[9px] text-white sm:text-[11px] md:text-[13px] lg:text-[14px] xl:text-[16px]">
                      {feature.description}
                    </p>
                  </div>

                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SpecialistStore;