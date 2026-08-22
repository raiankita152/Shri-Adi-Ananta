import React from "react";
import emailjs from "@emailjs/browser";

import heroBanner from "../../assets/images/home_page/home_page_banner.png";
import heroBanner2 from "../../assets/images/home_page/home_page_banner2.png";
import heroBanner3 from "../../assets/images/home_page/home_page_banner3.png";
import arrowImage from "../../assets/images/home_page/arrow.png";

const HeroBanner = () => {
  const banners = [
  heroBanner,
  heroBanner2,
  heroBanner3,
];

const [currentSlide, setCurrentSlide] = React.useState(0);

React.useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((prevSlide) =>
      prevSlide === banners.length - 1 ? 0 : prevSlide + 1
    );
  }, 4000);

  return () => clearInterval(interval);
}, []);

  const SERVICE_ID = "service_o5dykka";
  const TEMPLATE_ID = "template_pret2m7";
  const PUBLIC_KEY = "owTo53sq_o7dlTcl4";

  // ==================================================
  // FORM STATES
  // ==================================================
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");

  const [errors, setErrors] = React.useState({});
  const [highlightForm, setHighlightForm] = React.useState(false);

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitMessage, setSubmitMessage] = React.useState("");


  // ==================================================
  // VALIDATE FORM
  // ==================================================
  const validateForm = () => {

    const newErrors = {};

    // NAME
    if (name.trim() === "") {
      newErrors.name = "Name is required.";
    } else if (!/^[A-Za-z ]+$/.test(name.trim())) {
      newErrors.name = "Please enter a valid name.";
    }

    // PHONE
    if (phone.trim() === "") {

      newErrors.phone = "Phone number is required.";

    } else if (!/^[0-9]+$/.test(phone)) {

      newErrors.phone = "Please enter a valid phone number.";

    } else if (!/^[6-9]/.test(phone)) {

      newErrors.phone =
        "Phone number must start with 6, 7, 8 or 9.";

    } else if (!/^[6-9][0-9]{9}$/.test(phone)) {

      newErrors.phone =
        "Phone number must contain exactly 10 digits.";
    }

    // MESSAGE
    if (message.trim() === "") {

      newErrors.message = "Message is required.";

    } else if (message.trim().length < 5) {

      newErrors.message = "Please enter a valid message.";
    }

    return newErrors;
  };


  // ==================================================
  // SUBMIT FORM
  // ==================================================
  const handleSubmit = async (e) => {

    e.preventDefault();

    const newErrors = validateForm();

    setErrors(newErrors);
    setSubmitMessage("");

    // Stop if validation fails
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    try {

      setIsSubmitting(true);

      const templateParams = {
        name: name.trim(),
        phone: phone.trim(),
        message: message.trim(),
      };

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      // SUCCESS
      setSubmitMessage(
        "Thank you! Your enquiry has been sent successfully."
      );

      // Clear form
      setName("");
      setPhone("");
      setMessage("");
      setErrors({});

    } catch (error) {

      console.error("EmailJS Error:", error);

      setSubmitMessage(
        "Something went wrong. Please try again later."
      );

    } finally {

      setIsSubmitting(false);

    }
  };


  // ==================================================
  // RETURN
  // ==================================================
  
  return (
    <section className="relative w-full overflow-hidden">

      {/* HERO BACKGROUND SLIDER */}
      <div className="absolute inset-0 h-full w-full">
        {banners.map((banner, index) => (
          <img
            key={index}
            src={banner}
            alt={`Sri Adi Ananta Watches Banner ${index + 1}`}
            className={`
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
              transition-opacity
              duration-1000
              ease-in-out
              ${
                index === currentSlide
                  ? "opacity-100"
                  : "opacity-0"
              }
            `}
          />
        ))}
      </div>

      {/* LIGHT OVERLAY */}
      <div className="absolute inset-0 bg-white/10" />


      {/* ==================================================
          MAIN HERO CONTAINER
      ================================================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1440px]

          min-h-[700px]
          px-5
          py-10

          sm:min-h-[720px]
          sm:px-8
          sm:py-12

          md:min-h-[650px]
          md:px-10
          md:py-14

          lg:min-h-[680px]
          lg:px-16
          lg:py-16

          xl:px-20
        "
      >


        <div
          className="
            flex
            w-full
            flex-col
            items-start
            gap-10

            md:flex-row
            md:items-start
            md:justify-between
            md:gap-12
          "
        >

          {/* ==================================================
              LEFT SIDE - HERO TEXT
          ================================================== */}
          <div
            className="
              w-full
              max-w-[650px]
              pt-2

              sm:pt-3

              md:w-[52%]
              md:pt-4

              lg:w-[55%]
              lg:pt-5
            "
          >

            <h1
              className="
                font-Faustina
                text-[30px]
                font-medium
                leading-[1.15]
                tracking-[1px]
                text-[#17191D]

                sm:text-[36px]

                md:text-[42px]

                lg:text-[48px]

                xl:text-[52px]
              "
            >
              Your Perfect One Stop
              <br />
              Gifting Solution.
            </h1>

          </div>


          {/* ==================================================
              RIGHT SIDE - CONTACT FORM
          ================================================== */}
          <div
            className="
              w-full
              max-w-[320px]
              self-center

              sm:max-w-[330px]

              md:w-[38%]
              md:max-w-[300px]
              md:self-start

              lg:w-[34%]
              lg:max-w-[320px]

              xl:max-w-[340px]
            "
          >

            {/* ==================================================
                FORM BOX
            ================================================== */}
            <div
              className={`
                rounded-[6px]
                bg-white/[49%]
                p-5
                shadow-lg
                backdrop-blur-[3px]

                sm:p-6
                md:p-6
                lg:p-7

                transition-all
                duration-500

                ${
                  highlightForm
                    ? "ring-4 ring-[#1768A6]/40 shadow-[0_0_30px_rgba(23,104,166,0.45)]"
                    : ""
                }
              `}
            >

              {/* ==================================================
                  FORM HEADING
              ================================================== */}
              <h2
                className="
                  font-Faustina
                  text-[32px]
                  font-semibold
                  text-[#000000]

                  sm:text-[22px]
                  md:text-[23px]
                  lg:text-[25px]
                "
              >
                Feel free to reach us
              </h2>


              {/* ==================================================
                  FORM DESCRIPTION
              ================================================== */}
              <p
                className="
                  mt-2
                  font-Inter
                  text-[16px]
                  leading-4
                  text-[#4B4F54]

                  sm:text-[10px]
                  md:text-[10px]
                "
              >
                “Need corporate solutions or bulk wedding orders?
                Our experts offer the best prices.”
              </p>


              {/* ==================================================
                  FORM
              ================================================== */}
              <form
                id="hero-enquiry-form"
                className="mt-5 space-y-3 sm:space-y-3.5"
                onSubmit={handleSubmit}
              >

                {/* ==================================================
                    NAME
                ================================================== */}
                <div>

                  <label
                    htmlFor="hero-name"
                    className="
                      mb-1.5
                      block
                      text-[16px]
                      font-medium
                      text-[#17191D]
                    "
                  >
                    Name*
                  </label>

                  <input
                    id="hero-name"
                    type="text"
                    name="name"
                    value={name}
                    placeholder="Ex. Santosh"

                    onChange={(e) => {
                      const value = e.target.value;

                      // Allow user to type anything
                      setName(value);

                      // Validate while typing
                      if (value.trim() === "") {

                        setErrors((prev) => ({
                          ...prev,
                          name: "Name is required.",
                        }));

                      } else if (
                        !/^[A-Za-z ]+$/.test(value.trim())
                      ) {

                        setErrors((prev) => ({
                          ...prev,
                          name: "Please enter a valid name.",
                        }));

                      } else {

                        setErrors((prev) => ({
                          ...prev,
                          name: "",
                        }));

                      }
                    }}

                    className={`
                      h-[34px]
                      w-full
                      rounded-[4px]
                      border
                      bg-white
                      px-3
                      text-[13px]
                      text-[#17191D]
                      outline-none
                      transition

                      ${
                        errors.name
                          ? "border-red-500"
                          : "border-[#C9CDD1]"
                      }

                      focus:border-[#1768A6]
                    `}
                  />

                  {/* NAME ERROR */}
                  {errors.name && (
                    <p className="mt-1 text-[10px] leading-4 text-red-600">
                      {errors.name}
                    </p>
                  )}

                </div>


                {/* ==================================================
                    PHONE NUMBER
                ================================================== */}
                <div>

                  <label
                    htmlFor="hero-phone"
                    className="
                      mb-1.5
                      block
                      text-[16px]
                      font-medium
                      text-[#17191D]
                    "
                  >
                    Phone Number*
                  </label>

                  <input
                    id="hero-phone"
                    type="tel"
                    name="phone"
                    value={phone}
                    placeholder="Ex. 7759439438"
                    maxLength={10}

                    onChange={(e) => {
                      const value = e.target.value;

                      // Allow user to type anything
                      setPhone(value);

                      // Empty
                      if (value.trim() === "") {

                        setErrors((prev) => ({
                          ...prev,
                          phone: "Phone number is required.",
                        }));

                        return;
                      }

                      // Characters other than numbers
                      if (!/^[0-9]+$/.test(value)) {

                        setErrors((prev) => ({
                          ...prev,
                          phone:
                            "Please enter a valid phone number.",
                        }));

                        return;
                      }

                      // First digit
                      if (!/^[6-9]/.test(value)) {

                        setErrors((prev) => ({
                          ...prev,
                          phone:
                            "Phone number must start with 6, 7, 8 or 9.",
                        }));

                        return;
                      }

                      // Length
                      if (value.length !== 10) {

                        setErrors((prev) => ({
                          ...prev,
                          phone:
                            "Phone number must contain exactly 10 digits.",
                        }));

                        return;
                      }

                      // Valid
                      setErrors((prev) => ({
                        ...prev,
                        phone: "",
                      }));
                    }}

                    className={`
                      h-[34px]
                      w-full
                      rounded-[4px]
                      border
                      bg-white
                      px-3
                      text-[13px]
                      text-[#17191D]
                      outline-none
                      transition

                      ${
                        errors.phone
                          ? "border-red-500"
                          : "border-[#C9CDD1]"
                      }

                      focus:border-[#1768A6]
                    `}
                  />

                  {/* PHONE ERROR */}
                  {errors.phone && (
                    <p className="mt-1 text-[10px] leading-4 text-red-600">
                      {errors.phone}
                    </p>
                  )}

                </div>


                {/* ==================================================
                    MESSAGE
                ================================================== */}
                <div>

                  <label
                    htmlFor="hero-message"
                    className="
                      mb-1.5
                      block
                      text-[16px]
                      font-medium
                      text-[#17191D]
                    "
                  >
                    Message*
                  </label>

                  <textarea
                    id="hero-message"
                    name="message"
                    rows="3"
                    value={message}
                    placeholder="Tell us how we can assist you..."

                    onChange={(e) => {
                      const value = e.target.value;

                      // Allow user to type anything
                      setMessage(value);

                      // Validate while typing
                      if (value.trim() === "") {

                        setErrors((prev) => ({
                          ...prev,
                          message: "Message is required.",
                        }));

                      } else if (value.trim().length < 5) {

                        setErrors((prev) => ({
                          ...prev,
                          message:
                            "Please enter a valid message.",
                        }));

                      } else {

                        setErrors((prev) => ({
                          ...prev,
                          message: "",
                        }));

                      }
                    }}

                    className={`
                      min-h-[75px]
                      w-full
                      resize-none
                      rounded-[4px]
                      border
                      bg-white
                      px-3
                      py-2
                      text-[13px]
                      text-[#17191D]
                      outline-none
                      transition

                      ${
                        errors.message
                          ? "border-red-500"
                          : "border-[#C9CDD1]"
                      }

                      focus:border-[#1768A6]
                    `}
                  />

                  {/* MESSAGE ERROR */}
                  {errors.message && (
                    <p className="mt-1 text-[10px] leading-4 text-red-600">
                      {errors.message}
                    </p>
                  )}

                </div>


                {/* ==================================================
                    SEND BUTTON
                ================================================== */}
                <div className="flex justify-center pt-1">

                 <button
  type="submit"
  disabled={isSubmitting}
  className="
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-[4px]
    bg-[#1768A6]
    px-7
    py-2.5
    text-[10px]
    font-semibold
    uppercase
    leading-none
    tracking-wide
    text-white
    transition
    duration-300
    hover:bg-[#0E527F]
    disabled:cursor-not-allowed
    disabled:opacity-60
    sm:px-8
  "
>

                   <span className="leading-none">
  {isSubmitting ? "Sending..." : "Send"}
</span>
                    <img
                      src={arrowImage}
                      alt=""
                      aria-hidden="true"
                      className="
                        h-4
                        w-4
                        shrink-0
                        object-contain
                      "
                    />

                  </button>

                </div>

              </form>
              {submitMessage && (
  <p
    className={`mt-4 text-center text-[12px] font-medium ${
      submitMessage.includes("successfully")
        ? "text-green-600"
        : "text-red-600"
    }`}
  >
    {submitMessage}
  </p>
)}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default HeroBanner;