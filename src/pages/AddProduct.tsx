const AddProduct = () => {
  return (
    <div className="AddProductContainer py-8 bg-gray-100 ">
      <div className="AddProductWrapper w-[96%] sm:w-[92%] md:w-[90%] m-auto ">
        <h1 className=" mb-6  md:mb-8 xmd:mb-12 lg:mb-14 text-center font-semibold text-indigo-500 text-lg xsm:text-xl sm:text-3xl md:text-3xl xl:text-4xl text-shadow-blue">
          Add product
        </h1>

        {/* table container starts  */}
        <div className="tableContainer  flex justify-center items-center ">
          <table className=" ">
            <thead>
              <tr>
                {/* parcel type  */}
                <th className=" text-center px-2 py-2 border-b-2 border-gray-300 leading-4 text-blue-500 ">
                  User name
                </th>
                {/* parcel type  */}

                {/* requested deliveryc date  */}
                <th className="text-center px-2 py-2 border-b-2 border-gray-300  leading-4 text-blue-500">
                  Phone numbere
                </th>
                {/* requested deliveryc date  */}

                {/* approximate delivery date  */}
                <th className=" text-center px-2 py-2 border-b-2 border-gray-300  leading-4 text-blue-500">
                  Number of parcel booked
                </th>
                {/* approximate delivery date  */}

                {/* Booking Date delivery date  */}
                <th className="text-center px-2 py-2 border-b-2 border-gray-300  leading-4 text-blue-500">
                  Make delivery man
                </th>
                {/* Booking Date delivery date  */}

                {/* Delivery Men ID  */}
                <th className="text-center px-2 py-2 border-b-2 border-gray-300  leading-4 text-blue-500">
                  Make admin
                </th>
                {/*Delivery Men ID  */}
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="  py-2 px-2 text-left leading-4    border-b border-gray-500">
                  <div className="flex items-center justify-center ">
                    <div>
                      <div className="text-sm leading-5 text-gray-800">
                        user name
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-2 px-2  text-left leading-4  border-b border-gray-500">
                  <div className="text-sm leading-5 text-blue-900 flex items-center justify-center">
                    01906464820
                  </div>
                </td>
                <td className="py-2 px-2  text-left leading-4  border-b border-gray-500 ">
                  <div className="flex items-center justify-center">0</div>
                </td>
                <td className="py-2 px-2 text-left leading-4  border-b border-gray-500">
                  <div className="flex items-center justify-center bg-violet-500 py-2 rounded-md text-sm font-semibold cursor-pointer active:scale-95 ">
                    Make delivery man
                  </div>
                </td>
                <td className="py-2 px-2  text-left leading-4  border-b border-gray-500">
                  <div className="flex items-center justify-center bg-green-500 py-2 rounded-md text-sm font-semibold  cursor-pointer active:scale-95 ">
                    Make Admin
                  </div>
                </td>
                {/*  */}
              </tr>

              {/*  */}
            </tbody>
          </table>
        </div>
        {/* table container ends */}

        {/*  */}
      </div>
    </div>
  );
};

export default AddProduct;
