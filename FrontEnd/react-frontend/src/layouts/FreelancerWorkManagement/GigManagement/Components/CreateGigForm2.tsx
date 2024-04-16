import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const CreateGigForm2: React.FC = () => {

    const history = useHistory();
    const { gigId } = useParams<{ gigId: string }>();
    const [imageFiles, setImageFiles] = useState<File[]>([]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
    
        const formData = new FormData();
        for (let i = 0; i < imageFiles.length; i++) {
            formData.append('files', imageFiles[i]); // Change 'file' to 'files'
        }
    
        try {
            const response = await axios.post(`http://localhost:8082/freelancer-gigs/${gigId}/gig-images/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Images uploaded successfully:', response.data);
    
        } catch (error) {
            console.error('Error uploading images:', error);
            // Optionally, you can handle errors here
        }
        handleNextClick(gigId);
    };
    
    
    const handleImageChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            // Update imageFiles state with selected file
            setImageFiles(prevState => {
                const newImageFiles = [...prevState];
                newImageFiles[index] = file;
                return newImageFiles;
            });
        }
    };

    const handleNextClick = (gigId: string) => {
        history.push(`/CreateGigForm3/${gigId}`);
    }

    return (
        <div className="container" id="containerGigCreate" style={{ maxWidth: '900px', maxHeight: '900px', marginTop: '150px', marginBottom: '210px' }}>
            <h2 className="text-center mb-4" style={{ color: 'red' }}>Upload Images</h2>
            <form onSubmit={handleSubmit} className="row g-3">
                {[...Array(6)].map((_, index) => (
                    <div key={index} className="col-md-6">
                        <div className="form-group">
                            <label htmlFor={`image${index}`} className="form-label" id="formLabelGigCreate">Upload Image {index + 1}:</label>
                            <input type="file" className="form-control" id={`image${index}`} onChange={(e) => handleImageChange(e, index)} />
                        </div>
                    </div>
                ))}
                <div className="col-12">
                    <button type="submit" className="btn btn-primary btn-lg" id="btnPrimaryGigCreate">Next</button>
                </div>
            </form>
        </div>
    );
};

export default CreateGigForm2;
