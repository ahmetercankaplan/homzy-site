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
            If you are not satisfied with your purchase, you may request a refund within <strong>14 days</strong> of the
            original transaction date. Refunds are issued to the original payment method used at the time of purchase.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">How to request a refund</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Send an email to <strong>support@homzy.com</strong> with your payment receipt.</li>
            <li>Include the listing ID or plan name associated with the purchase.</li>
            <li>We will process your refund request as soon as possible.</li>
          </ul>
          <p className="text-gray-700 mt-4">
            Refunds apply to all digital purchases and subscription plans sold on our platform. There are <strong>no exceptions</strong>, and refunds are provided in line with Paddle’s consumer protection policies.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RefundPage;
