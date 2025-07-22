import React from "react";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const StudyCategory = () => {
  const navigate = useNavigate();

  const materials = [
    { type: "JEE" },
    { type: "NEET" },
    { type: "10th CBSE" },
  ];

  const handleClick = (type) => {
    navigate(`studymaterial/${type}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-blue-800">Study Materials</h2>
        <p className="text-gray-500 mt-2">Explore materials for all types and chapters</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {materials.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-5 border border-gray-200 hover:shadow-lg transition-all duration-200 cursor-pointer"
            onClick={() => handleClick(item.type)}
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="text-xl font-medium text-blue-600">{item.type}</h4>
              </div>
              <FaEye size={20} className="text-blue-500" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyCategory;
