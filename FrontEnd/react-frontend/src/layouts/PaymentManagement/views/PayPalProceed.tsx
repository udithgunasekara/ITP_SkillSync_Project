import React, { useState } from 'react';
import { makePayment } from '../services/PaymentHistoryService';
import { useHistory, useLocation } from 'react-router-dom';

interface LocationState {
  amount: number;
  // Add other properties if needed
}

const PayPalProceed = () => {
  const navigate = useHistory();
  const location = useLocation();
  const propsData = location.state as LocationState; // Type assertion to specify the type of location.state

  const amount = propsData?.amount ?? 0; // Provide a default value if propsData is undefined

  const paymentProceedHandler = () => {
    // Open PayPal gateway website in a new window/tab
    window.open('https://www.paypal.com', '_blank');
  };

  return (
    <div className="main-section">
      <div className='row'>
        <h2 className='text-center mt-5'>Pay with PayPal</h2>
        <div className='card col-md-6 mt-5 px-5 pt-3 offset-md-3 offset-md-3'>
          <h6 className="">PayPal</h6>
          <div className='card-body my-4 mx-5'>
            <h6>Amount</h6>
            <input value={amount} disabled={true} className="w-100 mb-4"/>
            <h6>Currency</h6>
            <input value={"USD"} disabled={true} className="w-100 " placeholder=""/>
          </div>
        </div>
        <div className="col-md-6 mt-5 offset-md-3 offset-md-3 d-flex justify-content-end">
          <button onClick={() => {navigate.goBack()}}  className="bg-red main-btn mx-5">Back</button>
          <button onClick={paymentProceedHandler} className="bg-blue main-btn">Pay with PayPal</button>
        </div>
      </div>
    </div>
  );
};

export default PayPalProceed;
