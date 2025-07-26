import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import course1 from "../../../assets/jee.jpg";
import course2 from "../../../assets/neet.jpg";
import course3 from "../../../assets/cbse.jpg";

const Studymaterial = () => {
  const { type } = useParams();
  const navigate = useNavigate();

  const allMaterials = [
    // JEE PDFs
    {
      subject: "Mathematics",
      chapter: "Algebra Basics Notes",
      pdfName: "algebra_basics.pdf",
      pdfLink: "/pdfs/algebra_basics.pdf",
      type: "JEE",
      image: course1,
    },
    {
      subject: "Physics",
      chapter: "Motion Concepts",
      pdfName: "motion_concepts.pdf",
      pdfLink: "/pdfs/motion_concepts.pdf",
      type: "JEE",
      image: course2,
    },
    {
      subject: "Chemistry",
      chapter: "Periodic Table Summary",
      pdfName: "periodic_table.pdf",
      pdfLink: "/pdfs/periodic_table.pdf",
      type: "JEE",
      image: course3,
    },
    // JEE Videos
    {
      subject: "Mathematics",
      chapter: "Algebra Basics Notes",
      pdfName: "algebra_basics.mp4",
      pdfLink: "/video/algebra_basics.mp4",
      type: "JEE",
      image: course1,
    },
    {
      subject: "Physics",
      chapter: "Motion Concepts",
      pdfName: "motion_concepts.mp4",
      pdfLink: "/video/motion_concepts.mp4",
      type: "JEE",
      image: course2,
    },
    {
      subject: "Chemistry",
      chapter: "Periodic Table Summary",
      pdfName: "periodic_table.mp4",
      pdfLink: "/video/periodic_table.mp4",
      type: "JEE",
      image: course3,
    },
    // NEET PDFs
    {
      subject: "Biology",
      chapter: "Cell Structure Notes",
      pdfName: "cell_structure.pdf",
      pdfLink: "/pdfs/cell_structure.pdf",
      type: "NEET",
      image: course1,
    },
    {
      subject: "Physics",
      chapter: "NEET Physics Concepts",
      pdfName: "neet_physics.pdf",
      pdfLink: "/pdfs/neet_physics.pdf",
      type: "NEET",
      image: course2,
    },
    {
      subject: "Chemistry",
      chapter: "NEET Chemistry Guide",
      pdfName: "neet_chemistry.pdf",
      pdfLink: "/pdfs/neet_chemistry.pdf",
      type: "NEET",
      image: course3,
    },
    // NEET Videos
    {
      subject: "Biology",
      chapter: "Cell Structure Notes",
      pdfName: "cell_structure.mp4",
      pdfLink: "/video/cell_structure.mp4",
      type: "NEET",
      image: course1,
    },
    {
      subject: "Physics",
      chapter: "NEET Physics Concepts",
      pdfName: "neet_physics.mp4",
      pdfLink: "/video/neet_physics.mp4",
      type: "NEET",
      image: course2,
    },
    {
      subject: "Chemistry",
      chapter: "NEET Chemistry Guide",
      pdfName: "neet_chemistry.mp4",
      pdfLink: "/video/neet_chemistry.mp4",
      type: "NEET",
      image: course3,
    },
    // 10th CBSE PDFs
    {
      subject: "English",
      chapter: "Grammar Worksheet",
      pdfName: "grammar_ws.pdf",
      pdfLink: "/pdfs/grammar_ws.pdf",
      type: "10th CBSE",
      image: course1,
    },
    {
      subject: "Science",
      chapter: "Acids and Bases",
      pdfName: "acids_bases.pdf",
      pdfLink: "/pdfs/acids_bases.pdf",
      type: "10th CBSE",
      image: course2,
    },
    {
      subject: "History",
      chapter: "Ancient Civilizations",
      pdfName: "ancient_civ.pdf",
      pdfLink: "/pdfs/ancient_civ.pdf",
      type: "10th CBSE",
      image: course3,
    },
    // 10th CBSE Videos
    {
      subject: "English",
      chapter: "Grammar Worksheet",
      pdfName: "grammar_ws.mp4",
      pdfLink: "/video/grammar_ws.mp4",
      type: "10th CBSE",
      image: course1,
    },
    {
      subject: "Science",
      chapter: "Acids and Bases",
      pdfName: "acids_bases.mp4",
      pdfLink: "/video/acids_bases.mp4",
      type: "10th CBSE",
      image: course2,
    },
    {
      subject: "History",
      chapter: "Ancient Civilizations",
      pdfName: "ancient_civ.mp4",
      pdfLink: "/video/ancient_civ.mp4",
      type: "10th CBSE",
      image: course3,
    },
  ];

  const filtered = allMaterials.filter((mat) => mat.type === type);
  const pdfs = filtered.filter((mat) => mat.pdfName.endsWith(".pdf"));
  const videos = filtered.filter((mat) => mat.pdfName.endsWith(".mp4"));

  const renderCard = (material) => (
    <div
      key={material.pdfLink}
      className="bg-white cursor-pointer rounded-xl shadow hover:shadow-lg transition duration-300"
     
    >
      <img
        src={material.image}
        alt={material.subject}
        className="w-full h-48 object-cover rounded-t-xl"
      />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800">{material.subject}</h3>
        <h5 className="text-sm font-semibold text-gray-800 mt-2">{material.chapter}</h5>
        <a
          href={material.pdfLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 hover:underline block mt-2"
        >
          {material.pdfName}
        </a>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-blue-800">
          {type} Study Materials
        </h2>
        <p className="text-gray-500 mt-2">
          Explore categorized materials for <strong>{type}</strong>
        </p>
      </div>

      {/* PDFs */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">📄 PDF Materials</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {pdfs.length > 0 ? pdfs.map(renderCard) : <p>No PDF materials found.</p>}
        </div>
      </div>

      {/* Videos */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">🎥 Video Materials</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {videos.length > 0 ? videos.map(renderCard) : <p>No video materials found.</p>}
        </div>
      </div>
    </div>
  );
};

export default Studymaterial;
