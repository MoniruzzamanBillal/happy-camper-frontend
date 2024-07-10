import Navbar from "../shared/NavBar";

const MainLayout = () => {
  return (
    <div className="MainLayoutContainer">
      {/* nav starts  */}
      <div className="navContainer">
        <Navbar />
      </div>
      {/* nav ends */}
    </div>
  );
};

export default MainLayout;
