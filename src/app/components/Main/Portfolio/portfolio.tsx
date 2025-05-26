
import "./portfolio.css"
import Carousel from './carousel';
import { useState, useEffect } from "react";


const Portfolio = () => {

  // Array images that contains the path to the images
  const images = [
    "/Images/image-0.jpg",
    "/Images/image-1.jpg",
    "/Images/image-2.jpg",
    "/Images/image-4.jpg",
    "/Images/image-5.jpg",
    "/Images/image-6.jpg",
    "/Images/image-7.jpg"
  ]

  const alphabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H"
  ]

  const [indexX, setIndexX] = useState(0);
  const [indexY, setIndexY] = useState(1);
  const [indexZ, setIndexZ] = useState(2);
  const [indexW, setIndexW] = useState(3);

  useEffect(() => {
    let x = 0;
    let y = 1;
    let z = 2;
    let w = 3;
    const interval = setInterval(() => {
      setIndexX(x)
      setIndexY(y)
      setIndexZ(z)
      setIndexW(w)
      x += 1
      y += 1
      z += 1
      w += 1
      x = checkSeven(x)
      y = checkSeven(y)
      z = checkSeven(z)
      w = checkSeven(w)
    }, 2000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Checks if the number is 7 set to 0 if true, dont bother otherwise
  const checkSeven = (x: number) => {
    if(x > 6){
      x = 0
    }
    return x
  }
  
  return ( 
    <div id="portfolio-tag" className="portfolio-container">
        <ol className="cards-container">
          <li className="card-container">
            <Carousel images={images} index={indexX}/>
            {/* <div className="card">
              <Carousel images={alphabets} index={indexX}/>
            </div> */}
          </li>
          <li className="card-container">
            <Carousel images={images} index={indexY}/>
            {/* <div className="card">
              <Carousel images={alphabets} index={indexY}/>
            </div> */}
          </li>
          <li className="card-container">
            <Carousel images={images} index={indexZ}/>
            {/* <div className="card">
              <Carousel images={alphabets} index={indexZ}/>
            </div> */}
          </li>
          <li className="card-container">
            <Carousel images={images} index={indexW}/>
            {/* <div className="card">
              <Carousel images={alphabets} index={indexZ}/>
            </div> */}
          </li>
        </ol>
    </div>
  );
};

export default Portfolio;
