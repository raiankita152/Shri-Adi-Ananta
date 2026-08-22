import { Link } from "react-router-dom";
import Navbar from "../Components/layout/navbar";
import Footer from "../Components/layout/footer";
import BannerSection from "../Components/about/bannerSection";
import Gallery from "../Components/about/gallery";
const About = () => {
  return (
    <>
      <Navbar />

      {/* Space for fixed navbar */}
      <div className="h-[112px]" />
      <main>
        {/* Page Heading */}
        <section className="bg-[#F8F8F8] py-8 text-center">
          <h1 className="font-['Faustina'] text-[30px] font-medium uppercase text-[#000000]">
            About Us
          </h1>

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
    ABOUT
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