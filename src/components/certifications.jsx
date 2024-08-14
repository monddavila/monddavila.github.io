import React from 'react'
import dataanalytics from '../assets/certs/logo_dataanalytics.png';
import google from '../assets/certs/logo_google.png';
import datasense from '../assets/certs/logo_datasense.png';
import datascience from '../assets/certs/logo_datascience.png';
import prc from '../assets/certs/logo_prc.png';
import datacamp from '../assets/certs/logo_datacamp.png';
import jrcybersec from '../assets/certs/logo_jrcybersec.png';
import dict from '../assets/certs/logo_dict.png';

import { FaCertificate } from "react-icons/fa";
import { FaGoogleDrive } from "react-icons/fa";


const Certifications = () => {
  return (
    <div name='certifications' className='w-full md:h-screen bg-gradient-to-b from-black to-gray-800 text-gray-100'>
        {/* Container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-600'>Trainings & Certificates</p>
                <p className='py-4'>Explore my expertise in various technologies and domains.</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-6'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-22 mx-auto' src={google} alt="HTML icon" />
                    <p className='my-4'>Ongoing</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-22 mx-auto' src={datasense} alt="HTML icon" />
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-22 mx-auto' src={dataanalytics} alt="HTML icon" />
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-22 mx-auto' src={datascience} alt="HTML icon" />
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-22 mx-auto' src={prc} alt="HTML icon" />
                    <p className='my-4'>Professional Mining Engineer</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-22 mx-auto' src={datacamp} alt="HTML icon" />
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-22 mx-auto' src={jrcybersec} alt="HTML icon" />
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-22 mx-auto' src={dict} alt="HTML icon" />
                    <p className='my-4'>DICT Sponsored Trainings</p>
                </div>

                
            </div>

            

             <div className='flex flex-col items-center py-6'>
                      <div className="text-md font-semibold mb-4">Check My Learning Initiatives</div>
                      <div className="flex gap-4">
                      <a href="https://www.credly.com/users/raymond-davila.27f11e68" target="_blank" rel="noopener noreferrer">
                          <button className='text-white group border-2 px-4 py-2 flex items-center hover:bg-yellow-600 hover:border-yellow-600' >Credly
                            <span className='group-hover:zoom duration-300'>
                              <FaCertificate className='ml-3 animate-bounce w-6 h-6' />
                            </span>
                          </button>
                        </a>
                        <a href="https://drive.google.com/drive/folders/1GcB29SJV7ovG2xZ_Zu31UC4y7hbMlx55?usp=sharing" target="_blank" rel="noopener noreferrer">
                          <button className='text-white group border-2 px-4 py-2 flex items-center hover:bg-yellow-600 hover:border-yellow-600' >Drive
                            <span className='group-hover:zoom duration-300'>
                              <FaGoogleDrive className='ml-3 animate-bounce w-6 h-6' />
                            </span>
                          </button>
                        </a>
                      </div>
            </div>
            

      

        </div>
    </div>
  )
}

export default Certifications