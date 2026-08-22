const testimonials = [
  {
    name: "Rahul Sharma",
    text: "Great collection of titan and Fastrack watches. The staff was very helpful and guided me to find the perfect watch.",
  },
  {
    name: "Priya Verma",
    text: "Excellent service and a premium collection. I found exactly the watch I was looking for. Highly recommended!",
  },
  {
    name: "Aman Saxena",
    text: "A perfect place for watch lovers. Authentic products, stylish designs and a great shopping experience.",
  },
];


// ============================================================
// TESTIMONIAL CARD
// ============================================================

const TestimonialCard = ({ name, text }) => {
  return (
    <div
      className="
        flex
        h-[420px]
        w-full
        flex-col
        rounded-[12px]
        border
        border-[#D6D6D6]
        bg-white
        px-[34px]
        py-[28px]

        shadow-[0_4px_6px_rgba(0,0,0,0.22)]

        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_7px_12px_rgba(0,0,0,0.25)]

        sm:h-[430px]
        sm:px-[36px]
        sm:py-[30px]

        lg:h-[420px]
        lg:px-[34px]
        lg:py-[28px]
      "
    >

      {/* ==================================================
          STARS
      ================================================== */}
      <div
        className="
          flex
          items-center
          gap-[8px]
          text-[28px]
          leading-none
          text-[#FBBF24]

          sm:text-[30px]
        "
      >
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>


      {/* ==================================================
          REVIEW CONTENT
      ================================================== */}
      <div
        className="
          mt-[110px]
          flex-1

          sm:mt-[105px]
        "
      >
        <p
          className="
            max-w-[310px]
            text-[18px]
            font-medium
            leading-[1.3]
            text-[#111111]

            sm:text-[19px]
            lg:text-[18px]
          "
        >
          “{text}”
        </p>
      </div>


      {/* ==================================================
          CUSTOMER
      ================================================== */}
      <div
        className="
          border-t
          border-[#AFC7E8]
          pt-[17px]
        "
      >

        <div className="flex items-center gap-[22px]">

          {/* USER ICON */}
          <div
            className="
              flex
              h-[52px]
              w-[52px]
              shrink-0
              items-center
              justify-center
              rounded-full
              border-[3px]
              border-black

              sm:h-[54px]
              sm:w-[54px]
            "
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-[35px] w-[35px]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >

              <circle
                cx="12"
                cy="8"
                r="3.2"
              />

              <path
                d="M5 20c.8-3.2 3.1-5 7-5s6.2 1.8 7 5"
              />

            </svg>

          </div>


          {/* CUSTOMER NAME */}
          <span
            className="
              text-[20px]
              font-normal
              text-[#111111]

              sm:text-[21px]
              lg:text-[20px]
            "
          >
            {name}
          </span>

        </div>

      </div>

    </div>
  );
};


// ============================================================
// REVIEW SECTION
// ============================================================

const Review = () => {
  return (
    <section className="w-full bg-white">

      <div
        className="
          mx-auto
          max-w-[1400px]
          px-5
          py-[45px]

          sm:px-8
          sm:py-[55px]

          md:px-10
          md:py-[65px]

          lg:px-[67px]
          lg:py-[55px]

          xl:px-[70px]
        "
      >

        {/* ==================================================
            SECTION HEADING
        ================================================== */}

        <div className="text-center">

          <h2
            className="
              font-Faustina
              text-[30px]
              font-bold
              leading-tight
              text-[#111111]

              sm:text-[34px]

              md:text-[38px]

              lg:text-[40px]
            "
          >
            What our customers say
          </h2>


          <p
            className="
            font-inter
              mx-auto
              mt-[25px]
              max-w-[900px]
              text-[14px]
              font-normal
              leading-[1.5]
              tracking-[0.3px]
              text-[#1768A6]

              sm:text-[15px]

              md:text-[18px]
            "
          >
            Hear what our customers have to say about their experience
            with our watches, quality, and service.
          </p>

        </div>


        {/* ==================================================
            REVIEW CARDS
        ================================================== */}

        <div
          className="
            mt-[70px]

            grid
            grid-cols-1
            gap-[28px]

            sm:mt-[75px]

            md:grid-cols-2
            md:gap-[30px]

            lg:mt-[75px]
            lg:grid-cols-3
            lg:gap-[80px]

            xl:gap-[80px]
          "
        >

          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              text={testimonial.text}
            />
          ))}

        </div>


        {/* ==================================================
            RATING
        ================================================== */}

        <div
          className="
            mt-[60px]
            flex
            flex-wrap
            items-center
            justify-center
            gap-[10px]
            text-[#111111]

            sm:mt-[70px]
            sm:gap-[14px]
          "
        >

          {/* Rating */}
          <span
            className="
            font-inter
              text-[18px]
              font-normal

              sm:text-[20px]
            "
          >
            4.9/5
          </span>


          {/* Stars */}
          <span
            className="
              flex
              items-center
              gap-[4px]
              text-[25px]
              leading-none
              text-[#FBBF24]

              sm:text-[28px]
            "
          >
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </span>


          {/* Views */}
          <span
            className="
            font-inter
              text-[18px]
              font-normal

              sm:text-[20px]
            "
          >
            Our 143 Views
          </span>

        </div>

      </div>

    </section>
  );
};

export default Review;