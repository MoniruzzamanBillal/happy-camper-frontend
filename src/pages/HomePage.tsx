import HeroBanner from "../components/ui/HeroBanner";
import BestSeller from "../components/ui/BestSeller";
import FAQsection from "../components/ui/FAQsection";

import CategoryComponent from "../components/ui/CategoryComponent";
import FeaturedProducts from "@/components/ui/FeaturedProducts";
import Testimonial from "@/components/ui/Testimonial";

const HomePage = () => {
  return (
    <div className="HomePageContainer  ">
      <HeroBanner />
      <BestSeller />
      <CategoryComponent />
      <FeaturedProducts />
      <Testimonial />
      <FAQsection />
    </div>
  );
};

export default HomePage;
