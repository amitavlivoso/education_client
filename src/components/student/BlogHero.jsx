import React from 'react';
import { BiPlay } from 'react-icons/bi';
import home1 from "../../assets/home1.png";

const BlogHero = () => {
  return (
      <section className="w-full bg-green-100 py-12">
  <div className="container mx-auto px-4">
    <div className="flex flex-col lg:flex-row items-center">
      {/* Left Column */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h6 className="text-gray-700 text-sm uppercase">Student Insights</h6>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 leading-snug">
          Read Our Expert <span className="text-blue-900">Blogs</span>
        </h2>
        <p className="mt-4 text-gray-700">
          Explore the latest articles, tips, and strategies from top educators to help you crack NEET & JEE exams with confidence.
        </p>
        <div className="flex items-center justify-center lg:justify-start mt-6 gap-4">
          <a
            href="#"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-md shadow"
          >
            Explore Blogs
          </a>
          <div className="flex items-center cursor-pointer">
            <div className="bg-white rounded-full p-2 border border-yellow-400 mr-2">
              <BiPlay className="text-yellow-500 text-xl" />
            </div>
            <span className="text-gray-800 font-medium">Why reading blogs matter?</span>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full lg:w-1/2 text-center mt-10 lg:mt-0 relative">
        <img
          src={home1}
          alt="Blog Illustration"
          className="mx-auto w-full max-w-md"
        />
      </div>
    </div>
  </div>
</section>

  );
};

export default BlogHero;
