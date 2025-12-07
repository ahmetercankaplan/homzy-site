import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RefundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-teal-50 text-gray-900">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        <RefundBlock
          title="English – Refund Policy"
          intro="All Homzy products are digital services/digital content (listing publication, visibility, badges, analytics) delivered immediately after successful payment. In general, no refunds are provided because the service is activated instantly."
          details={[
            'Exception: if due to a technical error the purchased plan is never activated and you cannot use any purchased digital features, contact support within 48 hours of becoming aware of the issue.',
            'After investigation, if the service was not delivered or was significantly defective, we may, at our discretion, offer a full refund, partial refund, plan extension, or re-activation/equivalent access.',
            'Fraudulent or abusive refund/chargeback behavior may result in suspension or termination of your account.',
            'This policy applies only to digital services; no physical goods or brokerage are provided.',
            'Contact: support@homzy.com',
          ]}
        />

        <RefundBlock
          title="Deutsch – Rückerstattungsrichtlinie"
          intro="Alle Homzy-Produkte sind digitale Dienste/Inhalte (Inseratveröffentlichung, Sichtbarkeit, Badges, Analytics), die sofort nach Zahlung aktiviert werden. In der Regel werden keine Rückerstattungen gewährt, da der Dienst sofort bereitsteht."
          details={[
            'Ausnahme: Wenn ein technischer Fehler den gekauften Plan niemals aktiviert hat und Sie keine digitalen Funktionen nutzen konnten, melden Sie sich innerhalb von 48 Stunden nach Kenntnisnahme beim Support.',
            'Nach Prüfung können wir nach Ermessen vollständige/teilweise Erstattung, Laufzeitverlängerung oder erneute Aktivierung/gleichwertigen Zugang anbieten, wenn der Dienst nicht geliefert oder erheblich mangelhaft war.',
            'Betrügerisches oder missbräuchliches Refund-/Chargeback-Verhalten kann zur Sperrung oder Kündigung des Kontos führen.',
            'Gilt ausschließlich für digitale Dienste; keine physischen Waren oder Maklertätigkeit.',
            'Kontakt: support@homzy.com',
          ]}
        />

        <RefundBlock
          title="Français – Politique de remboursement"
          intro="Tous les produits Homzy sont des services/contenus numériques (publication d’annonces, visibilité, badges, analytics) activés immédiatement après paiement. En règle générale, aucun remboursement n’est prévu car le service est livré instantanément."
          details={[
            'Exception : si, en raison d’une erreur technique, le plan acheté n’est jamais activé et que vous ne pouvez pas utiliser les fonctionnalités numériques, contactez le support dans les 48 heures suivant la découverte du problème.',
            'Après enquête, si le service n’a pas été délivré ou est gravement défaillant, nous pouvons, à notre discrétion, offrir un remboursement total/partiel, une extension de durée ou une réactivation/accès équivalent.',
            'Tout comportement frauduleux ou abusif de remboursement/chargeback peut entraîner la suspension ou la résiliation du compte.',
            'Cette politique concerne uniquement les services numériques; aucun bien physique ni courtage.',
            'Contact : support@homzy.com',
          ]}
        />

        <RefundBlock
          title="Türkçe – İade Politikası"
          intro="Tüm Homzy ürünleri dijital hizmet/içeriktir (ilan yayınlama, görünürlük, rozet, analitik) ve ödeme sonrası anında aktive edilir. Genel kural olarak iade yapılmaz çünkü hizmet hemen sunulur."
          details={[
            'İstisna: Teknik bir hata nedeniyle satın alınan plan hiç aktive edilmez ve dijital özellikler kullanılamazsa, durumdan haberdar olduktan sonra en geç 48 saat içinde destekle iletişime geçin.',
            'İnceleme sonrası hizmet teslim edilmemiş veya ciddi kusurlu ise, tamamen bizim takdirimizle tam/parsiyel iade, süre uzatma veya yeniden aktivasyon/denk erişim sağlayabiliriz.',
            'Hileli veya kötüye kullanılan iade/chargeback davranışı hesabın askıya alınmasına veya sonlandırılmasına yol açabilir.',
            'Bu politika yalnızca dijital hizmetler içindir; fiziksel ürün veya aracılık yoktur.',
            'İletişim: support@homzy.com',
          ]}
        />
      </div>
      <Footer />
    </div>
  );
};

const RefundBlock = ({ title, intro, details }) => (
  <section className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100 space-y-3">
    <h1 className="text-2xl font-bold">{title}</h1>
    <p className="text-gray-700">{intro}</p>
    <ul className="list-disc list-inside space-y-2 text-gray-700">
      {details.map((d) => (
        <li key={d}>{d}</li>
      ))}
    </ul>
  </section>
);

export default RefundPage;
