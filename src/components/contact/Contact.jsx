import React from 'react'
import '../../pages/home.css';
import Styled from './contact.module.css'
import SocialIcons from '../socialIcons/SocialIcons';
import EmailJs from '../emailJs/EmailJs';

function Contact() {
    return (
        <div id='contactSection'>
            <div className={Styled.footer}>
                <div className={Styled.boxes}>
                    <div className={Styled.left}>
                        <p className="titleL">Contact</p>
                        <p className="prgMedium">
                            Thank you for reaching out! I'm eager to learn more about your project and explore ways I can contribute. Kindly complete the form provided, and I'll be sure to follow up promptly with any assistance or insights I can offer.
                        </p>
                    </div>
                    <div className={Styled.right}>
                        <EmailJs />
                    </div>
                </div>
                <hr />
                <SocialIcons />
            </div>
        </div>
    )
}

export default Contact