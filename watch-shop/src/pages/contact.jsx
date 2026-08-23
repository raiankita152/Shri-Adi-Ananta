import { Link } from "react-router-dom";

import Navbar from "../Components/layout/navbar";
import Footer from "../Components/layout/footer";
import Banner from "../Components/contact/banner";
import SendMessage from "../Components/contact/send_msg";
import ContactInfo from "../Components/contact/contact_info";
import FAQ from "../Components/contact/FQA";

const Contact = () => {
  return (
    <div className="font-['Inter']">
      <Navbar />

      {/* Space for fixed navbar */}
      <div className="h-[80px]" />
      <main>
        {/* ================= PAGE HEADING ================= */}
        <section className="bg-[#F8F8F8] py-8 text-center">
          <h1 className="font-['Faustina'] text-[30px] font-medium uppercase text-black">
            Contact Us
          </h1>

          {/* Breadcrumb */}
{/* Breadcrumb */}
<div className="mt-2 font-['Inter'] text-[15px] font-medium">
  <Link
    to="/"
    className="text-black transition-colors duration-200 hover:text-[#145DA0]"
  >
    HOME
  </Link>

  <span className="mx-1 text-black">/</span>

  <span className="text-[#145DA0]">
    CONTACT
  </span>
</div>
        </section>

        {/* ================= CONTACT BANNER ================= */}
        <Banner />

        {/* ================= SEND MESSAGE + CONTACT INFO ================= */}
        <section className="w-full bg-white px-6 py-[70px] lg:px-12 xl:px-0">
          <div
            className="
              mx-auto
              grid
              w-full
              max-w-[1320px]
              grid-cols-1
              items-stretch
              gap-[56px]
              lg:grid-cols-[1.35fr_1fr]
            "
          >
            {/* Send Message */}
            <div className="h-full">
              <SendMessage />
            </div>

            {/* Contact Information */}
            <div className="h-full">
              <ContactInfo />
            </div>
          </div>
        </section>
         <section className="w-full px-6 pb-[70px] lg:px-12 xl:px-0">
          <div className="mx-auto h-[450px] w-full max-w-[1320px] overflow-hidden rounded-[28px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28132.98470544973!2d76.77799701690671!3d28.188376031373085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d49dba861c627%3A0x96444393a5c5a11b!2sTitan%20World%20-%20Bhiwadi!5e0!3m2!1sen!2sin!4v1787307020874!5m2!1sen!2sin"
              title="Sri Adi Ananta - Titan World Bhiwadi"
              className="h-full w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </section>

        {/* ================= FAQ SECTION ================= */}
        <FAQ />

        {/* ================= STORE LOCATION MAP ================= */}
       
      </main>

      <Footer />
    </div>
  );
};

export default Contact;