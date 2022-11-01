import React from 'react'
import useFetch from '../fetchAPI/useFetch';
import Chart from 'chart.js';

export default function Home() {
  const {data,loading,error} = useFetch("https://api.covid19api.com/summary");

  if (loading) return <h1>Loading data...</h1>
  if (error) return <strong>Updating data on progress... This may take up to 10 minutes.Come back after the process =)</strong>

  return (
    <div id='container' className='w-full flex flex-col items-center'>
      <h1 className='text-gray-700 font-semibold text-[16px] md:text-[22px] mt-[10px] my-[3vh]'>Global Covid-19 Survey( {data?.Date.slice(0,10)} )</h1>
      <hr className='bg-gray-200 h-[1px] w-full'/>
      <div className='infoText w-full grid grid-cols-12 gap-4'>
        {/* information with text */}
        <></>
        <div className='totalInfo w-full col-span-10 flex justify-around'>
          <div className='datatext'>
            <h1>TotalConfirmed:</h1>
            <p>{data?.Global.TotalConfirmed}</p>
          </div>
          <div className='datatext'>
            <h1>Total Deaths:</h1>
            <p>{data?.Global.TotalDeaths}</p>
          </div>
        </div>

        <div className='todayInfo w-full col-span-10 flex justify-around'>
          <div className='datatext'>
            <h1>Confirmed Today:</h1>
            <p>{data?.Global.NewConfirmed}</p>
          </div>
          <div className='datatext'>
            <h1>Deaths Today:</h1>
            <p>{data?.Global.NewDeaths}</p>
          </div>
        </div>
      </div>
</div>
  )
}