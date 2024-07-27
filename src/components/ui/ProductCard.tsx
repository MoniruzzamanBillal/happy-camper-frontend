import { TProduct } from "@/types/product";
import { Button } from "./button";
import { Link } from "react-router-dom";

type TProductProps = {
  product: TProduct;
};

const ProductCard = ({ product }: TProductProps) => {
  return (
    <div className="productCard bg-gray-50 cursor-pointer group flex flex-col items-center gap-y-4 border border-gray-300 rounded-2xl  shadow-md hover:shadow-lg hover:scale-[1.02] duration-200 overflow-hidden ">
      {/* product image  */}
      <div className="productImg  h-[12rem] ">
        <img
          className="w-full h-full"
          // src="https://i.ibb.co/DtqW079/sleeping-Bag.jpg"
          src={product?.pimage}
          alt=""
        />
      </div>

      {/* prod name  */}
      <div className="productName  px-3 ">
        <p className=" font-semibold group-hover:text-customOrange text-center ">
          {product?.pname}
        </p>
      </div>

      {/* product price  */}
      <div className="productPrice  ">
        <p className=" font-semibold text-xl text-customOrange ">
          {" "}
          {product?.pprice} $
        </p>
      </div>

      {/* detail section  */}
      <div className="productDetail pb-3  ">
        <Link to={`/product/detail/${product?._id}`}>
          <Button className=" bg-customViolet hover:bg-customHoverViolet px-8 ">
            Detail
          </Button>
        </Link>
      </div>

      {/*  */}
    </div>
  );
};

export default ProductCard;
