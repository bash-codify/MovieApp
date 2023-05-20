import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchData = (endpoint='', resource='', search='') => {

     const [moviesdata, setMoviesData] = useState([])
     const [isLoading, setIsLoading] = useState(true);
     const [Iserror, setIsError] = useState(null);
     


    
useEffect  (() => {

    const FetchData = async() =>{
      try {
        const resp = await axios.get(`https://api.themoviedb.org/3/${endpoint}/${resource}?api_key=${process.env.NEXT_PUBLIC_APi_KEY}&language=en-US&page=1&include_adult=false`, {
          params: { query: search }
        });
          setMoviesData(resp.data.results)
          
          setIsLoading(false)
          setIsError(false)
      } catch (error){
        setIsError(true)
        setIsLoading(false)
        console.log(error);
      }

    }

    FetchData()

  }, [endpoint,resource, search])

  return {moviesdata}
}

export default useFetchData