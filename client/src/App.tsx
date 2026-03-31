import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FormsPage from "./pages/FormsPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/forms" element={<FormsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

