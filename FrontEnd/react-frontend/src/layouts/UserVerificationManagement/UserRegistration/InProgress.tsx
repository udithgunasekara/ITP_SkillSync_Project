import React from 'react';
import logo from './inprogressLogo.png';



const InProgress: React.FC = () => {
    return (
      <div className="container text-center d-flex justify-content-center align-items-center" style={{ height: '80vh' }}> 
      <div className="mt-5">
            <h1>SkillSync</h1>
            <img 
  src={logo} // inprogressLogo.png
  alt="logo" 
  className="img-fluid rounded-circle"
  style={{ width: '200px', height: '200px' }}
/>
            <h2 className="mt-3">Account Status: In Progress</h2> 
            <p className='mt-1' style={{ color: 'gray', fontSize: '20px' }}>Moderator will review your documents and approve your account.</p>
            <div>
            <button className='btn btn-primary mt-3'>Back To Home</button>
          </div>
          </div>
          
        </div>
      );
};

export default InProgress;