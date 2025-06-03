
import React, { useState } from 'react';
import { CloudRain, Thermometer, Wind, Droplets, Eye, Sun } from 'lucide-react';
import WeatherDashboard from '../components/WeatherDashboard';
import TaskSelector from '../components/TaskSelector';
import GoNoGoIndicator from '../components/GoNoGoIndicator';
import WeatherAlerts from '../components/WeatherAlerts';
import TaskRecommendations from '../components/TaskRecommendations';

const Index = () => {
  const [selectedTask, setSelectedTask] = useState('sealcoating');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <CloudRain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">PaveCast</h1>
                <p className="text-sm text-gray-600">Weather Intelligence for Asphalt Professionals</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Current Location</p>
              <p className="font-semibold text-gray-900">Job Site #1</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Weather Alerts */}
        <WeatherAlerts />

        {/* Task Selection */}
        <div className="mb-6">
          <TaskSelector selectedTask={selectedTask} onTaskChange={setSelectedTask} />
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Current Weather */}
          <div className="lg:col-span-2">
            <WeatherDashboard />
          </div>

          {/* Go/No-Go Indicator */}
          <div>
            <GoNoGoIndicator task={selectedTask} />
          </div>
        </div>

        {/* Task-Specific Recommendations */}
        <TaskRecommendations task={selectedTask} />
      </main>
    </div>
  );
};

export default Index;
