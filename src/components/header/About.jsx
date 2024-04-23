import React from 'react'
import '../../pages/home.css';
import Styled from './about.module.css'
import SocialIcons from '../socialIcons/SocialIcons';
import data from '../projects/db'



function About() {
    function scrollToComponent(event) {
        event.preventDefault();

        const componenteDestinazione = document.getElementById('contactSection');
        componenteDestinazione.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <div className={Styled.headBox}>
                <div className={Styled.imageBox}>
                    <div className={Styled.image}>
                        <img src={data.about.image} alt="" />
                    </div>
                </div>
                <SocialIcons />

                <div className={Styled.welcome}>
                    <div className={Styled.titleBox}>
                        <p className="titleXL">Welcome to my portfolio! <br /> I'm <span>Jawid Fakhari</span></p>
                    </div>
                    <div className={Styled.presentationWrap}>
                        <p className="prgMedium">With a strong focus on frontend development, I'm dedicated to mastering the latest technologies and design principles to create visually stunning and user-friendly websites.</p>
                    </div>
                    <div className="contactLink">
                        <a href='#' onClick={scrollToComponent}>CONTACT ME</a>
                    </div>
                </div>
            </div >
        </>
    )
}

export default About