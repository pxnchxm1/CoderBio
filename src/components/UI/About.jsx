
import React from 'react';
import CountUp from 'react-countup';
import '../../App.css';
import profileimg from '../../assets/images/pic1.jpg';

function About() {
  return (
    <div>
        <section className='pt-0 pl-8' id='about'>
            <div className='container pt-14 '>
                <div className='flex items-center justify-between flex-col md:flex-row pr-5'>
                    <div className='w-full md:basis-1/2 pr-5'>
                        <h5 data-aos="fade-up" data-aos-duration="1500" className='font-[600] font-space mt-[1rem] md:text-[14px] text-[12px] text-light-for-light dark:text-light-for-dark'>Greetings and Thankyou for Checking Out My Work</h5>
                        <h1 data-aos="fade-up" data-aos-duration="1500" className='font-[600] font-space  leading-[35px] sm:leading[46px] mt-[1.4rem] md:text-[2.4rem] text-[25px] text-bg-secondary-dark dark:text-bg-light' >I'm Panchami P Kumar</h1>
                        <h1 data-aos="fade-up" data-aos-duration="1500" className='font-[600] font-space mt-[3px] leading-[35px] sm:leading[46px] md:text-[2.3rem] text-[25px] text-light-for-light dark:text-light-for-dark' >Frontend Developer</h1>
                        <p  data-aos="fade-up" data-aos-duration="1500" className='text-justify font-[600] font-Nunito mt-[8px] leading-[35px] sm:leading[46px] md:text-[14px] text-[12px] text-bg-secondary-dark dark:text-bg-light ' >
                        I thrive on solving complex problems and have a keen eye for creating visually
                        compelling solutions. Learning Enthusiast. Eager to expand my skill set and
                        make meaningful contributions to innovative projects.
                        </p>
                       <div data-aos="fade-up"
                        data-aos-duration='1800'
                        data-aos-delay='200'>
                            <div
                        className='flex items-center gap-6 mt-8'
                        >
                                <a href="#contact">
                                    <button className=' ease-in duration-500 flex items-center gap-2 rounded-[8px] max-h-[35px] border border-solid  text-bg-secondary-dark dark:text-light-for-dark dark:hover:text-bg-dark hover:font-[600] dark:border-bg-light border-bg-secondary-dark px-4 py-2 text-[14px] hover:bg-bg-dark hover:text-bg-light dark:hover:bg-bg-light '>
                                        <i className="ri-mail-line font-[200] font-space  hover:font-[600] "></i>Hire me
                                    </button>
                                </a>
                                <a href="https://drive.google.com/file/d/15Wma_7VYdCyZNTMaN5FW7BxQhxjwZdU1/view?usp=drivesdk ">
                                        <button className=' ease-in duration-500 flex items-center gap-2 rounded-[8px] max-h-[35px] border border-solid  text-bg-secondary-dark dark:text-light-for-dark dark:hover:text-bg-dark hover:font-[600] dark:border-bg-light border-bg-secondary-dark px-4 py-2 text-[14px] hover:bg-bg-dark hover:text-bg-light dark:hover:bg-bg-light '>
                                            <i className="ri-file-pdf-2-fill font-[200] font-space  hover:font-[600] "></i>Resume
                                        </button>
                                </a>
                            
                               
                        </div>
                        <div
                        className='flex items-center gap-[3px] mt-3'
                        
                        >
                                <a className='font-[600] text-[16px]  mt-[3px] hover:text-[17px] mr-[5px] font-space text-bg-secondary-dark dark:text-bg-light' href=''>Follow me on</a>
                                <a href="https://github.com/pxnchxm1" target='_blank'>
                                        <button className=' ease-in duration-500 flex items-center  max-h-[35px]   text-bg-secondary-dark dark:text-light-for-dark dark:hover:text-bg-light hover:font-[600]   px-3  text-[14px]  hover:text-light-for-dark '>
                                            <i className="ri-github-fill font-[200] font-space  hover:font-[600] text-[22px] "></i>
                                        </button>
                                </a>
                                <a href="https://www.linkedin.com/in/panchxm1/" target='_blank'>
                                        <button className=' ease-in duration-500 flex items-center  max-h-[35px]   text-bg-secondary-dark dark:text-light-for-dark dark:hover:text-bg-light hover:font-[600]   px-3  text-[14px]  hover:text-light-for-dark '>
                                            <i className="ri-linkedin-fill font-[200] font-space  hover:font-[600] text-[22px]"></i>
                                        </button>
                                </a>
                                <a href="https://www.instagram.com/pxnchxmi11/" target='_blank'>
                                        <button className=' ease-in duration-500 flex items-center  max-h-[35px]   text-bg-secondary-dark dark:text-light-for-dark dark:hover:text-bg-light hover:font-[600]   px-3 text-[14px]  hover:text-light-for-dark '>
                                            <i className="ri-instagram-fill font-[200] font-space  hover:font-[600] text-[22px] "></i>
                                        </button>
                                </a>
                                <a href="https://leetcode.com/u/_Jk1nluv/" target='_blank'>
                                        <h2 className=' ease-in duration-500 flex items-center  max-h-[35px]  font-[500]  text-bg-secondary-dark dark:text-light-for-dark dark:hover:text-bg-light hover:font-[600]   px-3 text-[15px]  hover:text-light-for-dark '>
                                        <i className="ri-link font-[200] font-space  hover:font-[600] text-[15px] mr-[3px] "></i>  Leetcode
                                        </h2>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='basis-1/3 mt-12 md:mt-10  pr-5'>
                        <figure  data-aos="fade-left" data-aos-duration="1500" className=' flex items-center justify-center'>
                            <img src={profileimg} alt="me" className=' brightness-50 drop-shadow-sm shadow-light-for-dark shadow-sm  max-h-[370px] rounded-full  '></img>
                        </figure>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1500" className='md:basis-1/5 pr-5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end'>
                        <div className='mb-10'>
                            <h2 className='mt-[5px] text-bg-dark dark:text-bg-light font-[700] text-[32px]'>
                                <CountUp start={0} end={188} duration={2} suffix='+'/>
                            </h2>
                            <h4 className='text-light-for-light dark:text-heading-color-dark font-[700] text-[22px] font-space'>Commits </h4>
                            <h2 className='mt-[5px] text-bg-dark dark:text-bg-light font-[700] text-[32px]'>
                                <CountUp start={0} end={3} duration={2} suffix='+'/>
                            </h2>
                            <h4 className='text-light-for-light dark:text-heading-color-dark font-[700] text-[22px] font-space'>Projects</h4>
                            <h2 className='mt-[5px] text-bg-dark dark:text-bg-light font-[700] text-[32px]'>
                                <CountUp start={0} end={9} duration={2} suffix='.5'/>
                            </h2>
                            <h4 className='text-light-for-light dark:text-heading-color-dark font-[700] text-[22px] font-space'>CGPA </h4>
                            <h2 className='mt-[5px] text-bg-dark dark:text-bg-light font-[700] text-[32px]'>
                                <CountUp start={0} end={300} duration={2} suffix='+'/>
                            </h2>
                            <h4 className='text-light-for-light dark:text-heading-color-dark font-[700] text-[22px] font-space'>leetcode </h4>
                        
                        
                        </div>
                        
                    </div>
                </div>
                

            </div>
        </section>
    </div>
)
}

export default About
