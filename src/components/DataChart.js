import React from 'react';
import {Bar} from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import useFetch from '../fetchAPI/useFetch';

export default function DataChart() {
  const {loading,error,sortedCountries} = useFetch("https://api.covid19api.com/summary");

  if (loading) return <h1>Loading data...</h1>
  if (error) return <h1>Error on fetching API data :( </h1>
  
  return (
<div className='p-[20px] w-full'>
    <div className='w-[150%] md:w-full'>
    <Bar data={{
        labels:[
        sortedCountries[0]?.Country,
        sortedCountries[1]?.Country,
        sortedCountries[2]?.Country,
        sortedCountries[3]?.Country,
        sortedCountries[4]?.Country,
        sortedCountries[5]?.Country,
        sortedCountries[6]?.Country,
        sortedCountries[7]?.Country,
        sortedCountries[8]?.Country,
        sortedCountries[9]?.Country,
        ],
        datasets:[{
        label:"Top-10 Countries With Most Confirmed Covid-19 Cases (Overall)",
        data:[
            sortedCountries[0]?.TotalConfirmed,
            sortedCountries[1]?.TotalConfirmed,
            sortedCountries[2]?.TotalConfirmed,
            sortedCountries[3]?.TotalConfirmed,
            sortedCountries[4]?.TotalConfirmed,
            sortedCountries[5]?.TotalConfirmed,
            sortedCountries[6]?.TotalConfirmed,
            sortedCountries[7]?.TotalConfirmed,
            sortedCountries[8]?.TotalConfirmed,
            sortedCountries[9]?.TotalConfirmed,
        ],
        backgroundColor:'rgba(252,222,10,0.20)',
        borderColor:'rgba(252,222,10,0.5)',
        borderWidth: 1,
        },
        ],
        
    }}
    options = {{
        plugins: {
                labels: {
                    font: {
                        size: 2,               
                    }
                }
            }
        
    }}
    />
    </div>
    <div className='w-[150%] md:w-full'>
    <Bar data={{
    labels:[
    sortedCountries[0]?.Country,
    sortedCountries[1]?.Country,
    sortedCountries[2]?.Country,
    sortedCountries[3]?.Country,
    sortedCountries[4]?.Country,
    sortedCountries[5]?.Country,
    sortedCountries[6]?.Country,
    sortedCountries[7]?.Country,
    sortedCountries[8]?.Country,
    sortedCountries[9]?.Country,
    ],
    datasets:[
    {
    label:"Number Of Deaths Caused By Covid-19",
    data:[
    sortedCountries[0]?.TotalDeaths,
    sortedCountries[1]?.TotalDeaths,
    sortedCountries[2]?.TotalDeaths,
    sortedCountries[3]?.TotalDeaths,
    sortedCountries[4]?.TotalDeaths,
    sortedCountries[5]?.TotalDeaths,
    sortedCountries[6]?.TotalDeaths,
    sortedCountries[7]?.TotalDeaths,
    sortedCountries[8]?.TotalDeaths,
    sortedCountries[9]?.TotalDeaths,
    ],
    backgroundColor:'rgba(252,2,10,0.20)',
    borderColor:'rgba(252,2,10,0.5)',
    borderWidth: 1,
    }
    ],
    
    }}
    options = {{
    plugins: {
            labels: {
                font: {
                    size: 2,               
                }
            }
        }
    
    }}
    />
    </div>
</div>
  )
}
