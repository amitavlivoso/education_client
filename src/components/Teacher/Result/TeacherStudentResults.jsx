import React, { useState, useEffect } from "react";
import axios from "axios";

const TeacherStudentResults = () => {
  const [subjects, setSubjects] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [results, setResults] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedChapter, setSelectedChapter] = useState("");

  // Step 1: Load subjects
  useEffect(() => {
    axios.get("http://localhost:8080/api/results/subjects")
      .then(res => setSubjects(res.data.data))
      .catch(err => console.error(err));
  }, []);

  // Step 2: On subject select → load chapters
  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
    setSelectedChapter("");
    setResults([]);
    axios.get(`http://localhost:8080/api/results/chapters/${subject}`)
      .then(res => setChapters(res.data.data))
      .catch(err => console.error(err));
  };

  // Step 3: On chapter select → load results
  const handleChapterClick = (chapter) => {
    setSelectedChapter(chapter);
    axios.get(`http://localhost:8080/api/results/allresults/${selectedSubject}/${chapter}`)
      .then(res => setResults(res.data.data))
      .catch(err => console.error(err));
  };

  return (
    <div className="p-6 space-y-6">
      {/* Subjects */}
      <div>
        <h2 className="text-xl font-bold mb-3">Select Subject</h2>
        <div className="flex gap-2 flex-wrap">
          {subjects.map((sub, idx) => (
            <button
              key={idx}
              onClick={() => handleSubjectClick(sub.subject)}
              className={`px-4 py-2 rounded-md border ${
                selectedSubject === sub.subject ? "bg-blue-500 text-white" : "bg-gray-100"
              }`}
            >
              {sub.subject}
            </button>
          ))}
        </div>
      </div>

      {/* Chapters */}
      {chapters.length > 0 && (
        <div>
          <h2 className="text-xl font-bold mb-3">Select Chapter</h2>
          <div className="flex gap-2 flex-wrap">
            {chapters.map((ch, idx) => (
              <button
                key={idx}
                onClick={() => handleChapterClick(ch.chapter)}
                className={`px-4 py-2 rounded-md border ${
                  selectedChapter === ch.chapter ? "bg-green-500 text-white" : "bg-gray-100"
                }`}
              >
                {ch.chapter}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Results Table */}
      {results.length > 0 && (
        <div>
          <h2 className="text-xl font-bold mb-3">Results for {selectedChapter}</h2>
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-4 py-2">Student Name</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Attempted</th>
                <th className="border px-4 py-2">Correct</th>
                <th className="border px-4 py-2">Wrong</th>
                <th className="border px-4 py-2">Score</th>
                <th className="border px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {results.map((res, idx) => (
                <tr key={idx} className="text-center">
                  <td className="border px-4 py-2">{res.User?.name}</td>
                  <td className="border px-4 py-2">{res.User?.email}</td>
                  <td className="border px-4 py-2">{res.attempted}</td>
                  <td className="border px-4 py-2">{res.correct}</td>
                  <td className="border px-4 py-2">{res.wrong}</td>
                  <td className="border px-4 py-2">{res.score}</td>
                  <td className="border px-4 py-2">
                    {new Date(res.createdAt).toLocaleDateString()}{" "}
                    {new Date(res.createdAt).toLocaleTimeString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TeacherStudentResults;
