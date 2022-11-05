import React from 'react'
import {NavLink} from 'react-router-dom'
import porto from '../Storage/ListPorto'

const Portfolio = () => {
    
  return (
    <div id='portfolio' name="portfolio" className='w-full md:h-screen bg-[#0a192f] text-gray-300'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#efef0b]'>
                    Portfolio
                </p>
                <p className='py-4'>
                    / Check out some of my portfolio
                </p>
            </div>

            {/* Grid item */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {porto.map((porto) => (
                    <div key={porto.name}
                    style={{backgroundImage: `url(${process.env.PUBLIC_URL+porto.imageUrl})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>

                            <span className='text-2xl font-bold mx-auto text-white tracking-wider'>
                                {porto.name}
                            </span>

                            <div className='pt-8 text-center'>
                                <NavLink to={porto.path} state={porto}>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 text-lg bg-white text-gray-700 font-bold'>Details</button>
                                </NavLink>
                                {/* <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 text-lg bg-white text-gray-700 font-bold'>Code</button>
                                </a> */}
                            </div>

                        </div>

                    </div>
                ))}
                
            </div>
        </div>
    </div>
  )
}

export default Portfolio