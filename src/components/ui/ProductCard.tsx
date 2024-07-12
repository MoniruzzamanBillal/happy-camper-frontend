import { Button } from "./button";

const ProductCard = () => {
  return (
    <div className="productCard bg-gray-50 cursor-pointer group flex flex-col items-center gap-y-4 border border-gray-300 rounded-2xl  shadow-md hover:shadow-lg hover:scale-[1.02] duration-200 overflow-hidden ">
      {/* product image  */}
      <div className="productImg  h-[12rem] ">
        <img
          className="w-full h-full"
          src="https://i.ibb.co/DtqW079/sleeping-Bag.jpg"
          alt=""
        />
      </div>

      {/* prod name  */}
      <div className="productName  px-3 ">
        <p className=" font-semibold group-hover:text-customOrange ">
          Havit KB271 USB Exquisite Keyboard with Bangla
        </p>
      </div>

      {/* product price  */}
      <div className="productPrice  ">
        <p className=" font-semibold text-xl text-customOrange ">500$</p>
      </div>

      {/* detail section  */}
      <div className="productDetail pb-3  ">
        <Button className=" bg-customViolet hover:bg-customHoverViolet px-8 ">
          Detail
        </Button>
      </div>

      {/*  */}
    </div>
  );
};

export default ProductCard;
