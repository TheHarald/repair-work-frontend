import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes } from "react-router-dom";
import CreateRequestPage from './pages/desktop/CreteRequestPage/CreateRequestPage';
import MainPage from "./pages/desktop/MainPage/MainPage";
import StartPage from "./pages/desktop/StartPage/StartPage";

function App() {

  let width = window.screen.width

  return (
    <div>
      <Routes>
        <Route path="/" element={<StartPage/>}/>
        <Route path="/request" element={<CreateRequestPage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
