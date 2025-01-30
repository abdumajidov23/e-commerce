import { useParams } from "react-router-dom";
import {
  useGetProductsQuery,
  useGetSingleProductQuery
} from "../redux/api/product-api"
import ProductDetail from "./ProductDetail";
import { useGetSingleCategoryQuery } from "../redux/api/category-api"; 
import RelatedProducts from "./RelatedProducts";
import Hero from "./Hero";

const MainDetail = () => {
  const { id } = useParams();
  const productId = Number(id);

  const { data: product } = useGetSingleProductQuery(productId);
  const categoryId = product?.categoryId ? String(product.categoryId) : undefined;

  const { data: category } = useGetSingleCategoryQuery(categoryId);
  const { data: relatedProducts } = useGetProductsQuery({
    category: categoryId,
  });


  if (!product || !category) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      <Hero data={product} />
      <ProductDetail id={Number(id)} product={product} category={category} />
      {relatedProducts?.data?.products && (
        <RelatedProducts
          relatedProducts={relatedProducts.data.products}
          productId={Number(product.id)}
        />
      )}
    </>
  );
};

export default MainDetail;
