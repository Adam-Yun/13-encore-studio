'use client'
import "./showcase.css"
import Image from 'next/image';


const Showcase = () => {
  return ( 
    <div className="showcase-box">
      <div className="showcase-images">
        <Image className="showcase-image" src="/images/sample_image_1.jpg" width={800} height={600} alt="photoshoots" priority/>
        <Image className="showcase-image" src="/images/sample_image_2.jpg" width={800} height={600} alt="photoshoots" priority/>
        <Image className="showcase-image" src="/images/sample_image_3.jpg" width={800} height={600} alt="photoshoots" priority/>
        <Image className="showcase-image" src="/images/sample_image_4.jpg" width={800} height={600} alt="photoshoots" priority/>
        <Image className="showcase-image" src="/images/sample_image_5.jpg" width={800} height={600} alt="photoshoots" priority/>
        <Image className="showcase-image" src="/images/sample_image_6.jpg" width={800} height={600} alt="photoshoots" priority/>
        <Image className="showcase-image" src="/images/sample_image_7.jpg" width={800} height={600} alt="photoshoots" priority/>
        <Image className="showcase-image" src="/images/sample_image_8.jpg" width={800} height={600} alt="photoshoots" priority/>
        <Image className="showcase-image" src="/images/sample_image_9.jpg" width={800} height={600} alt="photoshoots" priority/>
        <Image className="showcase-image" src="/images/sample_image_10.jpg" width={800} height={600} alt="photoshoots" priority/>
      </div>
      <div className="showcase-images">
        <Image className="showcase-image" src="/images/sample_image_1.jpg" width={800} height={600} alt="photoshoots" priority/>
        <Image className="showcase-image" src="/images/sample_image_2.jpg" width={800} height={600} alt="photoshoots" priority/>
        <Image className="showcase-image" src="/images/sample_image_3.jpg" width={800} height={600} alt="photoshoots" priority/>
        <Image className="showcase-image" src="/images/sample_image_4.jpg" width={800} height={600} alt="photoshoots" priority/>
        <Image className="showcase-image" src="/images/sample_image_5.jpg" width={800} height={600} alt="photoshoots" priority/>
        <Image className="showcase-image" src="/images/sample_image_6.jpg" width={800} height={600} alt="photoshoots" priority/>
        <Image className="showcase-image" src="/images/sample_image_7.jpg" width={800} height={600} alt="photoshoots" priority/>
        <Image className="showcase-image" src="/images/sample_image_8.jpg" width={800} height={600} alt="photoshoots" priority/>
        <Image className="showcase-image" src="/images/sample_image_9.jpg" width={800} height={600} alt="photoshoots" priority/>
        <Image className="showcase-image" src="/images/sample_image_10.jpg" width={800} height={600} alt="photoshoots" priority/>
      </div>
    </div>
  );
};

export default Showcase;



// import "./portfolio.css"
// import Carousel from './carousel';
// import { useState, useEffect } from "react";


// const Portfolio = () => {

//   // Array images that contains the path to the images
//   const images = [
//     "/Images/sample_image_1.jpg",
//     "/Images/sample_image_2.jpg",
//     "/Images/sample_image_3.jpg",
//     "/Images/sample_image_4.jpg",
//     "/Images/sample_image_5.jpg",
//     "/Images/sample_image_6.jpg",
//     "/Images/sample_image_7.jpg",
//     "/Images/sample_image_8.jpg",
//     "/Images/sample_image_9.jpg",
//     "/Images/sample_image_10.jpg"
//   ]

//   const alphabets = [
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H"
//   ]

//   const [indexX, setIndexX] = useState(0);
//   const [indexY, setIndexY] = useState(1);
//   const [indexZ, setIndexZ] = useState(2);
//   const [indexW, setIndexW] = useState(3);

//   useEffect(() => {
//     let x = 0;
//     let y = 1;
//     let z = 2;
//     let w = 3;
//     const interval = setInterval(() => {
//       setIndexX(x)
//       setIndexY(y)
//       setIndexZ(z)
//       setIndexW(w)
//       x += 1
//       y += 1
//       z += 1
//       w += 1
//       x = checkSeven(x)
//       y = checkSeven(y)
//       z = checkSeven(z)
//       w = checkSeven(w)
//     }, 2000);

//     // Clean up interval on component unmount
//     return () => clearInterval(interval);
//   }, []);

//   // Checks if the number is 7 set to 0 if true, dont bother otherwise
//   const checkSeven = (x: number) => {
//     if(x > 6){
//       x = 0
//     }
//     return x
//   }
  
//   return ( 
//     <div id="portfolio-tag" className="portfolio-container">
//         <ol className="cards-container">
//           <li className="card-container">
//             <Carousel images={images} index={indexX}/>
//             {/* <div className="card">
//               <Carousel images={alphabets} index={indexX}/>
//             </div> */}
//           </li>
//           <li className="card-container">
//             <Carousel images={images} index={indexY}/>
//             {/* <div className="card">
//               <Carousel images={alphabets} index={indexY}/>
//             </div> */}
//           </li>
//           <li className="card-container">
//             <Carousel images={images} index={indexZ}/>
//             {/* <div className="card">
//               <Carousel images={alphabets} index={indexZ}/>
//             </div> */}
//           </li>
//           <li className="card-container">
//             <Carousel images={images} index={indexW}/>
//             {/* <div className="card">
//               <Carousel images={alphabets} index={indexZ}/>
//             </div> */}
//           </li>
//         </ol>
//     </div>
//   );
// };

// export default Portfolio;
