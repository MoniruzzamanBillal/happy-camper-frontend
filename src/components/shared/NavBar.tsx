import { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

const Links = [
  { name: "Home", link: "/" },
  { name: "About us", link: "/about-us" },
  { name: "products", link: "/products" },
  { name: "Manage products", link: "/all-product" },
  { name: "Cart", link: "/cart" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="  shadow-md w-full fixed top-0 left-0 z-10 "
      style={{
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="  flex items-center justify-between py-1 w-[90%] m-auto   ">
        {/* logo section */}
        <div className="imgContainer  ">
          <Link to={"/"}>
            <div className=" text-2xl cursor-pointer flex items-center  gap-x-2">
              <img
                src="https://i.ibb.co/TL2yHhb/Daco-4947937.png"
                className="  w-[3rem] sm:w-[4rem]"
                alt="logo"
              />

              <p className=" text-2xl sm:text-3xl font-bold font-headingFont ">
                Happy <span className="   text-indigo-500">campers</span>{" "}
              </p>
            </div>
          </Link>
        </div>

        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="   flex justify-center items-center   cursor-pointer md:hidden  font-semibold  text-2xl "
        >
          {open ? <RiCloseFill className="  " /> : <RiMenu3Fill />}
        </div>
        {/* linke items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:bg-transparent bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-10 transition-all duration-300 ease-in text-xs xsm:text-sm sm:text-base md:text-xs xmd:text-sm lg:text-base  ${
            open ? "top-[3.2rem] block" : "top-[-490px]"
          }`}
          style={{
            backdropFilter: "blur(8px)",
          }}
        >
          {Links &&
            Links.map((link, index) => (
              <li
                key={index}
                className="md:ml-8 md:my-0 my-7 font-semibold uppercase"
              >
                <Link
                  to={link.link}
                  className="text-gray-700 hover:text-[#017dfc] duration-500"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
