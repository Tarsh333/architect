import React, { useEffect } from 'react'
import './Home.css'
import img1 from './images/1.jpg'
import img2 from './images/2.jpg'
import img3 from './images/3.jpg'
const Home = () => {
    const images=[img1,img2,img3]
  const [index, setIndex] = React.useState(0);
  useEffect(() => {
    const lastIndex = 2;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 2000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

    return (
        <div className="home">
            <img className="slider-image" src={images[index]}/>
            
        </div>
    )
}

export default Home
