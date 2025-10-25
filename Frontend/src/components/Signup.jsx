import React from 'react';
import { Link, replace, useLocation, useNavigate } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';

const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = async (data) => {
        const userInfo={
          fullname: data.fullname,
          email:data.email,
          password:data.password,
        }  
        await axios.post("https://mern-bookstore-backend-8nbj.onrender.com/user/signup", userInfo) // axios.post is used to upload or save user data in database after signup
        .then((res)=>{
          console.log(res.data); 
          if(res.data){
            toast.success("Signup Successfully");
            navigate(from , {replace:true})
          }
          localStorage.setItem("Users", JSON.stringify(res.data.user))    // whenever, user is created we have to store it into local storage so we can use it with another components
        }).catch((err)=>{                                                 // now after this use same logic for Login.jsx
          if(err.response){
            console.log(err);
            toast.error("Error: "+err.response.data.message);
          }
        })
      };
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-[600px] relative">
        <Link
          to="/"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </Link>

        <h3 className="font-bold text-lg text-center mb-4">Signup</h3>

    {/* Form starts here */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <div className="mt-4 space-y-2">
          <span>Full Name</span>
          <input
            type="text"
            placeholder="Enter your fullname"
            className="w-full px-3 py-2 border rounded-md outline-none"
             {...register("fullname", { required: true })}
          />
          <br />
          {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
          </div>

        {/* Email */}
        <div className="mt-4 space-y-2">
          <span>Email</span>
          <br />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded-md outline-none"
           {...register("email", { required: true })}
        />
        <br />
        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
        </div>

        {/* Password */}
        <div className="mt-4 space-y-2">
          <span>Password</span>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-3 py-2 border rounded-md outline-none"
          {...register("password", { required: true })}
        />
        <br />
        {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
        </div>

        {/* Button */}
         <div className="flex flex-col items-center mt-6 gap-2">
          <button className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 duration-200 w-full">
            Signup
          </button>
          <p className='text-xl'>
            Have an account?{" "}
            <button className="underline text-blue-500"
            onClick={()=>
                document.getElementById("my_modal_3").showModal()
            }>
              Login
            </button>{" "}
            <Login/>
          </p>
         </div>
      </form>
        {/* Form ends here */}
      </div>
    </div>
  );
};

export default Signup;
