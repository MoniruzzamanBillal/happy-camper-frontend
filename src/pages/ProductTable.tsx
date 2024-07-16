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
import { Link } from "react-router-dom";

const ProductTable = () => {
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
            <TableRow className="font-medium">
              {/* product name  */}
              <TableCell>Product name</TableCell>
              {/* product Category  */}
              <TableCell>Product category</TableCell>
              {/* product image  */}
              <TableCell className="flex justify-center items-center">
                <img
                  className="size-[2rem] xsm:size-[2.5rem] sm:size-[3rem]"
                  src="https://i.ibb.co/DtqW079/sleeping-Bag.jpg"
                  alt=""
                />
              </TableCell>
              {/* product price  */}
              <TableCell>Product price</TableCell>
              {/* update button   */}
              <TableCell>
                <Link to={"/update-product/123456"}>
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
                      <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
            </TableRow>
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
