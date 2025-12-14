import { Route, Routes, Navigate, useLocation } from "react-router";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";

import LandingPage from "./pages/landing/LandingPage";
import HomePage from "./pages/app/HomePage";
import CreatePage from "./pages/app/CreatePage";
import NoteDetailPage from "./pages/app/NoteDetailPage";

// Debug component to log route changes
const RouteLogger = () => {
  const location = useLocation();
  
  useEffect(() => {
    console.log("Route changed to:", location.pathname);
  }, [location]);

  return null;
};

const App = () => {
  return (
    <div className="min-h-screen">
      {/* Apply the same background to entire app */}
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" />
      
      <RouteLogger /> {/* Add route logging */}
      
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />
        
        {/* App Routes - all under /app */}
        <Route path="/app" element={<HomePage />} />
        <Route path="/app/create" element={<CreatePage />} />
        <Route path="/app/note/:id" element={<NoteDetailPage />} />
        
        {/* Redirects */}
        <Route path="/home" element={<Navigate to="/app" replace />} />
        <Route path="/note/:id" element={<Navigate to="/app/note/:id" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      
      <Toaster />
    </div>
  );
};

export default App;