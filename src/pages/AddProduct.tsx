import CamperForm from "@/components/form/CamperForm";
import CamperInput from "@/components/form/CamperInput";
import CamperSelect from "@/components/form/CamperSelect";
import CamperTextArea from "@/components/form/CamperTextArea";
import { Button } from "@/components/ui/button";
import { addProductSchema } from "@/schemas/addProduct.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues } from "react-hook-form";

const options = [
  {
    name: "test 1",
    value: "test 1",
  },
  {
    name: "test 2",
    value: "test 2",
  },
  {
    name: "test 3",
    value: "test 3",
  },
];

const AddProduct = () => {
  //    !  for adding new product
  const handleAddProduct = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="AddProductContainer py-8 bg-gray-100 min-h-screen">
      <div className="AddProductWrapper w-[96%] sm:w-[92%] md:w-[90%] m-auto ">
        <h1 className=" mb-8 px-3 xsm:px-4 sm:px-5 md:px-6 font-bold text-2xl  md:text-3xl text-center  ">
          Add new product
        </h1>

        <div className="addProductForm  p-2 w-[95%] xsm:w-[85%] sm:w-[78%] md:w-[70%] xmd:w-[65%] lg:w-[55%] m-auto ">
          {/* form starts  */}
          <CamperForm
            onSubmit={handleAddProduct}
            resolver={zodResolver(addProductSchema)}
          >
            <CamperInput type="text" label="Name :" name="name" />
            <CamperSelect
              name="category"
              label="Category :"
              options={options}
            />
            <CamperInput type="file" label="Image :" name="image" />
            <CamperInput type="number" label="Price :" name="price" />
            <CamperTextArea label="Product description :" name="description" />
            <Button className="px-3 xsm:px-4 sm:px-5 md:px-6 font-semibold text-xs sm:text-sm md:text-base bg-green-600 hover:bg-green-700 active:scale-95 duration-500">
              Add product
            </Button>
          </CamperForm>

          {/* form ends  */}
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default AddProduct;
