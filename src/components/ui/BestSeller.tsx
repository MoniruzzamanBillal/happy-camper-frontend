import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import BestSellerCard from "./BestSellerCard";

// import required modules
import { Autoplay } from "swiper/modules";
import { useGetAllProductQuery } from "@/redux/features/product/product.api";
import Loading from "./loading/Loading";

const BestSeller = () => {
  const { data: featuredProducts, isLoading } = useGetAllProductQuery({
    limit: 6,
  });

  // console.log(featuredProducts?.data);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="BestSellerContainer bg-gray-100 py-8">
      <div className="BestSellerWrapper w-[96%] sm:w-[92%] md:w-[90%] m-auto ">
        <h1 className=" mb-6  md:mb-8 xmd:mb-12 lg:mb-14 text-center font-semibold text-indigo-500 text-lg xsm:text-xl sm:text-3xl md:text-3xl xl:text-4xl text-shadow-blue">
          Recommedned products
        </h1>

        {/* best seller items starts  */}
        <div className="bestSellerItem   ">
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              600: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            centeredSlides={true}
            spaceBetween={30}
            grabCursor={true}
            autoplay={{
              delay: 1800,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {featuredProducts?.data &&
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              featuredProducts?.data?.map((item: any, ind: number) => (
                <SwiperSlide>
                  <BestSellerCard key={ind} item={item} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        {/* best seller items ends  */}

        {/*  */}
      </div>
    </div>
  );
};

export default BestSeller;
