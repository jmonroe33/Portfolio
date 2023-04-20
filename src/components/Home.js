import React from 'react'
import "../styles/home.scss"
import Jaden from "../assets/image.png"
import JobTitle from "../assets/jobTitle.png"
import { motion } from 'framer-motion'

function Home() {
    return (
        <motion.div className="home" 
            initial={{opacity: 0 }}
            animate={{opacity: 1 }}
            exit={{opacity: 0 }}
            >
            <div className="home-top">
                <img src={Jaden} alt="Jaden Monroe" className='home-name'/>
            </div>
            <div className="home-bottom">
                <img src={JobTitle} className="home-jobTitle" alt="Front-end Developer"/>
            </div>
           
        </motion.div>
        

    )
}

export default Home