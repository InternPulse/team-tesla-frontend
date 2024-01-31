import { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Suspense } from "react";
import LandingPage from "./Pages/LandingPage/LandingPage";
import OnBoarding from "./Pages/SignUpPages/OnBoarding";
import BusinessRegistration from "./Pages/SignUpPages/pages/BusinessRegistration";
import UserRegistration from "./Pages/SignUpPages/pages/UserRegistration";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Authentication from "./Pages/SignUpPages/pages/SecureLogin";
import Loading from "./Pages/SignUpPages/pages/Loading";
import DashBoard from "./Pages/Dashboard/Dashboard";
import ForgotPassword from "./Pages/ForgotPasswordPage/ForgotPassword";
import ClientPage from "./Pages/ClientPage/ClientPage";
import { selectUser } from "./features/userSlice";
import NewInvoice from "./Pages/NewInvoice";

export default function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const user = useSelector(selectUser);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile) {
    return (
      <div className="text-center text-xl min-h-screen flex items-center justify-center bg-gray-100">
        <p className="font-Montserrat">
          Please use a laptop or desktop device to access this application.
        </p>
      </div>
    );
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<LandingPage />} path="/" />
        <Route element={<OnBoarding />} path="/onboarding" />
        <Route
          element={<BusinessRegistration />}
          path="/business-registration"
        />
        <Route element={<UserRegistration />} path="/user-registration" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<ForgotPassword />} path="/forgotPassword" />
        <Route element={<Authentication />} path="/auth" />
        <Route element={<Loading />} path="/auth/loading" />
        {/* Protected route for the dashboard */}
        <Route
          element={
            user && user.isAuthenticated ? (
              <DashBoard />
            ) : (
              <Navigate to="/login" />
            )
          } // Redirect to login if not authenticated
          path="/dashboard/*"
        />
        <Route element={<ClientPage />} path="/clientPages" />

        <Route element={<NewInvoice />} path="/create invoice" />

      </Routes>
    </Suspense>
  );
}
