import React from "react";
import { FaUserPlus, FaDesktop, FaQuestion, FaClipboardCheck } from "react-icons/fa";

const Work = () => {
  return (
    <div className="w-full">
      {/* Our Success Section */}
       <section className="bg-white py-16 text-center">
  <h2 className="text-3xl md:text-4xl font-semibold mb-12">Our Success</h2>

  <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-4 max-w-5xl mx-auto">
    <div className="text-center">
      <p className="text-2xl font-bold">15K+</p>
      <p className="text-gray-600 text-sm mt-1">Students Trained for NEET & JEE</p>
    </div>
    <div className="text-center">
      <p className="text-2xl font-bold">75%</p>
      <p className="text-gray-600 text-sm mt-1">Students Cracked NEET/JEE</p>
    </div>
    <div className="text-center">
      <p className="text-2xl font-bold">35</p>
      <p className="text-gray-600 text-sm mt-1">Mock Tests Every Month</p>
    </div>
    <div className="text-center">
      <p className="text-2xl font-bold">25+</p>
      <p className="text-gray-600 text-sm mt-1">Experienced Faculty</p>
    </div>
    <div className="text-center">
      <p className="text-2xl font-bold">15+</p>
      <p className="text-gray-600 text-sm mt-1">Years of Coaching Experience</p>
    </div>
  </div>
</section>

{/* How It Works Section */}
<section className="bg-pink-50 py-16 text-center">
  <h2 className="text-3xl md:text-4xl font-semibold mb-12">How It Works</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-6 max-w-6xl mx-auto">
    {/* Sign Up */}
    <div className="flex flex-col items-center">
      <FaUserPlus className="text-3xl mb-4" />
      <h3 className="font-semibold text-lg mb-2">Sign Up</h3>
      <p className="text-sm text-gray-600">
        Create your free account and explore our NEET & JEE coaching platform tailored for competitive success.
      </p>
    </div>

    {/* Get Access */}
    <div className="flex flex-col items-center">
      <FaDesktop className="text-3xl mb-4" />
      <h3 className="font-semibold text-lg mb-2">Get access</h3>
      <p className="text-sm text-gray-600">
        Unlock access to 2000+ curated questions, study materials, and recorded video lectures.
      </p>
    </div>

    {/* Practice Questions */}
    <div className="flex flex-col items-center">
      <FaQuestion className="text-3xl mb-4" />
      <h3 className="font-semibold text-lg mb-2">Practice questions</h3>
      <p className="text-sm text-gray-600">
        Practice chapter-wise questions, attempt timed tests, and evaluate your performance regularly.
      </p>
    </div>

    {/* Get Result */}
    <div className="flex flex-col items-center">
      <FaClipboardCheck className="text-3xl mb-4" />
      <h3 className="font-semibold text-lg mb-2">Get Result</h3>
      <p className="text-sm text-gray-600">
        Track your progress, analyze your strengths and weaknesses, and compare results with top performers.
      </p>
    </div>
  </div>

  <div className="mt-10">
    <button className="px-6 py-2 border border-gray-900 rounded-full text-sm font-medium hover:bg-gray-900 hover:text-white transition duration-200">
      Start Now
    </button>
  </div>
</section>

    </div>
  );
};

export default Work;
