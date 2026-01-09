import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Upload, X, Image as ImageIcon, FileText, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import { Alert, AlertDescription } from './ui/alert';
import { API_BASE_URL as API } from '../lib/api';

// UK + EU country whitelist
const ALLOWED_COUNTRIES = {
  GB: { name: 'United Kingdom', currency: 'EUR' },
  AT: { name: 'Austria', currency: 'EUR' },
  BE: { name: 'Belgium', currency: 'EUR' },
  BG: { name: 'Bulgaria', currency: 'EUR' },
  HR: { name: 'Croatia', currency: 'EUR' },
  CY: { name: 'Cyprus', currency: 'EUR' },
  CZ: { name: 'Czech Republic', currency: 'EUR' },
  DK: { name: 'Denmark', currency: 'EUR' },
  EE: { name: 'Estonia', currency: 'EUR' },
  FI: { name: 'Finland', currency: 'EUR' },
  FR: { name: 'France', currency: 'EUR' },
  DE: { name: 'Germany', currency: 'EUR' },
  GR: { name: 'Greece', currency: 'EUR' },
  HU: { name: 'Hungary', currency: 'EUR' },
  IE: { name: 'Ireland', currency: 'EUR' },
  IT: { name: 'Italy', currency: 'EUR' },
  LV: { name: 'Latvia', currency: 'EUR' },
  LT: { name: 'Lithuania', currency: 'EUR' },
  LU: { name: 'Luxembourg', currency: 'EUR' },
  MT: { name: 'Malta', currency: 'EUR' },
  NL: { name: 'Netherlands', currency: 'EUR' },
  PL: { name: 'Poland', currency: 'EUR' },
  PT: { name: 'Portugal', currency: 'EUR' },
  RO: { name: 'Romania', currency: 'EUR' },
  SK: { name: 'Slovakia', currency: 'EUR' },
  SI: { name: 'Slovenia', currency: 'EUR' },
  ES: { name: 'Spain', currency: 'EUR' },
  SE: { name: 'Sweden', currency: 'EUR' }
};

const ListingForm = ({ editingListing, onSuccess, onCancel, publishDisabled = false, usage }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('details');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [photos, setPhotos] = useState([]);
  const [floorplan, setFloorplan] = useState(null);
  const [currencyLocked, setCurrencyLocked] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    currency: 'EUR',
    address: '',
    city: '',
    postcode: '',
    country: 'GB',
    coordinates: { lat: 51.5074, lng: -0.1278 },
    size_m2: '',
    bedrooms: 1,
    bathrooms: 1,
    property_type: 'flat',
    furnished: false,
    pets_allowed: false,
    parking: false,
    balcony_garden: false,
    student_friendly: false,
    availability_date: '',
    energy_rating: '',
    features: []
  });

  useEffect(() => {
    if (editingListing) {
      setFormData({
        title: editingListing.title,
        description: editingListing.description,
        price: editingListing.price,
        currency: editingListing.currency,
        address: editingListing.address,
        city: editingListing.city,
        postcode: editingListing.postcode || '',
        country: editingListing.country,
        coordinates: editingListing.coordinates,
        size_m2: editingListing.size_m2,
        bedrooms: editingListing.bedrooms,
        bathrooms: editingListing.bathrooms,
        property_type: editingListing.property_type,
        furnished: editingListing.furnished,
        pets_allowed: editingListing.pets_allowed,
        parking: editingListing.parking,
        balcony_garden: editingListing.balcony_garden,
        student_friendly: editingListing.student_friendly || false,
        availability_date: editingListing.availability_date,
        energy_rating: editingListing.energy_rating || '',
        features: editingListing.features || []
      });
      setPhotos(editingListing.photos?.map(url => ({ url, preview: url })) || []);
      if (editingListing.floorplan) {
        setFloorplan({ url: editingListing.floorplan, preview: editingListing.floorplan });
      }
    }
  }, [editingListing]);

  // Auto-set currency based on country
  useEffect(() => {
    if (formData.country && ALLOWED_COUNTRIES[formData.country]) {
      setFormData(prev => ({
        ...prev,
        currency: ALLOWED_COUNTRIES[formData.country].currency
      }));
      setCurrencyLocked(false);
    }
  }, [formData.country]);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const geocodeAddress = async () => {
    if (!formData.address || !formData.city) return true;

    try {
      const query = `${formData.address}, ${formData.city}, ${formData.postcode || ''}`;
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=1`
      );
      const data = await response.json();

      if (data && data.length > 0) {
        const { lat, lon } = data[0];
        setFormData(prev => ({
          ...prev,
          coordinates: { lat: parseFloat(lat), lng: parseFloat(lon) }
        }));
        return true;
      } else {
        toast.warning('Could not geocode address. Using default coordinates.');
        return true;
      }
    } catch (error) {
      console.error('Geocoding error:', error);
      return true;
    }
  };

  const onPhotoDrop = (acceptedFiles) => {
    const newPhotos = acceptedFiles.slice(0, 15 - photos.length).map(file => ({
      file,
      preview: URL.createObjectURL(file)
    }));
    setPhotos(prev => [...prev, ...newPhotos]);
  };

  const onFloorplanDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setFloorplan({
        file,
        preview: URL.createObjectURL(file)
      });
    }
  };

  const photoDropzone = useDropzone({
    onDrop: onPhotoDrop,
    accept: { 'image/*': ['.jpg', '.jpeg', '.png', '.webp'] },
    maxSize: 5242880, // 5MB
    multiple: true
  });

  const floorplanDropzone = useDropzone({
    onDrop: onFloorplanDrop,
    accept: { 'image/*': ['.jpg', '.jpeg', '.png', '.pdf'] },
    maxSize: 10485760, // 10MB
    multiple: false
  });

  const removePhoto = (index) => {
    setPhotos(prev => prev.filter((_, i) => i !== index));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title || formData.title.length < 10 || formData.title.length > 100) {
      newErrors.title = t('validation.titleLength', 'Title must be 10-100 characters');
    }
    if (!formData.description || formData.description.length < 50 || formData.description.length > 2000) {
      newErrors.description = t('validation.descriptionLength', 'Description must be 50-2000 characters');
    }
    if (!formData.price || formData.price <= 0) {
      newErrors.price = t('validation.invalidPrice', 'Price must be positive');
    }
    if (!formData.address) {
      newErrors.address = t('validation.required', 'Required');
    }
    if (!formData.city) {
      newErrors.city = t('validation.required', 'Required');
    }
    if (!formData.country) {
      newErrors.country = t('validation.required', 'Required');
    }
    if (formData.country && !ALLOWED_COUNTRIES[formData.country]) {
      newErrors.country = t('validation.regionNotAllowed', 'Only UK & EU listings are allowed');
    }
    if (photos.length === 0 && !editingListing) {
      newErrors.photos = t('validation.imagesRequired', 'At least 1 photo is required');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const uploadImages = async () => {
    // For demo purposes, using placeholder images
    // In production, you'd upload to cloud storage (S3, Cloudinary, etc.)
    const uploadedUrls = photos.map(photo => {
      if (photo.url) return photo.url; // Already uploaded
      return photo.preview; // Use preview for demo
    });

    return uploadedUrls;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (publishDisabled) {
      toast.error('You have reached the maximum number of active listings for your plan. Please upgrade.');
      return;
    }

    if (!validateForm()) {
      toast.error(t('validation.fixErrors', 'Please fix the errors before submitting'));
      return;
    }

    setIsSubmitting(true);

    try {
      // Geocode address
      await geocodeAddress();

      // Upload images
      const photoUrls = await uploadImages();

      const payload = {
        ...formData,
        price: parseFloat(formData.price),
        size_m2: formData.size_m2 ? parseFloat(formData.size_m2) : 50,
        bedrooms: parseInt(formData.bedrooms),
        bathrooms: parseInt(formData.bathrooms),
        location: `${formData.city}, ${ALLOWED_COUNTRIES[formData.country]?.name || formData.country}`,
        photos: photoUrls,
        floorplan: floorplan?.preview || null,
        features: [
          ...formData.features,
          ...(formData.pets_allowed ? ['Pets Allowed'] : []),
          ...(formData.parking ? ['Parking'] : []),
          ...(formData.balcony_garden ? ['Balcony/Garden'] : [])
        ].filter((v, i, a) => a.indexOf(v) === i)
      };

      let response;
      if (editingListing) {
        response = await axios.put(`${API}/listings/${editingListing.id}`, payload);
        toast.success(t('dashboard.updatedSuccess', 'Listing updated successfully'));
      } else {
        response = await axios.post(`${API}/properties`, payload);
        toast.success(t('dashboard.createdSuccess', 'Listing created successfully'));
      }

      // Redirect to property detail page
      const propertyId = response.data.id;
      setTimeout(() => {
        navigate(`/property/${propertyId}`);
        if (onSuccess) onSuccess();
      }, 500);
    } catch (error) {
      console.error('Submit error:', error);
      const errorMsg = error.response?.data?.detail || t('validation.submitError', 'Failed to save listing');
      toast.error(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} data-testid="listing-form" className="bg-white rounded-2xl shadow-lg p-8">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="details" data-testid="details-tab">{t('listingForm.details', 'Details')}</TabsTrigger>
          <TabsTrigger value="media" data-testid="media-tab">{t('listingForm.media', 'Photos & Media')}</TabsTrigger>
        </TabsList>

        {/* Details Tab */}
        <TabsContent value="details" className="space-y-6">
          {Object.keys(errors).length > 0 && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                {t('validation.fixErrors', 'Please fix the errors before submitting')}
              </AlertDescription>
            </Alert>
          )}

          {/* Title */}
          <div>
            <Label htmlFor="title">{t('listingForm.title', 'Title')} *</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => handleChange('title', e.target.value)}
              placeholder={t('listingForm.placeholderTitle', 'Beautiful 2-bedroom apartment...')}
              className={errors.title ? 'border-red-500' : ''}
              data-testid="title-input"
            />
            {errors.title && <p className="text-sm text-red-600 mt-1">{errors.title}</p>}
            <p className="text-xs text-gray-500 mt-1">{formData.title.length}/100 characters</p>
          </div>

          {/* Description */}
          <div>
            <Label htmlFor="description">{t('listingForm.description', 'Description')} *</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              placeholder={t('listingForm.placeholderDescription', 'Describe your property in detail...')}
              rows={6}
              className={errors.description ? 'border-red-500' : ''}
              data-testid="description-input"
            />
            {errors.description && <p className="text-sm text-red-600 mt-1">{errors.description}</p>}
            <p className="text-xs text-gray-500 mt-1">{formData.description.length}/2000 characters</p>
          </div>

          {/* Price & Currency */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="price">{t('listingForm.price', 'Price per Month')} *</Label>
              <Input
                id="price"
                type="number"
                value={formData.price}
                onChange={(e) => handleChange('price', e.target.value)}
                placeholder={t('listingForm.placeholderPrice', '1500')}
                className={errors.price ? 'border-red-500' : ''}
                data-testid="price-input"
              />
              {errors.price && <p className="text-sm text-red-600 mt-1">{errors.price}</p>}
            </div>
            <div>
              <Label htmlFor="currency">{t('listingForm.currency', 'Currency')}</Label>
              <select
                id="currency"
                value={formData.currency}
                onChange={(e) => {
                  setCurrencyLocked(true);
                  handleChange('currency', e.target.value);
                }}
                className="w-full h-10 border border-gray-200 rounded-lg px-3"
                data-testid="currency-input"
              >
                <option value="EUR">EUR</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">{t('listingForm.currencyHint', 'Auto-set to EUR; you can adjust.')}</p>
            </div>
          </div>

          {/* Country */}
          <div>
          <Label htmlFor="country">{t('listingForm.country', 'Country')} *</Label>
          <Select value={formData.country} onValueChange={(value) => handleChange('country', value)}>
            <SelectTrigger data-testid="country-select" className={errors.country ? 'border-red-500' : ''}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(ALLOWED_COUNTRIES).map(([code, { name }]) => (
                <SelectItem key={code} value={code}>{t(`countryNames.${code}`, name)}</SelectItem>
              ))}
            </SelectContent>
          </Select>
            {errors.country && <p className="text-sm text-red-600 mt-1">{errors.country}</p>}
          </div>

          {/* Address */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <Label htmlFor="address">{t('listingForm.address', 'Street Address')} *</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => handleChange('address', e.target.value)}
                placeholder={t('listingForm.placeholderAddress', '123 Main Street')}
                className={errors.address ? 'border-red-500' : ''}
                data-testid="address-input"
              />
              {errors.address && <p className="text-sm text-red-600 mt-1">{errors.address}</p>}
            </div>
            <div>
              <Label htmlFor="city">{t('listingForm.city', 'City')} *</Label>
              <Input
                id="city"
                value={formData.city}
                onChange={(e) => handleChange('city', e.target.value)}
                placeholder={t('listingForm.placeholderCity', 'London')}
                className={errors.city ? 'border-red-500' : ''}
                data-testid="city-input"
              />
              {errors.city && <p className="text-sm text-red-600 mt-1">{errors.city}</p>}
            </div>
            <div>
              <Label htmlFor="postcode">{t('listingForm.postcode', 'Postcode')}</Label>
              <Input
                id="postcode"
                value={formData.postcode}
                onChange={(e) => handleChange('postcode', e.target.value)}
                placeholder={t('listingForm.placeholderPostcode', 'Postal code')}
                data-testid="postcode-input"
              />
            </div>
          </div>

          {/* Property Details */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <Label htmlFor="bedrooms">{t('listingForm.bedrooms', 'Bedrooms')}</Label>
              <Input
                id="bedrooms"
                type="number"
                min="0"
                value={formData.bedrooms}
                onChange={(e) => handleChange('bedrooms', e.target.value)}
                data-testid="bedrooms-input"
              />
            </div>
            <div>
              <Label htmlFor="bathrooms">{t('listingForm.bathrooms', 'Bathrooms')}</Label>
              <Input
                id="bathrooms"
                type="number"
                min="0"
                value={formData.bathrooms}
                onChange={(e) => handleChange('bathrooms', e.target.value)}
                data-testid="bathrooms-input"
              />
            </div>
            <div>
              <Label htmlFor="size">{t('listingForm.size', 'Size (m²)')}</Label>
              <Input
                id="size"
                type="number"
                value={formData.size_m2}
                onChange={(e) => handleChange('size_m2', e.target.value)}
                data-testid="size-input"
              />
            </div>
            <div>
              <Label htmlFor="propertyType">{t('listingForm.propertyType', 'Type')}</Label>
              <Select value={formData.property_type} onValueChange={(value) => handleChange('property_type', value)}>
                <SelectTrigger data-testid="property-type-select">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="flat">{t('filters.flat', 'Flat')}</SelectItem>
                  <SelectItem value="house">{t('filters.house', 'House')}</SelectItem>
                  <SelectItem value="studio">{t('filters.studio', 'Studio')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Availability & Energy Rating */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="availability">{t('listingForm.availabilityDate', 'Available From')}</Label>
              <Input
                id="availability"
                type="date"
                value={formData.availability_date}
                onChange={(e) => handleChange('availability_date', e.target.value)}
                data-testid="availability-input"
              />
            </div>
            <div>
              <Label htmlFor="energy">{t('listingForm.energyRating', 'Energy Rating (EPC)')}</Label>
              <Select value={formData.energy_rating} onValueChange={(value) => handleChange('energy_rating', value)}>
                <SelectTrigger data-testid="energy-rating-select">
                  <SelectValue placeholder="Optional" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value=" ">None</SelectItem>
                  <SelectItem value="A">A</SelectItem>
                  <SelectItem value="B">B</SelectItem>
                  <SelectItem value="C">C</SelectItem>
                  <SelectItem value="D">D</SelectItem>
                  <SelectItem value="E">E</SelectItem>
                  <SelectItem value="F">F</SelectItem>
                  <SelectItem value="G">G</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Features */}
          <div>
            <Label className="mb-3 block">{t('listingForm.features', 'Features')}</Label>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="furnished"
                  checked={formData.furnished}
                  onCheckedChange={(checked) => handleChange('furnished', checked)}
                  data-testid="furnished-checkbox"
                />
                <label htmlFor="furnished" className="text-sm cursor-pointer">
                  {t('property.furnished', 'Furnished')}
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="pets"
                  checked={formData.pets_allowed}
                  onCheckedChange={(checked) => handleChange('pets_allowed', checked)}
                  data-testid="pets-checkbox"
                />
                <label htmlFor="pets" className="text-sm cursor-pointer">
                  {t('property.petsAllowed', 'Pets Allowed')}
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="parking"
                  checked={formData.parking}
                  onCheckedChange={(checked) => handleChange('parking', checked)}
                  data-testid="parking-checkbox"
                />
                <label htmlFor="parking" className="text-sm cursor-pointer">
                  {t('property.parking', 'Parking')}
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="balcony"
                  checked={formData.balcony_garden}
                  onCheckedChange={(checked) => handleChange('balcony_garden', checked)}
                  data-testid="balcony-checkbox"
                />
                <label htmlFor="balcony" className="text-sm cursor-pointer">
                  {t('property.balconyGarden', 'Balcony/Garden')}
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="student_friendly"
                  checked={formData.student_friendly}
                  onCheckedChange={(checked) => handleChange('student_friendly', checked)}
                  data-testid="student-checkbox"
                />
                <label htmlFor="student_friendly" className="text-sm cursor-pointer">
                  {t('listingForm.student', 'Student Friendly')}
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            {onCancel && (
              <Button type="button" variant="outline" onClick={onCancel} data-testid="cancel-button">
                {t('listingForm.cancel', 'Cancel')}
              </Button>
            )}
            <Button
              type="button"
              onClick={() => setActiveTab('media')}
              data-testid="next-button"
              className="bg-gradient-to-r from-purple-500 to-teal-500"
            >
              {t('listingForm.next', 'Next: Photos')}
            </Button>
          </div>
        </TabsContent>

        {/* Media Tab */}
        <TabsContent value="media" className="space-y-6">
          {/* Photos Upload */}
          <div>
            <Label className="mb-3 block">{t('listingForm.photos', 'Property Photos')} * (Max 15)</Label>
            <div
              {...photoDropzone.getRootProps()}
              className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${
                photoDropzone.isDragActive ? 'border-purple-500 bg-purple-50' : 'border-gray-300 hover:border-purple-400'
              }`}
              data-testid="photo-dropzone"
            >
              <input {...photoDropzone.getInputProps()} />
              <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <p className="text-sm text-gray-600 mb-1">
                {photoDropzone.isDragActive
                  ? t('listingForm.dropPhotos', 'Drop photos here')
                  : t('listingForm.uploadPhotos', 'Drag & drop photos or click to browse')}
              </p>
              <p className="text-xs text-gray-500">JPG, PNG, WEBP • Max 5MB each</p>
            </div>
            {errors.photos && <p className="text-sm text-red-600 mt-2">{errors.photos}</p>}

            {/* Photo Previews */}
            {photos.length > 0 && (
              <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mt-4">
                {photos.map((photo, index) => (
                  <div key={index} className="relative aspect-square rounded-lg overflow-hidden group">
                    <img src={photo.preview} alt={`Photo ${index + 1}`} className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => removePhoto(index)}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      data-testid={`remove-photo-${index}`}
                    >
                      <X className="w-4 h-4" />
                    </button>
                    {index === 0 && (
                      <div className="absolute bottom-0 left-0 right-0 bg-purple-600 text-white text-xs py-1 text-center">
                        Cover Photo
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Floorplan Upload */}
          <div>
            <Label className="mb-3 block">{t('listingForm.floorplan', 'Floorplan')} (Optional)</Label>
            <div
              {...floorplanDropzone.getRootProps()}
              className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-colors ${
                floorplanDropzone.isDragActive ? 'border-teal-500 bg-teal-50' : 'border-gray-300 hover:border-teal-400'
              }`}
              data-testid="floorplan-dropzone"
            >
              <input {...floorplanDropzone.getInputProps()} />
              <FileText className="w-10 h-10 mx-auto mb-3 text-gray-400" />
              <p className="text-sm text-gray-600">
                {floorplanDropzone.isDragActive
                  ? t('listingForm.dropFloorplan', 'Drop floorplan here')
                  : t('listingForm.addFloorplan', 'Add floorplan (PDF or image)')}
              </p>
            </div>

            {floorplan && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <FileText className="w-8 h-8 text-teal-600" />
                  <span className="text-sm">Floorplan uploaded</span>
                </div>
                <button
                  type="button"
                  onClick={() => setFloorplan(null)}
                  className="text-red-600 hover:text-red-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>

          <div className="flex justify-between pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setActiveTab('details')}
              data-testid="back-button"
            >
              {t('listingForm.back', 'Back')}
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting || publishDisabled}
              data-testid="submit-button"
              className="bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting
                ? t('listingForm.submitting', 'Saving...')
                : editingListing
                ? t('listingForm.update', 'Update Listing')
                : t('listingForm.create', 'Create Listing')}
            </Button>
          </div>
          {publishDisabled && (
            <p className="text-sm text-red-500 mt-2">
              You’ve reached your plan limit. Upgrade to publish more listings.
            </p>
          )}
        </TabsContent>
      </Tabs>
    </form>
  );
};

export default ListingForm;
