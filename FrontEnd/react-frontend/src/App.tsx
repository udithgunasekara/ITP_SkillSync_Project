import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EditGig from './layouts/FreelancerWorkManagement/FreelancerDashboard/Components/EditGig';
import FreelancerDashboard from './layouts/FreelancerWorkManagement/FreelancerDashboard/FreelancerDashboard';
import FreelancerHome from './layouts/FreelancerWorkManagement/FreelancerHome/FreelancerHome';
import { CreateGigForm1 } from './layouts/FreelancerWorkManagement/GigManagement/Components/CreateGigForm1';
import CreateGigForm2 from './layouts/FreelancerWorkManagement/GigManagement/Components/CreateGigForm2';
import CreateGigForm3 from './layouts/FreelancerWorkManagement/GigManagement/Components/CreateGigForm3';
import DetailedGigs from './layouts/FreelancerWorkManagement/GigOrder/DetailedGigs';
import { Footer } from './layouts/navbar&footers/Footer';
import { Nav } from 'react-bootstrap';
import { Navbar } from './layouts/navbar&footers/Navbar';

export const App = () => {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route path="/CreateGigForm1" component={CreateGigForm1} />
          <Route path="/CreateGigForm2/:gigId" component={CreateGigForm2} />
          <Route path="/CreateGigForm3/:gigId" component={CreateGigForm3} />
          <Route path="/FreelancerMain" component={FreelancerHome} />
          <Route path="/gig/:id" component={DetailedGigs} />
          <Route path="/FreelancerDashboard" component={FreelancerDashboard} />
          <Route path="/edit/:id" component={EditGig} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
