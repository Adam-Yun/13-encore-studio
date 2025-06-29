
import Image from 'next/image';

interface CarouselProps {
    images: string[];
    index: number;
}

const Carousel = ({ images, index } : CarouselProps ) => {
  
    return ( 
        <Image className="card-image" src={images[index]} width={800} height={600} alt="photoshoots" priority/>
        // <p>{images[index]}</p>
    );
};

export default Carousel;