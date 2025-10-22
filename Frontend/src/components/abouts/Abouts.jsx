import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import About from '../About'

const Abouts = () => {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
      <About/>
    </div>
    <Footer/>

    </>
  )
}

export default Abouts