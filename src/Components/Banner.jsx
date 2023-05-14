import React from 'react';

const Banner = () => {
    return (
        <div className='bg-[#F)F$EC]'>
            <section className="flex flex-col md:flex-row items-center justify-between py-12 px-4  max-w-7xl mx-auto ">
      {/* Left Content */}
      <div className="md:w-2/5">
        <h2 className="text-4xl font-bold mb-4">Header</h2>
        <p className="text-lg mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="flex items-center mb-6">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-lg py-2 px-4 w-full"
          />
          <button className="bg-white text-blue-500 font-bold rounded-lg py-2 px-4 ml-4">
            Search
          </button>
        </div>
      </div>

      {/* Right Content */}
      <div className="md:w-3/5 mt-6 md:mt-0 relative">
        <img
          src="https://i.ibb.co/DtfFyRq/image-1.png"
          alt="Image"
          className=""
        />
        <img className='absolute top-0 right-0 ' src="https://i.ibb.co/kDjjntT/Pngtree-hand-painted-noise-green-leaf-element-4054582-1.png" alt="" />
      </div>
    </section>
            
        </div>
    );
};

export default Banner;