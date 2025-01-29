import { memo } from "react";
import { IGetResponseProducts, IProduct } from "../../types";

// IProduct ma'lumotlari bilan ishlash uchun kerakli turdagi propslarni belgilash
interface ProductsProps {
  data: IGetResponseProducts;
  title: string;
}

const Products = ({ data, title }: ProductsProps) => {
  const productItems = data?.data?.products.map((product: IProduct) => (
    <div
      key={product.id}
      className="relative group overflow-hidden rounded-lg shadow-md"
    >
      {/* Mahsulotning rasmi */}
      <div className="relative w-full h-[301px] max-[620px]:h-[240px] max-[430px]:h-[200px]">
        <img
          className="w-full h-full bg-no-repeat bg-center bg-cover group-hover:scale-[1.02] duration-300 md:scale-100 cursor-pointer"
          src={`${import.meta.env.IMAGE_BASE_URL}${product.images[0]}`}
          alt={product.title}
        />
      </div>

      {/* Hover effektidagi "Add to cart" tugmasi */}
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <button className="bg-white text-black px-4 py-2 rounded-md">
          Add to cart
        </button>
      </div>

      {/* Mahsulot haqida ma'lumot */}
      <div className="py-4 px-4 bg-[#F4F5F7] transition-colors duration-300">
        <h2
          title={product.title} // Titlega mahsulot nomini berish
          className="line-clamp-1 text-[24px] font-semibold leading-8 max-[620px]:text-lg"
        >
          {product.title}
        </h2>
        <p
          title={product.desc.toString()} // `desc`ni stringga aylantirish
          className="line-clamp-1 text-[#898989] text-lg max-[620px]:text-sm"
        >
          {product.desc}
        </p>
        <strong className="text-[#3A3A3A] text-[20px] leading-8 font-semibold max-[620px]:text-[15px]">
          {product.price.toLocaleString()} USD
        </strong>
      </div>
    </div>
  ));

  return (
    <div className="container my-14 max-[620px]:my-4">
      <h2 className="font-poppins-bold text-[40px] mb-8 text-center max-[620px]:text-2xl">
        {title}
      </h2>
      <div className="grid grid-cols-4 gap-8 max-[1240px]:grid-cols-3 max-[990px]:grid-cols-2 max-[620px]:gap-2">
        {productItems}
      </div>
    </div>
  );
};

export default memo(Products);
