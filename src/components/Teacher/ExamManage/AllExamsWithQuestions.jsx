import React, { useState } from "react";

const examData = [
  {
    id: "1",
    subject: "Physics",
    chapter: "Motion",
    totalQuestions: 3,
    estimatedTime: 30,
    questions: [
      {
        question: "What is the unit of speed?",
        options: ["m/s", "km", "kg", "N"],
        answer: "A"
      },
      {
        question: "Which law is known as the law of inertia?",
        options: ["Newton’s First", "Second", "Third", "Gravitation"],
        answer: "A"
      },
      {
        question: "Acceleration is rate of change of?",
        options: ["Velocity", "Speed", "Force", "Distance"],
        answer: "A"
      }
    ]
  },
  {
    id: "2",
    subject: "Chemistry",
    chapter: "Atoms",
    totalQuestions: 2,
    estimatedTime: 20,
    questions: [
      {
        question: "What is the charge of a proton?",
        options: ["+1", "-1", "0", "+2"],
        answer: "A"
      },
      {
        question: "Electron is located in?",
        options: ["Nucleus", "Orbit", "Neutron", "Proton"],
        answer: "B"
      }
    ]
  }
];

export default function AllExamsWithQuestions() {
  const [openExamId, setOpenExamId] = useState(null);

  const toggleExam = (id) => {
    setOpenExamId(openExamId === id ? null : id);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">🧪 All Exams</h1>

      <div className="grid gap-6">
        {examData.map((exam) => (
          <div
            key={exam.id}
            className="border border-gray-200 shadow-xl rounded-2xl bg-white hover:shadow-2xl transition duration-300"
          >
            <div className="flex justify-between items-center p-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {exam.subject} - {exam.chapter}
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  📝 {exam.totalQuestions} Questions | ⏱️ {exam.estimatedTime} seconds
                </p>
              </div>
              <button
                onClick={() => toggleExam(exam.id)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm shadow-sm transition"
              >
                {openExamId === exam.id ? "Hide Questions" : "View Questions"}
              </button>
            </div>

            {openExamId === exam.id && (
              <div className="bg-gray-50 border-t px-6 pb-6">
                {exam.questions.map((q, index) => (
                  <div
                    key={index}
                    className="my-4 p-5 bg-white rounded-xl border shadow-sm transition hover:shadow-md"
                  >
                    <h3 className="text-base font-semibold mb-2 text-gray-800">
                      Q{index + 1}: {q.question}
                    </h3>
                    <div className="space-y-2">
                      {q.options.map((opt, idx) => {
                        const label = ["A", "B", "C", "D"][idx];
                        const isCorrect = label === q.answer;
                        return (
                          <div
                            key={idx}
                            className={`p-3 rounded-md border ${
                              isCorrect
                                ? "bg-green-100 border-green-500 text-green-800 font-medium"
                                : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {label}. {opt}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
