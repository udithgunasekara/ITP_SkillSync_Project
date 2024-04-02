import "./navbar.css";
export const Navbar = () => {

    return (
        <nav className='navbar navbar-expand-lg navbar-dark main-color'>
            <div className='container-fluid'>
                {/* <span className='navbar-brand'><h4>Project</h4></span> */}

                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown'
                    aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div className='collapse navbar-collapse justify-content-between' id='navbarNavDropdown'>
                    <ul className='navbar-nav'>
                        <li className='nav-item ' id="dash" >
                            <a className='nav-link active'  href='#'>Dashboard</a>
                        </li>
                        <li className='nav-item' id="jobs">
                            <a className='nav-link' href='#'>Jobs</a>
                        </li>
                        <li className='nav-item' id="gigs">
                            <a className='nav-link' href='#'> Gigs</a>
                        </li>
                        <li className='nav-item' id="cources">
                            <a className='nav-link' href='#'> Cources</a>
                        </li>
                        <li className='nav-item' id="admin">
                            <a className='nav-link' href='#'> Admin</a>
                        </li>
                    </ul>
                    <ul className='navbar-nav ms-auto'>
                        <a className="navbar-brand" href="#">
                            <img src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
                             width="30" 
                             height="30" />
                            
                        </a>
                    </ul>
                </div>
            </div>

        </nav>
    )
}