import React, { useState } from 'react'
import { generateReport } from '../services/services';

const PDFReport = ({darkMode}) => {

    const [formData, setFormData] = useState({
        email: '',
        first_name: '',
        last_name: '',
        phone: '',
        company: ''
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

  return (
    <div className='max-sm:w-full md:w-1/2 px-4'>       

        <form  className="max-w-screen-lg mx-auto p-4 border-2 border-blue-600/60 rounded-md py-6" onSubmit={async(e)=>await generateReport(e,formData)}>

            <p className='text-2xl'>Business Card Generator.</p>
            <div  className="relative z-0 w-full my-8 group">
                <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange} 
                    className={`${darkMode && 'text-gray-100'} block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer `} 
                    placeholder=" " 
                    required 
                />
                <label htmlFor="email"  className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Email address</label>
            </div>

            <div  className="grid md:grid-cols-2 md:gap-6">
                <div  className="relative z-0 w-full mb-8 group">
                    <input 
                        type="text" 
                        name="first_name" 
                        value={formData.first_name}
                        onChange={handleChange} 
                        className={`${darkMode && 'text-gray-100'} block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`} 
                        placeholder=" " 
                        required 
                    />
                    <label htmlFor="first_name"  className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">First name</label>
                </div>
                <div  className="relative z-0 w-full mb-8 group">
                    <input 
                        type="text" 
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}  
                        className={`${darkMode && 'text-gray-100'} block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`} 
                        placeholder=" " 
                        required 
                    />
                    <label htmlFor="last_name"  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0  peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Last name</label>
                </div>
            </div>

            <div  className="grid md:grid-cols-2 md:gap-6">
                <div  className="relative z-0 w-full mb-8 group">
                    <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange} 
                        className={`${darkMode && 'text-gray-100'} block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`} 
                        placeholder=" " 
                        required 
                    />
                    <label htmlFor="phone"  className=" peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Phone number</label>
                </div>
                <div  className="relative z-0 w-full mb-8 group">
                    <input 
                        type="text" 
                        name="company" 
                        value={formData.company}
                        onChange={handleChange}
                        className={`${darkMode && 'text-gray-100'} block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`} 
                        placeholder=" " 
                        required 
                    />
                    <label htmlFor="company"  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Company</label>
                </div>
            </div>

            <button type="submit"  className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Generate</button>
        </form>

    </div>
  )}
export default PDFReport
