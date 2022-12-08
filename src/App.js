import {  Link } from 'react-router-dom';
import { Header } from "./Header"
import "./App.css"

function App() {
	return (
		<div>
			<div className='Header'>
				<Header/>
			</div>
			<div className='row turulvvd'>
					<Link className='QuizType' to={'/quiz'}>Cognitive quiz</Link>
					<Link className='QuizType' to={'/movie'}>Movie quiz</Link>
					<Link className='QuizType' to={'/animal'}>Animal quiz</Link>
			</div>
		</div>
		
	);
};
export default App;		