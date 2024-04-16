import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export interface Gig {
  gigId: number;
  gigTitle: string;
  gigDescription: string;
  gigCategory: string;
  gigDateCreated: string;
  freelancerName: string;
  datePosted: string;
  deliveryTime: string;
}

export const FreelanceServices: React.FC = () => {
  const [gigData, setGigData] = useState<Gig[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const gigsPerPage = 8;
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [minPrices, setMinPrices] = useState<{ [key: number]: string }>({});
  const [minTimes, setMinTimes] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    const fetchGigData = async () => {
      try {
        const response = await axios.get<Gig[]>('http://localhost:8082/freelancer-gigs');
        setGigData(response.data);
        // Fetch images for all gigs
        const imagePromises = response.data.map(gig => fetchFirstImage(gig.gigId));
        const imageUrls = await Promise.all(imagePromises);
        setImageUrls(imageUrls);

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

  const fetchFirstImage = async (gigId: number): Promise<string> => {
    try {
      const response = await axios.get<any[]>(`http://localhost:8082/freelancer-gigs/${gigId}/gig-images/my-gig-images`);
      if (response.data.length > 0) {
        // Get the first image URL
        const imageUrl = response.data[0].gigImagePath; // Access gigImagePath property
        console.log('Fetched image URL for gig ID', gigId, ':', imageUrl);
        return imageUrl;
      } else {
        // If no images found for the gig, return a placeholder or empty string
        return ''; // or return a placeholder image URL
      }
    } catch (error) {
      console.error('Error fetching first image:', error);
      return ''; // Return empty string if there's an error
    }
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

  // Function to handle search button click
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Function to handle page navigation
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Calculate total number of pages
  const filteredGigs = gigData.filter(gig =>
    gig.gigTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const totalPages = Math.ceil(filteredGigs.length / gigsPerPage);

  // Calculate index of the last gig to be displayed on the current page
  const indexOfLastGig = currentPage * gigsPerPage;
  // Calculate index of the first gig to be displayed on the current page
  const indexOfFirstGig = indexOfLastGig - gigsPerPage;
  // Get gigs for the current page
  const currentGigs = filteredGigs.slice(indexOfFirstGig, indexOfLastGig);

  return (
    <div>
      <SearchSection onSearch={handleSearch} />
      <section className="containerx" style={{ marginLeft: '50px' }}>
        <div className="row">
          {currentGigs.map((gig: Gig, index: number) => (
            <div key={gig.gigId} className="col-lg-3 col-md-4 col-sm-6 mb-4" style={{ width: '400px', padding: '30px' }}>
              <div className="card shadow">
                <img
                  src={imageUrls[index]}
                  className="card-img-top"
                  alt="Service Image"
                  style={{ maxWidth: '100%', height: '200px' }}
                />
                <div className="card border-0">
                  <div className="card-body d-flex flex-column align-items-center" style={{ lineHeight: '1' }}>
                    <h5 className="card-title" style={{ maxWidth: '100%', height: '55px' }}>{gig.gigTitle}</h5>
                    <p className="card-text fs-6">Price: ${minPrices[gig.gigId]} onwards</p>
                    <p className="card-text fs-6">Time Taken: {minTimes[gig.gigId]}h</p>
                    <p className="card-text fs-6">@{gig.freelancerName}Laxaa</p>
                    <Link to={`/gig/${gig.gigId}`} className="btn btn-primary mt-auto">View Details</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <nav>
          <ul className="pagination justify-content-center">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                <button className="page-link" onClick={() => handlePageChange(page)}>{page}</button>
              </li>
            ))}
          </ul>
        </nav>
        {/* Button to generate and download report */}
        <button className="btn" /* onClick={() => generateReport(gigData)} */>Generate Report</button>
      </section>
    </div>
  );
};

interface Props {
  onSearch: (query: string) => void;
}

export const SearchSection: React.FC<Props> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <section className="containerx" style={{ margin: '30px' }}>
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSearch}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search services..."
                value={searchQuery}
                onChange={handleInputChange}
              />
              <div className="input-group-append">
                <button className="btn btn-primary" type="submit">Search</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
