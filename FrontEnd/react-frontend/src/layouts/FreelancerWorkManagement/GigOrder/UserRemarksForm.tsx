import React, { ChangeEvent, useState } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import PackageSelection from './PackageSelection';

interface UserRemarksFormProps {}

const UserRemarksForm: React.FC<UserRemarksFormProps> = () => {
  const [remarks, setRemarks] = useState<string>('');
  const [selectedPackage, setSelectedPackage] = useState<{ packageId: number; packageName: string } | null>(null);
  const [selectedPackageName, setSelectedPackageName] = useState<string>('');
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

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
      const cusName = 'John Doe'; // Get the customer name from wherever it's available in your frontend
      await axios.post('http://localhost:8082/orders', {
        orderGigId: Number(id),
        packageId: selectedPackage?.packageId,
        packageName: selectedPackageName,
        cusRemarks: remarks,
        cusName: cusName, // Include the customer name in the request payload
      });
      console.log('Order placed successfully');
      window.alert('Order placed successfully');
      history.push('/FreelancerMain');
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };   
    
    function handleRemarksChange(event: ChangeEvent<HTMLTextAreaElement>): void {
        throw new Error('Function not implemented.');
    }

  return (
    <Card className="mb-3 shadow">
      <Card.Body>
        <div className='h1 text-center p-3'>Select a Package</div>
        <PackageSelection setSelectedPackage={(pkg: { packageId: number; packageName: string }) => {
          setSelectedPackage(pkg);
          setSelectedPackageName(pkg.packageName);
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

export default UserRemarksForm;
