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
                    <p>Hi. I'm Raymond, nice to meet you, learn more about how I bridge the gap!</p>
                  </div>
                  <div>
                    <p>My unique blend of Information Technology and Mining Engineering degrees has equipped me with a strong foundation in problem-solving, data analysis, and process optimization.  This analytical mindset translates seamlessly into the world of software development, where I can leverage my web development experience with frameworks like Laravel and WordPress to build efficient and user-friendly solutions.</p>
                    <br />
                    <p>I'm a fast learner with a passion for technology and automation.  I thrive in collaborative environments that encourage continuous learning, and I'm eager to contribute my skills to real-world projects.  I believe my diverse background and dedication to growth make me a valuable asset to any development team.</p>
                  </div>
            </div>
        

           

                

                

          

        </div>
        
    </div>
  )
}

export default About