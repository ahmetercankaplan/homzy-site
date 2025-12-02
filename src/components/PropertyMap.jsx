import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { useNavigate } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';

// Fix leaflet icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const customIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const MapUpdater = ({ properties, selectedProperty }) => {
  const map = useMap();

  useEffect(() => {
    if (properties.length > 0) {
      const bounds = properties.map(p => [p.coordinates.lat, p.coordinates.lng]);
      if (bounds.length > 0) {
        map.fitBounds(bounds, { padding: [50, 50] });
      }
    }
  }, [properties, map]);

  useEffect(() => {
    if (selectedProperty) {
      map.setView([selectedProperty.coordinates.lat, selectedProperty.coordinates.lng], 15);
    }
  }, [selectedProperty, map]);

  return null;
};

const PropertyMap = ({ properties, selectedProperty }) => {
  const navigate = useNavigate();
  const defaultCenter = properties.length > 0 
    ? [properties[0].coordinates.lat, properties[0].coordinates.lng]
    : [51.5074, -0.1278];

  return (
    <MapContainer
      center={defaultCenter}
      zoom={12}
      style={{ height: '100%', width: '100%' }}
      data-testid="property-map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapUpdater properties={properties} selectedProperty={selectedProperty} />
      {properties.map((property) => (
        <Marker
          key={property.id}
          position={[property.coordinates.lat, property.coordinates.lng]}
          icon={selectedProperty?.id === property.id ? customIcon : new L.Icon.Default()}
        >
          <Popup>
            <div className="p-2" style={{ minWidth: '200px' }}>
              <img
                src={property.photos[0]}
                alt={property.title}
                className="w-full h-32 object-cover rounded mb-2"
              />
              <h3 className="font-bold text-sm mb-1">{property.title}</h3>
              <p className="text-xs text-gray-600 mb-2">{property.location}</p>
              <p className="font-bold text-purple-600">
                {new Intl.NumberFormat('en-GB', {
                  style: 'currency',
                  currency: property.currency,
                  minimumFractionDigits: 0
                }).format(property.price)}/mo
              </p>
              <button
                onClick={() => navigate(`/property/${property.id}`)}
                className="mt-2 w-full bg-purple-600 text-white text-xs py-1 rounded hover:bg-purple-700"
              >
                View Details
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default PropertyMap;