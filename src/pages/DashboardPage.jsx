import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAuthStore } from '../store';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Button } from '../components/ui/button';
import { Plus, Edit, Trash2, Building2, Sparkles, Star } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import ListingForm from '../components/ListingForm';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '../components/ui/alert-dialog';
import { API_BASE_URL as API } from '../lib/api';

const DashboardPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('myListings');
  const [editingListing, setEditingListing] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
   const [usage, setUsage] = useState(null);
   const [plans, setPlans] = useState([]);
   const [loadingUsage, setLoadingUsage] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate('/');
      return;
    }
    fetchListings();
    fetchUsage();
    fetchPlans();
  }, [user, navigate]);

  const fetchListings = async () => {
    try {
      const res = await axios.get(`${API}/me/listings`);
      setListings(res.data);
    } catch (error) {
      console.error('Failed to fetch listings:', error);
      toast.error('Failed to load your listings');
    } finally {
      setLoading(false);
    }
  };

  const fetchUsage = async () => {
    try {
      const res = await axios.get(`${API}/me/usage`);
      setUsage(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingUsage(false);
    }
  };

  const fetchPlans = async () => {
    try {
      const res = await axios.get(`${API}/plans`);
      setPlans(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    if (!deletingId) return;
    try {
      await axios.delete(`${API}/listings/${deletingId}`);
      setListings(listings.filter(l => l.id !== deletingId));
      toast.success('Listing deleted successfully');
      setDeletingId(null);
    } catch (error) {
      toast.error('Failed to delete listing');
    }
  };

  const handleListingSuccess = () => {
    fetchListings();
    fetchUsage();
    setActiveTab('myListings');
    setEditingListing(null);
  };

  const handleBoost = async (listingId) => {
    try {
      const res = await axios.post(`${API}/paddle/checkout-session`, {
        purpose: 'addon',
        addon: 'boost',
        listing_id: listingId,
      });
      if (res.data.checkout_url) {
        window.location.href = res.data.checkout_url;
      } else {
        toast.success('Listing boosted for 7 days');
        fetchListings();
      }
    } catch (error) {
      toast.error(error.response?.data?.detail || 'Boost failed');
    }
  };

  const handleSpotlight = async (listingId) => {
    try {
      const res = await axios.post(`${API}/paddle/checkout-session`, {
        purpose: 'addon',
        addon: 'spotlight',
        listing_id: listingId,
      });
      if (res.data.checkout_url) {
        window.location.href = res.data.checkout_url;
      } else {
        toast.success('Listing spotlighted for 7 days');
        fetchListings();
      }
    } catch (error) {
      toast.error(error.response?.data?.detail || 'Spotlight failed');
    }
  };

  const handleUpgrade = async (slug) => {
    try {
      await axios.post(`${API}/plans/subscribe?plan_slug=${slug}`);
      toast.success('Plan updated. You can publish more listings now.');
      fetchUsage();
    } catch (error) {
      toast.error(error.response?.data?.detail || 'Upgrade failed');
    }
  };

  if (!user) return null;

  const limitReached = usage?.max_active_listings && usage?.active_listings >= usage?.max_active_listings;

  return (
    <div data-testid="dashboard-page" className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-teal-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-teal-400 rounded-xl flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <h1 data-testid="dashboard-title" className="text-4xl font-bold text-gray-900">My Dashboard</h1>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <p className="text-gray-600 text-lg">Manage your property listings</p>
            {usage && (
              <div className="bg-white shadow-sm rounded-xl px-4 py-3 border border-gray-100 flex items-center space-x-3">
                <div>
                  <p className="text-sm text-gray-500">Plan</p>
                  <p className="font-semibold text-gray-900">{usage.plan.name}</p>
                </div>
                <div className="h-10 w-px bg-gray-200" />
                <div>
                  <p className="text-sm text-gray-500">Active listings</p>
                  <p className="font-semibold text-gray-900">
                    {usage.active_listings} / {usage.max_active_listings === 0 ? '∞' : usage.max_active_listings}
                  </p>
                </div>
                <Button size="sm" variant="outline" onClick={() => navigate('/pricing')}>
                  Upgrade plan
                </Button>
              </div>
            )}
          </div>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
            <TabsTrigger value="myListings" data-testid="my-listings-tab">My Listings</TabsTrigger>
            <TabsTrigger value="addListing" data-testid="add-listing-tab">
              <Plus className="w-4 h-4 mr-2" />
              Add Listing
            </TabsTrigger>
          </TabsList>

          <TabsContent value="myListings">
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg animate-pulse">
                    <div className="aspect-square bg-gray-200"></div>
                    <div className="p-4 space-y-3">
                      <div className="h-6 bg-gray-200 rounded"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : listings.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                data-testid="no-listings-message"
                className="text-center py-20 bg-white rounded-2xl shadow-lg"
              >
                <Building2 className="w-24 h-24 text-gray-300 mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-gray-900 mb-3">No listings yet</h2>
                <p className="text-gray-600 mb-8">Create your first property listing to get started</p>
                <Button
                  onClick={() => setActiveTab('addListing')}
                  className="bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Your First Listing
                </Button>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
                {listings.map((listing, index) => (
                  <motion.div
                    key={listing.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative group"
                  >
                    <PropertyCard property={listing} />
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={(e) => {
                          e.stopPropagation();
                          setEditingListing(listing);
                          setActiveTab('addListing');
                        }}
                        data-testid={`edit-listing-${listing.id}`}
                        className="bg-white/95 backdrop-blur-sm shadow-lg"
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={(e) => {
                          e.stopPropagation();
                          setDeletingId(listing.id);
                        }}
                        data-testid={`delete-listing-${listing.id}`}
                        className="shadow-lg"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleBoost(listing.id);
                        }}
                        className="shadow-lg"
                      >
                        <Sparkles className="w-4 h-4 text-yellow-500" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSpotlight(listing.id);
                        }}
                        className="shadow-lg"
                      >
                        <Star className="w-4 h-4 text-purple-500" />
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="addListing">
            <ListingForm
              editingListing={editingListing}
              onSuccess={handleListingSuccess}
              publishDisabled={limitReached}
              usage={usage}
              onCancel={() => {
                setEditingListing(null);
                setActiveTab('myListings');
              }}
            />
          </TabsContent>
        </Tabs>
      </div>

      <AlertDialog open={!!deletingId} onOpenChange={() => setDeletingId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Listing</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this listing? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-red-600 hover:bg-red-700">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Footer />
    </div>
  );
};

export default DashboardPage;
