import React from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { X } from 'lucide-react';

const FilterPanel = ({ filters, onFilterChange }) => {
  const { t } = useTranslation();

  const handleChange = (key, value) => {
    onFilterChange({ [key]: value });
  };

  const handleClearAll = () => {
    onFilterChange({
      location: '',
      min_price: '',
      max_price: '',
      bedrooms: '',
      bathrooms: '',
      property_type: '',
      furnished: null,
      pets_allowed: null,
      parking: null,
      balcony_garden: null
    });
  };

  return (
    <div data-testid="filter-panel" className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">{t('filters.filters')}</h2>
        <Button variant="ghost" size="sm" onClick={handleClearAll} data-testid="clear-filters-button">
          <X className="w-4 h-4 mr-1" />
          {t('filters.clearAll')}
        </Button>
      </div>

      {/* Location */}
      <div>
        <Label htmlFor="location" className="mb-2 block font-semibold">{t('filters.location')}</Label>
        <Input
          id="location"
          type="text"
          placeholder="City, postcode..."
          value={filters.location || ''}
          onChange={(e) => handleChange('location', e.target.value)}
          data-testid="filter-location-input"
          className="border-2 border-gray-200 focus:border-purple-400"
        />
      </div>

      {/* Price Range */}
      <div>
        <Label className="mb-2 block font-semibold">{t('filters.priceRange')}</Label>
        <div className="grid grid-cols-2 gap-3">
          <Input
            type="number"
            placeholder={t('hero.minPrice')}
            value={filters.min_price || ''}
            onChange={(e) => handleChange('min_price', e.target.value)}
            data-testid="filter-min-price-input"
            className="border-2 border-gray-200 focus:border-purple-400"
          />
          <Input
            type="number"
            placeholder={t('hero.maxPrice')}
            value={filters.max_price || ''}
            onChange={(e) => handleChange('max_price', e.target.value)}
            data-testid="filter-max-price-input"
            className="border-2 border-gray-200 focus:border-purple-400"
          />
        </div>
      </div>

      {/* Property Type */}
      <div>
        <Label htmlFor="property-type" className="mb-2 block font-semibold">{t('filters.propertyType')}</Label>
        <Select value={filters.property_type || ''} onValueChange={(value) => handleChange('property_type', value)}>
          <SelectTrigger data-testid="filter-property-type-select" className="border-2 border-gray-200 focus:border-purple-400">
            <SelectValue placeholder="All types" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value=" ">All types</SelectItem>
            <SelectItem value="flat">{t('filters.flat')}</SelectItem>
            <SelectItem value="house">{t('filters.house')}</SelectItem>
            <SelectItem value="studio">{t('filters.studio')}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Bedrooms */}
      <div>
        <Label htmlFor="bedrooms" className="mb-2 block font-semibold">{t('hero.bedrooms')}</Label>
        <Select value={filters.bedrooms?.toString() || ''} onValueChange={(value) => handleChange('bedrooms', value ? parseInt(value) : '')}>
          <SelectTrigger data-testid="filter-bedrooms-select" className="border-2 border-gray-200 focus:border-purple-400">
            <SelectValue placeholder="Any" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value=" ">Any</SelectItem>
            <SelectItem value="1">1</SelectItem>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="3">3</SelectItem>
            <SelectItem value="4">4+</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Bathrooms */}
      <div>
        <Label htmlFor="bathrooms" className="mb-2 block font-semibold">Bathrooms</Label>
        <Select value={filters.bathrooms?.toString() || ''} onValueChange={(value) => handleChange('bathrooms', value ? parseInt(value) : '')}>
          <SelectTrigger data-testid="filter-bathrooms-select" className="border-2 border-gray-200 focus:border-purple-400">
            <SelectValue placeholder="Any" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value=" ">Any</SelectItem>
            <SelectItem value="1">1</SelectItem>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="3">3+</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Features */}
      <div className="space-y-3">
        <Label className="font-semibold">Features</Label>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="furnished"
              checked={filters.furnished === true}
              onCheckedChange={(checked) => handleChange('furnished', checked ? true : null)}
              data-testid="filter-furnished-checkbox"
            />
            <label htmlFor="furnished" className="text-sm cursor-pointer">
              {t('filters.furnished')}
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="pets"
              checked={filters.pets_allowed === true}
              onCheckedChange={(checked) => handleChange('pets_allowed', checked ? true : null)}
              data-testid="filter-pets-checkbox"
            />
            <label htmlFor="pets" className="text-sm cursor-pointer">
              {t('filters.petsAllowed')}
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="parking"
              checked={filters.parking === true}
              onCheckedChange={(checked) => handleChange('parking', checked ? true : null)}
              data-testid="filter-parking-checkbox"
            />
            <label htmlFor="parking" className="text-sm cursor-pointer">
              {t('filters.parking')}
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="balcony"
              checked={filters.balcony_garden === true}
              onCheckedChange={(checked) => handleChange('balcony_garden', checked ? true : null)}
              data-testid="filter-balcony-checkbox"
            />
            <label htmlFor="balcony" className="text-sm cursor-pointer">
              {t('filters.balconyGarden')}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;