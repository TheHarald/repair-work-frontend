import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes } from "react-router-dom";
import AuthPage from './pages/desktop/AuthPage/AuthPage';
import CreateRequestPage from './pages/desktop/CreteRequestPage/CreateRequestPage';
import MainPage from "./pages/desktop/MainPage/MainPage";
import RegisterPage from './pages/desktop/RegisterPage/RegisterPage';
import StartPage from "./pages/desktop/StartPage/StartPage";

function App() {

  let width = window.screen.width

  return (
    <div>
      <Routes>
        <Route path="/" element={<StartPage/>}/>
        <Route path="/request" element={<CreateRequestPage/>}/>
        <Route path="/auth" element={<AuthPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
