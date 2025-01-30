import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-main-hero-image bg-cover bg-center font-poppins">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-5"></div>

      {/* Content */}
      <div className="flex items-center justify-center h-[316px] relative z-10">
        <div className="flex flex-col justify-center items-center text-center px-4 md:px-0">
          {/* Title */}
          <p className="text-[48px] font-bold leading-[72px] mb-1">Shop</p>

          {/* Breadcrumb Navigation */}
          <p className="text-[16px] leading-[24px] flex items-center justify-center gap-1">
            <span
              onClick={() => navigate("/")}
              className="font-medium cursor-pointer hover:text-bg-primary duration-300"
              aria-label="Navigate to home page"
            >
              Home
            </span>
            <MdOutlineArrowForwardIos className="inline-block" />
            <span className="font-light" aria-label="Shop page">
              Shop
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
