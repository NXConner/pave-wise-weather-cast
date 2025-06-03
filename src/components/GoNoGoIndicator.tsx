
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

interface GoNoGoIndicatorProps {
  task: string;
}

const GoNoGoIndicator = ({ task }: GoNoGoIndicatorProps) => {
  // Mock conditions based on task - in real app, this would be calculated from weather data
  const getTaskStatus = (taskType: string) => {
    switch (taskType) {
      case 'sealcoating':
        return { status: 'go', confidence: 85 };
      case 'crack-filling':
        return { status: 'caution', confidence: 70 };
      case 'patching':
        return { status: 'go', confidence: 90 };
      case 'line-striping':
        return { status: 'no-go', confidence: 95 };
      default:
        return { status: 'go', confidence: 80 };
    }
  };

  const taskStatus = getTaskStatus(task);
  
  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'go':
        return {
          color: 'green',
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200',
          textColor: 'text-green-800',
          icon: CheckCircle,
          title: 'GO',
          message: 'Conditions are favorable for this task'
        };
      case 'caution':
        return {
          color: 'yellow',
          bgColor: 'bg-yellow-50',
          borderColor: 'border-yellow-200',
          textColor: 'text-yellow-800',
          icon: AlertTriangle,
          title: 'CAUTION',
          message: 'Proceed with care - monitor conditions closely'
        };
      case 'no-go':
        return {
          color: 'red',
          bgColor: 'bg-red-50',
          borderColor: 'border-red-200',
          textColor: 'text-red-800',
          icon: XCircle,
          title: 'NO-GO',
          message: 'Conditions not suitable - postpone this task'
        };
      default:
        return {
          color: 'gray',
          bgColor: 'bg-gray-50',
          borderColor: 'border-gray-200',
          textColor: 'text-gray-800',
          icon: AlertTriangle,
          title: 'UNKNOWN',
          message: 'Unable to determine conditions'
        };
    }
  };

  const config = getStatusConfig(taskStatus.status);
  const Icon = config.icon;

  return (
    <Card className={`${config.bgColor} ${config.borderColor} border-2`}>
      <CardHeader className="text-center pb-2">
        <CardTitle className="flex items-center justify-center space-x-2">
          <Icon className={`h-6 w-6 text-${config.color}-600`} />
          <span className={config.textColor}>Go/No-Go Status</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-${config.color}-100 mb-4`}>
          <span className={`text-3xl font-bold text-${config.color}-700`}>
            {config.title}
          </span>
        </div>
        <p className={`${config.textColor} font-medium mb-2`}>
          {config.message}
        </p>
        <div className="mt-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-gray-600">Confidence</span>
            <span className="text-sm font-medium text-gray-900">{taskStatus.confidence}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full bg-${config.color}-500`}
              style={{ width: `${taskStatus.confidence}%` }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GoNoGoIndicator;
