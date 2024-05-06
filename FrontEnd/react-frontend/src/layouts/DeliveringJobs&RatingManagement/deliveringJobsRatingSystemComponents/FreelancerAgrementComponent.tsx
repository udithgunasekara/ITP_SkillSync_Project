import React, { useState } from 'react';
import jsPDF from 'jspdf';

const FreelancerAgreementComponent: React.FC = () => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    
    // Agreement text constant
    const agreementText: string = `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.
    `;

    // Handle checkbox change event
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setIsChecked(e.target.checked);
    };

    // Handle form submit
    const handleSubmit = (): void => {
        if (isChecked) {
            // Create a new jsPDF instance
            const doc = new jsPDF();

            // Set the font size to a smaller value (e.g. 10)
            doc.setFontSize(10);

            // Add the agreement text to the PDF
            doc.text(agreementText, 10, 10);

            // Save the PDF file
            doc.save('freelancer_agreement.pdf');
        } else {
            alert('Please agree to the terms and conditions.');
        }
    };

    return (
        <div className="card" style={{ textAlign: 'center' }}>
            <div className="card-body" style={{ width: '500px', margin: '0 auto' }}>
                <h2 style={{ textAlign: 'center' }}>Freelancer Agreement</h2>
                <p>{agreementText}</p>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckDefault"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        I read the agreement and I agree to the terms and conditions.
                    </label>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <button
                            className="btn btn-info"
                            onClick={handleSubmit}
                            style={{ marginRight: '10px' }}
                        >
                            Submit
                        </button>
                        <button
                            className="btn btn-danger"
                            onClick={() => console.log('Cancel clicked')}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FreelancerAgreementComponent;