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

      {/* ==================================================
          SPECIALIST STORE BANNER
      ================================================== */}
      <div
        className="
          relative
          w-full
          min-h-[580px]
          overflow-hidden
          bg-cover
          bg-[position:45%_center]
          bg-no-repeat

          sm:min-h-[620px]
          sm:bg-[position:15%_center]

          md:min-h-[680px]
            md:bg-[position:35%_center]

          lg:min-h-[710px]
          lg:bg-center
        "
        style={{
          backgroundImage: `url(${specialistBanner})`,
        }}
      >

        {/* ================= CONTENT ================= */}
        <div className="absolute inset-0 flex flex-col justify-between">

          {/* ================= HEADING ================= */}
          <div
            className="
              px-5
              pt-[18%]

              sm:px-8
              sm:pt-[14%]

              md:px-10
              md:pt-[11%]

              lg:px-[3.8%]
              lg:pt-[6.5%]

              xl:px-[3.8%]
            "
          >

            <p
              className="
                mb-5
                font-inter
                text-[9px]
                uppercase
                tracking-[2px]
                text-black

                sm:mb-7
                sm:text-[11px]
                sm:tracking-[2.5px]

                md:mb-9
                md:text-[13px]
                md:tracking-[3px]

                lg:mb-8
                lg:text-[16px]
                lg:tracking-[3px]
              "
            >
              Need a closer look? Come visit us in store
            </p>

            <h2
              className="
                max-w-[340px]
                font-inter
                text-[27px]
                font-bold
                uppercase
                leading-[1.15]
                tracking-[1.5px]
                text-black

                sm:max-w-[450px]
                sm:text-[34px]
                sm:tracking-[1.8px]

                md:max-w-[520px]
                md:text-[43px]
                md:tracking-[2px]

                lg:max-w-[600px]
                lg:text-[50px]
                lg:tracking-[2px]

                xl:text-[52px]
              "
            >
              Your Specialist
              <br />
              Watch Store
            </h2>

          </div>


          {/* ================= FEATURES ================= */}
          <div
            className="
              w-full
              px-4
              pb-4

              sm:px-7
              sm:pb-6

              md:px-9
              md:pb-7

              lg:px-[6.5%]
              lg:pb-[2%]

              xl:px-[6.5%]
            "
          >

            {/* Horizontal line */}
            <div
              className="
                mx-2
                mb-1
                h-[0.2px]
                bg-white/15

                sm:mx-3
                sm:mb-2

                md:mx-5

                lg:mx-8
              "
            />


            {/* FEATURES GRID */}
            <div className="grid grid-cols-2 lg:grid-cols-4">

              {features.map((feature, index) => (

                <div
                  key={feature.title}
                  className={`
                    flex
                    items-center
                    gap-2
                    px-2
                    py-3

                    sm:gap-3
                    sm:px-3
                    sm:py-4

                    md:gap-4
                    md:px-4
                    md:py-5

                    lg:gap-0
                    lg:px-5
                    lg:py-6

                    xl:px-6

                    ${
                      index % 2 !== 0
                        ? "border-l-[0.5px] border-white/20"
                        : ""
                    }

                    ${
                      index >= 2
                        ? "border-t-[0.5px] border-white/20 lg:border-t-0"
                        : ""
                    }

                    ${
                      index > 0
                        ? "lg:border-l-[0.5px] lg:border-white/20"
                        : ""
                    }
                  `}
                >

                  {/* VECTOR ICON */}
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="
                      h-[30px]
                      w-[30px]
                      shrink-0
                      object-contain

                      sm:h-[38px]
                      sm:w-[38px]

                      md:h-[46px]
                      md:w-[46px]

                      lg:h-[52px]
                      lg:w-[52px]
                    "
                  />


                  {/* TEXT */}
                  <div className="min-w-0 pl-2 lg:pl-3">

                    <h3
                      className="
                        whitespace-nowrap
                        text-[9px]
                        font-bold
                        text-white

                        sm:text-[12px]

                        md:text-[15px]

                        lg:text-[18px]

                        xl:text-[20px]
                      "
                    >
                      {feature.title}
                    </h3>

                    <p
                      className="
                        mt-1
                        text-[8px]
                        text-white

                        sm:text-[10px]

                        md:text-[12px]

                        lg:text-[14px]

                        xl:text-[16px]
                      "
                    >
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