import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay } from "swiper/modules";
import TestimonialCard from "./TestimonialCard";

export type TTestimonial = {
  review: string;
  name: string;
  img: string;
};

const testimonials: TTestimonial[] = [
  {
    review:
      "I bought a tent from Camper Shop for our family camping trip, and it exceeded all expectations. The quality was top-notch, and the customer service was excellent. They even provided tips on setting it up. Highly recommend!",
    name: "Abu Ubaida",
    img: "https://i.ibb.co/Kqrjj24/Doc-P-754782-638436953125887126.png",
  },
  {
    review:
      "As an avid hiker, I've been searching for a reliable source for camping gear. Camper Shop has it all! From durable backpacks to cooking gear, I've found everything I need for my adventures. The product descriptions are accurate, and delivery was swift. I'll definitely be coming back for more!",
    name: "Ismail Hania",
    img: "https://i.ibb.co/FxHzzq7/images.jpg",
  },
  {
    review:
      "I recently bought a sleeping bag and a portable stove from Camper Shop. Both products were fantastic—comfortable, durable, and perfect for my outdoor needs. The site was easy to navigate, and I loved the detailed FAQs that helped me choose the right products. Five stars all the way!",
    name: "Abdel Malek ",
    img: "https://i.ibb.co/X3QBnnF/Abdel-Malik-al-Houthi-blue-background-png.jpg",
  },

  {
    review:
      "Camper Shop has quickly become my go-to place for all my camping needs. The selection of gear is fantastic, and the prices are unbeatable. I appreciate the eco-friendly options they offer, and the staff is always helpful and knowledgeable. My latest purchase, a weather-resistant jacket, was worth every penny!",
    name: "Yahya Sinwar",
    img: "https://i.ibb.co/bdpwbzK/131779399-yahya-sinwar-epa.jpg",
  },

  {
    review:
      "I've been shopping at Camper Shop for all my camping essentials, and I've never been disappointed. The gear is reliable, and the team always provides great recommendations based on my needs. It's clear they know their stuff and care about their customers' experiences.",
    name: "Seikh Tamim",
    img: "https://i.ibb.co/qgw9Mkf/emir-qatar-sheikh-tamim-bin-hamad-al-440nw-10143881d.jpg",
  },
];

const Testimonial = () => {
  return (
    <div className="TestimonialContainer py-10 bg-gray-50 ">
      <div className="TestimonialWrapper w-[96%] sm:w-[92%] md:w-[90%] m-auto ">
        <h1 className=" mb-3  md:mb-4 lg:mb-6 text-center font-semibold text-indigo-500 text-xl xsm:text-2xl sm:text-3xl md:text-3xl xl:text-4xl text-shadow-blue ">
          What others say about us
        </h1>

        <div className="testimonialCardContainer">
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
            // navigation={true}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {testimonials &&
              testimonials?.map((testimonial: TTestimonial, ind: number) => (
                <SwiperSlide key={ind}>
                  {/* testimonial starts  */}
                  <TestimonialCard testimonial={testimonial} />
                  {/* testimonial ends  */}
                </SwiperSlide>
              ))}

            {/*  */}

            {/*  */}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
