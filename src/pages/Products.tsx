import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

const Products = () => {
  return (
    <div className="ProductsContainer bg-gray-100 py-4 ">
      <div className="productsWrapper w-[96%] sm:w-[92%] md:w-[90%] m-auto flex flex-col gap-y-8 ">
        {/* search section   */}
        <div className="searchSection bg-gray-50 border border-gray-300  w-[40%] m-auto py-1 px-1.5 rounded-full flex justify-center items-center  ">
          <Input
            type="text"
            placeholder="Looking for...."
            className=" border-none "
          />
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className=" bg-white text-black font-semibold dark:text-white px-5 py-1 "
          >
            <p>Search</p>
          </HoverBorderGradient>
        </div>
        {/* search section   */}

        {/* content body starts  */}
        <div className="contentBody bg-fuchsia-100 flex justify-between gap-x-3 ">
          {/* left section starts  */}

          {/* filter section   */}
          <div className="contentLeft  w-[30%] flex flex-col gap-y-6 ">
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

            {/*  */}
          </div>
          {/* left section ends  */}

          {/* right section starts  */}
          {/* products section  */}
          <div
            className="contentRight bg-lime-300
          w-[70%] flex flex-col gap-y-4 "
          >
            {/* content top section  */}
            <div className="contentTop bg-gray-50 shadow-md rounded border border-gray-300 py-2 px-4 flex justify-between items-center ">
              <h1 className=" text-lg font-medium ">Product name </h1>

              {/* sort input section starts  */}
              <div className="sortSectionbg-red-300 flex  justify-between items-center gap-x-1 ">
                <p className="text-gray-600 "> sort by : </p>

                {/* input section  */}
                <Select>
                  <SelectTrigger className="w-[14rem]  outline-none border-gray-400 ring-0 focus:ring-0  ">
                    <SelectValue placeholder="sort by price" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low to High</SelectItem>
                    <SelectItem value="high">High to Low </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {/* sort input section ends  */}

              {/*  */}
            </div>
            {/* content top section ends */}

            {/* products content starts  */}
            <div className="productsContent  bg-gray-50 shadow-md rounded border border-gray-300 py-3 px-4 ">
              <h1>products </h1>
              <h1>products </h1>
              <h1>products </h1>
              <h1>products </h1>
              <h1>products </h1>
            </div>
            {/* products content ends */}

            {/*  */}
          </div>
          {/* right section ends  */}

          {/*  */}
        </div>
        {/* content body ends   */}

        {/* products section  */}
        {/* products section  */}

        {/*  */}
      </div>
    </div>
  );
};

export default Products;
