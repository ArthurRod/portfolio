import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { LandingPage } from "../pages/LandingPage";

export function RoutesApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}