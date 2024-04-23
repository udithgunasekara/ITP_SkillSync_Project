import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import axios from 'axios';

interface ImageData {
  gigImagePath: string;
}

interface ImageCarouselProps {
  gigId: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ gigId }) => {
  const [images, setImages] = useState<ImageData[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get<ImageData[]>(`http://localhost:8082/freelancer-gigs/${gigId}/gig-images/my-gig-images`);
        // Map absolute paths to relative paths
        const mappedImages = response.data.map(image => ({
          ...image,
          gigImagePath: `/gigImages/${gigId}/${getFileNameFromPath(image.gigImagePath)}`
        }));
        setImages(mappedImages);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [gigId]);

  // Function to extract file name from absolute path
  const getFileNameFromPath = (path: string) => {
    const parts = path.split('/');
    return parts[parts.length - 1];
  };

  return (
    <Carousel style={{ maxWidth: '900px', maxHeight: '900px', margin: '0 auto' }}>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={image.gigImagePath} alt={`Slide ${index} ${image.gigImagePath}`} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
