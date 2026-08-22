import Navbar from "../Components/layout/navbar";
import Footer from "../Components/layout/footer";
import BannerSection from "../Components/about/bannerSection";
import Gallery from "../Components/about/gallery";
const About = () => {
  return (
    <>
      <Navbar />

      <main>
        {/* Page Heading */}
        <section className="bg-[#F8F8F8] py-8 text-center">
          <h1 className="font-['Faustina'] text-[30px] font-medium uppercase text-[#000000]">
            About Us
          </h1>

          {/* Breadcrumb */}
          <div className="mt-2 font-['Inter'] text-[15px] font-medium">
            <span className="text-[#000000]">HOME</span>

            <span className="mx-1 text-[#000000]">/</span>

            <span className="text-[#145da0]">
              ABOUT US
            </span>
          </div>
        </section>
        <BannerSection />

        <Gallery />
      </main>

      <Footer />
    </>
  );
};

export default About;