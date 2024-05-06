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

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const loggedInUser = getUserInfo();
            // Check if user is logged in as a freelancer
            if (!loggedInUser) {
                alert('You have to login as a freelancer to create a gig.');
                history.push('/Freelancer/Login');
                return;
            }
            const gigData = { ...formData, freelancerUsername: loggedInUser.username };
            const response = await axios.post<{ gigId: string }>('http://localhost:8082/freelancer-gigs', gigData);
            const gigId = response.data.gigId;
            console.log('Data sent successfully:', response.data);
            handleNextClick(gigId);
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };

    const handleNextClick = (gigId: string) => {
        history.push(`/CreateGigForm2/${gigId}`);
    };

    const getUserInfo = () => {
        return { username: sessionStorage.getItem('username') };
    };

    const backgroundStyle: React.CSSProperties = {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
    };

    const containerStyle: React.CSSProperties = {
        maxWidth: '56.25em', // 900px converted to em units
    };

    const buttonStyle: React.CSSProperties = {
        padding: '0.75em 1.5em', 
        borderRadius: '0.5em', 
        fontSize: '1.25em', 
    };

    return (
        <div className="bg-light" style={backgroundStyle}>
            <div className="container" id="containerGigCreate" style={containerStyle}>
                <h2 className="text-center mb-4" style={{ color: 'red' }}>Create a Gig</h2>
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="gigTitle" className="form-label" id="formLabelGigCreate">Gig title:</label>
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
                    <div className="row g-3">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="gigDescription" className="form-label" id="formLabelGigCreate">Gig Description:</label>
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
                    <div className="row g-3">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="category" className="form-label" id="formLabelGigCreate">Category:</label>
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
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary btn-lg" id="btnPrimaryGigCreate" style={buttonStyle}>Next</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
