import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import OnBoarding from "./Pages/SignUpPages/OnBoarding";
import BusinessRegistration from "./Pages/SignUpPages/pages/BusinessRegistration";
import UserRegistration from "./Pages/SignUpPages/pages/UserRegistration";
import LoginPage from "./Pages/LoginPage/LoginPage";
export default function App() {
  return (
    <>
      <Routes>
        <Route element={<LandingPage />} path="/" />
        <Route element={<OnBoarding />} path="/onboarding" />
        <Route
          element={<BusinessRegistration />}
          path="/business-registration"
        />
        <Route element={<UserRegistration />} path="user-registration" />
        <Route element={<LoginPage />} path="/login" />
      </Routes>
    </>
  );
}
