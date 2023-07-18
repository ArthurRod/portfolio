import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { MainPage } from "../pages/MainPage";

export function RoutesApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}
