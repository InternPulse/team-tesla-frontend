import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Invoices from "./pages/Invoices";
import Payments from "./pages/Payments";
import Clients from "./pages/Clients";
import Expenses from "./pages/Expenses";
import Settings from "./pages/Settings";
import CreateInvoice from "./pages/createInvoice";

export default function DashBoard() {
  return (
    <Layout>
      <Routes>
        <Route element={<Home />} path="/*" />
        <Route element={<Invoices />} path="/invoices" />
        <Route element={<Payments />} path="/payments" />
        <Route element={<Clients />} path="/clients" />
        <Route element={<Expenses />} path="/expenses" />
        <Route element={<Settings />} path="/settings" />
        <Route element={<CreateInvoice />} path="/createinvoice" />
      </Routes>
    </Layout>
  );
}
