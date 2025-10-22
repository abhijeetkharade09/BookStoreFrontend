import React from 'react'
import Home from './components/home/Home'
import { Routes, Route} from "react-router-dom"
import Courses from './components/courses/Courses'
import Signup from './components/Signup'
import Contacts from './components/contacts/Contacts'
import Abouts from './components/abouts/Abouts'


const App = () => {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={<Courses/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/contact" element={<Contacts/>}/>
        <Route path="/about" element={<Abouts/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App