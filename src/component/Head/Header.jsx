import React, { useState } from "react"
import "./header.css"
import logo from "../pic/logo-foto.png"

const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='logo'>
            <img src={logo} alt='logo' />
          </div>

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
              <li>
                <a href='#home'>INICIO</a>
              </li>
              <li>
                <a href='#features'>CARACTERÍSTICAS</a>
              </li>
              <li>
                <a href='#portfolio'>PORTFOLIO</a>
              </li>
              <li>
                <a href='#resume'>CURRICULUM</a>
              </li>
              <li>
                <a href='#clients'>CLIENTES</a>
              </li>
              <li>
                <a href='#blog'>BLOG</a>
              </li>
              <li>
                <a href='#contact'>CONTACTO</a>
              </li>
              <li>
                <button className='home-btn'>BUY NOW</button>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i class='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
