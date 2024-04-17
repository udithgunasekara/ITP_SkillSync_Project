import { Link, NavLink } from "react-router-dom";


export const SupportNavBar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark main-color' id="supportnavbar">
            <div className="container-fluid">
                <Link className="navbar-brand me-auto" to={"/"} >
                    <div className="backButton">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-left-circle-fill mb-1" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                        </svg>
                        <span> Back To Skillsync</span>
                    </div>
                </Link>

                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/support"}>Help desk</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/raiseticket"}>Rasie new Ticket</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/tickets"}>Your Tickets</NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link " href="#">Services</a>
                        </li> */}
                        
                    </ul>
                </div>

                <div className="offcanvas offcanvas-end text-bg-dark" tabIndex={-1} id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header p-2 bg-dark text-white">
                        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav ">
                            <li className="nav-item p-2">
                                <a className="nav-link active mx-lg-2" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item p-2">
                                <a className="nav-link text-dark mx-lg-2" href="#">About</a>
                            </li>
                            <li className="nav-item p-2">
                                <a className="nav-link text-dark mx-lg-2" href="#">Services</a>
                            </li>
                            <li className="nav-item p-2">
                                <a className="nav-link text-dark mx-lg-2" href="#">Portfolio</a>
                            </li>
                            <li className="nav-item p-2">
                                <a className="nav-link text-dark mx-lg-2" href="#">Contact</a>
                            </li>
                        </ul>

                    </div>
                </div>
                <a href="#" className="login-button">login</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>



        </nav>


    );
}