
import "./Banner.css";
const Banner = () => {
    return (
        <div className='bg-[#F)F$EC] container mx-auto'>
            <section className="lg:flex sm:block gap-44 container w-full mx-auto">
      {/* Left Content */}
      <div className="pt-24 w-1/2 mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-green-600">  Order food online from your favourite local restaurants.</h2>
        <p className="text-lg font-bold mb-6">Freshly made food delivered to your door.</p>
        <div className="flex items-center mb-6">
          <input
            type="text"
            placeholder="Enter Your Location"
            className="border border-gray-300 rounded-lg py-2 px-4 w-full"
          />
          <button className="border bg-green-700 font-bold border-white rounded-full py-2 text-white px-4 text-sm hover:bg-green-300 hover:text-black">
            Search
          </button>
        </div>
        <img className="absolute top-0 left-0" src="https://i.ibb.co/LhsGnZ8/Pngtree-hand-painted-noise-green-leaf-element-4054582-1-2.png"></img>
      </div>
      {/* https://i.ibb.co/DtfFyRq/image-1.png */}

      {/* Right Content */}
      <div className="w-1/2">
        <img
          src="https://i.ibb.co/DtfFyRq/image-1.png"
          alt="Image"
          className="absolute z-10"
        />
        <img className='relative -right-96 -top-12 ' src="https://i.ibb.co/qMdP9f8/Pngtree-hand-painted-noise-green-leaf-element-4054582-1-1.png" alt="" />
        <img className="relative  -top-96 right-12 mb-10 " src="https://i.ibb.co/P5GwJKQ/Nice-Png-plate-of-food-png-546030-1.png"></img>
      </div>


    </section>
            
        </div>
    );
};

export default Banner;