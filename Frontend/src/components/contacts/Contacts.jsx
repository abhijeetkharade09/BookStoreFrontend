import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Contact from '../Contact'

const Contacts = () => {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
      <Contact/>
    </div>
    <Footer/>

    </>
  )
}

export default Contacts