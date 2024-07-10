import React from 'react'

const RightCard=({title,sub,ri})=>{
  return (
    <div className='mt-6 sm:mt-0 sm:mb-12'>
              <div className='flex items-center flex-col sm:flex-row'>
                <div className="flex justify-end w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pl-8">
                    <div data-aos='fade-left' data-aos-duration='1200' className="bg-purple-100 text-bg-secondary-dark dark:bg-purple-200 dark:hover:bg-bg-secondary-dark dark:hover:text-light-for-light p-4 rounded shadow group hover:bg-card-bg hover:text-bg-dark cursor-pointer ease-in duration-1500">
                      <h3 className="font-[700] mb-3 group-hover:font-[600] text-xl " >{title}</h3>
                      <p className="text-[15px] group-hover:font-[500] leading-7">{sub}</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-full bg-card-bg dark:bg-card-bg border-card-bg dark:border-card-bg border-2 w-10 h-10 
                absolute left-1/2  transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                  <figure>
                    < i className={ri}></i>
                  </figure>
                </div>
              </div>
            </div>

  )
}
const LeftCard=({title,sub,ri})=>{
  return (
    <div className='mt-6 sm:mt-0 sm:mb-12'>
              {/*card element */}
              <div className='flex items-center flex-col sm:flex-row'>
                <div className="flex justify-start w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pr-8">
                    <div data-aos='fade-right' data-aos-duration='1200' className="bg-purple-100 text-bg-secondary-dark dark:bg-purple-200 dark:hover:bg-bg-secondary-dark dark:hover:text-light-for-light p-4 rounded shadow group hover:bg-card-bg hover:text-bg-dark cursor-pointer ease-in duration-1500">
                      <h3 className="font-[700] mb-3 group-hover:font-[600] text-xl " >{title}</h3>
                      <p className="text-[15px] group-hover:font-[500] leading-7">{sub}</p>
                    </div>
                  </div>
                </div>
                {/*center-line&img*/}
                <div className="rounded-full bg-card-bg dark:bg-card-bg border-card-bg dark:border-card-bg border-2 w-10 h-10 
                absolute left-1/2  transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                  <figure>
                    < i className={ri}></i>
                  </figure>
                </div>
              </div>
            </div>

  )
}

const Skills = () => {
  
  return (
    <section id='skills'>
      <div className="container lg:pt-11 ">
        <div className="text-center ">
          <div data-aos='zoom-in' data-aos-duration='1000' className="font-[800]  text-[1.9rem] md:text-[2.5rem] text-bg-secondary-dark dark:text-bg-light hover:text-light-for-light dark:hover:text-light-for-light">Areas Of Expertise</div>
        </div>
        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-bg-secondary-dark dark:text-bg-light antialiasedbtext-sm text-semibold">
              <div className="hidden absolute w-1 sm:block bg-card-bg h-full left-1/2 transform-translate-x-1/2"></div>
              <LeftCard title='Frontend Development' sub='Flutter | React.Js | HTML5 | CSS' ri='ri-macbook-line'/>
              <RightCard title='Backend Development' sub='Firebase | Firestore' ri='ri-database-2-fill'/>
              <LeftCard title='Tools' sub='Git | Github | VisualStudio Code | JupyterNotebook ' ri='ri-tools-fill'/>
              <RightCard title='Languages' sub='Python | JavaScript | Java | Dart' ri='ri-global-line'/>
              <LeftCard title='Others' sub='Problem Solving | Leetcode | HackerRank ' ri='ri-lightbulb-flash-fill'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

