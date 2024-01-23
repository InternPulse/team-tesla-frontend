import clients from "../../../assets/clients.png";
import dash from "../../../assets/dash.png";
import expenses from "../../../assets/expenses.png";
import invoice from "../../../assets/invoice.png";
import payments from "../../../assets/payments.png";
import settings from "../../../assets/settings.png";

export default [
  { name: "Dashboard", svg: dash, url: "/dashboard" },
  { name: "Invoices", svg: invoice, url: "/dashboard/invoices" },
  { name: "Payments", svg: payments, url: "/dashboard/payments" },
  { name: "Clients", svg: clients, url: "/dashboard/clients" },
  { name: "Expenses", svg: expenses, url: "/dashboard/expenses" },
  { name: "Settings", svg: settings, url: "/dashboard/settings" },
];
