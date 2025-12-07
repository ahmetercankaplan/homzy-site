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

        <div className="bg-white rounded-2xl shadow-lg p-8 prose prose-lg max-w-none space-y-10">
          <PrivacyBlock
            title="English – Privacy Policy"
            body={[
              'Homzy is the data controller. This policy is GDPR/UK GDPR aligned.',
              'Personal data we process: account data (name, email, contact), listing details (including address/description), billing/payment metadata via third-party processors (we do not store full card data), technical/usage data (IP, device, browser, logs, cookies/analytics).',
              'Purposes: create/manage accounts; provide digital listing/visibility services; process payments and prevent fraud; comply with legal duties; improve the service via aggregated/anonymous analytics; communicate about accounts, updates, and support.',
              'Legal bases: contract performance, legal obligations, legitimate interests, and consent where required (e.g., analytics/marketing cookies).',
              'Sharing: payment processors, hosting, analytics, support vendors, and authorities if required by law.',
              'International transfers: if data leaves the EEA/UK, appropriate safeguards (e.g., SCCs) are applied.',
              'Rights: access, rectification, erasure, restriction, objection, data portability, and complaint to a data protection authority. Withdraw consent at any time where processing is based on consent.',
              'Cookies: we use cookies/trackers (see Cookie Policy) for essential, functional, and consent-based analytics/marketing purposes.',
              'Contact: privacy@homzy.com',
            ]}
          />

          <PrivacyBlock
            title="Deutsch – Datenschutz"
            body={[
              'Homzy ist Verantwortlicher; diese Richtlinie richtet sich nach DSGVO/UK-GDPR.',
              'Verarbeitete Daten: Kontodaten (Name, E-Mail, Kontakt), Anzeigendaten (inkl. Adresse/Beschreibung), Abrechnungs-/Zahlungsmetadaten über Drittanbieter (keine vollständigen Kartendaten), technische/Nutzungsdaten (IP, Gerät, Browser, Logs, Cookies/Analytics).',
              'Zwecke: Konten anlegen/verwalten; digitale Anzeigen-/Sichtbarkeitsdienste bereitstellen; Zahlungen verarbeiten und Betrug verhindern; rechtliche Pflichten erfüllen; Dienst mittels aggregierter/anon. Analytics verbessern; Kommunikation zu Konto, Updates, Support.',
              'Rechtsgrundlagen: Vertragserfüllung, rechtliche Pflichten, berechtigte Interessen und Einwilligung, wo erforderlich (z. B. Analytics-/Marketing-Cookies).',
              'Weitergabe: Zahlungsdienstleister, Hosting, Analytics, Support-Dienstleister, Behörden, falls rechtlich nötig.',
              'Internationale Übermittlungen: bei Transfer außerhalb EWR/UK geeignete Garantien (z. B. SCCs).',
              'Rechte: Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch, Datenübertragbarkeit und Beschwerde bei einer Aufsichtsbehörde; Widerruf der Einwilligung jederzeit, wenn die Verarbeitung darauf beruht.',
              'Cookies: Einsatz gemäß Cookie-Richtlinie für essenzielle, funktionale und einwilligungsbasierte Analytics-/Marketingzwecke.',
              'Kontakt: privacy@homzy.com',
            ]}
          />

          <PrivacyBlock
            title="Français – Politique de confidentialité"
            body={[
              'Homzy est responsable du traitement, conformément au RGPD/RGPD UK.',
              'Données traitées : compte (nom, email, contact), détails d’annonce (adresse/description), métadonnées de facturation/paiement via prestataires tiers (pas de stockage complet des cartes), données techniques/usage (IP, appareil, navigateur, logs, cookies/analytics).',
              'Finalités : création/gestion de comptes ; fourniture de services d’annonce/visibilité numériques ; traitement des paiements et prévention de la fraude ; obligations légales ; amélioration du service via analyses agrégées/anon ; communication sur le compte, les mises à jour et le support.',
              'Bases légales : exécution du contrat, obligations légales, intérêts légitimes, et consentement si requis (cookies analytics/marketing).',
              'Partage : processeurs de paiement, hébergement, analytics, support, autorités si requis par la loi.',
              'Transferts internationaux : garanties appropriées (p. ex. clauses contractuelles types) si les données quittent l’EEE/Royaume-Uni.',
              'Droits : accès, rectification, effacement, limitation, opposition, portabilité, plainte auprès d’une autorité ; retrait du consentement à tout moment lorsque pertinent.',
              'Cookies : utilisés selon la Politique Cookies pour l’essentiel, les préférences et les analytics/marketing soumis au consentement.',
              'Contact : privacy@homzy.com',
            ]}
          />

          <PrivacyBlock
            title="Türkçe – Gizlilik Politikası"
            body={[
              'Homzy veri sorumlusudur; bu politika GDPR/UK GDPR uyumludur.',
              'İşlenen veriler: hesap verisi (isim, e-posta, iletişim), ilan detayları (adres/açıklama dahil), faturalama/ödeme metadatası üçüncü taraf sağlayıcılar üzerinden (tam kart bilgisi saklanmaz), teknik/kullanım verisi (IP, cihaz, tarayıcı, loglar, çerez/analitik).',
              'Amaçlar: hesap oluşturma/ yönetme; dijital ilan/görünürlük hizmeti sunma; ödemeleri işleme ve sahteciliği önleme; yasal yükümlülükleri karşılama; anonim/aggregated analizlerle hizmeti iyileştirme; hesap, güncellemeler ve destek hakkında iletişim.',
              'Hukuki dayanak: sözleşme ifası, yasal yükümlülük, meşru menfaat, gerektiğinde rıza (örn. analitik/pazarlama çerezleri).',
              'Paylaşım: ödeme işlemcileri, barındırma, analitik, destek sağlayıcıları ve kanunen gerekirse yetkililer.',
              'Uluslararası aktarım: EEA/UK dışına aktarımda uygun güvenceler (ör. SCC) uygulanır.',
              'Haklar: erişim, düzeltme, silme, işlemeyi kısıtlama, itiraz, veri taşınabilirliği ve denetim makamına şikayet; rızaya dayalı işlemede rızayı dilediğiniz zaman geri çekebilirsiniz.',
              'Çerezler: temel, işlevsel ve rızaya bağlı analitik/pazarlama amaçlı çerezler kullanılır (detaylar Çerez Politikası’nda).',
              'İletişim: privacy@homzy.com',
            ]}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

const PrivacyBlock = ({ title, body }) => (
  <section className="space-y-3">
    <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
    <ul className="list-disc pl-6 text-gray-700 space-y-2">
      {body.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </section>
);

export default PrivacyPage;
