import React from 'react'
import '../styles/about.scss'
import { motion } from 'framer-motion'
import AboutMe from '../assets/aboutMe.png'

function About() {
    return (
        <motion.div className='about'>
             <img src={AboutMe} alt="About Me" className='about-me'/>

             <div className='multi-container'>
                <section className='text-container'>
                    <h3>About</h3>
                    <p>
                        I'm a fullstack developer who has a deep passion for building software.  
                    </p>
                </section>
                <section className='text-container'>
                    <h3>Skills</h3>
                    <div className="skills">
                        <p>
                            Soft Skills:blahhh blahh blahh
                        </p>
                        <p>
                            Frontend Skills:HTML, CSS, Javascript, React, Bootstrap, Tailwind CSS 
                        </p>  
                        <p>
                            Backend Skills: Node.js, Express.js, Knex, PostgreSQL     
                        </p>   
                    </div>                 
                </section>
             </div>
           
        </motion.div>
        
    )
}

export default About