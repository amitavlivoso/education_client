import axios from "axios";
import React, { useState } from "react";
import { getUserId } from "../../../services/axiosClient";
import { createExam } from "../../../services/service";

export default function ExamUpload() {
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
  console.log("Selected Exam Type:", selectedExamType);

  const [allQuestions, setAllQuestions] = useState([]);
  const [questionText, setQuestionText] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [answer, setAnswer] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedChapter, setSelectedChapter] = useState("");

  const [totalCount, setTotalCount] = useState("");
  const [estimatedTime, setEstimatedTime] = useState("");
  const [questionsAdded, setQuestionsAdded] = useState(0);

  const handleAddQuestion = async () => {
    if (
      !questionText ||
      options.some((opt) => opt === "") ||
      !answer ||
      !selectedSubject ||
      !selectedChapter ||
      !totalCount ||
      !estimatedTime ||
      !selectedExamType
    ) {
      alert("Please fill all fields!");
      return;
    }

    const newQ = {
      id: Date.now(),
      question: questionText,
      options,
      answer,
    };

    const updatedQuestions = [...allQuestions, newQ];
    setAllQuestions(updatedQuestions);
    setQuestionsAdded(updatedQuestions.length);

    // Clear current input
    setQuestionText("");
    setOptions(["", "", "", ""]);
    setAnswer("");

    if (updatedQuestions.length === parseInt(totalCount)) {
      const payload = {
        teacher_id: getUserId(),
        selectedExamType: selectedExamType,
        subjects: selectedSubject,
        chapter: selectedChapter,
        estimatedTime,
        totalCount,
        question: updatedQuestions,
      };

      alert("All questions uploaded!");
      console.log("Payload to send at examUpload :", payload);

      try {
        const response = createExam(payload);
        console.log("Response from server:", response.data);
      } catch (error) {
        console.error("Error uploading questions:", error);
        alert("Failed to upload questions. Please try again.");
      }

      // Reset all
      setAllQuestions([]);
      setQuestionsAdded(0);
      setTotalCount("");
      setEstimatedTime("");
      setSelectedSubject("");
      setSelectedChapter("");
      setSelectedExamType(""); // optional: go back to selection
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-indigo-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {" "}
            Exam Question Uploader
          </h1>
          <p className="text-gray-600">Choose exam type and add MCQs</p>
        </header>

        {/* Step 1: Exam Type Selection */}
        {!selectedExamType && (
          <div className="flex justify-center gap-6 mb-10">
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

        {/* Step 2: Form after examType selected */}
        {selectedExamType && (
          <>
            <div className="text-center mb-6">
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

            {/* Subject & Chapter Selection */}
            <div className="bg-white p-6 rounded-2xl shadow mb-6 border border-gray-300">
              <h2 className="text-lg font-semibold mb-4">
                {" "}
                Select Subject & Chapter
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <select
                  value={selectedSubject}
                  onChange={(e) => {
                    setSelectedSubject(e.target.value);
                    setSelectedChapter("");
                  }}
                  className="border border-gray-300 rounded-lg py-2 px-4"
                >
                  <option value="">Select Subject</option>
                  {Object.keys(subjects).map((subj) => (
                    <option key={subj} value={subj}>
                      {subj}
                    </option>
                  ))}
                </select>

                {selectedSubject && (
                  <select
                    value={selectedChapter}
                    onChange={(e) => setSelectedChapter(e.target.value)}
                    className="border border-gray-300 rounded-lg py-2 px-4"
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="number"
                  placeholder="Total Number of Questions"
                  className="border border-gray-300 rounded-lg py-2 px-4"
                  value={totalCount}
                  onChange={(e) => setTotalCount(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Estimated Time per Question (in seconds)"
                  className="border border-gray-300 rounded-lg py-2 px-4"
                  value={estimatedTime}
                  onChange={(e) => setEstimatedTime(e.target.value)}
                />
              </div>
            </div>

            {/* Add Question Section */}
            <div className="bg-white p-6 rounded-2xl shadow mb-10 border border-gray-300">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Add Question ({questionsAdded}/{totalCount})
              </h2>

              <textarea
                className="w-full border border-gray-300 rounded-lg p-3 mb-4"
                rows="3"
                placeholder="Enter your question..."
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {["A", "B", "C", "D"].map((label, idx) => (
                  <input
                    key={label}
                    className="border border-gray-300 rounded-lg py-2 px-4"
                    placeholder={`Option ${label}`}
                    value={options[idx]}
                    onChange={(e) => {
                      const newOptions = [...options];
                      newOptions[idx] = e.target.value;
                      setOptions(newOptions);
                    }}
                  />
                ))}
              </div>

              <select
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="w-full border border-gray-300 rounded-lg py-2 px-4 mb-4"
              >
                <option value="">Select Correct Answer</option>
                <option value="A">Option A</option>
                <option value="B">Option B</option>
                <option value="C">Option C</option>
                <option value="D">Option D</option>
              </select>

              <button
                onClick={handleAddQuestion}
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
              >
                Add Question
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
