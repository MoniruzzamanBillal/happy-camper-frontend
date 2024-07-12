import { Slider } from "@/components/ui/slider";

const ProductsFilter = () => {
  return (
    <div className="ProductsFilterContainer flex flex-col gap-y-6">
      <h1 className=" mb-3   font-semibold text-indigo-500 text-lg xsm:text-xl sm:text-3xl md:text-2xl xl:text-3xl text-shadow-blue">
        Filtered By :
      </h1>
      {/*  price range type starts   */}
      <div className="priceRange bg-gray-50 shadow-md rounded border border-gray-300 py-2 px-4">
        <h1 className="font-medium mb-6 text-gray-800">Price Range :</h1>

        <div className="priceRangeInput">
          <Slider
            defaultValue={[33]}
            max={100}
            step={1}
            className="w-full h-2 accent-red-500 rounded-lg "
          />

          {/* price labal   */}
          <div className="priceLabel mt-2 text-lg font-medium text-gray-800 flex justify-between">
            <span>0</span>
            <span>100</span>
          </div>
        </div>

        {/*  */}
      </div>
      {/* price range type ends   */}

      {/* category input starts  */}

      <div className="categoryInput bg-gray-50 shadow-md rounded border border-gray-300 py-2 px-4">
        <h1 className="font-medium mb-2 text-gray-800">Category :</h1>
        <ul className="text-sm font-medium text-gray-800">
          {/* bag type  */}
          <li className="w-full border-b border-gray-300">
            <div className="flex items-center ps-3">
              <input
                id="list-bag"
                type="radio"
                value=""
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
              />
              <label
                htmlFor="list-bag"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
              >
                Bag
              </label>
            </div>
          </li>

          {/* kitchen type  */}
          <li className="w-full border-b border-gray-300">
            <div className="flex items-center ps-3">
              <input
                id="list-kitchen"
                type="radio"
                value=""
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
              />
              <label
                htmlFor="list-kitchen"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
              >
                kitchen
              </label>
            </div>
          </li>

          {/*  */}
        </ul>
      </div>
      {/* * car type input ends   */}
    </div>
  );
};

export default ProductsFilter;
