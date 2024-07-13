import { useState } from "react";
import Magnifier from "react-magnifier";

const ProductDetail = () => {
  const [currentActiveImage, setCurrentActiveImage] = useState(
    "https://images.unsplash.com/flagged/photo-1571366992942-be878c7b10c0?auto=format&q=75&fit=crop&w=600"
  );

  return (
    <div className="ProductDetailContainer  ">
      <div className="ProductDetailWrapper  ">
        <div className="bg-gray-100  py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-lg px-4 md:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              {/* images - start  */}
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-lg bg-gray-100">
                  <Magnifier
                    src={currentActiveImage}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src="https://images.unsplash.com/flagged/photo-1571366992791-2ad2078656cb?auto=format&q=75&fit=crop&w=250"
                      loading="lazy"
                      alt="Photo by Himanshu Dewangan"
                      className="h-full w-full object-cover object-center"
                      onClick={() =>
                        setCurrentActiveImage(
                          "https://images.unsplash.com/flagged/photo-1571366992791-2ad2078656cb?auto=format&q=75&fit=crop&w=250"
                        )
                      }
                    />
                  </div>

                  <div className="overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src="https://images.unsplash.com/flagged/photo-1571366992968-15b65708ee76?auto=format&q=75&fit=crop&w=250"
                      loading="lazy"
                      alt="Photo by Himanshu Dewangan"
                      className="h-full w-full object-cover object-center"
                      onClick={() =>
                        setCurrentActiveImage(
                          "https://images.unsplash.com/flagged/photo-1571366992968-15b65708ee76?auto=format&q=75&fit=crop&w=250"
                        )
                      }
                    />
                  </div>
                </div>
              </div>
              {/* images - end  */}

              {/* {/* content - start  */}
              <div className="md:py-8">
                {/* {/* name - start  */}
                <div className="mb-2 md:mb-3">
                  <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                    Pullover with pattern
                  </h2>
                </div>
                {/* name - end  */}

                {/* price - start  */}
                <div className="mb-4">
                  <div className="flex items-end gap-2">
                    <span className="text-xl font-bold text-gray-800 md:text-2xl">
                      $15.00
                    </span>
                    <span className="mb-0.5 text-red-500 line-through">
                      $30.00
                    </span>
                  </div>

                  <span className="text-sm text-gray-500">
                    incl. VAT plus shipping
                  </span>
                </div>
                {/* price - end  */}

                {/* {/* shipping notice - start  */}
                <div className="mb-6 flex items-center gap-2 text-gray-500">
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

                {/* {/* buttons - start  */}
                <div className="flex gap-2.5">
                  <a
                    href="#"
                    className="inline-block flex-1 rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base"
                  >
                    Add to cart
                  </a>

                  <a
                    href="#"
                    className="inline-block rounded-lg bg-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </a>
                </div>
                {/* buttons - end  */}

                {/* {/* description - start  */}
                <div className="mt-10 md:mt-16 lg:mt-20">
                  <div className="mb-3 text-lg font-semibold text-gray-800">
                    Description
                  </div>

                  <p className="text-gray-500">
                    This is a section of some simple filler text, also known as
                    placeholder text. It shares some characteristics of a real
                    written text but is random or otherwise generated. It may be
                    used to display a sample of fonts or generate text for
                    testing.
                    <br />
                    <br />
                    This is a section of some simple filler text, also known as
                    placeholder text. It shares some characteristics of a real
                    written text but is random or otherwise generated.
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
