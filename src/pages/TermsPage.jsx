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
          <h1 className="text-4xl font-bold text-gray-900">Terms of Service</h1>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Last updated: [set date]</p>

          <p className="text-gray-700 mb-6">
            Homzy is a real estate listings platform for browsing, posting, and managing property listings. By using Homzy,
            you agree to these Terms of Service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Accounts & Eligibility</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>You must provide accurate information and keep your account secure.</li>
            <li>You are responsible for activity under your account.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Listings & Use</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Listings must be accurate, lawful, and not infringe third-party rights.</li>
            <li>Homzy may moderate, remove, or limit access to content that violates these terms or applicable law.</li>
            <li>Homzy is not a party to any rental or sale transaction between users.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Payments</h2>
          <p className="text-gray-700 mb-6">
            Digital purchases (plans, add-ons) are billed in the stated currency. Refunds are handled per the Refund Policy
            (14-day refund period, no exceptions).
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Availability</h2>
          <p className="text-gray-700 mb-6">
            Homzy is provided “as is” and “as available.” We may update, suspend, or discontinue features. We do not
            guarantee uninterrupted or error-free service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Liability</h2>
          <p className="text-gray-700 mb-6">
            To the extent permitted by law, Homzy is not liable for indirect or consequential damages arising from use of the
            service. Nothing in these terms limits liability that cannot be limited under applicable law.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
          <p className="text-gray-700 mb-6">
            These terms are governed by the laws applicable to Homzy’s principal place of business, unless mandatory local
            consumer law provides otherwise.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
          <p className="text-gray-700">support@homzy.com</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsPage;
