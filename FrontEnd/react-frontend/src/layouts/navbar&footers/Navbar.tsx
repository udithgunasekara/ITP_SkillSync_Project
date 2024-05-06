import { Link, NavLink, useHistory} from "react-router-dom";

export const Navbar = () => {
    const history = useHistory();

    const handleLogout = () => {
        // Clear the authentication token from local storage
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('id');
        sessionStorage.removeItem('role');
        sessionStorage.removeItem('email');
    
        history.push('/FreelancerMain');
      };


    return (
        <nav className='navbar navbar-top navbar-expand-lg navbar-dark main-color fixed-top' >
            <div className='container-fluid'>
                {/* <span className='navbar-brand'><h4>Project</h4></span> */}

                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown'
                    aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div className='collapse navbar-collapse justify-content-between' id='navbarNavDropdown'>
                    <ul className='navbar-nav'>
                        <li className='nav-item ' id="dash" >
                            <NavLink className='nav-link' to={'/dashboard'}>Dashboard</NavLink>
                        </li>
                        <li className='nav-item' id="jobs">
                            {/* <NavLink className='nav-link' to={'#'}>Jobs</NavLink> */}
                            
                        </li>
                        <li className='nav-item' id="gigs">
                            <NavLink className='nav-link' to={'/FreelancerMain'}> Gigs</NavLink>
                        </li>
                        <li className='nav-item' id="cources">
                            <a className='nav-link' href='#'> Courses</a>
                        </li>
                        <li className='nav-item' id="admin">
                            <NavLink className='nav-link' to={'/admin'}>Admin</NavLink>
                        </li>

                    </ul>
                    <ul className='navbar-nav ms-auto'>
                        <li className="nav-item dropdown ">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
                                    width="30"
                                    height="30"
                                    alt="User Profile" />
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown" >
                                <li><a className="dropdown-item " href="#">Profile</a></li>
                                <li><NavLink className="dropdown-item" activeClassName="active-toggle" to={'/details'}>Billing and Information</NavLink></li>
                                <li><NavLink className="dropdown-item" activeClassName="active-toggle" to={'/payment'}>Transaction History</NavLink></li>
                                <li><NavLink className="dropdown-item" activeClassName="active-toggle" to={'/support'}>Help Desk</NavLink></li>
                                <li><NavLink className="dropdown-item" activeClassName="active-toggle" to={'/support'} onClick={handleLogout}>LogOut</NavLink></li>
                               {/* Add more dropdown items here if needed */}
                            </ul>
                        </li>


                    </ul>
                </div>
            </div>

        </nav>
    )
}