import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import { Row, Col, Card, Button } from 'react-bootstrap';
import ImageCarousel from './ImageCarousel';
import UploadedImages from './UploadedImages';

interface Gig {
  id: number;
  gigTitle: string;
  gigDescription: string;
  freelancerName: string;
}

interface Package {
  packageId: number;
  packageName: string;
  packageDescription: string;
  packagePrice: string;
  packageDeliveryTime: string;
}

export const UserRemarksForm: React.FC = () => {
  const [remarks, setRemarks] = useState<string>('');
  const [selectedPackage, setSelectedPackage] = useState<{ packageId: number; packageName: string } | null>(null); // Update type
  const [selectedPackageName, setSelectedPackageName] = useState<string>('');
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const handleRemarksChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setRemarks(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedPackage) {
      window.alert('Please select a package');
      return;
    }
    if (remarks === '') {
      window.alert('Please enter your remarks');
      return;
    }
    try {
      await axios.post('http://localhost:8082/orders', {
        orderGigId: Number(id),
        packageId: selectedPackage?.packageId,
        packageName: selectedPackageName,
        cusRemarks: remarks
      });
      console.log('Order placed successfully');
      window.alert('Order placed successfully');
      history.push('/FreelancerMain');
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  return (
    <Card className="mb-3 shadow">
      <Card.Body>
        <div className='h1 text-center p-3'>Select a Package</div>
        <PackageSelection setSelectedPackage={(packageId, packageName) => {
          setSelectedPackage({ packageId, packageName }); // Update to pass the object
          setSelectedPackageName(packageName);
        }} />
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="remarks" className="form-label">Customer Remarks:</label>
            <textarea
              className="form-control"
              id="remarks"
              name="remarks"
              rows={5}
              placeholder="Enter your remarks here"
              value={remarks}
              onChange={handleRemarksChange}
            />
          </div>
          <div className="text-center">
            <Button type="submit" variant="primary">Make Order</Button>
          </div>
        </form>
      </Card.Body>
    </Card>
  );
};

export const GigDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [gig, setGig] = useState<Gig | null>(null);

  useEffect(() => {
    const fetchGigDetail = async () => {
      try {
        const response = await axios.get<Gig>(`http://localhost:8082/freelancer-gigs/${id}`);
        setGig(response.data);
      } catch (error) {
        console.error('Error fetching gig detail:', error);
      }
    };

    fetchGigDetail();
  }, [id]);

  if (!gig) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Row className="mb-5">
        <Col xs={12} md={6} className="align-self-start">
          <div className="p-4">
            <h1 className="mb-3 display-3"style={{ wordWrap: 'break-word' }}>{gig.gigTitle}</h1>
            <h5 className="text-muted">@{gig.freelancerName} Freelancer Name</h5>
            <div className="border p-4 mt-4" style={{ wordWrap: 'break-word' }}>
              <h2 className="text-center mb-4">Description</h2>
              <p>{gig.gigDescription}</p>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} className="text-center">
          <div className='my-carousel' style={{ maxWidth: '650px', marginLeft: '100px' }}>
            <ImageCarousel />
          </div>
        </Col>
      </Row>
    </div>
  );
};

const PackageSelection: React.FC<{ setSelectedPackage: (packageId: number, packageName: string) => void }> = ({ setSelectedPackage }) => {
  const { id } = useParams<{ id: string }>();
  const [packages, setPackages] = useState<Package[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Package[]>(`http://localhost:8082/freelancer-gigs/${id}/gig-packages`);
        setPackages(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  const handlePackageSelect = (packageId: number, packageName: string) => {
    setSelectedPackage(packageId, packageName);
  };

  return (
    <div className="card-container d-flex flex-wrap justify-content-center">
      {packages.map((pack: Package) => (
        <div key={pack.packageId} className='card shadow mx-2 mb-4 bg-body rounded' style={{ width: '300px', height: '350px' }}>
          <div className='card-body d-flex flex-column justify-content-between'>
            <div>
              <h2 className='card-title' style={{ textAlign: 'center', color: 'red', paddingBottom: '10px' }}>{pack.packageName}</h2>
              <p className='card-text'>Price: ${pack.packagePrice}</p>
              <p className='card-text'>Description: {pack.packageDescription}</p>
              <p className='card-text'>Delivery Time: {pack.packageDeliveryTime} hours</p>
            </div>
            <div className="d-flex justify-content-center">
              <input className="form-check-input me-1" type="radio" name="package" id={`package${pack.packageId}`} value={pack.packageId} onChange={() => handlePackageSelect(pack.packageId, pack.packageName)} />
              <label className="form-check-label" htmlFor={`package${pack.packageId}`}>Select</label>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const DetailedGigs: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [gigId, setGigId] = useState<number | null>(null); // State variable to hold gigId

  useEffect(() => {
    const fetchGigDetail = async () => {
      try {
        const response = await axios.get<Gig>(`http://localhost:8082/freelancer-gigs/${id}`);
        setGigId(response.data.id); // Set the gigId
      } catch (error) {
        console.error('Error fetching gig detail:', error);
      }
    };

    fetchGigDetail();
  }, [id]);

  return (
    <div className="p-5">
      <GigDetails />
      <UserRemarksForm />
    </div>
  );
};

export default DetailedGigs;
