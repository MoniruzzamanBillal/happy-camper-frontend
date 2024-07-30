import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import TeamMember from "@/components/ui/TeamMember";
import MapContainer from "@/components/ui/MapContainer";

const AboutUs = () => {
  return (
    <div className="AboutUsContainer bg-gray-100 py-8 ">
      <div className="aboutUsWrapper   ">
        <h1 className=" mb-6  md:mb-8 xmd:mb-12 lg:mb-14 text-center font-semibold text-indigo-500 text-lg xsm:text-xl sm:text-3xl md:text-3xl xl:text-4xl text-shadow-blue">
          About us
        </h1>

        <div className="bodyContent flex flex-col gap-y-14 ">
          {/* mission statement  */}
          <div className="missionStatement w-[96%] sm:w-[92%] md:w-[90%] m-auto  ">
            <h1 className="font-semibold text-3xl mb-4 ">Our mission </h1>
            <p className=" font-medium text-lg text-gray-700 ">
              At Camper Shop, our mission is to inspire and equip outdoor
              enthusiasts with the highest quality camping gear and accessories.
              We believe in the power of nature to rejuvenate the spirit, and we
              are committed to providing our customers with the tools they need
              to explore the great outdoors safely and comfortably. Our core
              values of adventure, sustainability, and customer satisfaction
              guide everything we do, from the products we offer to the customer
              service we provide. We aim to foster a community of campers who
              share our passion for nature and adventure.
            </p>
          </div>

          {/* team member section  */}
          <div className="teamMember">
            <TeamMember />
          </div>

          {/* contact section  */}
          <div className="contactStatement w-[96%] sm:w-[92%] md:w-[90%] m-auto ">
            <h1 className="font-semibold text-3xl mb-8 ">Contact us </h1>
            <p className=" font-medium  text-gray-700 mb-2 ">
              <span className=" font-bold "> phone :</span> 019064545
            </p>
            <p className=" font-medium  text-gray-700 mb-2 ">
              <span className=" font-bold "> Email :</span> abc@d.com
            </p>
            <p className=" font-medium  text-gray-700 mb-2 ">
              <span className=" font-bold "> Address :</span> joydebpur ,
              Gazipur
            </p>

            {/* social media link   */}
            <div className=" mt-8 flex flex-col gap-y-3 ">
              <div className="mr-12 hidden lg:block">
                <span className=" font-medium  text-gray-700  ">
                  Get connected with us on social networks:
                </span>
              </div>
              {/* <!-- Social network icons container --> */}
              <div className="flex ">
                {/* facebook icon  */}
                <Link
                  to={"https://www.facebook.com/"}
                  className="mr-6 text-3xl text-neutral-600 hover:text-blue-700"
                >
                  <FaFacebook />
                </Link>

                {/* linkedin icon  */}
                <Link
                  to={"https://bd.linkedin.com/"}
                  className="mr-6 text-3xl text-neutral-600 hover:text-blue-800"
                >
                  <FaLinkedin />
                </Link>
                {/* github icon  */}
                <Link
                  to={"https://github.com/MoniruzzamanBillal"}
                  className="mr-6 text-3xl text-neutral-600 hover:text-neutral-800"
                >
                  <FaGithub />
                </Link>
              </div>
            </div>

            {/*  */}
          </div>

          {/* map section starts  */}
          <div className=" mt-6 mapSection  w-[96%] sm:w-[92%] md:w-[90%] m-auto">
            <MapContainer />
          </div>
          {/* map section ends */}

          {/*  */}
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default AboutUs;
