import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FreelancerLogin } from '../Service/LoginService'
import 'bootstrap/dist/css/bootstrap.min.css';
import { checkAccountStatus } from '../../Services/UserManagementService';

export const FreelancerLoginComponent =  () => {
    // Initializing state for login variables
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    //const [id, setId] = useState(''); // [1
    const navigate = useHistory();


    //setup session storage
    sessionStorage.setItem('username', username)

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Including all state variables in the freelancer object
        const freelancer = { username, password, };
        console.log(freelancer); // For debug purposes

        FreelancerLogin(freelancer).then((response) => {
            console.log("Login response:", response.data);
            //set id
            sessionStorage.setItem('id', response.data)
            sessionStorage.setItem('role', 'freelancer')

            alert('login successful ');
 
            console.log("Account status check function calling ");
            /// Check account status after login
            checkAccountStatus(username).then((response) => {
                // Assuming response.data is the boolean account status
                const status = response.data;
                if (status === true) {
                    console.log("Account status accepted");
                    // If the account status is accepted, navigate to UserTestPage
                    navigate.push('/FreelancerDashboard');
                } else {
                    // If the account status is not accepted, navigate to AccountNotAcceptedPage
                    navigate.push(`/ReSubmission/${username}`);
                }
                console.log("Account status check function called successfully");
            }).catch((error) => {
                console.error("Error checking account status:", error);
               
            });

        }).catch((error) => {
            console.error("Login error:", error.response || error);
            alert('Login Failed!');
        });
    };

    return (
        <div className="container" style={{ maxWidth: '600px', margin: 'auto' }}>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                <h1 style={{ color: '#007bff', textAlign: 'center' }}>Freelancer Portal</h1>
                <h3 style={{ color: '#007bff', textAlign: 'center' }}>Freelancer Login</h3>
                <p style={{ textAlign: 'center', marginBottom: '30px' }}>Enter your credentials to login</p>
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username" name="username" placeholder="Enter Username" required value={username} onChange={(e) => setUserName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" placeholder="Enter Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FreelancerLoginComponent;
