import BackgroundGradient from "@/components/ui/background-gradient";
import { Button } from "@/components/ui/button";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Input } from "@/components/ui/input";
import ProductCard from "@/components/ui/ProductCard";
import ProductsFilter from "@/components/ui/ProductsFilter";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
        <div className="contentBody  flex justify-between gap-x-3 ">
          {/* left section starts  */}

          {/* filter section   */}
          <div className="contentLeft  w-[30%]  ">
            <ProductsFilter />

            {/*  */}
          </div>
          {/* left section ends  */}

          {/* right section starts  */}
          {/* products section  */}
          <div className="contentRight w-[70%] flex flex-col gap-y-4 ">
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
            <div className="productsContent  py-3 px-4 ">
              {/* all products  */}
              <div className="allProducts grid grid-cols-3 gap-x-5 gap-y-8 ">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
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
