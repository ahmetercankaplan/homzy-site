import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Home, Building2, Bed, Tag, MapPin, SlidersHorizontal, Search } from 'lucide-react';
import FilterPanel from './FilterPanel';
import QuickChipsRow from './QuickChipsRow';
import { motion } from 'framer-motion';

const TopFilterBar = ({ onSearch, initialFilters = {} }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    deal_type: 'rent',
    property_type: '',
    bedrooms: '',
    min_price: '',
    max_price: '',
    location: '',
    ...initialFilters
  });
  const [locationInput, setLocationInput] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    // Sync with URL params
    const params = Object.fromEntries(searchParams);
    setFilters(prev => ({ ...prev, ...params }));
    setLocationInput(params.location || '');
  }, [searchParams]);

  const updateFilter = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    
    // Update URL params
    const params = new URLSearchParams();
    Object.entries(newFilters).forEach(([k, v]) => {
      if (v && v !== '') params.set(k, v);
    });
    setSearchParams(params);
    
    if (onSearch) onSearch(newFilters);
  };

  const handleSearch = () => {
    navigate(`/?${searchParams.toString()}`);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setLocationInput(value);
    // Debounce the filter update
    clearTimeout(window.locationDebounce);
    window.locationDebounce = setTimeout(() => {
      updateFilter('location', value);
    }, 500);
  };

  return (
    <div data-testid="top-filter-bar" className="space-y-4">
      {/* Main Filter Bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white/70 backdrop-blur-md rounded-2xl shadow-sm p-2 md:p-3"
      >
        <div className="flex flex-wrap lg:flex-nowrap items-center gap-2">
          {/* Deal Type */}
          <div className="w-full sm:w-auto min-w-[120px]">
            <Select value={filters.deal_type} onValueChange={(value) => updateFilter('deal_type', value)}>
              <SelectTrigger 
                data-testid="deal-type-select" 
                className="h-11 md:h-12 rounded-xl border-gray-200 hover:border-purple-300 transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <Tag className="w-4 h-4 text-purple-600" />
                  <SelectValue />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rent">{t('filterBar.rent', 'Rent')}</SelectItem>
                <SelectItem value="buy">{t('filterBar.buy', 'Buy')}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Property Type */}
          <div className="w-full sm:w-auto min-w-[140px]">
            <Select value={filters.property_type} onValueChange={(value) => updateFilter('property_type', value)}>
              <SelectTrigger 
                data-testid="property-type-filter" 
                className="h-11 md:h-12 rounded-xl border-gray-200 hover:border-purple-300 transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <Building2 className="w-4 h-4 text-teal-600" />
                  <SelectValue placeholder={t('filterBar.propertyType', 'Property Type')} />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value=" ">{t('filterBar.allTypes', 'All Types')}</SelectItem>
                <SelectItem value="flat">{t('filters.flat', 'Flat')}</SelectItem>
                <SelectItem value="house">{t('filters.house', 'House')}</SelectItem>
                <SelectItem value="studio">{t('filters.studio', 'Studio')}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Rooms */}
          <div className="w-full sm:w-auto min-w-[120px]">
            <Select value={filters.bedrooms?.toString()} onValueChange={(value) => updateFilter('bedrooms', value ? parseInt(value) : '')}>
              <SelectTrigger 
                data-testid="rooms-filter" 
                className="h-11 md:h-12 rounded-xl border-gray-200 hover:border-purple-300 transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <Bed className="w-4 h-4 text-purple-600" />
                  <SelectValue placeholder={t('filterBar.rooms', 'Rooms')} />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value=" ">{t('filterBar.anyRooms', 'Any')}</SelectItem>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Price Range */}
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <Input
              type="number"
              placeholder={t('filterBar.minPrice', 'Min')}
              value={filters.min_price}
              onChange={(e) => updateFilter('min_price', e.target.value)}
              onKeyPress={handleKeyPress}
              data-testid="min-price-filter"
              className="h-11 md:h-12 w-24 rounded-xl border-gray-200 hover:border-purple-300 transition-colors"
            />
            <span className="text-gray-400">-</span>
            <Input
              type="number"
              placeholder={t('filterBar.maxPrice', 'Max')}
              value={filters.max_price}
              onChange={(e) => updateFilter('max_price', e.target.value)}
              onKeyPress={handleKeyPress}
              data-testid="max-price-filter"
              className="h-11 md:h-12 w-24 rounded-xl border-gray-200 hover:border-purple-300 transition-colors"
            />
          </div>

          {/* Location */}
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="text"
                placeholder={t('filterBar.locationPlaceholder', 'City, postcode, address')}
                value={locationInput}
                onChange={handleLocationChange}
                onKeyPress={handleKeyPress}
                data-testid="location-filter"
                className="h-11 md:h-12 pl-10 rounded-xl border-gray-200 hover:border-purple-300 transition-colors"
              />
            </div>
          </div>

          {/* Filters Button */}
          <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                data-testid="filters-drawer-button"
                className="h-11 md:h-12 rounded-xl border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-colors whitespace-nowrap"
              >
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                {t('filterBar.filters', 'Filters')}
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[350px] overflow-y-auto">
              <SheetHeader>
                <SheetTitle>{t('filterBar.advancedFilters', 'Advanced Filters')}</SheetTitle>
              </SheetHeader>
              <div className="mt-6">
                <FilterPanel filters={filters} onFilterChange={(newFilters) => {
                  Object.entries(newFilters).forEach(([key, value]) => {
                    updateFilter(key, value);
                  });
                }} />
              </div>
            </SheetContent>
          </Sheet>

          {/* Search Button */}
          <Button
            onClick={handleSearch}
            data-testid="search-button"
            className="h-11 md:h-12 px-5 rounded-xl bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600 whitespace-nowrap font-semibold"
          >
            <Search className="w-4 h-4 mr-2" />
            {t('filterBar.search', 'Search')}
          </Button>
        </div>
      </motion.div>

      {/* Quick Category Chips */}
      <QuickChipsRow filters={filters} onFilterChange={updateFilter} />
    </div>
  );
};

export default TopFilterBar;