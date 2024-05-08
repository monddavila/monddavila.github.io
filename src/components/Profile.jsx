import React from 'react'
import { HiSave } from "react-icons/hi";
import WorkExperience from './Experience';
import Laravel from '../assets/laravel.png';
import Wordpress from '../assets/wordpress.png';
import Php from '../assets/php.png';
import Javascript from '../assets/javascript.png';
import Bootstrap from '../assets/bootstrap.png';
import Digitalocean from '../assets/digitalocean.png';
import Mysql from '../assets/mysql2.png';
import Firebase from '../assets/firebase.png';
import Cpp from '../assets/cpp.png';
import Codeigniter from '../assets/codeigniter.png';
import Netbeans from '../assets/netbeans.png';
import Java from '../assets/java.png';

const Profile = () => {
  return (
    <div name='profile' className='w-full md:h-full bg-gradient-to-b from-black to-gray-800 text-gray-100'>
        <div className='flex flex-col justify-center items-center w-full h-full'>

                <div className="py-20 max-w-[800px] w-full" name="experience">
                  <div className="container m-auto px-4">
                    <h2 className="text-2xl font-semibold">Career History</h2>
                    <div className="mt-10 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
                      <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                        <h3 className="absolute left-0 text-lg font-semibold">2021</h3>
                        <p>
                          <WorkExperience
                            company="ESME Philippines"
                            position="Web Developer Intern"
                            duration="Feb 2021 - Mar 2022"
                            description="Build and manage client websites. Aced data analysis with Google and Matomo to optimize website performance and inform decision-making. Led a 6-person team using Agile methodologies and project management tools."
                          />
                          <div className='flex row'>
                            <div className=" p-1 rounded-full mr-2">
                              <img className='w-5' src={Laravel} alt="Laravel icon" title="Laravel" />
                            </div>
                            <div className=" p-1 rounded-full mr-2">
                              <img className='w-5' src={Wordpress} alt="Laravel icon" title="WordPress" />
                            </div>
                            <div className=" p-1 rounded-full mr-2">
                              <img className='w-5' src={Php} alt="Laravel icon" title="PHP" />
                            </div>
                            <div className="p-1 rounded-full mr-2">
                              <img className='w-5' src={Javascript} alt="Laravel icon" title="JavaScript" />
                            </div>
                          </div>
                        </p>
                        
                      </div>
                      <div className="pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                        <h3 className="absolute left-0 text-lg font-semibold">2020</h3>
                        <p>
                          <WorkExperience
                            company="MJ Crave Digital Advertising Services"
                            position="Freelance Developer"
                            duration="Jan 2020 - Jun 2022"
                            description="Freelanced System Admin & Developer, managing B2B platforms (Laravel & WordPress). Built new features and functionalities while handling cloud infrastructure on DigitalOcean. Adepted at integrating 3rd party applications like payment gateways and SMS APIs."
                          />
                          <div className='flex row'>
                            <div className=" p-1 rounded-full mr-2">
                              <img className='w-5' src={Laravel} alt="Laravel icon" title="Laravel" />
                            </div>
                            <div className=" p-1 rounded-full mr-2">
                              <img className='w-5' src={Wordpress} alt="Laravel icon" title="WordPress" />
                            </div>
                            <div className=" p-1 rounded-full mr-2">
                              <img className='w-5' src={Php} alt="Laravel icon" title="PHP" />
                            </div>
                            <div className="p-1 rounded-full mr-2">
                              <img className='w-5' src={Javascript} alt="Laravel icon" title="JavaScript" />
                            </div>
                            <div className="p-1 rounded-full mr-2">
                              <img className='w-5' src={Bootstrap} alt="Laravel icon" title="Bootstrap" />
                            </div>
                            <div className="p-1 rounded-full mr-2">
                              <img className='w-5' src={Mysql} alt="Laravel icon" title="MySQL" />
                            </div>
                            <div className="p-1 rounded-full mr-2">
                              <img className='w-5' src={Digitalocean} alt="Laravel icon" title="DigitalOcean" />
                            </div>
                            <div className="p-1 rounded-full mr-2">
                              <img className='w-5' src={Firebase} alt="Laravel icon" title="Firebase" />
                            </div>
                          </div>
                        </p>
                      </div>

                      <div className="pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                        <h3 className="absolute left-0 text-lg font-semibold">2019</h3>
                        <p>
                          <WorkExperience
                            company="AMA University"
                            position="BS in Information Technology Student"
                            duration="Jul 2019 - Dec 2023"
                            description="Freelanced System Admin & Developer, managing B2B platforms (Laravel & WordPress). Built new features and functionalities while handling cloud infrastructure on DigitalOcean. Adepted at integrating 3rd party applications like payment gateways and SMS APIs."
                          />
                          <div className='flex row'>
                            <div className=" p-1 rounded-full mr-2">
                              <img className='w-5' src={Codeigniter} alt="Laravel icon" title="CodeIgniter" />
                            </div>
                            <div className=" p-1 rounded-full mr-2">
                              <img className='w-5' src={Netbeans} alt="Laravel icon" title="NetBeans" />
                            </div>
                            <div className=" p-1 rounded-full mr-2">
                              <img className='w-5' src={Php} alt="Laravel icon" title="PHP" />
                            </div>
                            <div className="p-1 rounded-full mr-2">
                              <img className='w-5' src={Java} alt="Laravel icon" title="Java" />
                            </div>
                            <div className="p-1 rounded-full mr-2">
                              <img className='w-5' src={Cpp} alt="Laravel icon" title="C++" />
                            </div>
                          </div>
                        </p>
                      </div>

                      <div className="pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                        <h3 className="absolute left-0 text-lg font-semibold">2015</h3>
                        <p>
                          <WorkExperience
                            company="Mining Contractors - Mining & Quarry Operations"
                            position="Mining Engineer"
                            duration="Feb 2015 - Jan 2019"
                            description="Led a large mining team (120+) to consistently exceed production targets through data-driven process optimization (14% cost reduction, 25% productivity increase). Proven ability to analyze complex systems and implement efficient solutions."
                          />
                        </p>
                      </div>
                      
                    </div>
                  </div>

                    <div className="container m-auto px-4 py-10 ">
                        <h2 className="text-2xl font-semibold">Education</h2>
                            


                        <div class="flex flex-col md:flex-row mt-10">

                        <div class="mb-4 md:w-1/2 md:pr-4">
                            <h3 class="text-md font-semibold">Bachelor of Science in Information Technology</h3>
                            <p class="text-gray-500 font-semibold">AMA University | 2019 - 2024</p>
                            <p class="text-gray-500 font-semibold">Quezon City, Metro Manila, Philippines</p>
                        </div>

                        <div class="mb-4 md:w-1/2 md:pl-4">
                            <h3 class="text-md font-semibold">Bachelor of Science in Mining Engineering</h3>
                            <p class="text-gray-500 font-semibold">Bicol University | 2009 - 2014</p>
                            <p class="text-gray-500 font-semibold">Legazpi City, Albay, Philippines</p>
                        </div>

                        </div>
                    </div>

                    <div className='flex justify-center items-center'>
                    <a href='/Raymond-Davila-Resume.pdf' download>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-600 hover:border-yellow-600' >My Resume
                      <span className='group-hover:zoom duration-300'>
                        <HiSave className='ml-3 animate-bounce w-6 h-6' />
                      </span>
                    </button>
                    </a>
                    </div>
                    
                </div>
        </div>
        
    </div>
  )
}

export default Profile