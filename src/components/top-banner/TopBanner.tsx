import { Link } from "react-router-dom";

interface TopBannerProps {
  currentPage: string;
  backgroundImage?: string; // Optional custom background image
}

function LoftStyleTopBanner({
  currentPage,
  backgroundImage = "/images/top_banner.png", // Default background image
}: TopBannerProps) {
  return (
    <div className="relative h-80 md:h-96 lg:h-[500px] w-full overflow-hidden bg-gray-800">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      ></div>

      {/* Gradient Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide mb-4 uppercase">
          {currentPage}
        </h1>

        {/* Breadcrumb Navigation */}
        <nav aria-label="breadcrumb">
          <ol className="flex items-center space-x-2 text-sm md:text-base">
            <li>
              <Link
                to="/"
                className="text-gray-300 hover:text-bg-primary transition duration-300"
              >
                Home
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li aria-current="page" className="text-bg-primary">
              {currentPage}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}

export default LoftStyleTopBanner;
