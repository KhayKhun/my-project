import React, { useRef } from 'react';
import useFetch from '../fetchAPI/useFetch';
import { useParams , useNavigate} from 'react-router-dom';

import back from '../img/back.png'

export default function Countries() {
  
    const navigate = useNavigate();
    const {data,loading,error} = useFetch("https://api.covid19api.com/summary");
    const {CountryName} = useParams();
    let selectedCountry = useRef({});
    if (loading) return <h1>Loading</h1>
    if (error) return <h1>Error on fetching API data :( </h1>
  
    waitdata()
    async function waitdata(){
      const x = data?.Countries.find(i => i.Slug == CountryName.toLocaleLowerCase())
      selectedCountry = x;
    }
  return (
    <div id='container' className='w-full flex flex-col items-end'>
      <div className='md:text-[22px] mt-[10px] my-[3vh] w-full flex'>
        <button className='w-[10%] sm:ml-[20px]'>
          <img 
            className="max-w-[22px] max-h-[22px]"
            src={back}
            onClick={()=>{navigate('/')}}
          />
        </button>
        <h1 className='text-gray-700 font-semibold text-[16px] w-[90%] flex justify-center'>{selectedCountry?.Country} Covid-19 Survey( {selectedCountry?.Date?.slice(0,10)} )</h1>
      </div>
      <hr className='bg-gray-200 h-[1px] w-full'/>
      <div className='infoText w-full grid grid-cols-12 gap-4'>
        {/* information with text */}
        <></>
        <div className='totalInfo w-full col-span-10 flex justify-around'>
          <div className='datatext'>
            <h1>TotalConfirmed:</h1>
            <p>{selectedCountry?.TotalConfirmed}</p>
          </div>
          <div className='datatext'>
            <h1>Total Deaths:</h1>
            <p>{selectedCountry?.TotalDeaths}</p>
          </div>
        </div>

        <div className='todayInfo w-full col-span-10 flex justify-around'>
          <div className='datatext'>
            <h1>Confirmed Today:</h1>
            <p>{selectedCountry?.NewConfirmed}</p>
          </div>
          <div className='datatext'>
            <h1>Deaths Today:</h1>
            <p>{selectedCountry?.NewDeaths}</p>
          </div>
        </div>
      </div>
    </div>  
  )
}
