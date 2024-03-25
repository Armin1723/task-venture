import React, { useState } from 'react'

import ResultCard from './ResultCard'
import { DotLoader } from 'react-spinners';

const DataFetch = () => {

    const [limit, setLimit] = useState()
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const fetchData = async (limit) => {
        setData(null)
        setIsLoading(true)
        const result = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
                                    .then(res => res.json())
        setData(result)
        setIsLoading(false)
    }
    const clearData = () => {
        if(data){
            setData(null)
        }
    }
  return (
    <div className='m-4 flex flex-col items-center justify-start gap-12 min-h-screen mt-10'>
        <div className="flex gap-4 max-lg:text-sm">
            <input  
                type="number" 
                name="limit" 
                min={1} max={10} 
                value={limit} 
                onChange={(e)=>setLimit(e.target.value)}
                placeholder='Limit'
                className='bg-transparent px-4 border-2 border-purple-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 rounded-md'
            />
            <button onClick={()=>fetchData(limit)} disabled={!limit || limit < 1} className='py-2 px-4 rounded-md bg-gradient-to-br from-purple-400 hover:border-2 border-purple-700 to-purple-500/30 disabled:cursor-not-allowed disabled:opacity-50'>Fetch Results</button>
            <button onClick={()=>clearData()} disabled={!data} className='py-2 px-4 rounded-md bg-gradient-to-br from-purple-400 hover:border-2 border-purple-700 to-purple-500/30 disabled:cursor-not-allowed disabled:opacity-50'>Clear Data</button>
        </div>
        { data ? <ResultCard data={data}/> : (
            isLoading ? 
                <DotLoader
                loading={isLoading}
                color='#DC90E3'
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
                />
                :
                <p>No Data</p>
        ) }
    </div>
  )
}

export default DataFetch
