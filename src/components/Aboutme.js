import React from 'react'

export default function Aboutme() {
  return (
    <div className='bg-white w-screen h-screen fixed left-0 flex justify-center'>
        <div className='w-[80%] md-[60%] text-[18px] md:text-[24px] leading-6 md:leading-8'>
            <h1 className='font-bold my-[13px]'>About me</h1>
            <p>I'm 16 years old random guy from Myanmar.I was learning <span className='font-semibold text-blue-900'>'react-router-dom'</span> a few days ago and I built this website just to test my skill :3.Thats all about me.</p>
            <h1 className='font-bold my-[13px]'>About this website</h1>

            <div className='w-full'>
                <p>Built using:</p>
                <ul className='list-disc ml-[30px]'>
                    <li>React</li>
                    <li>tailwindcss</li>
                    <li>react-router-dom</li>
                    <li>chart.js,react-chartjs-2</li>
                    <li>axios</li>
                </ul>
            </div>
            <p>Used API : <a href='https://api.covid19api.com/summary' className='text-blue-800'>api.covid19api.com/summary</a></p>
            <p>Code : </p>
            <p>Support my page : <a></a></p>
        </div>
    </div>
  )
}
