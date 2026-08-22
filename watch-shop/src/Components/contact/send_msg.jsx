import { useState } from "react";

const SendMessage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

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

      // Show error immediately if non-numeric characters are entered
      if (!/^\d+$/.test(trimmedValue)) {
        return "Enter a valid phone number of 10 digits.";
      }

      // Show error only when more than 10 digits are entered
      if (trimmedValue.length > 10) {
        return "Enter a valid phone number of 10 digits.";
      }
    }

    /* ---------------- EMAIL VALIDATION ---------------- */
    if (name === "email") {
      if (!trimmedValue) {
        return "";
      }

      // Basic validation while typing
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

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Validate immediately while typing
    const errorMessage = validateField(name, value);

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };

  // Validate entire form when Send Message is clicked
  const validateForm = () => {
    const newErrors = {};

    /* ---------------- NAME VALIDATION ---------------- */

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

    /* ---------------- PHONE VALIDATION ---------------- */

    const phone = formData.phone.trim();

    if (!phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = "Enter a valid phone number of 10 digits.";
    }

    /* ---------------- EMAIL VALIDATION ---------------- */

    const email = formData.email.trim();

    if (!email) {
      newErrors.email = "Email address is required.";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)
    ) {
      newErrors.email = "Enter a valid email address.";
    }

    /* ---------------- SUBJECT VALIDATION ---------------- */

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters.";
    }

    /* ---------------- MESSAGE VALIDATION ---------------- */

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    console.log("Form submitted:", formData);

    alert("Your message has been sent successfully!");

    setFormData({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });

    setErrors({});
  };
  return (
    <div className="w-full rounded-[28px] bg-[#145DA0]/[0.07] px-8 py-12 sm:px-12 lg:px-16">
      {/* Heading */}
      <h2 className="font-['Faustina'] text-[30px] font-semibold text-black sm:text-[40px]">
        Get In Touch Now
      </h2>

      <form className="mt-10" onSubmit={handleSubmit} noValidate>
        {/* Name and Phone Number */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block font-['Inter'] text-[20px] font-Regular text-black"
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
              className={`h-[50px] w-full rounded-full border bg-[#F8F8F8] px-5 font-['Inter'] text-[16px] text-black outline-none placeholder:text-gray-500 ${
                errors.name
                  ? "border-red-500"
                  : "border-[#8A8A8A] focus:border-[#145DA0]"
              }`}
            />

            {errors.name && (
              <p className="mt-2 font-['Inter'] text-[13px] text-red-500">
                {errors.name}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="phone"
              className="mb-2 block font-['Inter'] text-[20px] font-Regular text-black"
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
              className={`h-[50px] w-full rounded-full border bg-[#F8F8F8] px-5 font-['Inter'] text-[16px] text-black outline-none placeholder:text-gray-500 ${
                errors.phone
                  ? "border-red-500"
                  : "border-[#8A8A8A] focus:border-[#145DA0]"
              }`}
            />

            {errors.phone && (
              <p className="mt-2 font-['Inter'] text-[13px] text-red-500">
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="mt-8">
          <label
            htmlFor="email"
            className="mb-2 block font-['Inter'] text-[20px] font-Regular text-black"
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
            className={`h-[50px] w-full rounded-full border bg-[#F8F8F8] px-5 font-['Inter'] text-[16px] text-black outline-none placeholder:text-gray-500 ${
              errors.email
                ? "border-red-500"
                : "border-[#8A8A8A] focus:border-[#145DA0]"
            }`}
          />

          {errors.email && (
            <p className="mt-2 font-['Inter'] text-[13px] text-red-500">
              {errors.email}
            </p>
          )}
        </div>

        {/* Subject */}
        <div className="mt-8">
          <label
            htmlFor="subject"
            className="mb-2 block font-['Inter'] text-[20px] font-Regular text-black"
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
            className={`h-[50px] w-full rounded-full border bg-[#F8F8F8] px-5 font-['Inter'] text-[16px] text-black outline-none placeholder:text-gray-500 ${
              errors.subject
                ? "border-red-500"
                : "border-[#8A8A8A] focus:border-[#145DA0]"
            }`}
          />

          {errors.subject && (
            <p className="mt-2 font-['Inter'] text-[13px] text-red-500">
              {errors.subject}
            </p>
          )}
        </div>

        {/* Message */}
        <div className="mt-8">
          <label
            htmlFor="message"
            className="mb-2 block font-['Inter'] text-[20px] font-Regular text-black"
          >
            Message*
          </label>

          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us how we can assist you..."
            className={`h-[180px] w-full resize-none rounded-[12px] border bg-[#F8F8F8] px-5 py-4 font-['Inter'] text-[16px] text-black outline-none placeholder:text-gray-500 ${
              errors.message
                ? "border-red-500"
                : "border-[#8A8A8A] focus:border-[#145DA0]"
            }`}
          />

          {errors.message && (
            <p className="mt-2 font-['Inter'] text-[13px] text-red-500">
              {errors.message}
            </p>
          )}
        </div>

        {/* Send Button */}
        <div className="mt-10 flex justify-center">
          <button
            type="submit"
            className="rounded-full bg-[#145DA0] px-10 py-3 font-['Inter'] text-[18px] font-medium text-white transition hover:bg-[#104d88]"
          >
            Send Message
          </button>
        </div>

        {/* Security Text */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-5 w-5 text-black"
          >
            <path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Z" />
            <path d="m9 12 2 2 4-4" />
          </svg>

          <p className="font-['Inter'] text-[13px] text-black">
            Your Information is secure and will not be shared.
          </p>
        </div>
      </form>
    </div>
  );
};

export default SendMessage;