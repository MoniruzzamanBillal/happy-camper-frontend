import { useNavigate, useParams } from "react-router-dom";
import CamperForm from "@/components/form/CamperForm";
import CamperInput from "@/components/form/CamperInput";
import CamperSelect from "@/components/form/CamperSelect";
import CamperTextArea from "@/components/form/CamperTextArea";
import { Button } from "@/components/ui/button";
import { updateProductSchema } from "@/schemas/addProduct.schema";
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

const UpdateProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  console.log(id);

  const defaultValues = {
    name: "Test name ",
    category: "test 1",
    price: "1234",
    description: "test description 1234567",
  };

  // ! for updating product
  const handleUpdateProduct = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="UpdateProductContainer  py-8 bg-gray-100 min-h-screen  ">
      <div className="UpdateProductWrapper w-[96%] sm:w-[92%] md:w-[90%] m-auto  ">
        <h1 className=" mb-8 px-3 xsm:px-4 sm:px-5 md:px-6 font-bold text-2xl  md:text-3xl text-center  ">
          Update product
        </h1>

        {/* update product form container starts  */}

        <div className="updateProductForm p-1 w-[95%] xsm:w-[85%] sm:w-[78%] md:w-[70%] xmd:w-[65%] lg:w-[55%] m-auto ">
          {/* form starts  */}
          <CamperForm
            defaultValues={defaultValues}
            onSubmit={handleUpdateProduct}
            resolver={zodResolver(updateProductSchema)}
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

        {/* update product form container ends  */}
      </div>
    </div>
  );
};

export default UpdateProduct;
