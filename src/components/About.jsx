import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>

        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#efef0b]'>
                        About
                    </p>
                </div>
                <div>
                </div>
            </div>
            <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi. I'm Galih, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    <p>
                        I am passionate about building excellent sofware that improves the lives of those around me. I specialize in creating software for client ranging from indviduals and small-businesses all the way to large enterprise corporaions. What would you do if you had a software expert availabe at you fingertips?
                    </p>
                </div>

            </div>
        </div>

    </div>
  )
}

export default About