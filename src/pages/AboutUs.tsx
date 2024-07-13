const AboutUs = () => {
  return (
    <div className="AboutUsContainer bg-gray-100 py-8 ">
      <div className="aboutUsWrapper w-[96%] sm:w-[92%] md:w-[90%] m-auto  ">
        <h1 className=" mb-6  md:mb-8 xmd:mb-12 lg:mb-14 text-center font-semibold text-indigo-500 text-lg xsm:text-xl sm:text-3xl md:text-3xl xl:text-4xl text-shadow-blue">
          About us
        </h1>

        <div className="bodyContent flex flex-col gap-y-14 ">
          {/* mission statement  */}
          <div className="missionStatement  ">
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

          {/* contact section  */}
          <div className="contactStatement  ">
            <h1 className="font-semibold text-3xl mb-4 ">Contact us </h1>
            <p className=" font-medium  text-gray-700 mb-2 ">
              <span className=" font-bold "> phone :</span> 019064545
            </p>
            <p className=" font-medium  text-gray-700 mb-2 ">
              <span className=" font-bold "> Email :</span> abc@d.com
            </p>
            <p className=" font-medium  text-gray-700  ">
              <span className=" font-bold "> Address :</span> joydebpur ,
              Gazipur
            </p>
          </div>

          {/*  */}
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default AboutUs;
