import CategoryCard from "./CategoryCard";

export type TProductcategory = {
  productName: string;
  productIMG: string;
};

const productsCategory: TProductcategory[] = [
  {
    productName: "Sleeping Bag",
    productIMG: "https://i.ibb.co/DtqW079/sleeping-Bag.jpg",
  },
  {
    productName: "Tent",
    productIMG: "https://i.ibb.co/brvH1CW/tent.png",
  },
  {
    productName: "Lantern",
    productIMG: "https://i.ibb.co/3Fr7bsx/lantern.jpg",
  },
  {
    productName: "Char coal",
    productIMG: "https://i.ibb.co/TY3Zzbc/charcoal.jpg",
  },
  {
    productName: "Multifunctional Tool",
    productIMG: "https://i.ibb.co/3hHSXT4/tool.jpg",
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
        <div className="categoryCard  grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-3 xmd:grid-cols-4 gap-x-3 gap-y-12 ">
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
