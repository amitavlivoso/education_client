import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import QuestionCard from '../../components/Teacher/ExamManage/QuestionCard';
import QuestionPalette from '../../components/Teacher/ExamManage/QuestionPalette';
import { getUserId } from '../../services/axiosClient';

const ExamPage = () => {
  const { examId } = useParams();
  const numericExamId = Number(examId);
  const STORAGE_KEY = `exam_${numericExamId}_state`;


  const [examData, setExamData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [visited, setVisited] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);

  const timerRef = useRef(null);
  const isSubmitted = useRef(false); // To prevent double submission

  // Fetch exam
useEffect(() => {
  async function fetchExam() {
    try {
      const res = await axios.get('http://localhost:8080/api/teacher/getexam');
      const exam = res.data?.exams.find((e) => Number(e.id) === numericExamId);
      setExamData(exam);

      if (exam) {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          setCurrentIndex(parsed.currentIndex || 0);
          setAnswers(parsed.answers || {});
          setVisited(parsed.visited || {});
          setTimeLeft(parsed.timeLeft ?? exam.estimated_time * 60);
          setShowResult(parsed.showResult || false);
        } else {
          setTimeLeft(exam.estimated_time * 60);
        }
      }
    } catch (error) {
      console.error('Error fetching exam:', error);
    }
  }

  fetchExam();
}, [numericExamId]);

useEffect(() => {
  if (!examData) return;

  const stateToSave = {
    currentIndex,
    answers,
    visited,
    timeLeft,
    showResult,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
}, [currentIndex, answers, visited, timeLeft, showResult, examData]);

// localStorage.removeItem(STORAGE_KEY);

  // Timer countdown and auto-submit
  useEffect(() => {
    if (timeLeft !== null && !showResult) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            handleSubmit(); // auto submit
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timerRef.current);
  }, [timeLeft, showResult]);

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleAnswer = (questionId, optionLabel) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionLabel }));
    setVisited((prev) => ({ ...prev, [questionId]: true }));
  };

  

  const calculateResults = () => {
    let attempted = 0, correct = 0;
    examData.questions.forEach((q) => {
      const selected = answers[q.id];
      if (selected) {
        attempted++;
        if (selected === q.correct_option) correct++;
      }
    });
    const total = examData.questions.length;
    return {
      total,
      attempted,
      correct,
      wrong: attempted - correct,
      unattempted: total - attempted,
    };
  };

  if (!examData) return <div className="text-center p-4">Loading...</div>;

  const questions = examData.questions;
  const currentQuestion = questions[currentIndex];
  const result = calculateResults();



  const handleSubmit = async() => {
    if (isSubmitted.current) return;
  clearInterval(timerRef.current);
  setShowResult(true);
  isSubmitted.current = true;

  localStorage.removeItem(STORAGE_KEY); // Clear saved data

  const result = calculateResults();

  const payload={
     examId: numericExamId,
      userId: getUserId(), // You must set this earlier when user logs in
      attempted: result.attempted,
      correct: result.correct,
      wrong: result.wrong,
      unattempted: result.unattempted,
      total: result.total,
      status: 'completed',
      subject: examData.subject,
      chapter: examData.chapter,
  }
  console.log("Submitting exam result:", payload);

  try{

    await axios.post("http://localhost:8080/api/student/saveResult", payload);
    alert("Exam submitted successfully!");
    console.log("Exam submitted successfully!", payload);
  }catch(error){
    console.error('Error submitting exam:', error);
  }

  
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      <div className="md:w-3/4 w-full space-y-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center bg-blue-100 p-4 rounded">
          <div>
            <h2 className="text-xl font-semibold">{examData.subject} - {examData.chapter}</h2>
            <p className="text-sm text-gray-600">Time: {examData.estimated_time} mins</p>
          </div>
          <div className="text-lg font-bold text-red-600">
            ⏳ {formatTime(timeLeft)}
          </div>
        </div>

        {!showResult ? (
          <>
            {/* Question Display */}
            <QuestionCard
              question={currentQuestion}
              selectedOption={answers[currentQuestion.id]}
              onSelectOption={(label) => handleAnswer(currentQuestion.id, label)}
              onVisit={() => setVisited((prev) => ({ ...prev, [currentQuestion.id]: true }))}
            />

            {/* Navigation */}
            <div className="flex justify-between">
              <button
                onClick={() => setCurrentIndex((i) => Math.max(i - 1, 0))}
                className="bg-gray-500 text-white px-4 py-2 rounded disabled:opacity-50"
                disabled={currentIndex === 0}
              >
                ← Previous
              </button>
              <button
                onClick={() => setCurrentIndex((i) => Math.min(i + 1, questions.length - 1))}
                className="bg-gray-500 text-white px-4 py-2 rounded disabled:opacity-50"
                disabled={currentIndex === questions.length - 1}
              >
                Next →
              </button>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                onClick={handleSubmit}
                className="bg-green-600 hover:bg-green-700 mt-4 px-6 py-2 text-white rounded"
              >
                ✅ Submit Exam
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Result Summary */}
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">📊 Result Summary</h3>
              <ul className="text-sm space-y-1">
                <li>Total Questions: {result.total}</li>
                <li>Attempted: {result.attempted}</li>
                <li>✅ Correct: {result.correct}</li>
                <li>❌ Wrong: {result.wrong}</li>
                <li>⚠️ Unattempted: {result.unattempted}</li>
              </ul>
            </div>

            {/* Review Answers */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2">📋 Review Answers:</h4>
              <div className="space-y-4">
                {questions.map((q, idx) => {
                  const userAnswer = answers[q.id];
                  const correctAnswer = q.correct_option;
                  const options = JSON.parse(q.options);
                  return (
                    <div key={q.id} className="border p-4 rounded bg-white shadow-sm">
                      <p className="font-medium mb-2">
                        Q{idx + 1}: {q.question_text}
                      </p>
                      <div className="space-y-1">
                        {options.map((opt) => {
                          const isUser = userAnswer === opt.label;
                          const isCorrect = correctAnswer === opt.label;
                          return (
                            <div
                              key={opt.label}
                              className={`px-3 py-1 rounded border text-sm ${
                                isCorrect
                                  ? 'border-green-500 bg-green-50'
                                  : isUser
                                  ? 'border-red-500 bg-red-50'
                                  : 'border-gray-300'
                              }`}
                            >
                              <strong>{opt.label}.</strong> {opt.text}
                              {isCorrect && <span className="ml-2 text-green-600 font-bold">✅</span>}
                              {isUser && !isCorrect && <span className="ml-2 text-red-600 font-bold">❌</span>}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Palette */}
      <QuestionPalette
        questions={questions}
        answers={answers}
        visited={visited}
        currentIndex={currentIndex}
        onNavigate={setCurrentIndex}
      />
    </div>
  );
};

export default ExamPage;
