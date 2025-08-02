import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AllExamsWithQuestions() {
  const [exams, setExams] = useState([]);
  const [openExamId, setOpenExamId] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/teacher/getexam");
        const parsedExams = res.data.exams.map((exam) => ({
          ...exam,
          questions: exam.questions.map((q) => ({
            ...q,
            options: JSON.parse(q.options),
          })),
        }));
        setExams(parsedExams);
      } catch (err) {
        console.error("Error fetching exams:", err);
      }
    };

    fetchExams();
  }, []);

  const toggleExam = (id) => {
    setOpenExamId(openExamId === id ? null : id);
    setSelectedAnswers({});
    setSubmitted(false);
  };

  const handleOptionClick = (examId, questionId, selectedLabel) => {
    if (!submitted) {
      setSelectedAnswers((prev) => ({
        ...prev,
        [`${examId}-${questionId}`]: selectedLabel,
      }));
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const calculateScore = (exam) => {
    let correct = 0;
    exam.questions.forEach((q) => {
      const key = `${exam.id}-${q.id}`;
      if (selectedAnswers[key] === q.correct_option) correct++;
    });
    return correct;
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">🧪 All Exams</h1>

      {exams.map((exam) => (
        <div
          key={exam.id}
          className="border border-gray-200 shadow-xl rounded-2xl bg-white hover:shadow-2xl transition duration-300 mb-6"
        >
          <div className="flex justify-between items-center p-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {exam.subject} - {exam.chapter}
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                📝 {exam.total_count} Questions | ⏱️ {exam.estimated_time} sec
              </p>
            </div>
            <button
              onClick={() => toggleExam(exam.id)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm shadow-sm transition"
            >
              {openExamId === exam.id ? "Hide" : "View"}
            </button>
          </div>

          {openExamId === exam.id && (
            <div className="bg-gray-50 border-t px-6 pb-6">
              {submitted && (
                <div className="my-4 text-green-800 font-semibold text-lg">
                  ✅ Score: {calculateScore(exam)} / {exam.questions.length}
                </div>
              )}

              {exam.questions.map((q, index) => {
                const selected = selectedAnswers[`${exam.id}-${q.id}`];
                return (
                  <div
                    key={q.id}
                    className="my-4 p-5 bg-white rounded-xl border shadow-sm transition hover:shadow-md"
                  >
                    <h3 className="text-base font-semibold mb-3 text-gray-800">
                      Q{index + 1}: {q.question_text}
                    </h3>

                    <div className="space-y-2">
                      {q.options.map((opt) => {
                        const isSelected = selected === opt.label;
                        const isCorrect = q.correct_option === opt.label;

                        let bgClass = "bg-gray-100 text-gray-800";
                        if (submitted) {
                          if (isCorrect && isSelected) {
                            bgClass = "bg-green-200 text-green-800 font-medium border border-green-600";
                          } else if (isCorrect) {
                            bgClass = "bg-green-100 text-green-700 border border-green-500";
                          } else if (isSelected && !isCorrect) {
                            bgClass = "bg-red-200 text-red-800 font-medium border border-red-600";
                          }
                        } else if (isSelected) {
                          bgClass = "bg-blue-100 border border-blue-500 text-blue-800";
                        }

                        return (
                          <div
                            key={opt.label}
                            onClick={() => handleOptionClick(exam.id, q.id, opt.label)}
                            className={`cursor-pointer p-3 rounded-md border ${bgClass}`}
                          >
                            {opt.label}. {opt.text}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}

              {!submitted && (
                <button
                  onClick={handleSubmit}
                  className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
                >
                  ✅ Submit
                </button>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
