import React from 'react';

function Contact () {
    return(
        <div name="contact" className='w-full h-full bg-[whitesmoke] flex justify-center p-4'>
            <form method="POST" action='https://getform.io/f/2e30dbd7-beae-4712-a51c-095337510813' className='flex flex-col max-w-[600px] w-full'>
              <div className='pd-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#028a0f]'>Contact</p>
                <p className='py-8'>Get in touch with me via the form or the email: <span className='font-bold'>davidmoeti8@gmail.com</span></p>
              </div>
              <input className='my-4 p-2 text-white bg-gray-600' type='text' placeholder='Enter Your Name' name='name' />
              <input className='my-4 p-2 text-white bg-gray-600' type='email' placeholder='Enter Your Email' name='email' /> 
              <textarea className='bg-gray-600 p-2 text-white ' name='message' rows="10" cols="30" placeholder='Enter Your Message'></textarea>
              <button className='border-2 hover:bg-[#028a0f] hover:border-[#028a0f] py-3 px-4 my-8 mx-auto border-[#028a0f] flex items-center ' >Work with me</button>
            </form>

        </div>
            )
};

export default Contact;