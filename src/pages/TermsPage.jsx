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

        <div className="bg-white rounded-2xl shadow-lg p-8 prose prose-lg max-w-none space-y-10">
          <TermsBlock
            title="English – Terms of Service"
            intro="By using Homzy or purchasing any plan, you accept these Terms of Service. Homzy is a fully digital real-estate listing platform for Europe. We provide listing publication, visibility, and analytics only. We do not sell or rent properties, do not broker deals, and are not a party to any transaction."
            items={[
              {
                h: 'Nature of service',
                t: 'Digital services only: listing publication rights, visibility options, badges, analytics. No physical goods, no brokerage, no investment advice.',
              },
              {
                h: 'Accounts',
                t: 'Provide accurate info, keep credentials secure, and you are responsible for all activity under your account.',
              },
              {
                h: 'User obligations',
                t: 'Publish only lawful, truthful listings you are authorized to post; no fraudulent, harmful, or rights-infringing content. We may remove content and suspend/terminate accounts for violations.',
              },
              {
                h: 'Plans, subscriptions, payments',
                t: 'Payments processed via third-party providers; services activate after successful payment. Subscriptions renew unless cancelled; cancellations stop future renewals, paid periods are non-refundable. Prices may change with reasonable notice for active subscriptions.',
              },
              {
                h: 'Service availability',
                t: 'No guarantee of uninterrupted or error-free service; maintenance or technical issues may cause downtime.',
              },
              {
                h: 'Liability',
                t: 'We are not liable for indirect losses, loss of profit, data loss, or any disputes/transactions between users (buyers/sellers/landlords/tenants).',
              },
              {
                h: 'Termination',
                t: 'We may suspend or terminate accounts for violations, abuse, or fraud.',
              },
              {
                h: 'Changes',
                t: 'We may update these terms; the latest version on the site applies and continued use means acceptance.',
              },
              { h: 'Contact', t: 'support@homzy.site' },
            ]}
          />

          <TermsBlock
            title="Deutsch – Nutzungsbedingungen"
            intro="Mit der Nutzung von Homzy oder dem Kauf eines Plans akzeptieren Sie diese Nutzungsbedingungen. Homzy ist eine vollständig digitale Immobilien-Anzeigenplattform für Europa. Wir bieten nur Veröffentlichung, Sichtbarkeit und Analytics an; kein Verkauf/Vermietung von Immobilien, keine Maklertätigkeit, keine Parteistellung in Transaktionen."
            items={[
              { h: 'Leistungsart', t: 'Nur digitale Dienste: Veröffentlichungsrecht, Sichtbarkeitsoptionen, Badges, Analytics. Keine physischen Produkte, keine Maklerleistung, keine Anlageberatung.' },
              { h: 'Konten', t: 'Korrekte Angaben machen, Zugangsdaten schützen, Verantwortung für alle Aktivitäten im Konto.' },
              { h: 'Pflichten', t: 'Nur rechtmäßige, wahrheitsgemäße Inserate, zu denen Sie berechtigt sind; keine betrügerischen oder rechtsverletzenden Inhalte. Wir können Inhalte entfernen und Konten sperren/beenden.' },
              { h: 'Pläne, Abos, Zahlungen', t: 'Zahlungen über Drittanbieter; Aktivierung nach erfolgreicher Zahlung. Abos verlängern sich, bis sie gekündigt werden; Kündigung stoppt zukünftige Verlängerungen, bezahlte Zeit ist nicht erstattbar. Preisänderungen mit angemessener Vorankündigung.' },
              { h: 'Verfügbarkeit', t: 'Keine Garantie für störungsfreien Betrieb; Wartung/Technik kann Ausfälle verursachen.' },
              { h: 'Haftung', t: 'Keine Haftung für indirekte Schäden, Gewinn- oder Datenverlust oder Streitigkeiten/Transaktionen zwischen Nutzern.' },
              { h: 'Kündigung', t: 'Sperrung/Beendigung bei Verstößen, Missbrauch oder Betrug möglich.' },
              { h: 'Änderungen', t: 'Aktualisierte Bedingungen auf der Website gelten; weitere Nutzung bedeutet Zustimmung.' },
              { h: 'Kontakt', t: 'support@homzy.site' },
            ]}
          />

          <TermsBlock
            title="Français – Conditions d’utilisation"
            intro="En utilisant Homzy ou en achetant un plan, vous acceptez ces conditions. Homzy est une plateforme d’annonces immobilières 100 % numérique pour l’Europe. Nous offrons uniquement publication, visibilité et analytique; pas de vente/location de biens, pas d’intermédiation, aucune partie aux transactions."
            items={[
              { h: 'Nature du service', t: 'Services purement numériques : droit de publier, options de visibilité, badges, analytics. Aucun bien physique, aucune activité de courtage, aucun conseil en investissement.' },
              { h: 'Comptes', t: 'Fournir des informations exactes, sécuriser les identifiants, responsabilité de toute activité sur le compte.' },
              { h: 'Obligations', t: 'Publier uniquement des annonces licites et véridiques que vous êtes autorisé à publier; pas de contenu frauduleux ou illicite. Nous pouvons retirer du contenu et suspendre/fermer des comptes en cas de violation.' },
              { h: 'Plans, abonnements, paiements', t: 'Paiements via prestataires tiers; activation après paiement. Les abonnements se renouvellent sauf annulation; l’annulation arrête les renouvellements futurs, les périodes payées ne sont pas remboursées. Changement de prix avec préavis raisonnable.' },
              { h: 'Disponibilité', t: 'Aucune garantie d’un service ininterrompu; maintenance ou problèmes techniques possibles.' },
              { h: 'Responsabilité', t: 'Aucune responsabilité pour les dommages indirects, pertes de profits, pertes de données, ni pour les litiges/transactions entre utilisateurs.' },
              { h: 'Résiliation', t: 'Suspension ou clôture en cas de violation, abus ou fraude.' },
              { h: 'Modifications', t: 'La version publiée la plus récente s’applique; l’usage continu vaut acceptation.' },
              { h: 'Contact', t: 'support@homzy.site' },
            ]}
          />

          <TermsBlock
            title="Türkçe – Kullanım Koşulları"
            intro="Homzy’yi kullanmanız veya plan satın almanız bu koşulları kabul ettiğiniz anlamına gelir. Homzy, Avrupa için tamamen dijital bir ilan platformudur; yalnızca ilan yayınlama, görünürlük ve analitik sunar. Gayrimenkul satışı/kiralanması yapmaz, aracılık yapmaz, işlemlerde taraf değildir."
            items={[
              { h: 'Hizmetin niteliği', t: 'Sadece dijital hizmet: ilan yayınlama hakkı, görünürlük seçenekleri, rozetler, analitik. Fiziksel ürün veya aracılık yok.' },
              { h: 'Hesaplar', t: 'Doğru bilgi vermek, giriş bilgilerini korumak ve hesap altındaki tüm işlemlerden sorumlu olmak.' },
              { h: 'Kullanıcı yükümlülükleri', t: 'Sadece yasal ve doğru ilanlar yayınlamak; sahte, zararlı veya hak ihlali içeren içerik yasaktır. İhlalde içerik kaldırılabilir, hesap askıya alınabilir/sonlandırılabilir.' },
              { h: 'Planlar, abonelikler, ödemeler', t: 'Ödemeler üçüncü taraf sağlayıcılarla; ödeme sonrası hizmet aktive edilir. Abonelikler iptal edilmedikçe yenilenir; iptal gelecekteki yenilemeyi durdurur, ödenmiş dönem iade edilmez. Fiyat değişiklikleri için makul bildirim yapılır.' },
              { h: 'Hizmet kullanılabilirliği', t: 'Kesintisiz veya hatasız hizmet garantisi yoktur; bakım/teknik sebeplerle kesinti olabilir.' },
              { h: 'Sorumluluk sınırı', t: 'Dolaylı zararlar, kâr veya veri kaybı ya da kullanıcılar arasındaki anlaşmazlık ve işlemlerden sorumlu değiliz.' },
              { h: 'Fesih', t: 'İhlal, kötüye kullanım veya dolandırıcılık durumunda hesap askıya alınabilir veya sonlandırılabilir.' },
              { h: 'Koşul değişiklikleri', t: 'Güncel sürüm sitede yayımlanır; kullanmaya devam etmek kabul anlamına gelir.' },
              { h: 'İletişim', t: 'support@homzy.site' },
            ]}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

const TermsBlock = ({ title, intro, items }) => (
  <section className="space-y-4">
    <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
    <p className="text-gray-700">{intro}</p>
    <ul className="list-disc pl-6 text-gray-700 space-y-2">
      {items.map(({ h, t }) => (
        <li key={h}>
          <strong>{h}:</strong> {t}
        </li>
      ))}
    </ul>
  </section>
);

export default TermsPage;
