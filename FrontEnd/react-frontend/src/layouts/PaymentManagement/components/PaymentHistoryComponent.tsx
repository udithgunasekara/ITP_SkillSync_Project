import React, { useEffect, useState, KeyboardEvent, ChangeEvent } from 'react';
import { listPayments } from '../services/PaymentHistoryService';
import { notifyMessage } from '../util/communFunc';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';


interface Payment {
  transactionID: string;
  date: string;
  paymentMethod: string;
  projectID: string;
  amount: number;
}

const PaymentHistoryComponent: React.FC = () => {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [searchTxt, setSearchTxt] = useState<string>('');

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    listPayments()
      .then(response => {
        setPayments(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleKeyDown = async (event: KeyboardEvent<HTMLInputElement>): Promise<void> => {
    if (event.key === 'Enter') {
      console.log(searchTxt);
      if (searchTxt.trim() === '') {
        await getAllData();
      } else {
        await searchHandler();
      }
    }
  };

  const searchHandler = async (): Promise<void> => {
    const apiUrl = `http://localhost:8082/payment/search?projectId=${searchTxt}`;

    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data: Payment[] | {} = await response.json();
        // Check if data is an array and set it, otherwise set an empty array
        if (Array.isArray(data)) {
          setPayments(data);
        } else {
          setPayments([]);
        }
      } else {
        console.error('Failed to fetch data:', response.statusText);
        setPayments([]); // Fallback to an empty array
      }
    } catch (error) {
      console.error('Error occurred:', error);
      notifyMessage('Something went wrong', 0);
      setPayments([]); // Fallback to an empty array
    }
  };

  return (
    <div className='container'>
      <h2 className='text-center'>Transaction History</h2>

      {/* Search */}
      <div>
        <input
          value={searchTxt}
          onKeyDown={handleKeyDown}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (e.target.value.trim() === '') {
              getAllData();
            }
            setSearchTxt(e.target.value);
          }}
          className='mb-3 mt-5'
          placeholder={'Search by Project ID'}
        />
        <button
          className='btn btn-outline-success'
          type='button'
          style={{
            backgroundColor: '#c585f7',
            borderColor: '#c585f7',
            color: 'white',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            transition: 'box-shadow 0.3s ease',
          }}
          onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) =>
            (e.currentTarget.style.boxShadow = '0px 8px 8px rgba(0, 0, 0, 0.2)')
          }
          onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) =>
            (e.currentTarget.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)')
          }>
          Search
        </button>
      </div>

      {/* Download Report Button */}
      <PDFDownloadLink document={<TransactionPDF payments={payments} />} fileName="transaction_history.pdf">
          {({ blob, url, loading, error }) => (
            <button
              className='btn btn-outline-primary mt-2'
              style={{
                backgroundColor: '#007bff',
                borderColor: '#007bff',
                color: 'white',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                transition: 'box-shadow 0.3s ease',
              }}
            >
              {loading ? 'Generating Report...' : 'Download Report'}
            </button>
          )}
        </PDFDownloadLink>

      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Transaction Id</th>
            <th>Date</th>
            <th>Payment Method</th>
            <th>Project Id</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {payments.map(payment => (
            <tr key={payment.transactionID}>
              <td>{payment.transactionID}</td>
              <td>{payment.date}</td>
              <td>{payment.paymentMethod}</td>
              <td>{payment.projectID}</td>
              <td>{payment.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const TransactionPDF: React.FC<{ payments: Payment[] }> = ({ payments }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>Transaction History</Text>
        <View style={styles.table}>
          {/* Table Header */}
          <View style={styles.tableRow}>
            <Text style={styles.tableHeaderCell}>Transaction ID</Text>
            <Text style={styles.tableHeaderCell}>Date</Text>
            <Text style={styles.tableHeaderCell}>Payment Method</Text>
            <Text style={styles.tableHeaderCell}>Project ID</Text>
            <Text style={styles.tableHeaderCell}>Amount</Text>
          </View>
          {/* Table Data */}
          {payments.map(payment => (
            <View key={payment.transactionID} style={styles.tableRow}>
              <Text style={styles.tableCell}>{payment.transactionID}</Text>
              <Text style={styles.tableCell}>{payment.date}</Text>
              <Text style={styles.tableCell}>{payment.paymentMethod}</Text>
              <Text style={styles.tableCell}>{payment.projectID}</Text>
              <Text style={styles.tableCell}>{payment.amount}</Text>
            </View>
          ))}
        </View>
      </View>
      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Skillsync Transaction Monthly Report</Text>
        <Text style={styles.footerText}>Generated on: {new Date().toLocaleDateString()}</Text>
      </View>
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
  },
  table: {
    width: '100%', // Set width to 100% to fill the page
    borderStyle: 'solid',
    borderWidth: 1,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomColor: '#000', // Add border color
    borderBottomWidth: 1, // Add border width
  },
  tableHeaderCell: {
    backgroundColor: '#f2f2f2',
    borderWidth: 1,
    width: '20%', // Set width for each column
    fontWeight: 'bold',
    padding: 5,
  },
  tableCell: {
    borderWidth: 1,
    width: '20%', // Set width for each column
    padding: 5,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
  },
  footerText: {
    fontSize: 12,
    marginBottom: 5,
  },
});

export default PaymentHistoryComponent;
