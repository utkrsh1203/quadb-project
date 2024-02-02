import React from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  return (
    <div className='relative flex flex-col justify-center min-h-screen overflow-hidden'>
      <div className='w-full p-6 m-auto bg-white rounded-md shadow-xl  ring-2 ring-indigo-600 lg:max-w-xl'>
        <h1 className='text-3xl font-semibold text-center text-black'>
          BOOK TICKETS
        </h1>
        <form className='mt-6'>
          <div className='mb-2'>
            <label
              for='email'
              className='block text-sm font-semibold text-teal-400'
            >
              Firstname
            </label>
            <input
              type='email'
              className='block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40'
            />
          </div>
          <div className='mb-2'>
            <label
              for='email'
              className='block text-sm font-semibold text-teal-400'
            >
              Lastname
            </label>
            <input
              type='email'
              className='block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40'
            />
          </div>
          <div className='mb-2'>
            <label
              for='email'
              className='block text-sm font-semibold text-teal-400'
            >
              Email
            </label>
            <input
              type='email'
              className='block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40'
            />
          </div>
          <div className='mb-2'>
            <label
              for='password'
              className='block text-sm font-semibold text-teal-400'
            >
              Mobile Number
            </label>
            <input
              type='password'
              className='block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40'
            />
          </div>
          <div className='mt-6'>
            <button
              className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-teal-400 rounded-md hover:bg-teal-500 focus:outline-none focus:bg-teal-500'
              onClick={() => navigate("/")}
            >
              Confirm Booking{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
