
import React, { useState } from 'react';


export function Movie() {
	const questions = [
		{
			questionText: 'What was the first feature-length animated movie ever released?',
			answerOptions: [
				{ answerText: 'Snow White and the Seven Dwarfs', isCorrect: true },
				{ answerText: 'Malicifent', isCorrect: false },
				{ answerText: 'Incredibles', isCorrect: false },
				{ answerText: 'Beauty and the Beast', isCorrect: false },
			],
		},
		{
			questionText: ' In The Matrix, does Neo take the blue pill or the red pill?',
			answerOptions: [
				{ answerText: 'Blue', isCorrect: false },
				{ answerText: 'Red', isCorrect: true },
				{ answerText: 'Didnt take pill', isCorrect: false },
				{ answerText: 'What pill?', isCorrect: false },
			],
		},
		{
			questionText: 'In which movie did Keanu Reeves learn Judo, Brazilian Jiu-Jitsu, marksmanship and driving, and performed about 95% of the fight scenes himself?',
			answerOptions: [
				{ answerText: 'John Wick', isCorrect: true },
				{ answerText: 'Matrix', isCorrect: false },
				{ answerText: 'Man of Tai Chi', isCorrect: false },
				{ answerText: 'To the bone', isCorrect: false },
			],
		},
		{
			questionText: 'How many "Star Wars" movies are there?',
			answerOptions: [
				{ answerText: '12', isCorrect: true },
				{ answerText: '13', isCorrect: false },
				{ answerText: '11', isCorrect: false },
				{ answerText: '14', isCorrect: false },
			],
		},
        {
			questionText: 'Which Disney movie features the "You Can Fly" song?',
			answerOptions: [
				{ answerText: 'Alladin', isCorrect: false },
				{ answerText: 'The lion king', isCorrect: false },
				{ answerText: 'Peter pan', isCorrect: true },
				{ answerText: 'The Hunchback of Notre Dame', isCorrect: false },
			],
		},
        {
			questionText: 'What is the name of the fourth film of the "Mad Max" series, set in the year 2060?',
			answerOptions: [
				{ answerText: 'Mad Max: Fury Road', isCorrect: true },
				{ answerText: 'Mad Max: The Wasteland', isCorrect: false },
				{ answerText: 'Mad Max: Road Warrior', isCorrect: false },
				{ answerText: 'Mad Max: Beyond Thunderdome', isCorrect: false },
			],
		},
        {
			questionText: 'In which movie did Captain America lift Thors hammer (mjölnir)?',
			answerOptions: [
				{ answerText: 'Avengers: Endgame', isCorrect: true },
				{ answerText: 'Avengers: Age of Ultron', isCorrect: false },
				{ answerText: 'Avengers: Infinity War', isCorrect: false },
				{ answerText: 'Avengers: Assemble', isCorrect: false },
			],
		},
        {
			questionText: 'What is the highest grossing movie of all time?',
			answerOptions: [
				{ answerText: 'Avengers: Endgame', isCorrect: false },
				{ answerText: 'Titanic', isCorrect: false },
				{ answerText: 'Avatar', isCorrect: true },
				{ answerText: 'Gone with the Wind', isCorrect: false },
			],
		},
        {
			questionText: 'What does Gollum call the Ring of Power?',
			answerOptions: [
				{ answerText: 'My precious', isCorrect: true },
				{ answerText: 'My gold', isCorrect: false },
				{ answerText: 'My birthday gift', isCorrect: false },
				{ answerText: 'My treasure', isCorrect: false },
			],
		},
        {
			questionText: 'How many white stripes does Nemo have?',
			answerOptions: [
				{ answerText: 'three', isCorrect: true },
				{ answerText: 'two', isCorrect: false },
				{ answerText: 'four', isCorrect: false },
				{ answerText: 'five', isCorrect: false },
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
		<div className='app'>
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
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}