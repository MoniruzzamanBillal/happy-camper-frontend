import { useNavigate, useParams } from "react-router-dom";
import CamperForm from "@/components/form/CamperForm";
import CamperInput from "@/components/form/CamperInput";
import CamperSelect from "@/components/form/CamperSelect";
import CamperTextArea from "@/components/form/CamperTextArea";
import { Button } from "@/components/ui/button";
import { updateProductSchema } from "@/schemas/addProduct.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues } from "react-hook-form";
import {
  useGetSingleProductQuery,
  useUpdateSingleProductMutation,
} from "@/redux/features/product/product.api";

import { toast } from "sonner";
import { useEffect } from "react";
import GetImgLink from "@/utills/GetImgLink";
import { categoryOptions } from "@/utills/Constants";

const UpdateProduct = () => {
  const [updateSingleProduct] = useUpdateSingleProductMutation();
  const navigate = useNavigate();
  const { id } = useParams();

  if (!id) {
    throw new Error("Something went wrong!! ");
  }

  const { data: productData, isLoading } = useGetSingleProductQuery(id);

  // console.log(productData);

  let defaultValues = {
    name: productData?.data?.pname,
    category: productData?.data?.pcategory,
    price: productData?.data?.pprice,
    quantity: productData?.data?.pquantity,
    description: productData?.data?.pdescriptioin,
  };

  // ! for updating product
  const handleUpdateProduct = async (data: FieldValues) => {
    const { image, name, category, price, description, quantity } = data;

    const toastId = toast.loading("updating product ...");
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

      await updateSingleProduct({ id, productData });

      toast.success("Product updated successfully !! ", { id: toastId });

      setTimeout(() => {
        navigate("/all-product");
      }, 400);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong !! ", { id: toastId });
    }
  };

  // ! effect for getting default value
  useEffect(() => {
    if (productData?.data) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      defaultValues = {
        name: productData?.data?.pname,
        category: productData?.data?.pcategory,
        price: productData?.data?.pprice,
        description: productData?.data?.pdescriptioin,
        quantity: productData?.data?.pquantity,
      };
    }
  }, [productData]);

  if (isLoading) {
    return <p>Loading ...</p>;
  }

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
              options={categoryOptions}
            />
            <CamperInput type="file" label="Image :" name="image" />
            <CamperInput type="number" label="Quantity :" name="quantity" />
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
