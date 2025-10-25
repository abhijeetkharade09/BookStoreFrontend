import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo={
          email:data.email,
          password:data.password,
        }  
        await axios.post("https://mern-bookstore-backend-8nbj.onrender.com/user/login", userInfo) // axios.post is used to upload or save user data after login
        .then((res)=>{
          console.log(res.data); 
          if(res.data){
            toast.success('Login Successfully');
            document.getElementById("my_modal_3").close();
            setTimeout(()=>{
              window.location.reload();
              localStorage.setItem("Users", JSON.stringify(res.data.user))    // whenever, user is created we have to store it into local storage so we can use it with another components
            },1000);                                                          // now after this use same logic for Login.jsx
          } 
         
        }).catch((err)=>{                                    
          if(err.response){
            console.log(err);
           toast.error("Error: "+err.response.data.message);
           setTimeout(()=> {}, 2000);
          }
        })
  }

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box relative">
          {/* Close button (goes home) - kept outside the form so it won't affect submission */}
          <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
           onClick={()=>document.getElementById("my_modal_3").close()}
          >
            ✕
          </Link>

          <h3 className="font-bold text-lg">Login</h3>

          {/* Form starts here */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br />
              <input
                type='email'
                placeholder='Enter your email'
                className='w-80 px-3 py-1 border rounded-md outline-none'
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
            </div>

            {/* Password */}
            <div className='mt-4 space-y-2'>
              <span>Password</span>
              <br />
              <input
                type='password'
                placeholder='Enter your Password'
                className='w-80 px-3 py-1 border rounded-md outline-none'
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
            </div>

            {/* Button */}
            <div className='flex justify-around mt-4 items-center'>
              <button
                type="submit"
                className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200'
              >
                Login
              </button>

              <p>
                Not registered?{" "}
                <Link to="/signup" className='underline text-blue-500 cursor-pointer'>
                  Signup
                </Link>
              </p>
            </div>
          </form>
          {/* Form ends here */}
        </div>
      </dialog>
    </div>
  )
}

export default Login
