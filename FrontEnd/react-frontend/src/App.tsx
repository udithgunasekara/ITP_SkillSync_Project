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
import { UserSpecificTicketResponse } from './layouts/HelpDesk/Components/UserSpecificTicketResponse';
import { UserTicketResponsepage } from './layouts/HelpDesk/UserTicketResponsepage';
import { SupportNavBar } from './layouts/HelpDesk/Components/SupportNavBar';

export const App = () => {
  return (
    <Router>
      <div className='d-flex flex-column min-vh-100'>
        <div className='flex-grow-1'>
          <Switch>
            <Route path="/CreateGigForm1">
              <Navbar />
              <CreateGigForm1 />
              <Footer />
            </Route>
            <Route path="/CreateGigForm2/:gigId">
              <Navbar />
              <CreateGigForm2 />
              <Footer />
            </Route>
            <Route path="/CreateGigForm3/:gigId">
              <Navbar />

              <CreateGigForm3 />
              <Footer />
            </Route>
            <Route path="/FreelancerMain" exact>
              <Navbar />
              <FreelancerHome />
              <Footer />
            </Route>
            <Route path="/gig/:id">
              <Navbar />
              <DetailedGigs />
              <Footer />
            </Route>
            <Route path="/FreelancerDashboard">
              <Navbar />
              <FreelancerDashboard />
              <Footer />
            </Route>
            <Route path="/edit/:id">
              <Navbar />
              <EditGig />
              <Footer />
            </Route>

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

            <Route path='/tickets' exact>
              <RaisedTicketPage />
            </Route>

            <Route path='/tickets/:ticketId' exact>
              <SupportNavBar/>
              <UserTicketResponsepage/>
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
      </div>
    </Router>
  );
}

export default App;
