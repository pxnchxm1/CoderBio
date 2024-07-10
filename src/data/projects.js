import { DiJavascript } from 'react-icons/di';
import { FaCss3Alt, FaPython, FaReact } from 'react-icons/fa';
import { IoLogoFirebase } from 'react-icons/io5';
import { RiFlutterFill } from "react-icons/ri";
import { SiDart, SiMui } from 'react-icons/si';
import { TbBrandVite } from "react-icons/tb";

export const projects=[
    {
        id:0,
        title:"CineSLICE",
        category:"React Projects",
        description:"This web application, built with React.js, Vite, and Firebase, serves as a platform for users to explore and watch trailers of various movies. Utilizing data from the TMDB (The Movie Database) API, users can discover trending, popular, and upcoming movies, and watch their trailers directly on the platform.",
        image:"../public/assets/images/cineslice.jpg",
        siteUrl:"https://cine-slice-8t3w.vercel.app/",
        
        technologies:[FaReact ,IoLogoFirebase ,SiMui ,DiJavascript ,FaCss3Alt,TbBrandVite  ]
        
    },
    {
        id:1,
        title:"CuriousBees",
        category:"Flutter Projects",
        description:"The Research Collaboration Hub is a cutting-edge platform leveraging Flutter, Firestore, Firebase, and Python to enable seamless project collaboration, scheduling, and communication among researchers and professionals. Users can foster efficient research management and networking capabilities within a user-friendly mobile interface.",
        image:"../public/assets/images/bees1.jpg",
        siteUrl:"https://srm-curious-bug.pages.dev/",
        technologies:[RiFlutterFill,SiDart ,IoLogoFirebase]
       
    },
    {
        id:2,
        title:"SRMTT",
        category:"Flutter Projects",
        description:"Built web-based timetable generator (Flutter/Python) empowering students and faculty to get custom daily schedules through intuitive interface.",
        image:"../public/assets/images/srmtt.jpg",
        siteUrl:"https://srmtt.livewires.tech/",
        technologies:[RiFlutterFill,SiDart ,IoLogoFirebase,FaPython],
        
    },
    
]