import { Link } from 'react-router-dom';
import './header.css'
import logo from './quiz.png'

export const Header = () => {
    return (
        <div>
            <div className='header row'>
                <div className='QUIZ'>{logo}</div>
                <Link className='Home' to={'/Home'}>Home</Link>
            </div>
        </div>

    )
}