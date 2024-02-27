import React from "react"
import "./Home.css"
import hero from "../pic/hero.png"
import html from "../pic/html-5-logo.png"
import css from "../pic/css-logo.png"
import javaScript from "../pic/javascript-logo.png"
import typescript from "../pic/typescript-logo-svg.png"
import redux from "../pic/redux-logo.png"
import react from "../pic/react-logo.png"
import sass from "../pic/sass-logo.png"
import jest from "../pic/jest-logo.png"
import cypress from "../pic/cypress-logo.jpeg"
import linkedin from "../pic/linkedin-logo.png"
import github from "../pic/github-logo.png"
import instagram from "../pic/instagram-logo.jpg"
import {Typewriter} from "react-simple-typewriter"

const Home = () => {
    return (
        <>
            <section className='hero' id='home'>
                <div className='container f_flex top'>
                    <div className='left top'>
                        <h3>BIENVENIDO A MI MUNDO</h3>
                        <h1>
                            Hola, soy <span>Sorangel Contreras</span>
                        </h1>
                        <h2>
                            una
                            <span>
                <Typewriter words={[" Programadora profesional.", " Desarrolladora."]} loop cursor cursorStyle='|'
                            typeSpeed={70} deleteSpeed={50} delaySpeed={1000}/>
              </span>
                        </h2>

                        <p>
                            ¡Saludos y bienvenido a mi espacio digital! Soy una desarrolladora frontend apasionada.
                            Combino precisión técnica con estética excepcional, diseñando interfaces inspiradoras y
                            funcionalidades impecables. He colaborado en proyectos desde startups innovadoras hasta
                            grandes empresas. Echa un vistazo a mi portafolio para descubrir cómo convierto ideas en
                            experiencias digitales. ¡Es un placer compartir contigo mi viaje en el desarrollo
                            Frontend!
                        </p>

                        <div className='hero_btn d_flex'>
                            <div className='networking'>
                                <h4>ME ENCONTRARÁS EN</h4>
                                <div className='button'>
                                    <button className='btn_shadow'>
                                        <img src={github} alt=''/>
                                    </button>
                                    <button className='btn_shadow'>
                                        <img src={instagram} alt=''/>
                                    </button>
                                    <button className='btn_shadow'>
                                        <img src={linkedin} alt=''/>
                                    </button>
                                </div>
                            </div>
                            <div className='skills'>
                                <h4>MIS HABILIDADES</h4>
                                <button className='btn_shadow'>
                                    <img src={html} alt=''/>
                                </button>
                                <button className='btn_shadow'>
                                    <img src={css} alt=''/>
                                </button>
                                <button className='btn_shadow'>
                                    <img src={sass} alt=''/>
                                </button>
                                <button className='btn_shadow'>
                                    <img src={javaScript} alt=''/>
                                </button>
                                <button className='btn_shadow'>
                                    <img src={typescript} alt=''/>
                                </button>
                                <button className='btn_shadow'>
                                    <img src={react} alt=''/>
                                </button>
                                <button className='btn_shadow'>
                                    <img src={redux} alt=''/>
                                </button>
                                <button className='btn_shadow'>
                                    <img src={jest} alt=''/>
                                </button>
                                <button className='btn_shadow'>
                                    <img src={cypress} alt=''/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='right_img'>
                            <img src={hero} alt='hero'/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
