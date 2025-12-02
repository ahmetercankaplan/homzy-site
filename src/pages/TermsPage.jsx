import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FileText } from 'lucide-react';

const TermsPage = () => {
  return (
    <div data-testid="terms-page" className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex items-center space-x-3 mb-8">
          <FileText className="w-10 h-10 text-purple-600" />
          <h1 className="text-4xl font-bold text-gray-900">Terms of Use</h1>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Last updated: January 2025</p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700 mb-6">
            By accessing or using Homzy, you agree to be bound by these Terms of Use. If you do not agree to these terms,
            please do not use our platform.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use of Service</h2>
          <p className="text-gray-700 mb-6">
            You may use Homzy to search for properties, save favorites, and connect with property agents. You agree to use
            the service only for lawful purposes and in accordance with these terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
          <p className="text-gray-700 mb-6">
            You are responsible for maintaining the confidentiality of your account credentials and for all activities that
            occur under your account. You agree to notify us immediately of any unauthorized use of your account.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Property Listings</h2>
          <p className="text-gray-700 mb-6">
            Property information is provided by agents and property owners. While we strive for accuracy, we do not guarantee
            the completeness or accuracy of property listings. You should verify all information before making any decisions.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitation of Liability</h2>
          <p className="text-gray-700 mb-6">
            Homzy shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from
            your use of the service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Changes to Terms</h2>
          <p className="text-gray-700 mb-6">
            We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new
            Terms of Use on this page.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about these Terms of Use, please contact us at legal@homzy.com.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsPage;