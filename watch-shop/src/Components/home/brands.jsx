import { useEffect, useRef, useState } from "react";
import BrandCard from "./brands_cards";

// ===============================
// BRAND IMAGES
// ===============================
import ragaImage from "../../assets/images/home_page/girl_raga.png";
import tommyImage from "../../assets/images/home_page/boy_tommyhilfiger.png";
import fastrackImage from "../../assets/images/home_page/boy_fastrack.png";
import titanImage from "../../assets/images/home_page/girl_titan.png";
import xylysImage from "../../assets/images/home_page/girl_xylys.png";
import sonataImage from "../../assets/images/home_page/boy_sonata.png";
import nebulaImage from "../../assets/images/home_page/boy_nebula.png";
import policeImage from "../../assets/images/home_page/boy_police.png";
import edgeImage from "../../assets/images/home_page/girl_edge.png";
import kennethImage from "../../assets/images/home_page/boy_kenneth.png";

// ===============================
// BRAND LOGOS
// ===============================
import ragaLogo from "../../assets/images/home_page/Raga_Titan_Logo.png";
import tommyLogo from "../../assets/images/home_page/tommy_hilfiger_logo.png";
import fastrackLogo from "../../assets/images/home_page/fastrack_logo.png";
import titanLogo from "../../assets/images/home_page/titan_logo.png";
import xylysLogo from "../../assets/images/home_page/xylys_logo.png";
import sonataLogo from "../../assets/images/home_page/sonata_logo.png";
import nebulaLogo from "../../assets/images/home_page/nebula_logo.png";
import policeLogo from "../../assets/images/home_page/Police_logo.png";
import kennethLogo from "../../assets/images/home_page/kenneth_cole_logo.png";
import edgeLogo from "../../assets/images/home_page/edge_logo.png";

const Brands = () => {

  // ===============================
  // BRAND DATA
  // ===============================
  const brands = [
    {
      name: "RAGA",
      image: ragaImage,
      logo: ragaLogo,
    },
    {
      name: "TOMMY HILFIGER",
      image: tommyImage,
      logo: tommyLogo,
    },
    {
      name: "FASTRACK",
      image: fastrackImage,
      logo: fastrackLogo,
    },
    {
      name: "TITAN",
      image: titanImage,
      logo: titanLogo,
    },
    {
      name: "SONATA",
      image: sonataImage,
      logo: sonataLogo,
    },
    {
      name: "NEBULA",
      image: nebulaImage,
      logo: nebulaLogo,
    },
    {
      name: "XYLYS",
      image: xylysImage,
      logo: xylysLogo,
    },
    {
      name: "POLICE",
      image: policeImage,
      logo: policeLogo,
    },
    {
      name: "KENNETH COLE",
      image: kennethImage,
      logo: kennethLogo,
    },
    {
      name: "EDGE",
      image: edgeImage,
      logo: edgeLogo,
    },
  ];

  // ===============================
  // INFINITE BRAND DATA
  // ===============================
  const infiniteBrands = [
    ...brands,
    ...brands,
    ...brands,
  ];

  // ===============================
  // SLIDER
  // ===============================
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(2);

  // ===============================
  // INFINITE AUTO SCROLL + MANUAL SCROLL
  // ===============================
  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    let animationFrame;
    let isPaused = false;
    let resumeTimeout;

    const speed = 0.5;

    const animate = () => {
      if (!isPaused) {
        slider.scrollLeft += speed;

        // Width of one complete set of brands
        const oneSetWidth = slider.scrollWidth / 3;

        // Infinite loop
        if (slider.scrollLeft >= oneSetWidth) {
          slider.scrollLeft -= oneSetWidth;
        }

        // If user somehow scrolls before the first set,
        // move them back into the middle set.
        if (slider.scrollLeft <= 0) {
          slider.scrollLeft += oneSetWidth;
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    // ===============================
    // PAUSE AUTO SCROLL
    // ===============================
    const pauseScroll = () => {
      isPaused = true;

      clearTimeout(resumeTimeout);

      // Resume automatically after user stops scrolling
      resumeTimeout = setTimeout(() => {
        isPaused = false;
      }, 1500);
    };

    // ===============================
    // MOUSE EVENTS
    // ===============================
    slider.addEventListener("mouseenter", () => {
      isPaused = true;
    });

    slider.addEventListener("mouseleave", () => {
      isPaused = false;
    });

    // ===============================
    // TOUCH EVENTS
    // ===============================
    slider.addEventListener("touchstart", pauseScroll, {
      passive: true,
    });

    slider.addEventListener("touchmove", pauseScroll, {
      passive: true,
    });

    slider.addEventListener("touchend", () => {
      clearTimeout(resumeTimeout);

      resumeTimeout = setTimeout(() => {
        isPaused = false;
      }, 1500);
    });

    // ===============================
    // MOUSE WHEEL
    // ===============================
    slider.addEventListener(
      "wheel",
      () => {
        pauseScroll();
      },
      { passive: true }
    );

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);

      clearTimeout(resumeTimeout);

      slider.removeEventListener("touchstart", pauseScroll);
      slider.removeEventListener("touchmove", pauseScroll);
    };
  }, []);

  // ===============================
  // UPDATE ACTIVE DOT
  // ===============================
  const handleScroll = () => {

    const slider = sliderRef.current;

    if (!slider) return;

    const scrollLeft = slider.scrollLeft;

    const cardWidth =
      slider.firstElementChild?.offsetWidth || 300;

    const gap = 28;

    const index = Math.round(
      scrollLeft / (cardWidth + gap)
    );

    // Only 5 pagination dots
    setActiveIndex(index % 5);
  };

  // ===============================
  // SCROLL TO CARD
  // ===============================
  const scrollToCard = (index) => {

    const slider = sliderRef.current;

    if (!slider) return;

    // Each dot represents 2 brands
    const cardIndex = index * 2;

    const card = slider.children[cardIndex];

    if (!card) return;

    slider.scrollTo({
      left: card.offsetLeft,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  // ===============================
  // SCROLL EVENT
  // ===============================
  useEffect(() => {

    const slider = sliderRef.current;

    if (!slider) return;

    slider.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      slider.removeEventListener("scroll", handleScroll);
    };

  }, []);

  return (
    <section className="w-full bg-white py-12 sm:py-14 md:py-16 lg:py-20">

      {/* ===============================
          SECTION HEADING
      =============================== */}
      <div className="mb-10 text-center sm:mb-12 md:mb-14">

        <h2 className="font-Faustina text-[32px] font-bold uppercase leading-tight text-black sm:text-[38px] md:text-[44px] lg:text-[48px]">
          OUR BRAND
        </h2>

      </div>

      {/* ===============================
          BRAND SLIDER
      =============================== */}
      <div
        ref={sliderRef}
        onScroll={handleScroll}
        className="
          mx-auto
          flex
          w-full
          max-w-[1300px]
          gap-7
          overflow-x-auto
          px-8
          pb-2

          sm:px-10
          md:px-8
          lg:px-0

          [&::-webkit-scrollbar]:hidden
          [-ms-overflow-style:none]
          [scrollbar-width:none]
        "
      >

        {infiniteBrands.map((brand, index) => (
          <div
            key={`${brand.name}-${index}`}
            className="snap-center"
          >
            <BrandCard
              image={brand.image}
              logo={brand.logo}
              name={brand.name}
            />
          </div>
        ))}

      </div>

      {/* ===============================
          PAGINATION DOTS
      =============================== */}
      <div className="mt-7 flex items-center justify-center gap-2">

        {[0, 1, 2, 3, 4].map((index) => (

          <button
            key={index}
            type="button"
            aria-label={`Go to brand group ${index + 1}`}
            onClick={() => scrollToCard(index)}
            className={`
              h-[12px]
              rounded-full
              transition-all
              duration-300

              ${
                activeIndex === index
                  ? "w-[46px] bg-black"
                  : "w-[12px] bg-[#D9D9D9]"
              }
            `}
          />

        ))}

      </div>

    </section>
  );
};

export default Brands;