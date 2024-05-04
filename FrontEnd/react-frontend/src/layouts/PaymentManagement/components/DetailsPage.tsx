import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { deleteDetails, getDetails } from '../services/PaymentDetailsFService';

interface Details {
    userName: string;
    fullName: string;
    country: string;
    state: string;
    address: string;
    city: string;
    postalCode: string;
    paypalAddress: string;
}

const DetailsPage: React.FC = () => {
    const [details, setDetails] = useState<Details | null>(null);
    const { userName } = useParams<{ userName: string }>();
    const navigate = useHistory(); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getDetails(userName);
                if (data) {
                    setDetails(data);
                } else {
                    console.error(`No details found for username: ${userName}`);
                }
            } catch (error) {
                console.error('Error fetching details:', error);
            }
        };
        fetchData();
    }, [userName]);

    if (!details) {
        return <div>Loading...</div>;
    }

    const updateDetails = (userName: string) => {
        navigate.push(`/edit-details/${userName}`);
    };

    const removeDetails = async (userName: string) => {
        try {
            await deleteDetails(userName);
            alert('Data deleted successfully.');
            navigate.push('/details');
        } catch (error) {
            console.error('Error deleting details:', error);
        }
    }

    return (
        <div className="container">
            <br /><br />
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h2 className="text-center">Billing Information</h2>
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2">
                                <label htmlFor="id" className="form-label">UserName</label>
                                <input type="text" value={details.userName} readOnly />
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="fullName" className="form-label">Full Name</label>
                                <input type="text" value={details.fullName} readOnly />
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="country" className="form-label">Country</label>
                                <input type="text" value={details.country} readOnly />
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="state" className="form-label">State</label>
                                <input type="text" value={details.state} readOnly />
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="address" className="form-label">Address</label>
                                <input type="text" value={details.address} readOnly />
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="city" className="form-label">City</label>
                                <input type="text" value={details.city} readOnly />
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="postalCode" className="form-label">Postal Code</label>
                                <input type="text" value={details.postalCode} readOnly />
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="paypalAddress" className="form-label">Paypal Address</label>
                                <input type="text" value={details.paypalAddress} readOnly />
                            </div>
                            <button className="btn btn-info" onClick={() => updateDetails(details.userName)}>Edit Details</button>
                            <button className='btn btn-danger' onClick={() => removeDetails(details.userName)}>Delete</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;
