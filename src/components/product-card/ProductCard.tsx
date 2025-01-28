import { useNavigate } from 'react-router-dom';
import '../product-card/ProductCard.scss';

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  discount?: string;
  new?: string;
  discountPrice?: string;
}

function ProductCard({
  name,
  description,
  price,
  image,
  discount,
  new: isNew,
  discountPrice,
}: ProductCardProps) {
  const isDiscount = discount;
  const navigate = useNavigate()

  return (
    <div className="relative w-[285px] border rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative group">
        <div className="overlay absolute inset-0 z-10 hidden group-hover:flex flex-col justify-center items-center bg-black bg-opacity-70 text-white text-center transition-opacity duration-300">
          <button className="mt-4 bg-white text-[#B88E2F] font-bold py-2 px-6 rounded-full hover:bg-[#B88E2F] hover:text-white transform transition-all duration-300 focus:scale-95 focus:rounded-lg">
            Add To Cart
          </button>
          <div className="flex justify-between mt-5 px-3 w-full max-w-[240px] space-x-4">
            <div className="flex flex-col items-center cursor-pointer hover:scale-105 transform transition-all duration-300 focus:scale-95 focus:rounded-full">
              <img src="/images/share.svg" alt="Share" className="w-6 h-6" />
              <p className="mt-1 text-sm">Share</p>
            </div>
            <div className="flex flex-col items-center cursor-pointer hover:scale-105 transform transition-all duration-300 focus:scale-95 focus:rounded-full" onClick={() => navigate("/product")}>
              <img src="/images/compare.svg" alt="Compare" className="w-6 h-6" />
              <p className="mt-1 text-sm">Compare</p>
            </div>
            <div className="flex flex-col items-center cursor-pointer hover:scale-105 transform transition-all duration-300 focus:scale-95 focus:rounded-full">
              <img src="/images/heart_small.svg" alt="Like" className="w-6 h-6" />
              <p className="mt-1 text-sm">Like</p>
            </div>
          </div>
        </div>
        {isDiscount && (
          <div className="absolute top-4 right-4 w-[3rem] h-[3rem] bg-[#E97171] text-white rounded-full text-center leading-[3rem]">
            {discount}
          </div>
        )}
        {isNew && (
          <div className="absolute top-4 right-4 w-[3rem] h-[3rem] bg-[#2EC1AC] text-white rounded-full text-center leading-[3rem]">
            {isNew}
          </div>
        )}
        <img alt="product" src={image} className="w-full h-[200px] object-cover" />
        <div className="bg-[#F4F5F7] p-4">
          <h4 className="font-semibold text-lg">{name}</h4>
          <p className="mt-2 mb-2 text-sm text-gray-500">{description}</p>
          {isDiscount ? (
            <div className="flex items-center">
              <h5 className="font-semibold text-lg text-[#B88E2F] mr-3">{discountPrice}</h5>
              <h5 className="text-[#B0B0B0] line-through">{price}</h5>
            </div>
          ) : (
            <h5 className="font-semibold text-lg">{price}</h5>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
