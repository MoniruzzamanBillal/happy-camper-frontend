import { Input } from "@/components/ui/input";
import Loading from "@/components/ui/loading/Loading";
import NoProduct from "@/components/ui/NoProduct";
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
import {
  useGetAllProductCountQuery,
  useGetAllProductQuery,
} from "@/redux/features/product/product.api";
import { TProduct } from "@/types/product";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Products = () => {
  const { ParamCategory } = useParams();

  const [totalItemCount, setTotalItemCount] = useState(0);
  const [numofpages, setNumofpages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [searchTerm, setSearchTerm] = useState("");
  const [pprice, setPprice] = useState<number | null>(null);
  const [pcategory, setpPcategory] = useState("");
  const [sort, setSortBy] = useState("");

  const [params, setParams] = useState<Record<string, unknown> | undefined>(
    undefined
  );

  const { data: allProduct, isLoading } = useGetAllProductQuery(params);
  const { data: allProductCount, isLoading: productLengthLoading } =
    useGetAllProductCountQuery(undefined);

  const [isXl, setIsXl] = useState(false);

  const dataPerPage = 9;

  const pages = [...new Array(numofpages).keys()];

  //! function for handle next button in pagination
  const handleNextCurrent = () => {
    if (currentPage >= numofpages) {
      return setCurrentPage(numofpages);
    }
    setCurrentPage(currentPage + 1);
  };

  //! function for handle previous button in pagination
  const handlePrev = () => {
    if (currentPage <= 1) {
      return setCurrentPage(1);
    }
    setCurrentPage(currentPage - 1);
  };

  // ! for reseting filter
  const handleAddReset = () => {
    setCurrentPage(1);

    setParams(undefined);
    setSearchTerm("");
    setPprice(null);
    setSortBy("");
    setpPcategory("");

    const newParam: Record<string, unknown> = {};

    newParam.page = 1;
    newParam.limit = dataPerPage;

    setParams(newParam);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsXl(window.innerWidth >= 1280);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ! effect to set all products count
  useEffect(() => {
    setTotalItemCount(allProductCount?.data);

    if (totalItemCount) {
      const numofpages2 = Math.ceil(totalItemCount / dataPerPage);
      setNumofpages(numofpages2);
    }
  }, [allProductCount, productLengthLoading, totalItemCount]);

  // ! to set category if parameter exists
  useEffect(() => {
    if (ParamCategory) {
      setpPcategory(ParamCategory);
    }
  }, [ParamCategory]);

  //! Use effect to track param value
  useEffect(() => {
    const updateParam = () => {
      const newParam: Record<string, unknown> = {};

      if (searchTerm) {
        newParam.searchTerm = searchTerm;
      }

      if (pprice) {
        newParam.pprice = pprice;
      }

      if (pcategory) {
        newParam.pcategory = pcategory;
      }

      if (sort) {
        newParam.sort = sort;
      }

      newParam.page = 1;
      newParam.limit = dataPerPage;

      setParams(newParam);
    };

    updateParam();
  }, [searchTerm, pprice, pcategory, sort, currentPage]);

  // ! effect to set pagination filter
  useEffect(() => {
    const updateParam = () => {
      const newParam: Record<string, unknown> = {};

      if (currentPage) {
        newParam.page = currentPage;
        newParam.limit = dataPerPage;
      }

      setParams(newParam);
    };

    updateParam();
  }, [dataPerPage, currentPage]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="ProductsContainer bg-gray-100 py-4 ">
      <div className="productsWrapper w-[96%] sm:w-[92%] md:w-[90%] m-auto flex flex-col gap-y-8 ">
        {/* search section   */}
        <div className="searchSection bg-gray-50 border border-gray-300  w-[40%] m-auto py-1 px-5 rounded-full flex justify-center items-center  ">
          <Input
            type="text"
            placeholder="Looking for...."
            className=" border-none "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {/* search section ends  */}

        {/* content body starts  */}
        <div className="contentBody  flex justify-between gap-x-3 ">
          {/* left section starts  */}

          {/* filter section   */}
          <div className="contentLeft w-0 xl:w-[30%] hidden xl:block  ">
            <ProductsFilter
              priceRange={pprice}
              category={pcategory}
              setPriceRange={setPprice}
              setCategory={setpPcategory}
              handleAddReset={handleAddReset}
            />
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
                    <ProductsFilter
                      priceRange={pprice}
                      category={pcategory}
                      setPriceRange={setPprice}
                      setCategory={setpPcategory}
                      handleAddReset={handleAddReset}
                    />
                  </SheetContent>
                </Sheet>
              ) : (
                <h1 className=" text-lg font-medium ">Product name </h1>
              )}

              {/* sort input section starts  */}
              <div className="sortSection  flex  justify-between items-center gap-x-1 ">
                <p className="text-gray-600 "> sort by : </p>

                {/* input section  */}
                <Select
                  value={sort}
                  onValueChange={(value) => setSortBy(value)}
                >
                  <SelectTrigger className="w-[14rem]  outline-none border-gray-400 ring-0 focus:ring-0  ">
                    <SelectValue placeholder="sort by price" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pprice">Low to High</SelectItem>
                    <SelectItem value="-pprice">High to Low </SelectItem>
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
                {allProduct?.data?.length === 0 ? (
                  <NoProduct />
                ) : (
                  allProduct?.data &&
                  allProduct?.data?.map((product: TProduct, ind: number) => (
                    <ProductCard product={product} key={ind} />
                  ))
                )}
              </div>
            </div>
            {/* products content ends */}

            {/*  */}
          </div>
          {/* right section ends  */}

          {/*  */}
        </div>
        {/* content body ends   */}
        {/* pagination container  */}
        {totalItemCount && totalItemCount <= 9 ? (
          " "
        ) : (
          <div className="paginationContainer  sansFont relative z-[10] ">
            <div className="pagination   mt-3 py-4 text-center text-xs xsm:text-sm sm:text-base  ">
              <button
                onClick={() => handlePrev()}
                className=" py-1.5 xsm:py-2.5 px-2.5 xsm:px-3 sm:px-4 border-r border-gray-600 text-white bg-gray-500  hover:bg-gray-700   "
              >
                Prev
              </button>
              {pages.map((page) => (
                <button
                  onClick={() => setCurrentPage(page + 1)}
                  className={` py-1.5 xsm:py-2.5 px-2.5 xsm:px-3 sm:px-4 text-white   ${
                    currentPage - 1 === page
                      ? "bg-[#e4c590] hover:bg-amber-300 "
                      : "bg-gray-500  hover:bg-gray-700"
                  } border-r border-gray-600 `}
                >
                  {page + 1}
                </button>
              ))}
              <button
                onClick={() => handleNextCurrent()}
                className="py-1.5 xsm:py-2.5 px-2.5 xsm:px-3 sm:px-4 text-white bg-gray-500  hover:bg-gray-700   "
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* pagination container  */}

        {/* products section  */}
        {/* products section  */}

        {/*  */}
      </div>
    </div>
  );
};

export default Products;
