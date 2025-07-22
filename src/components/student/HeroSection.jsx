import React from "react";
import heroImg1 from "../../assets/heroImg1.png";
import heroImg2 from "../../assets/heroImg2.png";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 to-white lg:py-20">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side */}
        <div className="w-full lg:w-1/2 text-center lg:text-left ">
          <p className="text-sm tracking-widest text-gray-500 uppercase mb-2 mt-4 sm:mt-0">
             Empowering Future Doctors & Engineers
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-snug">
            Take student <br /> experience to the next level
          </h1>
          <p className="text-gray-600 mb-6 max-w-lg">
             India's most trusted platform for NEET & JEE preparation. Expert faculty, curated materials, live sessions, and test series to help students succeed.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white text-sm">
              View Courses
            </button>
            <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
              Get Free Consultation
            </button>
          </div>

          <div className="mt-6">
            <button className="px-6 py-3 bg-[#245D51] text-white rounded-4xl hover:bg-green-700 text-sm mt-15">
              Join Now
            </button>
          </div>
        </div>

        {/* Right Side Images */}
        <div className="w-full lg:w-1/2 flex items-center justify-center gap-4 relative">
          {/* Image 1 */}
          <div className="w-[220px] h-[340px] border-1 border-#245D51-100 rounded-full overflow-hidden shadow-lg z-10">
            <img
              src={heroImg1}
              alt="Student 1"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image 2 */}
          <div className="w-[220px] h-[340px] border-1 border-#245D51-100 rounded-full overflow-hidden shadow-lg mt-30">
            <img
              src={heroImg2}
              alt="Student 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
