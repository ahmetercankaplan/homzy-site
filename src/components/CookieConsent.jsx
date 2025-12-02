import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { X, Cookie } from 'lucide-react';
import { Button } from './ui/button';

const CookieConsent = () => {
  const { t } = useTranslation();
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowConsent(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div data-testid="cookie-consent-banner" className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-start space-x-3">
          <Cookie className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-gray-900">We use cookies</h3>
            <p className="text-sm text-gray-600">
              We use cookies to improve your experience and analyze site usage. By continuing, you agree to our cookie policy.
            </p>
          </div>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" onClick={rejectCookies} data-testid="reject-cookies-button">
            Reject
          </Button>
          <Button onClick={acceptCookies} data-testid="accept-cookies-button" className="bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600">
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;