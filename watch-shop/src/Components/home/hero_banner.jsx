import React from "react";
import emailjs from "@emailjs/browser";

import heroBanner from "../../assets/images/home_page/home_page_banner.png";
import heroBanner2 from "../../assets/images/home_page/home_page_banner2.png";
import heroBanner3 from "../../assets/images/home_page/home_page_banner3.png";
import arrowImage from "../../assets/images/home_page/arrow.png";

const HeroBanner = () => {
  const banners = [heroBanner, heroBanner2, heroBanner3];

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

      setSubmitMessage(
        "Thank you! Your enquiry has been sent successfully."
      );

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

  return (
    <section className="relative w-full overflow-hidden">

      {/* ==================================================
          HERO BANNER IMAGE AREA
      ================================================== */}
      <div
        className="
          relative
          h-[500px]
          w-full
          overflow-hidden

          sm:h-[560px]

          md:h-[600px]

          lg:absolute
          lg:inset-0
          lg:h-full
        "
      >

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
                object-[8%_center]
                lg:object-center
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
            HERO HEADING
        ================================================== */}
        <div
          className="
            relative
            z-10
            mx-auto
            flex
            h-full
            w-full
            max-w-[1440px]
            items-start
            px-5
            pt-10

            sm:px-8
            sm:pt-12

            md:px-10
            md:pt-14

            lg:px-16
            lg:pt-16

            xl:px-20
          "
        >

          <div
            className="
              w-full
              max-w-[650px]

              lg:w-[55%]
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

        </div>

      </div>

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

          min-h-[600px]
          px-5
          py-10

          sm:min-h-0
          sm:px-8
          sm:py-0

          md:min-h-0
          md:px-10
          md:py-0

          lg:min-h-[680px]
          lg:px-16
          lg:py-16

          xl:px-20
        "
      >

        {/* ==================================================
            DESKTOP LAYOUT
        ================================================== */}
        <div
          className="
            hidden

            lg:flex
            lg:w-full
            lg:flex-row
            lg:items-start
            lg:justify-between
            lg:gap-12
          "
        >

          {/* LEFT SIDE - DESKTOP HEADING */}
          <div
            className="
              w-[55%]
              max-w-[650px]
              pt-5
            "
          >

            <h1
              className="
                invisible
                font-Faustina
                text-[48px]
                font-bold
                leading-[1.15]
                tracking-[1px]
                text-[#17191D]

                xl:text-[52px]
              "
            >
              Your Perfect One Stop
              <br />
              Gifting Solution.
            </h1>

          </div>

          {/* RIGHT SIDE - DESKTOP FORM */}
          <div
            className="
              w-[34%]
              max-w-[320px]
              pt-5

              xl:max-w-[340px]
            "
          >

            {/* FORM BOX */}
            <div
              id="desktop-hero-enquiry-form"
              className={`
                rounded-[6px]
                bg-white/[49%]
                p-7
                shadow-lg
                backdrop-blur-[3px]

                transition-all
                duration-500

                ${
                  highlightForm
                    ? "ring-4 ring-[#1768A6]/40 shadow-[0_0_30px_rgba(23,104,166,0.45)]"
                    : ""
                }
              `}
            >

              <FormContent
                name={name}
                phone={phone}
                message={message}
                errors={errors}
                setName={setName}
                setPhone={setPhone}
                setMessage={setMessage}
                setErrors={setErrors}
                handleSubmit={handleSubmit}
                isSubmitting={isSubmitting}
                submitMessage={submitMessage}
                arrowImage={arrowImage}
              />

            </div>

          </div>

        </div>

        {/* ==================================================
            TABLET + MOBILE FORM
            FORM APPEARS AFTER HERO IMAGE
        ================================================== */}
      <div
  className="
    block
    w-full
    pt-8
    pb-3

    sm:pt-10
    sm:pb-5

    md:pt-12
    md:pb-6

    lg:hidden
  "
>
          <div
            className="
              mx-auto
              w-full
              max-w-[500px]

              sm:max-w-[540px]

              md:max-w-[560px]
            "
          >

            {/* FORM BOX */}
            <div
              id="mobile-hero-enquiry-form"
              className={`
                rounded-[8px]
                bg-white
                p-5
                shadow-xl

                sm:p-6

                md:p-7

                transition-all
                duration-500

                ${
                  highlightForm
                    ? "ring-4 ring-[#1768A6]/40 shadow-[0_0_30px_rgba(23,104,166,0.45)]"
                    : ""
                }
              `}
            >

              <FormContent
                name={name}
                phone={phone}
                message={message}
                errors={errors}
                setName={setName}
                setPhone={setPhone}
                setMessage={setMessage}
                setErrors={setErrors}
                handleSubmit={handleSubmit}
                isSubmitting={isSubmitting}
                submitMessage={submitMessage}
                arrowImage={arrowImage}
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};


// ==================================================
// FORM CONTENT COMPONENT
// ==================================================
const FormContent = ({
  name,
  phone,
  message,
  errors,
  setName,
  setPhone,
  setMessage,
  setErrors,
  handleSubmit,
  isSubmitting,
  submitMessage,
  arrowImage,
}) => {

  return (
    <>

      {/* FORM HEADING */}
      <h2
        className="
          font-Faustina
          text-[27px]
          font-semibold
        text-[#000000]

          sm:text-[24px]

          md:text-[25px]

          lg:text-[25px]
        "
      >
        Feel free to reach us
      </h2>

      {/* FORM DESCRIPTION */}
      <p
        className="
          mt-2
          font-Inter
          text-[13px]
          leading-5
          text-[#4B4F54]

          sm:text-[12px]

          md:text-[12px]

          lg:text-[16px]
        "
      >
        “Need corporate solutions or bulk wedding orders?
        Our experts offer the best prices.”
      </p>

      {/* FORM */}
      <form
        className="mt-5 space-y-3 sm:space-y-3.5"
        onSubmit={handleSubmit}
      >

        {/* NAME */}
        <div>

          <label
            htmlFor="hero-name"
            className="
              mb-1.5
              block
              text-[14px]
              font-medium
              text-[#17191D]

              sm:text-[15px]

              md:text-[15px]
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

              setName(value);

              if (value.trim() === "") {
                setErrors((prev) => ({
                  ...prev,
                  name: "Name is required.",
                }));
              } else if (!/^[A-Za-z ]+$/.test(value.trim())) {
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
              h-[36px]
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

          {errors.name && (
            <p className="mt-1 text-[10px] leading-4 text-red-600">
              {errors.name}
            </p>
          )}

        </div>

        {/* PHONE */}
        <div>

          <label
            htmlFor="hero-phone"
            className="
              mb-1.5
              block
              text-[14px]
              font-medium
              text-[#17191D]

              sm:text-[15px]

              md:text-[15px]
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

              setPhone(value);

              if (value.trim() === "") {
                setErrors((prev) => ({
                  ...prev,
                  phone: "Phone number is required.",
                }));

                return;
              }

              if (!/^[0-9]+$/.test(value)) {
                setErrors((prev) => ({
                  ...prev,
                  phone: "Please enter a valid phone number.",
                }));

                return;
              }

              if (!/^[6-9]/.test(value)) {
                setErrors((prev) => ({
                  ...prev,
                  phone:
                    "Phone number must start with 6, 7, 8 or 9.",
                }));

                return;
              }

              if (value.length !== 10) {
                setErrors((prev) => ({
                  ...prev,
                  phone:
                    "Phone number must contain exactly 10 digits.",
                }));

                return;
              }

              setErrors((prev) => ({
                ...prev,
                phone: "",
              }));
            }}
            className={`
              h-[36px]
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

          {errors.phone && (
            <p className="mt-1 text-[10px] leading-4 text-red-600">
              {errors.phone}
            </p>
          )}

        </div>

        {/* MESSAGE */}
        <div>

          <label
            htmlFor="hero-message"
            className="
              mb-1.5
              block
              text-[14px]
              font-medium
              text-[#17191D]

              sm:text-[15px]

              md:text-[15px]
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

              setMessage(value);

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

          {errors.message && (
            <p className="mt-1 text-[10px] leading-4 text-red-600">
              {errors.message}
            </p>
          )}

        </div>

        {/* SEND BUTTON */}
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

      {/* SUCCESS / ERROR MESSAGE */}
      {submitMessage && (
        <p
          className={`
            mt-4
            text-center
            text-[12px]
            font-medium

            ${
              submitMessage.includes("successfully")
                ? "text-green-600"
                : "text-red-600"
            }
          `}
        >
          {submitMessage}
        </p>
      )}

    </>
  );
};

export default HeroBanner;