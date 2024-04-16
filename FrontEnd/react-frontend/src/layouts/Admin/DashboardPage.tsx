import { Link } from "react-router-dom";
import { AdminDashboard } from "./components/AdminDashboard";
import { AdminNavbar } from "./components/AdminNavbar";

export const DashboardPage = () => {
    return (
        <div style={{height:"100vh"}}>
            <AdminNavbar/>
            <AdminDashboard/>            
        </div>
    );
}