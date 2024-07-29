import CamperForm from "@/components/form/CamperForm";
import CamperInput from "@/components/form/CamperInput";
import CamperSelect from "@/components/form/CamperSelect";
import CamperTextArea from "@/components/form/CamperTextArea";

import { Button } from "@/components/ui/button";
import { addProductSchema } from "@/schemas/addProduct.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues } from "react-hook-form";

import { useAddProductMutation } from "@/redux/features/product/product.api";
import { toast } from "sonner";
import GetImgLink from "@/utills/GetImgLink";
import { useNavigate } from "react-router-dom";
import { categoryOptions } from "@/utills/Constants";

const AddProduct = () => {
  const navigate = useNavigate();
  const [addProduct] = useAddProductMutation();

  //    !  for adding new product
  const handleAddProduct = async (data: FieldValues) => {
    const { image, name, category, price, description, quantity } = data;
    const toastId = toast.loading("Creating pproduct ...");
    try {
      const imgUrl = await GetImgLink(image);

      const productData = {
        pname: name,
        pcategory: category,
        pquantity: quantity,
        pimage: imgUrl,
        pprice: price,
        pdescriptioin: description,
      };

      const res = await addProduct(productData);

      if (res?.data?.success) {
        toast.success(res?.data?.message, { id: toastId });

        setTimeout(() => {
          navigate("/all-product");
          window.location.reload();
        }, 2000);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!! ", { id: toastId });
    }

    //
  };

  return (
    <div className="AddProductContainer py-8 bg-gray-100 min-h-screen ">
      <div className="AddProductWrapper w-[96%] sm:w-[92%] md:w-[90%] m-auto ">
        <h1 className=" mb-8 px-3 xsm:px-4 sm:px-5 md:px-6 font-bold text-2xl  md:text-3xl text-center  ">
          Add new product
        </h1>

        <div className="addProductForm  p-1 w-[95%] xsm:w-[85%] sm:w-[78%] md:w-[70%] xmd:w-[65%] lg:w-[55%] m-auto ">
          {/* form starts  */}
          <CamperForm
            onSubmit={handleAddProduct}
            resolver={zodResolver(addProductSchema)}
          >
            <CamperInput type="text" label="Name :" name="name" />
            <CamperSelect
              name="category"
              label="Category :"
              options={categoryOptions}
            />
            <CamperInput type="number" label="Quantity :" name="quantity" />
            <CamperInput type="number" label="Price :" name="price" />
            <CamperInput type="file" label="Image :" name="image" />
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
