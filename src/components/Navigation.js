import { React, useState } from 'react'
import "../styles/navigation.scss"
import { FaGithub, FaHome, FaLaptopCode, FaLinkedin, FaUser } from "react-icons/fa"
import { NavLink } from 'react-router-dom'


function Navigation() {
    
    return (
        <section className="nav" >

            <div>
                <NavLink to= "/" className='nav-btns'>
                    {/* <FaHome className="icon-large"/> */}
                    <p >Home</p>
                </NavLink>
            </div>
            <div>
                <NavLink to= "/projects" className='nav-btns' >
                    {/* <FaLaptopCode className="icon-large" /> */}
                    <p >Projects</p>
                </NavLink> 
            </div> 
            <div>
                <NavLink to= "/about" className='nav-btns'>
                    {/* <FaUser className='icon-large'/> */}
                    <p  >About</p>
                </NavLink>  
            </div>
            <div className="">
                <NavLink to="https://www.linkedin.com/in/jaden-monroe/">
                    <FaLinkedin className='icon-large'/>
                </NavLink> 
            </div>
            <div>
                <NavLink to="https://github.com/jmonroe33">
                    <FaGithub className='icon-large'/>
                </NavLink>
            </div>
         
        </section>
    )
}

export default Navigation