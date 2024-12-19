import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();  
    const navigate = useNavigate();   
    const onSubmit = (data) => {
      console.log(data);  
      navigate('/'); 
    };
  return (
    <div>
         <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
        
        <button
          onClick={() => navigate('/')}  
          className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

 
        <h3 className="font-bold text-2xl text-center text-gray-800 mb-6">Cantact Us</h3>
        <form onSubmit={handleSubmit(onSubmit)}> 
         <div className="mb-4">
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

         
          <div className="mb-6">
          <label className="block text-gray-700 mb-1">Message</label>
            <textarea
               placeholder="Type your message here..."
                className="w-full px-4 py-2 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
              ></textarea>
           
          </div>

         
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-700 transition duration-200"
          >
            Submit
          </button>
        </form>
        <Link to="/" className="text-blue-500 hover:underline">
          </Link>
 
      </div>
    </div>
      
    </div>
  )
}

export default Contact
