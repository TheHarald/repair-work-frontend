import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, useNavigate } from "react-router-dom";
import { getWorkerInfoByToken, WorkerInfoProps } from './apiFunctions/requestFuntcions';
import Header from './components/desktop/Header/Header';
import Notification from './components/desktop/Notification/Notification';
import Spinner from './components/desktop/Spinner/Spinner';
import AuthPage from './pages/desktop/AuthPage/AuthPage';
import CreateRequestPage from './pages/desktop/CreteRequestPage/CreateRequestPage';
import MainPage from "./pages/desktop/MainPage/MainPage";
import RegisterPage from './pages/desktop/RegisterPage/RegisterPage';
import StartPage from "./pages/desktop/StartPage/StartPage";

function App() {

  let width = window.screen.width

  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [succsessMessage, setSuccsessMessage] = useState('')
  const navigate = useNavigate()
  const [user,setUser] = useState<WorkerInfoProps>({
    id:0,
    worker_FIO:'',
    login:'',
    createdAt:'',
    requestId:'',
    updatedAt:''
  })

  return (
    <div>
      <Spinner isVisible={isLoading}/>

      <Notification 
        text={errorMessage} 
        setErrorMessage={setErrorMessage}
        title='Ошибка' 
        type='error'
        />
      <Notification 
        text={succsessMessage} 
        setErrorMessage={setSuccsessMessage}
        title='Успешно' 
        type='ok'
        />

      <Header 
        login={user.login} 
        setIsLoading={setIsLoading} 
        setUser={setUser}/>

      <Routes>
        <Route path="/" element={<StartPage/>}/>
        <Route path="/request" element={<CreateRequestPage setErrorMessage={setErrorMessage} setSuccsessMessage={setSuccsessMessage} />}/>
        <Route path="/auth" element={<AuthPage setErrorMessage={setErrorMessage} setUser={setUser}/>}/>
        <Route path="/register" element={<RegisterPage setErrorMessage={setErrorMessage} setSuccsessMessage={setSuccsessMessage}/>}/>
        <Route path="/main" element={<MainPage worker={user}/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
