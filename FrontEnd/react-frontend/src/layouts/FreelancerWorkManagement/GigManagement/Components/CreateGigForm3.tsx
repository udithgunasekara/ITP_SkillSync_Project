import React, { useState } from 'react';
import axios from 'axios';
import './CreateGig.css';
import { useHistory, useParams } from 'react-router-dom';

interface PackageDetails {
    [key: string]: {
        content: string;
        estimatedTime: number;
        price: number;
    };
}

const CreateGigForm3: React.FC = () => {

    const { gigId } = useParams<{ gigId: string }>();

    const [formData, setFormData] = useState<{ packageDetails: PackageDetails }>({
        packageDetails: {
            // Initialize with default values
            Basic: { content: '', estimatedTime: 1, price: 1 },
            Standard: { content: '', estimatedTime: 1, price: 1 },
            Premium: { content: '', estimatedTime: 1, price: 1 },
        },
    });

    const [agreed, setAgreed] = useState<boolean>(false);

    const handleContentChange = (packageType: string, value: string) => {
        setFormData(prevState => ({
            packageDetails: {
                ...prevState.packageDetails,
                [packageType]: { ...prevState.packageDetails[packageType], content: value },
            },
        }));
    };

    const handleEstimatedTimeChange = (packageType: string, value: number) => {
        if (value != 0) {
            setFormData(prevState => ({
                packageDetails: {
                    ...prevState.packageDetails,
                    [packageType]: { ...prevState.packageDetails[packageType], estimatedTime: value },
                },
            }));
        }
    };

    const handlePriceChange = (packageType: string, value: number) => {
        if (value != 0) {
            setFormData(prevState => ({
                packageDetails: {
                    ...prevState.packageDetails,
                    [packageType]: { ...prevState.packageDetails[packageType], price: value },
                },
            }));
        }
    };

    const handleAgreementChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAgreed(e.target.checked);
    };

    const handlePublishGig = () => {
        if (!agreed) {
            alert("Please agree to the terms to publish the gig.");
            return;
        }
        // Send all package details to the backend
        Object.keys(formData.packageDetails).forEach(packageType => {
            const payload = {
                packageName: packageType,
                packageDescription: formData.packageDetails[packageType].content,
                packagePrice: formData.packageDetails[packageType].price,
                packageDeliveryTime: formData.packageDetails[packageType].estimatedTime,
            };

            axios.post(`http://localhost:8082/freelancer-gigs/${gigId}/gig-packages`, payload)
                .then(response => {
                    console.log(`Gig was published successfully!`);
                    handleNextClick();
                    // You can perform additional actions here if needed
                })
                .catch(error => {
                    console.error(`Error submitting ${packageType} package:`, error);
                });
        });

        // You can add logic here to perform any additional actions after submitting all packages
        console.log("Gig published successfully!");
    };

    const history = useHistory();

    const handleNextClick = () => {
        history.push('/FreelancerMain');
    }

    return (
        <div>
            <section className="container mt-5">
                <h2 className="text-center mb-4 text-danger">Publish</h2>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {Object.keys(formData.packageDetails).map(packageType => (
                        <div key={packageType} className="col">
                            <div className="card shadow">
                                <div className="card-body">
                                    <h5 className="card-title text-center fw-bold " style={{ fontSize: '24px' }}>{packageType}</h5>
                                    <div className="form-group mb-3">
                                        <textarea
                                            className="form-control"
                                            id={`packageContent-${packageType}`}
                                            placeholder={`Enter content for ${packageType} package`}
                                            value={formData.packageDetails[packageType].content}
                                            onChange={e => handleContentChange(packageType, e.target.value)}
                                            rows={7}
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor={`estimatedTime-${packageType}`} className="form-label">Estimated Time:</label>
                                        <div className="input-group">
                                            <input
                                                type="number"
                                                className="form-control"
                                                id={`estimatedTime-${packageType}`}
                                                placeholder={`Time for ${packageType} package`}
                                                value={formData.packageDetails[packageType].estimatedTime}
                                                onChange={e => handleEstimatedTimeChange(packageType, parseInt(e.target.value))}
                                                required
                                                min="1"
                                                step="1"
                                                pattern="[0-9]+" // Allows positive integers
                                            />
                                            <span className="input-group-text">hours</span>
                                        </div>
                                        <small className="text-muted">Minimum 1 hour</small>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor={`price-${packageType}`} className="form-label">Price:</label>
                                        <div className="input-group">
                                            <input
                                                type="number"
                                                className="form-control"
                                                id={`price-${packageType}`}
                                                placeholder={`Enter price for ${packageType} package`}
                                                value={formData.packageDetails[packageType].price}
                                                onChange={e => handlePriceChange(packageType, parseFloat(e.target.value))}
                                                required
                                                min="1"
                                                step="0.05"
                                                pattern="^\d*\.?\d*$" // Allows positive float numbers
                                            />
                                            <span className="input-group-text">$</span>
                                        </div>
                                        <small className="text-muted">Minimum $1</small>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="card mt-4 p-3 border-0">
                    <h2 className="card-title text-center mb-4">Agreement</h2>
                    <p className="card-text">
                        "By submitting this gig, I agree to deliver the specified work within the agreed-upon
                        timeline and to the best of my ability. Payment terms are as agreed upon in our
                        communication. I retain the right to use this work as part of my portfolio, unless otherwise discussed."
                    </p>
                    <div className="form-check d-flex justify-content-center mb-3">
                        <input className="form-check-input" type="checkbox" id="agreementCheck" checked={agreed} onChange={handleAgreementChange} />
                        <label className="form-check-label ms-2" htmlFor="agreementCheck">I agree to the terms and conditions</label>
                    </div>
                </div>
                <div className="col-12 mt-4">
                    <button className="btn btn-primary btn-lg" onClick={handlePublishGig} disabled={!agreed}>
                        Publish Gig
                    </button>
                </div>
            </section>
        </div>
    );
}

export default CreateGigForm3;
