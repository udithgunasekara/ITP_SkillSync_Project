import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import axios from 'axios';

interface ImageData {
  gigImageId: string;
  gigImage: string;
}

interface ImageCarouselProps {
  gigId: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ gigId }) => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [firstImage, setFirstImage] = useState<string>('');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get<Map<string, string[]>>(`http://localhost:8082/freelancer-gigs/${gigId}/gig-images/my-gig-images`);
        // Transform response data to ImageData format
        const imageData: ImageData[] = Object.entries(response.data).map(([title, imageList]) => ({
          gigImageId: title,
          gigImage: imageList[0] // Assuming only one image per title for simplicity
        }));
        setImages(imageData);

        // Set the first image to be displayed below the carousel
        if (imageData.length > 0) {
          setFirstImage(imageData[0].gigImage);
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [gigId]);

  return (
    <div className="image-carousel-container">
      <Carousel className="carousel-custom">
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img style={{ maxWidth: '100%', height: '400px' }} src={`data:image/jpeg;base64,${image.gigImage}`} alt={`Slide ${index}`} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
