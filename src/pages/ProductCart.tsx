/* eslint-disable @typescript-eslint/no-explicit-any */
import Loading from "@/components/ui/loading/Loading";
import NoCartItem from "@/components/ui/NoCartItem";
import {
  useAddCartQuantityMutation,
  useDecreaseCartQuantityMutation,
  useDeleteCartQuantityMutation,
  useGetCartQuery,
} from "@/redux/features/cart/cart.api";
import { setCartItem } from "@/redux/features/cart/cart.slice";
import { useAppDispatch } from "@/redux/hook";
import { TCartItrm } from "@/types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "sonner";

const ProductCart = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [totalPrice, setTotalPrice] = useState(0);
  const {
    data: cartData,
    refetch: cartDataRefetch,
    isLoading,
  } = useGetCartQuery(undefined);

  const [addCartQuantity] = useAddCartQuantityMutation();
  const [decreaseCartQuantity] = useDecreaseCartQuantityMutation();
  const [deleteCartQuantity] = useDeleteCartQuantityMutation();

  // console.log(cartData?.data);

  //   ! for adding item
  const handleAddItem = async (item: TCartItrm) => {
    const toadtId = toast.loading("Adding to cart !! ");

    try {
      const data = {
        pid: item?.pid,
        oquantity: 1,
      };

      const result = await addCartQuantity(data);

      console.log(result);

      if (result?.error) {
        toast.error((result?.error as any)?.data?.message, { id: toadtId });
      }

      // ! if no error
      if (result?.data?.success) {
        toast.success(result?.data?.message, { id: toadtId });
        cartDataRefetch();
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong !! ", { id: toadtId });
    }
  };

  //   ! for reducing item
  const handleReduceItem = async (item: TCartItrm) => {
    if (item?.oquantity <= 1) {
      return;
    }

    const toadtId = toast.loading("Removing from cart !! ");

    try {
      const data = {
        pid: item?.pid,
      };

      const result = await decreaseCartQuantity(data);

      if (result?.error) {
        toast.error("Something went wrong !! ", { id: toadtId });
      }

      // ! if no error
      if (result?.data?.success) {
        toast.success(result?.data?.message, { id: toadtId });
        cartDataRefetch();
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong !! ", { id: toadtId });
    }
  };

  // ! for deleting cart item
  const handleDeleteItem = async (item: TCartItrm) => {
    const toadtId = toast.loading("Deleting  from cart !! ");

    try {
      const data = {
        pid: item?.pid,
      };

      const result = await deleteCartQuantity(data);

      if (result?.error) {
        toast.error("Something went wrong !! ", { id: toadtId });
      }
      // ! if no error
      if (result?.data?.success) {
        toast.success(result?.data?.message, { id: toadtId });
        cartDataRefetch();
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong !! ", { id: toadtId });
    }
  };

  // ! for checkout page
  const handleCheckout = () => {
    const cartItem = cartData?.data?.map((cart: TCartItrm) => {
      return {
        pid: cart?.pid,
        oquantity: cart?.oquantity,
      };
    });

    dispatch(setCartItem(cartItem));

    setTimeout(() => {
      navigate("/checkout");
    }, 500);
  };

  useEffect(() => {
    cartDataRefetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartData, isLoading]);

  // ! for calculatilng total price
  useEffect(() => {
    let total = 0;

    if (cartData?.data) {
      total = cartData?.data.reduce((total: number, item: TCartItrm) => {
        return total + item?.pprice * item?.oquantity;
      }, 0);
    }

    setTotalPrice(total);
  }, [cartData, isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="ProductCartContainer">
      <div className="ProductCartWrapper   bg-gray-100 py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-lg px-4 md:px-8">
          <div className="mb-6 sm:mb-10 lg:mb-16">
            <h1 className=" mb-6  md:mb-8 xmd:mb-12 lg:mb-14 text-center font-semibold text-indigo-500 text-lg xsm:text-xl sm:text-3xl md:text-3xl xl:text-4xl text-shadow-blue">
              Your Cart
            </h1>
          </div>

          <div className="mb-5 flex flex-col sm:mb-8 sm:divide-y sm:border-t sm:border-b">
            {/* product - start  */}

            {cartData?.data?.length === 0 ? (
              <NoCartItem />
            ) : (
              cartData?.data &&
              cartData?.data?.map((item: TCartItrm, ind: number) => (
                <div
                  key={ind}
                  className=" bg-white border border-gray-200 my-4 py-2 sm:py-4 px-5 rounded-md shadow-md  "
                >
                  <div className="flex flex-wrap gap-4 sm:py-2.5 lg:gap-6">
                    {/* product image section starts  */}
                    <div className="sm:-my-2.5">
                      <div className=" imgContainer group relative block h-40 w-24 overflow-hidden rounded-lg bg-gray-100 sm:h-56 sm:w-40">
                        <img
                          src={item?.pimage}
                          loading="lazy"
                          alt="product image "
                          className="h-full w-full object-fit object-center transition duration-200 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    {/* product image section ends  */}

                    {/* product detail section starts */}
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <p className="mb-1 inline-block text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">
                          {item?.pname}
                        </p>
                      </div>

                      <div>
                        <span className="mb-1 block font-bold text-gray-800 md:text-lg">
                          $ {item?.pprice}
                        </span>
                      </div>
                    </div>
                    {/* product detail section starts */}

                    {/* right section starts  */}
                    <div className="  flex w-full justify-between border-t pt-4 sm:w-auto sm:border-none sm:pt-0">
                      <div className="flex flex-col items-start gap-2">
                        <div className="flex justify-between  h-12 w-20 overflow-hidden rounded border">
                          {/* product quantity starts  */}
                          <div className=" w-[70%]  cartContent flex justify-center items-center ">
                            <p className="    ring-inset ring-indigo-300 transition duration-100 focus:ring">
                              {item?.oquantity}
                            </p>
                          </div>
                          {/* product quantity ends   */}

                          {/* button section starts  */}

                          <div className=" w-[30%] flex flex-col divide-y border-l">
                            <button
                              onClick={() => handleAddItem(item)}
                              className="flex w-6 flex-1 select-none items-center justify-center bg-white leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200"
                            >
                              +
                            </button>

                            <button
                              onClick={() => handleReduceItem(item)}
                              className="flex w-6 flex-1 select-none items-center justify-center bg-white leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200"
                            >
                              -
                            </button>
                          </div>
                          {/* button section ends  */}
                        </div>

                        <button
                          className="select-none text-sm font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                          onClick={() => handleDeleteItem(item)}
                        >
                          Delete
                        </button>
                      </div>

                      {/* product price starts  */}
                      <div className="ml-4 pt-3 sm:pt-2 md:ml-8 lg:ml-16">
                        <span className="block font-bold text-gray-800 md:text-lg">
                          $ {item?.pprice * item?.oquantity}
                        </span>
                      </div>
                      {/* product price ends */}
                    </div>
                    {/* right section ends   */}

                    {/*  */}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* bottom section strts  */}
          {/* totals - start  */}
          {cartData?.data?.length === 0 ? (
            ""
          ) : (
            <div className="flex flex-col items-end gap-4  ">
              {/* price card starts  */}
              <div className="w-full  bg-white border border-gray-200 rounded-md shadow-md p-4 sm:max-w-xs">
                <div className="space-y-1">
                  <div className="flex justify-between gap-4 text-gray-900">
                    <span>Subtotal</span>
                    <span>${totalPrice}</span>
                  </div>

                  <div className="flex justify-between gap-4 text-gray-700">
                    <span>Shipping</span>
                    <span>$4.99</span>
                  </div>
                </div>

                <div className="mt-4 border-t pt-4">
                  <div className="flex items-start justify-between gap-4 text-gray-800">
                    <span className="text-lg font-bold">Total</span>

                    <span className="flex flex-col items-end">
                      <span className="text-lg font-bold">
                        $ {totalPrice + 4.99} USD
                      </span>
                      <span className="text-sm text-gray-500">
                        including VAT
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              {/* price card ends   */}

              <button
                className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
                onClick={() => handleCheckout()}
              >
                Check out
              </button>
            </div>
          )}

          {/* totals - end  */}
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
