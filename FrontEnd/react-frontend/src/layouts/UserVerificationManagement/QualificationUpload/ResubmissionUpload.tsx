// src/components/ResubmissionUpload.tsx
import React, { useState, useEffect, ChangeEvent } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getRejectedQualifications, reUploadQualification } from '../Services/UserManagementService';

interface QualificationsMap {
  [title: string]: string[]; // Mapping from a title to an array of base64 encoded image strings
}

const ResubmissionUpload: React.FC = () => {
  const { username } = useParams<{ username: string }>();
 // const [qualifications, setQualifications] = useState<QualificationsMap>({});
  const [qualifications, setQualifications] = useState<string[]>([]);


  useEffect(() => {
    const fetchRejectedQualifications = async () => {
      try {
        const response = await getRejectedQualifications(username);
        setQualifications(response.data);
      } catch (error) {
        console.error('Failed to fetch qualifications', error);
        alert('Failed to fetch qualifications');
      }
    };

    if (username) {
      fetchRejectedQualifications();
    }
  }, [username]);

  const handleFileSelect = async (event: ChangeEvent<HTMLInputElement>, title: string) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const formData = new FormData();
      Array.from(files).forEach(file => {
        formData.append('image', file);
      });

      try {
        await reUploadQualification(username, title, formData);
        alert('Files uploaded successfully!');
        window.location.reload();
      } catch (error) {
        console.error('Error uploading files', error);
        alert('Error uploading files');
      }
    }
  };

  return (
    <div className="container mt-4 bg-light shadow p-3 mb-5 rounded" style={{ backgroundColor: '#f8f9fa' }}>
    <h1 className="mb-4 text-center" style={{ color: '#AC69E2' }}>Resubmit Rejected Qualifications</h1>
    
      {Object.entries(qualifications).length > 0 ? (
        Object.entries(qualifications).map(([title, images]) => (
          <div key={title} className="mb-4 p-3 border-bottom">
            <h2 className="mb-2">{title}</h2>
            <p className="text-danger">You need to upload only ({images.length}) images</p>
            <div className="d-flex flex-wrap">
              {Array.isArray(images) && images.map((image:any, index:any) => (
                <img
                  key={index}
                  src={`data:image/jpeg;base64,${image}`}
                  alt={title}
                  className="img-thumbnail mr-2 mb-2"
                  style={{ width: '300px', height: 'auto' }}
                />
              ))}
            </div>
            <div className="mt-3">
              <label htmlFor="file-upload" className="btn btn-primary">
                Upload New Images
              </label>
              <input
                id="file-upload"
                type="file"
                multiple
                onChange={(e) => handleFileSelect(e, title)}
                style={{ display: 'none' }}
              />
            </div>
          </div>
        ))
      ) : (
        <p className="text-center">No rejected qualifications to display.</p>
      )}
    </div>
  );
};

export default ResubmissionUpload;
