const BrandCard = ({ image, logo, name }) => {
  return (
    <div className="flex w-[260px] shrink-0 flex-col items-center sm:w-[280px] md:w-[300px] lg:w-[285px] xl:w-[300px]">

      {/* Brand Image */}
      <div className="h-[350px] w-full overflow-hidden rounded-[90px] sm:h-[380px] md:h-[400px] lg:h-[365px] xl:h-[380px]">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Brand Logo */}
      <div className="mt-4 flex h-[55px] w-full items-center justify-center">
        <img
          src={logo}
          alt={name}
          className="max-h-[45px] max-w-[180px] object-contain"
        />
      </div>

    </div>
  );
};

export default BrandCard;