/*import React, { useState } from 'react';
import jsPDF from 'jspdf';
import { Document, Page, Text, View,StyleSheet, Image } from '@react-pdf/renderer';
import logo from '../image/Asset 3.png'

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

export default FreelancerAgreementComponent;*/




import React, { useState } from 'react';
import jsPDF from 'jspdf';
import logo from '../image/Asset 3.png';

const FreelancerAgreementComponent: React.FC = () => {
    // Use useState to handle the checkbox state
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

            // Set the font size to a larger value (e.g., 12)
            doc.setFontSize(12);

            // Create an Image instance
            const img = new Image();
            img.src = logo; // This will work because the logo is imported as a path

            // On image load, add it to the PDF and then add the text
            img.onload = () => {
                // Add the logo image to the PDF in the top left corner
                // Positioned at (x = 10, y = 10), dimensions (width = 30, height = 30)
                doc.addImage(img, 'PNG', 10, 10, 50, 20);

                // Add the headline "Agreement" in bold letters
                doc.setFont('helvetica', 'bold');
                //doc.text('Agreement', 20, 45);
                doc.setFontSize(12); // Set font size to a little bit large
                doc.text('Agreement', doc.internal.pageSize.width / 2, 45, { align: 'center' });

                // Reset font style to normal
                doc.setFont('helvetica', 'normal');

                // Add the agreement text starting at y = 60 to leave space for the headline
                doc.text(agreementText, 10, 50);

                // Add the current date in the bottom left corner
                const currentDate = new Date().toLocaleDateString();
                doc.text(`Date: ${currentDate}`, 10, doc.internal.pageSize.height - 20);

                // Add a signature line and label in the bottom right corner
                const signatureX = doc.internal.pageSize.width - 100;
                doc.line(signatureX, doc.internal.pageSize.height - 30, signatureX + 90, doc.internal.pageSize.height - 30);
                doc.text('Signature:', signatureX, doc.internal.pageSize.height - 25);

                // Save the PDF
                doc.save('freelancer_agreement.pdf');
            };
        } else {
            alert('Please agree to the terms and conditions.');
        }
    };

    return (
        <div className="card" style={{ textAlign: 'center' }}>
            <div className="card-body" style={{ width: '500px', margin: '0 auto' }}>
            <div>
            {/* Headline styled as requested */}
            <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '2rem' }}>
                AGREEMENT
            </h1>
        </div>
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