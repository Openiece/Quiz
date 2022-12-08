import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import './header.css'
import logo from './quiz.png'

export const Header = () => {
    return (
        <div>
            <div className='header row'>
                <div className='row'>
                    <img className='logo' src={logo}></img>
                    <p className='QUIZ'>Quiz</p>
                </div>
                <Link className='Home' to={'/Home'}>Home</Link>
            </div>
        </div>

    )
}