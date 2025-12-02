import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import './App.css';
import './i18n';
import 'leaflet/dist/leaflet.css';

import SearchPage from './pages/SearchPage';
import PropertyDetailPage from './pages/PropertyDetailPage';
import FavoritesPage from './pages/FavoritesPage';
import DashboardPage from './pages/DashboardPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import CookiePage from './pages/CookiePage';
import PricingPage from './pages/PricingPage';
import RefundPage from './pages/RefundPage';
import { useAuthStore } from './store';
import { Toaster } from './components/ui/sonner';
import CookieConsent from './components/CookieConsent';
import { API_BASE_URL as API } from './lib/api';

axios.defaults.withCredentials = true;

function App() {
  const { i18n } = useTranslation();
  const { user, setUser, logout } = useAuthStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.substring(1));
    const sessionId = params.get('session_id');

    if (sessionId) {
      setLoading(true);
      axios.post(`${API}/auth/session`, {}, {
        headers: { 'X-Session-ID': sessionId }
      })
      .then(res => {
        setUser(res.data.user);
        window.history.replaceState({}, document.title, window.location.pathname);
      })
      .catch(err => console.error('Session creation failed:', err))
      .finally(() => setLoading(false));
    } else {
      axios.get(`${API}/auth/me`)
      .then(res => setUser(res.data.user))
      .catch(() => {
        logout();
      })
      .finally(() => setLoading(false));
    }
  }, [setUser, logout]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-teal-50">
        <div className="text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-purple-400 border-r-transparent"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/property/:id" element={<PropertyDetailPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/cookies" element={<CookiePage />} />
          <Route path="/refund" element={<RefundPage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
        <Toaster position="top-right" />
        <CookieConsent />
      </div>
    </BrowserRouter>
  );
}

export default App;
