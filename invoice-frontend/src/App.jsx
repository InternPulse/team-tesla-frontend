import { Route, Routes } from "react-router-dom";
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

export default function App() {
  return (
    <Suspense>
      <Routes>
        <Route element={<LandingPage />} path="/" />
        <Route element={<OnBoarding />} path="/onboarding" />
        <Route
          element={<BusinessRegistration />}
          path="/business-registration"
        />
        <Route element={<UserRegistration />} path="user-registration" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<ForgotPassword />} path="/forgotPassword" />
        <Route element={<Authentication />} path="/auth" />
        <Route element={<Loading />} path="/auth/loading" />
        <Route element={<DashBoard />} path="/dashboard/*" />
        <Route element={<ClientPage />} path="/clientpage" />
      </Routes>
    </Suspense>
  );
}
