import { useGetAllProductQuery } from "@/redux/features/product/product.api";
import { TProduct } from "@/types";
import ProductCard from "./ProductCard";
import Loading from "./loading/Loading";

const FeaturedProducts = () => {
  const { data: featuredProducts, isLoading } = useGetAllProductQuery({
    limit: 3,
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="FeaturedProductsContainer bg-gray-100 py-8 ">
      <div className="FeaturedProductsCWrapper w-[96%] sm:w-[92%] md:w-[90%] m-auto ">
        <h1 className=" mb-6  md:mb-8 xmd:mb-12 lg:mb-14 text-center font-semibold text-indigo-500 text-lg xsm:text-xl sm:text-3xl md:text-3xl xl:text-4xl text-shadow-blue">
          Best selling products
        </h1>

        <div className="bestSellerItem">
          {/* products content starts  */}
          <div className="productsContent  py-3 px-4 ">
            {/* all products  */}
            <div className="allProducts grid grid-cols-1 xsm:grid-cols-2 xmd:grid-cols-3 gap-x-8 gap-y-10 ">
              {featuredProducts?.data &&
                featuredProducts?.data?.map(
                  (product: TProduct, ind: number) => (
                    <ProductCard product={product} key={ind} />
                  )
                )}
            </div>
          </div>
          {/* products content ends */}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
