import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { AuthProvider, useAuth } from './contexts/AuthContext';

import Login from './pages/Login';
// import DashboardPage from './components/DashboardPage';   // or src/pages/Dashboard.jsx
import Installations from './pages/Installations';
import ServiceLogs from './pages/ServiceLogs';
import AMCTracker from './pages/AMCTracker';
import Alerts from './pages/Alerts';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardLayout from './components/DashboardLayout';

function AppRoutes() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />

      <Route
        path="/"
        element={
          <ProtectedRoute allowedRoles={['admin', 'technician']}>
            <DashboardLayout />
          </ProtectedRoute>
        }
      />

      <Route
        path="/installations"
        element={
          <ProtectedRoute allowedRoles={['admin', 'technician']}>
            <Installations />
          </ProtectedRoute>
        }
      />

      <Route
        path="/services"
        element={
          <ProtectedRoute allowedRoles={['admin', 'technician']}>
            <ServiceLogs />
          </ProtectedRoute>
        }
      />

      <Route
        path="/amc"
        element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AMCTracker />
          </ProtectedRoute>
        }
      />

      <Route
        path="/alerts"
        element={
          <ProtectedRoute allowedRoles={['admin', 'technician']}>
            <Alerts />
          </ProtectedRoute>
        }
      />

      {/* catch-all: redirect unknown paths */}
      <Route path="*" element={<Navigate to={user ? "/" : "/login"} />} />
    </Routes>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Router>
          <AppRoutes />
        </Router>
      </AuthProvider>
    </Provider>
  );
}
