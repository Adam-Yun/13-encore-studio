import "./carousel.css"
import "./showcase.css"
import Image from 'next/image';
import React from 'react';


const Carousel = () => {
  const items = [
                    { title: 'Card 1', description: 'This is the first card.' },
                    { title: 'Card 2', description: 'This is the first card.' },
                    { title: 'Card 3', description: 'This is the first card.' },
                ];

  const images = [
    "/Images/sample_image_1.jpg",
    "/Images/sample_image_2.jpg",
    "/Images/sample_image_3.jpg",
    "/Images/sample_image_4.jpg",
    "/Images/sample_image_5.jpg",
    "/Images/sample_image_6.jpg",
    "/Images/sample_image_7.jpg",
    "/Images/sample_image_8.jpg",
    "/Images/sample_image_9.jpg",
    "/Images/sample_image_10.jpg",
    "/Images/sample_image_1.jpg",
    "/Images/sample_image_2.jpg",
    "/Images/sample_image_3.jpg",
    "/Images/sample_image_4.jpg",
    "/Images/sample_image_5.jpg",
    "/Images/sample_image_6.jpg",
    "/Images/sample_image_7.jpg",
    "/Images/sample_image_8.jpg",
    "/Images/sample_image_9.jpg",
    "/Images/sample_image_10.jpg",
    "/Images/sample_image_1.jpg",
    "/Images/sample_image_2.jpg",
    "/Images/sample_image_3.jpg",
    "/Images/sample_image_4.jpg",
    "/Images/sample_image_5.jpg",
    "/Images/sample_image_6.jpg",
    "/Images/sample_image_7.jpg",
    "/Images/sample_image_8.jpg",
    "/Images/sample_image_9.jpg",
    "/Images/sample_image_10.jpg",
    "/Images/sample_image_1.jpg",
    "/Images/sample_image_2.jpg",
    "/Images/sample_image_3.jpg",
    "/Images/sample_image_4.jpg",
    "/Images/sample_image_5.jpg",
    "/Images/sample_image_6.jpg",
    "/Images/sample_image_7.jpg",
    "/Images/sample_image_8.jpg",
    "/Images/sample_image_9.jpg",
    "/Images/sample_image_10.jpg",
    "/Images/sample_image_1.jpg",
    "/Images/sample_image_2.jpg",
    "/Images/sample_image_3.jpg",
    "/Images/sample_image_4.jpg",
    "/Images/sample_image_5.jpg",
    "/Images/sample_image_6.jpg",
    "/Images/sample_image_7.jpg",
    "/Images/sample_image_8.jpg",
    "/Images/sample_image_9.jpg",
    "/Images/sample_image_10.jpg",
    "/Images/sample_image_1.jpg",
    "/Images/sample_image_2.jpg",
    "/Images/sample_image_3.jpg",
    "/Images/sample_image_4.jpg",
    "/Images/sample_image_5.jpg",
    "/Images/sample_image_6.jpg",
    "/Images/sample_image_7.jpg",
    "/Images/sample_image_8.jpg",
    "/Images/sample_image_9.jpg",
    "/Images/sample_image_10.jpg",
    "/Images/sample_image_1.jpg",
    "/Images/sample_image_2.jpg",
    "/Images/sample_image_3.jpg",
    "/Images/sample_image_4.jpg",
    "/Images/sample_image_5.jpg",
    "/Images/sample_image_6.jpg",
    "/Images/sample_image_7.jpg",
    "/Images/sample_image_8.jpg",
    "/Images/sample_image_9.jpg",
    "/Images/sample_image_10.jpg",
    "/Images/sample_image_1.jpg",
    "/Images/sample_image_2.jpg",
    "/Images/sample_image_3.jpg",
    "/Images/sample_image_4.jpg",
    "/Images/sample_image_5.jpg",
    "/Images/sample_image_6.jpg",
    "/Images/sample_image_7.jpg",
    "/Images/sample_image_8.jpg",
    "/Images/sample_image_9.jpg",
    "/Images/sample_image_10.jpg",
    "/Images/sample_image_1.jpg",
    "/Images/sample_image_2.jpg",
    "/Images/sample_image_3.jpg",
    "/Images/sample_image_4.jpg",
    "/Images/sample_image_5.jpg",
    "/Images/sample_image_6.jpg",
    "/Images/sample_image_7.jpg",
    "/Images/sample_image_8.jpg",
    "/Images/sample_image_9.jpg",
    "/Images/sample_image_10.jpg",
    "/Images/sample_image_1.jpg",
    "/Images/sample_image_2.jpg",
    "/Images/sample_image_3.jpg",
    "/Images/sample_image_4.jpg",
    "/Images/sample_image_5.jpg",
    "/Images/sample_image_6.jpg",
    "/Images/sample_image_7.jpg",
    "/Images/sample_image_8.jpg",
    "/Images/sample_image_9.jpg",
    "/Images/sample_image_10.jpg",
    "/Images/sample_image_1.jpg",
    "/Images/sample_image_2.jpg",
    "/Images/sample_image_3.jpg",
    "/Images/sample_image_4.jpg",
    "/Images/sample_image_5.jpg",
    "/Images/sample_image_6.jpg",
    "/Images/sample_image_7.jpg",
    "/Images/sample_image_8.jpg",
    "/Images/sample_image_9.jpg",
    "/Images/sample_image_10.jpg",
    "/Images/sample_image_1.jpg",
    "/Images/sample_image_2.jpg",
    "/Images/sample_image_3.jpg",
    "/Images/sample_image_4.jpg",
    "/Images/sample_image_5.jpg",
    "/Images/sample_image_6.jpg",
    "/Images/sample_image_7.jpg",
    "/Images/sample_image_8.jpg",
    "/Images/sample_image_9.jpg",
    "/Images/sample_image_10.jpg",
    "/Images/sample_image_1.jpg",
    "/Images/sample_image_2.jpg",
    "/Images/sample_image_3.jpg",
    "/Images/sample_image_4.jpg",
    "/Images/sample_image_5.jpg",
    "/Images/sample_image_6.jpg",
    "/Images/sample_image_7.jpg",
    "/Images/sample_image_8.jpg",
    "/Images/sample_image_9.jpg",
    "/Images/sample_image_10.jpg",
    "/Images/sample_image_1.jpg",
    "/Images/sample_image_2.jpg",
    "/Images/sample_image_3.jpg",
    "/Images/sample_image_4.jpg",
    "/Images/sample_image_5.jpg",
    "/Images/sample_image_6.jpg",
    "/Images/sample_image_7.jpg",
    "/Images/sample_image_8.jpg",
    "/Images/sample_image_9.jpg",
    "/Images/sample_image_10.jpg",
  ]

  return (
    <div className="carousel-wrapper">
        <div className="carousel-content-1">
            {/* {images.map((image, index) => (
                <div key={index} className="card-sample">
                    <Image className="card-image" src={image} width={800} height={600} alt="photoshoots" priority/>
                </div>
                
            ))} */}

            <ol className="cards-track">
                {images.map((image,index) => (
                    <li key={index} className="card">
                        <Image className="card-image" src={image} width={800} height={600} alt="photoshoots" priority/>
                    </li>
                ))}
            </ol>
        </div>
    </div>
  );
};

export default Carousel;






// import React from 'react';

// const Carousel = () => {
//   const items = [
//     { title: 'Card 1', description: 'This is the first card.' },
//     { title: 'Card 2', description: 'This is the second card.' },
//     { title: 'Card 3', description: 'This is the third card.' },
//     { title: 'Card 4', description: 'This is the fourth card.' },
//     { title: 'Card 5', description: 'This is the fifth card.' },
//   ];
//   const visibleCount = 3;
//   const totalItems = items.length;

//   // Append clones for seamless looping
//   const loopItems = [...items, ...items.slice(0, visibleCount)];
//   const animationDuration = totalItems * 3; // seconds per item

//   return (
//     <div className="carousel-container">
//       <div className="carousel-wrapper">
//         <div
//           className="carousel-content"
//           style={{
//             animation: `scroll ${animationDuration}s linear infinite`,
//           }}
//         >
//           {loopItems.map((item, idx) => (
//             <div className="card" key={idx}>
//               <h3>{item.title}</h3>
//               <p>{item.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//       <style jsx>{`
//         .carousel-container {
//           width: 100%;
//           overflow: hidden;
//         }
//         .carousel-wrapper {
//           display: flex;
//         }
//         .carousel-content {
//           display: flex;
//         }
//         .card {
//           flex: 0 0 calc(100% / 3);
//           box-sizing: border-box;
//           margin-right: 10px;
//           background: #000;
//           padding: 20px;
//           border-radius: 8px;
//           box-shadow: 0 2px 8px rgba(0,0,0,0.1);
//         }
//         @keyframes scroll {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(calc(-100% * ${totalItems / visibleCount}));
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Carousel;