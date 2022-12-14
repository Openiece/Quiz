import React, { useState } from 'react';
import { Header } from "../Header"


export function Random() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
		{
			questionText: 'What does BBC stands for?',
			answerOptions: [
				{ answerText: 'British Broadcasting Company', isCorrect: false },
				{ answerText: 'British Broadcasting Corporation', isCorrect: true },
				{ answerText: 'British Broadcasting Corporate', isCorrect: false },
				{ answerText: 'Big Black C', isCorrect: false },
			],
		},
		{
			questionText: 'How many days are in a leap year?',
			answerOptions: [
				{ answerText: '364', isCorrect: false },
				{ answerText: '363', isCorrect: false },
				{ answerText: '365', isCorrect: false },
				{ answerText: '366', isCorrect: true },
			],
		},
		{
			questionText: 'In fashion, what does YSL stand for?',
			answerOptions: [
				{ answerText: 'Yves Sain Laurent', isCorrect: false },
				{ answerText: 'Yve Saint Laurent', isCorrect: false },
				{ answerText: 'Yves Saint Laury', isCorrect: false },
				{ answerText: 'Yves Saint Laurent', isCorrect: true },
			],
		},
		{
			questionText: 'What is smallest country in the world?',
			answerOptions: [
				{ answerText: 'Tuvalu', isCorrect: false },
				{ answerText: 'Nauru', isCorrect: false },
				{ answerText: 'Monaca', isCorrect: false },
				{ answerText: 'Vatican', isCorrect: true },
			],
		},
		{
			questionText: 'Can you name the planet that is closest to the Sun?',
			answerOptions: [
				{ answerText: 'Jupiter', isCorrect: false },
				{ answerText: 'Mars', isCorrect: false },
				{ answerText: 'Venus', isCorrect: false },
				{ answerText: 'Mercury', isCorrect: true },
			],
		},
		{
			questionText: 'How many vowels are there in the English alphabet?',
			answerOptions: [
				{ answerText: '3', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '5', isCorrect: false },
				{ answerText: '6', isCorrect: true },
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