import React, { useState } from 'react'
import ResultCard from './ResultCard'

const DataFetch = () => {

    const [limit, setLimit] = useState(1)
    const [data, setData] = useState(JSON.parse(localStorage.getItem('data')) || null)
    const [isLoading, setIsLoading] = useState(false)
    const fetchData = async (limit) => {
        setData(null)
        setIsLoading(true)
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
                                .then(res => res.json())
    setData(result)
    localStorage.setItem('data', JSON.stringify(result))
    setIsLoading(false)
    }
    const clearData = () => {
        if(localStorage.getItem('data')){
            localStorage.removeItem('data')
            setData(null)
        }
    }
  return (
    <div className=''>
        <input type="number" name="limit" min={1} max={10} value={limit} onChange={(e)=>setLimit(e.target.value)}/>
        <button onClick={()=>fetchData(limit)}>fetch Results</button>
        <button onClick={()=>clearData()}>Clear Data</button>
        { data ? <ResultCard data={data}/> : (
            isLoading ? <p>Loading...</p> : <p>No Data</p>
        ) }
    </div>
  )
}

export default DataFetch
