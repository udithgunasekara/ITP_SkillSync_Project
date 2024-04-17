export const AdminDashboard = () => {
    return (
        <div className="below-navbar-admin " style={{ width: "100vw" }}>
            <div className="row justify-content-md-center pt-5">
                <div className="col col-lg-2 align-items-center d-flex justify-content-center " style={{  textAlign: "center" }}>
                    <div className="card text-dark bg-light mb-3 mx-auto " style={{ maxWidth: "25rem" }}>
                        <div className="card-body">
                            <h1 className="card-title">$25786.12</h1>
                        </div>
                        <div className="card-header">Transfered through this week</div>
                    </div>
                </div>

                <div className="col col-lg-2 align-items-center d-flex justify-content-center " style={{  textAlign: "center" }}>
                    <div className="card text-dark bg-light mb-3 mx-auto" style={{ maxWidth: "25rem" }}>                        
                        <div className="card-body">
                            <h1 className="card-title">3895.63</h1>
                        </div>
                        <div className="card-header">Total income this week</div>
                    </div>
                </div>
            </div>

            <div className="row justify-content-md-center pt-5">
            <div className="col col-lg-2 align-items-center d-flex justify-content-center" style={{  textAlign: "center" }}>
                    <div className="card text-dark bg-light mb-3 mx-auto " style={{ maxWidth: "25rem" }}>
                        <div className="card-header">Freelancers joined within this week</div>
                        <div className="card-body">
                            <h5 className="card-title">Light card title</h5>
                            <p className="card-text">Some quick example </p>
                        </div>
                    </div>
                </div>


                <div className="col col-lg-2 align-items-center d-flex justify-content-center " style={{  textAlign: "center" }}>
                    <div className="card text-dark bg-light mb-3 mx-auto" style={{ maxWidth: "25rem" }}>
                        <div className="card-header">Total jobs posted within this week</div>
                        <div className="card-body">
                            <h5 className="card-title">Light card title</h5>
                            <p className="card-text">Some quick example </p>
                        </div>
                    </div>
                </div>

                <div className="col col-lg-2 align-items-center d-flex justify-content-center" style={{  textAlign: "center" }}>
                    <div className="card text-dark bg-light mb-3 mx-auto " style={{ maxWidth: "25rem" }}>
                        <div className="card-header">Freelancers joined within this week</div>
                        <div className="card-body">
                            <h5 className="card-title">Light card title</h5>
                            <p className="card-text">Some quick example </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="row"></div>
            <div className="row"></div>
        </div>
    );
}