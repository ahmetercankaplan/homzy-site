import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  'en-GB': {
    translation: {
      nav: {
        home: 'Home',
        search: 'Search',
        favorites: 'Favorites',
        login: 'Sign In',
        logout: 'Sign Out',
        dashboard: 'Dashboard'
      },
      hero: {
        title: "Find the space you'll love living in",
        subtitle: 'Discover your perfect home across the UK and Europe',
        searchPlaceholder: 'Location, postcode, or address',
        minPrice: 'Min Price',
        maxPrice: 'Max Price',
        bedrooms: 'Bedrooms',
        search: 'Search'
      },
      featured: {
        title: 'Featured Properties',
        viewAll: 'View All Properties'
      },
      howItWorks: {
        title: 'How It Works',
        step1: 'Search',
        step1Desc: 'Browse thousands of properties',
        step2: 'View',
        step2Desc: 'Book a viewing that suits you',
        step3: 'Contact',
        step3Desc: 'Connect with agents directly'
      },
      property: {
        perMonth: 'per month',
        bedrooms: 'bedrooms',
        bathrooms: 'bathrooms',
        furnished: 'Furnished',
        unfurnished: 'Unfurnished',
        petsAllowed: 'Pets Allowed',
        parking: 'Parking',
        balconyGarden: 'Balcony/Garden',
        energyRating: 'Energy Rating',
        available: 'Available from',
        requestViewing: 'Request Viewing',
        contactAgent: 'Contact Agent',
        saveToFavorites: 'Save to Favorites',
        share: 'Share',
        features: 'Features',
        description: 'Description',
        location: 'Location',
        nearby: 'Nearby'
      },
      pricing: {
        title: 'Plans & Pricing',
        headline: 'Choose the plan that fits you',
        subtitle: 'Upgrade anytime. Cancel anytime.',
        individual: 'For Individuals',
        agents: 'For Agents & Agencies',
        addons: 'Add-ons',
        boost: 'Boost',
        boostDesc: 'Higher ranking in search for 7 days with Boosted badge.',
        spotlight: 'Spotlight',
        spotlightDesc: 'Featured on homepage and city top results for 7 days.',
        maxListings: 'Max active listings',
        unlimited: 'Unlimited',
        choose: 'Choose Plan'
      },
      pricingPlans: {
        intro: 'Homzy offers digital listing plans for property ads across Europe. We do not sell or broker properties; each plan is a digital service that activates after successful payment.',
        basic: {
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
        premium: {
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
        professional: {
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
        unlimited: {
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
      },
      filters: {
        filters: 'Filters',
        location: 'Location',
        priceRange: 'Price Range',
        propertyType: 'Property Type',
        flat: 'Flat',
        house: 'House',
        studio: 'Studio',
        rooms: 'Rooms',
        furnished: 'Furnished',
        unfurnished: 'Unfurnished',
        petsAllowed: 'Pets Allowed',
        parking: 'Parking',
        balconyGarden: 'Balcony/Garden',
        clearAll: 'Clear All',
        apply: 'Apply Filters',
        studentFriendly: 'Student Friendly'
      },
      favorites: {
        title: 'My Favorites',
        empty: 'No favorites yet',
        emptyDesc: 'Start saving properties to see them here'
      },
      auth: {
        signIn: 'Sign in',
        signInTitle: 'Welcome to Homzy',
        signInDesc: 'Access your account to save favorites and manage viewings',
        registerTitle: 'Create your account',
        registerDesc: 'Access all features with your Homzy account',
        email: 'Email',
        name: 'Name',
        password: 'Password',
        register: 'Register',
        noAccount: 'No account yet?',
        haveAccount: 'Already have an account?',
        loggedIn: 'Signed in successfully',
        registered: 'Account created and signed in',
        error: 'Something went wrong',
        loading: 'Please wait...'
      },
      footer: {
        tagline: "Find the space you'll love living in",
        privacy: 'Privacy Policy',
        terms: 'Terms of Use',
        refund: 'Refund Policy',
        cookies: 'Cookie Policy',
        rights: 'All rights reserved'
      },
      dashboard: {
        title: 'My Dashboard',
        myListings: 'My Listings',
        addListing: 'Add Listing',
        editListing: 'Edit Listing',
        createdSuccess: 'Listing created successfully',
        updatedSuccess: 'Listing updated successfully',
        deletedSuccess: 'Listing deleted successfully',
        areYouSureDelete: 'Are you sure you want to delete this listing? This action cannot be undone.',
        noListings: 'No listings yet',
        addFirstListing: 'Create your first property listing to get started'
      },
      listingForm: {
        details: 'Details',
        media: 'Photos & Media',
        title: 'Title',
        description: 'Description',
        price: 'Price per Month',
        currency: 'Currency',
        address: 'Street Address',
        city: 'City',
        postcode: 'Postcode',
        country: 'Country',
        bedrooms: 'Bedrooms',
        bathrooms: 'Bathrooms',
        size: 'Size (m²)',
        propertyType: 'Property Type',
        furnished: 'Furnished',
        availabilityDate: 'Available From',
        energyRating: 'Energy Rating (EPC)',
        features: 'Features',
        photos: 'Property Photos',
        floorplan: 'Floorplan',
        uploadPhotos: 'Drag & drop photos or click to browse',
        dropPhotos: 'Drop photos here',
        addFloorplan: 'Add floorplan (PDF or image)',
        dropFloorplan: 'Drop floorplan here',
        next: 'Next: Photos',
        back: 'Back',
        cancel: 'Cancel',
        create: 'Create Listing',
        update: 'Update Listing',
        submitting: 'Saving...',
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        preferredDate: 'Preferred Date',
        message: 'Message',
        student: 'Student Friendly'
      },
      validation: {
        required: 'Required',
        titleLength: 'Title must be 10-100 characters',
        descriptionLength: 'Description must be 50-2000 characters',
        invalidPrice: 'Price must be positive',
        invalidNumber: 'Must be a valid number',
        invalidDate: 'Must be a valid date',
        invalidCurrency: 'Invalid currency',
        imagesRequired: 'At least 1 photo is required',
        regionNotAllowed: 'Only UK & EU listings are allowed',
        fixErrors: 'Please fix the errors before submitting',
        submitError: 'Failed to save listing'
      },
      filterBar: {
        rent: 'Rent',
        buy: 'Buy',
        propertyType: 'Property Type',
        allTypes: 'All Types',
        rooms: 'Rooms',
        anyRooms: 'Any',
        minPrice: 'Min',
        maxPrice: 'Max',
        locationPlaceholder: 'City, postcode, address',
        filters: 'Filters',
        advancedFilters: 'Advanced Filters',
        search: 'Search'
      },
      quickChips: {
        furnished: 'Furnished',
        garden: 'Garden/Balcony',
        parking: 'Parking',
        petFriendly: 'Pet Friendly',
        newBuild: 'New Build',
        highEPC: 'High EPC',
        studentFriendly: 'Student Friendly'
      }
    }
  },
  'tr-TR': {
    translation: {
      nav: {
        home: 'Ana Sayfa',
        search: 'Ara',
        favorites: 'Favoriler',
        login: 'Giriş Yap',
        logout: 'Çıkış Yap',
        dashboard: 'Panel'
      },
      hero: {
        title: 'Yaşamayı seveceğiniz alanı bulun',
        subtitle: 'İngiltere ve Avrupa genelinde mükemmel evinizi keşfedin',
        searchPlaceholder: 'Konum, posta kodu veya adres',
        minPrice: 'Min Fiyat',
        maxPrice: 'Maks Fiyat',
        bedrooms: 'Yatak Odası',
        search: 'Ara'
      },
      featured: {
        title: 'Öne Çıkan Gayrimenkuller',
        viewAll: 'Tümünü Gör'
      },
      howItWorks: {
        title: 'Nasıl çalışır',
        step1: 'Ara',
        step1Desc: 'Binlerce gayrimenkulü inceleyin',
        step2: 'Gör',
        step2Desc: 'Size uygun görüşmeyi ayarlayın',
        step3: 'İletişim',
        step3Desc: 'Acentelerle doğrudan bağlantı kurun'
      },
      property: {
        perMonth: 'aylık',
        bedrooms: 'yatak odası',
        bathrooms: 'banyo',
        furnished: 'Mobilyalı',
        unfurnished: 'Mobilyasız',
        petsAllowed: 'Evcil Hayvan İzni',
        parking: 'Otopark',
        balconyGarden: 'Balkon/Bahçe',
        energyRating: 'Enerji Sınıfı',
        available: 'Müsait tarih',
        requestViewing: 'Görüşme Talep Et',
        contactAgent: 'Acente ile İletişim',
        saveToFavorites: 'Favorilere Ekle',
        share: 'Paylaş',
        features: 'Özellikler',
        description: 'Açıklama',
        location: 'Konum',
        nearby: 'Yakında'
      },
      pricing: {
        title: 'Planlar ve Fiyatlar',
        headline: 'Size uygun planı seçin',
        subtitle: 'İstediğiniz zaman yükseltin veya iptal edin.',
        individual: 'Bireysel',
        agents: 'Emlakçılar ve Ajanslar',
        addons: 'Eklentiler',
        boost: 'Boost',
        boostDesc: '7 gün boyunca aramada daha üst sıralar, Boosted etiketi.',
        spotlight: 'Spotlight',
        spotlightDesc: '7 gün boyunca ana sayfa ve şehir aramasında öne çıkma.',
        maxListings: 'Maksimum aktif ilan',
        unlimited: 'Sınırsız',
        choose: 'Planı Seç'
      },
      pricingPlans: {
        intro: 'Homzy, Avrupa genelinde gayrimenkul ilanları için dijital planlar sunar. Mülk satışı veya aracılık yapmayız; her plan, ödeme sonrası otomatik aktive edilen dijital bir hizmettir.',
        basic: {
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
        premium: {
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
        professional: {
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
        unlimited: {
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
      },
      filters: {
        filters: 'Filtreler',
        location: 'Konum',
        priceRange: 'Fiyat Aralığı',
        propertyType: 'Gayrimenkul Tipi',
        flat: 'Daire',
        house: 'Ev',
        studio: 'Stüdyo',
        rooms: 'Oda Sayısı',
        furnished: 'Mobilyalı',
        unfurnished: 'Mobilyasız',
        petsAllowed: 'Evcil Hayvan İzni',
        parking: 'Otopark',
        balconyGarden: 'Balkon/Bahçe',
        clearAll: 'Temizle',
        apply: 'Filtreleri Uygula',
        studentFriendly: 'Öğrenci Dostu'
      },
      favorites: {
        title: 'Favorilerim',
        empty: 'Henüz favori yok',
        emptyDesc: 'Burada görmek için gayrimenkulleri kaydetmeye başlayın'
      },
      auth: {
        signIn: 'Giriş yap',
        signInTitle: 'Homzy\'ye Hoş Geldiniz',
        signInDesc: 'Favorileri kaydetmek ve görüşmeleri yönetmek için hesabına giriş yap',
        registerTitle: 'Hesap oluştur',
        registerDesc: 'Tüm özelliklere Homzy hesabıyla erişin',
        email: 'E-posta',
        name: 'İsim',
        password: 'Şifre',
        register: 'Kayıt ol',
        noAccount: 'Hesabın yok mu?',
        haveAccount: 'Zaten hesabın var mı?',
        loggedIn: 'Başarıyla giriş yaptın',
        registered: 'Hesap oluşturuldu ve giriş yapıldı',
        error: 'Bir hata oluştu',
        loading: 'Lütfen bekleyin...'
      },
      footer: {
        tagline: 'Yaşamayı seveceğiniz alanı bulun',
        privacy: 'Gizlilik Politikası',
        terms: 'Kullanım Koşulları',
        refund: 'İade Politikası',
        cookies: 'Çerez Politikası',
        rights: 'Tüm hakları saklıdır'
      },
      dashboard: {
        title: 'Kontrol Panelim',
        myListings: 'İlanlarım',
        addListing: 'İlan Ekle',
        editListing: 'İlanı Düzenle',
        createdSuccess: 'İlan başarıyla oluşturuldu',
        updatedSuccess: 'İlan başarıyla güncellendi',
        deletedSuccess: 'İlan başarıyla silindi',
        areYouSureDelete: 'Bu ilanı silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.',
        noListings: 'Henüz ilan yok',
        addFirstListing: 'Başlamak için ilk ilanınızı oluşturun'
      },
      listingForm: {
        details: 'Detaylar',
        media: 'Fotoğraflar ve Medya',
        title: 'Başlık',
        description: 'Açıklama',
        price: 'Aylık Fiyat',
        currency: 'Para Birimi',
        address: 'Sokak Adresi',
        city: 'Şehir',
        postcode: 'Posta Kodu',
        country: 'Ülke',
        bedrooms: 'Yatak Odası',
        bathrooms: 'Banyo',
        size: 'Boyut (m²)',
        propertyType: 'Gayrimenkul Tipi',
        furnished: 'Mobilyalı',
        availabilityDate: 'Müsait Tarih',
        energyRating: 'Enerji Sınıfı',
        features: 'Özellikler',
        photos: 'Gayrimenkul Fotoğrafları',
        floorplan: 'Kat Planı',
        uploadPhotos: 'Fotoğrafları sürükleyip bırakın veya tıklayın',
        dropPhotos: 'Fotoğrafları buraya bırakın',
        addFloorplan: 'Kat planı ekle (PDF veya resim)',
        dropFloorplan: 'Kat planını buraya bırakın',
        next: 'Sonraki: Fotoğraflar',
        back: 'Geri',
        cancel: 'İptal',
        create: 'İlan Oluştur',
        update: 'İlanı Güncelle',
        submitting: 'Kaydediliyor...',
        name: 'İsim',
        email: 'E-posta',
        phone: 'Telefon',
        preferredDate: 'Tercih Edilen Tarih',
        message: 'Mesaj',
        student: 'Öğrenci Dostu'
      },
      validation: {
        required: 'Gerekli',
        titleLength: 'Başlık 10-100 karakter olmalıdır',
        descriptionLength: 'Açıklama 50-2000 karakter olmalıdır',
        invalidPrice: 'Fiyat pozitif olmalıdır',
        invalidNumber: 'Geçerli bir sayı olmalıdır',
        invalidDate: 'Geçerli bir tarih olmalıdır',
        invalidCurrency: 'Geçersiz para birimi',
        imagesRequired: 'En az 1 fotoğraf gereklidir',
        regionNotAllowed: 'Sadece İngiltere ve AB ilanlarına izin verilir',
        fixErrors: 'Göndermeden önce lütfen hataları düzeltin',
        submitError: 'İlan kaydedilemedi'
      },
      filterBar: {
        rent: 'Kiralık',
        buy: 'Satılık',
        propertyType: 'Gayrimenkul Tipi',
        allTypes: 'Tüm Tipler',
        rooms: 'Oda',
        anyRooms: 'Tümü',
        minPrice: 'Min',
        maxPrice: 'Maks',
        locationPlaceholder: 'Şehir, posta kodu, adres',
        filters: 'Filtreler',
        advancedFilters: 'Gelişmiş Filtreler',
        search: 'Ara'
      },
      quickChips: {
        furnished: 'Mobilyalı',
        garden: 'Bahçe/Balkon',
        parking: 'Otopark',
        petFriendly: 'Evcil Hayvan Dostu',
        newBuild: 'Sıfır',
        highEPC: 'Yüksek EPC',
        studentFriendly: 'Öğrenci Dostu'
      }
    }
  },
  'fr-FR': {
    translation: {
      nav: {
        home: 'Accueil',
        search: 'Rechercher',
        favorites: 'Favoris',
        login: 'Se connecter',
        logout: 'Se déconnecter',
        dashboard: 'Tableau de bord'
      },
      hero: {
        title: 'Trouvez l’espace où vous aimerez vivre',
        subtitle: 'Découvrez votre maison idéale au Royaume-Uni et en Europe',
        searchPlaceholder: 'Ville, code postal ou adresse',
        minPrice: 'Prix min',
        maxPrice: 'Prix max',
        bedrooms: 'Chambres',
        search: 'Rechercher'
      },
      featured: {
        title: 'Propriétés en vedette',
        viewAll: 'Voir toutes les propriétés'
      },
      howItWorks: {
        title: 'Comment ça marche',
        step1: 'Rechercher',
        step1Desc: 'Parcourez des milliers de propriétés',
        step2: 'Voir',
        step2Desc: 'Réservez une visite qui vous convient',
        step3: 'Contacter',
        step3Desc: 'Contactez directement les agents'
      },
      property: {
        perMonth: 'par mois',
        bedrooms: 'chambres',
        bathrooms: 'salles de bain',
        furnished: 'Meublé',
        unfurnished: 'Non meublé',
        petsAllowed: 'Animaux acceptés',
        parking: 'Parking',
        balconyGarden: 'Balcon/Jardin',
        energyRating: 'Classe énergétique',
        available: 'Disponible à partir de',
        requestViewing: 'Demander une visite',
        contactAgent: 'Contacter l’agent',
        saveToFavorites: 'Ajouter aux favoris',
        share: 'Partager',
        features: 'Caractéristiques',
        description: 'Description',
        location: 'Emplacement',
        nearby: 'À proximité'
      },
      pricing: {
        title: 'Plans et tarifs',
        headline: 'Choisissez le plan qui vous convient',
        subtitle: 'Changez ou annulez à tout moment.',
        individual: 'Pour les particuliers',
        agents: 'Pour les agents et agences',
        addons: 'Options',
        boost: 'Boost',
        boostDesc: 'Meilleur classement pendant 7 jours avec badge Boosted.',
        spotlight: 'Spotlight',
        spotlightDesc: 'Mise en avant sur la page d’accueil et en haut des recherches pendant 7 jours.',
        maxListings: 'Nombre maximum d’annonces actives',
        unlimited: 'Illimité',
        choose: 'Choisir ce plan'
      },
      filters: {
        filters: 'Filtres',
        location: 'Emplacement',
        priceRange: 'Fourchette de prix',
        propertyType: 'Type de bien',
        flat: 'Appartement',
        house: 'Maison',
        studio: 'Studio',
        rooms: 'Pièces',
        furnished: 'Meublé',
        unfurnished: 'Non meublé',
        petsAllowed: 'Animaux acceptés',
        parking: 'Parking',
        balconyGarden: 'Balcon/Jardin',
        clearAll: 'Tout effacer',
        apply: 'Appliquer',
        studentFriendly: 'Adapté aux étudiants'
      },
      favorites: {
        title: 'Mes favoris',
        empty: 'Aucun favori pour le moment',
        emptyDesc: 'Ajoutez des propriétés pour les voir ici'
      },
      auth: {
        signIn: 'Se connecter',
        signInTitle: 'Bienvenue sur Homzy',
        signInDesc: 'Connectez-vous pour enregistrer des favoris et gérer les visites',
        registerTitle: 'Créer votre compte',
        registerDesc: 'Accédez à toutes les fonctionnalités avec votre compte Homzy',
        email: 'E-mail',
        name: 'Nom',
        password: 'Mot de passe',
        register: 'Créer un compte',
        noAccount: 'Pas encore de compte ?',
        haveAccount: 'Vous avez déjà un compte ?',
        loggedIn: 'Connexion réussie',
        registered: 'Compte créé et connecté',
        error: 'Une erreur est survenue',
        loading: 'Veuillez patienter...'
      },
      footer: {
        tagline: 'Trouvez l’espace dans lequel vous aimerez vivre',
        privacy: 'Politique de confidentialité',
        terms: 'Conditions d’utilisation',
        refund: 'Politique de remboursement',
        cookies: 'Politique relative aux cookies',
        rights: 'Tous droits réservés'
      },
      dashboard: {
        title: 'Mon Tableau de Bord',
        myListings: 'Mes Annonces',
        addListing: 'Ajouter une Annonce',
        editListing: 'Modifier l’Annonce',
        createdSuccess: 'Annonce créée avec succès',
        updatedSuccess: 'Annonce mise à jour avec succès',
        deletedSuccess: 'Annonce supprimée avec succès',
        areYouSureDelete: 'Êtes-vous sûr de vouloir supprimer cette annonce ? Cette action est irréversible.',
        noListings: 'Aucune annonce pour le moment',
        addFirstListing: 'Créez votre première annonce pour commencer'
      },
      listingForm: {
        details: 'Détails',
        media: 'Photos et Médias',
        title: 'Titre',
        description: 'Description',
        price: 'Prix par Mois',
        currency: 'Devise',
        address: 'Adresse',
        city: 'Ville',
        postcode: 'Code Postal',
        country: 'Pays',
        bedrooms: 'Chambres',
        bathrooms: 'Salles de Bain',
        size: 'Surface (m²)',
        propertyType: 'Type de Bien',
        furnished: 'Meublé',
        availabilityDate: 'Disponible à partir de',
        energyRating: 'Classe énergétique',
        features: 'Caractéristiques',
        photos: 'Photos du Bien',
        floorplan: 'Plan',
        uploadPhotos: 'Glissez-déposez ou cliquez pour parcourir',
        dropPhotos: 'Déposez les photos ici',
        addFloorplan: 'Ajouter un plan (PDF ou image)',
        dropFloorplan: 'Déposez le plan ici',
        next: 'Suivant : Photos',
        back: 'Retour',
        cancel: 'Annuler',
        create: 'Créer l’Annonce',
        update: 'Mettre à Jour',
        submitting: 'Enregistrement...',
        name: 'Nom',
        email: 'Email',
        phone: 'Téléphone',
        preferredDate: 'Date souhaitée',
        message: 'Message',
        student: 'Adapté aux étudiants'
      },
      validation: {
        required: 'Requis',
        titleLength: 'Le titre doit contenir 10-100 caractères',
        descriptionLength: 'La description doit contenir 50-2000 caractères',
        invalidPrice: 'Le prix doit être positif',
        invalidNumber: 'Doit être un nombre valide',
        invalidDate: 'Doit être une date valide',
        invalidCurrency: 'Devise invalide',
        imagesRequired: 'Au moins 1 photo est requise',
        regionNotAllowed: 'Seules les annonces Royaume-Uni & UE sont autorisées',
        fixErrors: 'Veuillez corriger les erreurs avant de soumettre',
        submitError: 'Échec de l’enregistrement de l’annonce'
      },
      filterBar: {
        rent: 'Location',
        buy: 'Achat',
        propertyType: 'Type de Bien',
        allTypes: 'Tous Types',
        rooms: 'Pièces',
        anyRooms: 'Tous',
        minPrice: 'Min',
        maxPrice: 'Max',
        locationPlaceholder: 'Ville, code postal, adresse',
        filters: 'Filtres',
        advancedFilters: 'Filtres Avancés',
        search: 'Rechercher'
      },
      quickChips: {
        furnished: 'Meublé',
        garden: 'Jardin/Balcon',
        parking: 'Parking',
        petFriendly: 'Animaux Acceptés',
        newBuild: 'Neuf',
        highEPC: 'EPC élevé',
        studentFriendly: 'Adapté aux étudiants'
      }
    }
  },
  'de-DE': {
    translation: {
      nav: {
        home: 'Startseite',
        search: 'Suchen',
        favorites: 'Favoriten',
        login: 'Anmelden',
        logout: 'Abmelden',
        dashboard: 'Dashboard'
      },
      hero: {
        title: 'Finden Sie den Raum, in dem Sie gerne leben',
        subtitle: 'Entdecken Sie Ihr perfektes Zuhause in Großbritannien und Europa',
        searchPlaceholder: 'Ort, Postleitzahl oder Adresse',
        minPrice: 'Min. Preis',
        maxPrice: 'Max. Preis',
        bedrooms: 'Schlafzimmer',
        search: 'Suchen'
      },
      featured: {
        title: 'Ausgewählte Immobilien',
        viewAll: 'Alle Immobilien ansehen'
      },
      howItWorks: {
        title: 'So funktioniert es',
        step1: 'Suchen',
        step1Desc: 'Durchsuchen Sie Tausende von Immobilien',
        step2: 'Besichtigen',
        step2Desc: 'Buchen Sie eine passende Besichtigung',
        step3: 'Kontakt',
        step3Desc: 'Kontaktieren Sie Makler direkt'
      },
      property: {
        perMonth: 'pro Monat',
        bedrooms: 'Schlafzimmer',
        bathrooms: 'Badezimmer',
        furnished: 'Möbliert',
        unfurnished: 'Unmöbliert',
        petsAllowed: 'Haustiere erlaubt',
        parking: 'Parkplatz',
        balconyGarden: 'Balkon/Garten',
        energyRating: 'Energieklasse',
        available: 'Verfügbar ab',
        requestViewing: 'Besichtigung anfragen',
        contactAgent: 'Makler kontaktieren',
        saveToFavorites: 'Zu Favoriten hinzufügen',
        share: 'Teilen',
        features: 'Merkmale',
        description: 'Beschreibung',
        location: 'Standort',
        nearby: 'In der Nähe'
      },
      pricing: {
        title: 'Pläne & Preise',
        headline: 'Wählen Sie den passenden Tarif',
        subtitle: 'Upgrade oder Kündigung jederzeit möglich.',
        individual: 'Für Privatnutzer',
        agents: 'Für Makler & Agenturen',
        addons: 'Zusatzoptionen',
        boost: 'Boost',
        boostDesc: 'Besseres Ranking 7 Tage lang mit Boosted-Badge.',
        spotlight: 'Spotlight',
        spotlightDesc: '7 Tage lang auf Homepage und Stadtsuche hervorgehoben.',
        maxListings: 'Max. aktive Inserate',
        unlimited: 'Unbegrenzt',
        choose: 'Plan wählen'
      },
      filters: {
        filters: 'Filter',
        location: 'Standort',
        priceRange: 'Preisspanne',
        propertyType: 'Immobilientyp',
        flat: 'Wohnung',
        house: 'Haus',
        studio: 'Studio',
        rooms: 'Zimmer',
        furnished: 'Möbliert',
        unfurnished: 'Unmöbliert',
        petsAllowed: 'Haustiere erlaubt',
        parking: 'Parkplatz',
        balconyGarden: 'Balkon/Garten',
        clearAll: 'Alles löschen',
        apply: 'Anwenden',
        studentFriendly: 'Studentenfreundlich'
      },
      favorites: {
        title: 'Meine Favoriten',
        empty: 'Noch keine Favoriten',
        emptyDesc: 'Speichern Sie Immobilien, um sie hier zu sehen'
      },
      auth: {
        signIn: 'Anmelden',
        signInTitle: 'Willkommen bei Homzy',
        signInDesc: 'Melden Sie sich an, um Favoriten zu speichern und Besichtigungen zu verwalten',
        registerTitle: 'Konto erstellen',
        registerDesc: 'Nutzen Sie alle Funktionen mit Ihrem Homzy-Konto',
        email: 'E-Mail',
        name: 'Name',
        password: 'Passwort',
        register: 'Registrieren',
        noAccount: 'Noch kein Konto?',
        haveAccount: 'Bereits ein Konto?',
        loggedIn: 'Erfolgreich angemeldet',
        registered: 'Konto erstellt und angemeldet',
        error: 'Etwas ist schiefgelaufen',
        loading: 'Bitte warten...'
      },
      footer: {
        tagline: 'Finden Sie den Raum, in dem Sie gerne leben werden',
        privacy: 'Datenschutzrichtlinie',
        terms: 'Nutzungsbedingungen',
        refund: 'Rückerstattungsrichtlinie',
        cookies: 'Cookie-Richtlinie',
        rights: 'Alle Rechte vorbehalten'
      },
      dashboard: {
        title: 'Mein Dashboard',
        myListings: 'Meine Inserate',
        addListing: 'Inserat hinzufügen',
        editListing: 'Inserat bearbeiten',
        createdSuccess: 'Inserat erfolgreich erstellt',
        updatedSuccess: 'Inserat erfolgreich aktualisiert',
        deletedSuccess: 'Inserat erfolgreich gelöscht',
        areYouSureDelete: 'Sind Sie sicher, dass Sie dieses Inserat löschen möchten? Dies kann nicht rückgängig gemacht werden.',
        noListings: 'Noch keine Inserate',
        addFirstListing: 'Erstellen Sie Ihr erstes Inserat, um zu beginnen'
      },
      listingForm: {
        details: 'Details',
        media: 'Fotos & Medien',
        title: 'Titel',
        description: 'Beschreibung',
        price: 'Preis pro Monat',
        currency: 'Währung',
        address: 'Straßenadresse',
        city: 'Stadt',
        postcode: 'Postleitzahl',
        country: 'Land',
        bedrooms: 'Schlafzimmer',
        bathrooms: 'Badezimmer',
        size: 'Größe (m²)',
        propertyType: 'Immobilientyp',
        furnished: 'Möbliert',
        availabilityDate: 'Verfügbar ab',
        energyRating: 'Energieklasse',
        features: 'Merkmale',
        photos: 'Immobilienfotos',
        floorplan: 'Grundriss',
        uploadPhotos: 'Fotos hochladen oder klicken',
        dropPhotos: 'Fotos hier ablegen',
        addFloorplan: 'Grundriss hinzufügen (PDF oder Bild)',
        dropFloorplan: 'Grundriss hier ablegen',
        next: 'Weiter: Fotos',
        back: 'Zurück',
        cancel: 'Abbrechen',
        create: 'Inserat erstellen',
        update: 'Inserat aktualisieren',
        submitting: 'Wird gespeichert...',
        name: 'Name',
        email: 'E-Mail',
        phone: 'Telefon',
        preferredDate: 'Bevorzugtes Datum',
        message: 'Nachricht',
        student: 'Studentenfreundlich'
      },
      validation: {
        required: 'Erforderlich',
        titleLength: 'Titel muss 10-100 Zeichen lang sein',
        descriptionLength: 'Beschreibung muss 50-2000 Zeichen lang sein',
        invalidPrice: 'Preis muss positiv sein',
        invalidNumber: 'Muss eine gültige Zahl sein',
        invalidDate: 'Muss ein gültiges Datum sein',
        invalidCurrency: 'Ungültige Währung',
        imagesRequired: 'Mindestens 1 Foto ist erforderlich',
        regionNotAllowed: 'Nur UK & EU Inserate sind erlaubt',
        fixErrors: 'Bitte Fehler korrigieren',
        submitError: 'Speichern fehlgeschlagen'
      },
      filterBar: {
        rent: 'Miete',
        buy: 'Kauf',
        propertyType: 'Immobilientyp',
        allTypes: 'Alle Typen',
        rooms: 'Zimmer',
        anyRooms: 'Alle',
        minPrice: 'Min',
        maxPrice: 'Max',
        locationPlaceholder: 'Stadt, PLZ, Adresse',
        filters: 'Filter',
        advancedFilters: 'Erweiterte Filter',
        search: 'Suchen'
      },
      quickChips: {
        furnished: 'Möbliert',
        garden: 'Garten/Balkon',
        parking: 'Parkplatz',
        petFriendly: 'Haustierfreundlich',
        newBuild: 'Neubau',
        highEPC: 'Hohe EPC',
        studentFriendly: 'Studentenfreundlich'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en-GB',
    supportedLngs: ['en-GB', 'tr-TR', 'fr-FR', 'de-DE'],
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
