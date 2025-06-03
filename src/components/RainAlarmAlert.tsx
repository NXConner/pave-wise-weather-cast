
import React, { useState } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { CloudRain, Bell } from 'lucide-react';

const RainAlarmAlert = () => {
  const [isAlarmActive, setIsAlarmActive] = useState(false);
  
  // Mock rain approaching data
  const rainAlert = {
    isApproaching: true,
    eta: 32, // minutes
    intensity: 'moderate',
    duration: 90, // minutes
    confidence: 85
  };

  const toggleAlarm = () => {
    setIsAlarmActive(!isAlarmActive);
    if (!isAlarmActive) {
      // In real app, this would set up notifications/alarms
      console.log('Rain alarm activated');
    }
  };

  if (!rainAlert.isApproaching) return null;

  return (
    <div className="space-y-3">
      {/* Main Rain Alert */}
      <Alert className="border-orange-200 bg-orange-50">
        <CloudRain className="h-4 w-4 text-orange-600" />
        <AlertDescription className="flex justify-between items-center">
          <div className="text-orange-800">
            <div className="font-medium">⚠️ RAIN APPROACHING</div>
            <div className="text-sm mt-1">
              Moderate rain in {rainAlert.eta} minutes • Duration: ~{Math.floor(rainAlert.duration / 60)}h {rainAlert.duration % 60}m
            </div>
            <div className="text-xs mt-1">
              Confidence: {rainAlert.confidence}% • Stop outdoor work immediately
            </div>
          </div>
          <Button
            size="sm"
            variant={isAlarmActive ? "default" : "outline"}
            onClick={toggleAlarm}
            className="ml-4"
          >
            <Bell className="h-3 w-3 mr-1" />
            {isAlarmActive ? 'Alarm ON' : 'Set Alarm'}
          </Button>
        </AlertDescription>
      </Alert>

      {/* Rain Alarm Controls */}
      {isAlarmActive && (
        <Alert className="border-blue-200 bg-blue-50">
          <Bell className="h-4 w-4 text-blue-600" />
          <AlertDescription>
            <div className="text-blue-800">
              <div className="font-medium">🔔 Rain Alarm Active</div>
              <div className="text-sm mt-1">
                You'll receive notifications as rain approaches your location
              </div>
              <div className="flex space-x-2 mt-2">
                <span className="text-xs px-2 py-1 bg-blue-100 rounded">15 min warning</span>
                <span className="text-xs px-2 py-1 bg-blue-100 rounded">5 min warning</span>
                <span className="text-xs px-2 py-1 bg-blue-100 rounded">Rain starts</span>
              </div>
            </div>
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default RainAlarmAlert;
