import React from 'react'

function Footer() {
  return (
    <footer className='bg-bg-secondary-dark dark:bg-bg-dark pt-12'>
      <div className='container'>
        
          <div className="w-full pb-8" >
            <h2 className='hidden md:flex md:text-[15px] leading-10 text-small-text-color-dark font-[600] mb-5 text-[15px]'>
              Student at SRMIST Kattankulathur
            </h2>
            <div className=" flex flex-col md:flex-row justify-between items-center">
            
            <a href="#contact">
              <button className=' ease-in duration-500 flex items-center gap-2 rounded-[8px] max-h-[35px] border border-solid   text-light-for-dark hover:text-bg-dark hover:font-[600] border-bg-light  px-4 py-2 text-[14px]   hover:bg-bg-light '>
                <i className="ri-mail-line font-[200] font-space  hover:font-[600] "></i>Hire me
              </button>
            </a>
            <div className="flex flex-col md:flex-row justify-center items-center">
            
              <a href="https://github.com/pxnchxm1" target='_blank'>
                                        <button className=' ease-in duration-500 flex items-center  max-h-[35px]    text-light-for-dark hover:text-bg-light hover:font-[600]   px-3  text-[14px]   '>
                                            <i className="ri-github-fill font-[200] font-space  hover:font-[600] text-[22px] "></i>
                                        </button>
              </a>
              <a href="https://www.linkedin.com/in/panchxm1/" target='_blank'>
                                        <button className=' ease-in duration-500 flex items-center  max-h-[35px]    text-light-for-dark hover:text-bg-light hover:font-[600]   px-3  text-[14px]   '>
                                            <i className="ri-linkedin-fill font-[200] font-space  hover:font-[600] text-[22px]"></i>
                                        </button>
              </a>
              <a href="https://www.instagram.com/pxnchxmi11/" target='_blank'>
                <button className=' ease-in duration-500 flex items-center  max-h-[35px]    text-light-for-dark hover:text-bg-light hover:font-[600]   px-3 text-[14px]   '>
                                            <i className="ri-instagram-fill font-[200] font-space  hover:font-[600] text-[22px] "></i>
                </button>
              </a>
              <a href="https://leetcode.com/u/_Jk1nluv/" target='_blank'>
                <h2 className=' ease-in duration-500 flex items-center  max-h-[35px]  font-[500]  text-light-for-dark hover:text-bg-light hover:font-[600]   px-3 text-[15px]   '>
                  <i className="ri-link font-[200] font-space  hover:font-[600] text-[15px] mr-[3px] "></i>  Leetcode
                </h2>
              </a>
              <a href="https://www.hackerrank.com/profile/panchxm12002" target='_blank'>
                <h2 className=' ease-in duration-500 flex items-center  max-h-[35px]  font-[500]  text-light-for-dark hover:text-bg-light hover:font-[600]   px-3 text-[15px]   '>
                  <i className="ri-link font-[200] font-space  hover:font-[600] text-[15px] mr-[3px] "></i>  Hackerrank
                </h2>
              </a>
              <h2 className=' ease-in duration-500 flex items-center  max-h-[35px]  font-[500]   text-light-for-dark hover:text-bg-light hover:font-[600]   px-3 text-[15px]  '>
                  <i className="ri-phone-fill font-[200] font-space  hover:font-[600] text-[15px] mr-[3px] "></i>  9799618982
              </h2>
            </div>
            </div>
          </div>
          
        
      </div>

    </footer>
  )
}

export default Footer
