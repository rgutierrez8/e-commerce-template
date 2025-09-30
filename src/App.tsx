import { Route, Routes } from 'react-router'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import './App.css'

function App() {

  return (
    <div className="container-90">
      <Routes>
        <Route path="/*" element = {<HomePage/>}/>
        <Route path="/login" element = {<LoginPage/>}/> 
       <Route path="/register" element = {<RegisterPage/>}/> 
      </Routes>
    </div>
  )
}

export default App
