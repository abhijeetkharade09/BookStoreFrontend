import React from 'react'
import Home from './components/home/Home'
import { Routes, Route, Navigate} from "react-router-dom"
import Courses from './components/courses/Courses'
import Signup from './components/Signup'
import Contacts from './components/contacts/Contacts'
import Abouts from './components/abouts/Abouts'
import {Toaster} from "react-hot-toast"
import { useAuth } from './context/AuthProvider'


const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={authUser ? <Courses/> : <Navigate to = "/signup" /> }/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/contact" element={<Contacts/>}/>
        <Route path="/about" element={<Abouts/>}/>
      </Routes>
      <Toaster/>
    </div>
    </>
  )
}

export default App