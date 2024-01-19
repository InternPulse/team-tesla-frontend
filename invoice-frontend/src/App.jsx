import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<LandingPage />} path="/" />
      </Routes>
    </>
  );
}
