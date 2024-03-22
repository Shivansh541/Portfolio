import React, { useEffect, useState } from 'react'
import { saveAs } from 'file-saver'

const Home = () => {
    const handleDownload = () => {
        const cvUrl = './Shivansh.pdf'
        saveAs(cvUrl, 'Shivansh.pdf')
    }
    const [isActive, setIsActive] = useState(false)
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsActive(true)
        }, 1)

        return () => clearTimeout(timer)
    }, [])
    return (
        <section className="my home" id="home">
            <div className={`box ${isActive ? 'active' : ""}`}>
                <div>
                    <p>Hi, This is <b>Shivansh Singh Rathore</b></p>
                    <h1>I am a <span>Full Stack</span></h1>
                    <h1>Web Developer</h1>
                    <p className='desc'>I am a passionate and self-driven Full Stack Web Developer currently pursuing my Bachelor of Technology in Computer Science, with a specialization in Data Science and Artificial Intelligence. Over the past two years, I have honed my skills through self-learning and hands-on projects, cultivating a comprehensive understanding of various programming languages and development frameworks.</p>
                    <button onClick={handleDownload} className='btn'>Download CV</button>
                    <div className="links">
                        <a rel="noreferrer" target='_blank' href="https://www.facebook.com/profile.php?id=100015161857215"><img src="facebook.png" alt="Facebook" /></a>
                        <a rel="noreferrer" target='_blank' href="https://www.instagram.com/thiz_is_shivansh/"><img src="insta.webp" alt="Instagram" /></a>
                        <a rel="noreferrer" target='_blank' href="http://wa.me/+918528841011"><img src="Whatsapp_icon.png" alt="Whatsapp" /></a>
                        <a rel="noreferrer" target='_blank' href="https://github.com/Shivansh541"><img src="github-mark-white.png" alt="Github" /></a>
                        <a rel="noreferrer" target='_blank' href="https://www.linkedin.com/in/shivansh-singh-rathore-728283249/"><img src="linkedin.png" alt="Linkedin" /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
