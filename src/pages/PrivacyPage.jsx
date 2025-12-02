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
          <p className="text-gray-600 mb-6">Last updated: January 2025</p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
          <p className="text-gray-700 mb-6">
            Homzy ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect,
            use, disclose, and safeguard your information when you use our real estate platform.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
          <p className="text-gray-700 mb-4">We collect information that you provide directly to us, including:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Name and contact information (email, phone number)</li>
            <li>Account credentials</li>
            <li>Property preferences and search history</li>
            <li>Viewing requests and communications</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Provide and improve our services</li>
            <li>Process viewing requests and connect you with agents</li>
            <li>Send you relevant property listings and updates</li>
            <li>Analyze usage patterns and improve user experience</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. GDPR Compliance</h2>
          <p className="text-gray-700 mb-6">
            We are committed to complying with the General Data Protection Regulation (GDPR) and UK GDPR. You have the right to
            access, correct, delete, or restrict the use of your personal data. To exercise these rights, please contact us at
            privacy@homzy.com.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
          <p className="text-gray-700 mb-6">
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized
            access, alteration, disclosure, or destruction.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about this Privacy Policy, please contact us at privacy@homzy.com.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPage;