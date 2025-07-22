import React from "react";
import { FaGraduationCap, FaBookOpen, FaBriefcase } from "react-icons/fa";
import bio from "../../assets/bio.jpg";
import chem from "../../assets/chem.jpg";
import evs from "../../assets/evs.jpg";
import math from "../../assets/math.jpg";
import medicine from "../../assets/medicine.jpg";
import phy from "../../assets/phy.jpg";
import video from "../../assets/vd.jpg";

// Placeholder icons/images for categories
const categories = [
  { name: "Chemistry", image: chem },
  { name: "Physics", image: phy},
  { name: "Mathematics", image: math },
  { name: "Biology", image: bio },
  { name: "Environmental Sc.", image: evs },
  { name: "Medical", image: medicine },
];

const Topcat = () => {
  return (
     <div
  className="text-white"
  style={{
    background: "linear-gradient(256.52deg, rgba(255, 255, 255, 0.8) 4.5%, rgba(8, 79, 199, 0.8) 36.05%)"
  }}
>

      {/* WHY LEARN SECTION */}
      <div className="max-w-6xl mx-auto text-center px-4 py-20">
         <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why <span className="text-green-300">learn</span> with our courses?
            </h2>
            <p className="text-white/90 mb-12 max-w-2xl mx-auto">
              Our courses are expertly designed to align with the latest NEET and JEE syllabus, offering clear video lessons, topic-wise tests, and proven strategies. Learn from India’s top educators and maximize your score with confidence.
            </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center text-center space-y-3">
            <FaBookOpen className="text-4xl" />
            <h3 className="text-lg font-semibold">01. Learn</h3>
            <p className="text-sm text-white/80 max-w-xs">
              Learn at your own pace, from anywhere. Affordable education with a focus on real-world skills.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-3">
            <FaGraduationCap className="text-4xl" />
            <h3 className="text-lg font-semibold">02. Graduate</h3>
            <p className="text-sm text-white/80 max-w-xs">
              Earn recognized certificates. Master skills and disciplines that prepare you for career success.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-3">
            <FaBriefcase className="text-4xl" />
            <h3 className="text-lg font-semibold">03. Work</h3>
            <p className="text-sm text-white/80 max-w-xs">
              Use your new skills. Land jobs in the real world. Gain confidence and unlock opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* CATEGORIES SECTION */}
      <div className="bg-gradient-to-b from-blue-100 to-white text-center text-gray-800 py-20">
        <h2 className="text-2xl md:text-3xl font-bold">
          Top <span className="text-green-600">Categories</span>
        </h2>
        <p className="text-gray-600 mt-2 mb-12">
          12,000+ unique online course list designs
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-8 max-w-6xl mx-auto px-4">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4 flex flex-col items-center"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-50 h-50 object-contain mb-3"
              />
              <h3 className="text-sm font-medium text-gray-700">{cat.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* <section className="py-16 bg-white">
  <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">

    <div className="w-full lg:w-1/2">
      <img
        src="collage.jpg"
        alt="Collage"
        className="w-full rounded-lg shadow"
      />
    </div>

    <div className="w-full lg:w-1/2 text-center lg:text-left">
      <p className="text-gray-500 mb-4">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <h2 className="text-2xl lg:text-4xl font-bold leading-snug">
        The number one factor in <br />
        <span className="text-green-500">relevance drives out resistance.</span>
      </h2>
      <button className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow hover:opacity-90">
        Learn More
      </button>
    </div>
  </div>
</section> */}
<section className="py-16 bg-gradient-to-b from-white to-blue-50">
  <div className="container mx-auto px-4">
    <div className="rounded-xl overflow-hidden shadow-lg relative max-w-5xl mx-auto">
    <img src={video} alt="Library Video" className="w-full object-cover" />

      <div className="absolute inset-0 flex items-center justify-center">
        <button className="bg-white bg-opacity-70 hover:bg-opacity-100 transition p-4 rounded-full shadow-xl">
          <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Topcat;
