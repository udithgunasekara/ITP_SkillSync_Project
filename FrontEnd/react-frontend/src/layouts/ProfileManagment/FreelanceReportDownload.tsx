import React from 'react';
import { MDBIcon } from 'mdb-react-ui-kit';
import './FreelancerReprt.css'

const FreelancerGigs: React.FC = () => {

  const downloadCsv = async () => {
    try {
      const response = await fetch('http://localhost:8082/freelancer-gigs/username/vinujahansindu/csv');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'freelancer_gigs.csv');
      document.body.appendChild(link);
      link.click();
      link.parentNode?.removeChild(link);
    } catch (error) {
      console.error('Error downloading CSV:', error);
    }
  };

  return (
    <div>
      <button onClick={downloadCsv} className='report-download'><MDBIcon fas icon="file-download" size='lg'/></button>
    </div>
  );
};

export default FreelancerGigs;
