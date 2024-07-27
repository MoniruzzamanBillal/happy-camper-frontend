import GlassZoomImage from "@/utills/GlassZoomImage";

const Test = () => {
  return (
    <div className="TestContainer bg-gray-100 py-8 min-h-screen ">
      <div className="TestWrapper w-[96%] sm:w-[92%] md:w-[90%] m-auto ">
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <GlassZoomImage imageSrc="https://adamrisberg.github.io/react-image-magnifiers/4700d4cb26b14563be996aa5f0c53ca2.jpg" />
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default Test;
