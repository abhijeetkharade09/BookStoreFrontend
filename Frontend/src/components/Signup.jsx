import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form"

const Signup = () => {
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => console.log(data);
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
          <span>Name</span>
          <input
            type="text"
            placeholder="Enter your fullname"
            className="w-full px-3 py-2 border rounded-md outline-none"
             {...register("name", { required: true })}
          />
          <br />
          {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
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
