import React, { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

// Dummy data
const initialNotes = [
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
  const [notes, setNotes] = useState(initialNotes);
  const [editingNote, setEditingNote] = useState(null);
  const [editForm, setEditForm] = useState({ subject: "", chapter: "" });

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this note?");
    if (confirmDelete) {
      setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    }
  };

  const handleEditClick = (note) => {
    setEditingNote(note);
    setEditForm({ subject: note.subject, chapter: note.chapter });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === editingNote.id ? { ...note, ...editForm } : note
      )
    );
    setEditingNote(null);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">All Uploaded Notes</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {notes.map((note) => (
          <div
            key={note.id}
            className="bg-white shadow-md rounded-xl p-5 border hover:shadow-lg transition relative"
          >
            <div className="absolute top-3 right-3 flex gap-3 text-gray-600">
              <FiEdit
                onClick={() => handleEditClick(note)}
                className="hover:text-blue-600 cursor-pointer"
                title="Edit"
              />
              <FiTrash2
                onClick={() => handleDelete(note.id)}
                className="hover:text-red-600 cursor-pointer"
                title="Delete"
              />
            </div>

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

      {/* Edit Form Modal */}
      {editingNote && (
        <div className="fixed inset-0 bg-black/80 bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Edit Note</h2>
            <form onSubmit={handleEditSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={editForm.subject}
                  onChange={handleEditChange}
                  className="w-full border rounded px-3 py-2 mt-1"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Chapter</label>
                <input
                  type="text"
                  name="chapter"
                  value={editForm.chapter}
                  onChange={handleEditChange}
                  className="w-full border rounded px-3 py-2 mt-1"
                  required
                />
              </div>
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEditingNote(null)}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
