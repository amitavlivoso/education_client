import React from "react";

// Dummy data - you can replace this with API call data
const uploadedNotes = [
  {
    id: "1",
    subject: "Physics",
    chapter: "Laws of Motion",
    fileUrl: "https://example.com/pdf/physics-motion.pdf",
    uploadedAt: "2025-07-20",
  },
  {
    id: "2",
    subject: "Chemistry",
    chapter: "Chemical Reactions",
    fileUrl: "https://example.com/pdf/chemistry-reactions.pdf",
    uploadedAt: "2025-07-19",
  },
  {
    id: "3",
    subject: "Math",
    chapter: "Trigonometry",
    fileUrl: "https://example.com/pdf/math-trigonometry.pdf",
    uploadedAt: "2025-07-18",
  },
];

export default function AllNotesPage() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800"> All Uploaded Notes</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {uploadedNotes.map((note) => (
          <div key={note.id} className="bg-white shadow-md rounded-xl p-5 border hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-800 mb-1">{note.subject}</h2>
            <p className="text-sm text-gray-500 mb-2">📖 Chapter: {note.chapter}</p>
            <p className="text-xs text-gray-400 mb-4">📅 Uploaded on: {note.uploadedAt}</p>
            <div className="flex gap-4">
              <a
                href={note.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
              >
                View PDF
              </a>
              <a
                href={note.fileUrl}
                download
                className="px-4 py-2 bg-green-600 text-white rounded-md text-sm hover:bg-green-700"
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
