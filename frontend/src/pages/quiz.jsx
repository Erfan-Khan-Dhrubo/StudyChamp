// import React from "react";
// import { useLoaderData } from "react-router";

// const quiz = () => {
//   return <div></div>;
// };

// export default quiz;


// quiz.jsx
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Quiz = () => {
  const quizData = useLoaderData();
  const [answers, setAnswers] = useState(quizData.quiz.map(() => null));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerChange = (questionIndex, selectedOption) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex] = selectedOption;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    let newScore = 0;
    quizData.quiz.forEach((question, index) => {
      if (answers[index] !== null && question.answer.includes(answers[index])) {
        newScore++;
      }
    });
    setScore(newScore);
    setSubmitted(true);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">{quizData.title}</h2>

      <form onSubmit={(e) => e.preventDefault()}>
        {quizData.quiz.map((question, index) => {
          const userAnswer = answers[index];
          const correctAnswerIndex = question.answer[0]; // assuming single correct answer
          const isCorrect = userAnswer === correctAnswerIndex;

          return (
            <div key={index} className="mb-6 border p-4 rounded-md shadow-sm bg-white">
              <h3 className="text-lg font-semibold mb-2">{index + 1}. {question.question}</h3>

              <div className="space-y-2">
                {question.options.map((option, idx) => {
                  const isSelected = userAnswer === idx;
                  const isCorrectOption = submitted && idx === correctAnswerIndex;
                  const isIncorrectSelected = submitted && isSelected && !isCorrect;

                  return (
                    <div key={idx} className="flex items-center">
                      <input
                        type="radio"
                        name={`question-${index}`}
                        id={`option-${index}-${idx}`}
                        value={idx}
                        disabled={submitted}
                        checked={isSelected}
                        onChange={() => handleAnswerChange(index, idx)}
                        className="mr-2 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <label
                        htmlFor={`option-${index}-${idx}`}
                        className={`text-sm ${
                          isCorrectOption
                            ? "text-green-600 font-semibold"
                            : isIncorrectSelected
                            ? "text-red-600"
                            : "text-gray-700"
                        }`}
                      >
                        {option}
                      </label>
                    </div>
                  );
                })}
              </div>

              {submitted && (
                <p className={`mt-2 text-sm font-medium ${isCorrect ? "text-green-600" : "text-red-600"}`}>
                  {isCorrect ? "✅ Correct" : `❌ Incorrect. Correct Answer: ${question.options[correctAnswerIndex]}`}
                </p>
              )}
            </div>
          );
        })}

        {!submitted ? (
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Submit
          </button>
        ) : (
          <div className="text-center mt-6 text-xl font-bold text-blue-700">
            You scored {score} out of {quizData.quiz.length}
          </div>
        )}
      </form>
    </div>
  );
};

export default Quiz;


