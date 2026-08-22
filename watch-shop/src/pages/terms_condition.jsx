import Navbar from "../Components/layout/navbar";
import Footer from "../Components/layout/footer";

const termsData = [
  {
    title: "1. About Our Website",
    paragraphs: [
      `Sri Adi Ananta operates this website to showcase selected watch collections and provide customers with information about products associated with Titan and Fastrack, and to facilitate access to relevant brand or external websites.`,
      `Sri Adi Ananta is an authorised associate of Titan Company Limited for Titan and Fastrack in Bhiwadi under the applicable agreements/authorisations. The website is operated by Sri Adi Ananta LLP and is not intended to represent itself as the corporate website of Titan Company Limited.`,
    ],
  },
  {
    title: "2. Product Information",
    paragraphs: [
      `Product names, images, specifications, designs, prices, offers and availability displayed on this website are provided for general informational purposes. Product information may change from time to time and may vary from information available on the relevant official brand website or at a store.`,
      `Customers should verify the latest product information, pricing, offers, specifications and availability on the relevant official brand website or with the applicable authorised retail outlet before making a purchase.`,
    ],
  },
  {
    title: "3. Brand Names, Trademarks and Intellectual Property",
    paragraphs: [
      `Titan, Fastrack and their respective names, logos, trademarks, product images and other brand assets belong to their respective owners. Sri Adi Ananta does not claim ownership of such intellectual property.`,
      `Any use of brand names, trademarks, logos, images or other intellectual property on this website is intended solely for identification, product information and customer navigation, and is subject to applicable authorisations and contractual permissions.`,
    ],
  },
  {
    title: "4. Relationship with Titan and Other Brands",
    paragraphs: [
      `Sri Adi Ananta is an authorised associate of Titan Company Limited for Titan and Fastrack in Bhiwadi under the applicable agreements/authorisations. Nothing on this website should be interpreted as creating a partnership, agency or corporate ownership relationship beyond the rights and authorisations expressly applicable to Sri Adi Ananta.`,
      `Where Titan, Fastrack or other brand products or links are displayed, the relevant brand remains the owner of its trademarks and intellectual property.`,
    ],
  },
  {
    title: "5. No Online Purchases Through This Website",
    paragraphs: [
      `Sri Adi Ananta does not currently process online purchases or payments through this website. The website does not provide a facility to:`,
    ],
    list: [
      "Sell watches directly through this website.",
      "Process or accept online payments.",
      "Collect card or banking details for purchases.",
      "Accept or confirm purchase orders through the website.",
      "Provide shipping or delivery services through the website.",
      "Process returns, refunds, cancellations or warranty claims through the website.",
    ],
    afterList: `Where a customer chooses to purchase a product after being redirected to an official brand or other external website, that transaction is governed by the terms, policies and conditions of the relevant website or brand.`,
  },
  {
    title: "6. External Website Links",
    paragraphs: [
      `This website may contain links to external websites, including official brand websites. When you follow an external link, you leave the Sri Adi Ananta website and become subject to the terms, privacy policy and other policies applicable to that external website.`,
      `Sri Adi Ananta is not responsible for the content, availability, pricing, products, services, policies, security or activities of external websites.`,
    ],
  },
  {
    title: "7. Accuracy of Information",
    paragraphs: [
      `Sri Adi Ananta makes reasonable efforts to keep website information current and useful. However, we do not guarantee that all information, images, specifications, prices, links or product availability will always be complete, accurate or up to date.`,
    ],
  },
  {
    title: "8. Limitation of Liability",
    paragraphs: [
      `To the extent permitted by applicable law, Sri Adi Ananta shall not be responsible for any loss, damage or issue arising from reliance on information displayed on this website or from the use of external websites linked through this website.`,
      `Any transaction, purchase, payment, delivery, return, refund, warranty or customer-service matter relating to a product purchased through an external website shall be subject to the policies and conditions of the relevant website, brand or seller.`,
    ],
  },
  {
    title: "9. Changes to These Terms",
    paragraphs: [
      `Sri Adi Ananta may update or modify these Terms & Conditions from time to time. Any changes will be posted on this page together with an updated revision date. Users are encouraged to review these Terms periodically.`,
    ],
  },
  {
    title: "10. Governing Law and Jurisdiction",
    paragraphs: [
      `These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Subject to applicable law, disputes arising in connection with these Terms shall be subject to the jurisdiction of the courts having appropriate jurisdiction over Sri Adi Ananta LLP.`,
    ],
  },
  {
    title: "11. Contact Us",
    paragraphs: [
      `For questions regarding these Terms & Conditions or the website, please contact Sri Adi Ananta using the official contact details published on the website.`,
    ],
  },
];

const TermsConditions = () => {
  return (
    <>
      {/* ================================
          RESPONSIVE CSS
      ================================= */}
      <style>{`
        .terms-page {
          width: 100%;
          background: #fff;
          color: #17191d;
        }

        .terms-navbar-space {
          height: 80px;
        }

        .terms-header {
          width: 100%;
          max-width: 1340px;
          margin: 0 auto;
          padding: 55px 48px 25px;
          text-align: center;
        }

        .terms-header h1 {
          margin: 0;
          font-family: "Faustina", inter;
          font-size: 36px;
          font-weight: 700;
          line-height: 1.2;
          text-transform: uppercase;
          color: #000;
        }

        .terms-header p {
          margin: 20px 0 0;
          font-size: 16px;
          line-height: 1.5;
          color: #17191d;
        }

        .terms-container {
          width: 100%;
          max-width: 1340px;
          margin: 0 auto;
          padding: 25px 48px 95px;
          font-size: 15px;
          line-height: 1.5;
          letter-spacing: 0.2px;
        }

        .terms-intro {
          margin: 0 0 22px;
        }

        .terms-section {
          margin-bottom: 20px;
        }

        .terms-section h2 {
          margin: 0 0 8px;
          font-family: "Faustina", inter;
          font-size: 18px;
          font-weight: 700;
          line-height: 1.25;
          color: #1768a6;
        }

        .terms-section p {
          margin: 0 0 12px;
        }

        .terms-section p:last-child {
          margin-bottom: 0;
        }

        /* BULLET POINTS */
        .terms-section ul {
          margin: 0 0 12px;
          padding-left: 25px;
          list-style-type: disc;
        }

        .terms-section li {
          margin-bottom: 5px;
          padding-left: 4px;
        }

        /* TABLET */
        @media (max-width: 1024px) {
          .terms-header {
            padding: 45px 40px 22px;
          }

          .terms-header h1 {
            font-size: 32px;
          }

          .terms-container {
            padding: 22px 40px 80px;
            font-size: 14px;
          }

          .terms-section h2 {
            font-size: 17px;
          }
        }

        /* MOBILE */
        @media (max-width: 767px) {
          .terms-navbar-space {
            height: 70px;
          }

          .terms-header {
            padding: 35px 20px 18px;
          }

          .terms-header h1 {
            font-size: 25px;
          }

          .terms-header p {
            margin-top: 14px;
            font-size: 12px;
          }

          .terms-container {
            padding: 18px 20px 55px;
            font-size: 14px;
            line-height: 1.45;
          }

          .terms-intro {
            margin-bottom: 18px;
          }

          .terms-section {
            margin-bottom: 16px;
          }

          .terms-section h2 {
            margin-bottom: 6px;
            font-size: 15px;
          }

          .terms-section p {
            margin-bottom: 9px;
          }

          .terms-section ul {
            padding-left: 22px;
            margin-bottom: 9px;
          }

          .terms-section li {
            margin-bottom: 4px;
            padding-left: 3px;
          }
        }
      `}</style>

      <Navbar />

      <div className="terms-navbar-space" />

      <main className="terms-page">

        {/* PAGE HEADER */}
        <section className="terms-header">
          <h1>Terms and Conditions</h1>

          <p>
            Effective Date: 17 August 2026 | Last Updated: 17 August 2026
          </p>
        </section>

        {/* TERMS CONTENT */}
        <section className="terms-container">

          <p className="terms-intro">
            Welcome to Sri Adi Ananta. By accessing or using this website, you
            acknowledge that you have read, understood and agree to these Terms
            & Conditions. This website is operated by Sri Adi Ananta LLP for
            informational, product-discovery and customer-engagement purposes.
          </p>

          {termsData.map((section, index) => (
            <section className="terms-section" key={index}>

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

export default TermsConditions;