import { Link } from "react-router-dom";
import Pulse from "/Exclude.png";

export default function SideNav() {
  return (
    <div className="bg-blue-300 min-h-screen">
      <nav>
        <div>
          <img src={Pulse} alt="Invoice Pulse" />
        </div>
        <div className="flex flex-col">
          <Link to="/dashboard">Home</Link>
          <Link to="/dashboard/invoices">Invoices</Link>
          <Link to="/dashboard/payments">Payments</Link>
          <Link to="/dashboard/clients">Clients</Link>
          <Link to="/dashboard/expenses">Expenses</Link>
          <Link to="/dashboard/settings">Settings</Link>
        </div>
      </nav>
    </div>
  );
}
