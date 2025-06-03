
import React from 'react';
import { Thermometer, Droplets, Wind, Eye, Sun, CloudRain } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WeatherDashboard = () => {
  // Mock weather data - in a real app, this would come from a weather API
  const weatherData = {
    airTemp: 68,
    surfaceTemp: 72,
    humidity: 45,
    windSpeed: 8,
    windDirection: 'NW',
    dewPoint: 48,
    uvIndex: 6,
    precipitation: 0,
    visibility: 10
  };

  const WeatherCard = ({ icon: Icon, title, value, unit, status }: {
    icon: any;
    title: string;
    value: number | string;
    unit: string;
    status?: 'good' | 'warning' | 'bad';
  }) => (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <Icon className="h-5 w-5 text-blue-600" />
          <span className="text-sm font-medium text-gray-600">{title}</span>
        </div>
        {status && (
          <div className={`w-3 h-3 rounded-full ${
            status === 'good' ? 'bg-green-500' : 
            status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
          }`} />
        )}
      </div>
      <div className="flex items-baseline space-x-1">
        <span className="text-2xl font-bold text-gray-900">{value}</span>
        <span className="text-sm text-gray-500">{unit}</span>
      </div>
    </div>
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Sun className="h-5 w-5 text-blue-600" />
          <span>Current Conditions</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <WeatherCard
            icon={Thermometer}
            title="Air Temp"
            value={weatherData.airTemp}
            unit="°F"
            status="good"
          />
          <WeatherCard
            icon={Thermometer}
            title="Surface Temp"
            value={weatherData.surfaceTemp}
            unit="°F"
            status="good"
          />
          <WeatherCard
            icon={Droplets}
            title="Humidity"
            value={weatherData.humidity}
            unit="%"
            status="good"
          />
          <WeatherCard
            icon={Wind}
            title="Wind"
            value={`${weatherData.windSpeed} ${weatherData.windDirection}`}
            unit="mph"
            status="warning"
          />
          <WeatherCard
            icon={Eye}
            title="Dew Point"
            value={weatherData.dewPoint}
            unit="°F"
            status="good"
          />
          <WeatherCard
            icon={Sun}
            title="UV Index"
            value={weatherData.uvIndex}
            unit=""
            status="warning"
          />
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-center space-x-2 mb-2">
            <CloudRain className="h-5 w-5 text-blue-600" />
            <span className="font-medium text-blue-900">Precipitation Status</span>
          </div>
          <p className="text-blue-800">Clear skies - No precipitation detected in the next 2 hours</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherDashboard;
