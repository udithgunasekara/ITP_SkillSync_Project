// import axios from "axios";

// const REST_API_BASE_URL = 'http://localhost:8082/payment';

// export const listPayments = () => axios.get(REST_API_BASE_URL);

// export const makePayment = (payment) => axios.post(REST_API_BASE_URL, payment);

import axios from "axios";

// Define the interface for the payment object
interface Payment {
  // Define the properties of the payment object
}

const REST_API_BASE_URL = 'http://localhost:8082/payment';

export const listPayments = () => axios.get(REST_API_BASE_URL);

// Explicitly specify the type of the payment parameter as Payment
export const makePayment = (payment: Payment) => axios.post(REST_API_BASE_URL, payment);
