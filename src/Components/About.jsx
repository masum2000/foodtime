import React from 'react';

const About = () => {
    return (
        <div>
             <section className="flex flex-col-reverse md:flex-row items-center justify-between py-12 px-4 bg-gray-100">
      {/* Left Content */}
      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="text-lg mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam purus ac luctus
          eleifend. Nullam bibendum tristique ligula, ac iaculis quam fermentum sed.
        </p>
        <button className="bg-blue-500 text-white font-bold rounded-lg py-2 px-4">
          Learn More
        </button>
      </div>

      {/* Right Content */}
      <div className="md:w-1/2 mt-6 md:mt-0">
        <img
          src="/path/to/image.jpg"
          alt="Image"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </section>
        </div>
    );
};

export default About;