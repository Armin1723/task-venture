import React from 'react'

const ResultCard = ({data}) => {
  return (
    <div className="results selection:bg-purple-500 md:mx-12 max-sm:text-xs rounded-md overflow-hidden border border-black bg-gradient-to-br from-violet-400 to-purple-400 hover:bg-gradient-to-r transition duration-700 !important ">
                    <ul className="grid grid-cols-9 justify-between min-w-[80vw] items-center font-bold">
                        <li className='border-b border-black bordr-blue-300 pl-1 py-2 '>Id</li>
                        <li className='border-b border-black bordr-blue-300 pl-1 py-2 col-span-2'>User Id</li>
                        <li className='border-b border-black bordr-blue-300 pl-1 py-2 col-span-3'>Body</li>
                        <li className='border-b border-black bordr-blue-300 pl-1 py-2 col-span-3'>Title</li>
                    </ul>
                    {data.map((item,index) => {
                        return (
                            <ul className="grid grid-cols-9 min-h-fit justify-between min-w-[80vw] items-center" key={index}>
                                <li className='border-b border-black  p-1 h-full font-semibold hover:shadow-lg'>{item.id}</li>
                                <li className='border-b border-black p-1 h-full col-span-2 hover:shadow-lg'>{item.userId}</li>
                                <li className='border-b border-black p-1 h-full col-span-3 hover:shadow-lg'>{item.body.slice(0,100)}...</li>
                                <li className='border-b border-black p-1 h-full col-span-3 hover:shadow-lg'>{item.title}</li>
                            </ul>
                        )}
                    )}
                </div>
  )
}

export default ResultCard
