import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAuthStore } from '../store';
import { API_BASE_URL as API } from '../lib/api';
import { toast } from 'sonner';

const AuthPage = () => {
  const { t } = useTranslation();
  const { setUser } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();
  const [mode, setMode] = useState('login'); // login | register
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const onChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const endpoint = mode === 'login' ? '/auth/login' : '/auth/register';
      const payload = mode === 'login'
        ? { email: form.email, password: form.password }
        : { email: form.email, password: form.password, name: form.name || form.email };
      const res = await axios.post(`${API}${endpoint}`, payload);
      setUser(res.data.user);
      toast.success(mode === 'login' ? t('auth.loggedIn') : t('auth.registered'));
      const redirect = new URLSearchParams(location.search).get('redirect') || '/';
      navigate(redirect);
    } catch (error) {
      const message = error?.response?.data?.detail || t('auth.error');
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-teal-50">
      <Navbar />
      <div className="max-w-lg mx-auto px-4 py-12">
        <div className="bg-white shadow-xl rounded-2xl p-8 space-y-6">
          <div className="text-center space-y-2">
            <p className="text-sm font-semibold text-purple-700 uppercase tracking-wide">
              {mode === 'login' ? t('auth.signInTitle') : t('auth.registerTitle')}
            </p>
            <h1 className="text-2xl font-bold text-gray-900">
              {mode === 'login' ? t('auth.signInDesc') : t('auth.registerDesc')}
            </h1>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {mode === 'register' && (
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">{t('auth.name')}</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  required
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            )}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">{t('auth.email')}</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                required
                className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">{t('auth.password')}</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={onChange}
                required
                className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-teal-500 text-white font-semibold py-3 rounded-xl shadow hover:shadow-lg transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? t('auth.loading') : mode === 'login' ? t('auth.signIn') : t('auth.register')}
            </button>
          </form>

          <div className="text-center text-sm text-gray-600">
            {mode === 'login' ? (
              <span>
                {t('auth.noAccount')}{' '}
                <button className="text-purple-600 font-semibold" onClick={() => setMode('register')}>
                  {t('auth.register')}
                </button>
              </span>
            ) : (
              <span>
                {t('auth.haveAccount')}{' '}
                <button className="text-purple-600 font-semibold" onClick={() => setMode('login')}>
                  {t('auth.signIn')}
                </button>
              </span>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AuthPage;
