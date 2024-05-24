import React from 'react'
import ReatImg from '../assets/react.png';
import Github from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Php from '../assets/php.png';
import Bootstrap from '../assets/bootstrap.png';
import Cpp from '../assets/cpp.png';
import DigitalOcean from '../assets/digitalocean.png';
import Laravel from '../assets/laravel.png';
import Mysql from '../assets/mysql2.png';
import Wordpress from '../assets/wordpress.png';
import Netbeans from '../assets/netbeans.png';
import Firebase from '../assets/firebase.png';
import Python from '../assets/python.png';
import Powerbi from '../assets/powerbi.png';
import Tableau from '../assets/tableau.png';
//import Scrapy from '../assets/scrapy.png';
import Java from '../assets/java.png';
import Javascript from '../assets/javascript.png';
import Html from '../assets/html.png';
import Css from '../assets/css.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-gray-100'>
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
                    <img className='w-20 mx-auto' src={Mysql} alt="HTML icon" />
                    <p className='my-4'>MySQL</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tableau} alt="HTML icon" />
                    <p className='my-4'>Tableau</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Powerbi} alt="HTML icon" />
                    <p className='my-4'>PowerBI</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Github} alt="HTML icon" />
                    <p className='my-4'>GitHub</p>
                </div>
            </div>
            

            <div>
                <p className='py-4'>Additional Technologies and Languages.</p>
                <div className='max-w-[800px] mx-auto'>
                <div className='flex py-3 gap-12 items-center transition duration-300'>
                    <div className='flex row min-w-[90px]   text-xl font-semibold'><span className=" p-1 rounded-full mr-2"><img className='w-5' src={Php} alt="Php" title="Php" /></span>PHP</div><hr className='outline-none border-none w-1/2 h-1.5 rounded-full bg-gradient-to-r from-[#b415ff] to-[#df8908]' style={{width:"70%"}} /></div>
                <div className='flex py-3 gap-10 items-center transition duration-300'>
                    <div className='flex row min-w-[90px]  text-xl font-semibold'><span className=" p-1 rounded-full mr-2"><img className='w-5' src={Python} alt="Python" title="Python" /></span>Python</div><hr className='outline-none border-none w-1/2 h-1.5 rounded-full bg-gradient-to-r from-[#b415ff] to-[#df8908]'  style={{width:"50%"}} /></div>
                <div className='flex py-3 gap-12 items-center transition duration-300'>
                    <div className='flex row min-w-[90px]  text-xl font-semibold'><span className=" p-1 rounded-full mr-2"><img className='w-5' src={Java} alt="Java" title="Java" /></span>Java</div><hr className='outline-none border-none w-1/2 h-1.5 rounded-full bg-gradient-to-r from-[#b415ff] to-[#df8908]'  style={{width:"40%"}} /></div>
                <div className='flex py-3 gap-12 items-center transition duration-300'>
                    <div className='flex row min-w-[90px]  text-xl font-semibold'><span className=" p-1 rounded-full mr-2"><img className='w-5' src={Cpp} alt="Cpp" title="Cpp" /></span>C++</div><hr className='outline-none border-none w-1/2 h-1.5 rounded-full bg-gradient-to-r from-[#b415ff] to-[#df8908]'  style={{width:"30%"}} /></div>
                <div className='flex py-3 gap-8 items-center transition duration-300'>
                    <div className='flex row min-w-[90px]  text-xl font-semibold'><span className=" p-1 rounded-full mr-2"><img className='w-5' src={Javascript} alt="Javascript" title="Javascript" /></span>JavaScript</div><hr className='outline-none border-none w-1/2 h-1.5 rounded-full bg-gradient-to-r from-[#b415ff] to-[#df8908]'  style={{width:"45%"}} /></div>
                <div className='flex py-3 gap-12 items-center transition duration-300'>
                    <div className='flex row min-w-[90px]  text-xl font-semibold'><span className=" p-1 rounded-full mr-2"><img className='w-5' src={Html} alt="Html" title="Html" /></span>HTML</div><hr className='outline-none border-none w-1/2 h-1.5 rounded-full bg-gradient-to-r from-[#b415ff] to-[#df8908]'  style={{width:"70%"}} /></div>
                <div className='flex py-3 gap-12 items-center transition duration-300'>
                    <div className='flex row min-w-[90px]  text-xl font-semibold'><span className=" p-1 rounded-full mr-2"><img className='w-5' src={Css} alt="Css" title="Css" /></span>CSS</div><hr className='outline-none border-none w-1/2 h-1.5 rounded-full bg-gradient-to-r from-[#b415ff] to-[#df8908]'  style={{width:"60%"}} /></div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Skills