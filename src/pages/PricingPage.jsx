import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Section = ({ title, children }) => (
  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 space-y-4">
    <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
    {children}
  </div>
);

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-teal-50">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-8">
        <Section title="English – Pricing">
          <p>
            Homzy sells digital listing plans for European property ads. We do not sell, rent, or broker properties. All plans are digital services activated after payment.
          </p>
          <PlanBlock
            name="Basic Plan"
            items={[
              '30 days duration',
              'Up to 1 active listing',
              'Standard search/listing position',
              'Basic listing management dashboard',
              'Digital service only; no physical products; no brokerage',
            ]}
          />
          <PlanBlock
            name="Premium Plan"
            items={[
              '60 days duration',
              'Up to 3 active listings',
              'Increased visibility (highlighted/featured positions, homepage spots)',
              'Premium badge/label on listings',
              'Listing management dashboard',
              'Digital service only; no physical products; no real-estate intermediation',
            ]}
          />
          <PlanBlock
            name="Professional Plan"
            items={[
              '90 days duration',
              'Up to 10 active listings',
              'Top/featured positions in search and category pages',
              'Advanced visibility options',
              'Statistics/analytics for listing performance',
              'Digital service only',
            ]}
          />
          <PlanBlock
            name="Pro Unlimited (Subscription)"
            items={[
              'Monthly subscription',
              'Unlimited active listings during subscription',
              'Highest visibility level, all premium features, full analytics, priority support',
              'Recurring digital subscription; not a physical good; not brokerage',
            ]}
          />
        </Section>

        <Section title="Deutsch – Preise">
          <p>
            Homzy verkauft digitale Anzeigenpläne für Immobilienanzeigen in Europa. Wir verkaufen oder vermitteln keine Immobilien. Alle Pläne sind digitale Dienste und werden nach Zahlung aktiviert.
          </p>
          <PlanBlock
            name="Basic-Plan"
            items={[
              'Laufzeit 30 Tage',
              'Bis zu 1 aktives Inserat',
              'Standard-Position in Suche/Listing',
              'Basis-Listing-Management-Dashboard',
              'Nur digitaler Service; keine physischen Produkte; keine Maklertätigkeit',
            ]}
          />
          <PlanBlock
            name="Premium-Plan"
            items={[
              'Laufzeit 60 Tage',
              'Bis zu 3 aktive Inserate',
              'Erhöhte Sichtbarkeit (Hervorhebung/Featured, Startseite)',
              'Premium-Badge/Label auf Inseraten',
              'Listing-Management-Dashboard',
              'Nur digitaler Service; keine physischen Produkte; keine Immobilienvermittlung',
            ]}
          />
          <PlanBlock
            name="Professional-Plan"
            items={[
              'Laufzeit 90 Tage',
              'Bis zu 10 aktive Inserate',
              'Top/Featured-Positionen in Suche und Kategorien',
              'Erweiterte Sichtbarkeitsoptionen',
              'Statistiken/Analytics zur Performance',
              'Nur digitaler Service',
            ]}
          />
          <PlanBlock
            name="Pro Unlimited (Abo)"
            items={[
              'Monatliches Abonnement',
              'Unbegrenzte aktive Inserate während der Laufzeit',
              'Höchste Sichtbarkeit, alle Premium-Features, volle Analytics, Priority Support',
              'Wiederkehrender digitaler Dienst; keine Ware; keine Maklertätigkeit',
            ]}
          />
        </Section>

        <Section title="Français – Tarifs">
          <p>
            Homzy vend des plans d’annonces numériques pour l’Europe. Nous ne vendons ni ne louons de biens et n’assurons aucune intermédiation. Tous les plans sont des services numériques activés après paiement.
          </p>
          <PlanBlock
            name="Plan Basic"
            items={[
              'Durée : 30 jours',
              'Jusqu’à 1 annonce active',
              'Position standard dans la recherche/listing',
              'Tableau de bord basique de gestion',
              'Service 100 % numérique ; aucun produit physique ; aucune intermédiation',
            ]}
          />
          <PlanBlock
            name="Plan Premium"
            items={[
              'Durée : 60 jours',
              'Jusqu’à 3 annonces actives',
              'Visibilité accrue (mises en avant, homepage)',
              'Badge/label Premium sur les annonces',
              'Tableau de bord de gestion',
              'Service numérique uniquement ; pas de produit physique ; pas d’intermédiation',
            ]}
          />
          <PlanBlock
            name="Plan Professionnel"
            items={[
              'Durée : 90 jours',
              'Jusqu’à 10 annonces actives',
              'Positions Top/Featured en recherche et catégories',
              'Options de visibilité avancées',
              'Statistiques/analytics des performances',
              'Service numérique uniquement',
            ]}
          />
          <PlanBlock
            name="Pro Unlimited (Abonnement)"
            items={[
              'Abonnement mensuel',
              'Annonces actives illimitées pendant l’abonnement',
              'Visibilité maximale, toutes les fonctionnalités premium, analytics complets, support prioritaire',
              'Abonnement numérique récurrent ; pas de bien physique ; pas de courtage',
            ]}
          />
        </Section>

        <Section title="Türkçe – Planlar">
          <p>
            Homzy, Avrupa için dijital ilan planları satar. Gayrimenkul satışı/kiralaması yapmaz, aracılık etmez. Tüm planlar dijital hizmettir ve ödeme sonrası otomatik aktive edilir.
          </p>
          <PlanBlock
            name="Basic Plan"
            items={[
              'Süre: 30 gün',
              'En fazla 1 aktif ilan',
              'Standart arama/listing konumu',
              'Temel ilan yönetim paneli',
              'Yalnızca dijital hizmet; fiziksel ürün veya aracılık yok',
            ]}
          />
          <PlanBlock
            name="Premium Plan"
            items={[
              'Süre: 60 gün',
              'En fazla 3 aktif ilan',
              'Artırılmış görünürlük (öne çıkarma, ana sayfa)',
              'İlanlarda Premium rozeti',
              'İlan yönetim paneli',
              'Sadece dijital hizmet; fiziksel ürün veya emlak aracılığı yok',
            ]}
          />
          <PlanBlock
            name="Professional Plan"
            items={[
              'Süre: 90 gün',
              'En fazla 10 aktif ilan',
              'Arama ve kategorilerde üst/öne çıkarılmış konum',
              'Gelişmiş görünürlük seçenekleri',
              'Performans istatistikleri/analitik',
              'Yalnızca dijital hizmet',
            ]}
          />
          <PlanBlock
            name="Pro Unlimited (Abonelik)"
            items={[
              'Aylık abonelik',
              'Abonelik süresince sınırsız aktif ilan',
              'En yüksek görünürlük, tüm premium özellikler, tam analitik, öncelikli destek',
              'Tekrarlayan dijital hizmet; fiziksel ürün değil; aracılık yok',
            ]}
          />
        </Section>
      </div>
      <Footer />
    </div>
  );
};

const PlanBlock = ({ name, items }) => (
  <div>
    <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
    <ul className="list-disc pl-6 text-gray-700 space-y-2">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

export default PricingPage;
