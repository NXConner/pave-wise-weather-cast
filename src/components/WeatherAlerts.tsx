
import React from 'react';
import { AlertTriangle, CloudRain, Wind } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const WeatherAlerts = () => {
  // Mock alerts - in real app, these would be dynamically generated
  const alerts = [
    {
      id: 1,
      type: 'rain',
      severity: 'warning',
      icon: CloudRain,
      message: 'Light rain expected in 45 minutes. Consider covering fresh work.',
      time: '2:45 PM'
    },
    {
      id: 2,
      type: 'wind',
      severity: 'info',
      icon: Wind,
      message: 'Wind speeds increasing to 12 mph - may affect line striping quality.',
      time: '3:00 PM'
    }
  ];

  if (alerts.length === 0) return null;

  return (
    <div className="mb-6 space-y-3">
      {alerts.map((alert) => {
        const Icon = alert.icon;
        return (
          <Alert key={alert.id} className={`${
            alert.severity === 'warning' ? 'border-yellow-200 bg-yellow-50' : 'border-blue-200 bg-blue-50'
          }`}>
            <Icon className={`h-4 w-4 ${
              alert.severity === 'warning' ? 'text-yellow-600' : 'text-blue-600'
            }`} />
            <AlertDescription className="flex justify-between items-center">
              <span className={alert.severity === 'warning' ? 'text-yellow-800' : 'text-blue-800'}>
                {alert.message}
              </span>
              <span className="text-xs text-gray-500 ml-4">ETA: {alert.time}</span>
            </AlertDescription>
          </Alert>
        );
      })}
    </div>
  );
};

export default WeatherAlerts;
