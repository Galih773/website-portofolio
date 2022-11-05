import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import SpringBoot from '../assets/springboot2.png'
import Tailwind from '../assets/tailwind.png'
import Laravel from '../assets/laravel.png'
import SCSS from '../assets/scss.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#efef0b]'>Skills</p>
                <p className='py-4'>/ These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={HTML} alt="html icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={CSS} alt="html icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={SCSS} alt="html icon" />
                    <p className='my-4'>SCSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="html icon" />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="html icon" />
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={SpringBoot} alt="html icon" />
                    <p className='my-4'>Spirng Boot</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="html icon" />
                    <p className='my-4'>Tailwind</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={Laravel} alt="html icon" />
                    <p className='my-4'>Laravel</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Skills