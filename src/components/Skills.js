import React, { useEffect,useState } from 'react'

const Skills = () => {
  const [isActive, setIsActive] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
        setIsActive(true)
    }, 1)

    return () => clearTimeout(timer)
}, [])
  return (
    <section className="skills" id="skills">
        <h1>My Skills</h1>
        <ul className="skillsBox">
          <div className={`col c1 ${isActive?'active1':""}`}>
            <li><img src="Skills Images/HTML5_Badge.svg" alt="" />HTML</li>
            <li><img src="Skills Images/pngwing.com.png" alt="" />C++</li>
            <li><img src="Skills Images\pngwing.com (1).png" alt="" />React</li>
            <li><img src="Skills Images/mongodb-icon-1.svg" alt="" />MongoDB</li>
            <li><img src="Skills Images/excel.png" alt="" />MS Excel</li>
          </div>
          <div className={`col c2 ${isActive?'active2':""}`}>

            <li><img src="Skills Images/CSS3_logo.svg" alt="" />CSS</li>
            <li><img src="Skills Images/Python_logo_51.svg" alt="" />Python</li>
            <li><img src="Skills Images\pngwing.com (2).png" alt="" />Express.js</li>
            <li><img style={{filter: 'invert(1)'}} src="Skills Images\pngwing.com (3).png" alt="" />Git and <img src="github-mark-white.png" alt="loading" /> Github</li>
            <li><img src="Skills Images\word.png" alt="" />MS Word</li>
          </div>
          <div className={`col c3 ${isActive?'active3':""}`}>

            <li><img src="Skills Images/480px-JavaScript-logo.png" alt="loading" />JavaScript</li>
            <li><img src="Skills Images/Daco_2081416.png" alt="" />Django</li>
            <li><img src="Skills Images\node-js.svg" alt="" />Node.js</li>
            <li><img src="Skills Images/pngwing.com (4).png" alt="" />Blender 3D Modelling</li>
            <li><img src="Skills Images/ppt.png" alt="" />MS PowerPoint</li>
          </div>
        </ul>
    </section>
  )
}

export default Skills
