import HeroBanner from "../components/ui/HeroBanner";
import BestSeller from "./../components/ui/BestSeller";
import FAQsection from "./../components/ui/FAQsection";
import CategoryComponent from "./../components/ui/CategoryComponent";

const HomePage = () => {
  return (
    <div className="HomePageContainer  ">
      <HeroBanner />
      <BestSeller />
      <CategoryComponent />
      <FAQsection />
    </div>
  );
};

export default HomePage;
