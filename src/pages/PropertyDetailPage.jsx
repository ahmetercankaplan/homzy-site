import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Heart, Share2, Bed, Bath, Maximize, Calendar, MapPin, User, Mail, Phone } from 'lucide-react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { toast } from 'sonner';
import { useAuthStore } from '../store';
import { motion } from 'framer-motion';
import { API_BASE_URL as API } from '../lib/api';

const PropertyDetailPage = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const [viewingForm, setViewingForm] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
    message: '',
    preferred_date: ''
  });

  useEffect(() => {
    fetchProperty();
    if (user) checkFavorite();
  }, [id, user]);

  const fetchProperty = async () => {
    try {
      const res = await axios.get(`${API}/properties/${id}`);
      setProperty(res.data);
    } catch (error) {
      console.error('Failed to fetch property:', error);
      navigate('/search');
    } finally {
      setLoading(false);
    }
  };

  const checkFavorite = async () => {
    try {
      const res = await axios.get(`${API}/favorites`);
      setIsFavorite(res.data.some(p => p.id === id));
    } catch (error) {
      console.error('Failed to check favorites:', error);
    }
  };

  const toggleFavorite = async () => {
    if (!user) {
      toast.error('Please sign in to save favorites');
      return;
    }

    try {
      if (isFavorite) {
        await axios.delete(`${API}/favorites/${id}`);
        setIsFavorite(false);
        toast.success('Removed from favorites');
      } else {
        await axios.post(`${API}/favorites/${id}`);
        setIsFavorite(true);
        toast.success('Added to favorites');
      }
    } catch (error) {
      toast.error('Failed to update favorites');
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: property.description,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard');
    }
  };

  const handleViewingRequest = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API}/viewing-requests`, {
        property_id: id,
        ...viewingForm
      });
      toast.success('Viewing request submitted successfully!');
      setViewingForm({ name: user?.name || '', email: user?.email || '', phone: '', message: '', preferred_date: '' });
    } catch (error) {
      toast.error('Failed to submit viewing request');
    }
  };

  const formatPrice = (price, currency) => {
    const locale = i18n.language === 'en-GB' ? 'en-GB' : i18n.language.substring(0, 2);
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0
    }).format(price);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="animate-pulse space-y-8">
            <div className="h-96 bg-gray-200 rounded-2xl"></div>
            <div className="h-12 bg-gray-200 rounded w-3/4"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!property) return null;

  return (
    <div data-testid="property-detail-page" className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
        >
          <div className="col-span-1 md:col-span-2 h-96 rounded-2xl overflow-hidden shadow-xl">
            <img
              src={property.photos[0]}
              alt={property.title}
              data-testid="property-main-image"
              className="w-full h-full object-cover"
            />
          </div>
          {property.photos.slice(1, 5).map((photo, index) => (
            <div key={index} className="h-48 rounded-xl overflow-hidden shadow-lg">
              <img src={photo} alt={`${property.title} ${index + 2}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 data-testid="property-title" className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span data-testid="property-address">{property.address}</span>
                  </div>
                  <div className="flex items-center space-x-2 mt-2">
                    {property.spotlight_expires_at && (
                      <span className="inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-700">
                        Featured
                      </span>
                    )}
                    {property.boost_expires_at && (
                      <span className="inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-700">
                        Boosted
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={toggleFavorite}
                    data-testid="favorite-button"
                    className={`rounded-full ${isFavorite ? 'bg-red-50 text-red-600' : ''}`}
                  >
                    <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleShare}
                    data-testid="share-button"
                    className="rounded-full"
                  >
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between py-4 border-y border-gray-200">
                <div className="text-3xl font-bold text-purple-600" data-testid="property-price">
                  {formatPrice(property.price, property.currency)}
                  <span className="text-base text-gray-500 ml-2">/{t('property.perMonth')}</span>
                </div>
                <div className="flex space-x-6">
                  <div className="flex items-center space-x-2">
                    <Bed className="w-5 h-5 text-purple-600" />
                    <span className="font-semibold">{property.bedrooms}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bath className="w-5 h-5 text-teal-600" />
                    <span className="font-semibold">{property.bathrooms}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Maximize className="w-5 h-5 text-gray-600" />
                    <span className="font-semibold">{property.size_m2} m²</span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h2 className="text-xl font-bold mb-3">{t('property.description')}</h2>
                <p data-testid="property-description" className="text-gray-700 leading-relaxed">{property.description}</p>
              </div>

              <div className="mt-6">
                <h2 className="text-xl font-bold mb-3">{t('property.features')}</h2>
                <div className="grid grid-cols-2 gap-3">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-gray-700">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                  {property.furnished && (
                    <div className="flex items-center space-x-2 text-gray-700">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span>{t('property.furnished')}</span>
                    </div>
                  )}
                  {property.pets_allowed && (
                    <div className="flex items-center space-x-2 text-gray-700">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span>{t('property.petsAllowed')}</span>
                    </div>
                  )}
                  {property.parking && (
                    <div className="flex items-center space-x-2 text-gray-700">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span>{t('property.parking')}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h2 className="text-xl font-bold mb-4">{t('property.location')}</h2>
              <div className="h-80 rounded-xl overflow-hidden">
                <MapContainer
                  center={[property.coordinates.lat, property.coordinates.lng]}
                  zoom={15}
                  style={{ height: '100%', width: '100%' }}
                  data-testid="property-detail-map"
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[property.coordinates.lat, property.coordinates.lng]} />
                </MapContainer>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="sticky top-20 space-y-6"
            >
              {/* Agent Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-bold text-lg mb-4">Agent Information</h3>
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src={property.agent_info.picture}
                    alt={property.agent_info.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{property.agent_info.name}</p>
                    <p className="text-sm text-gray-600">{property.agent_info.email}</p>
                  </div>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button data-testid="request-viewing-button" className="w-full bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {t('property.requestViewing')}
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{t('property.requestViewing')}</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleViewingRequest} className="space-y-4">
                      <div>
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          value={viewingForm.name}
                          onChange={(e) => setViewingForm({ ...viewingForm, name: e.target.value })}
                          required
                          data-testid="viewing-name-input"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={viewingForm.email}
                          onChange={(e) => setViewingForm({ ...viewingForm, email: e.target.value })}
                          required
                          data-testid="viewing-email-input"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          value={viewingForm.phone}
                          onChange={(e) => setViewingForm({ ...viewingForm, phone: e.target.value })}
                          required
                          data-testid="viewing-phone-input"
                        />
                      </div>
                      <div>
                        <Label htmlFor="date">Preferred Date</Label>
                        <Input
                          id="date"
                          type="date"
                          value={viewingForm.preferred_date}
                          onChange={(e) => setViewingForm({ ...viewingForm, preferred_date: e.target.value })}
                          data-testid="viewing-date-input"
                        />
                      </div>
                      <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          value={viewingForm.message}
                          onChange={(e) => setViewingForm({ ...viewingForm, message: e.target.value })}
                          rows={3}
                          data-testid="viewing-message-input"
                        />
                      </div>
                      <Button type="submit" data-testid="submit-viewing-button" className="w-full bg-gradient-to-r from-purple-500 to-teal-500">
                        Submit Request
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Property Details */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-bold text-lg mb-4">Property Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Property Type</span>
                    <span className="font-semibold capitalize">{property.property_type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Available From</span>
                    <span className="font-semibold">{property.availability_date}</span>
                  </div>
                  {property.energy_rating && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Energy Rating</span>
                      <span className="font-semibold">{property.energy_rating}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PropertyDetailPage;
