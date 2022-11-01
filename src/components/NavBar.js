import React from 'react';
import {useNavigate} from 'react-router-dom';

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <div className='bg-blue-600 h-[10vh] flex justify-end items-center text-white text-sm md:text-md lg:text-[16px]'>
      <span
      className='hover:underline hover:scale-110 hover:cursor-pointer'
      onClick={()=>{navigate('/')}}
      >
        Home
      </span>
      <span className='mx-[25px] hover:underline hover:scale-110 hover:cursor-pointer'
      onClick={()=>{navigate('/aboutme')}}
      >
      About Me
      </span>
    </div>
  )
}
