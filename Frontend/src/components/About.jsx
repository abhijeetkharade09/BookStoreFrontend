import React from 'react'
import banner from '/aboutbanner.jpg'

const About = () => {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row'>
        <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32'>
          <div className='space-y-12'>
              <h1 className='text-4xl font-bold'>
                <span className='text-blue-500'>About Us!!</span>
            </h1>
        <p className="text-gray-700 leading-relaxed text-justify max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg  dark:bg-slate-900 dark:text-white dark:border-amber-50">
  Welcome to <strong>Wish Book</strong> — where technology meets the love for books. <br />
  We’re on a mission to make reading smarter, simpler, and more accessible for everyone.
  Our platform offers a seamless space where you can explore thousands of books, both free and paid, all in one place.
  Whether you’re into timeless classics, educational guides, or modern bestsellers, we’ve got something for every reader.
  <br />
  At <strong>Wish Book</strong>, we believe great stories and knowledge should be within everyone’s reach.
  That’s why we provide a rich collection of free books for readers who just want to dive in,
  and premium books for those seeking exclusive, high-quality content.
  Once you make a purchase, your books are instantly available — no waiting, no hassle.
  <br />
  Our goal is simple: To create a digital reading experience that’s intuitive, engaging, and rewarding.
  We’re building a community of passionate readers and learners who believe in the power of stories
  to shape minds and inspire change.
  <br />
  So, whether you’re reading to relax, learn, or grow — your next great book is just a click away.
  <br />
  Join us in redefining the way the world reads.
  <strong> Welcome to Wish Book</strong> — your digital bookshelf for a smarter tomorrow.
</p>

          </div>
        </div>
        <div className='order-1 w-full pl-10 md:w-1/2'>
            <img src={banner} className='w-145 h-210' alt="" />
        </div>
    </div>
    </>
  )
}

export default About