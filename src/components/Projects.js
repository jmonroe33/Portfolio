import React from 'react'
import "../styles/projects.scss"
import projectsTitle from "../assets/Projects.png"
import Calculator from "../assets/Calculator.png"
import Flashcard from "../assets/flashcard.png"
import WeLoveMovies from "../assets/we-love-movies.png"
import Reservations from "../assets/reservations.png"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { motion } from 'framer-motion'

function Projects() {
    let projects = [
        {
            title: "Flashcard",
            image: Flashcard,
            link: "https://github.com/jmonroe33/Flash-Card-App",
            tech: "React, Bootstrap, ",
            end:"Frontend"
        },
        {
            title: "We-Love-Movies",
            image: WeLoveMovies,
            link: "https://we-love-movies-frontend-pno8.onrender.com",
            tech: "Node, Epxress.js, Knex, SQL",
            end:"Backend"
        },     
        {
            title: "Restaruant Resevation",
            image: Reservations,
            link: "https://restraurant-reservation-front-end.onrender.com",
            tech: "React, CSS, Node, Express, Knex, SQL",
            end:"Fullstack"
        },       
         {
            title: "Calculator",
            image: Calculator,
            link: "https://github.com/jmonroe33/New-Calculator",
            tech: "React, CSS",
            end:"Frontend"
        },  
    ];

    const mappedProjects = projects.map((project) =>(
        <Card style={{ width: '20rem', height:"95%", padding:"10px", margin: '10px', backgroundColor:"dimgray",color:"white" }}>
        <Card.Img variant="top" src={project.image} alt={project.title} className='card-img'/>
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
          <Card.Text>
           {project.tech}
          </Card.Text>
          <Card.Text>
            {project.end}
          </Card.Text>
          <Button variant="warning" href={project.link}>Visit</Button>
        </Card.Body>
      </Card>

        ))
    return (
        <motion.div className="projects"
            // initial={{opacity: 0 }}
            // animate={{opacity: 1 }}
            // exit={{opacity: 0 }}
        >
            <div className='img-container'>
                <img src={projectsTitle} alt="Projects" className="title" />
            </div>
            <div className='projects-container'>
                {mappedProjects}
            </div>
        </motion.div>
       
    )
}

export default Projects