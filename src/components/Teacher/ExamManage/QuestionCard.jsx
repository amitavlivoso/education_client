import React, { useEffect } from 'react';

const QuestionCard = ({ question, selectedOption, onSelectOption, onVisit }) => {
  const options = JSON.parse(question.options);

  useEffect(() => {
    onVisit(); // mark visited
  }, [question.id]);

  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-2">{question.question_text}</h2>
      <div className="flex flex-col gap-2">
        {options.map((opt) => (
          <label key={opt.label} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name={`question_${question.id}`}
              value={opt.label}
              checked={selectedOption === opt.label}
              onChange={() => onSelectOption(opt.label)}
            />
            {opt.label}. {opt.text}
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
