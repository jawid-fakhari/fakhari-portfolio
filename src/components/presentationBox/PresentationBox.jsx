import React from 'react'
import Styled from './presentationBox.module.css'
import '../../pages/home.css'

function PresentationBox(props) {
    return (
        <>
            <div className={Styled.wrapper}>
                <div className={Styled.imageWrapper}>
                    <div className={Styled.img}>
                        <img src={props.image} alt="" />
                    </div>
                    <div className={Styled.viewLinks}>
                        <div className={`${Styled.projectLink} ${"contactLink"}`}>
                            {props.link.includes("https://") ?
                                <a href={props.link} target='_blank' rel="noreferrer">VIEW PROJECT</a> :

                                <a onClick={() => alert("not linked yet")}>VIEW PROJECT</a>
                            }
                        </div>
                        <div className={`${Styled.gitLink} ${"contactLink"}`}>
                            {props.link.includes("https://") ?
                                <a href={props.gitLink} target='_blank' rel="noreferrer">VIEW CODE</a> :

                                <a onClick={() => alert("not linked yet")}>VIEW CODE</a>
                            }
                        </div>
                    </div>
                </div>
                <p className="titleM">{props.name}</p>
                <p className='prgMedium'>{props.skills}</p>
            </div>
        </>
    )
}

export default PresentationBox


//     < div onClick = {() =>
// link.includes("https://")
//     ? window.open(link, '_blank')
//     : alert("This project is still in progress. Explore other available projects!")
// }>