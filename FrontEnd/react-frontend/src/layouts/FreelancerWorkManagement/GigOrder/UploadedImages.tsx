import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface GigImage {
    gigImageId: number;
    gigImagePath: string;
    gigId: number;
}

interface UploadedImagesProps {
    gigId: string;
}

const UploadedImages: React.FC<UploadedImagesProps> = ({ gigId }) => {
    const [images, setImages] = useState<GigImage[]>([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get<GigImage[]>(`http://localhost:8082/freelancer-gigs/${gigId}/gig-images/my-gig-images`);
                setImages(response.data);
            } catch (error) {
                console.error('Error fetching images:', error);
                // Optionally, you can handle errors here
            }
        };

        fetchImages();
    }, [gigId]);

    return (
        <div>
            <h2>Uploaded Images</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {images.map((image, index) => (
                    <div key={index} style={{ marginRight: '10px', marginBottom: '10px' }}>
                        {/* Use the gigImagePath directly in the src attribute */}
                        <img src={image.gigImagePath} alt={`Uploaded Image ${index}`} style={{ maxWidth: '200px', maxHeight: '200px' }} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UploadedImages;
