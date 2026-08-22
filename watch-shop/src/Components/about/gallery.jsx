import { useEffect, useState } from "react";

import g1 from "../../assets/images/about_us/store_images/g1.png";
import g2 from "../../assets/images/about_us/store_images/g2.png";
import g3 from "../../assets/images/about_us/store_images/g3.png";
import g4 from "../../assets/images/about_us/store_images/g4.png";
import g5 from "../../assets/images/about_us/store_images/g5.png";
import g6 from "../../assets/images/about_us/store_images/g6.png";
import g7 from "../../assets/images/about_us/store_images/g7.png";
import g8 from "../../assets/images/about_us/store_images/g8.png";
import g9 from "../../assets/images/about_us/store_images/g9.png";
import g10 from "../../assets/images/about_us/store_images/g10.png";
import g11 from "../../assets/images/about_us/store_images/g11.png";
import g12 from "../../assets/images/about_us/store_images/g12.png";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    g1,
    g2,
    g3,
    g4,
    g5,
    g6,
    g7,
    g8,
    g9,
    g10,
    g11,
    g12,
  ];

  const openImage = (index) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setSelectedImage((current) =>
      current === galleryImages.length - 1 ? 0 : current + 1
    );
  };

  const previousImage = () => {
    setSelectedImage((current) =>
      current === 0 ? galleryImages.length - 1 : current - 1
    );
  };

  /* ================= KEYBOARD + SCROLL CONTROLS ================= */
  useEffect(() => {
    if (selectedImage === null) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeImage();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  const handleWheel = (event) => {
    if (selectedImage === null) return;

    if (event.deltaY > 0) {
      nextImage();
    } else if (event.deltaY < 0) {
      previousImage();
    }
  };

  return (
    <section className="w-full bg-white">

      {/* ================= VISIT OUR STORE HEADING ================= */}
      <div className="mx-auto w-full max-w-[1440px] border-t border-black/40 py-[28px] sm:py-[34px] lg:py-[42px]">
        <h2 className="text-center font-['Faustina'] text-[24px] font-semibold uppercase tracking-[0.1em] text-black sm:text-[32px] lg:text-[40px] lg:tracking-[0.12em]">
          Visit Our Store
        </h2>
      </div>


      {/* =====================================================
          MOBILE + TABLET GALLERY
      ===================================================== */}
      <div className="w-full bg-[#145DA0]/[0.07] px-4 py-8 sm:px-8 sm:py-12 lg:hidden">

        <div className="mx-auto grid w-full max-w-[700px] grid-cols-2 gap-3 sm:gap-5">

          {/* g1 */}
          <div
            className="col-span-1 aspect-[562/460] cursor-pointer overflow-hidden"
            onClick={() => openImage(0)}
          >
            <img
              src={g1}
              alt="Sri Adi Ananta Store"
              className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-95"
            />
          </div>

          {/* g2 */}
          <div
            className="col-span-1 aspect-[625/460] cursor-pointer overflow-hidden"
            onClick={() => openImage(1)}
          >
            <img
              src={g2}
              alt="Sri Adi Ananta Store"
              className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-95"
            />
          </div>

          {/* g3 */}
          <div
            className="row-span-2 aspect-[415/590] cursor-pointer overflow-hidden"
            onClick={() => openImage(2)}
          >
            <img
              src={g3}
              alt="Sri Adi Ananta Watch Store"
              className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-95"
            />
          </div>

          {/* g4 */}
          <div
            className="cursor-pointer aspect-[375/250] overflow-hidden"
            onClick={() => openImage(3)}
          >
            <img
              src={g4}
              alt="Watch Collection"
              className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-95"
            />
          </div>

          {/* g5 */}
          <div
            className="cursor-pointer aspect-[374/250] overflow-hidden"
            onClick={() => openImage(4)}
          >
            <img
              src={g5}
              alt="Watch Collection"
              className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-95"
            />
          </div>

          {/* g6 */}
          <div
            className="cursor-pointer aspect-[373/249] overflow-hidden"
            onClick={() => openImage(5)}
          >
            <img
              src={g6}
              alt="Watch Store"
              className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-95"
            />
          </div>

          {/* g7 */}
          <div
            className="cursor-pointer aspect-[373/249] overflow-hidden"
            onClick={() => openImage(6)}
          >
            <img
              src={g7}
              alt="Watch Store"
              className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-95"
            />
          </div>

          {/* g8 */}
          <div
            className="cursor-pointer aspect-[128/192] overflow-hidden"
            onClick={() => openImage(7)}
          >
            <img
              src={g8}
              alt="Store Interior"
              className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-95"
            />
          </div>

          {/* g9 */}
          <div
            className="cursor-pointer aspect-[129/192] overflow-hidden"
            onClick={() => openImage(8)}
          >
            <img
              src={g9}
              alt="Store Interior"
              className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-95"
            />
          </div>

          {/* g10 */}
          <div
            className="cursor-pointer aspect-[132/192] overflow-hidden"
            onClick={() => openImage(9)}
          >
            <img
              src={g10}
              alt="Store Interior"
              className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-95"
            />
          </div>

          {/* g11 */}
          <div
            className="cursor-pointer aspect-[374/249] overflow-hidden"
            onClick={() => openImage(10)}
          >
            <img
              src={g11}
              alt="Store"
              className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-95"
            />
          </div>

          {/* g12 */}
          <div
            className="col-span-2 cursor-pointer aspect-[373/249] overflow-hidden"
            onClick={() => openImage(11)}
          >
            <img
              src={g12}
              alt="Store"
              className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-95"
            />
          </div>

        </div>
      </div>


      {/* =====================================================
          DESKTOP GALLERY — EXACTLY YOUR CURRENT LAYOUT
      ===================================================== */}
      <div className="hidden w-full bg-[#145DA0]/[0.07] py-[96px] lg:block">

        {/* ================= INNER FRAME ================= */}
        <div className="mx-auto w-[1213px] max-w-[90%]">

          {/* ================= ROW 1 ================= */}
          <div className="flex gap-[26px]">

            {/* g1 */}
            <div
              className="h-[460px] w-[562px] cursor-pointer overflow-hidden"
              onClick={() => openImage(0)}
            >
              <img
                src={g1}
                alt="Sri Adi Ananta Store"
                className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-95"
              />
            </div>

            {/* g2 */}
            <div
              className="h-[460px] w-[625px] cursor-pointer overflow-hidden"
              onClick={() => openImage(1)}
            >
              <img
                src={g2}
                alt="Sri Adi Ananta Store"
                className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-95"
              />
            </div>

          </div>


          {/* ================= GAP ================= */}
          <div className="h-[24px]" />


          {/* ================= ROW 2 ================= */}
          <div className="flex gap-[24px]">

            {/* LEFT LARGE IMAGE g3 */}
            <div
              className="h-[590px] w-[415px] cursor-pointer overflow-hidden"
              onClick={() => openImage(2)}
            >
              <img
                src={g3}
                alt="Sri Adi Ananta Watch Store"
                className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-95"
              />
            </div>


            {/* RIGHT GRID */}
            <div className="flex flex-col gap-[24px]">

              {/* g4 + g5 */}
              <div className="flex gap-[24px]">

                <div
                  className="h-[250px] w-[375px] cursor-pointer overflow-hidden"
                  onClick={() => openImage(3)}
                >
                  <img
                    src={g4}
                    alt="Watch Collection"
                    className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-95"
                  />
                </div>

                <div
                  className="h-[250px] w-[374px] cursor-pointer overflow-hidden"
                  onClick={() => openImage(4)}
                >
                  <img
                    src={g5}
                    alt="Watch Collection"
                    className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-95"
                  />
                </div>

              </div>


              {/* g6 + g7 */}
              <div className="flex gap-[24px]">

                <div
                  className="h-[249px] w-[373px] cursor-pointer overflow-hidden"
                  onClick={() => openImage(5)}
                >
                  <img
                    src={g6}
                    alt="Watch Store"
                    className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-95"
                  />
                </div>

                <div
                  className="h-[249px] w-[373px] cursor-pointer overflow-hidden"
                  onClick={() => openImage(6)}
                >
                  <img
                    src={g7}
                    alt="Watch Store"
                    className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-95"
                  />
                </div>

              </div>

            </div>

          </div>


          {/* ================= GAP ================= */}
          <div className="h-[24px]" />


          {/* ================= BOTTOM SECTION ================= */}
          <div className="flex gap-[24px]">

            {/* g8 */}
            <div
              className="h-[192px] w-[128px] cursor-pointer overflow-hidden"
              onClick={() => openImage(7)}
            >
              <img
                src={g8}
                alt="Store Interior"
                className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-95"
              />
            </div>

            {/* g9 */}
            <div
              className="h-[192px] w-[129px] cursor-pointer overflow-hidden"
              onClick={() => openImage(8)}
            >
              <img
                src={g9}
                alt="Store Interior"
                className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-95"
              />
            </div>

            {/* g10 */}
            <div
              className="h-[192px] w-[132px] cursor-pointer overflow-hidden"
              onClick={() => openImage(9)}
            >
              <img
                src={g10}
                alt="Store Interior"
                className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-95"
              />
            </div>


            {/* Right side */}
            <div className="ml-auto flex flex-col gap-[24px]">

              <div className="-mt-[58px] flex gap-[12px]">

                {/* g11 */}
                <img
                  src={g11}
                  alt="Store"
                  onClick={() => openImage(10)}
                  className="h-[249px] w-[374px] cursor-pointer object-cover transition-transform duration-300 ease-in-out hover:scale-95"
                />

                {/* g12 */}
                <div
                  className="col-span-2 aspect-[373/249] cursor-pointer overflow-hidden sm:hidden lg:block"
                  onClick={() => openImage(11)}
                >
                  <img
                    src={g12}
                    alt="Store"
                    className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-95"
                  />
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>


      {/* ================= LOCATION TEXT ================= */}
      <div className="mx-auto w-full max-w-[1440px] px-5 py-[32px] text-center sm:px-10 sm:py-[40px] lg:px-0 lg:py-[45px]">

        <p className="font-['Inter'] text-[11px] font-light uppercase tracking-[0.12em] text-black sm:text-[15px] lg:text-[18px] lg:tracking-[0.15em]">
          Where To Find Us
        </p>

        <h3 className="mt-3 font-['Faustina'] text-[19px] font-semibold uppercase tracking-[0.07em] text-black sm:mt-4 sm:text-[22px] lg:text-[25px] lg:tracking-[0.1em]">
          Locate Sri Adi Ananta Store
        </h3>

        <p className="mx-auto mt-4 max-w-[900px] font-['Inter'] text-[14px] font-light leading-[1.7] text-black sm:text-[20px] lg:text-[30px] lg:leading-[1.8]">
          Alwar Bypass Rd, opposite KFC, nearby Genesis Mall,
          Bhiwadi, Rajasthan 301019
          <br />
          Contact: +91 7296933687
        </p>

      </div>


      {/* ================= IMAGE VIEWER ================= */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 sm:p-8"
          onClick={closeImage}
          onWheel={handleWheel}
        >

          {/* Close Button */}
          <button
            type="button"
            onClick={closeImage}
            className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-white/20"
            aria-label="Close image"
          >
            ×
          </button>


          {/* Previous Button */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              previousImage();
            }}
            className="absolute left-3 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-white/20 sm:left-6"
            aria-label="Previous image"
          >
            ‹
          </button>


          {/* Selected Image */}
          <img
            src={galleryImages[selectedImage]}
            alt={`Sri Adi Ananta Store ${selectedImage + 1}`}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(event) => event.stopPropagation()}
          />


          {/* Next Button */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              nextImage();
            }}
            className="absolute right-3 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-white/20 sm:right-6"
            aria-label="Next image"
          >
            ›
          </button>


          {/* Image Counter */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm text-white">
            {selectedImage + 1} / {galleryImages.length}
          </div>

        </div>
      )}

    </section>
  );
};

export default Gallery;