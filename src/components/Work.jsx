import React from 'react'
import crave from '../assets/craver.png'
import philfutures from '../assets/philfutures.png'
import ibake from '../assets/ibake.png'
import esme from '../assets/esme.png'
import realEstate from '../assets/realestate.jpg'
import WorkImg from '../assets/workImg.jpeg'
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Work = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-gray-100 bg-gradient-to-b from-gray-800 to-black'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-600'>Projects</p>
                <p className='py-6'>Get a glimpse of my capabilities. <strong><em>"Explore my work and see how I can bridge the gap for you!"</em></strong></p>

            </div>

            {/* Container*/}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* Grid Item */}
                <div 
                style={{backgroundImage: `url(${ibake})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-xl font-bold text-white tracking-wider text-center'>
                        <p>Full E-commerce Website</p>
                        </span>
                        <p>Online Ordering System</p>
                        <div className='flex row'>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>Laravel</span>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>Bootstrap</span>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>PHP</span>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>AJAX</span>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>RDBMS</span>
                        </div>

                        <div className='pt-8 text-center'>
                            <a href='https://www.ibakeph.me'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/monde1023/ibake'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>

                    </div>
                </div>
                <div 
                style={{backgroundImage: `url(${crave})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-xl font-bold text-white tracking-wider text-center'>
                        <p>B2B Platform</p>
                        </span>
                        <p>All in One App for on-demand services</p>
                        <div className='flex row'>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>Laravel</span>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>WordPress</span>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>PHP</span>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>RDBMS</span>
                        </div>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Details</button>
                            </a>
                            
                        </div>

                    </div>
                </div>
                <div 
                style={{backgroundImage: `url(${philfutures})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-xl font-bold text-white tracking-wider text-center'>
                        <p>Organization Platform</p>
                        </span>
                        <p>Web app with membership and events</p>
                        <div className='flex row'>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>WordPress</span>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>Elementor</span>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>PHP</span>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>Plugins</span>
                        </div>
                        <div className='pt-8 text-center'>
                            <a href='https://phfutures.com' target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                          
                        </div>

                    </div>
                </div>

                {/* Grid Item */}
                <div 
                style={{backgroundImage: `url(${esme})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-xl font-bold text-white tracking-wider text-center'>
                        <p>Learning Management</p>
                        </span>
                        <p className='text-center'> E-learning Platform</p>
                        <div className='flex row'>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>Thinkific</span>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>CMS</span>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>CSS</span>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>JavaScript</span>
                        </div>
                        <div className='pt-8 text-center'>
                            <a href='https://www.esme.ph/' target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            
                        </div>

                    </div>
                </div>
                <div 
                style={{backgroundImage: `url(${realEstate})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-xl font-bold text-white tracking-wider text-center'>
                        <p>Business Website</p>
                        </span>
                        <p>Business site for Booking & Inquiry</p>
                        <div className='flex row'>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>React JS</span>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>Tailwind CSS</span>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>RDBMS</span>
                        </div>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>

                    </div>
                </div>
                <div 
                style={{backgroundImage: `url(${WorkImg})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-xl font-bold text-white tracking-wider text-center'>
                        <p>Corporate Website</p>
                        </span>
                        <p>Company Information</p>
                        <div className='flex row'>
                        <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>React JS</span>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>Tailwind CSS</span>
                        </div>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>

                    </div>
                </div>

                
            </div>

                <div className='flex py-4 justify-center items-center'>

                <a href="https://github.com/monde1023" target="_blank" rel="noopener noreferrer" className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-600 hover:border-yellow-600'>
                    Show More
                    <span className='group-hover:scale-150 duration-300'>
                        <FaRegArrowAltCircleRight className='ml-3' />
                    </span>
                </a>


             </div>
        </div>
    </div>
  )
}

export default Work