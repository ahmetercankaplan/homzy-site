import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Shield } from 'lucide-react';

const PrivacyPage = () => {
  return (
    <div data-testid="privacy-page" className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex items-center space-x-3 mb-8">
          <Shield className="w-10 h-10 text-purple-600" />
          <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Last updated: [set date]</p>

          <p className="text-gray-700 mb-6">
            Homzy acts as the data controller. We collect and process personal data to provide and improve our real estate
            platform in line with GDPR and UK GDPR.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Data We Collect</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Account and profile data (name, email, login info).</li>
            <li>Listing content (property details, photos).</li>
            <li>Usage data (device, browser, IP, logs).</li>
            <li>Payment-related metadata via our payment provider (we do not store full card data).</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why We Collect Data (Legal Basis)</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Provide and improve the service (performance of a contract).</li>
            <li>Process payments (performance of a contract).</li>
            <li>Prevent fraud and ensure security (legitimate interest).</li>
            <li>Send essential service communications (performance of a contract); marketing only with consent where required.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sharing</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Payment processors (e.g., Paddle/Stripe) for billing.</li>
            <li>Service providers (hosting, analytics) under confidentiality.</li>
            <li>Legal or compliance requests where required by law.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">International Transfers</h2>
          <p className="text-gray-700 mb-6">
            We may transfer data internationally with appropriate safeguards (e.g., SCCs where applicable).
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
          <p className="text-gray-700 mb-6">
            We retain data only as long as needed to provide the service, comply with legal obligations, and resolve disputes.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Access, rectify, erase, restrict processing, data portability, and object where applicable.</li>
            <li>Withdraw consent where processing is based on consent.</li>
            <li>Lodge a complaint with your supervisory authority.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies & Security</h2>
          <p className="text-gray-700 mb-6">
            We use cookies for authentication, security, and basic analytics. Manage preferences via browser settings; some
            features require essential cookies. We apply reasonable technical and organizational measures to protect data; no
            system is 100% secure.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
          <p className="text-gray-700">privacy@homzy.com</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
