import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Header } from "./Header"
import "./App.css"

function App() {
	return (
		<div>
			<div className='Header'>
				<Header/>
			</div>
			<div className='row turulvvd'>
					<Link className='QuizType' to={'/quiz'}>Anime</Link>
					<Link className='QuizType' to={'/movie'}>Movie</Link>
					<Link className='QuizType' to={'/animal'}>Animal</Link>
			</div>
		</div>
		
	);
};
export default App;		