import Navbar from "../Components/layout/navbar";
import Footer from "../Components/layout/footer";

const privacyData = [
  {
    title: "1. Information We Collect",
    paragraphs: [
      `You may browse the website without creating an account. We do not intentionally collect payment or banking information through the website because purchases are not processed on the website.`,
      `If you voluntarily contact us through a contact form, email, telephone, WhatsApp or another available communication method, we may receive information such as your name, phone number, email address and the contents of your enquiry.`,
      `Like most websites, basic technical information such as browser type, device information, IP address, website usage information and server logs may be processed by the website's hosting, security, analytics or technology providers where applicable.`,
    ],
  },
  {
    title: "2. How We Use Information",
    paragraphs: [
      `Information voluntarily provided by you may be used to:`,
    ],
    list: [
      "Respond to your enquiry or message.",
      "Communicate with you regarding your request.",
      "Provide information about products, stores or services you have asked about.",
      "Improve the website, its content and user experience.",
      "Address customer queries, feedback or complaints.",
      "Maintain website security and prevent misuse.",
    ],
    afterList: `We do not use information collected through this website to process product orders or payments, as such transactions are not currently conducted through the website.`,
  },
  {
    title: "3. Cookies, Analytics and Website Technologies",
    paragraphs: [
      `The website may use cookies or similar technologies to support website functionality, security, analytics and understanding of general website usage. Where analytics or other third-party technologies are used, the relevant provider may process information in accordance with its own privacy terms.`,
      `You may be able to manage or disable certain cookies through your browser settings. Disabling some cookies may affect website functionality.`,
    ],
  },
  {
    title: "4. External Links and Third-Party Websites",
    paragraphs: [
      `The website may contain links to external websites, including official brand websites. Sri Adi Ananta does not control the privacy practices, content, security or policies of external websites.`,
      `When you visit an external website, any personal information you provide there will be governed by the privacy policy and terms of that external website.`,
    ],
  },
  {
    title: "5. Purchases on External Websites",
    paragraphs: [
      `Sri Adi Ananta does not currently process purchases through this website. If you choose to purchase a product after being redirected to an external brand or seller website, Sri Adi Ananta does not collect or process your payment, card, banking or order information through this website.`,
      `Any information you provide on the external website is handled according to that website's applicable privacy policy and terms.`,
    ],
  },
  {
    title: "6. Data Security",
    paragraphs: [
      `We take reasonable measures to protect information voluntarily shared with us and to maintain the security of our website. However, no method of electronic transmission or storage can be guaranteed to be completely secure.`,
    ],
  },
  {
    title: "7. Data Retention",
    paragraphs: [
      `Personal information received through enquiries may be retained for as long as reasonably necessary to respond to the enquiry, provide related customer support, maintain appropriate business records, comply with applicable legal requirements, or resolve disputes.`,
    ],
  },
  {
    title: "8. Your Privacy Requests",
    paragraphs: [
      `If you have questions about personal information that you have voluntarily provided to Sri Adi Ananta, or wish to request correction or deletion where applicable, you may contact us using the official contact details published on the website.`,
    ],
  },
  {
    title: "9. Children's Privacy",
    paragraphs: [
      `This website is not specifically directed at children. We do not knowingly seek to collect personal information from children through the website.`,
    ],
  },
  {
    title: "10. Changes to This Privacy Policy",
    paragraphs: [
      `We may update this Privacy Policy from time to time. Any changes will be posted on this page together with an updated revision date. Users are encouraged to review this Privacy Policy periodically.`,
    ],
  },
  {
    title: "11. Contact Us",
    paragraphs: [
      `If you have any questions or concerns regarding this Privacy Policy or how information is handled on the website, please contact Sri Adi Ananta using the official contact details published on the website.`,
    ],
  },
];

const PrivacyPolicy = () => {
  return (
    <>
      {/* ================================
          RESPONSIVE CSS
      ================================= */}
      <style>{`
        .privacy-page {
          width: 100%;
          background: #fff;
          color: #17191d;
        }

        .privacy-navbar-space {
          height: 80px;
        }

        .privacy-header {
          width: 100%;
          max-width: 1340px;
          margin: 0 auto;
          padding: 55px 48px 25px;
          text-align: center;
        }

        .privacy-header h1 {
          margin: 0;
          font-family: "Faustina", inter;
          font-size: 36px;
          font-weight: 700;
          line-height: 1.2;
          text-transform: uppercase;
          color: #000;
        }

        .privacy-header p {
          margin: 20px 0 0;
          font-size: 16px;
          line-height: 1.5;
          color: #17191d;
        }

        .privacy-container {
          width: 100%;
          max-width: 1340px;
          margin: 0 auto;
          padding: 25px 48px 95px;
          font-size: 15px;
          line-height: 1.5;
          letter-spacing: 0.2px;
        }

        .privacy-intro {
          margin: 0 0 22px;
        }

        .privacy-section {
          margin-bottom: 20px;
        }

        .privacy-section h2 {
          margin: 0 0 8px;
          font-family: "Faustina", inter;
          font-size: 18px;
          font-weight: 700;
          line-height: 1.25;
          color: #1768a6;
        }

        .privacy-section p {
          margin: 0 0 12px;
        }

        .privacy-section p:last-child {
          margin-bottom: 0;
        }

        /* BULLET POINTS */
        .privacy-section ul {
          margin: 0 0 12px;
          padding-left: 25px;
          list-style-type: disc;
        }

        .privacy-section li {
          margin-bottom: 5px;
          padding-left: 4px;
        }

        /* TABLET */
        @media (max-width: 1024px) {
          .privacy-header {
            padding: 45px 40px 22px;
          }

          .privacy-header h1 {
            font-size: 32px;
          }

          .privacy-container {
            padding: 22px 40px 80px;
            font-size: 14px;
          }

          .privacy-section h2 {
            font-size: 17px;
          }
        }

        /* MOBILE */
        @media (max-width: 767px) {
          .privacy-navbar-space {
            height: 70px;
          }

          .privacy-header {
            padding: 35px 20px 18px;
          }

          .privacy-header h1 {
            font-size: 25px;
          }

          .privacy-header p {
            margin-top: 14px;
            font-size: 12px;
          }

          .privacy-container {
            padding: 18px 20px 55px;
            font-size: 14px;
            line-height: 1.45;
          }

          .privacy-intro {
            margin-bottom: 18px;
          }

          .privacy-section {
            margin-bottom: 16px;
          }

          .privacy-section h2 {
            margin-bottom: 6px;
            font-size: 15px;
          }

          .privacy-section p {
            margin-bottom: 9px;
          }

          .privacy-section ul {
            padding-left: 22px;
            margin-bottom: 9px;
          }

          .privacy-section li {
            margin-bottom: 4px;
            padding-left: 3px;
          }
        }
      `}</style>

      <Navbar />

      <div className="privacy-navbar-space" />

      <main className="privacy-page">

        {/* PAGE HEADER */}
        <section className="privacy-header">
          <h1>Privacy Policy</h1>

          <p>
            Effective Date: 17 August 2026 | Last Updated: 17 August 2026
          </p>
        </section>

        {/* PRIVACY CONTENT */}
        <section className="privacy-container">

          {/* INTRODUCTION */}
          <p className="privacy-intro">
            Sri Adi Ananta respects your privacy. This Privacy Policy explains
            how information may be handled when you visit or use our website.
            The website is primarily an informational and product-discovery
            website and does not currently process purchases or payments
            directly.
          </p>

          {privacyData.map((section, index) => (
            <section className="privacy-section" key={index}>

              <h2>{section.title}</h2>

              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex}>
                  {paragraph}
                </p>
              ))}

              {/* BULLET LIST */}
              {section.list && (
                <ul>
                  {section.list.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {section.afterList && (
                <p>{section.afterList}</p>
              )}

            </section>
          ))}

        </section>
      </main>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;