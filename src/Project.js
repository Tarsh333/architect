import React, { useEffect } from 'react'
import image1 from './images/project 1.jpg'
import image2 from './images/project 2.jpg'
import image3 from './images/project 3.jpg'
import image4 from './images/project 4.jpg'
import image5 from './images/project 5.jpg'
import image6 from './images/project 6.jpg'
import image7 from './images/project 7.jpg'
import image8 from './images/project 8.jpg'
import image9 from './images/project 9.jpg'
import './Project.css'
const images=[image1,image2,image3,image4,image5,image6,image7,image8,image9]
const Project = () => {
    useEffect(() => {
        const link = document.querySelector('.projects-link')
        const svgs=document.querySelectorAll('svg')
        svgs.forEach(svg => {
            svg.style.color="black"
        });
        link.classList.add('active-link')
        return () => {
            link.classList.remove('active-link');
            svgs.forEach(svg => {
                svg.style.color="white"
            });
        }
    }, [])
    return (
        <div className="projects">
            <h1>Projects</h1>
        <div className="project">
            {images.map((image)=>{
                return <img src={image} alt={image} className="project-image"/>
            })}
        </div>
        </div>
    )
}

export default Project
