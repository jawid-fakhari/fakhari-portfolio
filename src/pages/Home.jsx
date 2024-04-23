import React from 'react'
import './home.css'
import About from '../components/header/About'
import Projects from '../components/projects/Projects'
import Skills from '../components/skills/Skills'
import Contact from '../components/contact/Contact'


const Home = () => {
    return (
        < >
            <About />
            <Skills />
            <Projects />
            <Contact />
        </>
    )
}

export default Home