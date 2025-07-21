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
            <p className="text-gray-600 text-sm mt-1">Number Of Students</p>
            </div>
            <div className="text-center">
            <p className="text-2xl font-bold">75%</p>
            <p className="text-gray-600 text-sm mt-1">Percentage Of Success</p>
            </div>
            <div className="text-center">
            <p className="text-2xl font-bold">35</p>
            <p className="text-gray-600 text-sm mt-1">Numbers Of Questions</p>
            </div>
            <div className="text-center">
            <p className="text-2xl font-bold">25+</p>
            <p className="text-gray-600 text-sm mt-1">Number Of Experts</p>
            </div>
            <div className="text-center">
            <p className="text-2xl font-bold">15+</p>
            <p className="text-gray-600 text-sm mt-1">Years Of Experience</p>
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
              Montes vivamus curae quisque et primis pretium nullam. Congue dis convallis eget ipsum cubilia ante.
            </p>
          </div>

          {/* Get Access */}
          <div className="flex flex-col items-center">
            <FaDesktop className="text-3xl mb-4" />
            <h3 className="font-semibold text-lg mb-2">Get access</h3>
            <p className="text-sm text-gray-600">
              Access to question bank of over 2000 questions
            </p>
          </div>

          {/* Practice Questions */}
          <div className="flex flex-col items-center">
            <FaQuestion className="text-3xl mb-4" />
            <h3 className="font-semibold text-lg mb-2">Practice questions</h3>
            <p className="text-sm text-gray-600">
              Prepare for the MLA exam in multiple modes of revision and track your progress with your personalised dashboard
            </p>
          </div>

          {/* Get Result */}
          <div className="flex flex-col items-center">
            <FaClipboardCheck className="text-3xl mb-4" />
            <h3 className="font-semibold text-lg mb-2">Get Result</h3>
            <p className="text-sm text-gray-600">
              Compare your results with your peers’ with advanced analytics
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
