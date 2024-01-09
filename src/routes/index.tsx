import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { MainPage } from "../pages/MainPage";
import { NotFoundPage } from "../pages/404Page";

export function RoutesApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
