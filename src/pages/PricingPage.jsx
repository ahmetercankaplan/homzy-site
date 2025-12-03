import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Check, Zap, Star } from 'lucide-react';
import axios from 'axios';
import { useAuthStore } from '../store';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL as API } from '../lib/api';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';

const PricingPage = () => {
  const { t } = useTranslation();
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    axios.get(`${API}/plans`).then((res) => setPlans(res.data));
  }, []);

  const handleChoose = async (slug) => {
    if (!user) {
      navigate('/pricing?login=1');
      toast.error('Please sign in to choose a plan.');
      return;
    }
    try {
      const res = await axios.post(`${API}/paddle/checkout-session`, {
        purpose: 'plan',
        plan_slug: slug,
      });
      if (res.data.checkout_url) {
        window.location.href = res.data.checkout_url;
      } else {
        toast.success('Plan activated');
      }
    } catch (error) {
      if (error.response?.status === 401) {
        logout();
        toast.error('Session expired, please sign in again.');
        navigate('/');
        return;
      }
      toast.error(error.response?.data?.detail || 'Could not start checkout');
    }
  };

  const individualPlans = plans.filter((p) => p.type === 'individual');
  const agentPlans = plans.filter((p) => p.type === 'agent');

  const addonCards = [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-teal-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        <div className="text-center space-y-3">
          <p className="text-sm uppercase tracking-wide text-purple-600 font-semibold">{t('pricing.title', 'Plans & Pricing')}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{t('pricing.headline', 'Choose the plan that fits you')}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('pricing.subtitle', 'Upgrade anytime. Cancel anytime. Boost and Spotlight are one-off add-ons for extra visibility.')}
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('pricing.individual', 'For Individuals')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {individualPlans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} onChoose={handleChoose} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('pricing.agents', 'For Agents & Agencies')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {agentPlans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} onChoose={handleChoose} />
            ))}
          </div>
        </section>

        {addonCards.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('pricing.addons', 'Add-ons')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {addonCards.map((addon) => {
                const Icon = addon.icon;
                return (
                  <div key={addon.name} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-purple-50 text-purple-600">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{addon.name}</h3>
                        <span className="text-lg font-semibold text-gray-800">{addon.price}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{addon.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </div>
      <Footer />
    </div>
  );
};

const PlanCard = ({ plan, onChoose }) => {
  const { t } = useTranslation();
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
        <span className="text-sm uppercase bg-purple-50 text-purple-700 px-3 py-1 rounded-full">{plan.type}</span>
      </div>
      <div className="mb-4">
        <span className="text-3xl font-bold text-gray-900">£{(plan.monthly_price_cents / 100).toFixed(2)}</span>
        <span className="text-gray-500 text-sm ml-1">/mo</span>
      </div>
      <p className="text-gray-600 text-sm mb-4">
        {t('pricing.maxListings', 'Max active listings')}: {plan.max_active_listings === 0 ? t('pricing.unlimited', 'Unlimited') : plan.max_active_listings}
      </p>
      <ul className="space-y-2 mb-6">
        {plan.features?.map((f) => (
          <li key={f} className="flex items-center text-sm text-gray-700">
            <Check className="w-4 h-4 text-green-500 mr-2" />
            {f}
          </li>
        ))}
      </ul>
      <Button
        onClick={() => onChoose(plan.slug)}
        className="bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600 w-full md:w-auto"
      >
        {t('pricing.choose', 'Choose Plan')}
      </Button>
    </div>
  );
};

export default PricingPage;
