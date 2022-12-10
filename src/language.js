import React, { useState } from 'react';
import { Header } from './Header';



export function Language() {
	const questions = [
		{
			questionText: 'Which of the following languages has no alphabet?',
			answerOptions: [
				{ answerText: 'Chinese', isCorrect: true },
				{ answerText: 'U.S.A', isCorrect: false },
				{ answerText: 'Japanese', isCorrect: true },
				{ answerText: 'Korean', isCorrect: false },
			],
		},
		{
			questionText: 'Approximately how many languages are currently spoken in the world today?',
			answerOptions: [
				{ answerText: 'Around 1,000', isCorrect: false },
				{ answerText: 'Around 7,000', isCorrect: true },
				{ answerText: 'About 5,000', isCorrect: false },
                { answerText: 'About 30,000', isCorrect: false },
			],
		},
		{
			questionText: 'How to say “hello” in Spanish?',
			answerOptions: [
				{ answerText: 'Hallo', isCorrect: false },
				{ answerText: 'Hola', isCorrect: true },
				{ answerText: 'Bonjour', isCorrect: false },
				{ answerText: 'Hello', isCorrect: false },
			],
		},
		{
			questionText: 'Which continent has the most languages?',
			answerOptions: [
				{ answerText: 'Asia', isCorrect: true },
				{ answerText: 'Europe', isCorrect: false },
				{ answerText: 'Africa', isCorrect: false },
			],
		},
		{
			questionText: 'How many national languages are there in Switzerland?',
			answerOptions: [
				{ answerText: '2', isCorrect: false },
				{ answerText: '3', isCorrect: false },
				{ answerText: '4', isCorrect: true },
			],
		},
		{
			questionText: 'Which country has up to 16 official languages?',
			answerOptions: [
				{ answerText: 'Zimbabwe', isCorrect: true },
				{ answerText: 'South Africa', isCorrect: false },
				{ answerText: 'Spain', isCorrect: false },
			],
		},
		{
			questionText: 'Which language has the most native speakers in the world, with more than 900 million people?',
			answerOptions: [
				{ answerText: 'English', isCorrect: true },
				{ answerText: 'Mandarin Chinese', isCorrect: false },
				{ answerText: 'Spanish', isCorrect: false },
			],
		},
		{
			questionText: 'Around how many languages are spoken in the U.S.A. today?',
			answerOptions: [
				{ answerText: '50', isCorrect: false },
				{ answerText: '300', isCorrect: true },
				{ answerText: '700', isCorrect: false },
				{ answerText: '1,000', isCorrect: false },
			],
		},
		{
			questionText: 'How many languages are there in the world?',
			answerOptions: [
				{ answerText: 'Around 7,000', isCorrect: true },
				{ answerText: 'Around 10,000', isCorrect: false },
				{ answerText: 'Around 20,000', isCorrect: false },
			],
		},
		{
			questionText: 'Which language is more older?',
			answerOptions: [
				{ answerText: 'Egyptian', isCorrect: true },
				{ answerText: 'Greek', isCorrect: false },
				{ answerText: 'Hebrew', isCorrect: false },
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