import React, { useEffect } from 'react'
import './About.css'
const About = () => {
    useEffect(() => {
        const link = document.querySelector('.about-link')
        link.classList.add('active-link')
        return () => {
            link.classList.remove('active-link');
        }
    }, [])
    return (
        <div className="about">
            <div className="info-about">
            <div className="div1">
                <h2>The Company</h2>
                <p>The company was founded by award-winning architect and furniture designer Anders Björkén.  Known as one of the most progressive and modern architects in the country. Blessed with the gift of transforming each commission in to a unique place filled with magic,  charm and pleasure,  Björkén Architects are creators of some of the most appreciated environments in Scandinavia.

                    With an indisputable track record, and a team of twenty-five architects, designers and engineers,  Björkén Architects have the capacity to complete any project.</p>
            </div>
            <div>
                <h2>About</h2>
                <p>In order to make each project unique,  Sthapna Architects are focused on all stages and details of the process. That includes everything from inventing new ways of using uncommon materials,  down to custom designing carpet patterns.
The main furniture and lighting elements are usually custom-drawn to enhance the design theme chosen.  This produces amazing and elaborate environments far above average.</p>
            </div>
            </div>
        </div>
    )
}

export default About
