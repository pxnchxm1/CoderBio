import React from 'react';
import CountUp from 'react-countup';
import { edu } from '../../data/edu';
const Edu = () => {

  return (
    <section id='edu'>
       <div className="container lg:pt-5 flex flex-col items-center justify-center">
            <div className="text-center ">
                <div data-aos='zoom-in' data-aos-duration='1000' className="font-[800]  text-[1.5rem] md:text-[2.5rem] text-bg-secondary-dark dark:text-bg-light hover:text-light-for-light dark:hover:text-light-for-light">Academic Background</div>
            </div>
            {edu && edu.map((course,index)=>{
                return(
                    <div className="flex md:flex-row flex-col w-full mt-[1.5rem] md:justify-between  p-[1rem] ">
                        <div  data-aos='fade-right' data-aos-duration='1500' className='md:ml-[3rem] flex-col flex  items-start justify-between'>
                            <h3 className=' font-[800]  font-space text-[1rem] md:text-[1.5rem] hover:text-bg-secondary-dark dark:text-light-for-dark text-light-for-light dark:hover:text-light-for-light'>{course.name}</h3>
                            <h4 className=' text-[10px] mr-[1rem] md:text-[12px] lg:text-[12px] font-space text-bg-secondary-dark font-[500] dark:text-light-for-light'>{course.institution}</h4>                
                            <h4 className=' text-[10px] mr-[1rem] md:text-[12px] lg:text-[12px] font-space text-bg-secondary-dark font-[600] dark:text-light-for-light'>{course.year}</h4>
                        </div>
                        <h2 data-aos='fade-left' data-aos-duration='1500' className='  text-bg-dark dark:text-card-bg font-[600] text-[22px] md:mt-[0.8rem] mt-0'>
                                <CountUp start={0} end={course.cgpa*10} duration={2} suffix=' %'/>
                        </h2>
                    </div>
                    
                )
            })}
        
        </div> 
    </section>
  )
}

export default Edu
