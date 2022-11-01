import React from 'react';
import Profiles from '../pages/Profiles';
import SignIn from '../pages/Signin';
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='w-screen h-[40px] bg-blue-700 flex text-gray-50 justify-between'>
        <div></div>
        <div className='flex items-center gap-5 mr-[30px]'>
            <Link to='../Signin' element={<SignIn/>}>LogIn</Link>
            <Link to='../Profiles/:userName' element={<Profiles/>}>to profiles</Link>
        </div>
    </div>
  )
}
