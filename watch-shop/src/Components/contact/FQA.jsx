import { useState } from "react";

const faqs = [
  {
    number: "Q. ",
    question: "Are the watches sold by Sri Adi Ananta authentic?",
    answer:
      "Yes, we offer genuine watches and aim to provide customers with a trusted shopping experience.",
  },
  {
    number: "Q. ",
    question: "Which watch brands are available at Sri Adi Ananta?",
    answer:
      "We offer selected watch collections from Titan and Fastrack.",
  },
  {
    number: "Q. ",
    question: "Can I purchase watches directly through this website?",
    answer:
      "No. This website is for product discovery and information. Purchases are not processed directly through the website.",
  },
  {
    number: "Q. ",
    question:
      "Where can I find the latest product details, prices, and availability?",
    answer:
      "You can check the relevant official brand website or contact/visit an authorised retail outlet for the latest information.",
  },
  {
    number: "Q. ",
    question: "How can I visit or contact a Sri Adi Ananta store?",
    answer:
      "You can use the contact details provided on our Contact Us page to get in touch or learn more about our store locations.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full px-4 pb-12 pt-4 sm:px-8 sm:pb-16 md:px-10 lg:px-[77px] lg:pb-20">
      
      {/* FAQ Accordion */}
      <div className="mx-auto mt-8 flex w-full max-w-full flex-col gap-3 rounded-[24px] bg-[#145DA0]/[0.07] px-4 py-6 sm:mt-10 sm:gap-4 sm:rounded-[32px] sm:px-8 sm:py-8 md:px-10 lg:mt-14 lg:gap-4 lg:rounded-[40px] lg:px-20 lg:py-10">
        
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-['Faustina'] text-[22px] font-semibold uppercase text-black sm:text-[26px] md:text-[28px] lg:text-[30px]">
            Frequently Asked Questions
          </h2>
        </div>

        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;

          return (
            <div
              key={index}
              className="rounded-[20px] bg-[#ffffff] sm:rounded-[28px] lg:rounded-[40px]"
            >
              
              {/* Question Row */}
              <button
                type="button"
                onClick={() => handleFAQ(index)}
                className="flex w-full items-center gap-3 px-5 py-4 text-left sm:gap-4 sm:px-7 sm:py-5 md:px-8 lg:gap-6 lg:px-10 lg:py-4"
              >
                
                {/* Number */}
                <span className="shrink-0 font-['Inter'] text-[15px] font-medium text-[#000000] sm:text-[17px] md:text-[18px] lg:text-[20px]">
                  {faq.number}
                </span>

                {/* Question */}
                <span className="flex-1 font-['Inter'] text-[15px] font-medium leading-6 text-black sm:text-[17px] sm:leading-7 md:text-[18px] lg:text-[20px] lg:leading-normal">
                  {faq.question}
                </span>

                {/* Arrow */}
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center transition-transform duration-300 sm:h-7 sm:w-7 lg:h-8 lg:w-8 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <span className="h-2.5 w-2.5 rotate-45 border-l-2 border-t-2 border-black sm:h-3 sm:w-3" />
                </span>

              </button>

              {/* Answer */}
              {isOpen && (
                <div className="px-5 pb-5 pl-12 sm:px-7 sm:pb-6 sm:pl-[70px] md:px-8 md:pl-[76px] lg:px-8 lg:pb-7 lg:pl-[82px]">
                  <p className="max-w-[1400px] font-['Inter'] text-[14px] leading-6 text-black/70 sm:text-[16px] sm:leading-7 md:text-[17px] lg:text-[20px] lg:leading-7">
                    {faq.answer}
                  </p>
                </div>
              )}

            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;