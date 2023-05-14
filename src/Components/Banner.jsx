
import "./Banner.css";
const Banner = () => {
    return (
        <div className='bg-[#F)F$EC] relative'>
            <section className="flex flex-col md:flex-row items-center justify-between py-12 px-4 w-10/12 mx-auto ">
      {/* Left Content */}
      <div className="md:w-2/5">
        <h2 className="text-4xl font-bold mb-4 text-green-600">  Order food online from your favourite local restaurants.</h2>
        <p className="text-lg font-bold mb-6">Freshly made food delivered to your door.</p>
        <div className="flex items-center mb-6">
          <input
            type="text"
            placeholder="Enter Your Location"
            className="border border-gray-300 rounded-lg py-2 px-4 w-full"
          />
          <button className="bg-green-700 rounded-full text-white font-bold py-2 px-4 ml-4">
            Search
          </button>
        </div>
        <img className="absolute top-0 left-0" src="https://i.ibb.co/LhsGnZ8/Pngtree-hand-painted-noise-green-leaf-element-4054582-1-2.png"></img>
      </div>
      {/* https://i.ibb.co/DtfFyRq/image-1.png */}

      {/* Right Content */}
      <div className="md:w- mt-6 md:mt-0 ">
        <img
          src="https://i.ibb.co/DtfFyRq/image-1.png"
          alt="Image"
          className=""
        />
        <img className='absolute right-4 top-0 ' src="https://i.ibb.co/qMdP9f8/Pngtree-hand-painted-noise-green-leaf-element-4054582-1-1.png" alt="" />
        <img className="absolute left- top-8 mb-10 " src="https://i.ibb.co/P5GwJKQ/Nice-Png-plate-of-food-png-546030-1.png"></img>
      </div>


    </section>
            
        </div>
    );
};

export default Banner;