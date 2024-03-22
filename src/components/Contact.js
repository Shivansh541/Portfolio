import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
const Contact = () => {
    const [isActive, setIsActive] = useState(false)
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsActive(true)
        }, 1)

        return () => clearTimeout(timer)
    }, [])
    const [credentials, setCredentials] = useState({name: "",email: "", phone: "",msg:""})
    const handleSubmit = async (e)=>{
        e.preventDefault()
        const response = await fetch(`http://localhost:5000/api/contact/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({'name':credentials.name,'email': credentials.email,'phone':credentials.phone,msg:credentials.msg})
        });
        alert('Form Submitted')
        const json = await response.json()
        console.log(json)
    }
    const onchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <section className={`contact ${isActive?"active":""}`} id="contact">
            <h1>Contact Me</h1>
            <form method='post' onSubmit={handleSubmit} action="">
                <input type="text" id='name' name='name' onChange={onchange} placeholder='Enter Your Name' />
                <input type="email" id='email' name='email' onChange={onchange} placeholder='Enter Your Email' />
                <input type="tel" id='phone' name='phone' onChange={onchange} placeholder='Enter Your Phone Number' />
                <textarea name="msg" id="msg" cols="30" rows="10" onChange={onchange} placeholder='Enter Your Message Here'></textarea>
                <button className='btn' type="submit">Submit</button>
            </form>
            <div className="links">
                <Link target='_blank' to="https://www.facebook.com/profile.php?id=100015161857215"><img src="facebook.png" alt="" /></Link>
                <Link target='_blank' to="https://www.instagram.com/thiz_is_shivansh/"><img src="insta.webp" alt="" /></Link>
                <Link target='_blank' to="http://wa.me/+918528841011"><img src="Whatsapp_icon.png" alt="" /></Link>
                <Link target='_blank' to="https://github.com/Shivansh541"><img style={{filter: 'invert(1)'}} src="github-mark-white.png" alt="" /></Link>
                <Link target='_blank' to="https://www.linkedin.com/in/shivansh-singh-rathore-728283249/"><img src="linkedin.png" alt="" /></Link>
            </div>
        </section>
    )
}

export default Contact
