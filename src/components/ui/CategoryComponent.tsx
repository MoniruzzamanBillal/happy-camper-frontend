import CategoryCard from "./CategoryCard";

export type TProductcategory = {
  productName: string;
  productIMG: string;
};

const productsCategory: TProductcategory[] = [
  {
    productName: "Mobile phone",
    productIMG: "https://i.ibb.co/FzF0q8y/phone.jpg",
  },
  {
    productName: "Earphone",
    productIMG: "https://i.ibb.co/RpK31MH/earphone.jpg",
  },
  {
    productName: "Adapter",
    productIMG: "https://i.ibb.co/CwbG0N8/adapter.jpg",
  },
  {
    productName: "Smart watch",
    productIMG: "https://i.ibb.co/Qm8xg1b/smartwtch.jpg",
  },
  {
    productName: "Power bank",
    productIMG: "https://i.ibb.co/dK0x4ZY/power-bank.jpg",
  },
];

const CategoryComponent = () => {
  return (
    <div className="categoryContainer bg-gray-50 py-8   ">
      <div className="categoryWrapper  w-[96%] sm:w-[92%] md:w-[90%]  m-auto  ">
        <h1 className=" mb-8  md:mb-10 xmd:mb-12 lg:mb-14 text-center font-semibold text-indigo-500 text-xl xsm:text-2xl sm:text-3xl md:text-3xl xl:text-4xl text-shadow-blue ">
          Shop by category
        </h1>

        {/* category card  */}
        <div className="categoryCard  grid grid-cols-2 xsm:grid-cols-3 xmd:grid-cols-4 gap-x-3 gap-y-12 ">
          {productsCategory &&
            productsCategory.map((product, ind) => (
              <CategoryCard key={ind} product={product} />
            ))}
        </div>
        {/* category card  */}
      </div>
    </div>
  );
};

export default CategoryComponent;
