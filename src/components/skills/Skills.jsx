import React from 'react'
import '../../pages/home.css';
import Styled from './skills.module.css'

function Skills() {
    return (
        <>
            {/* <hr /> */}
            <p className={`${Styled.skills} ${"titleL"}`}>Learning Path</p>
            <div className={Styled.skillsWrapper}>
                <div className={Styled.html}>
                    <p className={`${Styled.skills} ${"titleL"}`}>HTML</p>
                    <p className={`${Styled.skillLevel} ${"prgMedium"}`}>1 year experienced</p>
                </div>
                <div className={Styled.css}>
                    <p className={`${Styled.skills} ${"titleL"}`}>CSS</p>
                    <p className={`${Styled.skillLevel} ${"prgMedium"}`}>1 year experienced</p>
                </div>
                <div className={Styled.javascript}>
                    <p className={`${Styled.skills} ${"titleL"}`}>JavaScript</p>
                    <p className={`${Styled.skillLevel} ${"prgMedium"}`}>1 year experienced</p>
                </div>
                <div className={Styled.bootstrap}>
                    <p className={`${Styled.skills} ${"titleL"}`}>Bootstrap</p>
                    <p className={`${Styled.skillLevel} ${"prgMedium"}`}>1 year experienced</p>
                </div>
                <div className={Styled.react}>
                    <p className={`${Styled.skills} ${"titleL"}`}>ReactJs</p>
                    <p className={`${Styled.skillLevel} ${"prgMedium"}`}>4 month experienced</p>
                </div>
                <div className={Styled.nodeJs}>
                    <p className={`${Styled.skills} ${"titleL"}`}>NodeJs</p>
                    <p className={`${Styled.skillLevel} ${"prgMedium"}`}>in progress...</p>
                </div>
                <div className={Styled.cSharp}>
                    <p className={`${Styled.skills} ${"titleL"}`}>C#</p>
                    <p className={`${Styled.skillLevel} ${"prgMedium"}`}>in progress...</p>
                </div>
            </div>
        </>
    )
}

export default Skills