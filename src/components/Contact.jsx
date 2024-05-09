import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-black  to-gray-800 flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/paoxkwvb" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'> 
                <p className='text-4xl font-bold inline border-b-4 border-yellow-600 text-gray-100'>Contact</p>
                <p className='text-gray-300 py-4'>Ready to discuss how I can contribute to your team? <br />Fill out the form below or connect with me at <a href="mailto:raymonddavila1023@gmail.com" className="text-blue-400 hover:underline">raymonddavila1023@gmail.com</a></p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-yellow-600 hover:norder-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Connect</button>
        </form>
    </div>
  )
}

export default Contact