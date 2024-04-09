import React, { useState, ChangeEvent, FormEvent } from 'react';
import './CreateGig.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

interface FormData {
    gigTitle: string;
    gigDescription: string;
    gigCategory: string;
}

export const CreateGigForm1: React.FC = () => {
    const history = useHistory();

    const [formData, setFormData] = useState<FormData>({
        gigTitle: '',
        gigDescription: '',
        gigCategory: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        let filteredValue = value.replace(/[^a-zA-Z\s]/g, ''); 
        setFormData({
            ...formData,
            [name]: filteredValue
        });
    };
    
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post<{ gigId: string }>('http://localhost:8082/freelancer-gigs', formData)
            .then(response => {
                const gigId = response.data.gigId;
                console.log('Data sent successfully:', response.data);
                handleNextClick(gigId);
            })
            .catch(error => {
                console.error('Error sending data:', error);
            });
    };

    const handleNextClick = (gigId: string) => {
        history.push(`/CreateGigForm2/${gigId}`);
    };

    return (
        <div className="bg-light vh-100 d-flex align-items-center justify-content-center">
            <div className="container" style={{ maxWidth: '900px' }}>
                <h2 className="text-center mb-4" style={{ color: 'red' }}>Create a Gig</h2>
                <form className="row g-3" onSubmit={handleSubmit}>
                    {/* Form fields */}
                    {/* Gig Title */}
                    <div className="row g-3">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="gigTitle" className="form-label">Gig title:</label>
                                <p className="input-label">(Gig title should be limited to less than 50 characters.
                                    Include more keywords to achieve more reach among the buyers)</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="gigTitle"
                                    name="gigTitle"
                                    placeholder="Enter gig title"
                                    maxLength={50}
                                    value={formData.gigTitle}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    {/* Gig Description */}
                    <div className="row g-3">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="gigDescription" className="form-label">Gig Description:</label>
                                <p className="input-label">(Gig description should be limited to less than 200 characters.
                                    Describe what you do in your gig in the gig description)</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <textarea
                                    className="form-control"
                                    id="gigDescription"
                                    name="gigDescription"
                                    placeholder="Enter gig description"
                                    maxLength={200}
                                    rows={7}
                                    value={formData.gigDescription}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    {/* Gig Category */}
                    <div className="row g-3">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="category" className="form-label">Category:</label>
                                <p className="input-label">Select the category for your gig:</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <select
                                    id="gigCategory"
                                    className="form-select"
                                    name="gigCategory"
                                    value={formData.gigCategory}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled>Select category</option>
                                    <option value="Graphic Design">Graphic Design</option>
                                    <option value="Web Development">Web Development</option>
                                    <option value="Content Writing">Content Writing</option>
                                    <option value="Software Development">Software Development</option>
                                    <option value="Translation">Translation</option>
                                    <option value="Video Editing">Video Editing</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* Submit Button */}
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary btn-lg" >Next</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
