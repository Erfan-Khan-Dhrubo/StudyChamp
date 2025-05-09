// src/pages/QuizPage.jsx
import React from "react";
import { useLoaderData } from "react-router-dom";

const QuizPage = () => {
  const quizData = useLoaderData(); // Get quiz data from loader
  
  return (
    <div>
      <h2>Quiz: {quizData.title}</h2>
      <form>
        {quizData.map((question, index) => (
          <div key={index} className="mb-4">
            <p>{question.question}</p>
            <div>
              {question.options.map((option, idx) => (
                <div key={idx}>
                  <label>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={idx}
                    />
                    {option}
                  </label>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500">{question.explanation}</p>
          </div>
        ))}
      </form>
    </div>
  );
};

export default QuizPage;
