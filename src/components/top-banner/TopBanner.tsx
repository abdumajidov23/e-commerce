import { Link } from "react-router-dom";

interface TopBannerProps {
  currentPage: string;
}

function TopBanner({ currentPage }: TopBannerProps) {
  return (
      <div className="relative h-72">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/top_banner.png')",
            filter: "blur(3px)",
            zIndex: 1, 
          }}
        ></div>

        <div className="relative text-center flex flex-col justify-center items-center h-full">
          <h1 className="text-black font-bold text-5xl mb-3 z-10">{currentPage}</h1>
          <nav aria-label="breadcrumb" className="z-10">
            <ol className="breadcrumb text-black flex justify-center space-x-3">
              <li className="breadcrumb-item">
                <Link to={"/"}>
                  <p className="hover:text-bg-primary">Home</p>
                </Link>
              </li>
              <li className="breadcrumb-item text-gray-600">{" > "}</li>
              <li className="breadcrumb-item text-gray-600" aria-current="page">
                {currentPage}
              </li>
            </ol>
          </nav>
        </div>
      </div>
  );
}

export default TopBanner;
