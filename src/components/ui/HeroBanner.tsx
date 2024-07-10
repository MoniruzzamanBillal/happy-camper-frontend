import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

import HeroBannerCard from "./HeroBannerCard";

export type TBanner = {
  subHeading: string;
  heading: string;
  description: string;
  bannerImg: string;
};

const bannerInfo: TBanner[] = [
  {
    subHeading: " The Biggest Selection of Quality Camping Gear",
    heading: " Welcome to Campers Shop: Your Gateway to Outdoor Bliss",
    description:
      " Embark on your next adventure with Campers Shop, where outdoor enthusiasts find everything they need for memorable camping experiences. Explore a curated collection of premium gear, from robust tents to cozy campfire essentials, ensuring comfort and excitement under every starlit sky. Join us as we equip you with the tools and gear to turn every trip into an unforgettable journey. Start exploring today!",
    bannerImg: "https://i.ibb.co/3RGgzzw/img1.jpg",
  },

  {
    subHeading: " Explore the Best in Camping Essentials",
    heading: "Your Ultimate Camping Gear Destination",
    description:
      "Welcome to Campers Shop, where adventure begins! Discover our extensive selection of top-quality camping gear designed to make every trip unforgettable. From durable tents to cozy sleeping bags, we have everything you need for your next outdoor adventure. Start exploring now and gear up for an amazing experience in the great outdoors.",
    bannerImg: "https://i.ibb.co/x53SCDV/img2.jpg",
  },

  {
    subHeading: " Adventure Awaits: Gear Up with Campers Shop",
    heading: "Explore the Best in Camping Essentials",
    description:
      "Step into the world of Campers Shop and find the best gear for your outdoor adventures. We offer a wide range of camping essentials, from innovative gadgets to reliable gear, all crafted to enhance your camping experience. Embrace the wild with confidence, knowing you have the best equipment at your side. Shop now and start your adventure.",
    bannerImg: "https://i.ibb.co/d0FcXRF/img3.jpg",
  },
];

const HeroBanner = () => {
  return (
    <div className="heroBannerContainer ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {bannerInfo &&
          bannerInfo.map((banner, ind) => (
            <SwiperSlide>
              <HeroBannerCard key={ind} banner={banner} />
            </SwiperSlide>
          ))}
      </Swiper>
      {/* <HeroBannerCard /> */}
    </div>
  );
};

export default HeroBanner;
