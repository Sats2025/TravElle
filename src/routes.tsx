import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignupLogin from './pages/SignupLogin';
import Dashboard from './pages/Dashboard';
import TravelStories from './pages/TravelStories';
import VerifiedStays from './pages/VerifiedStays';
import Settings from './pages/Settings';
import ProtectedRoute from "./components/ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      {/* Public routes */}
      <Route path="/signup" element={<SignupLogin />} />
      <Route path="/login" element={<SignupLogin />} />

      {/* 🔐 Protected routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/travel-stories"
        element={
          <ProtectedRoute>
            <TravelStories />
          </ProtectedRoute>
        }
      />

      <Route
        path="/verified-stays"
        element={
          <ProtectedRoute>
            <VerifiedStays />
          </ProtectedRoute>
        }
      />

      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;