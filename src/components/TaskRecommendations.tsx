
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, AlertCircle, CheckCircle } from 'lucide-react';

interface TaskRecommendationsProps {
  task: string;
}

const TaskRecommendations = ({ task }: TaskRecommendationsProps) => {
  const getRecommendations = (taskType: string) => {
    switch (taskType) {
      case 'sealcoating':
        return {
          title: 'Sealcoating Recommendations',
          conditions: [
            { text: 'Surface temperature: 72°F (Optimal: 50-85°F)', status: 'good' },
            { text: 'Air temperature: 68°F (Good for curing)', status: 'good' },
            { text: 'Humidity: 45% (Ideal: <50%)', status: 'good' },
            { text: 'Wind: 8 mph (Acceptable for spraying)', status: 'warning' }
          ],
          tips: [
            'Current conditions are excellent for sealcoating',
            'Ensure surface is completely clean and dry before application',
            'Monitor wind direction if using spray equipment',
            'Light rain expected in 45 minutes - plan accordingly'
          ]
        };
      case 'crack-filling':
        return {
          title: 'Crack Filling Recommendations',
          conditions: [
            { text: 'Air temperature: 68°F (Good for material flow)', status: 'good' },
            { text: 'Surface dryness: Verify no moisture in cracks', status: 'warning' },
            { text: 'Humidity: 45% (May slow curing slightly)', status: 'warning' }
          ],
          tips: [
            'Use compressed air to ensure cracks are debris-free',
            'Higher humidity may extend curing time - plan extra buffer',
            'Avoid filling if rain expected within 2 hours',
            'Consider crack routing for better adhesion in current conditions'
          ]
        };
      case 'patching':
        return {
          title: 'Patching Recommendations',
          conditions: [
            { text: 'Temperature: 68°F (Good for compaction)', status: 'good' },
            { text: 'Surface conditions: Dry and stable', status: 'good' },
            { text: 'No precipitation in forecast window', status: 'good' }
          ],
          tips: [
            'Excellent conditions for hot mix patching',
            'Ensure proper tack coat application if required',
            'Compact immediately while material is hot',
            'Cover open patches if rain becomes imminent'
          ]
        };
      case 'line-striping':
        return {
          title: 'Line Striping Recommendations',
          conditions: [
            { text: 'Surface moisture: Check for complete dryness', status: 'bad' },
            { text: 'Wind: 8 mph (May cause overspray)', status: 'warning' },
            { text: 'Temperature: 68°F (Good for paint adhesion)', status: 'good' }
          ],
          tips: [
            'CAUTION: Wind may affect line quality and cause overspray',
            'Use wind guards or consider postponing until calmer conditions',
            'Ensure pavement surface is bone dry - no visible moisture',
            'Check paint manufacturer specs for current temperature'
          ]
        };
      default:
        return {
          title: 'General Recommendations',
          conditions: [],
          tips: ['Select a specific task to see detailed recommendations']
        };
    }
  };

  const recommendations = getRecommendations(task);

  const StatusIcon = ({ status }: { status: string }) => {
    switch (status) {
      case 'good':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'warning':
        return <AlertCircle className="h-4 w-4 text-yellow-600" />;
      case 'bad':
        return <AlertCircle className="h-4 w-4 text-red-600" />;
      default:
        return <AlertCircle className="h-4 w-4 text-gray-400" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Lightbulb className="h-5 w-5 text-blue-600" />
          <span>{recommendations.title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {recommendations.conditions.length > 0 && (
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">Current Condition Assessment</h4>
            <div className="space-y-2">
              {recommendations.conditions.map((condition, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <StatusIcon status={condition.status} />
                  <span className="text-sm text-gray-700">{condition.text}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div>
          <h4 className="font-medium text-gray-900 mb-3">Recommendations & Tips</h4>
          <ul className="space-y-2">
            {recommendations.tips.map((tip, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-blue-600 mt-1">•</span>
                <span className="text-sm text-gray-700">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskRecommendations;
