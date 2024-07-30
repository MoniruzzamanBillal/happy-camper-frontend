/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";

import { Button } from "./button";

const BestSellerCard = ({ item }: any) => {
  return (
    <div className="bestSellerCard bg-white  py-4  flex flex-col items-center gap-y-4 border rounded-2xl hover:border-indigo-500 shadow-sm hover:shadow-md">
      {/* item image  */}
      <div className="cardImg size-[12rem]  ">
        <img className=" w-full h-full " src={item?.pimage} alt="" />
      </div>

      {/* item name  */}
      <div className="cardName   ">
        <p className=" font-medium text-center text-lg  ">{item?.pname} </p>
      </div>

      {/* button section  */}

      <div className="buttonSection bg-lime-400">
        <Link to="/products">
          <Button className="inline-block rounded-lg bg-indigo-500 px-6  text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base  ">
            View More
          </Button>
        </Link>
      </div>

      {/*  */}
    </div>
  );
};

export default BestSellerCard;
