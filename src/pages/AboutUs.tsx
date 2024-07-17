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
              At Campers Shop, our mission is to inspire and equip camping
              enthusiasts with high-quality, reliable, and innovative gear that
              enhances their outdoor adventures. We are committed to providing
              exceptional customer service, fostering a community of outdoor
              enthusiasts, and promoting sustainable practices to protect the
              natural environments we love to explore. Our values of integrity,
              passion for the outdoors, and dedication to customer satisfaction
              drive everything we do, ensuring that every camper can create
              unforgettable memories in the great outdoors.
            </p>
          </div>

          {/* team member section  */}
          <div className="teamMember">
            <TeamMember />
          </div>

          {/* contact section  */}
          <div className="contactStatement w-[96%] sm:w-[92%] md:w-[90%] m-auto ">
            <h1 className="font-semibold text-3xl mb-4 ">Contact us </h1>
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
            <div className="  flex flex-col gap-y-3 ">
              <div className="mr-12 hidden lg:block">
                <span className=" font-medium  text-gray-700  ">
                  Get connected with us on social networks:
                </span>
              </div>
              {/* <!-- Social network icons container --> */}
              <div className="flex ">
                {/* facebook icon  */}
                <Link
                  to={""}
                  className="mr-6 text-3xl text-neutral-600 hover:text-blue-700"
                >
                  <FaFacebook />
                </Link>

                {/* linkedin icon  */}
                <Link
                  to={""}
                  className="mr-6 text-3xl text-neutral-600 hover:text-blue-800"
                >
                  <FaLinkedin />
                </Link>
                {/* github icon  */}
                <Link
                  to={""}
                  className="mr-6 text-3xl text-neutral-600 hover:text-neutral-800"
                >
                  <FaGithub />
                </Link>
              </div>
            </div>

            {/*  */}
          </div>

          {/* map section starts  */}
          <div className="mapSection  w-[96%] sm:w-[92%] md:w-[90%] m-auto">
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
