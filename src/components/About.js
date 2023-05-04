import React from 'react'
import '../styles/about.scss'
import { motion } from 'framer-motion'
// import AboutMe from '../assets/aboutMe.png'
import EatSleepCode from "../assets/eat-sleep-code.jpg"

function About() {
    return (
        <motion.div className='about'>
             {/* <img src={AboutMe} alt="About Me" className='about-me'/> */}

             <div className='about-skills'>
                <div className='text-container-1'>
                    <div>
                        <h3 className='about-h3'>About</h3>
                        <p>
                            I'm a fullstack developer who has a deep passion 
                            for building software. 
                            Initally I was interested in Deaf Studies aka Sign Language as 
                            I wanted to be a interpreter. Soon though I realized that wasn't my
                            true passion. So I decided to start working a part time job at a popular food company in my area. 
                            While working there I realized how inefficent thier POS were and wondered 
                            how I could build something like that but better.  
                        </p>
                        <p>
                            
                            This led me down the path of learning the basics of web development via youtube and various
                            other self teaching websites. Evetually though I felt I needed better structure so I decided to 
                            attend a fulltime fullstack SWE bootcamp where I learned how to cultivate and use my problem solving
                            skills to build applications that solve real world problems. Whithin 6 months I graduated and ever since 
                            I have been enjoying this journey of constant learning and improvement. Currently I am self studying Python 3
                            to better understand how to work with and manage large sets of data.
            
                        </p>
                    </div>
                </div>  

                <div className='text-container-2'>
                    <h3>Skills</h3>
                        <ul>
                            <p>Frontend:</p> 
                            <li>
                                HTML, CSS, Javascript, React, Bootstrap, Tailwind CSS, SCSS 
                            </li>
                            <p>Backend:</p> 
                            <li>
                                Node.js, Express.js, Knex, PostgreSQL 
                            </li>
                        </ul>
                        <p>
                           Customer oriented, Time management, Task management, 
                        </p>
                        <p>
                            Frontend: 
                        </p>  
                        <p>
                            Backend:     
                        </p>   
                       <p>
                        Testing: Mocha, Chai, Jest
                       </p>
                </div>
             </div>
           
        </motion.div>
        
    )
}

export default About