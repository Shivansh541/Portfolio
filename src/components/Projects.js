import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
const Projects = () => {
  const [isActive, setIsActive] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
        setIsActive(true)
    }, 1)

    return () => clearTimeout(timer)
}, [])
   const [data, setData] = useState([])
  useEffect(()=>{
    const getData=async()=>{
      try {
        const response = await fetch('Projects.json')
        const json = await response.json()
        setData(json.links)
      } catch (error) {
        console.error('Error fetching Data', error)
      }
    }
    getData()
  },[])
  document.addEventListener('DOMContentLoaded',()=>{
    console.log('DOM Content Loaded')
    const projectElement = document.querySelector('.projects')
    const projectsHeight = projectElement.scrollHeight
    projectElement.style.setProperty('--before-height',projectsHeight+'px')
  })
  return (
    <section className='projects'>
      <h1>My Projects</h1>
      <div className={`row ${isActive?"active":""}`} >
        {data.map(item=>{
          return(<Link key={item.name} className='project' target='_blank' to={item.link}>
          <img src={item.image} alt="" />
          <h4>{item.name}</h4>
          <p>{item.desc}</p>
        </Link>)
        })}
      </div>
    </section>
  )
}

export default Projects
