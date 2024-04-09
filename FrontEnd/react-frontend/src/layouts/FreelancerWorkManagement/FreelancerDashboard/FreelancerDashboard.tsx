import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Button, Card, Carousel, Container, Row, Col, Modal, Alert } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import Orders from "./Components/Orders";

export interface Gig {
  gigId: number;
  gigTitle: string;
  gigDescription: string;
}

const FreelancerDashboard: React.FC = () => {

  const [gigData, setGigData] = useState<Gig[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [showConfirmationModal, setShowConfirmationModal] = useState<boolean>(false);
  const [selectedGigId, setSelectedGigId] = useState<number | null>(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState<boolean>(false);
  const [minPrices, setMinPrices] = useState<{ [key: number]: string }>({});
  const [minTimes, setMinTimes] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    const fetchGigData = async () => {
      try {
        const response = await axios.get<Gig[]>('http://localhost:8082/freelancer-gigs');
        const gigsWithIds = response.data.map((gig, index) => ({ ...gig, id: index + 1 }));
        setGigData(gigsWithIds);
        const minPricePromises = response.data.map(gig => fetchMinPrice(gig.gigId));
        const minPrices = await Promise.all(minPricePromises);
        const minPriceObject = Object.fromEntries(minPrices.map((price, index) => [response.data[index].gigId, price]));
        setMinPrices(minPriceObject);

        const minTimePromises = response.data.map(gig => fetchMinTime(gig.gigId));
        const minTimes = await Promise.all(minTimePromises);
        const minTimeObject = Object.fromEntries(minTimes.map((time, index) => [response.data[index].gigId, time]));
        setMinTimes(minTimeObject);
      } catch (error) {
        console.error('Error fetching gig data:', error);
      }
    };

    fetchGigData();
  }, []);

  const history = useHistory();

  const handleEdit = (id: number) => {
    console.log('Edit gig with ID:', id);
    history.push(`/edit/${id}`);
  };

  const handleDelete = (id: number) => {
    setSelectedGigId(id);
    setShowConfirmationModal(true);
  };

  const fetchMinPrice = async (gigId: number): Promise<string> => {
    try {
      const response = await axios.get<string>(`http://localhost:8082/freelancer-gigs/${gigId}/gig-packages/min-price`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching minimum price for gig ${gigId}:`, error);
      return ''; // Return empty string if there's an error
    }
  };

  const fetchMinTime = async (gigId: number): Promise<string> => {
    try {
      const response = await axios.get<string>(`http://localhost:8082/freelancer-gigs/${gigId}/gig-packages/min-time`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching minimum time for gig ${gigId}:`, error);
      return ''; // Return empty string if there's an error
    }
  }

  const confirmDelete = async () => {
    if (selectedGigId !== null) {
      try {
        await axios.delete(`http://localhost:8082/freelancer-gigs/${selectedGigId}/gig-packages/del`);
        await axios.delete(`http://localhost:8082/freelancer-gigs/${selectedGigId}`);
        setGigData(gigData.filter(gig => gig.gigId !== selectedGigId));
        setSelectedGigId(null);
        setShowConfirmationModal(false);
        setShowSuccessAlert(true);
        setTimeout(() => setShowSuccessAlert(false), 3000); // Hide alert after 3 seconds
      } catch (error) {
        console.error('Error deleting gig:', error);
      }
    }
  };
  

  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  };

  const gigChunks: Gig[][] = gigData.reduce((acc: Gig[][], curr: Gig, index: number) => {
    const chunkIndex = Math.floor(index / 4);
    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }
    acc[chunkIndex].push(curr);
    return acc;
  }, []);

  return (
    <Container fluid className="py-5">
      <h1 className="text-center mb-4">Freelancer Dashboard</h1>
      <h2 className="text-center mb-5">Active Gigs</h2>
      <Carousel activeIndex={index} onSelect={handleSelect} indicators={false} interval={null}>
        {gigChunks.map((chunk, chunkIndex) => (
          <Carousel.Item key={chunkIndex}>
            <Row className="justify-content-center">
              {chunk.map((gig, gigIndex) => (
                <Col key={gigIndex} xs={12} md={6} lg={3}>
                  <Card className="h-100 shadow">
                    <Card.Img variant="top" src={`/Images/wallpaper${gig.gigId}.jpg`} style={{ height: '200px', objectFit: 'cover' }} />
                    <Card.Body>
                      <Card.Title className="mb-3">{gig.gigTitle}</Card.Title>
                      <Card.Text><strong>Price:</strong> ${minPrices[gig.gigId]}</Card.Text>
                      <Card.Text><strong>Time Taken:</strong> ${minTimes[gig.gigId]} onwards</Card.Text>
                      <Card.Text><strong>Freelancer:</strong> @FreelancerName</Card.Text>
                      <div className="d-grid gap-2">
                        <Button variant="primary" onClick={() => handleEdit(gig.gigId)}>Edit</Button>
                        <Button variant="danger" onClick={() => handleDelete(gig.gigId)}>Delete</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="d-flex justify-content-center mt-3">
        {index > 0 && (
          <Button variant="light" onClick={() => setIndex(index - 1)}>
            <FaChevronLeft size={36} />
          </Button>
        )}
        {index < gigChunks.length - 1 && (
          <Button variant="light" onClick={() => setIndex(index + 1)}>
            <FaChevronRight size={36} />
          </Button>
        )}
      </div>
      <Modal show={showConfirmationModal} onHide={() => setShowConfirmationModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this gig?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirmationModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <Alert variant="success" show={showSuccessAlert} onClose={() => setShowSuccessAlert(false)} dismissible>
        Gig deleted successfully!
      </Alert>
      <Orders />
    </Container>
  );
};

export default FreelancerDashboard;
