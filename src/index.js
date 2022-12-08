import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import {Random} from "./component/question"
import {Animal} from "./animal"
import {Movie} from "./movie"
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route index element={<App />} />
            <Route path="/Home" element={<App />} />
            <Route path="/quiz" element={<Random />} /> 
            <Route path="/animal" element={<Animal />} />
            <Route path="/movie" element={<Movie />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

