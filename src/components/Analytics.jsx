import React from 'react'
import mining from '../assets/data_mining.png'
import webscrape from '../assets/data_webscraping.png'
import sales from '../assets/data_sales.png'
import ecommerce from '../assets/data-ecommerce.png'
import hr from '../assets/data_hr.png'
import nobel from '../assets/data_nobel.png'

import { FaRegArrowAltCircleRight } from "react-icons/fa";



const Analytics = () => {
  return (
    <div name='analytics' className='w-full md:h-screen text-gray-100 bg-gradient-to-b from-black to-gray-800'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-600'>Data Analytics</p>
                <p className='py-6'>Discover my data-driven solutions. <strong><em>"Let's transform your data into actionable insights!"</em></strong></p>

            </div>

            {/* Container*/}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* Grid Item */}
                <div 
                style={{backgroundImage: `url(${sales})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-xl font-bold text-white tracking-wider text-center'>
                        <p>Executive Sales Report</p>
                        </span>
                        <p>Sales Dashboard for a Retail Company</p>
                        <div className='flex row'>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>PowerBI</span>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>DAX</span>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>Power Query</span>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>Data Analysis</span>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>ETL</span>
                        </div>

                        <div className='pt-8 text-center'>
                            <a href='https://medium.com/@raymonddavila/unleash-your-sales-potential-building-an-interactive-sales-dashboard-in-powerbi-d40b189cfb99' target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Details</button>
                            </a>
                        </div>

                    </div>
                </div>
                <div 
                style={{backgroundImage: `url(${mining})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-xl font-bold text-white tracking-wider text-center'>
                        <p>Mining Operation Dashboard</p>
                        </span>
                        <p>With Productions Statistics and KPIs</p>
                        <div className='flex row'>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>MS Excel</span>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>Power Pivot</span>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>Modeling</span>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>Power Pivot</span>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>ETL</span>
                        </div>
                        <div className='pt-8 text-center'>
                            <a href='https://medium.com/@raymonddavila/from-data-to-insights-building-a-mining-operation-dashboard-0a6aa5d50ea5' target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Details</button>
                            </a>
                        </div>

                    </div>
                </div>

                <div 
                style={{backgroundImage: `url(${hr})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-xl font-bold text-white tracking-wider text-center'>
                        <p>Human Resources Data Analytics</p>
                        </span>
                        <p className='text-center'>HR Data Reports with Metrics Visualization</p>
                        <div className='flex row'>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>PowerBI</span>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>DAX</span>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>Power Query</span>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>Data Analysis</span>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>ETL</span>
                        </div>
                        <div className='pt-8 text-center'>
                            <a href='/' target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Details</button>
                            </a>
                        </div>

                    </div>
                </div>

                <div 
                style={{backgroundImage: `url(${webscrape})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-xl font-bold text-white tracking-wider text-center'>
                        <p>Website Scraping</p>
                        </span>
                        <p>Extracting Data from Web Pages and APIs</p>
                        <div className='flex row'>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>Python</span>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>Scrapy</span>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>Pandas</span>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>NumPy</span>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>Jupyter</span>
                        </div>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/monddavila/web-scraping' target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Details</button>
                            </a>
                        </div>

                    </div>
                </div>

                {/* Grid Item */}
                
                <div 
                style={{backgroundImage: `url(${ecommerce})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-xl font-bold text-white tracking-wider text-center'>
                        <p>Online Retail Exploratory Data Analysis</p>
                        </span>
                        <p>EDA using Python with Visualization</p>
                        <div className='flex row'>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>Python</span>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>NumPy</span>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>Pandas</span>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>Jupyter</span>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>Matplotlib</span>
                        </div>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/monddavila/Online-Retail-Data-Analysis/blob/main/online_retail_analysis.ipynb' target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Details</button>
                            </a>
                        </div>

                    </div>
                </div>
                <div 
                style={{backgroundImage: `url(${nobel})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-xl font-bold text-white tracking-wider text-center'>
                        <p>Visualizing the History of Nobel Prize Winners</p>
                        </span>
                        <p>Data Analysis with Python and Seaborn</p>
                        <div className='flex row'>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>Python</span>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>NumPy</span>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>Pandas</span>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>Seaborn</span>
                            <span className='text-[10px] text-center px-1 py-1 m-1 bg-blue-300 border border-grey-800 text-black'>Matplotlib</span>
                        </div>
                        <div className='pt-8 text-center'>
                            <a href='https://medium.com/@raymonddavila/visualizing-the-history-of-nobel-prize-winners-514fab52924a' target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Details</button>
                            </a>
                        </div>

                    </div>
                </div>

                
            </div>

            <div className='flex py-4 justify-center items-center'>

                <a href="https://medium.com/@raymonddavila" target="_blank" rel="noopener noreferrer" className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-600 hover:border-yellow-600'>
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

export default Analytics