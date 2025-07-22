import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Sample exam data
const examData = {
  title: "JavaScript Basics Test",
  questions: [
    {
      question: "What is the output of 2 + '2'?",
      options: ["4", "'4'", "'22'", "NaN"],
    },
    {
      question: "Which company developed JavaScript?",
      options: ["Mozilla", "Microsoft", "Netscape", "Apple"],
    },
    {
      question: "What does DOM stand for?",
      options: [
        "Data Object Model",
        "Document Object Model",
        "Digital Ordinance Model",
        "Desktop Object Model",
      ],
    },
    {
      question: "Which of the following is a JavaScript framework?",
      options: ["Laravel", "React", "Django", "Flask"],
    },
    {
      question: "What is the type of NaN in JavaScript?",
      options: ["Object", "Number", "String", "Undefined"],
    },
    {
      question: "How to declare a variable in JavaScript?",
      options: ["int a;", "let a;", "var = a;", "dim a"],
    },
    {
      question: "Which symbol is used for comments in JavaScript?",
      options: ["//", "<!--", "#", "**"],
    },
    {
      question: "Which method is used to convert JSON to a JS object?",
      options: [
        "JSON.parse()",
        "JSON.stringify()",
        "JSON.objectify()",
        "JSON.toObject()",
      ],
    },
    {
      question: "Which keyword is used to define a constant?",
      options: ["var", "let", "const", "define"],
    },
    {
      question: "What is the correct syntax to refer to an external script?",
      options: [
        "<script href='app.js'>",
        "<script name='app.js'>",
        "<script src='app.js'>",
        "<script file='app.js'>",
      ],
    },
  ],
};

const Exam = () => {
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(7200); 
  const navigate = useNavigate();

  // Countdown Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit(); // Auto-submit on timeout
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleChange = (qIndex, value) => {
    setAnswers((prev) => ({
      ...prev,
      [qIndex]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Submitted Answers:", answers);
    navigate("/student/dashboard/thankyou");
  };

  const formatTime = () => {
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
    const seconds = String(timeLeft % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="min-h-screen  py-10 px-4 md:px-10 relative">
      {/* Timer */}
      <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg text-blue-600 font-semibold text-sm">
        ⏰ Time Left: {formatTime()} Min
      </div>

      <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-lg mt-5">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-blue-700">
          {examData.title}
        </h2>

        <div className="space-y-6">
          {examData.questions.map((q, idx) => (
            <div
              key={idx}
              className="p-4 border border-gray-200 rounded-lg bg-gray-50"
            >
              <p className="font-semibold mb-3">
                {idx + 1}. {q.question}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {q.options.map((opt, optIdx) => (
                  <label
                    key={optIdx}
                    className="flex items-center space-x-2  rounded-md p-2 "
                  >
                    <input
                      type="radio"
                      name={`question-${idx}`}
                      value={opt}
                      checked={answers[idx] === opt}
                      onChange={() => handleChange(idx, opt)}
                      className="accent-blue-500"
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={handleSubmit}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg hover:opacity-90 transition font-semibold"
          >
            Submit Exam
          </button>
        </div>
      </div>
    </div>
  );
};

export default Exam;
