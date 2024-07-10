import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Aos from 'aos';
import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/footer/footer';
import About from './components/UI/About';
import ContactMe from './components/UI/ContactMe';
import Projects from './components/UI/Projects';
import Skills from './components/UI/Skills';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
 
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  useEffect(() => {
    Aos.init();
  },[])

  const Header=()=>{
    return(
    <header   className="height-[80px] w-full z-[20] flex leading-[80px] items-center" data-aos="fade-in" data-aos-duration="2000">
        <div  className='container mt-[2px]'>
          <div className='flex justify-between items-center '>
            <div className='flex items-center gap-[10px] '>
              <span className='w-[40px] h-[40px] text-[18px] font-[600]  rounded-full flex items-center justify-center border border-solid border-bg-dark text-bg-secondary-dark dark:text-bg-light dark:border-bg-light'>
                  P
              </span>
              <div className='leading-[20px]'>
                <h2 className='text-[18px] font-[700] text-bold font-space text-small-text-color-light dark:text-small-text-color-dark'>
                  Panchami P Kumar
                </h2>
                <p className='text-[15px] font-[500] font-space text-small-text-color-light dark:text-small-text-color-dark'>
                  Frontend Developer
                </p>
              </div>
            </div>
            <div className='Menu hidden md:flex '>
              <ul className='flex flex-row items-center gap-6'>
                <li><a className='font-[600] text-[16px]  hover:text-[17px] font-space text-bg-secondary-dark dark:text-bg-light' href="#about">About</a></li>
                <li><a  className='font-[600] text-[16px]  hover:text-[17px] font-space text-bg-secondary-dark dark:text-bg-light' href="#skills">Skills</a></li>
                <li><a className='font-[600] text-[16px]  hover:text-[17px] font-space text-bg-secondary-dark dark:text-bg-light' href="#projects"> Projects</a></li>
                <li><a className='font-[600] text-[16px]  hover:text-[17px] font-space text-bg-secondary-dark dark:text-bg-light' href="#edu">Education</a></li>
                <li><a className='font-[600] text-[16px]  hover:text-[17px] font-space text-bg-secondary-dark dark:text-bg-light' href="#contact">Contact Me</a></li>
              </ul>
            </div>
            <div  className='flex items-center gap-4'>
              <a href="#contact">
              <button className=' ease-in duration-500 flex items-center gap-2 rounded-[8px] max-h-[35px] border border-solid  text-bg-secondary-dark dark:text-bg-light dark:hover:text-bg-dark hover:font-[600] dark:border-bg-light border-bg-secondary-dark px-4 py-2 text-[14px] hover:bg-bg-dark hover:text-bg-light dark:hover:bg-bg-light '>
                <i className="ri-send-plane-fill font-[200] font-space  hover:font-[600] "></i>Let's Talk
              </button>
              </a>
              <button onClick={toggleMode} className="ease-in duration-[300] text-[25px] hover:text-[23px] leading-[15px] ml-[10px]">
                {isDarkMode ? <i className='ri-sun-fill dark:text-bg-light '/> : <FontAwesomeIcon icon={faMoon}  className="small-text-color-light"/>}
              </button>

              <span className='text-2xl font-space text-bg-secondary-dark dark:text-bg-light md:hidden cursor-pointer '>
                <i className='ri-menu-line'></i>
              </span>
            </div>
            
            
          </div>
        </div>
      </header>)

  }

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'} `}>
      <div className=' dark:bg-bg-secondary-dark' >
      <Header/>
      <main>
        <About/>
        <Skills/>
        <Projects/>
        <ContactMe/>
      </main>
      <Footer/>
      </div>
      
    </div>
  );
}

export default App;
