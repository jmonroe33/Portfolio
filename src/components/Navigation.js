import { React, } from 'react'
import "../styles/navigation.scss"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { NavLink } from 'react-router-dom'
// try changing the paragraph font that is in the about page to the home projects and about links in the nav. 
// also come up with some more info in the about and then your finito my boiiii.

function Navigation() {

    return (
        <section className="nav" >

            <section className='out-links'>
                <div >
                    <NavLink to="https://www.linkedin.com/in/jaden-monroe/">
                        <FaLinkedin className='icon-large' />
                    </NavLink>
                </div>
                <div>
                    <NavLink to="https://github.com/jmonroe33">
                        <FaGithub className='icon-large' />
                    </NavLink>
                </div>
            </section>
            <section className='in-links'>
                <div>
                    <NavLink to="/" className='nav-btns'>
                        <p >Home</p>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/projects" className='nav-btns' >
                        <p >Projects</p>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/about" className='nav-btns'>
                        <p  >About</p>
                    </NavLink>
                </div>
            </section>


        </section>
    )
}

export default Navigation