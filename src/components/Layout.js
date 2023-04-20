import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import About from './About' 
import Contact from './Contact'
import Home from './Home'
import Projects from './Projects'
import { AnimatePresence } from 'framer-motion'

function Layout() {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" exact={true} element={<Home />} />
                <Route path="/about" exact={true} element={<About />} />
                <Route path="/projects" exact={true} element={<Projects />} />
            </Routes>
        </AnimatePresence>
      
    )
}

export default Layout