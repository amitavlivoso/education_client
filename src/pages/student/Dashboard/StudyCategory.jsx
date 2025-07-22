import React from "react";
import { FaEye } from "react-icons/fa";

const StudyCategory = () => {
  const materials = [
    {
      type: "Jee",
      
    },
    {
      type: "Neet",
    
    },
    {
      type: "10th CBSE",
      
    },
 
   
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-10">
      {/* Page Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-blue-800">
          Study Materials
        </h2>
        <p className="text-gray-500 mt-2">Explore materials for all types and chapters</p>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {materials.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-5 border border-gray-200 hover:shadow-lg transition-all duration-200"
          >
            {/* Top Row */}
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="text-sm text-blue-500 font-medium">{item.type}</h4>
               
              </div>
              <a
                href="studymaterial"
               
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                <FaEye size={20} />
              </a>
            </div>

            {/* PDF Link */}
         
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyCategory;
