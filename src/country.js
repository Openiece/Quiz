import React, { useState } from 'react';
import { Header } from './Header';


export function Country() {
	const questions = [
		{
			questionText: 'What is the second-largest country in the world after Russia?',
			answerOptions: [
				{ answerText: 'China', isCorrect: false },
				{ answerText: 'U.S.A', isCorrect: false },
				{ answerText: 'Canada', isCorrect: true },
				{ answerText: 'Mongolia', isCorrect: false },
			],
		},
		{
			questionText: 'Mouth Kilimanjaro, the highest mountain in Africa, is located in which country?',
			answerOptions: [
				{ answerText: 'Kenya', isCorrect: false },
				{ answerText: 'Tanzania', isCorrect: true },
				{ answerText: 'Lesotho', isCorrect: false },
			],
		},
		{
			questionText: 'Which country will host the 2024 Olympics Summer Games?',
			answerOptions: [
				{ answerText: 'France', isCorrect: true },
				{ answerText: 'Australia', isCorrect: false },
				{ answerText: 'Japan', isCorrect: false },
				{ answerText: 'U.S.A', isCorrect: false },
			],
		},
		{
			questionText: 'Which country is often called Land of Rising Sun?',
			answerOptions: [
				{ answerText: 'South Korea', isCorrect: false },
				{ answerText: 'China', isCorrect: false },
				{ answerText: 'Japan', isCorrect: true },
			],
		},
		{
			questionText: 'Kimono is the national dress of which country?',
			answerOptions: [
				{ answerText: 'Japan', isCorrect: true },
				{ answerText: 'South Korea', isCorrect: false },
				{ answerText: 'China', isCorrect: false },
			],
		},
		{
			questionText: 'What is the most populous country in the European Union?',
			answerOptions: [
				{ answerText: 'Russia', isCorrect: false },
				{ answerText: 'France', isCorrect: false },
				{ answerText: 'Germany', isCorrect: true },
			],
		},
		{
			questionText: 'Which two nations share the longest border in the world?',
			answerOptions: [
				{ answerText: 'USA and Canada', isCorrect: true },
				{ answerText: 'China and Russia', isCorrect: false },
				{ answerText: 'Brazil and Argentina', isCorrect: false },
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
			questionText: 'The Nobel Peace Prize is held every year in which country?',
			answerOptions: [
				{ answerText: 'Denmark', isCorrect: false },
				{ answerText: 'Sweden', isCorrect: false },
				{ answerText: 'Norway', isCorrect: true },
			],
		},
		{
			questionText: 'In which of the following country do people drive their vehicles on the left of the road?',
			answerOptions: [
				{ answerText: 'China', isCorrect: false },
				{ answerText: 'Estonia', isCorrect: false },
				{ answerText: 'Australia', isCorrect: true },
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