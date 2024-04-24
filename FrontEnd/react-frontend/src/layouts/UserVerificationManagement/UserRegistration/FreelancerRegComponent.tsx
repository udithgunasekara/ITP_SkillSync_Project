import React, { useState } from 'react';
import { createFreelancer } from '../Services/UserManagementService';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory, useLocation } from 'react-router-dom';
import { validateEmail, validatePassword, validateName, validateUsername, validateDOB, validatePhone } from './FormValidation';

const FreelancerRegComponent = () => {
    const navigate = useHistory();



    // Initializing state for each backend variable
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [nic, setNic] = useState('');
    const [phone, setPhone] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [workOn, setWorkOn] = useState('');

    // Initializing state for error handling when doing validation
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [dobError, setDobError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [phoneError, setPhoneError] = useState('');


    //set up session storage
    sessionStorage.setItem('username', userName);

    function saveFreelancer(e: any) {
        e.preventDefault();

        // Validate email
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Validate password
        if (!validatePassword(password)) {
            alert('Password must have at least one number, one lowercase, one uppercase letter, and at least 8 characters.');
            return;
        }

        if (!validateName(firstName) || !validateName(lastName)) {
            alert('Invalid name');
            return;
        }
        
        if (!validateDOB(dob)) {
            alert('Age must be between 13 and 99 years');
            return;
        }

        if (!validateUsername(userName)) {
            alert('Username must contain only lowercase letters and numbers');
            return;
        }
        if(!validatePhone(phone)){
            alert('Invalid phone number');
            return;
        }



        // Including all state variables in the employee object
        const freelancer = { firstName, lastName, email, dob, nic, phone, userName, password, workOn };
        console.log(freelancer);

        createFreelancer(freelancer).then((response) => {
            console.log(response.data);
            navigate.push('/QualificationPage', { state: { userName: userName } });
        });
    }

    return (
        <div className="container" style={{ maxWidth: '600px', margin: 'auto' }}>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                <h1 style={{ color: '#AC69E2', textAlign: 'center' }}>SkillSync</h1>
                <h3 style={{ color: '#AC69E2', textAlign: 'center' }}>Freelancer Registration</h3>
                <p style={{ textAlign: 'center', marginBottom: '30px' }}>Set up your information as a Freelancer</p>
                <form onSubmit={saveFreelancer}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="firstName" className="form-label">First Name</label>
                                <input type="text" className="form-control" id="firstName" name="firstName" placeholder="Enter First Name" required value={firstName} onChange={(e) => {
                                    setFirstName(e.target.value);
                                    setFirstNameError(validateName(e.target.value) ? '' : 'Invalid first name');
                                }} />
                                <div style={{ color: 'red' }}>{firstNameError}</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="nic" className="form-label">NIC</label>
                                <input type="text" className="form-control" id="nic" name="nic" placeholder="Enter NIC" required value={nic} onChange={(e) => setNic(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" name="email" placeholder="Enter Email" required value={email} onChange={(e) => {
                                    setEmail(e.target.value);
                                    setEmailError(validateEmail(e.target.value) ? '' : 'Invalid email format');
                                }} />
                                <div style={{ color: 'red' }}>{emailError}</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="dob" className="form-label">Date of Birth</label>
                                <input type="date" className="form-control" id="dob" name="dob" required value={dob} onChange={(e) => {
                                    setDob(e.target.value);
                                    setDobError(validateDOB(e.target.value) ? '' : 'Age must be between 13 and 99 years');
                                }} />
                                <div style={{ color: 'red' }}>{dobError}</div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Enter Last Name" required value={lastName} onChange={(e) => {
                                    setLastName(e.target.value);
                                    setLastNameError(validateName(e.target.value) ? '' : 'Invalid last name');
                                }} />
                                <div style={{ color: 'red' }}>{lastNameError}</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Phone Number</label>
                                <div className="input-group">
                                    <span className="input-group-text" id="basic-addon1">+94</span>
                                    <input type="tel" className="form-control" id="phone" name="phone" placeholder="Enter Phone Number" required value={phone} onChange={(e) => {
                                        setPhone(e.target.value);
                                        setPhoneError(validatePhone(e.target.value) ? '' : 'Invalid phone number');
                                    }} />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input type="text" className="form-control" id="username" name="userName" placeholder="Enter Username" required value={userName} onChange={(e) => {
                                    setUserName(e.target.value);
                                    setUsernameError(validateUsername(e.target.value) ? '' : 'Username must contain only lowercase letters and numbers');
                                }} />
                                <div style={{ color: 'red' }}>{usernameError}</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="workOn" className="form-label">Work on:</label>
                                <select className="form-select" id="workOn" name="workOn" required value={workOn} onChange={(e) => setWorkOn(e.target.value)}>
                                    <option value="">Select an option</option>
                                    <option value="Web Development">Web Development</option>
                                    <option value="Mobile App Development">Mobile App Development</option>
                                    <option value="UI/UX Design">UI/UX Design</option>
                                    <option value="Graphic Design">Graphic Design</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" name="password" placeholder="Enter Password" required value={password} onChange={(e) => {
                                    setPassword(e.target.value);
                                    setPasswordError(validatePassword(e.target.value) ? '' : 'Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, and a number.');
                                }} />
                            </div>
                            <div style={{ color: 'red' }}>{passwordError}</div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="Re-password" className="form-label">Re-Password</label>
                                <input type="password" className="form-control" id="Re-password" name="Re-password" placeholder="Re-enter Password" required />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn" style={{ backgroundColor: '#AC69E2', color: 'white', width: '100%' }}>Next</button>
                </form>
            </div>
        </div>
    );
}

export default FreelancerRegComponent;
