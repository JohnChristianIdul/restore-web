import React from 'react';
import logoRestore from '../images/logo_restore.png';
import { Button } from '@tremor/react';
import { useNavigate } from 'react-router-dom';

const TopBar = () => {
    const navigate = useNavigate();

    const handleNav = () => {
        navigate('/login');
  };
    return (
        <nav class=" border-gray-200 w-screen">
            <div class="flex flex-wrap items-center justify-between mx-auto p-4 px-7 w-full">
                <a href="http://localhost:5173/landing" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logoRestore} class="h-8" alt="ReStore Logo" />
                    {/* <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ReStore</span> */}
                </a>
                <div className="text-center hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="text-center gap-6 font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <a href="#" className="m-3 block py-4 px-4 text-white rounded md:bg-transparent md:p-0 dark:text-white md:hover:text-emerald-600 hover:underline" aria-current="page">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-2 m-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-emerald-700 md:p-0 dark:text-white md:dark:hover:text-emerald-600 hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              {/* <a href="/login" className="border bg-green-600 text-white p-2 px-4 rounded-lg my-16 md:hover:bg-green-600">Login</a> */}
              <button onClick={handleNav} className="bg-green-600 text-white p-1 px-4 rounded-lg m-2 hover:bg-green-700">
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
};

export default TopBar;
