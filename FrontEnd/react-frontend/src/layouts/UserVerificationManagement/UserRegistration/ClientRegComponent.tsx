import React, { useState } from 'react';
// Assume createClient is a similar service function as createFreelancer for registering clients.
import { OTPSending, createClient } from '../Services/UserManagementService';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './ClientReg.css';
import { validateEmail, validatePassword, validateName, validateUsername, validateDOB, validatePhone } from './FormValidation';
import { useHistory } from 'react-router-dom';

const ClientRegComponent = () => {


        const history = useHistory();
    // Initializing state for each backend variable
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [nic, setNic] = useState('');
    const [phone, setPhone] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [country, setCountry] = useState('');


    //Error handling
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [dobError, setDobError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [phoneError, setPhoneError] = useState('');


    //set up session storage
    sessionStorage.setItem('username', userName);
    sessionStorage.setItem('email', email );
    sessionStorage.setItem('role', 'client');



    const saveClient = (e:any) => {
       e.preventDefault();

         // Validation
         //name validation
            if (!validateName(firstNameError) || !validateName(lastNameError)) {
                alert('Invalid naaame');
                return;

                //email validation
            } else if (!validateEmail(emailError)) {
                alert('Invalid email');
                return;

                //username validation
            } else if (!validateUsername(usernameError)) {
                alert('Invalid username');
                return;

                //dob validation
            }else if (!validateDOB(dobError)) {
                alert('Invalid date of birth');
                return;

                //password validation
            }else if (!validatePassword(passwordError)) {
                alert('Invalid password');
                return;
            }else if (!validatePhone(phoneError)) {
                alert('Invalid phone number');
                return;
            }



       // Including all state variables in the client object
       const client = { firstName, lastName, email, dob, nic, phone, userName, password, country };
       console.log(client);

       //sending email
       OTPSending(email).then((response) => {
        console.log(response.data);
       });

       createClient(client).then((response) => {
          console.log(response.data);
          history.push('/OTPVerificationPage');
       });
    };


    return (
        <div className="container" style={{ maxWidth: '900px', marginTop:'80px' }}>
        <div style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <h1 style={{ color: '#AC69E2', textAlign: 'center', fontSize: '48px' }}>SkillSync</h1>
            <h3 style={{ color: '#AC69E2', textAlign: 'center', fontSize: '24px' }}>Client Registration</h3>
            <p style={{ textAlign: 'center', marginBottom: '10px', fontSize: '18px' }}>Set up your information as a Client</p>
          <form onSubmit={saveClient} style={{padding: '15px'}}>
                                <div className="row">
                                        <div className="col-md-6">
                                                <div className="mb-3">
                                                        <label htmlFor="firstName" className="form-label">First Name</label>
                                                        <input type="text" className="form-control" id="firstName" name="firstName" placeholder="Enter First Name" required value={firstName} 
                                                        onChange={(e) => {
                                                            setFirstName(e.target.value);
                                                            //setFirstNameError(validateName(e.target.value) ? '' : 'Invalid first name');
                                                    }} />
                                                    <div style={{ color: 'red' }}>{firstNameError}</div>
                                                </div>
                                                <div className="mb-3">
                                                        <label htmlFor="username" className="form-label">Username</label>
                                                        <input type="text" className="form-control" id="username" name="username" placeholder="Enter Username" required value={userName} 
                                                        onChange={(e) => {
                                                            setUserName(e.target.value);
                                                            setUsernameError(validateUsername(e.target.value) ? '' : 'Invalid username');
                                                    }} />
                                                    <div style={{ color: 'red' }}>{usernameError}</div>
                                                </div>
                                                {/* <div className="mb-3">
                                                        <label htmlFor="phone" className="form-label">Phone Number</label>
                                                        <input type="tel" className="form-control" id="phone" name="phone" placeholder="Enter Phone Number" required value={phone} 
                                                        onChange={(e) => setPhone(e.target.value)} />
                                                </div> */}

                                                    <div className="mb-3">
                                                        <label htmlFor="phone" className="form-label">Phone Number</label>
                                                        <input type="tel" className="form-control" id="phone" name="phone" 
                                                            placeholder="+88 234567890" 
                                                            required value={phone} 
                                                            onChange={(e) => {
                                                                setPhone(e.target.value);
                                                                setPhoneError(validatePhone(e.target.value) ? '' : 'Invalid username');
                                                        }} />
                                                           <div style={{ color: 'red' }}>{passwordError}</div> 
                                                    </div>




                                                <div className="mb-3">
                                                        <label htmlFor="dob" className="form-label">Date of Birth</label>
                                                        <input type="date" className="form-control" id="dob" name="dob" required value={dob} 
                                                        onChange={(e) => {
                                                            setDob(e.target.value);
                                                            setDobError(validateDOB(e.target.value) ? '' : 'Invalid date of birth');
                                                    }} />
                                                </div>
                                        </div>
                                        <div className="col-md-6">
                                                <div className="mb-3">
                                                        <label htmlFor="lastName" className="form-label">Last Name</label>
                                                        <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Enter Last Name" required value={lastName} 
                                                        onChange={(e) => {
                                                            setLastName(e.target.value);
                                                            //setLastNameError(validateName(e.target.value) ? '' : 'Invalid last name');
                                                    }} />
                                                </div>
                                                <div className="mb-3">
                                                        <label htmlFor="email" className="form-label">Email</label>
                                                        <input type="email" className="form-control" id="email" name="email" placeholder="Enter Email" required value={email} 
                                                        onChange={(e) => {
                                                            setEmail(e.target.value);
                                                            setEmailError(validateEmail(e.target.value) ? '' : 'Invalid email');
                                                    }} />
                                                </div>
                                                <div className="mb-3">
                                                        <label htmlFor="nic" className="form-label">NIC</label>
                                                        <input type="text" className="form-control" id="nic" name="nic" placeholder="Enter NIC" required value={nic} 
                                                        onChange={(e) => setNic(e.target.value)} />
                                                </div>
                                                <div className="mb-3">
                                                        <label htmlFor="country" className="form-label">Country</label>
                                                        <select className="form-select" id="country" name="country" required value={country} 
                                                        onChange={(e) => setCountry(e.target.value)}>
                                                                <option value="">Select Country</option>
                                                                <option value="USA">USA</option>
                                                                <option value="Canada">Canada</option>
                                                                <option value="UK">UK</option>
                                                                <option value="Australia">Australia</option>
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
                                                        <input type="password" className="form-control" id="password" name="password" placeholder="Enter Password" required value={password} 
                                                        onChange={(e) => {
                                                            setPassword(e.target.value);
                                                            setPasswordError(validatePassword(e.target.value) ? '' : 'Invalid password');
                                                    }} />
                                                </div>
                                        </div>
                                        <div className="col-md-6">
                                                <div className="mb-3">
                                                        <label htmlFor="Re-password" className="form-label">Re-Password</label>
                                                        <input type="password" className="form-control" id="Re-password" name="Re-password" placeholder="Re-enter Password" required />
                                                </div>
                                        </div>
                                </div>
                                <button type="submit" className="btn" style={{ backgroundColor: '#AC69E2', color: 'white', width: '100%' }}>Create Account</button>
                        </form>
                </div>
        </div>
    );
    
    
}

export default ClientRegComponent