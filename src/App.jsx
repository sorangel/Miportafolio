import React from "react"
import Header from "./component/Head/Header.jsx"
import Features from "./component/Features/Features.jsx"
import Home from "./component/Hero/Home.jsx"
import Portfolio from "./component/Portfolio/Portfolio.jsx"
import Resume from "./component/Resume/Resume.jsx"
import Testimonial from "./component/Testimonial/Testimonial.jsx"
import Blog from "./component/Blog/Blog.jsx"
import Contact from "./component/Contact/Contact.jsx"
import Footer from "./component/Footer.jsx"
import "../../Portafolio/App.css"

const App = () => {
    return (
        <>
            <Header/>
            <Home/>
            <Features/>
            <Portfolio/>
            <Resume/>
            <Testimonial/>
            <Blog/>
            <Contact/>
        </>

    )
}

export default App
