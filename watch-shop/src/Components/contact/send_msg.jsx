import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SendMessage = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  useEffect(() => {
  if (!showSuccessPopup) return;

  const timer = setTimeout(() => {
    setShowSuccessPopup(false);
  }, 3000);

  return () => clearTimeout(timer);
}, [showSuccessPopup]);

  // --------------------------------------------------
  // EMAILJS CONFIGURATION
  // Replace these three values with your EmailJS values
  // --------------------------------------------------

  const SERVICE_ID = "service_o5dykka";
  const TEMPLATE_ID = "template_4t59ens";
  const PUBLIC_KEY = "owTo53sq_o7dlTcl4";

  // Validate individual field while typing
  const validateField = (name, value) => {
    const trimmedValue = value.trim();

    /* ---------------- NAME VALIDATION ---------------- */
    if (name === "name") {
      if (!trimmedValue) {
        return "";
      }

      const spaceCount = (trimmedValue.match(/ /g) || []).length;
      const letterCount = (trimmedValue.match(/[A-Za-z]/g) || []).length;

      if (
        !/^[A-Za-z\s]+$/.test(trimmedValue) ||
        spaceCount > 3 ||
        letterCount > 30
      ) {
        return "Enter a valid name.";
      }
    }

    /* ---------------- PHONE VALIDATION ---------------- */
    if (name === "phone") {
      if (!trimmedValue) {
        return "";
      }

      if (!/^\d+$/.test(trimmedValue)) {
        return "Enter a valid phone number of 10 digits.";
      }

      if (trimmedValue.length > 10) {
        return "Enter a valid phone number of 10 digits.";
      }
    }

    /* ---------------- EMAIL VALIDATION ---------------- */
    if (name === "email") {
      if (!trimmedValue) {
        return "";
      }

      if (
        trimmedValue.includes("@") &&
        !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(
          trimmedValue
        )
      ) {
        return "Enter a valid email address.";
      }
    }

    /* ---------------- SUBJECT VALIDATION ---------------- */
    if (name === "subject") {
      if (trimmedValue && trimmedValue.length < 3) {
        return "Subject must be at least 3 characters.";
      }
    }

    /* ---------------- MESSAGE VALIDATION ---------------- */
    if (name === "message") {
      if (trimmedValue && trimmedValue.length < 10) {
        return "Message must be at least 10 characters.";
      }
    }

    return "";
  };

  // --------------------------------------------------
  // HANDLE INPUT CHANGE
  // --------------------------------------------------

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    const errorMessage = validateField(name, value);

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };

  // --------------------------------------------------
  // VALIDATE COMPLETE FORM
  // --------------------------------------------------

  const validateForm = () => {
    const newErrors = {};

    /* ---------------- NAME ---------------- */

    const trimmedName = formData.name.trim();
    const spaceCount = (trimmedName.match(/ /g) || []).length;
    const letterCount = (trimmedName.match(/[A-Za-z]/g) || []).length;

    if (!trimmedName) {
      newErrors.name = "Name is required.";
    } else if (
      !/^[A-Za-z\s]+$/.test(trimmedName) ||
      spaceCount > 3 ||
      letterCount > 30
    ) {
      newErrors.name = "Enter a valid name.";
    }

    /* ---------------- PHONE ---------------- */

    const phone = formData.phone.trim();

    if (!phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = "Enter a valid phone number of 10 digits.";
    }

    /* ---------------- EMAIL ---------------- */

    const email = formData.email.trim();

    if (!email) {
      newErrors.email = "Email address is required.";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)
    ) {
      newErrors.email = "Enter a valid email address.";
    }

    /* ---------------- SUBJECT ---------------- */

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters.";
    }

    /* ---------------- MESSAGE ---------------- */

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // --------------------------------------------------
  // SEND FORM THROUGH EMAILJS
  // --------------------------------------------------
// Handle form submission
const handleSubmit = async (e) => {
  e.preventDefault();

  const isValid = validateForm();

  if (!isValid) {
    return;
  }

  setIsSending(true);

  try {
    await emailjs.sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      form.current,
      PUBLIC_KEY
    );

    // Show success popup
    setShowSuccessPopup(true);

    // Clear form
    setFormData({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });

    // Clear errors
    setErrors({});
  } catch (error) {
    console.error("EmailJS Error:", error);

    alert(
      "Sorry, your message could not be sent. Please try again later."
    );
  } finally {
    setIsSending(false);
  }
};

return (
  <div className="w-full rounded-[28px] bg-[#145DA0]/[0.07] px-5 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-12">

    {/* Heading */}
    <h2 className="font-['Faustina'] text-[26px] font-semibold text-black sm:text-[34px] lg:text-[40px]">
      Get In Touch Now
    </h2>

    <form
      ref={form}
      className="mt-7 sm:mt-8 lg:mt-10"
      onSubmit={handleSubmit}
      noValidate
    >

      {/* Name and Phone Number */}
      <div className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 md:gap-8">

        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="mb-2 block font-['Inter'] text-[16px] font-normal text-black sm:text-[18px] lg:text-[20px]"
          >
            Name*
          </label>

          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ex. Santosh"
            className={`h-[46px] w-full rounded-full border bg-[#F8F8F8] px-4 font-['Inter'] text-[14px] text-black outline-none placeholder:text-gray-500 sm:h-[48px] sm:px-5 sm:text-[15px] lg:h-[50px] lg:text-[16px] ${
              errors.name
                ? "border-red-500"
                : "border-[#8A8A8A] focus:border-[#145DA0]"
            }`}
          />

          {errors.name && (
            <p className="mt-2 font-['Inter'] text-[12px] text-red-500 lg:text-[13px]">
              {errors.name}
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block font-['Inter'] text-[16px] font-normal text-black sm:text-[18px] lg:text-[20px]"
          >
            Phone Number*
          </label>

          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Ex. 9876543210"
            className={`h-[46px] w-full rounded-full border bg-[#F8F8F8] px-4 font-['Inter'] text-[14px] text-black outline-none placeholder:text-gray-500 sm:h-[48px] sm:px-5 sm:text-[15px] lg:h-[50px] lg:text-[16px] ${
              errors.phone
                ? "border-red-500"
                : "border-[#8A8A8A] focus:border-[#145DA0]"
            }`}
          />

          {errors.phone && (
            <p className="mt-2 font-['Inter'] text-[12px] text-red-500 lg:text-[13px]">
              {errors.phone}
            </p>
          )}
        </div>

      </div>


      {/* Email */}
      <div className="mt-6 sm:mt-7 lg:mt-8">
        <label
          htmlFor="email"
          className="mb-2 block font-['Inter'] text-[16px] font-normal text-black sm:text-[18px] lg:text-[20px]"
        >
          Email Address*
        </label>

        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Ex. santosh@gmail.com"
          className={`h-[46px] w-full rounded-full border bg-[#F8F8F8] px-4 font-['Inter'] text-[14px] text-black outline-none placeholder:text-gray-500 sm:h-[48px] sm:px-5 sm:text-[15px] lg:h-[50px] lg:text-[16px] ${
            errors.email
              ? "border-red-500"
              : "border-[#8A8A8A] focus:border-[#145DA0]"
          }`}
        />

        {errors.email && (
          <p className="mt-2 font-['Inter'] text-[12px] text-red-500 lg:text-[13px]">
            {errors.email}
          </p>
        )}
      </div>


      {/* Subject */}
      <div className="mt-6 sm:mt-7 lg:mt-8">
        <label
          htmlFor="subject"
          className="mb-2 block font-['Inter'] text-[16px] font-normal text-black sm:text-[18px] lg:text-[20px]"
        >
          Subject*
        </label>

        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Enter your enquiry subject"
          className={`h-[46px] w-full rounded-full border bg-[#F8F8F8] px-4 font-['Inter'] text-[14px] text-black outline-none placeholder:text-gray-500 sm:h-[48px] sm:px-5 sm:text-[15px] lg:h-[50px] lg:text-[16px] ${
            errors.subject
              ? "border-red-500"
              : "border-[#8A8A8A] focus:border-[#145DA0]"
          }`}
        />

        {errors.subject && (
          <p className="mt-2 font-['Inter'] text-[12px] text-red-500 lg:text-[13px]">
            {errors.subject}
          </p>
        )}
      </div>


      {/* Message */}
      <div className="mt-6 sm:mt-7 lg:mt-8">
        <label
          htmlFor="message"
          className="mb-2 block font-['Inter'] text-[16px] font-normal text-black sm:text-[18px] lg:text-[20px]"
        >
          Message*
        </label>

        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us how we can assist you..."
          className={`h-[150px] w-full resize-none rounded-[12px] border bg-[#F8F8F8] px-4 py-3 font-['Inter'] text-[14px] text-black outline-none placeholder:text-gray-500 sm:h-[165px] sm:px-5 sm:py-4 sm:text-[15px] lg:h-[180px] lg:text-[16px] ${
            errors.message
              ? "border-red-500"
              : "border-[#8A8A8A] focus:border-[#145DA0]"
          }`}
        />

        {errors.message && (
          <p className="mt-2 font-['Inter'] text-[12px] text-red-500 lg:text-[13px]">
            {errors.message}
          </p>
        )}
      </div>


      {/* Send Button */}
      <div className="mt-8 flex justify-center sm:mt-9 lg:mt-10">
        <button
          type="submit"
          disabled={isSending}
          className={`rounded-full bg-[#145DA0] px-8 py-2.5 font-['Inter'] text-[15px] font-medium text-white transition sm:px-9 sm:text-[16px] lg:px-10 lg:py-3 lg:text-[18px] ${
            isSending
              ? "cursor-not-allowed opacity-70"
              : "hover:bg-[#104d88]"
          }`}
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </div>


      {/* Security Text */}
      <div className="mt-5 flex items-center justify-center gap-2 text-center sm:mt-6 sm:gap-3">
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-4 w-4 shrink-0 text-black lg:h-5 lg:w-5"
        >
          <path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>

        <p className="font-['Inter'] text-[11px] text-black sm:text-[12px] lg:text-[13px]">
          Your Information is secure and will not be shared.
        </p>

      </div>

    </form>

    
      {/* ================= SUCCESS POPUP ================= */}
      {showSuccessPopup && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 px-4 backdrop-blur-[2px]"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              setShowSuccessPopup(false);
            }
          }}
        >
          {/* Popup Box */}
          <div
            className="relative w-full max-w-[420px] rounded-2xl bg-white px-6 py-8 text-center shadow-2xl sm:px-8 sm:py-9 md:max-w-[480px]"
            onMouseDown={(e) => e.stopPropagation()}
          >

            {/* X Close Button */}
            <button
              type="button"
              onClick={() => setShowSuccessPopup(false)}
              aria-label="Close success message"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100 hover:text-black sm:right-5 sm:top-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6l12 12M18 6L6 18"
                />
              </svg>
            </button>

            {/* Success Icon */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#145DA0]/10 sm:h-[72px] sm:w-[72px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#145DA0"
                strokeWidth="2"
                className="h-8 w-8 sm:h-9 sm:w-9"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12.5l4.5 4.5L19 7.5"
                />
              </svg>
            </div>

            {/* Success Heading */}
            <h3 className="mt-5 font-['Faustina'] text-[26px] font-semibold text-black sm:text-[30px]">
              Message Sent Successfully!
            </h3>

            {/* Success Message */}
            <p className="mx-auto mt-3 max-w-[360px] font-['Inter'] text-[14px] leading-6 text-gray-600 sm:text-[15px]">
              Thank you for contacting us. We have received your enquiry
              and will get back to you shortly.
            </p>

            {/* Done Button */}
            <button
              type="button"
              onClick={() => setShowSuccessPopup(false)}
              className="mt-6 rounded-full bg-[#145DA0] px-8 py-2.5 font-['Inter'] text-[15px] font-medium text-white transition hover:bg-[#104d88] sm:px-10 sm:py-3 sm:text-[16px]"
            >
              Done
            </button>

            {/* Auto Close Text */}
            <p className="mt-4 font-['Inter'] text-[11px] text-gray-400 sm:text-[12px]">
              This message will close automatically in 3 seconds.
            </p>

          </div>
        </div>
      )}
  </div>
);
};

export default SendMessage;