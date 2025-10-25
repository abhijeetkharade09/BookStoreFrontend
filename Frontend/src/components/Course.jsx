import React from 'react'
// import list from "../../public/list.json"
import axios from "axios"
import {Link} from "react-router-dom"
import Cards from './Cards'
import { useState } from 'react'
import { useEffect } from 'react'

const Course = () => {
    const [book,setBook]=useState([])
    useEffect(()=>{
      const getBook = async () => {
        try{
          const res = await axios.get("https://mern-bookstore-backend-8nbj.onrender.com/book");
          console.log(res.data);
          setBook(res.data);
        }catch(error){
          console.log(error);
        }
      };
      getBook();
    },[])
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
            <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-blue-400'>Here! :)</span></h1>
            <p className='mt-12'>Get a dream book from us and make a great future by deep diving in the world of books by opening the gate of knowledge, technology, motivation and manymore. Just grab your favourite choice and start exploring the path of our goal. It starts now and stop when you reach the destination. So what are you waiting for go select your choice.</p>
            <Link to="/">
            <button className='mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 duration-300'>Back</button>
            </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
           {book.map((item)=>(
            <Cards key={item.id} item={item} />
           ))}
        </div>
    </div>
    </>
  )
}

export default Course

// In frontend to call API or to communicate with API we use Axios library
