import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const copyByLocale = {
  en: {
    intro:
      'Homzy offers digital listing plans for property ads across Europe. We do not sell or broker properties; every plan is a digital service activated after successful payment.',
    plans: [
      {
        key: 'basic',
        name: 'Basic Plan',
        price: '£0 / €0',
        duration: '30 days',
        limit: 'Up to 1 active listing',
        features: [
          'Standard placement in search and category results',
          'Basic listing management dashboard',
          'Visibility included during the plan duration',
          'Support for GBP and EUR billing',
          'Digital service only; no physical products or brokerage'
        ]
      },
      {
        key: 'premium',
        name: 'Premium Plan',
        price: '£9.99 / €9.99',
        duration: '60 days',
        limit: 'Up to 3 active listings',
        features: [
          'Increased visibility (highlighted or featured spots)',
          'Premium badge on listings',
          'Listing management dashboard access',
          'Better ranking across search results',
          'Digital service only; no physical products or real-estate intermediation'
        ]
      },
      {
        key: 'professional',
        name: 'Professional Plan',
        price: '£29.00 / €29.00',
        duration: '90 days',
        limit: 'Up to 10 active listings',
        features: [
          'Top or featured placement in search and categories',
          'Advanced visibility options',
          'Performance statistics and analytics',
          'Improved ranking and badges',
          'Digital service only; no physical goods; no brokerage'
        ]
      },
      {
        key: 'unlimited',
        name: 'Pro Unlimited (Subscription)',
        price: '£59.00 / €59.00 per month',
        duration: 'Monthly subscription',
        limit: 'Unlimited active listings during subscription',
        features: [
          'Highest visibility level and all premium features',
          'Full analytics and reporting',
          'Priority support',
          'Recurring digital subscription service',
          'No physical products and no brokerage services'
        ]
      }
    ]
  },
  tr: {
    intro:
      'Homzy, Avrupa genelinde gayrimenkul ilanları için dijital planlar sunar. Mülk satışı veya aracılık yapmayız; her plan, ödeme sonrası otomatik aktive edilen dijital bir hizmettir.',
    plans: [
      {
        key: 'basic',
        name: 'Basic Plan',
        price: '£0 / €0',
        duration: '30 gün',
        limit: 'En fazla 1 aktif ilan',
        features: [
          'Arama ve kategorilerde standart konum',
          'Temel ilan yönetim paneli',
          'Plan süresi boyunca görünürlük',
          'GBP ve EUR faturalama desteği',
          'Sadece dijital hizmet; fiziksel ürün veya aracılık yok'
        ]
      },
      {
        key: 'premium',
        name: 'Premium Plan',
        price: '£9.99 / €9.99',
        duration: '60 gün',
        limit: 'En fazla 3 aktif ilan',
        features: [
          'Artırılmış görünürlük (öne çıkarma / featured alanlar)',
          'İlanlarda Premium rozeti',
          'İlan yönetim paneli erişimi',
          'Arama sonuçlarında daha iyi sıralama',
          'Sadece dijital hizmet; fiziksel ürün veya emlak aracılığı yok'
        ]
      },
      {
        key: 'professional',
        name: 'Professional Plan',
        price: '£29.00 / €29.00',
        duration: '90 gün',
        limit: 'En fazla 10 aktif ilan',
        features: [
          'Arama ve kategorilerde üst / featured konumlar',
          'Gelişmiş görünürlük seçenekleri',
          'Performans istatistikleri ve analitik',
          'Gelişmiş sıralama ve rozetler',
          'Sadece dijital hizmet; fiziksel ürün veya aracılık yok'
        ]
      },
      {
        key: 'unlimited',
        name: 'Pro Unlimited (Abonelik)',
        price: '£59.00 / €59.00 aylık',
        duration: 'Aylık abonelik',
        limit: 'Abonelik süresince sınırsız aktif ilan',
        features: [
          'En yüksek görünürlük ve tüm premium özellikler',
          'Tam analitik ve raporlama',
          'Öncelikli destek',
          'Tekrarlayan dijital abonelik hizmeti',
          'Fiziksel ürün veya aracılık hizmeti yok'
        ]
      }
    ]
  },
  fr: {
    intro:
      'Homzy propose des plans d annonces numériques pour les annonces immobilières en Europe. Nous ne vendons ni ne courtisons de biens; chaque plan est un service numérique activé après paiement.',
    plans: [
      {
        key: 'basic',
        name: 'Plan Basic',
        price: '£0 / €0',
        duration: '30 jours',
        limit: 'Jusqu’à 1 annonce active',
        features: [
          'Position standard dans les recherches et catégories',
          'Tableau de bord basique de gestion des annonces',
          'Visibilité pendant la durée du plan',
          'Facturation disponible en GBP et EUR',
          'Service purement numérique; aucun produit physique ni courtage'
        ]
      },
      {
        key: 'premium',
        name: 'Plan Premium',
        price: '£9.99 / €9.99',
        duration: '60 jours',
        limit: 'Jusqu’à 3 annonces actives',
        features: [
          'Visibilité accrue (mise en avant ou featured)',
          'Badge Premium sur les annonces',
          'Accès au tableau de bord de gestion',
          'Meilleur classement dans les résultats de recherche',
          'Service numérique uniquement; aucun produit physique ni intermédiation'
        ]
      },
      {
        key: 'professional',
        name: 'Plan Professionnel',
        price: '£29.00 / €29.00',
        duration: '90 jours',
        limit: 'Jusqu’à 10 annonces actives',
        features: [
          'Mise en avant en tête de recherche et catégories',
          'Options de visibilité avancées',
          'Statistiques et analyses de performance',
          'Classement amélioré et badges',
          'Service numérique uniquement; aucun produit physique; aucun courtage'
        ]
      },
      {
        key: 'unlimited',
        name: 'Pro Unlimited (Abonnement)',
        price: '£59.00 / €59.00 par mois',
        duration: 'Abonnement mensuel',
        limit: 'Annonces actives illimitées pendant l’abonnement',
        features: [
          'Visibilité maximale et toutes les fonctions premium',
          'Analytics complets et reporting',
          'Support prioritaire',
          'Service d’abonnement numérique récurrent',
          'Pas de produit physique et aucun service de courtage'
        ]
      }
    ]
  },
  de: {
    intro:
      'Homzy bietet digitale Anzeigenpläne für Immobilieninserate in Europa an. Wir verkaufen oder vermitteln keine Immobilien; jeder Plan ist ein digitaler Dienst, der nach erfolgreicher Zahlung aktiviert wird.',
    plans: [
      {
        key: 'basic',
        name: 'Basic-Plan',
        price: '£0 / €0',
        duration: '30 Tage',
        limit: 'Bis zu 1 aktives Inserat',
        features: [
          'Standardplatzierung in Suche und Kategorien',
          'Basisches Listing-Management-Dashboard',
          'Sichtbarkeit für die Dauer des Plans',
          'Abrechnung in GBP und EUR möglich',
          'Nur digitaler Service; keine physischen Produkte oder Maklerleistung'
        ]
      },
      {
        key: 'premium',
        name: 'Premium-Plan',
        price: '£9.99 / €9.99',
        duration: '60 Tage',
        limit: 'Bis zu 3 aktive Inserate',
        features: [
          'Erhöhte Sichtbarkeit (Hervorhebung/Featured)',
          'Premium-Badge auf Inseraten',
          'Zugang zum Listing-Management-Dashboard',
          'Bessere Platzierung in Suchergebnissen',
          'Nur digitaler Service; keine physischen Produkte oder Immobilienvermittlung'
        ]
      },
      {
        key: 'professional',
        name: 'Professional-Plan',
        price: '£29.00 / €29.00',
        duration: '90 Tage',
        limit: 'Bis zu 10 aktive Inserate',
        features: [
          'Top- oder Featured-Platzierung in Suche und Kategorien',
          'Erweiterte Sichtbarkeitsoptionen',
          'Statistiken und Analytics zur Performance',
          'Verbesserte Platzierung und Badges',
          'Nur digitaler Service; keine physischen Güter; keine Maklertätigkeit'
        ]
      },
      {
        key: 'unlimited',
        name: 'Pro Unlimited (Abo)',
        price: '£59.00 / €59.00 pro Monat',
        duration: 'Monatliches Abonnement',
        limit: 'Unbegrenzte aktive Inserate während des Abos',
        features: [
          'Höchste Sichtbarkeit und alle Premium-Funktionen',
          'Vollständige Analytics und Reporting',
          'Priority Support',
          'Wiederkehrender digitaler Abonnementdienst',
          'Keine physischen Produkte und keine Maklerleistungen'
        ]
      }
    ]
  }
};

const PricingPage = () => {
  const { t, i18n } = useTranslation();

  const locale = useMemo(() => {
    const lang = (i18n.language || 'en').toLowerCase();
    if (lang.startsWith('tr')) return 'tr';
    if (lang.startsWith('fr')) return 'fr';
    if (lang.startsWith('de')) return 'de';
    return 'en';
  }, [i18n.language]);

  const copy = copyByLocale[locale] || copyByLocale.en;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-teal-50">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-6">
        <div className="text-center space-y-2">
          <p className="text-sm font-semibold text-purple-700 uppercase tracking-wide">{t('pricing.title')}</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{t('pricing.headline')}</h1>
          <p className="text-gray-600">{t('pricing.subtitle')}</p>
          <p className="text-sm text-gray-500 max-w-3xl mx-auto">{copy.intro}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {copy.plans.map((plan) => (
            <div
              key={plan.key}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 flex flex-col space-y-4"
            >
              <div className="flex items-baseline justify-between">
                <h2 className="text-xl font-semibold text-gray-900">{plan.name}</h2>
                <span className="text-xs font-semibold text-purple-700 bg-purple-50 px-3 py-1 rounded-full">
                  {plan.duration}
                </span>
              </div>
              <div className="text-3xl font-bold text-gray-900">{plan.price}</div>
              <p className="text-sm text-gray-600">{plan.limit}</p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2 flex-1">
                {plan.features.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <button className="mt-auto w-full bg-gradient-to-r from-purple-600 to-teal-500 text-white font-semibold py-3 rounded-xl hover:shadow-md transition">
                {t('pricing.choose')}
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PricingPage;
