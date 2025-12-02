import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Cookie } from 'lucide-react';

const CookiePage = () => {
  return (
    <div data-testid="cookie-page" className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex items-center space-x-3 mb-8">
          <Cookie className="w-10 h-10 text-purple-600" />
          <h1 className="text-4xl font-bold text-gray-900">Cookie Policy</h1>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Last updated: January 2025</p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies</h2>
          <p className="text-gray-700 mb-6">
            Cookies are small text files that are placed on your device when you visit our website. They help us provide you
            with a better experience by remembering your preferences and understanding how you use our site.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Types of Cookies We Use</h2>
          <p className="text-gray-700 mb-4">We use the following types of cookies:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li><strong>Essential Cookies:</strong> Required for the website to function properly (e.g., authentication)</li>
            <li><strong>Functional Cookies:</strong> Remember your preferences (e.g., language selection)</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Managing Cookies</h2>
          <p className="text-gray-700 mb-6">
            You can control and manage cookies in your browser settings. Please note that removing or blocking cookies may
            impact your user experience and some features may no longer work properly.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Cookies</h2>
          <p className="text-gray-700 mb-6">
            We may use third-party services that set cookies on your device. These services have their own privacy policies
            and cookie policies.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Consent</h2>
          <p className="text-gray-700 mb-6">
            By using Homzy, you consent to our use of cookies as described in this Cookie Policy. You can withdraw your
            consent at any time by changing your browser settings.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about our use of cookies, please contact us at cookies@homzy.com.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CookiePage;