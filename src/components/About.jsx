import React from 'react'


const About = () => {
  return (
    <div name='about' className='w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-gray-100'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                  <p className='text-4xl font-bold inline border-b-4 border-yellow-600'>About</p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                  <p>Hi. I'm Raymond, nice to meet you, learn more about me!</p>
                </div>
                <div>
                  <p>Leveraging a 5-year career in Mining Engineering, especially project management and engineering, I thrived on using Excel formulas and VBAs to automate project costing and report generation. This passion for efficiency fueled my desire to pursue a second degree in IT (2019), equipping me with the technical foundation to excel in software development.</p>
                  <br />
                  <p>I gained hands-on experience building web applications and website with Laravel and WordPress for a startup. This project honed my full-stack development skills (backend scripting, HTML, CSS, JavaScript, JSON), database management (MySQL, MariaDB), and third-party integrations.  Additionally, a web development internship solidified my understanding of CMS management, client service, and cross-team collaboration while focusing on website maintenance, WordPress development with plugins, and user experience design with Elementor.</p>
                </div>
            </div>
        
        </div>
        

        
        
    </div>
  )
}

export default About