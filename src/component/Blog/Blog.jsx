import React from "react"
import "../Portfolio/Portfolio.css"
import "./Blog.css"
import Card from "./Card.jsx"
import BlogApi from "./BlogApi.jsx"

const Blog = () => {
  return (
    <>
      <section className='Portfolio Blog' id='blog'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>VISITA MI BLOG Y DEJA TUS COMENTARIOS</h4>
            <h1>Mi Blog</h1>
          </div>

          <div className='content grid'>
            {BlogApi.map((value, index) => {
              return <Card key={index} image={value.image} date={value.date} title_one={value.title_one} title_two={value.title_two} title_three={value.title_three} desc_one={value.desc_one} desc_two={value.desc_two} desc_three={value.desc_three} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
