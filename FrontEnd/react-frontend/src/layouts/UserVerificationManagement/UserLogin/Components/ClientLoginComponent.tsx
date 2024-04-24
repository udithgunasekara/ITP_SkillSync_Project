import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ClientLogin } from '../Service/LoginService'; 
import 'bootstrap/dist/css/bootstrap.min.css';

export const ClientLoginComponent = () => {
    // Initializing state for login variables
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useHistory();

    //setup session storage
    sessionStorage.setItem('username', username)

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Including all state variables in the client object
        const client = { username, password };
        console.log(client); // For debug purposes

        ClientLogin(client).then((response) => {
            console.log("Login response:", response.data);
            alert('Login Successful!');
            navigate.push('/UserTestPage');
            
        }).catch((error) => {
            console.error("Login error:", error.response || error);
            alert('Login Failed!');
        });
    };

    return (
        <div className="container" style={{ maxWidth: '600px', margin: 'auto' }}>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                <h1 style={{ color: '#007bff', textAlign: 'center' }}>Client Portal</h1>
                <h3 style={{ color: '#007bff', textAlign: 'center' }}>Client Login</h3>
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

export default ClientLoginComponent;
