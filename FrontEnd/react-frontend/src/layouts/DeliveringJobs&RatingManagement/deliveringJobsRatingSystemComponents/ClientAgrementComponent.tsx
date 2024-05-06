import React, { useState } from 'react';
// Import the useNavigate hook from 'react-router-dom' if you plan to use it
// import { useNavigate } from 'react-router-dom';

const ClientAgreementComponent: React.FC = () => {
    // Use the useNavigate hook if needed
    // const navigate = useNavigate();

    const [isChecked, setIsChecked] = useState<boolean>(false); // State to track checkbox value

    // Function to handle the checkbox change event
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setIsChecked(e.target.checked);
    };

    // Function to handle the button click
    /*const handleProceedToPayment = (): void => {
        // If using useNavigate, navigate to the payment route
        // navigate('/');
    };*/

    return (
        <div className="card" style={{ textAlign: 'center' }}>
            <div className="card-body" style={{ width: '500px', margin: '0 auto' }}>
                <h2 style={{ textAlign: 'center' }}>Client Agreement</h2>
                <form>
                    <div className="form-group mb-2">
                        <br />
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                        qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        <br />
                        <br />
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexCheckDefault"
                                checked={isChecked} // Use state to control the checked value
                                onChange={handleCheckboxChange} // Handle checkbox change
                            />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                I read the agreement and I agree to the terms and conditions.
                            </label>
                        </div>
                    </div>
                </form>
                <div className="row">
                    <div className="col">
                        <div>
                            <button
                                className="btn btn-info btn-block"
                                // onClick={handleProceedToPayment} // Uncomment and implement the function if needed
                                onMouseOver={(e) => {
                                    e.currentTarget.style.boxShadow = '0px 8px 8px rgba(0, 0, 0, 0.2)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)';
                                }}
                            >
                                Proceed to Payment
                            </button>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientAgreementComponent;
