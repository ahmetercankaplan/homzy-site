import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Bed, Bath, Maximize, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const PropertyCard = ({ property }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const formatPrice = (price, currency) => {
    const locale = i18n.language === 'en-GB' ? 'en-GB' : i18n.language.substring(0, 2);
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      onClick={() => navigate(`/property/${property.id}`)}
      data-testid={`property-card-${property.id}`}
      className="property-card bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md cursor-pointer border border-gray-100 transition-shadow"
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={property.photos[0]}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-3 left-3 space-y-2">
          {property.spotlight_expires_at && (
            <div className="bg-gradient-to-r from-purple-500 to-teal-500 text-white px-2.5 py-0.5 rounded-full text-xs font-semibold shadow">
              Featured
            </div>
          )}
          {property.boost_expires_at && (
            <div className="bg-yellow-400 text-gray-900 px-2.5 py-0.5 rounded-full text-xs font-semibold shadow">
              Boosted
            </div>
          )}
          {property.featured && !property.spotlight_expires_at && (
            <div className="bg-indigo-500 text-white px-2.5 py-0.5 rounded-full text-xs font-semibold shadow">
              Featured
            </div>
          )}
        </div>
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-sm font-bold text-gray-900 shadow-sm">
          {formatPrice(property.price, property.currency)}
          <span className="text-xs text-gray-500 ml-1">/{t('property.perMonth')}</span>
        </div>
        {property.energy_rating && (
          <div className="absolute bottom-3 left-3 bg-green-500 text-white px-2 py-0.5 rounded text-xs font-semibold">
            EPC {property.energy_rating}
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-bold text-base mb-1.5 text-gray-900 line-clamp-2 leading-tight">{property.title}</h3>
        <div className="flex items-center text-xs text-gray-600 mb-3">
          <MapPin className="w-3.5 h-3.5 mr-1 flex-shrink-0" />
          <span className="line-clamp-1">{property.city}</span>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-700">
          <div className="flex items-center space-x-1">
            <Bed className="w-4 h-4 text-purple-600" />
            <span>{property.bedrooms}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Bath className="w-4 h-4 text-teal-600" />
            <span>{property.bathrooms}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Maximize className="w-4 h-4 text-gray-600" />
            <span>{property.size_m2}m²</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
