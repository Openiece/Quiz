import {  Link } from 'react-router-dom';
import { Header } from "./Header"
import "./App.css"

export function App() {
	return (
		<div>
			<div className='Header'>
				<Header/>
			</div>
			<div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
			<div className='row turulvvd'>
					<Link className='QuizType' to={'/anime'}>Anime quiz</Link>
					<Link className='QuizType' to={'/movie'}>Movie quiz</Link>
					<Link className='QuizType' to={'/animal'}>Animal quiz</Link>
					<Link className='QuizType' to={'/quiz'}>Random quiz</Link>
					<Link className='QuizType' to={'/country'}>Country quiz</Link>
					<Link className='QuizType' to={'/language'}>Language quiz</Link>
			</div>
			</div>
		</div>
		
	);
};	
