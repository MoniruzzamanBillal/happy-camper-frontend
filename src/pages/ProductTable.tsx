import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllProductQuery } from "@/redux/features/product/product.api";
import { TProduct } from "@/types";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import Loading from "@/components/ui/loading/Loading";

const ProductTable = () => {
  const {
    data: allProduct,
    isLoading,
    refetch: allProductRefetch,
  } = useGetAllProductQuery(undefined);

  // ! for deleting a product
  const handleDeleteItem = async (id: string) => {
    console.log(id);

    // const response = await axios.patch(
    //   `http://localhost:5000/api/v1/product/delete/${id}`
    // );
    const response = await axios.patch(
      `https://camper-shop-server.vercel.app/api/v1/product/delete/${id}`
    );

    console.log(response?.data);

    if (response?.data?.success) {
      toast.success(response?.data?.message);
      allProductRefetch();
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="ProductTableContainer py-8 bg-gray-100 min-h-screen ">
      <div className="ProductTableWrapper w-[96%] sm:w-[92%] md:w-[90%] m-auto ">
        {/* new product add  container starts  */}
        <div className="addNewProduct mb-4 ">
          <Link to={"/add-product"}>
            <Button className=" px-3 xsm:px-4 sm:px-5 md:px-6 font-semibold text-xs sm:text-sm md:text-base bg-green-600 hover:bg-green-700 active:scale-95 duration-500 ">
              Add new product
            </Button>
          </Link>

          {/*  */}
        </div>
        {/* new product add  container ends */}

        {/* table  */}
        <Table className="bg-gray-50 m-auto border border-gray-300 shadow-md rounded-md text-center  ">
          {/* table header starts  */}
          <TableHeader>
            <TableRow className=" text-sm sm:text-base md:text-lg font-medium text-center text-gray-800 ">
              {/* product name  */}
              <TableHead className="text-center text-gray-800">Name</TableHead>
              {/* product Category  */}
              <TableHead className="text-center text-gray-800 ">
                Category
              </TableHead>
              {/* product image  */}
              <TableHead className="text-center text-gray-800">Image</TableHead>
              {/* product price  */}
              <TableHead className="text-center text-gray-800">Price</TableHead>
              {/* update button   */}
              <TableHead className="text-center text-gray-800">
                Update
              </TableHead>
              {/* update delete   */}
              <TableHead className="text-center text-gray-800">
                Delete
              </TableHead>
            </TableRow>
          </TableHeader>
          {/* table header ends  */}

          {/* table body starts  */}
          <TableBody className="  text-xs sm:text-sm md:text-base text-gray-600 ">
            {/* table row starts  */}

            {allProduct?.data &&
              allProduct?.data?.map((product: TProduct, ind: number) => (
                <TableRow className="font-medium" key={ind}>
                  {/* product name  */}
                  <TableCell> {product?.pname} </TableCell>
                  {/* product Category  */}
                  <TableCell> {product?.pcategory} </TableCell>
                  {/* product image  */}
                  <TableCell className="flex justify-center items-center">
                    <img
                      className="size-[2rem] xsm:size-[2.5rem] sm:size-[3rem]"
                      src={product?.pimage}
                      alt="prod img"
                    />
                  </TableCell>
                  {/* product price  */}
                  <TableCell> {product?.pprice} </TableCell>
                  {/* update button   */}
                  <TableCell>
                    <Link to={`/update-product/${product?._id}`}>
                      <Button className=" px-3 xsm:px-4 sm:px-5 md:px-6 font-semibold text-xs sm:text-sm md:text-base bg-green-600 hover:bg-green-700 active:scale-95 duration-500 ">
                        Update
                      </Button>
                    </Link>
                  </TableCell>
                  {/* update delete   */}
                  <TableCell>
                    {/* delete button  */}
                    <AlertDialog>
                      {/* alert trigger  */}
                      <AlertDialogTrigger asChild>
                        <Button className=" px-3 xsm:px-4 sm:px-5 md:px-6 font-semibold text-xs sm:text-sm md:text-base bg-red-600 hover:bg-red-700 active:scale-95 duration-500 ">
                          Delete
                        </Button>
                      </AlertDialogTrigger>

                      {/* alert content  */}
                      <AlertDialogContent>
                        {/* header and content type  */}
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete your account and remove your data from our
                            servers.
                          </AlertDialogDescription>
                        </AlertDialogHeader>

                        {/* bottom button type  */}
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleDeleteItem(product?._id)}
                          >
                            Continue
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </TableCell>
                </TableRow>
              ))}

            {/* table row ends  */}
          </TableBody>
          {/* table body ends  */}
        </Table>
        {/* table  */}

        {/*  */}
      </div>
    </div>
  );
};

export default ProductTable;
