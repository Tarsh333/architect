import React, { useEffect } from 'react'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import './Contact.css'
const Contact = () => {
    useEffect(() => {
        const link = document.querySelector('.contact-link')
        link.classList.add('active-link')
        return () => {
            link.classList.remove('active-link');
        }
    }, [])
    return (
        <div className="contact">
            <div>
                <h2>Contact</h2>
                <p><BsFillTelephoneFill/> : 1234567890</p>
                <p><MdEmail/> : abc@gmail.com</p>
            </div>
        </div>
    )
}

export default Contact
