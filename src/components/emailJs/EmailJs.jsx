import React, { useRef } from 'react'
import Styled from './emailJs.module.css'
import emailjs from '@emailjs/browser';

function EmailJs() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_xyzl5hl', 'template_tgem0uk', form.current, {
                publicKey: 'JPqlwpnYCcfSkshgJ',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert('Your message successfully sended!');
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );

    };
    return (
        <>
            <form className={Styled.form} ref={form} onSubmit={sendEmail}>
                <div className={Styled.nameEmailWrap}>
                    <div className={Styled.nameWrap}>
                        <label className={Styled.nameLabel}>Name</label>
                        <input className={Styled.nameInput} type="text" name="user_name" />
                    </div>
                    <div className={Styled.emailWrap}>
                        <label className={Styled.emailLabel}>Email</label>
                        <input className={Styled.emailInput} type="email" name="user_email" />
                    </div>
                </div>

                <label className={Styled.messageLabel}>Message</label>
                <textarea className={Styled.messageTextarea} name="message" />

                <input className={Styled.submitInput} type="submit" value="Send" />
            </form>
        </>
    )
}

export default EmailJs