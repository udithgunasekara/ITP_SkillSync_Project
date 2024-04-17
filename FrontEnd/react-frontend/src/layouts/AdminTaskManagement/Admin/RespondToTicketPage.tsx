import { AdminDashboard } from "./components/AdminDashboard";
import { AdminNavbar } from "./components/AdminNavbar";
import { AdminSideBar } from "./components/AdminSideBar";
import { VIewTiceketPage } from "./components/RespondtoticketComponents/VIewTiceketPage";

export const RespondToTicketPage = () => {
    return (
        <div >
            <AdminNavbar />
            <VIewTiceketPage />
        </div>
    );
}