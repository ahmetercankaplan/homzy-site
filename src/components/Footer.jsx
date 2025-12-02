import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer data-testid="main-footer" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-teal-400 rounded-xl flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Homzy</span>
            </div>
            <p className="text-gray-400 text-sm">{t('footer.tagline')}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <div className="space-y-2">
              <Link to="/pricing" className="block text-gray-400 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link to="/privacy" data-testid="footer-privacy-link" className="block text-gray-400 hover:text-white transition-colors">
                {t('footer.privacy')}
              </Link>
              <Link to="/terms" data-testid="footer-terms-link" className="block text-gray-400 hover:text-white transition-colors">
                {t('footer.terms')}
              </Link>
              <Link to="/cookies" data-testid="footer-cookies-link" className="block text-gray-400 hover:text-white transition-colors">
                {t('footer.cookies')}
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <p className="text-gray-400 text-sm">Email: info@homzy.com</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Homzy. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
