import React, { useState } from "react";
import { uploadDocs } from "../../../services/service"; // ✅ Ensure correct path
import axios from "axios";
import { getUserId } from "../../../services/axiosClient";

export default function Uploadpdf() {
  const subjects = {
    Physics: ["Chapter 1: Motion", "Chapter 2: Force", "Chapter 3: Energy"],
    Chemistry: ["Chapter 1: Atoms", "Chapter 2: Bonds", "Chapter 3: Reactions"],
    Math: ["Chapter 1: Algebra", "Chapter 2: Geometry", "Chapter 3: Calculus"],
    "Environmental Science": [
      "Chapter 1: Ecosystems",
      "Chapter 2: Pollution",
      "Chapter 3: Climate Change",
    ],
  };


  const examTypes = ["10th", "JEE", "NEET"];
  const [selectedExamType, setSelectedExamType] = useState("");

  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [fileUrl, setFileUrl] = useState(""); // ✅ Store uploaded URL
  const [isUploading, setIsUploading] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedChapter, setSelectedChapter] = useState("");

  const handleFileUpload = async (selectedFile) => {
    setIsUploading(true);

    const formData = new FormData();
    formData.append("files", selectedFile); // Must match Multer's field name

    console.log("Appending file to formData:", selectedFile); // Debug log
    console.log("FormData contents:", [...formData.entries()]);
    try {
      const res = await uploadDocs(formData);
      console.log("Upload response:", res);

      const uploadedFile = res.data?.files?.[0];
      if (!uploadedFile || !uploadedFile.url) throw new Error("No file URL");

      setFileUrl(uploadedFile.url);
      setFileName(selectedFile.name);
      setFile(selectedFile);
    } catch (err) {
      console.error("Upload error:", err);
      alert("File upload failed.");
    }

    setIsUploading(false);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log("Selected file:", selectedFile); // Debug log

    if (!selectedFile) {
      alert("No file selected.");
      return;
    }

    if (
      selectedFile.type === "application/pdf" ||
      selectedFile.type.startsWith("video/")
    ) {
      handleFileUpload(selectedFile);
    } else {
      alert("Only PDF or video files are allowed.");
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (
      droppedFile &&
      (droppedFile.type === "application/pdf" ||
        droppedFile.type.startsWith("video/"))
    ) {
      handleFileUpload(droppedFile); // ✅ Upload on drag-drop
    }
  };

 const handleSubmitForm = async () => {
  if (!title || !fileUrl || !selectedSubject || !selectedChapter || !selectedExamType) {
    alert("Please complete all fields and upload a file.");
    return;
  }

  const payload = {
    teacherId: getUserId(),
   examType: selectedExamType,
    title,
    desc,
    subject: selectedSubject,
    chapter: selectedChapter,
    fileUrl,
    fileName,
  };
console.log("Payload to send in uploadpdf:", payload); // Debug log
  try {
    const response = await axios.post("http://localhost:8080/api/teacher/studymaterial", payload);
    console.log("✅ Course created:", response.data);
    alert("Note successfully uploaded!");

    // Append to local UI if needed
    const newNote = {
      id: Date.now(),
      ...payload,
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    };

    setNotes([newNote, ...notes]);

    // Reset form fields
    setTitle("");
    setDesc("");
    setFile(null);
    setFileName("");
    setFileUrl("");
    setSelectedSubject("");
    setSelectedChapter("");
    setSelectedExamType("");

  } catch (error) {
    console.error("❌ Error creating course:", error);
    alert("Failed to upload note. Please try again.");
  }
};


  const groupedNotes = notes.reduce((acc, note) => {
    const key = `${note.examType} - ${note.subject} - ${note.chapter}`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(note);
    return acc;
  }, {});

  return (
    <div>
      {/* Step 1: Select Exam Type */}
       <div className="min-h-screen bg-gradient-to-br from-white to-indigo-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-6 ">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {" "}
            Exam Question Uploader
          </h1>
          <p className="text-gray-600">Choose exam type and add MCQs</p>
        </header>
      {!selectedExamType && (
        <div className="flex justify-center items-center  gap-6 mb-10">
          {examTypes.map((type) => (
            <div
              key={type}
              onClick={() => setSelectedExamType(type)}
              className="cursor-pointer bg-white border border-gray-300 shadow-md rounded-xl px-8 py-6 text-xl font-semibold text-center hover:bg-indigo-100 transition"
            >
              {type}
            </div>
          ))}
        </div>
      )}

      {selectedExamType && (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50  px-4">
          <div className="max-w-5xl mx-auto ">
             <div className="text-center mb-4">
              <h2 className="text-xl font-bold text-indigo-700">
                Creating Exam for: {selectedExamType}
              </h2>
              {/* <button
                onClick={() => setSelectedExamType("")}
                className="mt-2 text-sm text-red-500 hover:underline"
              >
                Change Exam Type
              </button> */}
            </div>
          

            {/* Upload Section */}
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-10 border border-gray-100">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-xl font-bold mb-4 text-gray-800">
                    Upload New Notes
                  </h2>
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
                        <option key={subj} value={subj}>
                          {subj}
                        </option>
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
                          <option key={chap} value={chap}>
                            {chap}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Upload PDF or Video
                  </label>
                  <div
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleDrop}
                    onClick={() => document.getElementById("fileInput").click()}
                    className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${fileUrl
                        ? "border-green-400 bg-green-50"
                        : "border-gray-300 hover:border-indigo-400 hover:bg-indigo-50"
                      }`}
                  >
                    <input
                      id="fileInput"
                      type="file"
                      accept=".pdf, video/*"
                      className="hidden"
                      onChange={handleFileChange}
                      key={Date.now()}
                    />
                    {fileUrl ? (
                      <>
                        <p className="font-medium text-green-700 truncate">
                          {fileName}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          File uploaded successfully
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="font-medium text-gray-700">
                          Drag & drop your file
                        </p>
                        <p className="text-sm text-gray-500">or click to browse</p>
                        <p className="text-xs text-gray-400 mt-2">
                          PDF or video files only
                        </p>
                      </>
                    )}
                  </div>

                  <button
                    onClick={handleSubmitForm}
                    disabled={
                      isUploading ||
                      !title ||
                      !fileUrl ||
                      !selectedSubject ||
                      !selectedChapter
                    }
                    className={`w-full mt-6 py-3.5 px-6 rounded-lg font-medium text-white ${isUploading ||
                        !title ||
                        !fileUrl ||
                        !selectedSubject ||
                        !selectedChapter
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-purple-700 hover:shadow-lg"
                      }`}
                  >
                    {isUploading ? "Uploading..." : "Submit Note"}
                  </button>
                </div>
              </div>
            </div>

            {/* Display Uploaded Notes */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Uploaded Notes
              </h2>

              {Object.keys(groupedNotes).length === 0 ? (
                <p className="text-gray-500 text-center">No notes uploaded yet.</p>
              ) : (
                Object.entries(groupedNotes).map(([group, notes]) => (
                  <div key={group} className="mb-8">
                    <h3 className="text-lg font-semibold text-indigo-700 mb-3">
                      {group}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {notes.map((note) => (
                        <div
                          key={note.id}
                          className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold text-gray-800">
                              {note.title}
                            </h4>
                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                              {note.date}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                            {note.desc}
                          </p>
                          <p className="text-sm text-indigo-600 font-medium truncate">
                            <a
                              href={note.fileUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {note.fileName}
                            </a>
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  </div>
  );
}
