import React from "react";
import { FaEye } from "react-icons/fa";
import { useParams } from "react-router-dom";

const Studymaterial = () => {
  const { type } = useParams();

  const allMaterials = [
    // JEE
    {
      subject: "Mathematics",
      chapter: "Algebra Basics Notes",
      pdfName: "algebra_basics.pdf",
      pdfLink: "/pdfs/algebra_basics.pdf",
      type: "JEE",
    },
    {
      subject: "Physics",
      chapter: "Motion Concepts",
      pdfName: "motion_concepts.pdf",
      pdfLink: "/pdfs/motion_concepts.pdf",
      type: "JEE",
    },
    {
      subject: "Chemistry",
      chapter: "Periodic Table Summary",
      pdfName: "periodic_table.pdf",
      pdfLink: "/pdfs/periodic_table.pdf",
      type: "JEE",
    },

    // NEET
    {
      subject: "Biology",
      chapter: "Cell Structure Notes",
      pdfName: "cell_structure.pdf",
      pdfLink: "/pdfs/cell_structure.pdf",
      type: "NEET",
    },
    {
      subject: "Physics",
      chapter: "NEET Physics Concepts",
      pdfName: "neet_physics.pdf",
      pdfLink: "/pdfs/neet_physics.pdf",
      type: "NEET",
    },
    {
      subject: "Chemistry",
      chapter: "NEET Chemistry Guide",
      pdfName: "neet_chemistry.pdf",
      pdfLink: "/pdfs/neet_chemistry.pdf",
      type: "NEET",
    },

    // 10th CBSE
    {
      subject: "English",
      chapter: "Grammar Worksheet",
      pdfName: "grammar_ws.pdf",
      pdfLink: "/pdfs/grammar_ws.pdf",
      type: "10th CBSE",
    },
    {
      subject: "Science",
      chapter: "Acids and Bases",
      pdfName: "acids_bases.pdf",
      pdfLink: "/pdfs/acids_bases.pdf",
      type: "10th CBSE",
    },
    {
      subject: "History",
      chapter: "Ancient Civilizations",
      pdfName: "ancient_civ.pdf",
      pdfLink: "/pdfs/ancient_civ.pdf",
      type: "10th CBSE",
    },
  ];

  const filtered = allMaterials.filter((mat) => mat.type === type);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-blue-800">
          {type} Study Materials
        </h2>
        <p className="text-gray-500 mt-2">
          Explore materials for {type} category
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {filtered.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-5 border border-gray-200 hover:shadow-lg transition-all duration-200"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="text-sm text-blue-500 font-medium">
                  {item.subject}
                </h4>
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
            <a
              href={item.pdfLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-blue-600"
            >
              {item.pdfName}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Studymaterial;
