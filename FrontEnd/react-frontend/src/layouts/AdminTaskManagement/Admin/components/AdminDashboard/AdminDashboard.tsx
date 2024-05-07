import { Line } from './charComponents/Line';
import { BarChart } from './charComponents/BarChart';
import { Pie } from './charComponents/Pie';
export const AdminDashboard = () => {
    return (
        <div className="below-navbar-admin " style={{ width: "100vw" }}>
            <div className="row justify-content-md-center pt-5" style={{ width: "75%", marginLeft: "auto", marginRight: "auto" }}>
                <div className="col align-items-center d-flex justify-content-center " style={{ textAlign: "center" }}>
                    <div className="card text-dark bg-light mb-3 mx-auto " style={{ minWidth: "20rem", maxWidth: "fit-content" }}>
                        <div className="card-body">
                            <h1 className="card-title">$2575786.12</h1>
                        </div>
                        <div className="card-header">Transfered through this week</div>
                    </div>
                </div>

                <div className="col align-items-center d-flex justify-content-center " style={{ textAlign: "center" }}>
                    <div className="card text-dark bg-light mb-3 mx-auto" style={{ minWidth: "20rem", maxWidth: "fit-content" }}>
                        <div className="card-body">
                            <h1 className="card-title">3895.63</h1>
                        </div>
                        <div className="card-header">Total income this week</div>
                    </div>
                </div>
            </div>

            <div className="row justify-content-around pt-5">
                <div className="row align-items-center d-flex justify-content-center" style={{ textAlign: "center" }}>
                    <div className="card text-dark bg-light mb-3 mx-auto" style={{ width: "60%", height: "fit-content",background:"red"}}>
                        <div style={{ position: "absolute", top: "0", right: "0", padding: "5px" }}>
                            <button className='btn btn-primary'>d</button>
                        </div>
                        <div className="card-body" style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Line />
                        </div>

                    </div>
                </div>

                <div className="row align-items-center d-flex justify-content-center" style={{ textAlign: "center" }}>
                    <div className="card text-dark bg-light mb-3 mx-auto" style={{ width: "60%" }}>
                        <div style={{ position: "absolute", top: "0", right: "0", padding: "5px" }}>
                            <button className='btn btn-primary'>d</button>
                        </div>
                        <div className="card-body" style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <BarChart />
                        </div>
                    </div>
                </div>

                <div className="row align-items-center d-flex justify-content-center" style={{ textAlign: "center" }}>
                    <div className="card text-dark bg-light mb-3 mx-auto" style={{ width: "60%" }}>
                        <div style={{ position: "absolute", top: "0", right: "0", padding: "5px" }}>
                            <button className='btn btn-primary'>d</button>
                        </div>
                        <div className="card-body" style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <BarChart />
                        </div>
                    </div>
                </div>
            </div>

            <div className="row"></div>
            <div className="row"></div>
        </div>
    );
}