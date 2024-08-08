import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleSignUp } from '../controller/SignUpController';

const SignUpView = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const navTo = useNavigate();

  return (
    <div className="flex items-center justify-center h-[90vh]">
        <div className="w-full max-w-md flex flex-col m-1 space-y-8 bg-gray-200 shadow-2xl rounded-2xl p-8 md:p-8">
        <div className="flex flex-col justify-center">
          <h2 className="mb-3 text-4xl font-bold text-gray-900">ReStore</h2>
          <span className="font-light text-gray-600 mb-4">
           Create your account by entering your details below
          </span>
          <form className='px-4' onSubmit={(e) => handleSignUp(e, { name, username, password}, navTo)}>
          <div className="py-1 mb-3">
            <label htmlFor="name" className="block mb-2 text-md font-medium text-gray-800">
              Name
            </label>
            <input
              type="text"
              className="w-full bg-white p-2 border text-gray-700 border-gray-300 rounded-md placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="py-1 mb-3">
            <label htmlFor="username" className="block mb-2 text-md font-medium text-gray-800">
              Username
            </label>
            <input
              type="text"
              className="w-full bg-white p-2 border text-gray-700 border-gray-300 rounded-md placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
              name="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="py-2">
            <label htmlFor="pass" className="block mb-2 text-md font-medium text-gray-800">
              Password
            </label>
            <input
              type="password"
              name="pass"
              id="pass"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white text-gray-700 p-2 border border-gray-300 rounded-md placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 "
            />
          </div>
          <button
            className="w-full bg-emerald-600 text-white p-2 rounded-lg mb-6 mt-2 hover:bg-emerald-700"
          >
            Login
          </button>
          </form>
          <div className="text-center text-xs text-gray-600">
            Already have an account? {' '}
            <a href="/login" className="font-bold text-emerald-600 hover:text-emerald-700">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpView;
