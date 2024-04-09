import React from 'react';
import { Carousel } from 'react-bootstrap';

const ImageCarousel: React.FC = () => {
  // Path to the image
  const imagePath = '/Images/wallpaper1.jpg';

  // Create an array with 6 elements, each containing the same image URL
  const images = Array.from({ length: 6 }, (_, index) => imagePath);

  return (
    <Carousel style={{ maxWidth: '900px', maxHeight: '900px', margin: '0 auto' }}>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={image} alt={`Slide ${index}`} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;