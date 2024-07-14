import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const TeamMember = () => {
  return (
    <div className="TeamMemberContainer ">
      <div className="bg-white py-6 sm:py-8 lg:py-12   ">
        <div className="mx-auto max-w-screen-xl w-[96%] sm:w-[92%] md:w-[90%] m-auto  ">
          {/* text - start  */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Meet our Team
            </h2>
          </div>
          {/* text - end  */}

          <div className="grid grid-cols-1 xsm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
            {/* person - start  */}
            <div className="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8 w-[70%] xsm:w-full m-auto ">
              <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
                <img
                  src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=256"
                  loading="lazy"
                  alt="Photo by Radu Florin"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div>
                <div className="text-center font-bold text-indigo-500 md:text-lg">
                  John McCulling
                </div>
                <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">
                  Founder / CEO
                </p>

                {/* social - start  */}
                <div className="flex justify-center">
                  <div className="flex gap-5">
                    {/* facebook icon  */}
                    <Link
                      to={""}
                      className=" text-2xl text-neutral-600 hover:text-blue-700"
                    >
                      <FaFacebook />
                    </Link>

                    {/* linkedin icon  */}
                    <Link
                      to={""}
                      className=" text-2xl text-neutral-600 hover:text-blue-800"
                    >
                      <FaLinkedin />
                    </Link>
                    {/* github icon  */}
                    <Link
                      to={""}
                      className=" text-2xl text-neutral-600 hover:text-neutral-800"
                    >
                      <FaGithub />
                    </Link>
                  </div>
                </div>
                {/* social - end  */}
              </div>
            </div>
            {/* person - end  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
