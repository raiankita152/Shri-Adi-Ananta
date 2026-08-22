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
    question: "Where can I find the latest product details, prices, and availability?",
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
    <section className="w-full px-[77px] pb-20 pt-4">
      
      {/* Heading */}
      

      {/* FAQ Accordion */}
      <div className="mx-auto mt-14 flex w-full max-w-full flex-col gap-4 bg-[#145DA0]/[0.07] rounded-[40px] px-8 py-10 sm:px-12 lg:px-20">
        
        <div className="text-center">
        <h2 className="font-['Faustina'] text-[30px] font-semibold uppercase text-black ">
          Frequently Asked Questions
        </h2>
      </div>
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;

          return (
            <div
              key={faq.number}
              className="bg-[#ffffff] rounded-[40px]"
            >
              
              {/* Question Row */}
              <button
                type="button"
                onClick={() => handleFAQ(index)}
                className="flex w-full items-center gap-6 px-10 py-4 text-left"
              >
                
                {/* Number */}
                <span className="font-['Inter'] text-[20px] font-medium text-[#000000]">
                  {faq.number}
                </span>

                {/* Question */}
                <span className="flex-1 font-['Inter'] text-[20px] font-medium text-black">
                  {faq.question}
                </span>

                {/* Arrow */}
<span
  className={`flex h-8 w-8 shrink-0 items-center justify-center transition-transform duration-300 ${
    isOpen ? "rotate-180" : ""
  }`}
>
  <span className="h-3 w-3 rotate-45 border-l-2 border-t-2 border-black" />
</span>

              </button>

              {/* Answer */}
              {isOpen && (
                <div className="px-8 pb-7 pl-[82px]">
                  <p className="max-w-[1400px] font-['Inter'] text-[20px] leading-7 text-black/70">
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