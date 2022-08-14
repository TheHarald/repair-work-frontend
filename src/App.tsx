import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, useNavigate } from "react-router-dom";
import { getWorkerInfoByToken, WorkerInfoProps } from './apiFunctions/requestFuntcions';
import Header from './components/desktop/Header/Header';
import Spinner from './components/desktop/Spinner/Spinner';
import AuthPage from './pages/desktop/AuthPage/AuthPage';
import CreateRequestPage from './pages/desktop/CreteRequestPage/CreateRequestPage';
import MainPage from "./pages/desktop/MainPage/MainPage";
import RegisterPage from './pages/desktop/RegisterPage/RegisterPage';
import StartPage from "./pages/desktop/StartPage/StartPage";

function App() {

  let width = window.screen.width

  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  useEffect( ()=>{
    getWorkerInfoByToken().then( (data)=>{
      console.log('token get ->', data);
      if(data){
          setUser(data)
          setIsLoading(false)
        }})
  },[])

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
      <Header login={user.login}/>
      <Routes>
        <Route path="/" element={<StartPage/>}/>
        <Route path="/request" element={<CreateRequestPage/>}/>
        <Route path="/auth" element={<AuthPage setUser={setUser}/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/main" element={<MainPage worker={user}/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
