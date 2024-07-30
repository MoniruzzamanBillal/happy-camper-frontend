/* eslint-disable no-unsafe-optional-chaining */

import Loading from "@/components/ui/loading/Loading";
import { useAddToCartMutation } from "@/redux/features/cart/cart.api";
import { useGetSingleProductQuery } from "@/redux/features/product/product.api";
import GlassZoomImage from "@/utills/GlassZoomImage";

import { useParams } from "react-router-dom";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams();

  if (!id) {
    throw new Error("Something went wrong!! ");
  }

  const { data: productData, isLoading: productDataLoading } =
    useGetSingleProductQuery(id);
  const [addToCart] = useAddToCartMutation();

  // console.log(productData?.data);

  // ! for adding product in cart
  const handleAddCart = async () => {
    const toastId = toast.loading("Adding product to cart !! ");

    try {
      const cartData = {
        pid: id,
        pprice: productData?.data?.pprice,
        pimage: productData?.data?.pimage,
        pname: productData?.data?.pname,
      };

      const result = await addToCart(cartData);

      if (result?.data) {
        toast.success(result?.data?.message, { id: toastId });
      }

      if (result?.error) {
        const errorMessage =
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (result.error as any)?.data?.message || "Something went wrong!";
        toast.error(errorMessage, { id: toastId });
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong !! ", { id: toastId });
    }
  };

  if (productDataLoading) {
    return <Loading />;
  }

  return (
    <div className="ProductDetailContainer  ">
      <div className="ProductDetailWrapper  ">
        <div className="bg-gray-100  py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-lg px-4 md:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              {/* images - start  */}
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-lg bg-gray-100">
                  <GlassZoomImage imageSrc={productData?.data?.pimage} />
                </div>
              </div>
              {/* images - end  */}

              {/* {/* content - start  */}
              <div className="md:py-8">
                {/* {/* name - start  */}
                <div className="mb-6 md:mb-10">
                  <h2 className="text-3xl font-semibold text-gray-800 lg:text-4xl">
                    {productData?.data?.pname}
                  </h2>
                </div>
                {/* name - end  */}

                {/* price - start  */}
                <div className="mb-6">
                  <div className="  text-lg mb-1.5  ">
                    Price :
                    <span className=" font-bold text-gray-800 md:text-2xl">
                      {productData?.data?.pprice}$
                    </span>
                  </div>

                  <span className="text-sm text-gray-500">
                    incl. VAT plus shipping
                  </span>
                </div>
                {/* price - end  */}

                {/* {/* shipping notice - start  */}
                <div className="mb-2 flex items-center gap-2 text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                    />
                  </svg>

                  <span className="text-sm">2-4 day shipping</span>
                </div>
                {/* shipping notice - end  */}

                {/* product category starts  */}
                <div className="mb-2 flex items-center gap-2 text-gray-500">
                  <span className="text-sm">
                    Category : {productData?.data?.pcategory}
                  </span>
                </div>
                {/* product category ends  */}

                {/* available stock starts  */}
                <div className="mb-7 flex items-center gap-2 text-gray-500">
                  <span className="text-sm">
                    Available stock : {productData?.data?.pquantity}
                  </span>
                </div>
                {/* available stock ends  */}

                {/* {/* buttons - start  */}
                <div className="   ">
                  <button
                    disabled={productData?.data?.pquantity === 0 ? true : false}
                    className={`inline-block flex-1 rounded-lg px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 sm:flex-none md:text-base ${
                      productData?.data?.pquantity === 0
                        ? "cursor-not-allowed bg-gray-400"
                        : "cursor-pointer bg-indigo-500 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700"
                    }`}
                    onClick={handleAddCart}
                  >
                    {productData?.data?.pquantity === 0
                      ? "Out of Stock"
                      : "Add to cart"}
                  </button>
                </div>
                {/* buttons - end  */}

                {/* {/* description - start  */}
                <div className="mt-10 md:mt-16 lg:mt-20">
                  <div className="mb-3 text-lg font-semibold text-gray-800">
                    Description
                  </div>

                  <p className="text-gray-500">
                    {productData?.data?.pdescriptioin}
                  </p>
                </div>
                {/* description - end  */}
              </div>
              {/* content - end  */}
            </div>
          </div>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default ProductDetail;
