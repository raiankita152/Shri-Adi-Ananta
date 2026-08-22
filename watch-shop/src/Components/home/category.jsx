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

  return (
    <section className="w-full bg-[#F7F7F7] px-5 py-12 sm:px-8 sm:py-14 md:px-10 md:py-16 lg:px-12 lg:py-20 xl:px-16">

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
          gap-7

          sm:grid-cols-2
          sm:gap-8

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
              aspect-[1.7/1]
              w-full
              cursor-pointer
              overflow-hidden
            "
          >

            {/* Image */}
            <img
              src={category.image}
              alt={category.title}
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                transition-transform
                duration-500
                ease-out
                group-hover:scale-110
              "
            />

            {/* Dark overlay */}
            <div
              className="
                absolute
                inset-0
                bg-black/10
                transition
                duration-300
                group-hover:bg-black/20
              "
            />

            {/* Category title */}
            <div
              className="
                absolute
                inset-x-0
                bottom-0
                flex
                items-center
                justify-center
                pb-7

                sm:pb-8
                md:pb-9
                lg:pb-10
              "
            >
              <h3
                className="
                  font-Faustina
                  text-center
                  text-[21px]
                  font-bold
                  uppercase
                  tracking-wide
                  text-white

                  sm:text-[23px]
                  md:text-[25px]
                  lg:text-[27px]
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
      <div className="mt-10 flex justify-center sm:mt-12 md:mt-14">
<button
  type="button"
  onClick={() => {
    const form = document.getElementById("hero-enquiry-form");

    if (form) {
      form.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      // Highlight the form
      form.parentElement.classList.add("hero-form-highlight");

      // Remove highlight after 2 seconds
      setTimeout(() => {
        form.parentElement.classList.remove("hero-form-highlight");
      }, 2000);
    }
  }}
          className="
            min-w-[220px]
            rounded-full
            bg-[#B8C7E3]
            px-10
            py-3
            font-Faustina
            text-[21px]
            font-bold
            text-black
            shadow-sm
            transition-all
            duration-300
            hover:bg-[#A8B9D8]
            hover:shadow-md

            sm:min-w-[250px]
            sm:px-12
            sm:py-3.5
            sm:text-[23px]

            md:min-w-[280px]
            md:text-[25px]
          "
        >
          Enquiry Now
        </button>

      </div>

    </section>
  );
};

export default Categories;