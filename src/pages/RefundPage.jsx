import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RefundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-teal-50 text-gray-900">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
          <h1 className="text-3xl font-bold mb-4">Refund Policy</h1>
          <p className="text-gray-700 mb-4">
            If you are not satisfied with your purchase, you can request a refund within 14 days of the
            transaction. Refunds are issued to the original payment method.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">How to request a refund</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Send an email to support@homzy.com with your payment receipt.</li>
            <li>Include the listing ID or plan name associated with the purchase.</li>
            <li>We will review and process eligible refunds within 5-7 business days.</li>
          </ul>
          <p className="text-gray-700 mt-4">
            Boost and Spotlight add-ons are refundable only if unused within the first 24 hours. Subscription plans are
            refunded pro-rata for the unused period.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RefundPage;
