import React from 'react'
import '../styles/about.scss'
import { motion } from 'framer-motion'
// import AboutMe from '../assets/aboutMe.png'

function About() {
    return (
        <motion.div className='about'>
            {/* <img src={AboutMe} alt="About Me" className='about-me'/> */}

            <section className='about-skills'>
                <section className='about-container'>
                    <div className='text-container-1'>
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
                </section>
                <h3 className='skills-h3'>Skills</h3>
                <div className='skills'>
                    
                    <ul>
                        <p>Frontend:</p>
                        <li> HTML </li>
                        <li> CSS,SCSS </li>
                        <li> Javascript </li>
                        <li> React </li>
                        <li> Bootstrap </li>
                       
                       
                    </ul>
                    <ul>
                        <p> Backend: </p>
                        <li> Node.js </li>
                        <li> Express.js</li>
                        <li> Knex </li>
                        <li> PostgreSQL </li>
                        <li> Cors </li>
                    </ul>       
                </div>

            </section>

        </motion.div>

    )
}

export default About