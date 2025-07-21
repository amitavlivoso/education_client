import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const Thankyou = () => {
  const totalQuestions = 10;
  const correctAnswers = 8;
  const wrongAnswers = totalQuestions - correctAnswers;

  const wrongQuestions = [
    {
      question: "What is the capital of Australia?",
      yourAnswer: "Sydney",
      correctAnswer: "Canberra",
    },
    {
      question: "Which gas is essential for photosynthesis?",
      yourAnswer: "Oxygen",
      correctAnswer: "Carbon Dioxide",
    },
  ];

  return (
    <div className="min-h-screen  flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-10 px-6">
          <h1 className="text-4xl font-extrabold mb-2">🎉 Congratulations!</h1>
          <p className="text-lg">You’ve successfully completed the exam.</p>
        </div>

        {/* Score Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-8 py-10 text-center">
          <div className="bg-blue-100 rounded-xl py-6">
            <h3 className="text-gray-700 font-semibold text-lg">Total Questions</h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">{totalQuestions}</p>
          </div>
          <div className="bg-green-100 rounded-xl py-6">
            <h3 className="text-gray-700 font-semibold text-lg">Correct Answers</h3>
            <p className="text-3xl font-bold text-green-600 mt-2">{correctAnswers}</p>
          </div>
          <div className="bg-red-100 rounded-xl py-6">
            <h3 className="text-gray-700 font-semibold text-lg">Wrong Answers</h3>
            <p className="text-3xl font-bold text-red-500 mt-2">{wrongAnswers}</p>
          </div>
        </div>

        {/* Incorrect Questions */}
        <div className="px-8 pb-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">❌ Incorrectly Answered Questions</h2>
          <div className="space-y-6">
            {wrongQuestions.map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-100 p-5 rounded-lg border-l-4 border-red-400 shadow-sm"
              >
                <p className="font-medium text-gray-800 mb-1">
                  Q{idx + 1}: {item.question}
                </p>
                <p className="text-sm text-red-600 flex items-center gap-2">
                  <FaTimesCircle /> Your Answer: <span className="font-semibold">{item.yourAnswer}</span>
                </p>
                <p className="text-sm text-green-600 flex items-center gap-2">
                  <FaCheckCircle /> Correct Answer:{" "}
                  <span className="font-semibold">{item.correctAnswer}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 text-center py-6">
          <p className="text-sm text-gray-500">
            Thanks for participating in the exam. Keep learning and growing! 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default Thankyou;
