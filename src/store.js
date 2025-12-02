import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      logout: () => set({ user: null })
    }),
    {
      name: 'homzy-auth'
    }
  )
);

export const usePropertyStore = create((set) => ({
  properties: [],
  filters: {
    location: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    propertyType: '',
    furnished: null,
    petsAllowed: null,
    parking: null,
    balconyGarden: null
  },
  setProperties: (properties) => set({ properties }),
  setFilters: (filters) => set((state) => ({ filters: { ...state.filters, ...filters } })),
  clearFilters: () => set({
    filters: {
      location: '',
      minPrice: '',
      maxPrice: '',
      bedrooms: '',
      propertyType: '',
      furnished: null,
      petsAllowed: null,
      parking: null,
      balconyGarden: null
    }
  })
}));

export const useFavoritesStore = create((set) => ({
  favorites: [],
  setFavorites: (favorites) => set({ favorites }),
  addFavorite: (property) => set((state) => ({ favorites: [...state.favorites, property] })),
  removeFavorite: (propertyId) => set((state) => ({
    favorites: state.favorites.filter(p => p.id !== propertyId)
  }))
}));