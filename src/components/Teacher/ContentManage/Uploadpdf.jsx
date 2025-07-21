import React, { useState } from "react";

export default function Uploadpdf() {
  const subjects = {
    Physics: ["Chapter 1: Motion", "Chapter 2: Force", "Chapter 3: Energy"],
    Chemistry: ["Chapter 1: Atoms", "Chapter 2: Bonds", "Chapter 3: Reactions"],
    Math: ["Chapter 1: Algebra", "Chapter 2: Geometry", "Chapter 3: Calculus"],
    "Environmental Science": ["Chapter 1: Ecosystems", "Chapter 2: Pollution", "Chapter 3: Climate Change"]
  };

  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedChapter, setSelectedChapter] = useState("");

  const handleUpload = () => {
    if (!title || !file || !selectedSubject || !selectedChapter) return;

    setIsUploading(true);
    setTimeout(() => {
      const newNote = {
        id: Date.now(),
        title,
        desc,
        fileName: file.name,
        subject: selectedSubject,
        chapter: selectedChapter,
        date: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        })
      };

      setNotes([newNote, ...notes]);
      setTitle("");
      setDesc("");
      setFile(null);
      setFileName("");
      setSelectedSubject("");
      setSelectedChapter("");
      setIsUploading(false);
    }, 1000);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile?.type === "application/pdf") {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    } else {
      alert("Only PDF files are allowed.");
    }
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile?.type === "application/pdf") {
      setFile(droppedFile);
      setFileName(droppedFile.name);
    }
  };

  const groupedNotes = notes.reduce((acc, note) => {
    const key = `${note.subject} - ${note.chapter}`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(note);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Knowledge Hub</h1>
          <p className="text-gray-600 max-w-md mx-auto">Upload notes by subject & chapter</p>
        </header>

        {/* Upload Section */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-10 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-bold mb-4 text-gray-800">Upload New Notes</h2>
              <div className="space-y-4">
                <input
                  className="w-full bg-gray-50 border border-gray-300 rounded-lg py-3 px-4"
                  type="text"
                  placeholder="Note Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                  className="w-full bg-gray-50 border border-gray-300 rounded-lg py-3 px-4"
                  placeholder="Description (optional)"
                  rows="3"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />

                {/* Subject Select */}
                <select
                  value={selectedSubject}
                  onChange={(e) => {
                    setSelectedSubject(e.target.value);
                    setSelectedChapter("");
                  }}
                  className="w-full bg-gray-50 border border-gray-300 rounded-lg py-3 px-4"
                >
                  <option value="">Select Subject</option>
                  {Object.keys(subjects).map((subj) => (
                    <option key={subj} value={subj}>{subj}</option>
                  ))}
                </select>

                {/* Chapter Select */}
                {selectedSubject && (
                  <select
                    value={selectedChapter}
                    onChange={(e) => setSelectedChapter(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg py-3 px-4"
                  >
                    <option value="">Select Chapter</option>
                    {subjects[selectedSubject].map((chap) => (
                      <option key={chap} value={chap}>{chap}</option>
                    ))}
                  </select>
                )}
              </div>
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Upload PDF File</label>
              <div
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={() => document.getElementById("fileInput").click()}
                className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${
                  file ? "border-indigo-300 bg-indigo-50" : "border-gray-300 hover:border-indigo-400 hover:bg-indigo-50"
                }`}
              >
                <input
                  id="fileInput"
                  type="file"
                  accept=".pdf"
                  className="hidden"
                  onChange={handleFileChange}
                />
                {file ? (
                  <>
                    <p className="font-medium text-indigo-700 truncate">{fileName}</p>
                    <p className="text-sm text-gray-600 mt-1">PDF file ready</p>
                  </>
                ) : (
                  <>
                    <p className="font-medium text-gray-700">Drag & drop your PDF file</p>
                    <p className="text-sm text-gray-500">or click to browse</p>
                    <p className="text-xs text-gray-400 mt-2">PDF files only</p>
                  </>
                )}
              </div>

              <button
                onClick={handleUpload}
                disabled={isUploading || !title || !file || !selectedSubject || !selectedChapter}
                className={`w-full mt-6 py-3.5 px-6 rounded-lg font-medium text-white ${
                  isUploading || !title || !file || !selectedSubject || !selectedChapter
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-purple-700 hover:shadow-lg"
                }`}
              >
                {isUploading ? "Uploading..." : "Upload Note"}
              </button>
            </div>
          </div>
        </div>

        {/* Display Uploaded Notes */}
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Uploaded Notes</h2>

          {Object.keys(groupedNotes).length === 0 ? (
            <p className="text-gray-500 text-center">No notes uploaded yet.</p>
          ) : (
            Object.entries(groupedNotes).map(([group, notes]) => (
              <div key={group} className="mb-8">
                <h3 className="text-lg font-semibold text-indigo-700 mb-3">{group}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {notes.map((note) => (
                    <div key={note.id} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-gray-800">{note.title}</h4>
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{note.date}</span>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2 mb-3">{note.desc}</p>
                      <p className="text-sm text-indigo-600 font-medium truncate">{note.fileName}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
