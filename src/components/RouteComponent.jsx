import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Results } from "./Results";

export const RouteComponent = () => {
  const shouldRedirect = true;
  return (
    <div className="p-4">
      <Routes>
        <Route
          path="/"
          element={shouldRedirect && <Navigate replace to="/search" />}
        />
        <Route path="/search" element={<Results />} />
        <Route path="/image" element={<Results />} />
        <Route path="/news" element={<Results />} />
        <Route path="/video" element={<Results />} />
      </Routes>
    </div>
  );
};

/* The code below does the exact same thing as the route above. You're basically trying to reduce the lines of code you 
write should happen to have many paths to write. That way your code is clean. In this case 4 is still manageable. */

/* <Routes>
  {["/search", "/image", "/news", "/video"].map(path => (
    <Route 
      path={path}
      element={<Results />}
    />
  ))}
</Routes> */
