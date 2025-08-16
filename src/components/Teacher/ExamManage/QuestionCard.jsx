import React, { useEffect } from 'react';

const QuestionCard = ({ question, selectedOption, onSelectOption, onVisit }) => {
  const options = JSON.parse(question.options);

  useEffect(() => {
    onVisit();
  }, [question.id, onVisit]);

  return (
    <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-800 mb-1">Question {question.id}</h2>
        <p className="text-gray-700 text-lg">{question.question_text}</p>
      </div>
      
      <div className="p-4 space-y-3">
        {options.map((opt) => (
          <div 
            key={opt.label}
            onClick={() => onSelectOption(opt.label)}
            className={`flex items-start p-2 rounded-xl border-2 transition-all duration-200 cursor-pointer
              ${selectedOption === opt.label
                ? 'border-blue-500 bg-blue-50 shadow-sm'
                : 'border-gray-100 hover:border-blue-300 hover:bg-blue-50/50'
              }`}
          >
            <div className={`flex items-center justify-center h-5 w-5 mt-0.5 rounded-full border-2 flex-shrink-0
              ${selectedOption === opt.label 
                ? 'border-blue-500 bg-blue-500'
                : 'border-gray-300'
              }`}>
              {selectedOption === opt.label && (
                <div className="h-2 w-2 rounded-full bg-white"></div>
              )}
            </div>
            <div className="ml-3">
              <span className={`font-medium ${selectedOption === opt.label ? 'text-blue-700' : 'text-gray-700'}`}>
                {opt.label}.
              </span>
              <span className={`ml-2 ${selectedOption === opt.label ? 'text-blue-600' : 'text-gray-600'}`}>
                {opt.text}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="px-6 py-4 bg-gray-50 text-sm text-gray-500">
        Select one option
      </div>
    </div>
  );
};

export default QuestionCard;