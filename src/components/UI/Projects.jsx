import React, { useState } from 'react';
import { projects } from '../../data/projects';

const Projects = () => {

  const [filter, setFilter] = useState('All'); 
  const filteredProjects = projects.filter(project => {
    if (filter === 'All') {
      return true; 
    } else {
      return project.category === filter; 
    }
  });
  
  return (
    <section id='projects'>
      <div className="container lg:pt-14 ">
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb-7 sm:mb-0 ">
            <h3 data-aos='zoom-in' data-aos-duration='1000' className="font-[800]  text-[1.9rem] md:text-[2.5rem] text-bg-secondary-dark dark:text-bg-light hover:text-light-for-light dark:hover:text-light-for-light">Project Gallery</h3>
          </div>
          <div className="flex gap-3">
            <button onClick={() => setFilter('All')}  className=' font-nunito ease-in duration-500 font-[700] flex items-center gap-2 rounded-[8px] max-h-[35px] border border-solid border-card-bg text-card-bg dark:text-light-for-dark dark:hover:text-bg-dark hover:font-[600] dark:border-bg-light px-4 py-2 text-[14px] hover:bg-bg-dark hover:text-bg-light dark:hover:bg-bg-light '>
              All
            </button>
            <button onClick={() => setFilter('Next Projects')}  className=' font-nunito ease-in duration-500 font-[700] flex items-center gap-2 rounded-[8px] max-h-[35px] border border-solid border-card-bg text-card-bg dark:text-light-for-dark dark:hover:text-bg-dark hover:font-[600] dark:border-bg-light px-4 py-2 text-[14px] hover:bg-bg-dark hover:text-bg-light dark:hover:bg-bg-light '>
              Next Projects
            </button>
            <button onClick={() => setFilter('Flutter Projects')}  className=' font-nunito ease-in duration-500 font-[700] flex items-center gap-2 rounded-[8px] max-h-[35px] border border-solid border-card-bg text-card-bg dark:text-light-for-dark dark:hover:text-bg-dark hover:font-[600] dark:border-bg-light px-4 py-2 text-[14px] hover:bg-bg-dark hover:text-bg-light dark:hover:bg-bg-light '>
              Flutter Projects
            </button>
            <button onClick={() => setFilter('React Projects')}  className=' font-nunito ease-in duration-500 font-[700] flex items-center gap-2 rounded-[8px] max-h-[35px] border border-solid border-card-bg text-card-bg dark:text-light-for-dark dark:hover:text-bg-dark hover:font-[600] dark:border-bg-light px-4 py-2 text-[14px] hover:bg-bg-dark hover:text-bg-light dark:hover:bg-bg-light '>
              React Projects
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 flex-wrap flex-col mt-20 h-[500]">
          {filteredProjects?.map((projects,index) =>{return(
            <div key={index} data-aos='zoom-in' data-aos-duration='2000' className='flex p-[2rem] mr-[1rem] md:flex-row flex-col bg-slate-500 bg-opacity-10  backdrop-filter backdrop-blur-lg hover:opacity-60'>
              <div className="group max-w-full  rounded-[8px] w-[88.2%] relative z-[1] ">
                <h2 className='font-[800]  font-space text-[1rem] md:text-[1.5rem] text-bg-secondary-dark dark:text-light-for-dark hover:text-light-for-light dark:hover:text-light-for-light'>{projects.title}</h2>
                <div className="flex group  justify-start items-center md:hidden cursor-pointer mt-[0.5rem] mb-[0.5rem] overflow-hidden   ">            
                  <figure className='relative z-[0]  transition-opacity duration-300 group-hover:opacity-50'>
                    <img src={projects.image} alt={projects.title} className='dark:bg-card-bg h-[80px] '/>
                  </figure>
                  <div class="absolute  flex pl-[1rem]  opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <button className=' flex  rounded-[8px] text-[12px]   px-2 py-2  bg-bg-dark text-bg-light dark:bg-card-bg dark:text-bg-secondary-dark font-[600] '>
                      <a href={projects.siteUrl} target='_blank'>visit website<i className='ri-links-line relative z-[1] ml-[5px]'></i></a>
                    </button>
                  </div>
                
                </div>
                <h5 className=" text-justify text-[10px] mr-[1rem] md:text-[12px] lg:text-[12px] font-space text-bg-secondary-dark font-[400] dark:text-light-for-light">{projects.description}</h5>
                <h3 className=' pr-[1rem] text-justify sm:text-[10px] md:text-[12px] lg:text-[12px] font-space text-bg-secondary-dark dark:text-light-for-dark font-[700]'>TechStacks used  </h3>
                  <ul className='flex flex-row  pr-[1rem] pt-[0.3rem]'>
                    {projects.technologies.map((IconComponent, index) => (
                      <li key={index} >
                        <button className='ml-[3px] mr-[3px] ease-in duration-500 flex items-center rounded-[8px] text-[12px] border border-solid  text-bg-secondary-dark dark:text-bg-light dark:hover:text-bg-dark hover:font-[600] dark:border-bg-light border-bg-secondary-dark px-2 py-2  hover:bg-bg-dark hover:text-bg-light dark:hover:bg-bg-light '>
                          <IconComponent/>
                            </button>
                          </li>
                    ))}
                  </ul>
                
                
                </div>
                <div className="relative group hidden md:flex cursor-pointer  overflow-hidden max-w-full   sm:w-[48.5%] md:w-[31.8%] lg:w-[52.2%]   bg-opacity-50  backdrop-filter backdrop-blur-lg p-[1.5rem]">            
                  <figure className='relative z-[0] transition-opacity duration-300 group-hover:opacity-50'>
                    <img src={projects.image} alt={projects.title} className='dark:bg-card-bg h-[200px]'/>
                  </figure>
                  <div class="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <button className=' flex items-center rounded-[8px] text-[12px]   px-2 py-2  bg-bg-dark text-bg-light dark:bg-card-bg dark:text-bg-secondary-dark font-[600] '>
                      <a href={projects.siteUrl} target='_blank'>visit website<i className='ri-links-line relative z-[1] ml-[5px]'></i></a>
                    </button>
                  </div>
                
                </div>
              </div>
          )})}
        </div>
        
      </div>
    </section>
  )
}

export default Projects
