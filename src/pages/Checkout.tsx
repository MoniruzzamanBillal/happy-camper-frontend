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
import { useGetCartQuery } from "@/redux/features/cart/cart.api";
import { clearCartItem } from "@/redux/features/cart/cart.slice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { TCartItrm } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const { cartProduct } = useAppSelector((state) => state.cart);
  const { data: cartData, isLoading } = useGetCartQuery(undefined);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [orderMethos, setOrderMethod] = useState("");

  // console.log(cartProduct);

  // ! Validation function
  const validateInputs = () => {
    if (!name || !email || !phone || !address || !orderMethos) {
      toast.error("Please fill in all fields!");
      return false;
    }
    return true;
  };

  // ! for placing order
  const handlePlaceOrder = async () => {
    if (!validateInputs()) {
      return;
    }

    const toastId = toast.loading("Placing order !! ");

    try {
      const orderData = {
        userName: name,
        userEmail: email,
        products: cartProduct,
        oprice: totalPrice,
      };

      // const result = await axios.post(
      //   "http://localhost:5000/api/v1/order/add-order",
      //   orderData
      // );
      const result = await axios.post(
        "https://camper-shop-server.vercel.app/api/v1/order/add-order",
        orderData
      );

      // console.log(result?.data);

      if (result?.data?.success) {
        toast.success("Order completed successfully !!! ", { id: toastId });
        dispatch(clearCartItem());

        setTimeout(() => {
          navigate("/order-success");
        }, 1200);
      }
    } catch (error) {
      console.log(error);
      toast.error("can not complete ordder !! ", { id: toastId });
    }

    //
  };

  // ! for calculatilng total price
  useEffect(() => {
    let total = 0;

    if (cartData?.data) {
      total = cartData?.data.reduce((total: number, item: TCartItrm) => {
        return total + item?.pprice * item?.oquantity;
      }, 0);
    }

    setTotalPrice(total);
  }, [cartData, isLoading]);

  if (isLoading) {
    return <p>loading ... </p>;
  }

  return (
    <div className="CheckoutContainer bg-gray-100 py-8 ">
      <div className="checkoutWrapper w-[96%] sm:w-[92%] md:w-[90%] m-auto ">
        <h1 className=" mb-6  md:mb-8 xmd:mb-12 lg:mb-14 text-center font-semibold text-indigo-500 text-lg xsm:text-xl sm:text-3xl md:text-3xl xl:text-4xl text-shadow-blue">
          Payment Details
        </h1>

        {/* form section starts  */}
        <div className="formSection w-[95%] xsm:w-[85%] sm:w-[80%] md:w-[70%] xmd:w-[60%] lg:w-[50%] m-auto  bg-gray-50 shadow-md rounded border border-gray-300 py-6 px-8 ">
          {/* name input section  */}

          <div className="mx-auto grid max-w-screen-md gap-8 sm:grid-cols-2">
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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
                value={address}
                onChange={(e) => setAddress(e.target.value)}
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

              <Select onValueChange={(value) => setOrderMethod(value)}>
                <SelectTrigger className="w-[200px] outline-none border border-gray-400 focus:ring-0  ">
                  <SelectValue placeholder="Select payment method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="cod">Cash on delivery</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/*  */}
            </div>

            <div className="flex items-center justify-between sm:col-span-2">
              <Button
                className="inline-block rounded-lg bg-indigo-500 px-8  text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
                onClick={() => handlePlaceOrder()}
              >
                Place Order
              </Button>
            </div>
          </div>

          {/*  */}
        </div>
        {/* form section ends  */}

        {/*  */}
      </div>
    </div>
  );
};

export default Checkout;
