import React, { useState } from 'react';
const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      };
  return (
    <section id="contact">
        <div className="container lg:pt-5 flex flex-col items-center justify-center">
            <div className="text-center ">
                <div className="font-[800] text-[2.5rem] text-bg-secondary-dark dark:text-bg-light hover:text-light-for-light dark:hover:text-light-for-light">Drop a Line</div>
            </div>
            <form data-aos='flip-left' data-aos-duration='2000' onSubmit={handleSubmit} className='flex flex-col dark:bg-bg-light dark:bg-opacity-10 bg-purple-100 bg-opacity-90 backdrop-filter backdrop-blur-lg p-[2rem] hover:opacity-90 rounded-[8px] mt-[1rem] mb-[5rem] justify-center items-center w-[60%]'>
                <div className="mb-4 w-[90%]">
                    <label htmlFor="name" className="font-[700] mb-3 group-hover:font-[600] sm:text-sm md:text-md lg:text-[16px] text-bg-secondary-dark dark:text-card-bg">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-1 flex w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div className="mb-4 w-[90%]">
                    <label htmlFor="email" className="font-[700] mb-3 group-hover:font-[600] sm:text-sm md:text-md lg:text-[16px] text-bg-secondary-dark dark:text-card-bg">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 flex w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div className="mb-4 w-[90%]">
                    <label htmlFor="message" className="font-[700] mb-3 group-hover:font-[600] sm:text-sm md:text-md lg:text-[16px] text-bg-secondary-dark dark:text-card-bg">Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" required className="mt-1 flex w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
                </div>
                <div className="text-center items-center justify-center flex">
                    <button className=' ease-in duration-500 flex items-center gap-2 rounded-[8px] max-h-[35px] border border-solid  text-bg-secondary-dark dark:text-bg-light dark:hover:text-bg-dark hover:font-[600] dark:border-bg-light border-bg-secondary-dark px-4 py-2 text-[14px] hover:bg-bg-dark hover:text-bg-light dark:hover:bg-bg-light '>
                        <i className="ri-mail-send-fill font-[200] font-space  hover:font-[600] "></i>Send
                    </button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default ContactMe
