import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import BestSellerCard from "./BestSellerCard";

// import required modules
import { Autoplay } from "swiper/modules";

export type TBestSeller = {
  prodImg: string;
  prodName: string;
};

const bestSellerInfo: TBestSeller[] = [
  {
    prodImg: "https://i.ibb.co/DtqW079/sleeping-Bag.jpg",
    prodName: "Sleeping Bag",
  },
  {
    prodImg: "https://i.ibb.co/brvH1CW/tent.png",
    prodName: "Tent",
  },

  {
    prodImg: "https://i.ibb.co/njCXgZ9/kitchen.jpg",
    prodName: "Kitchen",
  },

  {
    prodImg: "https://i.ibb.co/TY3Zzbc/charcoal.jpg",
    prodName: "Char coal",
  },
  {
    prodImg: "https://i.ibb.co/3Fr7bsx/lantern.jpg",
    prodName: "Lantern",
  },
  {
    prodImg: "https://i.ibb.co/3hHSXT4/tool.jpg",
    prodName: "Multifunctional Tool",
  },
];

const BestSeller = () => {
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
            {bestSellerInfo &&
              bestSellerInfo?.map((item, ind) => (
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
