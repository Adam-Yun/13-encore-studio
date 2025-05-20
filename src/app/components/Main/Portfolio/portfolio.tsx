
import "./portfolio.css"
import Carousel from './carousel';
import { useState } from "react";


const Portfolio = () => {

  // Array images that contains the path to the images
  const images = [
    "/Images/image-0.jpg",
    "/Images/image-1.jpg",
    "/Images/image-2.jpg",
    "/Images/image-3.jpg",
    "/Images/image-4.jpg",
    "/Images/image-5.jpg",
    "/Images/image-6.jpg",
    "/Images/image-7.jpg"
  ]

  const [index, setIndex] = useState(0);
  // Adds the position of the images
  const addIndex = () => {
      let i = index
      if(index >= 0 && index <= 7){
          if(index == 7){
              i = 7
          }
          else{
              i += 1
          }
          console.log(i)
          setIndex(i)
      }
  }
  // Subtracts the position of the images
  const subtractIndex = () => {
      let i = index
      if(index >= 0 && index <= 7){
          if(index == 0){
              i = 0
          }else{
              i -= 1
          }
      }
      console.log(i)
      setIndex(i)
  }
  
  return ( 
    <div className="portfolio-container">
        <ol className="cards-container">
          <li className="card-container">
            <Carousel images={images} index={index}/>
          </li>
          <li className="card-container">
            <Carousel images={images} index={index}/>
          </li>
          <li className="card-container">
            <Carousel images={images} index={index}/>
          </li>
        </ol>
        <button onClick={subtractIndex}>-</button>
        <button onClick={addIndex}>+</button>
    </div>
  );
};

export default Portfolio;