import mensImage from "../../assets/images/home_page/mens_watches.png";
import womensImage from "../../assets/images/home_page/womens_watches.png";
import coupleImage from "../../assets/images/home_page/couple_watches.png";
import wallClockImage from "../../assets/images/home_page/wall_clocks.png";

const Categories = () => {
  const categories = [
    {
      title: "MEN'S WATCHES",
      image: mensImage,
      link: "https://www.titan.co.in/shop/watches-for-men",
    },
    {
      title: "WOMEN'S WATCHES",
      image: womensImage,
      link: "https://www.titan.co.in/shop/watches-for-women",
    },
    {
      title: "COUPLE WATCHES",
      image: coupleImage,
      link: "https://www.titan.co.in/shop/couple-watches",
    },
    {
      title: "WALL CLOCKS",
      image: wallClockImage,
      link: "https://www.titan.co.in/shop/wall-clocks",
    },
  ];

  // ==========================================
  // SCROLL TO HERO ENQUIRY FORM
  // ==========================================
  const scrollToEnquiryForm = () => {
    const isDesktop = window.innerWidth >= 1024;

    const form = document.getElementById(
      isDesktop
        ? "desktop-hero-enquiry-form"
        : "mobile-hero-enquiry-form"
    );

    if (form) {
      form.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <section className="w-full bg-[#F7F7F7] px-4 py-9 sm:px-6 sm:py-12 md:px-8 md:py-14 lg:px-12 lg:py-20 xl:px-16">
      {/* =========================
          CATEGORY GRID
      ========================== */}
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1180px]
          grid-cols-1
          gap-5

          sm:grid-cols-2
          sm:gap-6

          md:gap-7

          lg:gap-10
        "
      >
        {categories.map((category) => (
          <a
            key={category.title}
            href={category.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              relative
              block
              aspect-[1.45/1]
              w-full
              cursor-pointer
              overflow-hidden

              sm:aspect-[1.55/1]

              md:aspect-[1.6/1]

              lg:aspect-[1.7/1]
            "
          >
            {/* IMAGE */}
            <img
              src={category.image}
              alt={category.title}
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover

                scale-100

                transition-transform
                duration-500
                ease-out

                group-hover:scale-105

                lg:scale-100
                lg:group-hover:scale-110
              "
            />

            {/* DARK OVERLAY */}
            <div
              className="
                absolute
                inset-0
                bg-black/10
                transition
                duration-300

                group-hover:bg-black/25

                lg:group-hover:bg-black/20
              "
            />

            {/* CATEGORY TITLE */}
            <div
              className="
                absolute
                inset-x-0
                bottom-0
                flex
                items-center
                justify-center
                pb-5

                transition-all
                duration-300

                group-hover:pb-7

                sm:pb-6
                sm:group-hover:pb-8

                md:pb-7
                md:group-hover:pb-9

                lg:pb-10
                lg:group-hover:pb-10
              "
            >
              <h3
                className="
                  font-Faustina
                  text-center
                  text-[17px]
                  font-bold
                  uppercase
                  tracking-wide
                  text-white

                  transition-transform
                  duration-300

                  group-hover:scale-105

                  sm:text-[20px]

                  md:text-[22px]

                  lg:text-[27px]
                  lg:group-hover:scale-100
                "
              >
                {category.title}
              </h3>
            </div>
          </a>
        ))}
      </div>

      {/* =========================
          ENQUIRY BUTTON
      ========================== */}
      <div className="relative z-20 mt-8 flex justify-center sm:mt-10 md:mt-12 lg:mt-14">
        <button
          type="button"
          onClick={scrollToEnquiryForm}
          className="
            relative
            z-30
            min-w-[190px]
            cursor-pointer
            touch-manipulation
            rounded-full
            bg-[#B8C7E3]
            px-8
            py-2.5
            font-Faustina
            text-[18px]
            font-bold
            text-black
            shadow-sm
            transition-all
            duration-300

            active:scale-95

            hover:bg-[#A8B9D8]
            hover:shadow-md

            sm:min-w-[230px]
            sm:px-10
            sm:py-3
            sm:text-[21px]

            md:min-w-[250px]
            md:px-11
            md:py-3.5
            md:text-[23px]

            lg:min-w-[280px]
            lg:px-12
            lg:py-3.5
            lg:text-[25px]
          "
        >
          Enquiry Now
        </button>
      </div>
    </section>
  );
};

export default Categories;