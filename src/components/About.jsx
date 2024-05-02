import React from 'react'
import WorkExperience from './Experience';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-gray-100'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-600'>About</p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                  <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi. I'm Raymond, nice to meet you, please take a look around.</p>
                  </div>
                  <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
            </div>






            <div>

      
            <h3 className="text-xl font-semibold mb-2">Work Experience</h3>
            <WorkExperience
              company="ABC Company"
              position="Software Engineer"
              duration="Jan 2020 - Present"
              description="Responsible for developing and maintaining web applications using React.js and Node.js."
            />
            <WorkExperience
              company="XYZ Corporation"
              position="Frontend Developer"
              duration="May 2018 - Dec 2019"
              description="Designed and implemented user interfaces for client-facing applications using HTML, CSS, and JavaScript."
            />
          </div>



            



        </div>

        
    </div>
  )
}

export default About