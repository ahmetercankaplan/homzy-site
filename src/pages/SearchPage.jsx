import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PropertyCard from '../components/PropertyCard';
import PropertyMap from '../components/PropertyMap';
import TopFilterBar from '../components/TopFilterBar';
import { Map, Grid3x3, List } from 'lucide-react';
import { Button } from '../components/ui/button';
import { motion } from 'framer-motion';
import { API_BASE_URL as API } from '../lib/api';

const SearchPage = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({});
  const [viewMode, setViewMode] = useState('grid'); // 'grid', 'list', 'map'
  const [selectedProperty, setSelectedProperty] = useState(null);

  useEffect(() => {
    const location = searchParams.get('location');
    if (location) {
      setFilters(prev => ({ ...prev, location }));
    }
  }, [searchParams]);

  useEffect(() => {
    fetchProperties();
  }, [filters]);

  const fetchProperties = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== null && value !== undefined && value !== '') {
          params.append(key, value);
        }
      });
      const res = await axios.get(`${API}/properties?${params.toString()}`);
      setProperties(res.data);
    } catch (error) {
      console.error('Failed to fetch properties:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  return (
    <div data-testid="home-page" className="min-h-screen bg-white">
      <Navbar />

      {/* Sticky Filter Bar */}
      <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <TopFilterBar onSearch={handleFilterChange} initialFilters={filters} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <div className="mb-6 flex items-center justify-between">
              <h1 data-testid="search-results-count" className="text-2xl font-bold text-gray-900">
                {loading ? 'Loading...' : `${properties.length} ${properties.length === 1 ? 'Property' : 'Properties'} Found`}
              </h1>
              <div className="flex items-center space-x-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  onClick={() => setViewMode('grid')}
                  data-testid="grid-view-button-desktop"
                  size="sm"
                  className="h-9 px-3"
                >
                  <Grid3x3 className="w-4 h-4 mr-1.5" />
                  <span className="hidden sm:inline">Grid</span>
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  onClick={() => setViewMode('list')}
                  data-testid="list-view-button-desktop"
                  size="sm"
                  className="h-9 px-3"
                >
                  <List className="w-4 h-4 mr-1.5" />
                  <span className="hidden sm:inline">List</span>
                </Button>
                <Button
                  variant={viewMode === 'map' ? 'default' : 'outline'}
                  onClick={() => setViewMode('map')}
                  data-testid="map-view-button-desktop"
                  size="sm"
                  className="h-9 px-3"
                >
                  <Map className="w-4 h-4 mr-1.5" />
                  <span className="hidden sm:inline">Map</span>
                </Button>
              </div>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg animate-pulse">
                    <div className="h-56 bg-gray-200"></div>
                    <div className="p-5 space-y-3">
                      <div className="h-6 bg-gray-200 rounded"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="flex space-x-4">
                        <div className="h-4 bg-gray-200 rounded w-16"></div>
                        <div className="h-4 bg-gray-200 rounded w-16"></div>
                        <div className="h-4 bg-gray-200 rounded w-16"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : viewMode === 'map' ? (
              <div className="h-[600px] rounded-2xl overflow-hidden shadow-lg">
                <PropertyMap
                  properties={properties}
                  selectedProperty={selectedProperty}
                />
              </div>
            ) : (
              <div className={viewMode === 'list' ? 'space-y-6' : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6'}>
                {properties.length === 0 ? (
                  <div data-testid="no-properties-message" className="text-center py-20 col-span-full">
                    <p className="text-gray-500 text-lg">No properties found. Try adjusting your filters.</p>
                  </div>
                ) : (
                  properties.map((property, index) => (
                    <motion.div
                      key={property.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      onMouseEnter={() => setSelectedProperty(property)}
                      onMouseLeave={() => setSelectedProperty(null)}
                    >
                      <PropertyCard property={property} />
                    </motion.div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SearchPage;
