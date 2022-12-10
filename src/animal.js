import React, { useState } from "react";
import { Header } from "./Header"

export function Animal() {
  const questions = [
    {
      questionText: "Which animal is known as mans best friend? Dog",
      answerOptions: [
        { answerText: "Dog", isCorrect: true },
        { answerText: "Cat", isCorrect: false },
        { answerText: "Fish", isCorrect: false },
        { answerText: "turtle", isCorrect: false },
      ],
    },
    {
      questionText: "What kind of fish is Nemo?",
      answerOptions: [
        { answerText: "Goby Fish", isCorrect: false },
        { answerText: "Cat Fish", isCorrect: false },
        { answerText: "Clown Fish", isCorrect: true },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "What is the only animal that cant jump?(on ground)",
      answerOptions: [
        { answerText: "Cat", isCorrect: false },
        { answerText: "Dog", isCorrect: false },
        { answerText: "Wolf", isCorrect: false },
        { answerText: "Elephant", isCorrect: true },
      ],
    },
    {
      questionText:
        "A scorpion has five pairs of eyes. How many eyes do three scorpions have in total?",
      answerOptions: [
        { answerText: "30", isCorrect: true },
        { answerText: "20", isCorrect: false },
        { answerText: "10", isCorrect: false },
        { answerText: "40", isCorrect: false },
      ],
    },
    {
      questionText: "Which animal is the tallest in the world?",
      answerOptions: [
        { answerText: "Giraffe", isCorrect: true },
        { answerText: "Elephant", isCorrect: false },
        { answerText: "Ostrich", isCorrect: false },
        { answerText: "Brown bear", isCorrect: false },
      ],
    },
    {
      questionText: "Which animal is smarter: a pig or a dog?",
      answerOptions: [
        { answerText: "Pig", isCorrect: true },
        { answerText: "Dog", isCorrect: false },
        { answerText: "Same", isCorrect: false },
        { answerText: "What is dog", isCorrect: false },
      ],
    },
    {
      questionText: "What animal has no bones?",
      answerOptions: [
        { answerText: "Shark", isCorrect: true },
        { answerText: "Cat", isCorrect: false },
        { answerText: "Fish", isCorrect: false },
        { answerText: "Bird", isCorrect: false },
      ],
    },
    {
      questionText: "What color is octopus blood?",
      answerOptions: [
        { answerText: "Blue", isCorrect: true },
        { answerText: "Red", isCorrect: false },
        { answerText: "Black", isCorrect: false },
        { answerText: "Green", isCorrect: false },
      ],
    },
    {
      questionText: "Where is a shrimp's heart located?",
      answerOptions: [
        { answerText: "Head", isCorrect: true },
        { answerText: "Body", isCorrect: false },
        { answerText: "Back", isCorrect: false },
        { answerText: "They dont have heart", isCorrect: false },
      ],
    },
    {
      questionText: "How many noses does a slug have?",
      answerOptions: [
        { answerText: "one", isCorrect: false },
        { answerText: "two", isCorrect: false },
        { answerText: "three", isCorrect: false },
        { answerText: "four", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

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
		<div className='app column'>
			<Header/>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className='Answer-button' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}