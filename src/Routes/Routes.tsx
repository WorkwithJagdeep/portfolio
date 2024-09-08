import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, ProjectOverview, Works } from "./Links";
import { Suspense } from "react";

function Routers() {
  return (
    <Router>
      <Routes>
        <Route
          path="/projectoverview/:projectId"
          element={
            <Suspense>
              <ProjectOverview />
            </Suspense>
          }
        />
        <Route
          path="/works"
          element={
            <Suspense>
              <Works />
            </Suspense>
          }
        />
        <Route
          path="/"
          element={
            <Suspense>
              <Home />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default Routers;
