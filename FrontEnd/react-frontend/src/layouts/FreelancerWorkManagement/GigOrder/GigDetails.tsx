import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';
import ImageCarousel from './ImageCarousel';

interface GigDetailsProps {}

interface Gig {
  id: number;
  gigTitle: string;
  gigDescription: string;
  freelancerName: string;
}

const GigDetails: React.FC<GigDetailsProps> = () => {
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

export default GigDetails;
