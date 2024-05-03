import React from 'react'

import ReatImg from '../assets/react.png';
import Github from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Maria from '../assets/mariadb.png';
import Bootstrap from '../assets/bootstrap.png';
import CodeIgniter from '../assets/codeigniter.png';
import DigitalOcean from '../assets/digitalocean.png';
import Laravel from '../assets/laravel.png';
import Mysql from '../assets/mysql2.png';
import Wordpress from '../assets/wordpress.png';
import Netbeans from '../assets/netbeans.png';
import Firebase from '../assets/firebase.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-100'>
        {/* Container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-600'>Skills</p>
                <p className='py-4'>These are the technologies and frameworks I've worked with.</p>
            </div>

            <div className='w-full grid grid-cols-3 sm:grid-cols-6 gap-4 text-center py-6'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Laravel} alt="HTML icon" />
                    <p className='my-4'>Laravel</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Wordpress} alt="HTML icon" />
                    <p className='my-4'>WordPress</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CodeIgniter} alt="HTML icon" />
                    <p className='my-4'>CodeIgniter</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Netbeans} alt="HTML icon" />
                    <p className='my-4'>NetBeans</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReatImg} alt="HTML icon" />
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                    <p className='my-4'>Tailwind</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Bootstrap} alt="HTML icon" />
                    <p className='my-4'>Bootstrap</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={DigitalOcean} alt="HTML icon" />
                    <p className='my-4'>DigitalOcean</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Firebase} alt="HTML icon" />
                    <p className='my-4'>Firebase</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Maria} alt="HTML icon" />
                    <p className='my-4'>MariaDB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Mysql} alt="HTML icon" />
                    <p className='my-4'>MySQL</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Github} alt="HTML icon" />
                    <p className='my-4'>GitHub</p>
                </div>
            </div>

            <div>
                <p className='py-4'>Additional Technologies and Frameworks.</p>
            </div>

        </div>
    </div>
  )
}

export default Skills