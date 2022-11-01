//Search bar component
import React, { useState } from 'react';
import useFetch from '../fetchAPI/useFetch';
import { useNavigate } from 'react-router-dom';
import '../index.css'
// import Countries from "./Countries"

export default function GlobalData() {
    let navigate = useNavigate();
    const {data,loading} = useFetch("https://api.covid19api.com/summary");
    let indexToSelect = -1;
    if(loading) return <h1>Loading data...</h1>
  ListAll()
    async function ListAll(key){
      const x= await data
      const container = document.querySelector('.container');
      container.innerHTML="";
      for(let i=0;i<data?.Countries?.length;i++){
        const container = document.querySelector('.container');
        const singleContainer = document.createElement('div');
        const Cname = document.createElement('span');
        const Cconfirm = document.createElement('span');
        const Cdeath = document.createElement('span');

        Cname.append(data.Countries[i].Country);
        Cconfirm.append(data.Countries[i].TotalConfirmed);
        Cdeath.append(data.Countries[i].TotalDeaths);

        const RankID = document.createElement('span');
        RankID.append((i+1).toString()+".")
        RankID.classList.add("col-span-1")
        Cname.classList.add("col-span-5")
        Cconfirm.classList.add("col-span-3")
        Cdeath.classList.add("col-span-3")

        singleContainer.append(RankID,Cname,Cconfirm,Cdeath);
        singleContainer.id = data.Countries[i].ID;
        singleContainer.classList.add("grid","grid-cols-12","singleContainer")
        singleContainer.addEventListener('click',() => {
          // console.log(data.Countries[i].Slug)
          navigate(`/Countries/${data.Countries[i].Slug}`)
        })
        container.append(singleContainer)
      }
    }
// Search Function //
    function search(event,key){
      if(event.length == 0) {indexToSelect = -1; ListAll()}
      // if (event.length == 0) {ListAll(key)}
      try{
        const container = document.querySelector('.container');
        
        const filteredCountries = data.Countries?.filter(c => {
          return c.Slug.includes(event.toLowerCase()) && c.Slug.charAt(0) === event.charAt(0)
        })

        container.innerHTML="";
          for(let i=0;i<filteredCountries?.length;i++){
            const container = document.querySelector('.container');
            const singleContainer = document.createElement('div');
            const Cname = document.createElement('span');
            const Cconfirm = document.createElement('span');
            const Cdeath = document.createElement('span');

            Cname.append(filteredCountries[i].Country);
            Cconfirm.append(filteredCountries[i].TotalConfirmed);
            Cdeath.append(filteredCountries[i].TotalDeaths);

            const RankID = document.createElement('span');
            RankID.append((i+1).toString()+".")
            RankID.classList.add("col-span-1")
            Cname.classList.add("col-span-5")
            Cconfirm.classList.add("col-span-3")
            Cdeath.classList.add("col-span-3")
  
            singleContainer.append(RankID,Cname,Cconfirm,Cdeath);
            singleContainer.id = filteredCountries[i].ID;
            // console.log(singleContainer.id)
            singleContainer.classList.add("grid","grid-cols-12","w-full","singleContainer")
            singleContainer.addEventListener('click',() => {
              // console.log(filteredCountries[i].Slug)
              navigate(`/Countries/${filteredCountries[i].Slug}`)
            })
            container.append(singleContainer)
          }
            if (key == "ArrowDown"){
              if(indexToSelect == filteredCountries.length -1){
                indexToSelect = filteredCountries.length -1
                const containerIDToSelect = filteredCountries[indexToSelect].ID;
                const containerToSelect = document.getElementById(containerIDToSelect);
  
                containerToSelect.classList.add('selected');
              }else{
                console.log('presed down')
                indexToSelect += 1;
                console.log(indexToSelect)
                const containerIDToSelect = filteredCountries[indexToSelect].ID;
                const containerToSelect = document.getElementById(containerIDToSelect);
  
                containerToSelect.classList.add('selected');
              }
            }
            if (key == "ArrowUp"){
              if (indexToSelect == 0){
                indexToSelect = 0;
              console.log('presed up')
              console.log(indexToSelect)
              const containerIDToSelect = filteredCountries[indexToSelect].ID;
              const containerToSelect = document.getElementById(containerIDToSelect);

              containerToSelect.classList.add('selected');
              }
              else{
              console.log('presed up')
              indexToSelect -= 1;
              const containerIDToSelect = filteredCountries[indexToSelect].ID;
              const containerToSelect = document.getElementById(containerIDToSelect);

              containerToSelect.classList.add('selected');
            }
            }
            if (key == "Enter"){
              console.log('presed enter')
              const containerToSelect = filteredCountries[indexToSelect].Slug;
              // const containerToSelect = document.getElementById(containerIDToSelect);
              console.log(containerToSelect)
              navigate(`/countries/${containerToSelect}`)
            }
          
          }catch(err){console.log(err)}
      }
// Return 
  return (
    <div className='w-full'>
      <input 
      className='w-full border-[2px] border-blue-400 rounded-sm px-[10px] py-[5px] mt-[10px] focus:outline-blue-800 text-gray-500' 
      placeholder='Search Country...' 
      onKeyUp={(event) => {search(event.target.value,event.key)}}
      />
      <div className='w-full'>
        <div className='w-full grid grid-cols-12 bg-gray-200'>
          <span className='col-span-1 border flex justify-center'>Rank</span>
          <span className='col-span-5 border flex justify-center md:justify-start'>Country Name</span>
          <span className='col-span-3 border flex justify-center md:justify-start'>Confirmed</span>
          <span className='col-span-3 border flex justify-center md:justify-start'>Deaths</span>
        </div>
        <div className='container w-full h-[300px] mb-[20px] md:h-[600px] overflow-y-scroll flex flex-col'>

        </div>
      </div>
    </div>
  )
}