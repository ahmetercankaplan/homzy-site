import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home, Heart, LogOut, LayoutDashboard, Globe } from 'lucide-react';
import { useAuthStore } from '../store';
import axios from 'axios';
import { toast } from 'sonner';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu';
import { Button } from '../components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';
import { API_BASE_URL as API } from '../lib/api';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { user, logout: logoutStore } = useAuthStore();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleLogout = async () => {
    try {
      await axios.post(`${API}/auth/logout`);
      logoutStore();
      navigate('/');
      toast.success('Logged out successfully');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  const languages = [
    { code: 'en-GB', label: 'English' },
    { code: 'tr-TR', label: 'Turkish' },
    { code: 'fr-FR', label: 'French' },
    { code: 'de-DE', label: 'German' }
  ];

  return (
    <nav data-testid="main-navbar" className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" data-testid="logo-link" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-teal-400 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <Home className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
              Homzy
            </span>
          </Link>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 text-gray-700"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              data-testid="nav-home"
              className="text-gray-700 hover:text-purple-600 font-medium flex items-center space-x-1"
            >
              <Home className="w-4 h-4" />
              <span>{t('nav.home')}</span>
            </Link>
            {user && (
              <Link
                to="/favorites"
                data-testid="nav-favorites"
                className="text-gray-700 hover:text-purple-600 font-medium flex items-center space-x-1"
              >
                <Heart className="w-4 h-4" />
                <span>{t('nav.favorites')}</span>
              </Link>
            )}
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" data-testid="language-selector">
                  <Globe className="w-4 h-4 mr-2" />
                  {languages.find(l => l.code === i18n.language)?.label || 'English'}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    data-testid={`lang-${lang.code}`}
                  >
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button data-testid="user-menu-button" className="focus:outline-none">
                    <Avatar className="w-9 h-9 border-2 border-purple-400">
                      <AvatarImage src={user.picture} alt={user.name} />
                      <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <div className="px-3 py-2 border-b">
                    <p className="font-medium">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                  <DropdownMenuItem onClick={() => navigate('/dashboard')} data-testid="nav-dashboard">
                    <LayoutDashboard className="w-4 h-4 mr-2" />
                    {t('nav.dashboard')}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout} data-testid="logout-button">
                    <LogOut className="w-4 h-4 mr-2" />
                    {t('nav.logout')}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                onClick={() => navigate('/auth')}
                data-testid="login-button"
                className="bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600"
              >
                {t('nav.login')}
              </Button>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 bg-white border border-gray-200 rounded-xl shadow-lg p-4 space-y-4">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-700 hover:text-purple-600" onClick={() => setMenuOpen(false)}>
                {t('nav.home')}
              </Link>
              {user && (
                <Link to="/favorites" className="text-gray-700 hover:text-purple-600" onClick={() => setMenuOpen(false)}>
                  {t('nav.favorites')}
                </Link>
              )}
              {user && (
                <Link to="/dashboard" className="text-gray-700 hover:text-purple-600" onClick={() => setMenuOpen(false)}>
                  {t('nav.dashboard')}
                </Link>
              )}
            </div>
            <div className="flex items-center justify-between">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" data-testid="language-selector">
                    <Globe className="w-4 h-4 mr-2" />
                    {languages.find(l => l.code === i18n.language)?.label || 'English'}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      data-testid={`lang-${lang.code}`}
                    >
                      {lang.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              {user ? (
                <Button variant="outline" size="sm" onClick={() => { handleLogout(); setMenuOpen(false); }}>
                  {t('nav.logout')}
                </Button>
              ) : (
                <Button
                  onClick={() => { navigate('/auth'); setMenuOpen(false); }}
                  size="sm"
                  className="bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600"
                >
                  {t('nav.login')}
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
