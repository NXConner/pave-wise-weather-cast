
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Map } from 'lucide-react';

const LocationMap = () => {
  // Mock job site data
  const currentLocation = {
    name: "Current Location",
    address: "123 Main St, Springfield, IL",
    lat: 39.7817,
    lng: -89.6501,
    status: 'go'
  };

  const jobSites = [
    { id: 1, name: "Highway 67 Project", address: "Mile Marker 15, Route 67", status: 'go' },
    { id: 2, name: "Shopping Center Lot", address: "456 Commerce Dr", status: 'caution' },
    { id: 3, name: "School Parking Lot", address: "789 Education Blvd", status: 'no-go' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'go': return 'bg-green-500';
      case 'caution': return 'bg-yellow-500';
      case 'no-go': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Map className="h-5 w-5 text-blue-600" />
          <span>Job Site Locations</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Map Placeholder - In real app, integrate with Mapbox or Google Maps */}
        <div className="w-full h-48 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center mb-4">
          <div className="text-center text-gray-500">
            <Map className="h-8 w-8 mx-auto mb-2" />
            <p className="text-sm">Interactive Map Integration</p>
            <p className="text-xs">Shows current location & job sites</p>
          </div>
        </div>

        {/* Current Location */}
        <div className="mb-4">
          <div className="flex items-center space-x-2 mb-2">
            <MapPin className="h-4 w-4 text-blue-600" />
            <span className="font-medium text-gray-900">Current Location</span>
            <div className={`w-2 h-2 rounded-full ${getStatusColor(currentLocation.status)}`} />
          </div>
          <p className="text-sm text-gray-600 ml-6">{currentLocation.address}</p>
        </div>

        {/* Job Sites List */}
        <div>
          <h4 className="font-medium text-gray-900 mb-2">Saved Job Sites</h4>
          <div className="space-y-2">
            {jobSites.map((site) => (
              <div key={site.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${getStatusColor(site.status)}`} />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{site.name}</p>
                    <p className="text-xs text-gray-600">{site.address}</p>
                  </div>
                </div>
                <button className="text-xs text-blue-600 hover:text-blue-800">View</button>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LocationMap;
