import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

import GlobalData from './components/GlobalData';
import Countries from './components/Countries';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './components/Home';
import DataChart from './components/DataChart';
import Aboutme from './components/Aboutme';

export default function App() {

return (
  <BrowserRouter>
<div className='w-screen sticky flex flex-col'>
  <div className='h-[10vh]'></div>
  <div className='grid grid-cols-12 w-full grid-rows-1'>
    <div className='col-span-12 lg:col-span-7 flex flex-col'>
      <div className='w-full'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/countries/:CountryName' element={<Countries/>}/>
          <Route path='/aboutme' element={<Aboutme/>}/>
        </Routes>
      </div>
      <div className='overflow-x-scroll'><DataChart/></div>
    </div>
    <div className='col-span-12 lg:col-span-5'><GlobalData/></div>
  </div>
  <div className='w-full'><Footer/></div>
</div>
  <div className='w-screen fixed top-0 left-0'><NavBar/></div>
  </BrowserRouter>
)}
 
