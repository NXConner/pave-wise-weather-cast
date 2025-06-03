
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CloudRain, Cloud, Sun } from 'lucide-react';

const ExtendedPrecipitationForecast = () => {
  // Mock 24-hour precipitation data - in real app, this would come from weather API
  const hourlyForecast = [
    { time: '12PM', chance: 0, type: 'clear' },
    { time: '1PM', chance: 5, type: 'clear' },
    { time: '2PM', chance: 15, type: 'cloudy' },
    { time: '3PM', chance: 25, type: 'cloudy' },
    { time: '4PM', chance: 45, type: 'light-rain' },
    { time: '5PM', chance: 65, type: 'rain' },
    { time: '6PM', chance: 80, type: 'rain' },
    { time: '7PM', chance: 70, type: 'rain' },
    { time: '8PM', chance: 45, type: 'light-rain' },
    { time: '9PM', chance: 20, type: 'cloudy' },
    { time: '10PM', chance: 10, type: 'clear' },
    { time: '11PM', chance: 5, type: 'clear' },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'rain':
      case 'light-rain':
        return CloudRain;
      case 'cloudy':
        return Cloud;
      default:
        return Sun;
    }
  };

  const getIconColor = (chance: number) => {
    if (chance >= 60) return 'text-blue-600';
    if (chance >= 30) return 'text-gray-500';
    return 'text-yellow-500';
  };

  const nextRainEvent = hourlyForecast.find(hour => hour.chance >= 40);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <CloudRain className="h-5 w-5 text-blue-600" />
          <span>24-Hour Precipitation Outlook</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Next Rain Alert */}
        {nextRainEvent ? (
          <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center space-x-2 mb-1">
              <CloudRain className="h-4 w-4 text-blue-600" />
              <span className="font-medium text-blue-900">Next Expected Rain</span>
            </div>
            <p className="text-blue-800">
              {nextRainEvent.chance}% chance at {nextRainEvent.time} today
            </p>
          </div>
        ) : (
          <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center space-x-2 mb-1">
              <Sun className="h-4 w-4 text-green-600" />
              <span className="font-medium text-green-900">Clear Conditions</span>
            </div>
            <p className="text-green-800">No significant rain expected in next 24 hours</p>
          </div>
        )}

        {/* Hourly Forecast Grid */}
        <div className="grid grid-cols-6 md:grid-cols-12 gap-2">
          {hourlyForecast.map((hour, index) => {
            const Icon = getIcon(hour.type);
            return (
              <div key={index} className="text-center">
                <div className="text-xs text-gray-600 mb-1">{hour.time}</div>
                <Icon className={`h-4 w-4 mx-auto mb-1 ${getIconColor(hour.chance)}`} />
                <div className="text-xs font-medium">{hour.chance}%</div>
              </div>
            );
          })}
        </div>

        {/* Rain Intensity Legend */}
        <div className="mt-4 pt-3 border-t border-gray-200">
          <div className="flex items-center justify-between text-xs text-gray-600">
            <span>Chance of Rain:</span>
            <div className="flex space-x-4">
              <span>0-30% Low</span>
              <span>30-60% Moderate</span>
              <span>60%+ High</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExtendedPrecipitationForecast;
