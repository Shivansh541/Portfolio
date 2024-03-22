import React from 'react'
import { Link, useLocation } from 'react-router-dom'


const Navbar = (props) => {
  const location = useLocation()
  const handleClick = (left) => {
    document.querySelector(':root').style.setProperty('--left', `${left}%`)
  }
  const changeColor = ()=>{
    if(location.pathname==='/about'||location.pathname==='/contact'){
      document.querySelector(':root').style.setProperty('--clr', 'black')
    }
    else{
      document.querySelector(':root').style.setProperty('--clr', 'white')
    }
  }
  changeColor()
  switch(location.pathname){
    case '/': handleClick(10)
    break
    case '/skills': handleClick(30)
    break
    case '/projects': handleClick(50)
    break
    case '/about': handleClick(70)
    break
    case '/contact': handleClick(90)
    break
    default: handleClick(10)
  }
    return (
    <nav className='navbar'>
      {/* <p>Shivansh Singh Rathore</p> */}
      <ul id='lists'>
        <li><Link id='home' className={location.pathname==='/'?'active':""} to="/">Home</Link></li>
        <li><Link id='skills' className={location.pathname==='/skills'?'active':""} to="/skills">Skills</Link></li>
        <li><Link id='projects' className={location.pathname==='/projects'?'active':""} to="/projects">Projects</Link></li>
        <li><Link id='about' className={location.pathname==='/about'?'active':""} to="/about">About Me</Link></li>
        <li><Link id='contact' className={location.pathname==='/contact'?'active':""} to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
