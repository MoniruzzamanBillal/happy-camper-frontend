import { Link } from "react-router-dom";
import { TProductcategory } from "./CategoryComponent";

type TCategoryProps = {
  product: TProductcategory;
};

const CategoryCard = ({ product }: TCategoryProps) => {
  return (
    <div className="categoryCardContainer">
      <Link to={`/products/${product?.productName}`}>
        <div className="categoryCard  flex flex-col justify-center items-center  ">
          <div className="imgContainer  size-[7rem]   ">
            <img
              className=" w-full h-full p-1 cursor-pointer rounded-full ring-2  ring-gray-300 dark:ring-gray-500"
              src={product?.productIMG}
              alt="Bordered avatar"
            />
          </div>

          <h1 className=" mt-1 text-lg font-semibold cursor-pointer dark:text-gray-100 ">
            {product?.productName}
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
