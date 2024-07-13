import { useState } from "react";

const ProductCart = () => {
  const [cartItem, setCartItem] = useState(1);

  //   ! for adding item
  const handleAddItem = () => {
    setCartItem((prev) => prev + 1);
  };

  //   ! for reducing item
  const handleReduceItem = () => {
    if (cartItem <= 0) {
      setCartItem(0);
    } else {
      setCartItem((prev) => prev - 1);
    }
  };

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
            <div className=" bg-white border border-gray-200  py-5 sm:py-8 px-5 rounded-md shadow-md  ">
              <div className="flex flex-wrap gap-4 sm:py-2.5 lg:gap-6">
                {/* product image section starts  */}
                <div className="sm:-my-2.5">
                  <div className=" imgContainer group relative block h-40 w-24 overflow-hidden rounded-lg bg-gray-100 sm:h-56 sm:w-40">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1681169152396-f22381eae362?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      loading="lazy"
                      alt="product image "
                      className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    />
                  </div>
                </div>
                {/* product image section ends  */}

                {/* product detail section starts */}
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <p className="mb-1 inline-block text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">
                      Product name
                    </p>
                  </div>

                  <div>
                    <span className="mb-1 block font-bold text-gray-800 md:text-lg">
                      $15.00
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
                          {cartItem}
                        </p>
                      </div>
                      {/* product quantity ends   */}

                      {/* button section starts  */}

                      <div className=" w-[30%] flex flex-col divide-y border-l">
                        <button
                          onClick={() => handleAddItem()}
                          className="flex w-6 flex-1 select-none items-center justify-center bg-white leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200"
                        >
                          +
                        </button>

                        <button
                          onClick={() => handleReduceItem()}
                          className="flex w-6 flex-1 select-none items-center justify-center bg-white leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200"
                        >
                          -
                        </button>
                      </div>
                      {/* button section ends  */}
                    </div>

                    <button className="select-none text-sm font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">
                      Delete
                    </button>
                  </div>

                  {/* product price starts  */}
                  <div className="ml-4 pt-3 sm:pt-2 md:ml-8 lg:ml-16">
                    <span className="block font-bold text-gray-800 md:text-lg">
                      $15.00
                    </span>
                  </div>
                  {/* product price ends */}
                </div>
                {/* right section ends   */}

                {/*  */}
              </div>
            </div>
            {/* product - end  */}
          </div>

          {/* bottom section strts  */}
          {/* totals - start  */}
          <div className="flex flex-col items-end gap-4  ">
            {/* price card starts  */}
            <div className="w-full  bg-white border border-gray-200 rounded-md shadow-md p-4 sm:max-w-xs">
              <div className="space-y-1">
                <div className="flex justify-between gap-4 text-gray-500">
                  <span>Subtotal</span>
                  <span>$129.99</span>
                </div>

                <div className="flex justify-between gap-4 text-gray-500">
                  <span>Shipping</span>
                  <span>$4.99</span>
                </div>
              </div>

              <div className="mt-4 border-t pt-4">
                <div className="flex items-start justify-between gap-4 text-gray-800">
                  <span className="text-lg font-bold">Total</span>

                  <span className="flex flex-col items-end">
                    <span className="text-lg font-bold">$134.98 USD</span>
                    <span className="text-sm text-gray-500">including VAT</span>
                  </span>
                </div>
              </div>
            </div>
            {/* price card ends   */}

            <button className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
              Check out
            </button>
          </div>
          {/* totals - end  */}
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
