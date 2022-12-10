import React, { useState } from "react";
import { Header } from "./Header";

export function Anime() {
  const questions = [
    {
      questionText: "Who held Naruto hostage when he was born?",
      answerOptions: [
        { answerText: "Madara", isCorrect: true },
        { answerText: "Akatsuki", isCorrect: false },
        { answerText: "Minato", isCorrect: false },
        { answerText: "Obito", isCorrect: false },
      ],
    },
    {
      questionText: "Who was planned to kill by Sasuke?",
      answerOptions: [
        { answerText: "Madara", isCorrect: false },
        { answerText: "Orochimaru", isCorrect: false },
        { answerText: "Itachi Uchiha", isCorrect: true },
        { answerText: "Obito", isCorrect: false },
      ],
    },
    {
      questionText: "Name the legendary Sanin who became the fifth Hokage.",
      answerOptions: [
        { answerText: "Hashirama Senju", isCorrect: false },
        { answerText: "Danzō Shimura ", isCorrect: false },
        { answerText: "Tsunade", isCorrect: true },
        { answerText: "Tobirama Senju", isCorrect: false },
      ],
    },
    {
      questionText: "What does Naruto wear before he became a Genin?",
      answerOptions: [
        { answerText: "Facecasck", isCorrect: false },
        { answerText: "Headband ", isCorrect: false },
        { answerText: "Goggles", isCorrect: true },
        { answerText: "Belt", isCorrect: false },
      ],
    },
	{
		questionText: "Name the type of Jutsu to which Sharingan belongs to?",
		answerOptions: [
		  { answerText: "Kinjustu", isCorrect: false },
		  { answerText: "Taijutsu ", isCorrect: false },
		  { answerText: "Doujutsu", isCorrect: true },
		  { answerText: "Ninjutsu", isCorrect: false },
		],
	  },
	  {
		questionText: "What jutsu is Naruto most proficient in?",
		answerOptions: [
		  { answerText: "Gone", isCorrect: false },
		  { answerText: "Trasnsformation ", isCorrect: false },
		  { answerText: "Shadow Clone Technique", isCorrect: true },
		  { answerText: "Rassengan", isCorrect: false },
		],
	  },
	  {
		questionText: "How many answers did Naruto answer correctly in the first phase of the chunin exam?",
		answerOptions: [
		  { answerText: "He didnt give a test", isCorrect: false },
		  { answerText: "50% ", isCorrect: false },
		  { answerText: "0%", isCorrect: true },
		  { answerText: "100%", isCorrect: false },
		],
	  },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  console.log(questions[currentQuestion]);
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="app">
      <Header />
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}