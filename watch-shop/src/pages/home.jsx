import Navbar from "../Components/layout/navbar";
import Footer from "../Components/layout/footer";
import HeroBanner from "../Components/home/hero_banner";
import Banner2 from "../Components/home/banner2";
import Review from "../Components/home/review";
import Brands from "../Components/home/brands";
import Categories from "../Components/home/category";

const Home = () => {
  return (
    <>
      <Navbar />

      <main>
          <HeroBanner />
          <Brands />
          <Banner2 />
           <Categories />
          <Review />
         
        {/* Home page content goes here */}
      </main>

      <Footer />
    </>
  );
};

export default Home;