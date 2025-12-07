import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Cookie } from 'lucide-react';

const CookiePage = () => {
  return (
    <div data-testid="cookie-page" className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex items-center space-x-3 mb-8">
          <Cookie className="w-10 h-10 text-purple-600" />
          <h1 className="text-4xl font-bold text-gray-900">Cookie Policy</h1>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 prose prose-lg max-w-none space-y-10">
          <CookieBlock
            title="English - Cookie Policy"
            intro="We use cookies and similar technologies on Homzy to operate our digital real-estate listing platform, keep the site secure, remember your preferences, and understand how the service is used. Some cookies come from trusted third parties such as analytics or hosting providers."
            categories={[
              'Strictly necessary: enable core functions like sign-in, security, and load balancing.',
              'Functional / preference: remember language, saved filters, and UI settings.',
              'Analytics: help us understand usage in aggregate to improve the service; may be set by third-party analytics providers and are used only with consent.',
              'Marketing/advertising: if used, measure campaigns and show relevant messages; may be set by third-party tools and rely on your consent.',
            ]}
            controls="You can block or delete cookies in your browser settings and, where available, through our on-site cookie banner or preference tool. You may withdraw consent for analytics/marketing cookies at any time; essential cookies are required for the site to function."
            contact="support@homzy.com"
            categoryLabel="Cookie categories"
            controlsLabel="Controls and consent"
          />

          <CookieBlock
            title="Deutsch - Cookie-Richtlinie"
            intro="Wir verwenden Cookies und aehnliche Technologien auf Homzy, um unsere digitale Immobilien-Anzeigenplattform zu betreiben, Sicherheit zu gewaehrleisten, Ihre Einstellungen zu speichern und die Nutzung zu verstehen. Einige Cookies stammen von vertrauenswuerdigen Drittanbietern wie Analytics- oder Hosting-Diensten."
            categories={[
              'Unbedingt erforderlich: fuer Kernfunktionen wie Login, Sicherheit und Lastverteilung.',
              'Funktional / Praeferenzen: speichern Sprache, gespeicherte Filter und UI-Einstellungen.',
              'Analyse: helfen uns, die Nutzung aggregiert zu verstehen und den Dienst zu verbessern; koennen von Analyse-Drittanbietern gesetzt werden und werden nur mit Einwilligung genutzt.',
              'Marketing/Werbung: falls eingesetzt, messen Kampagnen und zeigen relevante Hinweise; koennen von Dritttools stammen und beruhen auf Ihrer Einwilligung.',
            ]}
            controls="Sie koennen Cookies im Browser blockieren oder loeschen und, falls verfuegbar, ueber unser Cookie-Banner oder das Praeferenz-Tool steuern. Sie koennen Ihre Einwilligung fuer Analyse-/Marketing-Cookies jederzeit widerrufen; unbedingt erforderliche Cookies sind fuer den Betrieb notwendig."
            contact="support@homzy.com"
            categoryLabel="Cookie-Kategorien"
            controlsLabel="Steuerung und Einwilligung"
          />

          <CookieBlock
            title="Francais - Politique de cookies"
            intro="Nous utilisons des cookies et des technologies similaires sur Homzy pour faire fonctionner notre plateforme numerique d'annonces immobilieres, assurer la securite, memoriser vos preferences et comprendre l'usage du service. Certains cookies proviennent de tiers de confiance comme des fournisseurs d'analytique ou d'hebergement."
            categories={[
              'Strictement necessaires : activent les fonctions de base (connexion, securite, repartition de charge).',
              'Fonctionnels / preferences : memorisation de la langue, des filtres sauvegardes et des reglages d interface.',
              'Analytique : aident a comprendre l usage de maniere agregee pour ameliorer le service; peuvent provenir de prestataires tiers et ne sont utilises qu avec consentement.',
              'Marketing/publicite : le cas echeant, mesurent les campagnes et affichent des messages pertinents; peuvent provenir d outils tiers et reposent sur votre consentement.',
            ]}
            controls="Vous pouvez bloquer ou supprimer les cookies via les parametres du navigateur et, lorsque disponible, via notre bandeau ou outil de preference. Vous pouvez retirer votre consentement aux cookies d analytique/marketing a tout moment; les cookies strictement necessaires sont indispensables au fonctionnement du site."
            contact="support@homzy.com"
            categoryLabel="Categories de cookies"
            controlsLabel="Controles et consentement"
          />

          <CookieBlock
            title="Turkce - Cerez Politikasi"
            intro="Homzy'de cerezleri ve benzer teknolojileri, dijital gayrimenkul ilan platformumuzu calistirmak, siteyi guvenli tutmak, tercihlerizi hatirlamak ve hizmetin nasil kullanildigini anlamak icin kullaniyoruz. Bazi cerezler analitik veya barindirma saglayicilari gibi guvenilir ucuncu taraflardan gelir."
            categories={[
              'Kesinlikle gerekli: giris, guvenlik ve yuk dengeleme gibi temel islevleri saglar.',
              'Fonksiyonel / tercih: dil, kayitli filtreler ve arayuz ayarlarini hatirlar.',
              'Analitik: hizmeti iyilestirmek icin kullanim verisini toplu olarak anlamamiza yardimci olur; ucuncu taraf analitik saglayicilar tarafindan ayarlanabilir ve yalnizca onayla kullanilir.',
              'Pazarlama/reklam: kullanilirsa kampanyalari olcer ve ilgili mesajlar gosterir; ucuncu taraf araclardan gelebilir ve onayiniza dayanir.',
            ]}
            controls="Cerezleri tarayici ayarlarinizdan engelleyebilir veya silebilirsiniz ve mevcutsa site ici cerez bandi veya tercihler araciligiyla yonetebilirsiniz. Analitik/pazarlama cerezlerine verdiginiz onayi istediginiz zaman geri cekebilirsiniz; zorunlu cerezler sitenin calismasi icin gereklidir."
            contact="support@homzy.com"
            categoryLabel="Cerez kategorileri"
            controlsLabel="Kontroller ve riza"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

const CookieBlock = ({ title, intro, categories, controls, contact, categoryLabel, controlsLabel }) => (
  <section className="space-y-4">
    <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
    <p className="text-gray-700">{intro}</p>
    <h3 className="text-xl font-semibold text-gray-900">{categoryLabel}</h3>
    <ul className="list-disc pl-6 text-gray-700 space-y-2">
      {categories.map((c) => (
        <li key={c}>{c}</li>
      ))}
    </ul>
    <h3 className="text-xl font-semibold text-gray-900">{controlsLabel}</h3>
    <p className="text-gray-700">{controls}</p>
    <h3 className="text-xl font-semibold text-gray-900">Contact</h3>
    <p className="text-gray-700">{contact}</p>
  </section>
);

export default CookiePage;
