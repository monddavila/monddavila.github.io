import React from 'react'
import { HiSave } from "react-icons/hi";
import { FaGoogleDrive } from "react-icons/fa";
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
import Css from '../assets/css.png';
import Html from '../assets/html.png';
import Msoffice from '../assets/msoffice.png';
import Vba from '../assets/vba.png';
import Erp from '../assets/erp.png';

const Profile = () => {
  return (
    <div name='profile' className='w-full md:h-full bg-gradient-to-b from-gray-800 to-black text-gray-100'>
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
                              <img className='w-5' src={Wordpress} alt="Wordpress icon" title="WordPress" />
                            </div>
                            <div className=" p-1 rounded-full mr-2">
                              <img className='w-5' src={Php} alt="PHP icon" title="PHP" />
                            </div>
                            <div className="p-1 rounded-full mr-2">
                              <img className='w-5' src={Javascript} alt="JavaScript icon" title="JavaScript" />
                            </div>
                            <div className="p-1 rounded-full mr-2">
                              <img className='w-5' src={Html} alt="HTML icon" title="HTML" />
                            </div>
                            <div className=" p-1 rounded-full mr-2">
                              <img className='w-5' src={Css} alt="CSS icon" title="CSS" />
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
                              <img className='w-5' src={Wordpress} alt="WordPress icon" title="WordPress" />
                            </div>
                            <div className=" p-1 rounded-full mr-2">
                              <img className='w-5' src={Php} alt="PHP icon" title="PHP" />
                            </div>
                            <div className="p-1 rounded-full mr-2">
                              <img className='w-5' src={Javascript} alt="JavaScript icon" title="JavaScript" />
                            </div>
                            <div className="p-1 rounded-full mr-2">
                              <img className='w-5' src={Bootstrap} alt="Bootstrap icon" title="Bootstrap" />
                            </div>
                            <div className="p-1 rounded-full mr-2">
                              <img className='w-5' src={Mysql} alt="MySQL icon" title="MySQL" />
                            </div>
                            <div className="p-1 rounded-full mr-2">
                              <img className='w-5' src={Digitalocean} alt="DigitalOcean icon" title="DigitalOcean" />
                            </div>
                            <div className="p-1 rounded-full mr-2">
                              <img className='w-5' src={Firebase} alt="Firebase icon" title="Firebase" />
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
                            description="Honed my web development abilities with PHP, built a simple bank application using Java with NetBeans framework. Additionally, explored C++ by creating an employee record system with pay slip generation."
                          />
                          <div className='flex row'>
                            <div className=" p-1 rounded-full mr-2">
                              <img className='w-5' src={Codeigniter} alt="CodeIgniter icon" title="CodeIgniter" />
                            </div>
                            <div className=" p-1 rounded-full mr-2">
                              <img className='w-5' src={Netbeans} alt="NetBeans icon" title="NetBeans" />
                            </div>
                            <div className=" p-1 rounded-full mr-2">
                              <img className='w-5' src={Php} alt="PHP icon" title="PHP" />
                            </div>
                            <div className="p-1 rounded-full mr-2">
                              <img className='w-5' src={Java} alt="Java icon" title="Java" />
                            </div>
                            <div className="p-1 rounded-full mr-2">
                              <img className='w-5' src={Cpp} alt="C++ icon" title="C++" />
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
                          <div className='flex row'>
                            <div className=" p-1 rounded-full mr-2">
                              <img className='w-5' src={Msoffice} alt="MsOffice icon" title="MS Office" />
                            </div>
                            <div className=" p-1 rounded-full mr-2">
                              <img className='w-5' src={Vba} alt="VBA icon" title="Visual Basic" />
                            </div>
                            <div className=" p-1 rounded-full mr-2">
                              <img className='w-5' src={Erp} alt="ERP icon" title="Enterprise Resource Planning" />
                            </div>
                          </div>
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

                    <div className='flex flex-col items-center'>
                      <div className="text-md font-semibold mb-4">Download My Resume</div>
                      <div className="flex gap-4">
                        <a href='/Raymond-Davila-Resume.pdf' download>
                          <button className='text-white group border-2 px-4 py-2 flex items-center hover:bg-yellow-600 hover:border-yellow-600' >Direct
                            <span className='group-hover:zoom duration-300'>
                              <HiSave className='ml-3 animate-bounce w-6 h-6' />
                            </span>
                          </button>
                        </a>
                        <a href="https://drive.google.com/file/d/1Y1e84WP_U5upUGIyNyYlHH0WfZuADgue/view?usp=sharing" target="_blank" rel="noopener noreferrer">
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
        
    </div>
  )
}

export default Profile