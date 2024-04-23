import React from 'react'
import '../../pages/home.css';
import Styled from './projects.module.css';
import PresentationBox from '../presentationBox/PresentationBox';
import data from './db'

function Projects() {


    return (
        <>
            <div className={Styled.title}>
                <div className="titleXL">Projects</div>
                {/* <div className={`${Styled.right} ${"contactLink"}`}>
                    <a href="http://"><p>CONTACT ME</p></a>
                </div> */}
            </div>
            <div className={Styled.boxesWrapper}>
                {data.projects.map((project, index) =>
                (< PresentationBox
                    key={index}
                    name={project.name}
                    image={project.image}
                    link={project.link}
                    gitLink={project.gitLink}
                    skills={project.skills}
                />)
                )}
            </div>
        </>
    )
}

export default Projects