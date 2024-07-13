import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Checkout = () => {
  return (
    <div className="CheckoutContainer bg-gray-100 py-8 ">
      <div className="checkoutWrapper w-[96%] sm:w-[92%] md:w-[90%] m-auto ">
        <h1 className=" mb-6  md:mb-8 xmd:mb-12 lg:mb-14 text-center font-semibold text-indigo-500 text-lg xsm:text-xl sm:text-3xl md:text-3xl xl:text-4xl text-shadow-blue">
          Payment Details
        </h1>

        {/* form section starts  */}
        <div className="formSection w-[95%] xsm:w-[85%] sm:w-[80%] md:w-[70%] xmd:w-[60%] lg:w-[50%] m-auto  bg-gray-50 shadow-md rounded border border-gray-300 py-6 px-8 ">
          {/* name input section  */}

          <form className="mx-auto grid max-w-screen-md gap-8 sm:grid-cols-2">
            {/* name input  */}
            <div className="sm:col-span-2">
              <Label
                htmlFor="name"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Name:
              </Label>

              <Input
                type="text"
                id="name"
                placeholder="Enter your name"
                className=" bg-gray-100 w-full rounded border border-gray-300 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>

            {/* email input  */}
            <div className="sm:col-span-2">
              <Label
                htmlFor="email"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Email:
              </Label>

              <Input
                type="email"
                id="email"
                placeholder="Enter your email"
                className=" bg-gray-100 w-full rounded border border-gray-300 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>

            {/* phone number input starts  */}
            <div className="sm:col-span-2">
              <Label
                htmlFor="phone"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Phone:
              </Label>

              <Input
                type="number"
                id="phone"
                placeholder="Enter your phone number"
                className=" bg-gray-100 w-full rounded border border-gray-300 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>

            {/* address input section  */}
            <div className="sm:col-span-2">
              <Label
                htmlFor="address"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Address :
              </Label>

              <Input
                type="text"
                id="address"
                placeholder="Enter your address"
                className=" bg-gray-100 w-full rounded border border-gray-300 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>

            {/* payment method  */}
            <div className=" sm:col-span-2 paymentMethod flex items-center gap-x-1 ">
              <Label
                htmlFor=""
                className=" inline-block  text-gray-800 sm:text-base"
              >
                Payment method :
              </Label>

              <Select>
                <SelectTrigger className="w-[200px] outline-none border border-gray-400 focus:ring-0  ">
                  <SelectValue placeholder="Select payment method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value=" ">Cash on delivery</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/*  */}
            </div>

            <div className="flex items-center justify-between sm:col-span-2">
              <Button className="inline-block rounded-lg bg-indigo-500 px-8  text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                Place Order
              </Button>
            </div>
          </form>

          {/*  */}
        </div>
        {/* form section ends  */}

        {/*  */}
      </div>
    </div>
  );
};

export default Checkout;
