import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const CreateGigForm2: React.FC = () => {
    const history = useHistory();
    const { gigId } = useParams<{ gigId: string }>();
    const [imageFiles, setImageFiles] = useState<File[]>([]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (imageFiles.length === 1) {
            window.alert('Please upload at least two images.');
            return;
        }

        const formData = new FormData();
        imageFiles.forEach((file) => {
            formData.append('image', file); // Append each file with the key "image"
        });

        try {
            const response = await axios.post(`http://localhost:8082/freelancer-gigs/${gigId}/gig-images/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Images uploaded successfully:', response.data);
            handleNextClick(gigId);
        } catch (error) {
            console.error('Error uploading images:', error);
            window.alert('Failed to upload images. Please try again.');
        }
    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            setImageFiles(prevState => {
                const newImageFiles = [...prevState];
                newImageFiles[index] = file;
                return newImageFiles;
            });
        }
    };

    const handleNextClick = (gigId: string) => {
        history.push(`/CreateGigForm3/${gigId}`);
    };

    const containerStyle: React.CSSProperties = {
        maxWidth: '56.25em', 
        maxHeight: '56.25em', 
        marginTop: '9.375em', 
        marginBottom: '13.125em', 
    };

    const buttonStyle: React.CSSProperties = {
        fontSize: '1.25em', 
    };

    return (
        <div className="">
            <div className="container" id="containerGigCreate" style={containerStyle}>
                <h2 className="text-center mb-4" style={{ color: 'red' }}>Upload Images</h2>
                <form onSubmit={handleSubmit} className="row g-3">
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="col-md-6">
                            <div className="form-group">
                                <label htmlFor={`image${index}`} className="form-label" id="formLabelGigCreate">Upload Image {index + 1}:</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id={`image${index}`}
                                    accept="image/jpeg, image/png" // Accept only JPG and PNG files
                                    onChange={(e) => handleImageChange(e, index)}
                                />
                            </div>
                        </div>
                    ))}
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary btn-lg" id="btnPrimaryGigCreate" style={buttonStyle}>Next</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateGigForm2;
