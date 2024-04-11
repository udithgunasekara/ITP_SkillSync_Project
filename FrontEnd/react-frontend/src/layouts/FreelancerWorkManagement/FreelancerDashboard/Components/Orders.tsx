import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

interface Order {
  orderId: number;
  orderGigId: number;
  orderDateTime: string;
  packageName: string;
  cusName: string;
  cusRemarks: string;
  gigId: number;
  orderStatus?: string; // Make orderStatus optional
}

const Orders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const history = useHistory();

  const fetchOrders = async () => {
    try {
      const response = await axios.get<Order[]>('http://localhost:8082/orders');
      const ordersWithDefaultStatus = response.data.map(order => ({
        ...order,
        orderStatus: order.orderStatus || 'pending', // Set default status to 'pending' if it is undefined
      }));
      setOrders(ordersWithDefaultStatus);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  useEffect(() => {
    fetchOrders(); 
  }, []); 

  const updateOrderStatus = async (orderId: number, newStatus: string) => {
    try {
      await axios.put(`http://localhost:8082/orders/${orderId}/status?newStatus=${newStatus}`);
      fetchOrders();
    } catch (error) {
      console.error('Error updating order status:', error);
    }
  };

  const handleDeliverButtonClick = () => {
    history.push(`/FreelancerMain`);
  };

  return (
    <div className="container" style={{marginTop: '40px'}}>
      <h1 className="mb-4">Orders</h1>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>#Order</th>
            <th>Package Name</th>
            <th>Customer Remarks</th>
            <th>Date & Time of Order Placement</th>
            <th>Customer Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td><Link to={`/gig/${order.orderGigId}`}>{order.orderId}</Link></td>
              <td>{order.packageName}</td>
              <td>{order.cusRemarks}</td>
              <td>{order.orderDateTime}</td>
              <td>{order.cusName}</td>
              <td>{order.orderStatus}</td>
              <td>
                <div className="d-flex">
                  <select className="form-select me-2" onChange={(e) => updateOrderStatus(order.orderId, e.target.value)} value={order.orderStatus}>
                    <option value="pending">Pending</option>
                    <option value="accepted">Accepted</option>
                    <option value="completed">Completed</option>
                  </select>
                  {order.orderStatus === 'completed' && (
                    <Button variant="primary" onClick={() => handleDeliverButtonClick()}>
                      Deliver Product
                    </Button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Orders;
