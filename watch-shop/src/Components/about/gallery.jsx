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
  return (
    <section className="w-full bg-white">
      
      {/* ================= VISIT OUR STORE HEADING ================= */}
      <div className="mx-auto w-full max-w-[1440px] border-t border-black/40 py-[42px]">
        <h2 className="text-center font-['Faustina'] text-[40px] font-semibold  uppercase tracking-[0.12em] text-black">
          Visit Our Store
        </h2>
      </div>

      {/* ================= OUTER GALLERY AREA ================= */}
      {/* ================= OUTER GALLERY AREA ================= */}
<div className="w-full bg-[#145DA0]/[0.07] py-[96px]">
        
        {/* ================= INNER FRAME ================= */}
        <div className="mx-auto w-[1213px] max-w-[90%]">
          
          {/* ================= ROW 1 ================= */}
          <div className="flex gap-[26px]">
            
            {/* g1 */}
            <div className="h-[460px] w-[562px] overflow-hidden">
              <img
                src={g1}
                alt="Sri Adi Ananta Store"
                className="h-full w-full object-cover"
              />
            </div>

            {/* g2 */}
            <div className="h-[460px] w-[625px] overflow-hidden">
              <img
                src={g2}
                alt="Sri Adi Ananta Store"
                className="h-full w-full object-cover"
              />
            </div>

          </div>


          {/* ================= GAP ================= */}
          <div className="h-[24px]" />


          {/* ================= ROW 2 ================= */}
          <div className="flex gap-[24px]">

            {/* LEFT LARGE IMAGE g3 */}
            <div className="h-[590px] w-[415px] overflow-hidden">
              <img
                src={g3}
                alt="Sri Adi Ananta Watch Store"
                className="h-full w-full object-cover"
              />
            </div>


            {/* RIGHT GRID */}
            <div className="flex flex-col gap-[24px]">

              {/* g4 + g5 */}
              <div className="flex gap-[24px]">
                
                <div className="h-[250px] w-[375px] overflow-hidden">
                  <img
                    src={g4}
                    alt="Watch Collection"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="h-[250px] w-[374px] overflow-hidden">
                  <img
                    src={g5}
                    alt="Watch Collection"
                    className="h-full w-full object-cover"
                  />
                </div>

              </div>


              {/* g6 + g7 */}
              <div className="flex gap-[24px]">
                
                <div className="h-[249px] w-[373px] overflow-hidden">
                  <img
                    src={g6}
                    alt="Watch Store"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="h-[249px] w-[373px] overflow-hidden">
                  <img
                    src={g7}
                    alt="Watch Store"
                    className="h-full w-full object-cover"
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
            <div className="h-[192px] w-[128px] overflow-hidden">
              <img
                src={g8}
                alt="Store Interior"
                className="h-full w-full object-cover"
              />
            </div>

            {/* g9 */}
            <div className="h-[192px] w-[129px] overflow-hidden">
              <img
                src={g9}
                alt="Store Interior"
                className="h-full w-full object-cover"
              />
            </div>

            {/* g10 */}
            <div className="h-[192px] w-[132px] overflow-hidden">
              <img
                src={g10}
                alt="Store Interior"
                className="h-full w-full object-cover"
              />
            </div>


            {/* Right side */}
            <div className="ml-auto flex flex-col gap-[24px]">
              
           <div className="-mt-[58px] flex gap-[12px]">
  {/* g11 */}
  <img
    src={g11}
    alt="Store"
    className="h-[249px] w-[374px] object-cover"
  />

  {/* g12 */}
  <img
    src={g12}
    alt="Store"
    className="h-[249px] w-[373px] object-cover"
  />
</div>

            </div>

          </div>

        </div>
      </div>


      {/* ================= LOCATION TEXT ================= */}
      <div className="mx-auto w-full max-w-[1440px] py-[45px] text-center">
        
        <p className="font-['Inter'] text-[18px] font-light uppercase tracking-[0.15em] text-black">
          Where To Find Us
        </p>

        <h3 className="mt-4 font-['Faustina'] text-[25px] font-semibold uppercase tracking-[0.1em] text-black">
          Locate Sri Adi Ananta Store
        </h3>

        <p className="mt-4 font-['Inter'] text-[30px] font-light leading-[1.8] text-black">
          Alwar Bypass Rd, opposite KFC, nearby Genesis Mall,
          Bhiwadi, Rajasthan 301019
          <br/>
          Contact: +91 7296933687
        </p>

      </div>

    </section>
  );
};

export default Gallery;