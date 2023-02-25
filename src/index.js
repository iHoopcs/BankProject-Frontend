import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

function App() {
  return (
    <BrowserRouter >
            <Routes>
                <Route path='/' element={<Login />}/>
                <Route path='/signup' element={<Signup />}/>
            </Routes>
        
        </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
