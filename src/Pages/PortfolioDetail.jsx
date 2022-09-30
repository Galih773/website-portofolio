import React from 'react'
import ImageSlider from '../components/ImageSlider'
import { useLocation } from 'react-router-dom'

const PortfolioDetail = () => {
    const location = useLocation();
    const porto = location.state;

  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex pt-[6%] p-4'>
        <div className='w-[90%] mx-auto'>
            <div className='pb-3'>
                <p className='text-4xl font-bold inline border-b-4 border-[#efef0b] text-gray-300'>
                    {porto.name}
                </p>
                <p className='text-gray-300 py-4'>
                    / Portfolio {porto.name} Website
                </p>
            </div>
            <div className='flex justify-between'>
                <div className='w-[48%]'>
                    <div className='w-full h-[500px]'>
                        <ImageSlider slides={porto.slide} />
                    </div>
                </div>
                <div className='w-[46%]'>
                    <div>
                        <p className='text-2xl font-bold inline border-b-4 border-[#efef0b] text-gray-300'>Description</p>
                        <p className='mt-4 text-gray-300'>{porto.description}</p>
                    </div>
                    <div className='mt-9'>
                        <p className='text-2xl font-bold inline border-b-4 border-[#efef0b] text-gray-300'>Tools</p>
                        <div className='w-full grid grid-cols-4 gap-4 text-center mt-5 text-white'>
                            {porto.tools.map((tool)=> (
                                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                                    <img className='w-10 mx-auto' 
                                    src={tool.url} alt="html icon" />
                                    <p className='my-4'>{tool.name}</p>
                                </div>
                            ))}
                
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default PortfolioDetail