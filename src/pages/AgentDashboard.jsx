import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAuthStore } from '../store';
import { Building2 } from 'lucide-react';

const AgentDashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();

  React.useEffect(() => {
    if (!user || user.role !== 'agent') {
      navigate('/');
    }
  }, [user, navigate]);

  if (!user || user.role !== 'agent') return null;

  return (
    <div data-testid="agent-dashboard" className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-teal-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-teal-400 rounded-xl flex items-center justify-center">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Agent Dashboard</h1>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <Building2 className="w-24 h-24 text-purple-400 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Coming Soon</h2>
          <p className="text-gray-600">The agent dashboard for managing properties is under development.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AgentDashboard;