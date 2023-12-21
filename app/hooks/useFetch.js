import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = () => {

    const [ data, setData ] = useState([]);

    const [ isLoading, setIsLoading ] = useState(false);

    const [error, setError] = useState(null)


    const fetchData = async()=>{
         setIsLoading(true)

        try {
            const response = await axios.get('https://1f84-197-232-104-16.ngrok-free.app/products/')

            setData(response.data)
            setIsLoading(false)
        } catch (error) {
            setError(error)
            setIsLoading(false)
        }
    }



    useEffect(() => {  
        fetchData()

    }, [])


    const refetch= ()=>{
        // setIsLoading(true)
        fetchData()
    }
  return {data,isLoading,error, refetch}
}

export default useFetch