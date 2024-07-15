import CamperForm from "@/components/form/CamperForm";
import CamperInput from "@/components/form/CamperInput";
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
import { FieldValues } from "react-hook-form";

const Test = () => {
  //    !  for adding new product
  const handleAddProduct = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="TestContainer bg-gray-100 py-8 min-h-screen ">
      <div className="TestWrapper w-[96%] sm:w-[92%] md:w-[90%] m-auto ">
        {/* new product add  container starts  */}
        <div className="addNewProduct bg-red-100 mb-4 ">
          <AlertDialog>
            {/* alert trigger  */}
            <AlertDialogTrigger asChild>
              <Button className=" px-3 xsm:px-4 sm:px-5 md:px-6 font-semibold text-xs sm:text-sm md:text-base bg-green-600 hover:bg-green-700 active:scale-95 duration-500 ">
                Add new product
              </Button>
            </AlertDialogTrigger>

            {/* alert content  */}
            <AlertDialogContent>
              {/* header and content type  */}
              <AlertDialogHeader>
                <AlertDialogTitle>Add new product : </AlertDialogTitle>

                {/* form starts  */}
                <CamperForm onSubmit={handleAddProduct}>
                  <CamperInput type="text" label="Name :" name="name" />

                  <Button className=" px-3 xsm:px-4 sm:px-5 md:px-6 font-semibold text-xs sm:text-sm md:text-base bg-green-600 hover:bg-green-700 active:scale-95 duration-500 ">
                    Add product
                  </Button>
                </CamperForm>
                {/* form ends  */}
              </AlertDialogHeader>
            </AlertDialogContent>
          </AlertDialog>

          {/*  */}
        </div>
        {/* new product add  container ends */}

        {/* table  */}
        <Table className="bg-gray-50 m-auto border border-gray-300 shadow-md rounded-md text-center  ">
          <TableHeader>
            <TableRow className=" text-sm sm:text-base md:text-lg font-medium text-center text-gray-800 ">
              <TableHead className="text-center text-gray-800">Name</TableHead>
              <TableHead className="text-center text-gray-800 ">
                Category
              </TableHead>
              <TableHead className="text-center text-gray-800">Image</TableHead>
              <TableHead className="text-center text-gray-800">Price</TableHead>
              <TableHead className="text-center text-gray-800">
                Update
              </TableHead>
              <TableHead className="text-center text-gray-800">
                Delete
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="  text-xs sm:text-sm md:text-base text-gray-600 ">
            {/* table row starts  */}
            <TableRow className="font-medium">
              <TableCell>Product name</TableCell>
              <TableCell>Product category</TableCell>
              <TableCell className="flex justify-center items-center">
                <img
                  className="size-[2rem] xsm:size-[2.5rem] sm:size-[3rem]"
                  src="https://i.ibb.co/DtqW079/sleeping-Bag.jpg"
                  alt=""
                />
              </TableCell>
              <TableCell>Product price</TableCell>
              <TableCell>
                <Button className=" px-3 xsm:px-4 sm:px-5 md:px-6 font-semibold text-xs sm:text-sm md:text-base bg-green-600 hover:bg-green-700 active:scale-95 duration-500 ">
                  Update
                </Button>
              </TableCell>
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
        </Table>
        {/* table  */}
      </div>
    </div>
  );
};

export default Test;
