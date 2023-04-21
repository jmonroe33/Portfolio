import React from 'react'
import '../styles/about.scss'
import { motion } from 'framer-motion'
// import AboutMe from '../assets/aboutMe.png'

function About() {
    return (
        <motion.div className='about'>
             {/* <img src={AboutMe} alt="About Me" className='about-me'/> */}

             <div className='multi-container'>
                <section className='text-container-1'>
                    <h3 className='about-h3'>About</h3>
                    <p>
                        I'm a fullstack developer who has a deep passion for building software. 
                        I started out as a American Sign Language major that was working at a popular food comapany known as Wendy's.   
                    </p>
                    <p>
                    While working there I realized how inefficent thier POS is and wondered how I could build something like that.
                        This led me down the path of learning the basics of programming and eventually choosing and graduating from a bootcamp.  
                    </p>
                </section>

                <section className='text-container-2'>
                    <h3>Skills</h3>
                  
                        <p>
                           Customer oriented, time management, task management, 
                        </p>
                        <p>
                            Frontend: HTML, CSS, Javascript, React, Bootstrap, Tailwind CSS 
                        </p>  
                        <p>
                            Backend: Node.js, Express.js, Knex, PostgreSQL     
                        </p>   
                       
                </section>
             </div>
           
        </motion.div>
        
    )
}

export default About