import React from 'react'
import "../styles/navigation.scss"
import { FaHome, FaLaptopCode, FaUser } from "react-icons/fa"
import { NavLink } from 'react-router-dom'
function Navigation() {

    return (
        <section className="nav" >
            <div>
                <NavLink to= "/" >
                    <FaHome className="icon-large" />
                </NavLink>
               
            </div>
            <div>
                <NavLink to= "/projects" >
                    <FaLaptopCode className="icon-large"/>
                </NavLink>
                
            </div> 
            <div>
                <NavLink to= "/contact" >
                    <FaUser className='icon-large'/>
                </NavLink>  
            </div>
        </section>
    )
}

export default Navigation