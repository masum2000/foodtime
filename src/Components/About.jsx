import React from 'react';
import  "./About.css"

const About = () => {
  return (
    <div>
      <section className="flex flex-col-reverse md:flex-row items-center justify-between py-12 px-4  w-10/12 mx-auto">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">Explore your favourite city’s food.</h2>
          <p className="font-bold mb-6">
            Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh tristique. Non ligula tristique ut ut libero sit convallis maecenas. At egestas auctor porta mattis.
          </p>
          <button className="bg-green-700 text-white font-bold rounded-full py-2 px-4">
            Explore
          </button>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 mt-6 md:mt-0">
          <div className='relative'>
            <img
              src="https://i.ibb.co/89TGk78/image-2.png"
              alt="Image"
              className="w-full h-auto rounded-lg "
            />
            <img 
            src='https://i.ibb.co/6tnnGjN/too-much-orders-contacless-delivery-service-during-quarantine-man-delivers-food-during-isolation-wea.png'
            className="w-full h-auto rounded-lg absolute top-0 cycle-rider"
            />
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default About;