import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import EditGig from './layouts/FreelancerWorkManagement/FreelancerDashboard/Components/EditGig';
import FreelancerDashboard from './layouts/FreelancerWorkManagement/FreelancerDashboard/FreelancerDashboard';
import FreelancerHome from './layouts/FreelancerWorkManagement/FreelancerHome/FreelancerHome';
import { CreateGigForm1 } from './layouts/FreelancerWorkManagement/GigManagement/Components/CreateGigForm1';
import CreateGigForm2 from './layouts/FreelancerWorkManagement/GigManagement/Components/CreateGigForm2';
import CreateGigForm3 from './layouts/FreelancerWorkManagement/GigManagement/Components/CreateGigForm3';
import DetailedGigs from './layouts/FreelancerWorkManagement/GigOrder/DetailedGigs';
import { Footer } from './layouts/navbar&footers/Footer';
import { Navbar } from './layouts/navbar&footers/Navbar';
import { Dashboard } from './layouts/Dashboard/dashboard';
import { DashboardPage } from './layouts/Admin/DashboardPage';
import { EditNoticePage } from './layouts/Admin/EditNoticePage';
import { NewNoticePage } from './layouts/Admin/NewNoticePage';
import { RespondToTicketPage } from './layouts/Admin/RespondToTicketPage';
import { EditNoticeForm } from './layouts/Admin/components/EditNoticeForm';
import { RespondToTicekt } from './layouts/Admin/components/RespondtoticketComponents/RespondToTicekt';
import { Helpdesk } from './layouts/HelpDesk/Helpdesk';
import { NewTicket } from './layouts/HelpDesk/NewTicket';
import { RaisedTicketPage } from './layouts/HelpDesk/RaisedTicketPage';
import { SearchNoticesPage } from './layouts/SearchNotices/SearchNoticesPage';

export const App = () => {
  return (
    <Router>
<<<<<<< HEAD
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
=======

      <div className='d-flex flex-column min-vh-100'>
        <div className='flex-grow-1'>
          <Switch>
            <Route path="/CreateGigForm1">
              <Navbar />
              <CreateGigForm1 />
            </Route>
            <Route path="/CreateGigForm2/:gigId">
              <CreateGigForm2 />
            </Route>
            <Route path="/CreateGigForm3/:gigId">
              <CreateGigForm3 />
            </Route>
            <Route path="/FreelancerMain" exact>
              <FreelancerHome />
            </Route>
            <Route path="/gig/:id">
              <DetailedGigs />
            </Route>
            <Route path="/FreelancerDashboard">
              <FreelancerDashboard />
            </Route>
            <Route path="/edit/:id">
              <EditGig />
            </Route>
            <Route path="/uploadedImages/:gigId" />


            {/* dilshan gmamge(do not change) */}

            <Route path="/" exact>
              <Redirect to='/dashboard' />
            </Route>

            <Route path='/dashboard' exact>
              <Navbar />
              <Dashboard />
            </Route>

            <Route path='/dashboard/search'>
              <Navbar />
              <SearchNoticesPage />
            </Route>

            <Route path='/support' exact>
              <Helpdesk />
            </Route>

            <Route path='/raiseticket' exact>
              <NewTicket />
            </Route>

            <Route path='/tickets'>
              <RaisedTicketPage />
            </Route>

            <Route path='/admin' exact>
              <Navbar />
              <DashboardPage />
            </Route>

            <Route path='/admin/newnotice' exact>
              <Navbar />
              <NewNoticePage />
            </Route>

            <Route path='/admin/editnotice' exact>
              <Navbar />
              <EditNoticePage />
            </Route>

            <Route path='/admin/ticketrespond' exact>
              <Navbar />
              <RespondToTicketPage />
            </Route>

            <Route path='/admin/editnotice/:noticeId' exact>
              <Navbar />
              <EditNoticeForm />
            </Route>

            <Route path='/admin/ticketrespond/:ticketId' exact>
              <Navbar />
              <RespondToTicekt />
            </Route>

            {/* end of dilshan gamage files */}
          </Switch>
        </div>
>>>>>>> 00d4bab3ad94b1ceb99612a9c2b51073a91e7fa3
      </div>
      <Footer />
    </Router>
  );
}

export default App;
