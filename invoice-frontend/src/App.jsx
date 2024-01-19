import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import OnBoarding from "./components/SignUpPages/OnBoarding";
import BusinessRegistration from "./components/SignUpPages/pages/BusinessRegistration";
import UserRegistration from "./components/SignUpPages/pages/UserRegistration";
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
      </Routes>
    </>
  );
}
