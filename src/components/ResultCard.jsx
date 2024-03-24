import React from 'react'

const ResultCard = ({data}) => {
  return (
    <div className="results px-2">
                    <ul className="grid grid-cols-8 justify-between min-w-[80vw] items-center font-semibold">
                        <li className='border border-blue-300 p-2 '>Id</li>
                        <li className='border border-blue-300 p-2 '>User Id</li>
                        <li className='border border-blue-300 p-2 col-span-3'>Body</li>
                        <li className='border border-blue-300 p-2 col-span-3'>Title</li>
                    </ul>
                    {data.map((item,index) => {
                        return (
                            <ul className="grid grid-cols-8 min-h-fit justify-between min-w-[80vw] items-center" key={index}>
                                <li className='border border-blue-300 pl-2 h-full'>{item.id}</li>
                                <li className='border border-blue-300 pl-2 h-full'>{item.userId}</li>
                                <li className='border border-blue-300 pl-2 h-full col-span-3'>{item.body.slice(0,100)}...</li>
                                <li className='border border-blue-300 pl-2 h-full col-span-3'>{item.title}</li>
                            </ul>
                        )}
                    )}
                </div>
  )
}

export default ResultCard
