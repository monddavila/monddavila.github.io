import React from 'react'
import WorkExperience from './Experience';
import { HiSave } from "react-icons/hi";

const About = () => {
  return (
    <div name='about' className='w-full h-full bg-gradient-to-b from-gray-800 to-black text-gray-100'>
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
        

           

                <section className="py-20 max-w-[800px] w-full" id="experience">
                  <div className="container m-auto px-4">
                    <h2 className="text-2xl font-semibold">Work Experiences</h2>
                    <div className="mt-10 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
                      <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                        <h3 className="absolute left-0 text-lg font-semibold">2021</h3>
                        <p>
                          <WorkExperience
                            company="ABC Company"
                            position="Web Developer Intern"
                            duration="Feb 2021 - Mar 2022"
                            description="Responsible for developing and maintaining web applications using React.js and Node.js."
                          />
                        </p>
                      </div>
                      <div className="pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                        <h3 className="absolute left-0 text-lg font-semibold">2020</h3>
                        <p>
                          <WorkExperience
                            company="MJ Crave Digital Advertising Services"
                            position="Freelance Developer"
                            duration="Jan 2020 - Jun 2022"
                            description="Responsible for developing and maintaining web applications using React.js and Node.js."
                          />
                        </p>
                      </div>
                      <div className="pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                        <h3 className="absolute left-0 text-lg font-semibold">2015</h3>
                        <p>
                          <WorkExperience
                            company="Mining Contractors - Mining & Quarry Operations"
                            position="Mining Engineer"
                            duration="Feb 2015 - Jan 2019"
                            description="Responsible for developing and maintaining web applications using React.js and Node.js."
                          />
                        </p>
                      </div>
                      
                    </div>
                  </div>

                    <div className='flex justify-center items-center'>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-600 hover:border-yellow-600' >My Resume
                      <span className='group-hover:zoom duration-300'>
                        <HiSave className='ml-3 animate-bounce w-6 h-6' />
                      </span>
                    </button>
                    </div>
                </section>

                

          

        </div>

        
    </div>
  )
}

export default About