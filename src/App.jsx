import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CareersPage from "./pages/CareersPage";
import CareerRolePage from "./pages/CareerRolePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="/careers/:slug" element={<CareerRolePage />} />
    </Routes>
  );
}
