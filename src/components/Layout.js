import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './About' 
import Contact from './Contact'
import Home from './Home'
import Projects from './Projects'

function Layout() {
    return (
        <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <Route path="/about" exact={true} element={<About />} />
            <Route path="/contact" exact={true} element={<Contact />} />
            <Route path="/projects" exact={true} element={<Projects />} />
        </Routes>
    )
}

export default Layout