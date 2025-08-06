import React from 'react';

const getColor = (qid, visited, answers) => {
  if (answers[qid]) return 'bg-green-500'; // attempted
  if (visited[qid]) return 'bg-purple-500'; // visited not attempted
  return 'bg-red-500'; // not visited
};

const QuestionPalette = ({ questions, answers, visited, currentIndex, onNavigate }) => {
  return (
    <div className="lg:w-1/4 ">
      <h3 className="font-bold mb-2">Question Palette</h3>
      <div className="grid grid-cols-5 gap-2">
        {questions.map((q, idx) => (
          <button
            key={q.id}
            className={`w-10 h-10 rounded-full text-white ${getColor(q.id, visited, answers)} ${
              idx === currentIndex ? 'ring-4 ring-yellow-300' : ''
            }`}
            onClick={() => onNavigate(idx)}
          >
            {idx + 1}
          </button>
        ))}
      </div>
      <div className="mt-4 text-sm space-y-1">
        <div><span className="inline-block w-4 h-4 bg-red-500 mr-2"></span> Not Visited</div>
        <div><span className="inline-block w-4 h-4 bg-purple-500 mr-2"></span> Visited</div>
        <div><span className="inline-block w-4 h-4 bg-green-500 mr-2"></span> Attempted</div>
      </div>
    </div>
  );
};

export default QuestionPalette;
