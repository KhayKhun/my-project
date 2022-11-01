import { useEffect, useState } from 'react'
import axios from 'axios';

function useFetch(url) {

    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const [sortedCountries,setSortedCountries] = useState([]);
    useEffect(() => {
        setLoading(true);
        axios.get(url).then((response) => {
            setData(response.data);
            // console.log(response.data)
        
            setSortedCountries(response.data.Countries.sort(function(a,b){
                return b.TotalConfirmed - a.TotalConfirmed;}))

        }).catch(err => {
            setError(err)
        }).finally(() => {
            setLoading(false);
        })
    },[url]);
    return {data,loading,error,sortedCountries}
}

export default useFetch;
