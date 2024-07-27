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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useGetAllProductQuery } from "@/redux/features/product/product.api";
import { TProduct } from "@/types/product";

import { useEffect, useState } from "react";

const Products = () => {
  const { data: allProduct, isLoading } = useGetAllProductQuery(undefined);
  const [isXl, setIsXl] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsXl(window.innerWidth >= 1280);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isLoading) {
    return <p>loading ...</p>;
  }

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
          <div className="contentLeft w-0 xl:w-[30%] hidden xl:block  ">
            <ProductsFilter />
            {/*  */}
          </div>
          {/* left section ends  */}

          {/* right section starts  */}
          {/* products section  */}
          <div className="contentRight w-[100%] xl:w-[70%] flex flex-col gap-y-4 ">
            {/* content top section  */}
            <div className="contentTop bg-gray-50 shadow-md rounded border border-gray-300 py-2 px-4 flex justify-between items-center ">
              {/* Conditional rendering of ProductsFilter */}
              {!isXl ? (
                <Sheet>
                  <SheetTrigger>
                    <div className="filterMenuIcon flex justify-between items-center gap-x-1 cursor-pointer ">
                      {/* icon starts  */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
                        />
                      </svg>

                      {/* icon ends */}
                      <p className=" font-medium  ">Filter</p>
                    </div>
                  </SheetTrigger>
                  <SheetContent>
                    <ProductsFilter />
                  </SheetContent>
                </Sheet>
              ) : (
                <h1 className=" text-lg font-medium ">Product name </h1>
              )}

              {/* sort input section starts  */}
              <div className="sortSection  flex  justify-between items-center gap-x-1 ">
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
              <div className="allProducts grid grid-cols-1 sm:grid-cols-2 xmd:grid-cols-3 gap-x-5 gap-y-8 ">
                {allProduct?.data &&
                  allProduct?.data?.map((product: TProduct, ind: number) => (
                    <ProductCard product={product} key={ind} />
                  ))}
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
