import React from "react";
import { FaEye } from "react-icons/fa";

const Studymaterial = () => {
  const materials = [
    {
      subject: "Mathematics",
      chapter: "Algebra Basics Notes",
      pdfName: "algebra_basics.pdf",
      pdfLink: "/pdfs/algebra_basics.pdf",
    },
    {
      subject: "Physics",
      chapter: "Motion Concepts",
      pdfName: "motion_concepts.pdf",
      pdfLink: "/pdfs/motion_concepts.pdf",
    },
    {
      subject: "Chemistry",
      chapter: "Periodic Table Summary",
      pdfName: "periodic_table.pdf",
      pdfLink: "/pdfs/periodic_table.pdf",
    },
    {
      subject: "Biology",
      chapter: "Cell Structure Notes",
      pdfName: "cell_structure.pdf",
      pdfLink: "/pdfs/cell_structure.pdf",
    },
    {
      subject: "English",
      chapter: "Grammar Worksheet",
      pdfName: "grammar_ws.pdf",
      pdfLink: "/pdfs/grammar_ws.pdf",
    },
    {
      subject: "History",
      chapter: "Ancient Civilizations",
      pdfName: "ancient_civ.pdf",
      pdfLink: "/pdfs/ancient_civ.pdf",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-10">
      {/* Page Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-blue-800">
          Study Materials Library
        </h2>
        <p className="text-gray-500 mt-2">Explore materials for all subjects and chapters</p>
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
                <h4 className="text-sm text-blue-500 font-medium">{item.subject}</h4>
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.chapter}
                </h3>
              </div>
              <a
                href={item.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                <FaEye size={20} />
              </a>
            </div>

            {/* PDF Link */}
            <div>
              <a
                href={item.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600  hover:text-blue-600"
              >
                {item.pdfName}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Studymaterial;
