import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

// Define interfaces for gig details and package
interface GigDetails {
  id: number;
  gigTitle: string;
  gigDescription: string;
}

interface Package {
  packageId: number;
  packageName: string;
  packageDescription: string;
  packagePrice: string;
  packageDeliveryTime: string;
}

const EditGig: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  
  // State for gig details and packages
  const [gigDetails, setGigDetails] = useState<GigDetails | null>(null);
  const [packages, setPackages] = useState<Package[]>([]);

  useEffect(() => {
    // Fetch gig details
    const fetchGigDetails = async () => {
      try {
        const response = await axios.get<GigDetails>(`http://localhost:8082/freelancer-gigs/${id}`);
        setGigDetails(response.data);
      } catch (error) {
        console.error('Error fetching gig details:', error);
      }
    };

    // Fetch gig packages
    const fetchGigPackages = async () => {
      try {
        const response = await axios.get<Package[]>(`http://localhost:8082/freelancer-gigs/${id}/gig-packages`);
        setPackages(response.data);
      } catch (error) {
        console.error('Error fetching gig packages:', error);
      }
    };

    fetchGigDetails();
    fetchGigPackages();
  }, [id]);

  // Handle changes to gig details
  const handleGigDetailsChange = (field: keyof GigDetails, value: string) => {
    if (!gigDetails) return;
    setGigDetails(prevState => ({
      ...prevState!,
      [field]: value,
    }));
  };

  // Handle changes to package
  const handlePackageChange = (index: number, field: keyof Package, value: string) => {
    const updatedPackages = [...packages];
    updatedPackages[index] = { ...updatedPackages[index], [field]: value };
    setPackages(updatedPackages);
  };

  // Save changes to gig details and packages
  const handleSave = async () => {
    try {
      // Update gig details
      await axios.put(`http://localhost:8082/freelancer-gigs/${id}`, gigDetails);

      // Update each package individually
      await Promise.all(packages.map(async (pkg) => {
        await axios.put(`http://localhost:8082/freelancer-gigs/${id}/gig-packages/${pkg.packageId}`, pkg);
      }));

      // Navigate back to the dashboard after saving changes
      history.push('/FreelancerDashboard');
    } catch (error) {
      console.error('Error saving gig data:', error);
    }
  };

  // Discard changes and navigate back
  const handleDiscardChanges = () => {
    history.push('/FreelancerDashboard');
  };

  // Render the form for editing gig details and packages
  return (
    <div className="container mt-5">
      {gigDetails && (
        <div className="mb-4">
          <h1>Edit Gig</h1>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={gigDetails.gigTitle}
              onChange={(e) => handleGigDetailsChange('gigTitle', e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description:</label>
            <textarea
              className="form-control"
              id="description"
              value={gigDetails.gigDescription}
              onChange={(e) => handleGigDetailsChange('gigDescription', e.target.value)}
            />
          </div>
        </div>
      )}
      {packages.map((pkg, index) => (
        <div key={pkg.packageId} className="mb-4">
          <h3>Package {index + 1}</h3>
          <div className="mb-3">
            <label className="form-label">Package Name:</label>
            <input
              type="text"
              className="form-control"
              value={pkg.packageName}
              disabled // Disable input field for package name
            />
          </div>
          <div className="mb-3">
            <label htmlFor={`packageDescription-${index}`} className="form-label">Package Description:</label>
            <input
              type="text"
              className="form-control"
              id={`packageDescription-${index}`}
              value={pkg.packageDescription}
              onChange={(e) => handlePackageChange(index, 'packageDescription', e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor={`packagePrice-${index}`} className="form-label">Package Price:</label>
            <input
              type="text"
              className="form-control"
              id={`packagePrice-${index}`}
              value={pkg.packagePrice}
              onChange={(e) => handlePackageChange(index, 'packagePrice', e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor={`packageDeliveryTime-${index}`} className="form-label">Package Delivery Time:</label>
            <input
              type="text"
              className="form-control"
              id={`packageDeliveryTime-${index}`}
              value={pkg.packageDeliveryTime}
              onChange={(e) => handlePackageChange(index, 'packageDeliveryTime', e.target.value)}
            />
          </div>
        </div>
      ))}
      <div className="d-flex justify-content-between">
        <button className="btn btn-secondary" onClick={handleSave}>Apply Changes</button>
        <button className="btn btn-secondary" onClick={handleDiscardChanges}>Discard Changes</button>
      </div>
    </div>
  );
};

export default EditGig;
