import { useSelector } from "react-redux";
import { RootState } from "../../redux"; // RootState tipi yangilandi
import Products from "../../components/products/Products";
import { useEffect } from "react";
import { useCheckTokenQuery } from "@/redux/api/customer-api";
import { useGetWishlistQuery } from "@/redux/api/wishlist-api";
import { IGetResponseProducts } from "@/types"; // Assuming this is the type of products data

const Wishlist = () => {
  // Get wishlist from Redux store
  const wishlist = useSelector((state: RootState) => state.wishlist.value); 

  // Get token from Redux store
  const token = useSelector((state: RootState) => state.token.access_token);

  // Check token status via API (skip query if token is not present)
  const { data: tokenData } = useCheckTokenQuery(null, {
    skip: Boolean(!token),
  });

  // Fetch wishlist based on customer ID (skip query if tokenData is not available)
  const { data } = useGetWishlistQuery(Number(tokenData?.customer?.id), {
    skip: Boolean(!tokenData),
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Determine the data to pass to the Products component
  const productsData = token ? data?.data?.products : wishlist;

  // Determine the title based on the presence of products
  const title = productsData?.length > 0 ? "Your liked products" : "You have not liked any products";

  return (
    <>
     <Products
    data={productsData} // Endi to‘g‘ri massiv uzatiladi
    title={title} 
  />
    </>
  );
};

export default Wishlist;
