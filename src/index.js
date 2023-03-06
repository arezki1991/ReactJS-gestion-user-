import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';

import UserDetail from './components/UserDetail';
import UserSearch from './components/UserSearch';
import CreateUserForm from './CreateUserForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/users/:id" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;




